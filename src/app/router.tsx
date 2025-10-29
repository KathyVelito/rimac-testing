import { createBrowserRouter } from "react-router-dom";
import QuoteFormPage from "../pages/quote/QuoteFormPage";
import SelectPlanPage from "../pages/planes/SelectPlanPage";
import SummaryPage from "../pages/resumen/SummaryPage";

export const router = createBrowserRouter([
  { path: "/", element: <QuoteFormPage /> },
  { path: "/planes", element: <SelectPlanPage /> },
  { path: "/resumen", element: <SummaryPage /> },
]);
