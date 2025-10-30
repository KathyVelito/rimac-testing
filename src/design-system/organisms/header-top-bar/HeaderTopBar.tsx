import RimacLogo from "@/design-system/atoms/RimacLogo";
import RimacPhoneLink from "@/design-system/atoms/RimacPhoneLink";
import { Link } from "react-router-dom";

export default function HeaderTopBar() {
  return (
    <header className="w-full">
      <div className="mx-auto w-full max-w-[1200px] h-[56px] md:h-[120px] box-border px-6 py-1 md:px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" aria-label="Ir al inicio">
            <RimacLogo />
          </Link>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <p className="hidden md:block font-semibold text-[12px] leading-[16px] text-[#03050F] tracking-[0.2px]">
            ¡Compra por este medio!
          </p>
          <RimacPhoneLink phone="(01) 411 6001" />
        </div>
      </div>
    </header>
  );
}
