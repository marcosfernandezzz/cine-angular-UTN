# Plan de trabajo en 4 Sprints para el TP de Cine

Este plan divide el proyecto en entregas progresivas para subir a GitHub de forma separada, cada sprint con alcance claro, objetivos concretos y criterios de aceptación.

## Estrategia general de GitHub

- Rama principal: `main`
- Ramas de entrega por sprint:
  - `sprint-1` -> base del sistema y catálogo
  - `sprint-2` -> funciones, butacas y compra
  - `sprint-3` -> experiencia cliente, candy, fidelización y preventa
  - `sprint-4` -> administración, reportes, auditoría y despliegue
- Cada sprint debe quedar como un tag o release separado:
  - `v1-sprint-1`
  - `v2-sprint-2`
  - `v3-sprint-3`
  - `v4-sprint-4`
- Cada entrega debe incluir:
  - README actualizado
  - captura de funcionalidades principales
  - SQL/Supabase schema actualizado
  - documento de cambios o notas del sprint

---

## Sprint 1: Base del sistema, autenticación y catálogo de películas

### Objetivo

Deployar la base funcional del cine: proyecto Angular con PWA, autenticación, estructura del negocio y catálogo inicial de películas.

### Funcionalidades a incluir

1. Inicialización del proyecto Angular
   - Angular 22
   - estructura de carpetas por features
   - rutas base
   - PWA base

2. Autenticación con Supabase
   - login
   - registro
   - cierre de sesión
   - guard de rutas
   - perfiles básicos

3. Modelo de negocio mínimo
   - películas
   - géneros
   - salas
   - funciones
   - butacas
   - usuarios

4. Catálogo de películas
   - listado con buscador
   - filtros por género
   - detalle de película
   - imagen, sinopsis, duración, clasificación
   - formato 2D/3D/4D/5D
   - audio castellano/subtitulada

5. Home
   - banner principal
   - sección de próximas películas o destacadas
   - layout de la página principal

6. Administración básica
   - CRUD de películas
   - CRUD de géneros
   - acceso para admin

7. SQL y Supabase
   - creación de tablas principales
   - seed inicial
   - RLS básico

### Criterio de aceptación del sprint

- Se puede entrar a la app, registrarse e iniciar sesión.
- Se listado y detalle de películas correctamente.
- Se puede administrar un catálogo mínimo desde el panel.
- La app corre con PWA instalada como base.
- El repo está subido con una branch de sprint y un tag propio.

### Entregable del sprint

- `sprint-1` funcional
- README con estado inicial
- SQL inicial de Supabase listo para ejecutar

---

## Sprint 2: Programación de funciones, butacas y compra de entradas

### Objetivo

Completar la operación central del cine: programación de funciones, asignación automática de salas, mapa de butacas y flujo de compra de entradas.

### Funcionalidades a incluir

1. Gestión de funciones
   - creación de funciones
   - fecha y horario
   - relación con película y sala
   - duración y regla de intervalo entre funciones

2. Asignación automática de salas
   - validación para que no haya dos funciones simultáneas en la misma sala
   - lógica de choque por horarios

3. Gestión de salas
   - configuración de filas y columnas
   - distribución de butacas
   - butacas accesibles
   - filas VIP (últimas 3 filas)

4. Mapa interactivo de butacas
   - selección visual
   - estado ocupado/disponible/seleccionado
   - diferenciación de accesibles y VIP
   - precio diferencial para VIP

5. Compra de entradas
   - usuario registrado o anónimo
   - selección de función y butacas
   - checkout simple
   - generación de comprobante

6. PDF y QR
   - ticket con datos básicos
   - código QR asociado a la compra
   - guardado visual del comprobante

7. Validación de tickets
   - escaneo manual o por código
   - marca como utilizado
   - extracción del QR para auditoría

### Criterio de aceptación del sprint

- Un horario no puede duplicarse en la misma sala.
- El mapa de butacas refleja disponibilidad real.
- El usuario puede comprar entradas válidas con selección de asiento.
- Se genera un PDF y un QR para la compra.
- La función de validación de entrada queda funcional.

### Entregable del sprint

- `sprint-2` funcional
- lógica de negocio completa para funciones y butacas
- flujo de compra validado

---

## Sprint 3: Experiencia del cliente, candy bar, cupones y preventa

### Objetivo

Ampliar la experiencia del cliente con reseñas, valoraciones, promociones, venta de productos y preventa para mejorar la conversión y la retención.

### Funcionalidades a incluir

1. Reseñas y puntuación
   - estrellas
   - comentarios
   - promedio por película
   - visualización antes de comprar

2. Top 3 películas más vendidas
   - cálculo por ventas
   - destacado en home

3. Buscador y filtro por género
   - búsqueda por nombre
   - filtro múltiple por género

4. Cupones
   - configuración de porcentaje
   - cupones por edad
   - cupón de bienvenida

5. Candy bar
   - productos
   - categorías
   - combos
   - compra junto con la entrada
   - validación del QR para retiro de productos

6. Pre-venta
   - configuración por película
   - 7 días antes del estreno
   - precio especial
   - restitución del precio normal después del período

