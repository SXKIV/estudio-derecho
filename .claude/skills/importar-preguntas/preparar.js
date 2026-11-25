/* Prepara la revisión de un cuestionario exportado desde NotebookLM. Uso, desde la raíz del repo:
     node .claude/skills/importar-preguntas/preparar.js <id-materia> <id-unidad> <quiz.json> [salida.md]
   - Lee el JSON de `notebooklm download quiz --format json` ({ title, questions: [...] }).
   - Carga la unidad como lo haría la página y lista sus secciones y subsecciones (data-sub).
   - Por cada pregunta muestra tipo, opciones (✓ = correcta), explicación de cada opción, pista y
     respuestas aceptadas, más las preguntas ya publicadas que se le parecen (posibles repetidas).
   No modifica nada: solo escribe la hoja de revisión (por defecto, en la salida estándar). */
const fs = require('fs'), vm = require('vm'), path = require('path');

const [id, unidadId, archivoQuiz, salida] = process.argv.slice(2);
if (!id || !unidadId || !archivoQuiz) {
  console.error('Uso: node preparar.js <id-materia> <id-unidad> <quiz.json> [salida.md]');
  process.exit(2);
}

/* ---- Cargar la unidad (igual que verificar.js) ---- */
const dir = path.join('materias', id);
const unidades = []; let materia = null;
const ctx = { Estudio: { registrarMateria: m => { materia = m; }, registrarUnidad: u => unidades.push(u) }, console, Number, Math, Date };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, 'materia.js'), 'utf8'), ctx);
const meta = materia.unidades.find(u => u.id === unidadId);
if (!meta || !meta.archivo) { console.error(`La unidad '${unidadId}' no existe o no tiene archivo.`); process.exit(1); }
vm.runInContext(fs.readFileSync(path.join(dir, meta.archivo), 'utf8'), ctx, { filename: meta.archivo });
const unidad = unidades.find(u => u.id === unidadId);

/* ---- Similitud simple entre textos (para detectar preguntas repetidas) ---- */
const normalizar = t => String(t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/<[^>]+>/g, ' ').replace(/[^a-z0-9ñ ]+/g, ' ');
const VACIAS = new Set('para como cual cuál esta este estos estas sobre entre segun desde hasta donde cuando porque puede debe ser son una uno unos unas los las del que con por sin mas sus ley art articulo'.split(' '));
const fichas = t => new Set(normalizar(t).split(/\s+/).filter(p => p.length > 3 && !VACIAS.has(p)));
const parecido = (a, b) => { let c = 0; for (const x of a) if (b.has(x)) c++; return c / (a.size + b.size - c || 1); };

const textoPregunta = q => [q.enunciado, q.tipo === 'alternativas' ? q.opciones[q.correcta] : '',
  q.tipo === 'relacionar' ? q.pares.map(p => p.join(' ')).join(' ') : '', (q.puntos || []).join(' ')].join(' ');
const publicadas = unidad.preguntas.map((q, i) => ({ n: i + 1, q, f: fichas(textoPregunta(q)) }));

/* ---- Leer el cuestionario ---- */
const quiz = JSON.parse(fs.readFileSync(archivoQuiz, 'utf8'));
const preguntas = Array.isArray(quiz) ? quiz : quiz.questions || [];
const out = [];
const p = s => out.push(s);

p(`# Revisión: ${quiz.title || 'cuestionario de NotebookLM'} → ${unidadId} (${unidad.titulo || meta.titulo || ''})`);
p('');
p(`${preguntas.length} preguntas de NotebookLM · ${unidad.preguntas.length} ya publicadas en la unidad.`);
p('');
p('## Secciones y subsecciones de la unidad');
for (const s of unidad.secciones) {
  p(`- \`${s.id}\` — ${s.titulo}`);
  const subs = [...String(s.html).matchAll(/data-sub="([^"]+)"[^>]*>([^<]*)/g)];
  for (const m of subs) p(`  - \`${m[1]}\` — ${m[2].trim()}`);
}
p('');

const conteo = {};
preguntas.forEach((q, i) => {
  conteo[q.type] = (conteo[q.type] || 0) + 1;
  p(`## ${i + 1}. [${q.type}]`);
  p('');
  p(q.question);
  p('');
  for (const o of q.answerOptions || []) {
    p(`- ${o.isCorrect ? '✓' : '✗'} ${o.text}`);
    if (o.rationale) p(`  - _${o.rationale}_`);
  }
  if (q.bestAnswer) p(`- Mejor respuesta: ${q.bestAnswer}`);
  if (q.acceptableAnswers && q.acceptableAnswers.length) p(`- Respuestas aceptadas: ${q.acceptableAnswers.join(' · ')}`);
  if (q.rationale) p(`- Explicación: ${q.rationale}`);
  if (q.grading) p(`- Criterio de corrección: ${typeof q.grading === 'string' ? q.grading : JSON.stringify(q.grading)}`);
  if (q.hint) p(`- Pista: ${q.hint}`);
  const correctas = (q.answerOptions || []).filter(o => o.isCorrect).map(o => o.text).join(' ');
  const f = fichas([q.question, correctas, q.bestAnswer || ''].join(' '));
  const similares = publicadas.map(x => ({ ...x, s: parecido(f, x.f) })).filter(x => x.s >= 0.15)
    .sort((a, b) => b.s - a.s).slice(0, 3);
  if (similares.length) {
    p('- Parecidas ya publicadas:');
    for (const x of similares) p(`  - n.º ${x.n} (${Math.round(x.s * 100)}%, \`${x.q.seccion}\`) ${x.q.enunciado}`);
  }
  p('');
});
p('## Resumen');
for (const [t, n] of Object.entries(conteo)) p(`- ${t}: ${n}`);

const texto = out.join('\n') + '\n';
if (salida) { fs.writeFileSync(salida, texto, 'utf8'); console.log(`Hoja de revisión escrita en ${salida}`); }
else process.stdout.write(texto);
