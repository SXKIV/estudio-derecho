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
  que entregó el usuario: los apuntes completos de clases de ambos profesores
  (`Financiamiento-Gol-Completo.pdf` y `Financiamiento-Gaspar Completo.pdf`), los apuntes y
  diapositivas del Prof. Goldenberg y Sandoval, Derecho Comercial, tomo II (5ª ed., 2005).
  No se nombra en la página ni en el repo a quien escribió los apuntes completos. Lo que viene
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
    u5-titulos-credito.js     (puntos 1-9 del apunte de Gaspar; al final, Profundización (Sandoval))
    u6-letra-cambio.js        (punto 10 del apunte de Gaspar; al final, Profundización (Sandoval))
    u7-pagare-factura.js      (punto 11 del apunte de Gaspar; factura y factoring sin número; al final,
                              Profundización (Sandoval); descuento y factoring: pendiente)
    u8-mercado-valores-1.js   (puntos 1-6 de «Mercado de valores» del apunte de Gaspar)
    u9-mercado-valores-2.js   (puntos 7.1-7.7 de «Mercado de valores»; caso Almacenes París: pendiente,
                              no está en el apunte)
    u10-mercado-valores-3.js  (puntos 7.8-9 de «Mercado de valores» del apunte de Gaspar)
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
  - `/importar-preguntas <id> <unidad>`: genera con NotebookLM (`notebooklm-py`, cuenta de Google
    secundaria) un cuestionario difícil, lo revisa contra el apunte y agrega al final las preguntas
    que sirvan. Los JSON y hojas de revisión quedan en `apuntes/<id>/notebooklm/` (no se suben).
- Cambios al `motor/` (por ejemplo, modo oscuro) van en un pull request separado de los de contenido.

## Pendientes conocidos
- U1 3.8.4.2: las diapositivas/apuntes de clase atribuyen la crítica a la propuesta de Jackson al Banco
  Central y la ABIF; el apunte completo, al Banco Central y la CMF (callout amarillo en la página).
- U7: descuento y factoring (clase de profesora invitada; falta material). La edición de
  Sandoval que tenemos (2005) no trata estos temas.
- U9: caso Almacenes París (no está en el apunte).
- Casos: Chispas (al parecer se vio en clases, pero no está en ninguno de los dos apuntes completos;
  falta confirmar en qué materia) y D&S/Falabella (D&S no está en los apuntes; Falabella aparece una
  vez en el de Gaspar). No se publican hasta tener material.
- U3 3.2/3.3.2: el apunte de Goldenberg incluye a los directores entre los relacionados del art. 84 N°2
  (crédito permitido en condiciones no más favorables) y, a la vez, el N°4 prohíbe «en ningún caso» el
  crédito a directores y a sociedades en que participen. No se hicieron preguntas sobre ese cruce.
- U8: número de la Ley Fintech (el apunte dice 21.521 y 21.236).
- U9/U10: numeración del delito de información falsa y de oferta sin registro (arts. 59 A / 62 a);
  el apunte completo mantiene la contradicción.
- U6 10.5.1.4: el apunte transcribe el art. 10 Ley 18.092 (la cláusula que exime al librador del pago «se tendrá
  por no escrita»), pero al explicarlo dice que el título «vale cero» / «no hay letra» (callout amarillo).
- U7 11.2.2: el art. 102 N° 3 que transcribe el apunte dice que, sin lugar de pago, se paga en el lugar de expedición;
  al explicarlo agrega «el domicilio del suscriptor o el lugar de expedición» (callout amarillo).
- U7 11.4: el art. 29 Ley 18.092 que transcribe el apunte dice que el endoso hecho por el endosatario en cobro «sólo
  produce los efectos propios del endoso en cobranza»; el ejercicio del apunte dice que quien lo recibe es «nadie».
  No se hicieron preguntas nuevas sobre ese cruce.
- U10: el apunte ubica el período de bloqueo en el «art. 16 LMV» y no dice si los 30 días son
  corridos o hábiles.

## Numerar una unidad según el apunte completo y completar sus preguntas
Objetivo: que cada pestaña y subtítulo lleve el número del apunte completo de clases, para estudiar
con el apunte al lado, y que cada subsección tenga preguntas propias en «Comprueba lo que leíste».
Se hace **una unidad por pull request** (numeración + contenido + preguntas juntos), en la rama
`actualizacion/financiamiento-uN-numeracion`, partiendo de `main` actualizado.

