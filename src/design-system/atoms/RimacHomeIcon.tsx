import { forwardRef } from "react";

type RimacHomeIconProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const RimacHomeIcon = forwardRef<HTMLDivElement, RimacHomeIconProps>(
  ({ size = "md", className }, ref) => {
    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-14 h-14",
      lg: "w-16 h-16"
    };

    return (
      <div ref={ref} className={`${sizeClasses[size]} ${className ?? ""}`}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Casa base */}
          <path
            d="M28 4L8 20V48C8 50.2091 9.79086 52 12 52H44C46.2091 52 48 50.2091 48 48V20L28 4Z"
            stroke="#4F4FFF"
            strokeWidth="2"
            fill="none"
          />
          {/* Techo */}
          <path
            d="M8 20L28 4L48 20"
            stroke="#4F4FFF"
            strokeWidth="2"
            fill="none"
          />
          {/* Puerta */}
          <rect
            x="24"
            y="36"
            width="8"
            height="12"
            stroke="#4F4FFF"
            strokeWidth="2"
            fill="none"
          />
          {/* Ventana */}
          <rect
            x="18"
            y="24"
            width="6"
            height="6"
            stroke="#4F4FFF"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="32"
            y="24"
            width="6"
            height="6"
            stroke="#4F4FFF"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    );
  }
);

RimacHomeIcon.displayName = "RimacHomeIcon";

export default RimacHomeIcon;
