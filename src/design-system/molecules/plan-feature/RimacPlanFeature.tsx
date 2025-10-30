import { forwardRef } from "react";

type RimacPlanFeatureProps = {
  children: React.ReactNode;
  className?: string;
};

const RimacPlanFeature = forwardRef<HTMLLIElement, RimacPlanFeatureProps>(
  ({ children, className }, ref) => {
    return (
      <li 
        ref={ref}
        className={`flex items-start gap-3 ${className ?? ""}`}
      >
        <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-[#141938] flex-shrink-0" />
        <span className="leading-[28px] text-[16px] text-[#141938] tracking-[0.1px] font-normal">
          {children}
        </span>
      </li>
    );
  }
);

RimacPlanFeature.displayName = "RimacPlanFeature";

export default RimacPlanFeature;
