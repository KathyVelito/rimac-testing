import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type EmblaLike = {
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  on: (evt: string, cb: () => void) => void;
} | null;

type SliderOptions = Partial<{
  loop: boolean;
  align: "start" | "center" | "end";
  containScroll: string;
}>;

type RimacSliderProps = {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  options?: SliderOptions;
};

export default function RimacSlider({ children, className, options }: RimacSliderProps) {
  const mergedOptions: SliderOptions = { loop: false, align: "start", containScroll: "trimSnaps", ...options };
  const [emblaRef, emblaApiRaw] = useEmblaCarousel(mergedOptions as unknown as object);
  const emblaApi = emblaApiRaw as EmblaLike;
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className={`px-3 md:px-6 ${className ?? ""}`}>
      <div className="relative">
        <div className="overflow-x-hidden overflow-y-visible py-3 md:py-6" ref={emblaRef}>
          <div className="flex gap-x-6">
            {Array.isArray(children) ? children.map((child, idx) => (
              <div
                key={idx}
                className="min-w-0 grow-0 shrink-0 basis-full md:[flex-basis:calc((100%-48px)/3)]"
              >
                {child}
              </div>
            )) : (
              <div className="min-w-0 grow-0 shrink-0 basis-full md:[flex-basis:calc((100%-48px)/3)]">{children}</div>
            )}
          </div>
        </div>

        {/* Controles mobile superpuestos */}
        <div className="absolute inset-0 flex items-center justify-between md:hidden pointer-events-none">
          <button
            type="button"
            aria-label="Anterior"
            className={`ml-1 pointer-events-auto inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 shadow border border-[#E4E6F1] text-[#4F4FFF] ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#4F4FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            className={`mr-1 pointer-events-auto inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 shadow border border-[#E4E6F1] text-[#4F4FFF] ${!canScrollNext ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#4F4FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Controles desktop */}
        <div className="hidden md:flex items-center justify-between mt-4">
          <button
            type="button"
            aria-label="Anterior"
            className={`px-3 py-2 rounded border border-[#D7DBF5] text-[#4F4FFF] ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            Anterior
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            className={`px-3 py-2 rounded border border-[#D7DBF5] text-[#4F4FFF] ${!canScrollNext ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
