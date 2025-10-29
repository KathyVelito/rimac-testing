import { type ChangeEvent, type SelectHTMLAttributes, forwardRef } from "react";

type RimacSelectProps = {
  id?: string;
  name?: string;
  label?: string;
  value: string;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  error?: string | boolean;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  children: React.ReactNode;
  selectProps?: Omit<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange" | "id" | "name" | "required" | "disabled">;
};

const RimacSelect = forwardRef<HTMLSelectElement, RimacSelectProps>(
  (
    {
      id,
      name,
      label,
      value,
      disabled,
      required,
      helperText,
      error,
      onChange,
      className,
      children,
      selectProps,
    },
    ref
  ) => {
    const hasError = Boolean(error);

    return (
      <div className={`w-full ${className ?? ""}`}>
        <div
          className={
            `${label ? "flex flex-col gap-[8px] px-[16px] py-[8px]" : "flex items-center h-[66px] px-[16px]"} ` +
            `rounded-l-[8px] rounded-r-none border box-border w-full ` +
            `${hasError ? "border-[#F7052D]" : "border-[#5E6488]"} ` +
            `${disabled ? "opacity-60" : ""} ` +
            `bg-[#F8F9FF]`
          }
        >
          {label && (
            <span className="text-[12px] leading-[16px] text-[#5E6488]">
              {label}
              {required ? <span className="text-[#F7052D]"> *</span> : null}
            </span>
          )}

          <div className="relative flex w-full items-center">
            <select
              ref={ref}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              disabled={disabled}
              required={required}
              className="w-full bg-transparent text-[16px] leading-[24px] text-[#03050F] outline-none appearance-none cursor-pointer pr-[28px]"
              {...selectProps}
            >
              {children}
            </select>

            <div className="absolute right-[16px] pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#5E6488"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {(helperText || hasError) && (
          <span
            className={`mt-1 block text-[12px] leading-[16px] ${
              hasError ? "text-[#F7052D]" : "text-[#5E6488]"
            }`}
          >
            {typeof error === "string" && error ? error : helperText}
          </span>
        )}
      </div>
    );
  }
);

export default RimacSelect;
