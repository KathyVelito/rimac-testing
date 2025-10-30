import { forwardRef } from "react";

type RimacTagRecommendedProps = {
  className?: string;
  children?: React.ReactNode;
};

const RimacTagRecommended = forwardRef<HTMLDivElement, RimacTagRecommendedProps>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={`inline-flex items-center px-3 py-1 rounded-full bg-[linear-gradient(86deg,#00F4E2_0%,#00FF7F_100%)] text-[#03050F] font-bold text-xs leading-4 tracking-[0.2px] ${className ?? ""}`}
      >
        {children ?? "Recomendado"}
      </div>
    );
  }
);

RimacTagRecommended.displayName = "RimacTagRecommended";

export default RimacTagRecommended;
