# Plan: infografías con NotebookLM como base y Claude como diseñador

Estado: **propuesta, sin implementar** (noviembre de 2026). Nada de este plan se ejecuta hasta que el
usuario lo pida. Sirve para cualquier materia, no solo Financiamiento.

## 1. Por qué este plan

Se probó una vez `notebooklm generate infographic` con el caso Inverlink. La imagen salió bien
ordenada, pero no era publicable:

| Problema observado | Tipo |
|---|---|
| Caricatura de una persona real con una frase entre comillas que no dijo | alucinación / riesgo |
| Un dibujo contradecía el texto (la Corfo *pagaba* a «Mala fe» en vez de cobrar) | confunde la materia |
| Simplificó quién endosó a quién | imprecisión |
| PNG de 4,9 MB, sin modo oscuro, texto no buscable ni editable, marca de agua | formato |

Conclusión: **NotebookLM es bueno para pensar y ordenar el contenido con citas; no para dibujar.**
El dibujo lo hace Claude con SVG propio, y nada se publica sin verificar contra el apunte.

## 2. Reparto del trabajo

```
apunte (PDF, en apuntes/)                         ← fuente única de verdad
   │
   ├─► NotebookLM (notebooklm-py) ── guion con citas (JSON) ──┐
   │                                                          ▼
   └─► pdftotext (scratchpad) ───────────────► Claude: verifica cada dato del guion
                                                          │  (hoja de revisión → visto bueno del usuario)
                                                          ▼
                                     Claude: guion verificado → plantilla SVG (sin coordenadas a mano)
                                                          ▼
                                     verificador automático + navegador (390 px, claro/oscuro)
                                                          ▼
                                                   PR hacia main
```

| Quién | Hace | No hace |
|---|---|---|
| NotebookLM | Propone qué mostrar: idea central, pasos, comparaciones, cifras, con cita a la fuente | No dibuja nada que se publique |
| Claude | Verifica cada dato contra el PDF, elige la plantilla, escribe el SVG y lo prueba | No agrega datos que no estén en el apunte |
| Usuario | Aprueba la hoja de revisión antes de dibujar y el PR al final | — |

## 3. Paso a paso (una infografía por caso o subsección)

### 3.1 NotebookLM: el guion
- Usar `notebooklm -p estudio ask --json -s <fuente>`, que devuelve la respuesta con **citas y el id de la
  fuente** de cada referencia. No usar `--new` (borra la conversación del servidor); usar `-c <id>`
  o una conversación nueva desde la web.
- Prompt base (en un archivo, con `--prompt-file`):
  > «En español de Chile. Para una infografía de estudio sobre <tema> según el apunte. Devuelve SOLO
  > JSON con: `idea` (una frase), `tipo` (flujo | comparacion | linea_tiempo | barras | arbol | ciclo),
  > `bloques`: [{`id`, `titulo` (≤ 4 palabras), `texto` (≤ 12 palabras), `cita` (frase literal del
  > apunte), `punto` (número del apunte)}], `relaciones`: [{`desde`, `hacia`, `verbo` (quién hace qué
  > a quién)}], `cifras`: [{`valor`, `que_es`, `cita`}]. No incluyas personas que no estén en el
  > apunte ni frases entre comillas atribuidas a personas. No agregues datos externos.»
- Opcional: `generate mind-map --kind note-backed` (árbol JSON) para ver la estructura del tema.
- Opcional y **solo como referencia visual privada**: `generate infographic` (queda en `apuntes/`).
- Guardar todo en `apuntes/<materia>/notebooklm/infografias/` (git lo ignora).

### 3.2 Claude: hoja de revisión (igual que con las preguntas)
Un script `revisar-guion.js` compara el guion con el texto del apunte (`pdftotext`, normalizado):
- Cada `cita` debe aparecer **literalmente** en el apunte (tolerando tildes y espacios). Si no aparece,
  el bloque queda marcado ✗.
