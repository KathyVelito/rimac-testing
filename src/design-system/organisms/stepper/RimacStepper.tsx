import { forwardRef } from "react";
import RimacStepperStep from "@/design-system/atoms/RimacStepperStep";
import RimacStepperLine from "@/design-system/atoms/RimacStepperLine";
import RimacBackButton from "@/design-system/atoms/RimacBackButton";

type StepperStep = {
  step: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
};

type RimacStepperProps = {
  steps: StepperStep[];
  className?: string;
  showBackButton?: boolean;
  onBack?: () => void;
};

const RimacStepper = forwardRef<HTMLDivElement, RimacStepperProps>(
  ({ steps, className, showBackButton = true, onBack }, ref) => {
    const totalSteps = steps.length;
    const activeIndex = Math.max(
      0,
      steps.findIndex((s) => s.isActive)
    );
    const completedCount = steps.filter((s) => s.isCompleted).length;
    const currentStep = activeIndex !== -1 ? activeIndex + 1 : Math.min(completedCount + 1, totalSteps);
    const progressPercent = Math.max(0, Math.min(100, Math.round((currentStep - 1) / (totalSteps - 1 || 1) * 100)));

    return (
      <div 
        ref={ref} 
        className={`bg-[#EDEFFC] box-border flex items-center justify-center px-6 py-4 md:px-0 md:py-4 relative w-full ${className ?? ""}`}
      >
        {/* Mobile: Barra de progreso con botón atrás y leyenda */}
        <div className="md:hidden flex items-center gap-4 w-full">
          {showBackButton && (
            <RimacBackButton onClick={onBack} />
          )}
          <span className="text-[#141938] font-black tracking-[0.2px] text-[10px] leading-4 uppercase">
            PASO {currentStep} DE {totalSteps}
          </span>
          <div className="flex-1 h-[6px] rounded-full bg-[#D7DBF5] overflow-hidden">
            <div
              className="h-full bg-[#4F4FFF] rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Desktop: Layout horizontal original */}
        <div className="hidden md:flex box-border gap-4 items-start pl-0 pr-4 py-0 relative shrink-0">
          {steps.map((step, index) => (
            <div key={step.step} className="flex items-start">
              <RimacStepperStep
                step={step.step}
                label={step.label}
                isActive={step.isActive}
                isCompleted={step.isCompleted}
              />
              {index < steps.length - 1 && (
                <RimacStepperLine 
                  isCompleted={step.isCompleted} 
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

RimacStepper.displayName = "RimacStepper";

export default RimacStepper;
