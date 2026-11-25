---
name: nueva-materia
description: Crea una materia nueva del sitio (como Financiamiento de la Empresa) a partir de los apuntes, el programa y el formulario de condiciones y evaluaciones guardados en apuntes/<id>/. Solo cuando el usuario la invoque.
disable-model-invocation: true
argument-hint: <id-materia> "<Nombre del curso>"
arguments: [id, nombre]
---

# Crear la materia «$nombre» (id: `$id`)

Trabaja en este orden. No te saltes la etapa 2.

## 1. Leer antes de tocar
1. Lee `CLAUDE.md` completo. Sus reglas mandan sobre todo lo demás.
2. Usa como modelo `materias/financiamiento/materia.js`, `materias/financiamiento/u1-dinero-ley18010.js`
   y una unidad reciente (por ejemplo `u10-mercado-valores-3.js`). Copia su forma, sus clases CSS y el
   estilo de sus interactivos. No inventes campos nuevos.
3. Lista `apuntes/$id/`. Ahí deben estar los apuntes de clases, el **programa** del curso y el
   **formulario de condiciones y evaluaciones** (y cualquier lectura). Lee todo. Si falta el programa
   o no hay apuntes, detente y dile al usuario qué falta.
   - `apuntes/` está en `.gitignore`: esos archivos **nunca** se suben al repo (es público). No los
     copies a otra carpeta ni los agregues con `git add -f`.

## 2. Plan (muéstralo y espera mi visto bueno)
Antes de escribir código, entrega una tabla con:
- Cada unidad del **programa**: id (`u1`, `u2`…), título, nombre del archivo, fuentes que la cubren
  (archivo y páginas/clases), secciones previstas y lo que quedará **pendiente** por falta de material.
- Del **formulario**: profesor(es), sigla, tipo de examen y evaluaciones con su ponderación.
- Contradicciones o dudas entre fuentes (se marcarán con callout amarillo, sin elegir).
Las unidades del programa sin material se listan en `materia.js` **sin** `archivo` (salen como
«Próximamente»), no se rellenan de memoria.

## 3. Construir
1. `materias/registro.js`: si la materia ya está como «Próximamente», actívala (`activa: true`, sigla,
   descripción, color); si no, agrega una línea. No cambies las demás materias.
2. `materias/$id/materia.js`: `id`, `nombre`, `nombreCorto`, `curso` («SIGLA · Derecho UC · Prof. …»),
   `descripcion` (incluye tipo de examen), `color` distinto de las otras materias, `unidades` con `bloque`
   cuando haya más de un profesor, `sinonimos` para el chat (claves en minúscula y sin tildes) y
   `preguntasChat` (5 preguntas típicas).
3. Una unidad por archivo con `Estudio.registrarUnidad({...})`. Por unidad con material, como mínimo:
   4 a 8 secciones; 10 o más términos de glosario (`literal: true` solo si es texto exacto de la norma);
   2 o más interactivos útiles (clasificar casos, líneas de tiempo, comparadores); 25 o más preguntas
   mezclando `alternativas`, `vf`, `relacionar` y al menos 3 `oral`, todas con `seccion`.
   - El **formulario manda en el énfasis**: si el examen es oral, más preguntas orales con pauta;
     si es escrito, más alternativas y relacionar. Pon las ponderaciones y fechas en `lecturas` de la
     unidad 1 o en `descripcion`, nunca notas ni datos personales de alumnos.
   - En `lecturas` de cada unidad, nombra las fuentes (apunte, clases, lecturas del programa).
4. Reglas de contenido de `CLAUDE.md`: síntesis propia, frases cortas, español de Chile; citas textuales
   solo de normas, sentencias o frases breves; todo dato (fechas, normas, autores, casos) debe salir de
   `apuntes/$id/`.
5. **No toques `motor/`** para esta materia. Si de verdad falta algo en el motor, detente y propónmelo
   como un cambio aparte.

## 4. Verificar
1. `node .claude/skills/actualizar-materia/verificar.js $id` y también `... financiamiento`
   (la otra materia no debe romperse). Corrige hasta que digan «Todo bien».
2. Si puedes abrir un navegador: `materia.html?m=$id`, consola sin errores, cada unidad abre, los
   interactivos funcionan, el chat responde «¿qué es …?» con un término del glosario, y a 390 px de
   ancho no hay desborde horizontal. Si no puedes, dilo y deja la lista para que yo lo revise.
3. Actualiza `CLAUDE.md`: estructura de carpetas y «Pendientes conocidos» de la nueva materia.

## 5. Entregar con Git (no con zip)
1. Rama nueva: `git switch -c materia/$id` (si ya estás en una rama de trabajo, úsala).
2. `git status` y confirma que **no** aparece nada de `apuntes/` ni PDF/Word.
3. Commit con mensaje claro («Nueva materia: $nombre») y `git push -u origin HEAD`.
4. Si `gh` está instalado y autenticado, abre un pull request hacia `main` con el resumen y los
   pendientes. Si no, dame el enlace para crearlo en GitHub.
5. Termina con: unidades creadas, cifras por unidad, pendientes y contradicciones encontradas.