- Cada cifra, artículo, fecha y nombre propio del `texto` debe estar en la cita o en el punto indicado.
- Cada `relación` debe tener un verbo explícito («la Corfo demanda a…») para que el dibujo no pueda
  invertir el sentido.
- Contradicciones con lo publicado o dentro del apunte: no se elige; se deja fuera y se anota
  (callout amarillo / «Pendientes conocidos»).

Claude muestra al usuario: bloques que entran, que se corrigen y que se descartan. **Se espera el
visto bueno antes de dibujar.**

### 3.3 Claude: del guion verificado al SVG con plantillas
Para evitar texto ilegible o superpuesto, Claude **no escribe coordenadas a mano**: llena una
plantilla con el JSON verificado. Propuesta: `.claude/skills/infografia/plantillas.js` con seis
plantillas, que son las que ya se usaron en los casos:

| Plantilla | Para | Ejemplo publicado |
|---|---|---|
| `flujo` | cadena de hechos o de títulos | Inverlink |
| `comparacion` | dos posturas o casos (HTML `grid dos`) | Aurus / Sartor |
| `linea_tiempo` | antes / durante / después | Videla |
| `barras` | porcentajes o cifras del apunte | Clínica Las Condes, Subprime |
| `arbol` | decisión sí / no | Chang |
| `ciclo` | mecanismos que se repiten | La Polar |

Reglas que las plantillas imponen solas (las de CLAUDE.md, «Infografías»):
- `viewBox` de 320 de ancho, diseño vertical, texto de 12 px como mínimo; **corte automático de líneas**
  por ancho de caja (≈ 6,5 px por carácter) y la caja crece hacia abajo, nunca se achica la letra.
- Máximo 3 líneas por caja; si no cabe, el script falla y pide acortar el texto (no lo corta en silencio).
- Solo la paleta que `estilos.css` adapta al modo oscuro; `role="img"`, `aria-label` y `figcaption`.
- Ids de `marker` únicos (`m-<caso>`), porque en «Ver todo como lista» se ven todos juntos.
- **Sin personas dibujadas, sin globos de diálogo, sin íconos que representen acciones.** Las acciones
  van como texto sobre la flecha, con el verbo del guion.
- Peso esperado: menos de 10 KB por infografía, con texto real (buscable por el chat).

### 3.4 Verificación automática y visual
- `verificar-infografia.js` (o una extensión de `verificar.js`): textos dentro del `viewBox` y de su caja,
  colores fuera de la paleta, ids de `marker` repetidos, `aria-label` y `figcaption` presentes, y que
  **cada texto del SVG salga de un bloque verificado del guion** (trazabilidad).
- Navegador (skill `browser-automation`): consola sin errores, 390 px sin desborde, capturas en claro y
  oscuro que Claude mira antes de entregar (como se hizo en el PR de infografías de casos).

### 3.5 Entrega
- Rama `actualizacion/<materia>-infografias-<tema>`, un PR por tanda, con la hoja de revisión resumida.
- Al repo va solo el SVG dentro de la unidad. Los JSON, PNG y hojas de revisión quedan en `apuntes/`.

## 4. Herramientas recomendadas (revisado en noviembre de 2026)

### 4.1 Núcleo recomendado (sin costo extra, ya probado en este repo)
| Herramienta | Para qué | Estado |
|---|---|---|
| `notebooklm-py` (CLI `notebooklm`) | `ask --json` con citas, `generate mind-map`, `generate report`; `generate infographic` solo como referencia | Ya instalado (cuenta secundaria) |
| Skill `browser-automation` | Abrir la página, revisar consola, medir desbordes, tomar y mirar capturas | Ya en uso |
| Skill `dataviz` | Gráficos (barras, escalas, paleta y validador de colores, claro y oscuro) | Ya instalado en la sesión de Claude Code del proyecto |
| Skill `artifact-diagramming` | Cuándo conviene un diagrama y cómo hacer SVG legible en ambos temas (pensado para Artifacts, pero sus reglas sirven igual) | Ya instalado |
| Plugin `frontend-design` (marketplace oficial `claude-plugins-official`) | Criterio visual para no caer en diseños genéricos | Ya instalado; en otro computador: `/plugin install frontend-design@claude-plugins-official` |