**Estado:** U1–U4 listas (apunte de Goldenberg) y U5–U10 listas (apunte de Gaspar). Todas las unidades están numeradas. El índice
de Gaspar tiene dos partes que reinician la numeración: títulos de crédito (1–11: U5 = 1–9 y U6 = 10 Letra de cambio
(confirmados), U7 = 11 Pagaré (confirmado)) y mercado de valores (1–9: U8 = 1–6 (confirmado); U9 = 7.1–7.7 (confirmado); U10 = 7.8–9 (confirmado; el apunte numera «2.6» el período de bloqueo, que va como 9.3)).

1. **Leer el apunte.** Índice con números de página:
   `python -c "import pypdf; r=pypdf.PdfReader('apuntes/financiamiento/<pdf>'); ..."` recorriendo
   `r.outline`. Texto de las páginas de la unidad: `pdftotext -f <ini> -l <fin> -layout <pdf> -`
   (sale en latin1: pasarlo por `iconv -f latin1 -t utf-8`; quitar el pie de página con el nombre).
   Guardar los textos en el scratchpad, nunca en el repo. Leer la unidad actual completa.
2. **Calzar pestañas y puntos.** Hacer una tabla pestaña ↔ puntos del apunte.
   - Si el orden ya coincide, solo se numera. Si no, se reordena para seguir el apunte (el usuario
     eligió esa opción en U1); se pueden crear pestañas nuevas con texto ya publicado.
   - Nunca cambiar el `id` de una sección existente (de él depende la marca de «leída»).
   - Si el cambio es grande o ambiguo, mostrar la tabla y preguntar antes de editar.
3. **Numerar.** En cada sección:
   - `grupo`: el punto principal del apunte (p. ej. `'2. Operaciones bancarias'`).
   - `titulo`: con su número; si junta puntos, un rango: `'2.3.3–2.3.6. Descuento, avales…'`.
   - Subtítulos con `data-sub="<id-unico-en-la-unidad>"` y el número: `<h3>` para el primer nivel
     dentro de la pestaña, `<h4>` para el siguiente. El elemento con `data-sub` debe tener **texto
     corto** (un título), porque ese texto se muestra en el índice y en los grupos del cuestionario.
   - Si el apunte numera mal (números repetidos o saltados), usar el número lógico y dejar una nota
     `<p class="small">En el apunte aparece como …</p>`.
   - Lo que no está en el apunte (p. ej. Sandoval en U5–U7) queda **sin número**, en secciones
     «Profundización (Sandoval)» al final de la unidad, con su fuente.
4. **Completar contenido.** Agregar lo que el apunte trata y la página no, como **síntesis propia**
   (frases cortas, sin copiar párrafos). Contradicciones entre fuentes o dentro del apunte:
   callout amarillo y anotar en «Pendientes conocidos»; un dato del apunte que no cuadra se omite.
5. **Preguntas y glosario existentes.** Asignar `sub` (y cambiar `seccion` si el tema cambió de
   pestaña) **en su mismo lugar**. Los ids de preguntas salen del orden (`uN-q1`…): no mover ni
   borrar. Conviene un script que recorra las líneas `{ tipo: …, seccion: …` en orden, con una
   palabra clave por pregunta para confirmar que cada número es la pregunta esperada.
   Glosario: agregar `"sub"` al término.
6. **Preguntas nuevas.** Al final del arreglo `preguntas` (después de las orales), con `seccion` y
   `sub`, hasta que toda subsección con contenido propio tenga al menos una. Opciones sin «todas las
   anteriores»; explicación con la norma o el ejemplo del apunte. Una oral nueva si hay un tema
   grande sin oral. Términos nuevos del glosario, al final de `glosario`.
7. **Cabecera de la unidad.** Agregar al comentario inicial y a `lecturas` que el orden y la
   numeración siguen el apunte completo de clases.
8. **Verificar.**
   - `node .claude/skills/actualizar-materia/verificar.js financiamiento` (antes del commit compara
     con `HEAD`; después, pasar `main` como segundo argumento). Debe decir «Todo bien»; las preguntas
     que cambian de pestaña solo se informan.
   - En el navegador (skill `browser-automation`): consola sin errores; recorrer todas las pestañas
     y revisar que cada subsección con contenido tenga preguntas; responder alguna; el chat responde
     un término; 390 px sin desborde.
9. **Entregar.** Commit, push y pull request hacia `main` describiendo numeración, contenido nuevo,
   preguntas y cambios de pestaña. Si `gh pr create` falla (error de GraphQL), crear el PR con
   `gh api repos/<dueño>/<repo>/pulls -f title=… -f head=<rama> -f base=main -F body=@<archivo>`.
   No sobrescribir ramas ya subidas (sin force push).

## Preguntas de razonamiento con NotebookLM
Se generan con `/importar-preguntas <id> <unidad>` (ver `.claude/skills/importar-preguntas/SKILL.md`):
NotebookLM redacta, Claude Code revisa cada dato contra el apunte y agrega solo lo que sirve.

