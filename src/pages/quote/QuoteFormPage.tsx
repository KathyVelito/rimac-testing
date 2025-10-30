import LandingTemplate from "@/design-system/templates/landing/LandingTemplate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RimacTextField from "@/design-system/atoms/RimacTextField";
import RimacSelect from "@/design-system/atoms/RimacSelect";
import RimacCheckbox from "@/design-system/atoms/RimacCheckbox";
import RimacButton from "@/design-system/atoms/RimacButton";
import { useUserStore } from "@/store/userStore";
import { useLoginFormStore } from "@/store/loginFormStore";
import axios from "axios";

function FormPlaceholder() {
  const navigate = useNavigate();
  const { setUser, setLoading, setError, loading } = useUserStore();

  const documentType = useLoginFormStore((s) => s.documentType);
  const setDocumentType = useLoginFormStore((s) => s.setDocumentType);
  const documentNumber = useLoginFormStore((s) => s.documentNumber);
  const setDocumentNumber = useLoginFormStore((s) => s.setDocumentNumber);
  const phone = useLoginFormStore((s) => s.phone);
  const setPhone = useLoginFormStore((s) => s.setPhone);
  const acceptPrivacy = useLoginFormStore((s) => s.acceptPrivacy);
  const setAcceptPrivacy = useLoginFormStore((s) => s.setAcceptPrivacy);
  const acceptCommercial = useLoginFormStore((s) => s.acceptCommercial);
  const setAcceptCommercial = useLoginFormStore((s) => s.setAcceptCommercial);

  const [showErrors, setShowErrors] = useState(false);

  const validateForm = () => {
    const isPhoneValid = /^9\d{8}$/.test(phone);
    const requiredLen = documentType === "ce" ? 10 : 8;
    const isDocumentValid = documentNumber.length === requiredLen;
    const isDocumentTypeSelected = documentType !== "";
    const isPrivacyAccepted = acceptPrivacy;

    return isPhoneValid && isDocumentValid && isDocumentTypeSelected && isPrivacyAccepted;
  };

  const handleCotizarClick = async () => {
    if (!validateForm()) {
      setShowErrors(true);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const endpoint = import.meta.env.VITE_API_USER_URL as string | undefined;
      const url = endpoint && endpoint.length > 0
        ? endpoint
        : "https://rimac-front-end-challenge.netlify.app/api/user.json";
      const { data } = await axios.get(url);
      setUser(data);
      navigate("/planes");
    } catch (e: unknown) {
      const message = axios.isAxiosError(e)
        ? e.response?.data?.message || e.message
        : "Error de red";
      setError(message);
    } finally {
      setLoading(false);
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
            error={showErrors && !documentType ? "Selecciona un tipo de documento" : false}
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
            error={
              documentNumber.length > 0 && documentNumber.length !== (documentType === "ce" ? 10 : 8)
                ? documentType === "ce" ? "Debe tener 10 dígitos" : "Debe tener 8 dígitos"
                : showErrors && documentNumber.length === 0
                ? "Requerido"
                : false
            }
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
          placeholder="912345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={
            phone.length > 0 && (!phone.startsWith("9") || phone.length !== 9)
              ? "Debe empezar con 9 y tener 9 dígitos"
              : showErrors && phone.length === 0
              ? "Requerido"
              : false
          }
          helperText={!phone ? "" : undefined}
          required
        />
      </div>

      <div className="space-y-2">
        <RimacCheckbox
          checked={acceptPrivacy}
          onChange={(e) => setAcceptPrivacy(e.target.checked)}
          name="privacy"
          required
          error={showErrors && !acceptPrivacy ? "Debes aceptar la Política de Privacidad" : false}
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
        <RimacButton intent="dark" onClick={handleCotizarClick} disabled={loading}>
          {loading ? "Cargando..." : "Cotiza aquí"}
        </RimacButton>
      </div>
    </form>
  );
}

export default function QuoteFormPage() {
  return <LandingTemplate form={<FormPlaceholder />} />;
}
