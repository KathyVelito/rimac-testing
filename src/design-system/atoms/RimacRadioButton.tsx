import { forwardRef, type InputHTMLAttributes } from "react";

type RimacRadioButtonProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "onChange" | "className">;

const RimacRadioButton = forwardRef<HTMLInputElement, RimacRadioButtonProps>(
  ({ checked = false, onChange, className, ...rest }, ref) => {
    return (
      <label className={`relative inline-flex items-center cursor-pointer ${className ?? ""}`}>
        <input
          ref={ref}
          type="radio"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only"
          {...rest}
        />
        <div className={`relative w-6 h-6 rounded-full border-2 transition-colors ${
          checked 
            ? "border-[#389E0D] bg-[#389E0D]" 
            : "border-[#4F4FFF] bg-white"
        }`}>
          {checked && (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Check verde */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" 
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
      </label>
    );
  }
);

RimacRadioButton.displayName = "RimacRadioButton";

export default RimacRadioButton;
