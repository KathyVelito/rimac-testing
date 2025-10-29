import HeaderTopBar from "@/design-system/organisms/header-top-bar/HeaderTopBar";
import FooterLegal from "@/design-system/organisms/footer-legal/FooterLegal";
import HeroPanel from "@/design-system/organisms/hero-panel/HeroPanel";
import familiaImage from "@/assets/familia.png";

type Props = {
  form: React.ReactNode; // el organismo QuoteForm (o temporalmente un placeholder)
  showHeroOnMobile?: boolean; // por defecto false: solo desktop
};

export default function LandingTemplate({
  form,
  showHeroOnMobile = false,
}: Props) {
  return (
    <div className="min-h-dvh bg-[color:var(--bg-page,#F6F7FB)] relative">
      {/* Gradientes de fondo (izq morado, der aqua) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,66,255,0.35)_0%,_transparent_70%)] blur-[10px]" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,233,201,0.3)_0%,_transparent_70%)] blur-[8px]" />
      </div>

      <HeaderTopBar />

      {/* Contenedor con grilla: 12 cols desktop, 4 cols mobile */}
      <main className="relative z-10 mx-auto w-full max-w-[1200px] min-h-[calc(100dvh-160px)] flex items-center justify-center py-5 box-border px-6 md:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 md:grid-cols-12 md:gap-x-6 lg:gap-x-8 items-start">
          {/* IZQUIERDA: Hero (hidden en mobile por defecto) */}
          <section
            className={[
              "col-span-4 md:col-span-6",
              showHeroOnMobile ? "" : "hidden md:block",
            ].join(" ")}
          >
            <HeroPanel imageSrc={familiaImage} alt="Familia feliz" />
          </section>

          {/* DERECHA: Formulario */}
          <section className="col-span-4 md:col-span-6 md:pl-2 lg:pl-6">
            {/* Etiqueta verde */}
            <div className="mb-4 inline-flex rounded-full bg-[#D7F9E9] px-3 py-1 text-xs font-semibold text-[#0B7A4B]">
              Seguro Salud Flexible
            </div>

            <h1 className="mb-3 text-3xl font-extrabold leading-tight md:text-[40px]">
              Creado para ti y tu familia
            </h1>
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