### 4.2 Opcionales (solo si aparece una necesidad concreta)
| Herramienta | Cuándo | Cuidado |
|---|---|---|
| [Playwright MCP](https://playwright.dev/docs/getting-started-mcp) (Microsoft) | Si se quiere manejar el navegador como herramienta MCP en vez del skill | Duplica lo que ya hace `browser-automation`; para regresiones visuales sirve más `toHaveScreenshot()` de Playwright Test |
| [Figma MCP](https://help.figma.com/hc/en-us/sections/39166717350935-Figma-MCP-server) (oficial; plugin `figma@claude-plugins-official`) | Si alguien diseña plantillas en Figma y Claude las pasa a SVG | Requiere asiento Dev o Full en un plan pagado de Figma |
| Excalidraw MCP (comunitario, p. ej. [mcp_excalidraw](https://raw.githubusercontent.com/yctimlin/mcp_excalidraw/HEAD/README.md)) | Bocetos rápidos con estilo «a mano» para decidir el diseño | No es oficial; revisar el código antes de instalar; el resultado final igual debe ser SVG propio |

### 4.3 No recomendados para la página
| Herramienta | Por qué no |
|---|---|
| MCP de generación de imágenes (Recraft, Gemini MCP y similares) | Producen imágenes raster o SVG sin control de los datos, pueden inventar texto, piden API key y pago, y son un servicio externo (CLAUDE.md exige consultarlo) |
| [Canva AI Connector](https://www.canva.dev/docs/connect/canva-mcp-server-setup) | Requiere Canva Pro y plan pagado de Claude para el conector; el resultado vive en Canva, no como SVG editable en el repo |
| Mermaid en la página | Necesita una librería en el navegador (el proyecto no usa dependencias). Sirve como borrador para pensar, no para publicar |

## 5. Fases

| Fase | Qué | Resultado |
|---|---|---|
| 0 | Decisiones del usuario (sección 7) | — |
| 1 | Piloto con **un** caso ya publicado (p. ej. Inverlink): rehacer su infografía con el flujo completo y compararla con la actual | Saber si el guion de NotebookLM aporta algo frente a escribirla directo |
| 2 | Crear el skill `/infografia <materia> <unidad> <sección>` con `plantillas.js`, `revisar-guion.js` y `verificar-infografia.js` | Proceso repetible |
| 3 | Aplicarlo a subsecciones de las unidades (no solo casos), pocas por PR | Más material visual |
| 4 (opcional) | Usar `generate infographic` de NotebookLM solo como inspiración visual privada | — |

## 6. Costos y riesgos
- **Cuota de NotebookLM:** cada `generate` gasta cuota de la cuenta; `ask` es más barato. Un guion por
  tema; no generar en masa.
- **Privacidad:** la sesión de NotebookLM es de una cuenta secundaria; las credenciales quedan en
  `~/.notebooklm/` y Claude no las lee. Nada de `apuntes/` se sube.
- **Herramientas que cambian rápido:** revisar este plan antes de instalar un plugin o MCP; preferir los
  del marketplace oficial y revisar el código de los comunitarios.
- **Exceso de dibujos:** una infografía solo si explica algo que el texto no explica bien (un mecanismo,
  una comparación, un cálculo, una secuencia).

## 7. Decisiones pendientes del usuario
1. ¿Piloto con Inverlink (ya tiene infografía, sirve para comparar) o con un tema sin dibujo?
2. ¿Basta con los skills ya instalados, o se quiere probar alguna herramienta opcional (sección 4.2)?
3. ¿Infografías solo en «Casos» o también en las unidades?
4. ¿Se aceptan bocetos con Excalidraw MCP (comunitario) en la etapa de diseño?
