import { forwardRef } from "react";
import RimacRadioButton from "@/design-system/atoms/RimacRadioButton";
import RimacProtectionIcon from "@/design-system/atoms/RimacProtectionIcon";
import RimacAddUserIcon from "@/design-system/atoms/RimacAddUserIcon";

type RimacPlanCardProps = {
  title: string;
  description: string;
  icon?: "protection" | "addUser";
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};

const RimacPlanCard = forwardRef<HTMLDivElement, RimacPlanCardProps>(
  ({ title, description, icon = "protection", checked = false, onChange, className }, ref) => {
    return (
      <div 
        ref={ref}
        className={`bg-white rounded-[24px] shadow-[0px_1px_32px_0px_rgba(174,172,243,0.35)] p-6 relative w-full cursor-pointer transition-all ${
          checked 
            ? "border-[3px] border-solid border-[#03050F]" 
            : "border-[3px] border-solid border-transparent"
        } ${className ?? ""}`}
        onClick={() => onChange?.(!checked)}
      >
        <div className="absolute top-4 right-4">
          <RimacRadioButton
            checked={checked}
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center md:items-start gap-5 md:gap-2 md:flex-col w-full">
            {icon === "protection" ? (
              <RimacProtectionIcon size="md" className="w-8 h-8 md:w-12 md:h-12" />
            ) : (
              <RimacAddUserIcon size="md" className="w-8 h-8 md:w-12 md:h-12" />
            )}
            <h3 className="font-black text-[20px] leading-[28px] text-[#141938] tracking-[-0.2px] flex-1">
              {title}
            </h3>
          </div>

          <div>
            <p className="font-normal text-[12px] leading-[20px] text-[#141938] tracking-[0.2px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

RimacPlanCard.displayName = "RimacPlanCard";

export default RimacPlanCard;
