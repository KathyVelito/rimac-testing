import { forwardRef } from "react";

type RimacStepperLineProps = {
  isCompleted: boolean;
  progressPercent?: number;
  className?: string;
};

const RimacStepperLine = forwardRef<HTMLDivElement, RimacStepperLineProps>(
  ({ isCompleted, progressPercent = 0, className }, ref) => {
    return (
      <div ref={ref} className={`flex flex-col md:flex-col h-6 items-center justify-center px-0 py-3 relative shrink-0 ${className ?? ""}`}>
        <div className="hidden ml-5 md:flex items-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className={`inline-block w-1.5 h-1.5 rounded-full ${isCompleted ? "bg-[#4F4FFF]" : "bg-[#4F4FFF]"}`}
            />
          ))}
        </div>
        <div className="md:hidden basis-0 grow min-h-px min-w-px relative shrink-0 w-8">
          <div className="absolute bottom-0 left-0 right-0 top-[-2px] h-0.5 bg-[#D7DBF5] rounded-full" />
          <div
            className="absolute bottom-0 left-0 top-[-2px] h-0.5 bg-[#4F4FFF] rounded-full"
            style={{ width: `${Math.max(0, Math.min(100, progressPercent))}%` }}
          />
        </div>
      </div>
    );
  }
);

RimacStepperLine.displayName = "RimacStepperLine";

export default RimacStepperLine;
