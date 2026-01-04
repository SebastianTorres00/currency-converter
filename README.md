# Cómo iniciar el proyecto
  
  npm install

  npm run dev

Estructura y decisiones de arquitectura
Arquitectura Container/Presentational
Elegí el patrón Container/Presentational para organizar el código ya que separa la logica del componente.

De esta forma, se puede ampliar la lógica del flujo sin modificar nada del componente ni ensuciándolo, solo pasándole las props necesarias

Organización del código
src/
├── components/          # Componentes reutilizables (Select, svg, etc)
└── features/            # Cada funcionalidad principal
    └── Home/            # Ejemplo: feature de conversión
        ├── components/  # Componentes solo para UI
        └── container/   # Lógica y estado
        └── hooks/       # Custom-hooks para utilizar en ./container y separar la logica de los componentes
Cómo funciona cada parte:
Container: Maneja toda la lógica (llamadas a API, estado, cálculos)

Components: Solo muestran la UI con los datos que reciben por props

Hooks: Se coloca toda la logica a utilizar en el flujo.

Custom Hooks implementados
useHome.ts (Hook principal)
Coordinador principal que une toda la lógica del feature Home. Llama a otros hooks específicos para mantener el código organizado.

useCurrencyRates.ts
Objetivo: Obtener valor de cambio desde la API

Problema que resuelve: Cuando el usuario cambia rápidamente entre monedas, podría generar muchas llamadas a la API y saturarla.

Solución:

Uso de AbortController para cancelar peticiones anteriores

Evita hacer llamadas innecesarias

useCurrencyList.ts
Objetivo: Obtener la lista de monedas disponibles

Optimización: Solo hace una llamada a la API al inicio.

useFormHome.ts
Objetivo: Manejar el estado del formulario

De esta forma: 

Centraliza la lógica de inputs y selects

Separar la lógica de formulario del resto

Por qué elegí esta estructura

Se hace muy comodo el trabajar con esta estructura, a la hora de ampliar el proyecto y hacer debugging 