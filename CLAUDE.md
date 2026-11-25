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
  que entregó el usuario: el apunte completo del Prof. Gaspar, los apuntes y diapositivas
  del Prof. Goldenberg y Sandoval, Derecho Comercial, tomo II (5ª ed., 2005). Lo que viene
  de Sandoval va en secciones «Profundización (Sandoval)» o con la fuente indicada. No agregar
  normas ni artículos de memoria. Si algo no está en el material, se deja fuera o se marca
  como pendiente.
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
  estilos.css                 colores y diseño (paleta UC: azul #1479c9, amarillo #ffdd00);
                              los colores son variables de :root y se redefinen en
                              :root[data-theme="dark"] (modo oscuro). Usar var(--…), no #hex.
  tema.js                     botón 🌙/☀️ de modo claro/oscuro (se carga en el <head>)
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
    u5-titulos-credito.js     (secciones 6-8: Sandoval, tomo II)
    u6-letra-cambio.js        (secciones 8-9: Sandoval, tomo II)
    u7-pagare-factura.js      (secciones 6-7: Sandoval; descuento y factoring: pendiente)
    u8-mercado-valores-1.js
    u9-mercado-valores-2.js   (caso Almacenes París: pendiente, no está en el apunte)
    u10-mercado-valores-3.js  (completa con el apunte completo de Gaspar)
```

## Plan de trabajo (seguir siempre este orden)
1. **Leer antes de tocar.** Leer este archivo y el archivo que se va a cambiar. No reescribir
   archivos enteros si basta con editar una parte.
2. **Un cambio por vez.** Cada pedido toca solo lo necesario. No "mejorar" de paso otras
   unidades ni el motor.
3. **Contenido vs. motor.** El contenido va en `materias/`. Solo se toca `motor/` si el
   cambio sirve para todas las materias; en ese caso, probar al menos dos unidades.
4. **No romper el progreso guardado.** No cambiar `id` de unidades, secciones ni
   interactivos; no borrar ni reordenar preguntas ni términos del glosario. Para corregir
   una pregunta, editar su texto en el mismo lugar. Para agregar, al final.
5. **Fuentes.** Todo dato nuevo debe venir del material entregado. Si hay dudas o
   contradicciones en el material, se marcan en la página (callout amarillo) en vez de elegir.
6. **Verificar** (ver al final): consola sin errores, la unidad abre, el chat responde,
   celular a 390 px sin desborde horizontal.
7. **Entregar.** En una rama propia (`materia/<id>`, `actualizacion/<id>-<tema>`,
   `motor/<tema>`), commit con mensaje claro, push y pull request hacia `main`. No trabajar
   directo en `main`: GitHub Pages publica desde ahí. Solo si la sesión no puede hacer push
   (por ejemplo, el chat de claude.ai), entregar un zip con los archivos cambiados y sus
   carpetas, para copiarlos encima del repo.
8. **Actualizar este archivo** si cambia la estructura o se cierra un pendiente.

## Fuentes y colaboración
- Los apuntes, programas, formularios y lecturas van en `apuntes/<id-materia>/` en el computador
  de cada uno. Esa carpeta y los PDF/Word están en `.gitignore`: **nunca** se suben (el repo es
  público). Al repo solo va la síntesis.
- Comandos del proyecto para Claude Code (en `.claude/skills/`):
  - `/nueva-materia <id> "<Nombre>"`: crea una materia desde `apuntes/<id>/`.
  - `/actualizar-materia <id> [unidades y material]`: agrega material nuevo sin romper el progreso.
  - `node .claude/skills/actualizar-materia/verificar.js <id>`: revisa ids, secciones y que lo ya
    publicado siga intacto respecto de `HEAD`.
- Cambios al `motor/` (por ejemplo, modo oscuro) van en un pull request separado de los de contenido.

## Pendientes conocidos
- U7: descuento y factoring (clase de profesora invitada; falta material). La edición de
  Sandoval que tenemos (2005) no trata estos temas.
- U9: caso Almacenes París (no está en el apunte).
- U8: número de la Ley Fintech (el apunte dice 21.521 y 21.236).
- U9/U10: numeración del delito de información falsa y de oferta sin registro (arts. 59 A / 62 a);
  el apunte completo mantiene la contradicción.
- U10: el apunte ubica el período de bloqueo en el «art. 16 LMV» y no dice si los 30 días son
  corridos o hábiles.

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
