import MainLayout from "@/design-system/templates/main/MainLayout";
import RimacStepper from "@/design-system/organisms/stepper/RimacStepper";
import RimacSummaryCard from "@/design-system/organisms/summary/RimacSummaryCard";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import { useLoginFormStore } from "@/store/loginFormStore";
import { usePlanStore } from "@/store/planStore";

export default function SummaryPage() {
  const navigate = useNavigate();
  const user = useUserStore((s) => s.user);
  const documentNumber = useLoginFormStore((s) => s.documentNumber);
  const documentType = useLoginFormStore((s) => s.documentType);
  const phone = useLoginFormStore((s) => s.phone);
  const selectedPlan = usePlanStore((s) => s.selectedPlan);
  
  const steps = [
    {
      step: 1,
      label: "Planes y coberturas",
      isActive: false,
      isCompleted: true
    },
    {
      step: 2,
      label: "Resumen",
      isActive: true,
      isCompleted: false
    }
  ];

  const handleBack = () => {
    navigate("/planes");
  };

  const fullName = user ? `${user.name} ${user.lastName}` : "";
  const planName = selectedPlan?.name ?? "";
  const planCost = selectedPlan ? `$${selectedPlan.price} al mes` : "";
  const docLabel = (documentType || "dni").toUpperCase();

  return (
    <MainLayout>
      <RimacStepper steps={steps} onBack={handleBack} />
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="w-full max-w-[928px]">
          <h1 className="text-[40px] leading-[48px] font-bold text-[#141938] tracking-[-0.6px] mb-8">
            Resumen del seguro
          </h1>

          <RimacSummaryCard
            fullName={fullName}
            documentLabel={`${docLabel}: ${documentNumber || "-"}`}
            phoneLabel={`Celular: ${phone || "-"}`}
            planName={planName}
            planCost={`Costo del Plan: ${planCost}`}
          />
        </div>
      </div>
    </MainLayout>
  );
}
  