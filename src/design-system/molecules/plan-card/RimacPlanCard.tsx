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
          <div className="hidden md:flex flex-col gap-2 w-full">
            {icon === "protection" ? (
              <RimacProtectionIcon size="md" />
            ) : (
              <RimacAddUserIcon size="md" />
            )}
            <h3 className="font-black text-[20px] leading-[28px] text-[#141938] tracking-[-0.2px]">
              {title}
            </h3>
            <p className="font-normal text-[12px] leading-[20px] text-[#141938] tracking-[0.2px]">
              {description}
            </p>
          </div>

          <div className="md:hidden flex gap-2 items-center w-full">
            {icon === "protection" ? (
              <RimacProtectionIcon size="sm" />
            ) : (
              <RimacAddUserIcon size="sm" />
            )}
            <h3 className="font-black text-[20px] leading-[28px] text-[#141938] tracking-[-0.2px] flex-1">
              {title}
            </h3>
          </div>

          <div className="md:hidden">
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
