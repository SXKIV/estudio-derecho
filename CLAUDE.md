# Estudio Derecho

## Qué es este proyecto
Página de estudio para ramos de Derecho UC, hecha por estudiantes para estudiantes.
Primera materia: Financiamiento de la Empresa (DER010C), para el examen oral.
La idea es reutilizar la misma página para otras materias (DIPr, Civil, Tributario…).

Se publica con GitHub Pages desde la rama `main` y se comparte con amigos.

## Reglas de contenido
- No publicar notas ni calificaciones de nadie, ni datos personales.
- No copiar párrafos de libros ni subir PDF de apuntes o lecturas: el contenido es una
  síntesis propia. Las citas textuales son solo de normas, de sentencias o frases breves.
- Todo dato jurídico (artículos, cifras, fechas, casos) debe salir del material del curso
  que entregó el usuario. No agregar normas ni artículos de memoria. Si algo no está en
  el material, se deja fuera o se marca como pendiente.
- Lenguaje claro, en español de Chile. Frases cortas.

## Tecnología
- HTML, CSS y JavaScript simples. Sin frameworks, sin dependencias, sin compilación.
- Debe funcionar abriendo `index.html` directo en el navegador (por eso el contenido
  está en archivos `.js` y no en `.json`).
- No agregar librerías ni servicios externos sin consultarlo.
- Privacidad: el progreso se guarda solo en el navegador (localStorage). Nada se envía
  a internet. El chat NO usa IA: busca en el texto de la propia página.

## Estructura
```
index.html                  portada: lista de materias
materia.html                la app (se abre como materia.html?m=<id>)
motor/                      igual para todas las materias — no depende del contenido
  estilos.css                 colores y diseño (paleta UC: azul #1479c9, amarillo #ffdd00)
  almacen.js                  perfiles, guardado local, exportar/importar progreso
  srs.js                      repetición espaciada (cajas de Leitner, estilo Anki)
  app.js                      carga la materia, navegación, vistas, progreso
  quiz.js                     alternativas, V/F, relacionar, modo Kahoot, modo oral
  chat.js                     buscador de la materia (sin IA)
materias/
  registro.js                 lista de materias de la portada
  financiamiento/
    materia.js                nombre, color, unidades, sinónimos del chat
    u1-dinero-ley18010.js     una unidad por archivo
    u2-contratos.js
    u3-operaciones-bancarias.js
    u4-garantias.js
```

## Cómo agregar una unidad
1. En `materias/<materia>/materia.js`, la unidad ya está listada; agrégale `archivo: 'uN-nombre.js'`.
2. Crea ese archivo con `Estudio.registrarUnidad({...})`. Copia la forma de `u1-dinero-ley18010.js`:
   - `secciones`: `[{ id, titulo, html }]`. El HTML puede usar las clases de estilos.css:
     `card`, `grid`, `grid dos`, `callout` (`yellow`, `red`, `green`), `cita` + `fuente`,
     `tabla`, `norma`, `etiqueta`, `flow` + `node` + `arrow`, `figure.diagrama` con un `<svg>`.
   - `interactivos`: `[{ id, titulo, descripcion, seccion, montar: function (el) {…} }]`.
   - `preguntas`, cada una con `seccion` (para la barra de progreso por tema):
     - `{ tipo:'alternativas', enunciado, opciones:[...], correcta: <índice>, explicacion }`
     - `{ tipo:'vf', enunciado, respuesta: true|false, explicacion }`
     - `{ tipo:'relacionar', enunciado, pares:[[izq, der], ...], explicacion }`
     - `{ tipo:'oral', enunciado, puntos:[...], norma }`
   - `glosario`: `[{ termino, definicion, fuente, seccion, literal?, alias? }]`.
     - `literal: true` solo si la definición es el texto exacto de la norma o fuente citada
       (se muestra entre comillas). Si es síntesis, no se marca.
     - `alias`: otras formas de nombrar el concepto (siglas, plurales, sinónimos) para que
       el chat lo reconozca: p. ej. `['tmc', 'interes maximo convencional']`.
     - El motor crea solo dos preguntas por concepto (id fijo `uN-g-<termino>-a` y `-d`):
       «¿qué concepto se define así?» y una tarjeta para definir de memoria.
     - El chat responde con la definición del glosario cuando se pregunta «qué es X»,
       «define X», «diferencia entre X e Y» o se escribe solo el concepto.
   - Las opciones se muestran desordenadas; no uses «todas las anteriores».
   - Los `id` de preguntas se generan solos (`u1-q1`, …). No reordenes preguntas ya
     publicadas: el progreso guardado depende del orden. Agrega las nuevas al final.

## Cómo agregar una materia
1. Agrega una línea en `materias/registro.js` con `activa: true`.
2. Crea `materias/<id>/materia.js` (copia el de financiamiento) y sus unidades.
3. No hay que tocar nada en `motor/`.

## Verificar antes de subir
- Abrir `materia.html?m=<id>` y revisar que no haya errores en la consola.
- Revisar en celular (ancho 390 px).
