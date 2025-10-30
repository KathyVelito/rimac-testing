import { type ChangeEvent, type InputHTMLAttributes, forwardRef } from "react";

type RimacTextFieldProps = {
  id?: string;
  name?: string;
  label?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  error?: string | boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  roundedLeft?: boolean;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "id" | "name" | "placeholder" | "required" | "disabled">;
};

const RimacTextField = forwardRef<HTMLInputElement, RimacTextFieldProps>(
  (
    {
      id,
      name,
      label,
      value,
      placeholder,
      disabled,
      required,
      helperText,
      error,
      onChange,
      className,
      roundedLeft = true,
      inputProps,
    },
    ref
  ) => {
    const hasError = Boolean(error);

    return (
      <div className={`w-full ${className ?? ""}`}>
        <div
          className={
            `flex flex-col gap-[8px] ${roundedLeft ? "rounded-[8px]" : "rounded-l-none rounded-r-[8px]"} border box-border w-full ` +
            `${hasError ? "border-[#F7052D]" : "border-[#5E6488]"} ` +
            `${disabled ? "opacity-60" : ""} ` +
            `bg-[#F8F9FF] px-[16px] py-[8px]`
          }
        >
          {label && (
            <span className="text-[12px] leading-[16px] text-[#5E6488]">
              {label}
              {required ? <span className="text-[#F7052D]"> *</span> : null}
            </span>
          )}
          
          <input
            ref={ref}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className="w-full bg-transparent text-[16px] leading-[24px] text-[#03050F] outline-none placeholder:text-[#5E6488]"
            {...inputProps}
          />
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

export default RimacTextField;


