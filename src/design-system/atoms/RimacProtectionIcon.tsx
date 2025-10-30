import { forwardRef } from "react";

type RimacProtectionIconProps = {
  size?: "sm" | "md";
  className?: string;
};

const RimacProtectionIcon = forwardRef<HTMLDivElement, RimacProtectionIconProps>(
  ({ size = "md", className }, ref) => {
    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-12 h-12"
    };

    return (
      <div ref={ref} className={`${sizeClasses[size]} ${className ?? ""}`}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4L8 8V20C8 28.5 12.5 36.5 24 44C35.5 36.5 40 28.5 40 20V8L24 4Z"
            stroke="#4F4FFF"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M24 16C26.2091 16 28 17.7909 28 20C28 22.2091 26.2091 24 24 24C21.7909 24 20 22.2091 20 20C20 17.7909 21.7909 16 24 16Z"
            fill="url(#personGradient)"
          />
          <path
            d="M16 32C16 28.6863 18.6863 26 22 26H26C29.3137 26 32 28.6863 32 32V36H16V32Z"
            fill="url(#personGradient)"
          />
          <defs>
            <linearGradient id="personGradient" x1="16" y1="16" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF0080"/>
              <stop offset="1" stopColor="#8000FF"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
);

RimacProtectionIcon.displayName = "RimacProtectionIcon";

export default RimacProtectionIcon;
