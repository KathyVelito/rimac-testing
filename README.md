# Rimac Insurance

Aplicación de cotización y selección de planes de salud. Implementa una landing, un formulario de cotización, selección de plan con carrusel y un resumen con los datos ingresados.

Producción: https://rimac-testing.vercel.app/

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Zustand (estado y persistencia en localStorage)
- Axios
- Embla Carousel (carrusel/slider)
- ESLint + Prettier
- Vitest + React Testing Library (pruebas)
- Husky + lint-staged (hooks de git)

## Estructura breve

```
src/
  app/                    # router
  assets/                 # estáticos
  design-system/
    atoms/               # componentes atómicos (Button, Checkbox, Select, etc.)
    molecules/           # combinaciones pequeñas (PlanPrice, PlanCard)
    organisms/           # secciones (Header, Footer, Hero, PlanDetail, Slider, Stepper, Summary)
    templates/           # layout/plantillas (Landing)
  pages/
    quote/               # formulario de cotización
    planes/              # selección de plan
    resumen/             # resumen final
  store/                 # zustand stores (user, planes, opciones, login form)
  styles/                # estilos globales
  setupTests.ts          # configuración de pruebas
```

## Variables de entorno

Crear `.env.local` en la raíz:

```
VITE_API_USER_URL="https://rimac-front-end-challenge.netlify.app/api/user.json"
VITE_API_PLANS_URL="https://rimac-front-end-challenge.netlify.app/api/plans.json"
```

## Desarrollo

```
npm install
npm run dev
```

## Scripts principales

```
npm run dev          # entorno de desarrollo
npm run build        # compila la app
npm run preview      # sirve la build
npm run lint         # eslint
npm run format       # prettier --check
npm run typecheck    # verificación de tipos

# pruebas
npm run test         # vitest interactivo
npm run test:run     # vitest en modo CI
npm run test:watch   # watch
npm run test:coverage# cobertura
```

## Husky y calidad

- pre-commit: ejecuta `lint-staged` (ESLint + Prettier sobre archivos staged) y `npm run typecheck`.
- pre-push: ejecuta `npm run test:run`.

Configuración `lint-staged` (package.json):

```
"lint-staged": {
  "*.{ts,tsx,js,jsx,json,css,md}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

## Funcionalidades

- Formulario de cotización con validaciones:
  - Teléfono peruano: 9 dígitos y empieza en 9.
  - Documento: DNI (8 dígitos) o CE (10 dígitos), de acuerdo al select.
  - Aceptación de Política de Privacidad obligatoria.
- Persistencia de formulario y usuario con Zustand.
- Consumo de endpoints configurables por env para usuario y planes (Axios).
- Selección de planes con carrusel (Embla):
  - Desktop: 3 cards visibles, navegación por flechas.
  - Mobile: 1 por vista con flechas superpuestas.
  - Descuento 5% si se elige "Para alguien más".
  - Filtro por edad mínima del plan vs edad del usuario (derivada de la fecha de nacimiento).
  - Alterna íconos por card (home/hospital). El plan de mayor precio se marca como "Recomendado".
- Resumen: combina datos de `user-store`, `login-form-store` y `plans-store`.
- Routing entre páginas: landing → planes → resumen.

## Pruebas

- Vitest + RTL con `jsdom` configurado en `vitest.config.ts` y `src/setupTests.ts`.
- Tests de ejemplo:
  - `RimacButton` (render y click)
  - `RimacCheckbox` (render y toggle)

## Notas de implementación

- Tailwind v4 con tokens de tipografía en `src/styles/global.css`.
- Componentes atómicos diseñados para recibir `className` y props nativas.
- Zustand stores persistidos: `user-store`, `plans-store`, `option-store` (audiencia), `login-form-store`.

## Deploy

- La app está publicada en Vercel: https://rimac-testing.vercel.app/

## Recomendaciones

- Mantener las urls de API en variables de entorno.
- Extender pruebas a Select/TextField y flujos críticos de navegación.
- Revisar `lint-staged` y hooks si se agregan nuevos tipos de archivos.
