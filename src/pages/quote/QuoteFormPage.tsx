import LandingTemplate from "@/design-system/templates/landing/LandingTemplate";

function FormPlaceholder() {
  return (
    <form className="space-y-4 max-w-[480px]">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-2">
          <label className="mb-1 block text-sm font-medium">DNI</label>
          <select className="w-full rounded-xl border border-[#D1D5DB] bg-white px-3 py-3 text-sm focus:border-black outline-none">
            <option>DNI</option>
            <option>CE</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="mb-1 block text-sm font-medium">
            Nro. de documento
          </label>
          <input
            className="w-full rounded-xl border border-[#D1D5DB] px-3 py-3 text-sm focus:border-black outline-none"
            placeholder="30216147"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Celular</label>
        <input
          className="w-full rounded-xl border border-[#D1D5DB] px-3 py-3 text-sm focus:border-black outline-none"
          placeholder="513021647"
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-[#9CA3AF]"
          />
          <span>Acepto la Política de Privacidad</span>
        </label>
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-[#9CA3AF]"
          />
          <span>Acepto la Política Comunicaciones Comerciales</span>
        </label>
      </div>

      <a href="#" className="block text-sm underline">
        Aplican Términos y Condiciones.
      </a>

      <button
        type="button"
        className="mt-2 h-12 w-full max-w-[240px] rounded-full bg-black px-6 text-white font-medium"
      >
        Cotiza aquí
      </button>
    </form>
  );
}

export default function QuoteFormPage() {
  return <LandingTemplate form={<FormPlaceholder />} />;
}