**Estado:** U1 (#12), U2 (#15), U3 (#16), U4 (#18), U5 (#19), U6 (#25), U7 (#26), U8 (#27), U9 (#28) y U10 listas. En U4–U10 casi
todo salió repetido (entraron 13 de 26, 2 de 27, 5 de 26, 5 de 26, 8 de 26, 4 de 26 y 3 de 26): conviene más en unidades con pocas preguntas.
Los quiz se generan con `--difficulty hard` (el nivel más alto de NotebookLM).
Nunca dos pull requests abiertos sobre la misma unidad.
Fuente por unidad (opción `-s`): apunte de Goldenberg para U1–U4; apunte de Gaspar para U5–U10.
Sandoval no está en el cuaderno de NotebookLM.

## Cómo agregar una unidad
1. En `materias/<materia>/materia.js`, la unidad ya está listada; agrégale `archivo: 'uN-nombre.js'`.
2. Crea ese archivo con `Estudio.registrarUnidad({...})`. Copia la forma de `u1-dinero-ley18010.js`:
   - `secciones`: `[{ id, titulo, html }]`. Cada sección es una diapositiva (con «Ver todo como
     lista» se ven todas seguidas). Al final de cada diapositiva aparece «Comprueba lo que leíste»
     con las preguntas cuyo `seccion` es esa sección.
     - `grupo` (opcional): el punto principal del apunte al que pertenece la sección, p. ej.
       `grupo: '1. Dinero'`. Agrupa el índice de pestañas y se muestra sobre el título.
       Las secciones siguen el orden y la numeración del apunte completo de clases.
     - Subsecciones: los títulos internos llevan `data-sub` con un id único en la unidad y el número
       del apunte, p. ej. `<h3 data-sub="dinero-funciones">1.1.2. Funciones y naturaleza jurídica</h3>`.
       Se enlazan como `#/u/u1/contenido/dinero/dinero-funciones`.
     - Preguntas y términos del glosario pueden llevar `sub: 'dinero-funciones'` para agruparse
       bajo esa subsección. Agregar `sub` a una pregunta ya publicada no rompe el progreso
       (`verificar.js` lo permite y revisa que el `data-sub` exista).
     El HTML puede usar las clases de estilos.css:
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

## Casos vistos en clases
Los casos de una materia van en una **unidad especial**, `materias/<materia>/casos.js`: un caso por
sección. Así heredan diapositivas, «Comprueba lo que leíste», modo oral, repaso y progreso.
1. En `materia.js`, al final de `unidades`:
   `{ id: 'casos', tipo: 'casos', icono: '⚖️', bloque: 'Casos', titulo: 'Casos vistos en clases', archivo: 'casos.js' }`
   (sin `numero`: el motor muestra solo el ícono y el título). En `casos.js`, los mismos campos en
   `Estudio.registrarUnidad({...})`.
2. Cada caso es una sección con `id` fijo (`azul-azul`, `cofisa`…) y un campo `ficha` que dibuja el motor:
   ```js
   ficha: {
     datos: [['Año', '…'], ['Órgano', '…']],                                // filas libres
     enLaMateria: [{ u: 'u9', seccion: 'control', sub: 'ct-opa', nota: '…' }], // dónde se menciona
     fuentes: [{ titulo: '…', url: 'https://…' }]                          // solo links https
   }
   ```
   Cada sección nombrada en `enLaMateria` muestra sola un aviso «⚖️ Caso relacionado» con un link
   al caso: no hay que editar las unidades.
3. Contenido de cada caso: primero «Lo que dice el apunte» (con el número del punto); después
   «Contexto (fuente externa)», separado y solo con datos confirmados en la fuente enlazada.
   Imágenes: SVG propios o archivos en `materias/<materia>/casos/img/`, nunca fotos de prensa.
   Sin videos incrustados (servicio externo).
4. Preguntas: una oral por caso («Explique el caso X y su importancia en la materia»: hechos,
   problema jurídico, norma, cómo se resolvió, por qué importa) y luego alternativas o V/F.
   Se agregan al final, como en cualquier unidad.
5. `verificar.js` revisa que `enLaMateria` apunte a unidades, secciones y subsecciones existentes
   y que las fuentes sean links https con título.

## Cómo agregar una materia
1. Agrega una línea en `materias/registro.js` con `activa: true`.
2. Crea `materias/<id>/materia.js` (copia el de financiamiento) y sus unidades.
3. No hay que tocar nada en `motor/`.

## Verificar antes de subir
- Abrir `materia.html?m=<id>` y revisar que no haya errores en la consola.
- Revisar en celular (ancho 390 px).
