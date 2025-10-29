import { forwardRef, type ButtonHTMLAttributes } from "react";

type RimacBackButtonProps = {
  onClick?: () => void;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "className">;

const RimacBackButton = forwardRef<HTMLButtonElement, RimacBackButtonProps>(
  ({ onClick, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`flex gap-2 items-center text-[#4F4FFF] hover:opacity-80 transition-opacity ${className ?? ""}`}
        {...rest}
      >
        {/* Ícono de flecha hacia arriba rotada 90 grados */}
        <div className="flex items-center justify-center w-5 h-5">
          <div className="relative w-5 h-5">
            <div className="absolute inset-0 rounded-full border border-[#4F4FFF]" />
            <div className="absolute inset-1 flex items-center justify-center">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-90"
              >
                <path 
                  d="M9 18L15 12L9 6" 
                  stroke="#4F4FFF" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <span className="font-bold text-[18px] leading-[20px] tracking-[0.4px]">
          Volver
        </span>
      </button>
    );
  }
);

RimacBackButton.displayName = "RimacBackButton";

export default RimacBackButton;
