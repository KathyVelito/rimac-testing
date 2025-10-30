import { type ChangeEvent, type InputHTMLAttributes, forwardRef } from "react";

type RimacCheckboxProps = {
  id?: string;
  name?: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  checkboxProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "checked" | "onChange" | "id" | "name" | "required" | "disabled" | "type">;
  helperText?: string;
  error?: string | boolean;
};

const RimacCheckbox = forwardRef<HTMLInputElement, RimacCheckboxProps>(
  (
    {
      id,
      name,
      checked,
      onChange,
      disabled,
      required,
      children,
      className,
      checkboxProps,
      helperText,
      error,
    },
    ref
  ) => {
    const hasError = Boolean(error);
    return (
      <label className={`flex flex-col gap-[6px] cursor-pointer ${disabled ? "opacity-60" : ""} ${className ?? ""}`}>
        <div className="flex gap-[12px] items-center">
          <div className="relative flex-shrink-0">
            <input
              ref={ref}
              id={id}
              name={name}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              disabled={disabled}
              required={required}
              className="sr-only"
              {...checkboxProps}
            />
            
            {/* Checkbox visual */}
            <div className={`
              w-4 h-4 rounded-[4px] border-2 flex items-center justify-center transition-colors
              ${checked 
                ? "bg-[#0A051E] border-[#0A051E]" 
                : hasError ? "bg-white border-[#F7052D]" : "bg-white border-[#9CA3AF]"
              }
              ${disabled ? "opacity-60" : ""}
            `}>
              {checked && (
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M8.5 1L3.5 6L1.5 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          
          {/* Texto del checkbox */}
          <div className={`flex-1 text-[12px] leading-[20px] tracking-[0.1px] ${disabled ? "text-[#9CA3AF]" : "text-[#0A051E]"}`}>
            {children}
            {required ? <span className="text-[#F7052D]"> *</span> : null}
          </div>
        </div>

        {(helperText || hasError) && (
          <span
            className={`text-[12px] leading-[16px] ${hasError ? "text-[#F7052D]" : "text-[#5E6488]"}`}
          >
            {typeof error === "string" && error ? error : helperText}
          </span>
        )}
      </label>
    );
  }
);

export default RimacCheckbox;
