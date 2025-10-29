type Props = { imageSrc: string; alt?: string };

export default function HeroPanel({ imageSrc, alt }: Props) {
  return (
    <div className="rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
      <img src={imageSrc} alt={alt ?? "Hero"} className="block w-full h-auto" />
    </div>
  );
}
