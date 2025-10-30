import MainLayout from "@/design-system/templates/main/MainLayout";
import RimacStepper from "@/design-system/organisms/stepper/RimacStepper";
import RimacSummaryCard from "@/design-system/organisms/summary/RimacSummaryCard";
import { useNavigate } from "react-router-dom";

export default function SummaryPage() {
  const navigate = useNavigate();
  
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

  return (
    <MainLayout>
      <RimacStepper steps={steps} onBack={handleBack} />
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="w-full max-w-[928px]">
          <h1 className="text-[40px] leading-[48px] font-bold text-[#141938] tracking-[-0.6px] mb-8">
            Resumen del seguro
          </h1>

          <RimacSummaryCard
            fullName="Rocio Miranda Díaz"
            documentLabel="DNI: 444888888"
            phoneLabel="Celular: 5130216147"
            planName="Plan en Casa y Clínica"
            planCost="Costo del Plan: $99 al mes"
          />
        </div>
      </div>
    </MainLayout>
  );
}
  