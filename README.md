# purriShopZustand

Tienda ecommerce frontend construida con React, TypeScript y Vite. Incluye navegación de páginas, detalle de producto, carrito persistente y filtros de categorías usando Zustand y React Router.

## Características

- Lista de productos destacados.
- Filtro de productos por categoría.
- Vista de detalle de producto con animaciones.
- Carrito con cantidad ajustable y persistencia en `localStorage` mediante zustand.
- Componentes reutilizables y contexto para el estado de producto.

## Tecnologías

- React 19
- TypeScript
- Vite
- Zustand
- React Router DOM
- Framer Motion
- ESLint
- React Icons

## Instalación

1. Instala dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Abre la URL que muestra Vite en el navegador (normalmente `http://localhost:5173`).

## Scripts disponibles

- `npm run dev` — inicia el servidor de desarrollo.
- `npm run build` — compila la aplicación para producción.
- `npm run preview` — sirve el sitio generado por `build`.
- `npm run lint` — ejecuta ESLint en el proyecto.

## Uso

- `/` — página principal con productos destacados y carrito lateral.
- `/category/:category` — filtra productos según la categoría seleccionada.
- `/product/:id` — muestra el detalle de un producto.
- `/cart` — vista del carrito con control de cantidades y eliminaciones.

## Estructura relevante

- `src/App.jsx` — rutas principales.
- `src/main.jsx` — punto de entrada de React.
- `src/store` — estado global con Zustand.
- `src/components` — UI de productos, carrito y navegación.
- `src/context/ProductContext.jsx` — lógica de productos y categorías.
- `src/data/products.ts` — catálogo de productos.

## Notas

- El estado del carrito se guarda en `localStorage` para mantener los productos entre recargas.
- El proyecto está preparado para una tienda moderna con experiencia de usuario centrada en React.
