import HeaderTopBar from "@/design-system/organisms/header-top-bar/HeaderTopBar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-dvh bg-[#F6F7FB]">
      <HeaderTopBar />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