7. Mis películas
   - historial visual de pelis vistas
   - pósters y fecha
   - calificación propia

8. Notificaciones de disponibilidad
   - activar alerta para una película próxima

### Criterio de aceptación del sprint

- El usuario puede reseñar y ver el promedio de una película.
- La home muestra las 3 películas más vendidas.
- El sistema aplica cupones y promociones.
- Se pueden comprar productos del candy bar con la entrada.
- La preventa funciona por película y según su fecha.
- La sección “Mis películas” queda lista.

### Entregable del sprint

- `sprint-3` funcional
- flujo completo de experiencia cliente y promociones
- sistema de products/combos y preventa listo

---

## Sprint 4: Admin, reportes, auditoría, cancelación y despliegue final

### Objetivo

Cerrar la aplicación con administración integral, trazabilidad, reportes, crédito por cancelación y preparación para defensa y despliegue final.

### Funcionalidades a incluir

1. Panel administrativo completo
   - películas
   - salas
   - funciones
   - butacas
   - productos
   - precios
   - cupones
   - combos
   - recompensas

2. Fidelización
   - puntos por compra
   - historial de puntos
   - canje por entradas o productos
   - configuración de costos por recompensa
   - visualización en perfil

3. Cancelación y crédito
   - cancelación hasta 2 horas antes de la función
   - no devolución de dinero
   - crédito a cuenta del perfil
   - uso junto con otros métodos de pago

4. Reportes y métricas
   - facturación diaria
   - entradas vendidas
   - películas más vistas por semana
   - películas más vistas por mes
   - producto más vendido
   - gráficos estadísticos
   - exportación PDF y Excel

5. Auditoría / trazabilidad
   - quién creó algo
   - qué hizo
   - cuándo
   - ejemplo: creación de función, cambio de precio, validación de QR

6. Validación final de QR
   - entrada y candy
   - invalidación después del uso
   - validación manual

7. Polishing final
   - UX/UI consistente
   - responsive
   - diseño propio y memorable
   - navegación intuitiva
   - README final completo

8. Despliegue
   - build final
   - deploy
   - URL funcional
   - documentación técnica final

### Criterio de aceptación del sprint

- El admin puede gestionar todo el negocio.
- Los reportes y exportaciones funcionan.
- La auditoría registra eventos relevantes.
- La cancelación genera crédito correctamente.
- La app está desplegada y lista para defensa oral.

### Entregable del sprint

- `sprint-4` versión final del proyecto
- README completo
- arquitectura documentada
- decisiones técnicas documentadas
- URL funcional de despliegue

---

## Roadmap sugerido de GitHub por sprint

### Sprint 1

- `git checkout -b sprint-1`
- Commit principal: `feat: base app and auth`
- Commit secundario: `feat: movies catalog and admin CRUD`
- Push a GitHub
- Crear release/tag `v1-sprint-1`

### Sprint 2

- `git checkout -b sprint-2`
- Commit principal: `feat: schedules and seat map`
- Commit secundario: `feat: ticket purchase and QR`
- Push a GitHub
- Crear release/tag `v2-sprint-2`

### Sprint 3

- `git checkout -b sprint-3`
- Commit principal: `feat: reviews and candy bar`
- Commit secundario: `feat: pre-sale and loyalty`
- Push a GitHub
- Crear release/tag `v3-sprint-3`

### Sprint 4

- `git checkout -b sprint-4`
- Commit principal: `feat: admin dashboard and reports`
- Commit secundario: `feat: credit, audit and deployment`
- Push a GitHub
- Crear release/tag `v4-sprint-4`

---

## Recomendación de entregas por GitHub

- Mantener `main` como rama de producción final.
- No mezclar trabajo de varios sprints en un mismo branch.
- Usar pull requests desde cada rama de sprint hacia `main` para cerrar cada entrega.
- En cada sprint, documentar:
  - qué se hizo
  - qué quedó pendiente
  - cómo probarlo
  - qué se entregó

---

## Orden recomendado de desarrollo real

1. Base del proyecto y Supabase
2. Películas + catálogo
3. Login + registro
4. Gestión de salas y funciones
5. Mapa de butacas y compra
6. QR y validación
7. Reseñas, cupones y candy
8. Fidelización y preventa
9. Admin y reportes
10. Auditoría, crédito y despliegue

---

## Sugerencia de entregables para la defensa oral

En cada sprint, preparar una demo breve con:

- login
- flujo de compra real
- funcionalidad de admin
- una regla de negocio clave
- una explicación del porqué de la arquitectura elegida

Esto te va a ayudar mucho para la defensa final, porque la nota no solo depende de la app sino también de la claridad del razonamiento y la lógica del negocio.

---

## Conclusión

La mejor forma de encarar este TP es pensearlo como un proyecto incremental:

- Sprint 1: base y catálogo
- Sprint 2: negocio principal del cine
- Sprint 3: experiencia de cliente y promociones
- Sprint 4: administración, métricas y cierre final

De esta forma no solo se logra una app completa, sino que cada entrega queda modularizada, documentada y lista para subirse a GitHub por separado.
