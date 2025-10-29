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
        className={`leading-[28px] text-[16px] text-[#141938] tracking-[0.1px] ${className ?? ""}`}
      >
        {children}
      </li>
    );
  }
);

RimacPlanFeature.displayName = "RimacPlanFeature";

export default RimacPlanFeature;
