# Cine UTN

Aplicacion base para el Trabajo Practico #1 de Programacion IV.

## Stack

- Angular 22
- Supabase
- PWA / Angular Service Worker
- GitHub

Angular utiliza componentes standalone, signals y rutas lazy-loaded.

## Requisitos

- Node.js compatible con Angular 22
- npm
- Cuenta de Supabase

## Instalacion

```bash
npm install
```

## Configurar Supabase

Editar:

```text
src/environments/environment.ts
```

y completar:

```ts
supabaseUrl: "TU_URL",
supabasePublishableKey: "TU_PUBLISHABLE_KEY"
```

Luego ejecutar el archivo:

```text
supabase/schema.sql
```

desde el SQL Editor de Supabase.

## Ejecutar

```bash
npm start
```

Abrir:

```text
http://localhost:4200
```

## PWA

El proyecto incluye `@angular/service-worker`, `manifest.webmanifest` y `ngsw-config.json`.

Para probar comportamiento de produccion:

```bash
npm run build
```

La configuracion de service worker esta pensada para el build de produccion.

## Arquitectura

```text
src/app
├── core
│   ├── guards
│   ├── models
│   └── services
├── features
│   ├── admin
│   ├── auth
│   ├── booking
│   ├── home
│   ├── movies
│   └── profile
└── shared
```

### Core

Contiene servicios, modelos y guards reutilizables.

### Features

Cada modulo funcional tiene sus propios componentes.

### Supabase

Supabase maneja autenticacion y persistencia. Las reglas importantes de compra, disponibilidad de butacas, QR, credito y auditoria deben reforzarse en PostgreSQL/RPC y no solo en Angular.

## Estado actual

Esta entrega implementa la base navegable del sistema:

- Home.
- Cartelera.
- Busqueda y filtro.
- Detalle de pelicula.
- Login y registro con Supabase Auth.
- Guard de autenticacion.
- Seleccion de butacas.
- Perfil.
- Backoffice base.
- Esquema Supabase.
- PWA base.

## Siguiente etapa

1. CRUD administrativo.
2. Funciones y asignacion automatica de salas.
3. Reserva atomica de butacas.
4. Checkout real.
5. PDF de entradas.
6. QR real y validacion.
7. Candy Bar y combos.
8. Cupones.
9. Fidelizacion.
10. Preventa.
11. Cancelacion y credito.
12. Reportes y exportacion.
13. Auditoria completa.
14. Pruebas y despliegue.

## Importante

No se deben poner claves secretas de Supabase en Angular. El frontend debe usar solamente la publishable key y las tablas deben estar protegidas con Row Level Security.
