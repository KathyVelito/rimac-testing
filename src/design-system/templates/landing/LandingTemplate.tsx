import HeaderTopBar from "@/design-system/organisms/header-top-bar/HeaderTopBar";
import FooterLegal from "@/design-system/organisms/footer-legal/FooterLegal";
import HeroPanel from "@/design-system/organisms/hero-panel/HeroPanel";
import RimacTag from "@/design-system/atoms/RimacTag";
import familiaImage from "@/assets/familia.png";

type Props = {
  form: React.ReactNode;
};

export default function LandingTemplate({
  form,
}: Props) {
  return (
    <div className="min-h-dvh bg-[color:var(--bg-page,#F6F7FB)] relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,66,255,0.35)_0%,_transparent_70%)] blur-[10px]" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,233,201,0.3)_0%,_transparent_70%)] blur-[8px]" />
      </div>

      <HeaderTopBar />

      <main className="relative z-10 mx-auto w-full max-w-[1200px] min-h-[calc(100dvh-172px)] md:min-h-[calc(100dvh-236px)] flex items-center justify-center py-5 box-border px-6 md:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 md:grid-cols-12 md:gap-x-6 lg:gap-x-8 items-start">
          <section className="hidden md:block md:col-span-6">
            <HeroPanel imageSrc={familiaImage} alt="Familia feliz" />
          </section>

          <section className="col-span-4 md:col-span-6 md:pl-2 lg:pl-6">
            <div className="hidden md:block">
              <div className="mb-4">
                <RimacTag variant="default" size="md">Seguro Salud Flexible</RimacTag>
              </div>
              <h1 className="mb-3 text-3xl font-extrabold leading-tight md:text-[40px]">
                Creado para ti y tu familia
              </h1>
            </div>

            <div className="md:hidden flex gap-3 items-center mb-6">
              <div className="flex-1">
                <div className="mb-2">
                  <RimacTag variant="default" size="md">Seguro Salud Flexible</RimacTag>
                </div>
                <h1 className="text-[28px] leading-[36px] font-extrabold text-[#03050F]">
                  Creado para ti y tu familia
                </h1>
              </div>
              <div className=" flex-shrink-0">
                <HeroPanel imageSrc={familiaImage} alt="Familia feliz" />
              </div>
            </div>

            <p className="mb-6 text-sm text-[#5E5E5E] max-w-full md:max-w-[38ch] border-t border-[#CCD1EE] pt-6 md:border-none">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>

            {form}
          </section>
        </div>
      </main>

      <FooterLegal />
    </div>
  );
}
