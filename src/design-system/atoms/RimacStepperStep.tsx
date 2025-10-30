import { forwardRef } from "react";

type RimacStepperStepProps = {
  step: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
  className?: string;
};

const RimacStepperStep = forwardRef<HTMLDivElement, RimacStepperStepProps>(
  ({ step, label, isActive, isCompleted, className }, ref) => {
    const getStepStyles = () => {
      if (isCompleted) {
        return {
          circle: "bg-[#4F4FFF]",
          text: "text-white",
          label: "text-[#141938] font-bold"
        };
      } else if (isActive) {
        return {
          circle: "bg-[#4F4FFF]",
          text: "text-white",
          label: "text-[#141938] font-bold"
        };
      } else {
        return {
          circle: "bg-[#7981B2]",
          text: "text-white",
          label: "text-[#7981B2] font-normal"
        };
      }
    };

    const styles = getStepStyles();

    return (
      <div ref={ref} className={`flex gap-2 md:gap-4 items-center md:items-start ${className ?? ""}`}>
        <div className="relative shrink-0 w-6 h-6">
          <div className={`absolute inset-0 rounded-full ${styles.circle}`} />
          <p className={`absolute inset-0 flex items-center justify-center font-bold text-[12px] leading-[16px] tracking-[0.4px] ${styles.text}`}>
            {step}
          </p>
        </div>
        <p className={`leading-[16px] md:leading-[24px] text-[12px] md:text-[16px] tracking-[0.2px] whitespace-nowrap ${styles.label}`}>
          {label}
        </p>
      </div>
    );
  }
);

RimacStepperStep.displayName = "RimacStepperStep";

export default RimacStepperStep;
