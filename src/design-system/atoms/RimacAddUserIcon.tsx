import { forwardRef } from "react";

type RimacAddUserIconProps = {
  size?: "sm" | "md";
  className?: string;
};

const RimacAddUserIcon = forwardRef<HTMLDivElement, RimacAddUserIconProps>(
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
          {/* Círculo exterior */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="#4F4FFF"
            strokeWidth="2"
            fill="none"
          />
          {/* Usuario base */}
          <circle
            cx="24"
            cy="18"
            r="6"
            fill="url(#userGradient)"
          />
          <path
            d="M12 36C12 30.4772 16.4772 26 22 26H26C31.5228 26 36 30.4772 36 36V40H12V36Z"
            fill="url(#userGradient)"
          />
          {/* Símbolo de más */}
          <path
            d="M32 16H30V14C30 13.4477 29.5523 13 29 13C28.4477 13 28 13.4477 28 14V16H26C25.4477 16 25 16.4477 25 17C25 17.5523 25.4477 18 26 18H28V20C28 20.5523 28.4477 21 29 21C29.5523 21 30 20.5523 30 20V18H32C32.5523 18 33 17.5523 33 17C33 16.4477 32.5523 16 32 16Z"
            fill="url(#userGradient)"
          />
          <defs>
            <linearGradient id="userGradient" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF0080"/>
              <stop offset="1" stopColor="#8000FF"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
);

RimacAddUserIcon.displayName = "RimacAddUserIcon";

export default RimacAddUserIcon;
