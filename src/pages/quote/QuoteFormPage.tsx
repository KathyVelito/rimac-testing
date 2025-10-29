import LandingTemplate from "@/design-system/templates/landing/LandingTemplate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RimacTextField from "@/design-system/atoms/RimacTextField";
import RimacSelect from "@/design-system/atoms/RimacSelect";
import RimacCheckbox from "@/design-system/atoms/RimacCheckbox";
import RimacButton from "@/design-system/atoms/RimacButton";

function FormPlaceholder() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptCommercial, setAcceptCommercial] = useState(false);

  const validateForm = () => {
    // Verificar que todos los campos estén completos
    const isPhoneValid = phone.length === 9;
    const isDocumentValid = documentNumber.length === 8;
    const isDocumentTypeSelected = documentType !== "";
    const isPrivacyAccepted = acceptPrivacy;

    return isPhoneValid && isDocumentValid && isDocumentTypeSelected && isPrivacyAccepted;
  };

  const handleCotizarClick = () => {
    if (validateForm()) {
      navigate("/planes");
    } else {
      alert("Por favor completa todos los campos requeridos y acepta la Política de Privacidad.");
    }
  };
  return (
    <form className="space-y-4 max-w-[480px]">
      <div className="grid grid-cols-4 ">
        <div className="col-span-2">
          <RimacSelect
            name="documentType"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            required
          >
            <option value="">Tipo de Documento</option>
            <option value="dni">DNI</option>
            <option value="ce">CE</option>
          </RimacSelect>
        </div>
        <div className="col-span-2">
          <RimacTextField
            label="Nro. de documento"
            name="documentNumber"
            placeholder="30216147"
            value={documentNumber}
            onChange={(e) => setDocumentNumber(e.target.value)}
            error={documentNumber.length > 0 && documentNumber.length !== 8 ? "Debe tener 8 dígitos" : false}
            helperText={!documentNumber ? "" : undefined}
            roundedLeft={false}
            required
          />
        </div>
      </div>

      <div>
        <RimacTextField
          label="Celular"
          name="phone"
          placeholder="513021647"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={phone.length > 0 && phone.length !== 9 ? "Debe tener 9 dígitos" : false}
          helperText={!phone ? "" : undefined}
          required
        />
      </div>

      <div className="space-y-2">
        <RimacCheckbox
          checked={acceptPrivacy}
          onChange={(e) => setAcceptPrivacy(e.target.checked)}
          name="privacy"
        >
          Acepto la <span className="underline">Política de Privacidad</span>
        </RimacCheckbox>
        <RimacCheckbox
          checked={acceptCommercial}
          onChange={(e) => setAcceptCommercial(e.target.checked)}
          name="commercial"
        >
          Acepto la <span className="underline">Política Comunicaciones Comerciales</span>
        </RimacCheckbox>
      </div>

      <a href="#" className="block text-sm underline">
        Aplican Términos y Condiciones.
      </a>

      <div className="mt-2">
        <RimacButton intent="dark" onClick={handleCotizarClick}>
          Cotiza aquí
        </RimacButton>
      </div>
    </form>
  );
}

export default function QuoteFormPage() {
  return <LandingTemplate form={<FormPlaceholder />} />;
}
