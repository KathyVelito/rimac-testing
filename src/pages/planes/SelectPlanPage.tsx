import MainLayout from "@/design-system/templates/main/MainLayout";
import RimacStepper from "@/design-system/organisms/stepper/RimacStepper";
import RimacPlanCard from "@/design-system/molecules/plan-card/RimacPlanCard";
import RimacPlanDetail from "@/design-system/organisms/plan-detail/RimacPlanDetail";
import RimacSlider from "@/design-system/organisms/slider/RimacSlider";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useUserStore } from "@/store/userStore";
import { usePlanStore } from "@/store/planStore";
import axios from "axios";

export default function SelectPlanPage() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<
    "individual" | "family" | null
  >(null);
  const user = useUserStore((s) => s.user);
  const { plans, setPlans, setLoading, setError } = usePlanStore();
  
  const userAge = useMemo(() => {
    const birth = user?.birthDay; // formato esperado DD-MM-YYYY
    if (!birth) return null;
    const [dd, mm, yyyy] = birth.split("-");
    const b = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
    if (isNaN(b.getTime())) return null;
    const now = new Date();
    let age = now.getFullYear() - b.getFullYear();
    const m = now.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
    return age;
  }, [user?.birthDay]);

  useEffect((): void => {
    if (plans.length > 0) return;
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const endpoint = (import.meta as unknown as { env?: { VITE_API_PLANS_URL?: string } }).env?.VITE_API_PLANS_URL;
        const url = endpoint && endpoint.length > 0
          ? endpoint
          : "https://rimac-front-end-challenge.netlify.app/api/plans.json";
        const { data } = await axios.get(url);
        setPlans(Array.isArray(data?.list) ? data.list : []);
      } catch (e: unknown) {
        const message = axios.isAxiosError(e)
          ? e.response?.data?.message || e.message
          : "Error de red";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [plans.length, setPlans, setLoading, setError]);

  const displayedPlans = useMemo(() => {
    const base = plans; // mostrar todos
    const filtered = typeof userAge === "number" ? base.filter((p) => p.age >= userAge) : base;
    if (selectedPlan === "family") {
      return filtered.map((p) => ({
        ...p,
        price: Math.round(p.price * 0.95 * 100) / 100,
      }));
    }
    return filtered;
  }, [plans, selectedPlan, userAge]);
  
  const steps = [
    {
      step: 1,
      label: "Planes y coberturas",
      isActive: true,
      isCompleted: false,
    },
    {
      step: 2,
      label: "Resumen",
      isActive: false,
      isCompleted: false,
    },
  ];

  const handleBack = () => {
    navigate("/");
  };

  const handlePlanSelect = (planType: "individual" | "family") => {
    setSelectedPlan(planType);
  };

  const handleSelectPlan = () => {
    navigate("/resumen");
  };

  return (
    <MainLayout>
      <RimacStepper steps={steps} onBack={handleBack} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6 md:gap-8">
          <section className="col-span-4 md:col-span-6 md:col-start-4 mt-10">
            <h1 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] font-bold tracking-[-0.6px] text-[#141938] text-center md:px-30">
              {`${user?.name ?? ""} ¿Para quién deseas cotizar?`.trim()}
            </h1>
            <p className="mt-2 text-[16px] leading-[28px] font-normal tracking-[0.1px] text-[#141938] text-center">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </section>

          <section className="col-span-4 md:col-span-6 md:col-start-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <RimacPlanCard
                title="Para mí"
                description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                icon="protection"
                checked={selectedPlan === "individual"}
                onChange={() => handlePlanSelect("individual")}
              />

              <RimacPlanCard
                title="Para alguien más"
                description="Realiza una cotización para uno de tus familiares o cualquier persona."
                icon="addUser"
                checked={selectedPlan === "family"}
                onChange={() => handlePlanSelect("family")}
              />
            </div>
          </section>

          {selectedPlan && (
            <section className="col-span-4 md:col-span-10 md:col-start-2">

              <RimacSlider>
                {displayedPlans.map((plan, idx) => (
                  <RimacPlanDetail
                    key={`${plan.name}-${idx}`}
                    planName={plan.name}
                    price={`$${plan.price}`}
                    period="al mes"
                    features={plan.description.slice(0, 3).map((desc, i) => ({
                      id: `${idx}-${i}`,
                      content: (
                        <>
                          <span className="font-normal">{desc}</span>
                        </>
                      ),
                    }))}
                    onSelectPlan={handleSelectPlan}
                  />
                ))}
              </RimacSlider>
            </section>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
