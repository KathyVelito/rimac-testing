import MainLayout from "@/design-system/templates/main/MainLayout";
import RimacStepper from "@/design-system/organisms/stepper/RimacStepper";
import RimacPlanCard from "@/design-system/molecules/plan-card/RimacPlanCard";
import RimacPlanDetail from "@/design-system/organisms/plan-detail/RimacPlanDetail";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SelectPlanPage() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<"individual" | "family" | null>(null);
  
  const steps = [
    {
      step: 1,
      label: "Planes y coberturas",
      isActive: true,
      isCompleted: false
    },
    {
      step: 2,
      label: "Resumen",
      isActive: false,
      isCompleted: false
    }
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

  const individualPlans = [
    {
      id: "casa",
      name: "Plan en Casa",
      price: "$39",
      period: "al mes",
      features: [
        {
          id: "1",
          content: (
            <>
              <span className="font-bold">Médico general a domicilio</span>
              <span className="font-normal"> por S/20 y medicinas cubiertas al 100%.</span>
            </>
          )
        },
        {
          id: "2", 
          content: (
            <>
              <span className="font-bold">Videoconsulta</span>
              <span className="font-normal"> y orientación telefónica al 100% en medicina general + pediatría.</span>
            </>
          )
        },
        {
          id: "3",
          content: (
            <>
              <span className="font-bold">Indemnización</span>
              <span className="font-normal"> de S/300 en caso de hospitalización por más de un día.</span>
            </>
          )
        }
      ]
    },
    {
      id: "clasico",
      name: "Plan Clásico",
      price: "$29",
      period: "al mes",
      features: [
        {
          id: "1",
          content: (
            <>
              <span className="font-bold">Cobertura básica</span>
              <span className="font-normal"> en clínicas afiliadas con copago del 20%.</span>
            </>
          )
        },
        {
          id: "2", 
          content: (
            <>
              <span className="font-bold">Emergencias 24/7</span>
              <span className="font-normal"> con cobertura nacional.</span>
            </>
          )
        },
        {
          id: "3",
          content: (
            <>
              <span className="font-bold">Medicinas</span>
              <span className="font-normal"> con descuento del 50% en farmacias afiliadas.</span>
            </>
          )
        }
      ]
    },
    {
      id: "premium",
      name: "Plan Premium",
      price: "$59",
      period: "al mes",
      features: [
        {
          id: "1",
          content: (
            <>
              <span className="font-bold">Cobertura completa</span>
              <span className="font-normal"> en clínicas y hospitales premium.</span>
            </>
          )
        },
        {
          id: "2", 
          content: (
            <>
              <span className="font-bold">Medicinas 100%</span>
              <span className="font-normal"> cubiertas sin copago.</span>
            </>
          )
        },
        {
          id: "3",
          content: (
            <>
              <span className="font-bold">Indemnización</span>
              <span className="font-normal"> de S/500 por hospitalización.</span>
            </>
          )
        }
      ]
    }
  ];

  const familyPlans = [
    {
      id: "familiar-basico",
      name: "Plan Familiar Básico",
      price: "$49",
      period: "al mes",
      features: [
        {
          id: "1",
          content: (
            <>
              <span className="font-bold">Cobertura familiar</span>
              <span className="font-normal"> para hasta 4 miembros de la familia.</span>
            </>
          )
        },
        {
          id: "2", 
          content: (
            <>
              <span className="font-bold">Pediatría incluida</span>
              <span className="font-normal"> con consultas ilimitadas para menores de 18 años.</span>
            </>
          )
        },
        {
          id: "3",
          content: (
            <>
              <span className="font-bold">Medicinas familiares</span>
              <span className="font-normal"> con descuento del 70% en farmacias afiliadas.</span>
            </>
          )
        }
      ]
    },
    {
      id: "familiar-completo",
      name: "Plan Familiar Completo",
      price: "$79",
      period: "al mes",
      features: [
        {
          id: "1",
          content: (
            <>
              <span className="font-bold">Cobertura premium</span>
              <span className="font-normal"> para toda la familia en hospitales de primera.</span>
            </>
          )
        },
        {
          id: "2", 
          content: (
            <>
              <span className="font-bold">Especialistas incluidos</span>
              <span className="font-normal"> cardiología, ginecología y pediatría especializada.</span>
            </>
          )
        },
        {
          id: "3",
          content: (
            <>
              <span className="font-bold">Indemnización familiar</span>
              <span className="font-normal"> de S/800 por hospitalización de cualquier miembro.</span>
            </>
          )
        }
      ]
    },
    {
      id: "familiar-premium",
      name: "Plan Familiar Premium",
      price: "$99",
      period: "al mes",
      features: [
        {
          id: "1",
          content: (
            <>
              <span className="font-bold">Cobertura internacional</span>
              <span className="font-normal"> para emergencias en el extranjero.</span>
            </>
          )
        },
        {
          id: "2", 
          content: (
            <>
              <span className="font-bold">Medicinas 100%</span>
              <span className="font-normal"> cubiertas para toda la familia sin copago.</span>
            </>
          )
        },
        {
          id: "3",
          content: (
            <>
              <span className="font-bold">Asistencia 24/7</span>
              <span className="font-normal"> con médico de cabecera asignado para la familia.</span>
            </>
          )
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <RimacStepper steps={steps} onBack={handleBack} />
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="max-w-[800px] w-full">
          {!selectedPlan ? (
            <>
              <h1 className="text-2xl font-bold mb-6 text-center">Selecciona tu plan</h1>
              
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
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-6 text-center">Planes y coberturas</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {(selectedPlan === "individual" ? individualPlans : familyPlans).map((plan) => (
                  <RimacPlanDetail
                    key={plan.id}
                    planName={plan.name}
                    price={plan.price}
                    period={plan.period}
                    features={plan.features}
                    onSelectPlan={handleSelectPlan}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
  