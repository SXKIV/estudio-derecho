---
name: importar-preguntas
description: Genera con NotebookLM (notebooklm-py) un cuestionario difícil de una unidad, lo revisa contra el apunte y agrega las preguntas que sirvan al final de la unidad, sin romper el progreso. Solo cuando el usuario la invoque.
disable-model-invocation: true
argument-hint: <id-materia> <id-unidad> [quiz.json ya descargado] [instrucciones]
arguments: [id, unidad]
---

# Importar preguntas de NotebookLM a `$id` / `$unidad`

Instrucciones del usuario: $ARGUMENTS

Reparto del trabajo: **NotebookLM redacta preguntas de razonamiento; Claude Code las adapta, las
revisa contra el material y las integra.** Nada entra a la página sin pasar por el paso 3.

## 0. Requisitos (una vez por computador)
- `notebooklm-py` instalado (p. ej. `python -m venv ~/.venvs/notebooklm` y
  `pip install "notebooklm-py[browser]"`). Si `notebooklm` no está en el PATH, usar
  `~/.venvs/notebooklm/Scripts/notebooklm.exe` (Windows) o `~/.venvs/notebooklm/bin/notebooklm`.
- Sesión iniciada **por el usuario** con una cuenta de Google secundaria:
  `notebooklm -p estudio login`. Las credenciales quedan en `~/.notebooklm/`: nunca dentro del repo,
  nunca en un commit. Claude no inicia sesión ni lee esos archivos.
- Un cuaderno de NotebookLM por materia con las mismas fuentes que usa la página.

## 1. Generar y descargar
Si el usuario ya entregó un `quiz.json`, saltar al paso 2.
1. Leer `CLAUDE.md` y la unidad (`materias/$id/<archivo de $unidad>`): secciones, subsecciones y
   preguntas ya publicadas. Revisar en `CLAUDE.md` que la unidad no tenga una actualización de
   numeración pendiente: si sus `data-sub` van a cambiar, esperar.
2. `notebooklm -p estudio list` → elegir el cuaderno de la materia (`use <id>`).
   `source list --json` → elegir la fuente del profesor de la unidad (opción `-s`).
3. Generar, con un prompt que nombre los temas de la unidad tal como aparecen en el apunte:
   ```
   notebooklm -p estudio generate quiz "En español de Chile. Solo sobre <temas>. Preguntas que
     exijan razonar y aplicar a casos, no memorizar; distractores verosímiles."
     -s <fuente> --difficulty hard --quantity more --wait --timeout 600 --retry 2 --json
   notebooklm -p estudio download quiz --format json apuntes/$id/notebooklm/$unidad-quiz-<n>.json
   ```
   Si hay varios quiz en el cuaderno, usar `--latest` o el id del artefacto. Generar con moderación:
   Google limita el uso por cuenta.

## 2. Hoja de revisión
```
node .claude/skills/importar-preguntas/preparar.js $id $unidad apuntes/$id/notebooklm/<quiz>.json apuntes/$id/notebooklm/<quiz>-revision.md
```
Muestra secciones y subsecciones de la unidad y, por pregunta, opciones (✓/✗) con su explicación,
pista y las preguntas ya publicadas que se le parecen. El JSON de NotebookLM **no trae citas**.

## 3. Revisar contra el material (lo esencial)
Por cada pregunta, buscar en el apunte (`pdftotext` sobre `apuntes/$id/`, sin copiar el texto fuera
de ahí) cada dato: artículos, plazos, cifras, casos, autores. Decidir:
- **Entra**: todo el contenido está en el material y no repite una pregunta publicada.
- **Se corrige**: la idea sirve, pero un dato, la clave o una explicación están mal o no están en el
  material. Si el material es ambiguo o se contradice, no elegir: dejarlo fuera y anotarlo en
  «Pendientes conocidos» (o callout amarillo si es contenido).
- **Se descarta**: repetida, trivial, fuera del material o fuera de la unidad.

Mostrar al usuario el resultado (cuántas entran, se corrigen y se descartan, y los errores
encontrados en la clave de NotebookLM) **antes de editar**, y esperar su visto bueno.

## 4. Convertir al formato de la página
Redactar con lenguaje propio, en español de Chile y frases cortas (no pegar el texto de NotebookLM).
Cada pregunta con `seccion` y, si corresponde, `sub` (ids del paso 2). Correcta en el índice 0
(el motor desordena las opciones).
- `multiple_choice` → `alternativas`. En `explicacion`, por qué es la correcta y la trampa principal.
- `multiple_select` → `alternativas` del tipo «¿cuál es INCORRECTA?» o «¿cuál NO…?», con una sola
  opción falsa **verosímil tomada del material** (no el distractor absurdo de NotebookLM).
- `fill_in_the_blank` → `alternativas` o `vf`, según convenga.
- `short_answer` → `oral`, con `puntos` sacados del material y `norma`.
- Si sirve, `relacionar` (sin lados derechos repetidos).

## 5. Editar, verificar y entregar
1. Agregar **al final** de `preguntas`, tras un comentario
   `/* ---- Preguntas de razonamiento (borrador de NotebookLM, revisadas contra <fuente>) ---- */`.
   No tocar ni reordenar las publicadas.
2. `node .claude/skills/actualizar-materia/verificar.js $id` → «Todo bien».
3. Navegador: `materia.html?m=$id`, consola sin errores, la unidad abre, las preguntas aparecen en
   «Comprueba lo que leíste», 390 px sin desborde.
4. Rama `actualizacion/$id-$unidad-preguntas-notebooklm`, commit, push y pull request hacia `main`
   con: cuántas entraron, cuáles se descartaron y por qué, y los errores de la clave corregidos.
   Nada de `apuntes/` (ni los JSON de NotebookLM) en el commit.
