import RimacLogo from "@/design-system/atoms/RimacLogo";

export default function FooterLegal() {
  return (
    <footer className="mt-0 bg-[#03050F] md:bg-[#0E0E0E] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-8 md:px-4 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Logo */}
        <div className="w-[138px] h-5 md:w-auto md:h-auto">
          <RimacLogo variant="white" />
        </div>
        
        {/* Separador decorativo - solo en mobile */}
        <div className="w-[336px] h-px bg-white/20 md:hidden"></div>
        
        {/* Texto de copyright */}
        <p className="text-xs md:text-sm text-white md:opacity-75 text-center md:text-right font-normal tracking-[0.1px] leading-5">
          © 2023 RIMAC Seguros y Reaseguros.
        </p>
      </div>
    </footer>
  );
}
