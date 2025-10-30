import { forwardRef } from "react";
import RimacPlanPrice from "@/design-system/molecules/plan-price/RimacPlanPrice";
import RimacPlanFeature from "@/design-system/molecules/plan-feature/RimacPlanFeature";
import RimacButton from "@/design-system/atoms/RimacButton";
import RimacTagRecommended from "@/design-system/atoms/RimacTagRecommended";

type PlanFeature = {
  id: string;
  content: React.ReactNode;
};

type RimacPlanDetailProps = {
  planName: string;
  price: string;
  period: string;
  features: PlanFeature[];
  iconType?: "home" | "hospital";
  recommended?: boolean;
  onSelectPlan?: () => void;
  className?: string;
};

const RimacPlanDetail = forwardRef<HTMLDivElement, RimacPlanDetailProps>(
  ({ planName, price, period, features, iconType = "home", recommended = false, onSelectPlan, className }, ref) => {
    return (
      <div 
        ref={ref}
        className={`bg-white rounded-[24px] shadow-[0px_1px_24px_0px_rgba(174,172,243,0.25)] p-8 w-full h-full flex flex-col ${className ?? ""}`}
      >
        <div className="flex flex-col gap-4 w-full">
          {recommended && (
            <div>
              <RimacTagRecommended>Recomendado</RimacTagRecommended>
            </div>
          )}
          <RimacPlanPrice
            planName={planName}
            price={price}
            period={period}
            iconType={iconType}
          />
          
          <div className="h-px bg-[#E4E6F1] w-full" />
        </div>

        <div className="mt-6 flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-6">
            <ul className="flex flex-col gap-6">
              {features.map((feature) => (
                <RimacPlanFeature key={feature.id}>
                  {feature.content}
                </RimacPlanFeature>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-6 flex justify-center">
            <RimacButton
              intent="primary"
              className="w-[240px]"
              onClick={onSelectPlan}
            >
              Seleccionar Plan
            </RimacButton>
          </div>
        </div>
      </div>
    );
  }
);

RimacPlanDetail.displayName = "RimacPlanDetail";

export default RimacPlanDetail;
