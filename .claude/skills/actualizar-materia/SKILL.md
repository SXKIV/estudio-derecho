---
name: actualizar-materia
description: Incorpora material nuevo (un apunte más completo, un libro, diapositivas) a las unidades existentes de una materia, sin romper el progreso guardado. Solo cuando el usuario la invoque.
disable-model-invocation: true
argument-hint: <id-materia> [unidades, p. ej. u5-u7] [qué material nuevo hay]
arguments: [id]
---

# Actualizar la materia `$id`

Instrucciones del usuario: $ARGUMENTS

## 1. Leer
1. `CLAUDE.md` completo, en especial «No romper el progreso guardado» y «Pendientes conocidos».
2. `materias/$id/materia.js` y las unidades afectadas.
3. El material nuevo en `apuntes/$id/` (no se sube a GitHub; no lo copies fuera de ahí).

## 2. Diagnóstico (muéstralo y espera mi visto bueno)
Por unidad: qué del material nuevo **ya está**, qué **falta**, qué **pendiente** de `CLAUDE.md` se
cierra y qué **contradicciones** hay entre fuentes. Indica qué secciones agregarías.

## 3. Editar
- Edita partes, no reescribas archivos enteros.
- **Nunca** cambies ni reordenes preguntas, términos del glosario ni interactivos que ya existen;
  no cambies `id` de unidades, secciones ni interactivos. Lo nuevo va **al final** de cada arreglo.
- Para corregir una pregunta existente, edita su texto en el mismo lugar.
- Material de otra fuente (p. ej., un libro) va en secciones «Profundización (Autor)» y en `lecturas`.
- Contradicciones entre fuentes: callout amarillo explicando ambas versiones, sin elegir.
- Actualiza `resumen`, `lecturas` y el comentario inicial de cada unidad tocada, y los `sinonimos`
  del chat en `materia.js` para los conceptos nuevos.

## 4. Verificar
1. `node .claude/skills/actualizar-materia/verificar.js $id` (compara con `HEAD`: debe decir que
   lo anterior sigue intacto). Si se eliminó una sección «pendiente», explícalo en el commit.
2. Si puedes abrir un navegador: consola sin errores, interactivos nuevos funcionando, chat y 390 px.
3. Actualiza «Pendientes conocidos» en `CLAUDE.md`.

## 5. Entregar con Git
Rama `actualizacion/$id-<tema>`, commit claro, `git push -u origin HEAD` y pull request hacia `main`
(con `gh` si está disponible). Nada de `apuntes/` ni PDF en el commit. Resume lo agregado por unidad.
