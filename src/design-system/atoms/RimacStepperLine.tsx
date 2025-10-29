import { forwardRef } from "react";

type RimacStepperLineProps = {
  isCompleted: boolean;
  className?: string;
};

const RimacStepperLine = forwardRef<HTMLDivElement, RimacStepperLineProps>(
  ({ isCompleted, className }, ref) => {
    return (
      <div ref={ref} className={`flex flex-col md:flex-col gap-[10px] h-6 items-center justify-center px-0 py-3 relative shrink-0 ${className ?? ""}`}>
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-8">
          <div className={`absolute bottom-0 left-0 right-0 top-[-2px] h-0.5 ${isCompleted ? "bg-[#4F4FFF]" : "bg-[#7981B2]"}`} />
        </div>
      </div>
    );
  }
);

RimacStepperLine.displayName = "RimacStepperLine";

export default RimacStepperLine;
