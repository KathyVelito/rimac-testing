import { forwardRef, type HTMLAttributes } from "react";

type RimacTagProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
  size?: "sm" | "md";
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "className" | "children">;

const RimacTag = forwardRef<HTMLDivElement, RimacTagProps>(
  ({ children, variant = "default", size = "md", className, ...rest }, ref) => {
    const baseClasses = [
      "inline-flex items-center gap-1",
      "font-bold text-[#03050F]",
      "rounded-[4px]",
      "overflow-hidden",
    ];

    const variantClasses = {
      default: "bg-[linear-gradient(86deg,#00F4E2_0%,#00FF7F_100%)] text-[#03050F]",
      success: "bg-[#D7F9E9] text-[#0B7A4B]",
      warning: "bg-[#FEF3C7] text-[#92400E]",
      error: "bg-[#FEE2E2] text-[#991B1B]",
    };

    const sizeClasses = {
      sm: "px-2 py-1 text-xs leading-4",
      md: "px-2 py-1 text-sm leading-4",
    };

    const classes = [
      ...baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classes} {...rest}>
        {children}
      </div>
    );
  }
);

export default RimacTag;
