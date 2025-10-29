type Props = { imageSrc: string; alt?: string };

export default function HeroPanel({ imageSrc, alt }: Props) {
  return (
    <div className="relative w-full h-[195px] md:h-auto">
      {/* Imagen principal - visible en ambos */}
      <div className="rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] w-full h-full">
        <img
          src={imageSrc}
          alt={alt ?? "Hero"}
          className="block w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Imágenes superpuestas solo para mobile */}
      <div className="md:hidden absolute right-0 top-0 w-[157px] h-[195px] flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Imagen de fondo con máscara */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imageSrc})`,
              maskImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2IiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDEzNiAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMzYiIGhlaWdodD0iMTYwIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K')`,
              maskSize: '136px 160px',
              maskPosition: '17px 8px',
              maskRepeat: 'no-repeat'
            }}
          />
        </div>
      </div>
    </div>
  );
}
