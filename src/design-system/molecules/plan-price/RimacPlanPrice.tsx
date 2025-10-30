import { forwardRef } from "react";
import RimacHomeIcon from "@/design-system/atoms/RimacHomeIcon";

type RimacPlanPriceProps = {
  planName: string;
  price: string;
  period: string;
  className?: string;
};

const RimacPlanPrice = forwardRef<HTMLDivElement, RimacPlanPriceProps>(
  ({ planName, price, period, className }, ref) => {
    return (
      <div ref={ref} className={`flex gap-4 items-start w-full ${className ?? ""}`}>
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-black text-[24px] leading-[32px] text-[#141938] tracking-[-0.2px]">
            {planName}
          </h2>
          
          <div className="flex flex-col gap-1">
            <p className="font-black text-[12px] leading-[16px] text-[#7981B2] tracking-[0.6px] uppercase">
              Costo del plan
            </p>
            <p className="font-black text-[20px] leading-[28px] text-[#141938] tracking-[-0.2px]">
              {price} {period}
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <RimacHomeIcon size="md" />
        </div>
      </div>
    );
  }
);

RimacPlanPrice.displayName = "RimacPlanPrice";

export default RimacPlanPrice;
