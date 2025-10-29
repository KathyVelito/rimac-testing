import { forwardRef } from "react";

type RimacSummaryCardProps = {
  fullName: string;
  documentLabel: string;
  phoneLabel: string;
  planName: string;
  planCost: string;
  className?: string;
};

const RimacSummaryCard = forwardRef<HTMLDivElement, RimacSummaryCardProps>(
  (
    { fullName, documentLabel, phoneLabel, planName, planCost, className },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`bg-white rounded-[24px] shadow-[0px_1px_24px_0px_rgba(174,172,243,0.25)] p-8 w-full ${
          className ?? ""
        }`}
      >
        {/* Encabezado */}
        <div className="flex flex-col gap-2 w-full">
          <p className="text-[10px] leading-4 font-black uppercase tracking-[0.8px] text-[#7981B2]">
            Precios calculados para:
          </p>
          <div className="flex items-center gap-2">
            {/* Icono familia simple */}
            <div className="w-6 h-6 rounded-full bg-[#EDEFFC] grid place-items-center">
              <span className="text-[#4F4FFF] text-sm">👨‍👩‍👧</span>
            </div>
            <p className="text-[20px] leading-7 font-bold text-[#141938]">
              {fullName}
            </p>
          </div>
          <div className="h-px w-full bg-[#E4E6F1] mt-3" />
        </div>

        {/* Datos */}
        <div className="mt-4 grid grid-cols-1 gap-6">
          <div>
            <p className="text-[16px] leading-6 font-bold text-[#141938]">
              Responsable de pago
            </p>
            <p className="text-[14px] leading-6 text-[#141938]">{documentLabel}</p>
            <p className="text-[14px] leading-6 text-[#141938]">{phoneLabel}</p>
          </div>

          <div>
            <p className="text-[16px] leading-6 font-bold text-[#141938]">
              Plan elegido
            </p>
            <p className="text-[14px] leading-6 text-[#141938]">{planName}</p>
            <p className="text-[14px] leading-6 text-[#141938]">{planCost}</p>
          </div>
        </div>
      </div>
    );
  }
);

RimacSummaryCard.displayName = "RimacSummaryCard";

export default RimacSummaryCard;


