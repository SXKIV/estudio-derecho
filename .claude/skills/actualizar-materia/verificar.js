/* Verificación de una materia (sin navegador). Uso, desde la raíz del repo:
     node .claude/skills/actualizar-materia/verificar.js <id-materia> [ref-git]
   - Carga materia.js y todas sus unidades como lo haría la página.
   - Revisa ids, secciones referenciadas, respuestas correctas y términos repetidos.
   - Si se da una ref de git (por defecto HEAD), comprueba que las preguntas, términos e
     interactivos que ya existían sigan intactos y en el mismo orden (no romper el progreso). */
const fs = require('fs'), vm = require('vm'), path = require('path'), { execSync } = require('child_process');

const id = process.argv[2]; const ref = process.argv[3] || 'HEAD';
if (!id) { console.error('Falta el id de la materia. Ej.: node verificar.js financiamiento'); process.exit(2); }
const dir = path.join('materias', id);
let fallas = 0; const falla = m => { fallas++; console.log('  ✗ ' + m); };

function cargar(leer) {
  const unidades = []; let materia = null;
  const ctx = { Estudio: { registrarMateria: m => { materia = m; }, registrarUnidad: u => unidades.push(u) }, console, Number, Math, Date };
  vm.createContext(ctx);
  const codigoMateria = leer(path.join(dir, 'materia.js'));
  if (codigoMateria == null) return null;
  vm.runInContext(codigoMateria, ctx);
  for (const meta of materia.unidades.filter(u => u.archivo)) {
    const codigo = leer(path.join(dir, meta.archivo));
    if (codigo != null) vm.runInContext(codigo, ctx, { filename: meta.archivo });
  }
  return { materia, unidades };
}

const actual = cargar(p => fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : (falla('no existe ' + p), null));
if (!actual) process.exit(1);
let anterior = null;
try { anterior = cargar(p => { try { return execSync(`git show ${ref}:${p.split(path.sep).join('/')}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch (e) { return null; } }); } catch (e) { anterior = null; }

const reg = fs.readFileSync(path.join('materias', 'registro.js'), 'utf8');
if (!reg.includes(`id: '${id}'`)) falla(`materias/registro.js no tiene la materia '${id}'`);

const terminos = {};
for (const meta of actual.materia.unidades) {
  const u = actual.unidades.find(x => x.id === meta.id);
  if (meta.archivo && !u) { falla(`${meta.id}: el archivo ${meta.archivo} no registró la unidad`); continue; }
  if (!u) { console.log(`· ${meta.id}: sin archivo (aparece como «Próximamente»)`); continue; }
  console.log(`· ${u.id}: ${u.secciones.length} secciones, ${u.preguntas.length} preguntas, ${u.glosario.length} conceptos, ${(u.interactivos || []).length} interactivos`);
  const secs = new Set();
  u.secciones.forEach(s => { if (secs.has(s.id)) falla(`${u.id}: sección repetida '${s.id}'`); secs.add(s.id); });
  [...u.preguntas, ...u.glosario, ...(u.interactivos || [])].forEach(x => { if (x.seccion && !secs.has(x.seccion)) falla(`${u.id}: '${x.enunciado || x.termino || x.id}' apunta a la sección inexistente '${x.seccion}'`); });
  u.preguntas.forEach((q, i) => {
    if (!q.seccion) falla(`${u.id}-q${i + 1}: sin sección`);
    if (q.tipo === 'alternativas' && !(q.correcta >= 0 && q.correcta < q.opciones.length)) falla(`${u.id}-q${i + 1}: 'correcta' fuera de rango`);
    if (q.tipo === 'relacionar' && !(q.pares && q.pares.length >= 2)) falla(`${u.id}-q${i + 1}: 'relacionar' necesita al menos 2 pares`);
    if (q.tipo === 'vf' && typeof q.respuesta !== 'boolean') falla(`${u.id}-q${i + 1}: 'vf' sin respuesta true/false`);
  });
  const ints = new Set(); (u.interactivos || []).forEach(x => { if (ints.has(x.id)) falla(`${u.id}: interactivo repetido '${x.id}'`); ints.add(x.id); });
  u.glosario.forEach(g => { const k = g.termino.toLowerCase(); if (terminos[k]) falla(`término '${g.termino}' repetido en ${terminos[k]} y ${u.id}`); terminos[k] = u.id; });
  const a = anterior && anterior.unidades.find(x => x.id === u.id);
  if (a) {
    a.preguntas.forEach((q, i) => { if (JSON.stringify(q) !== JSON.stringify(u.preguntas[i])) falla(`${u.id}-q${i + 1}: una pregunta que ya existía cambió o se movió (rompe el progreso guardado)`); });
    a.glosario.forEach(g => { if (!u.glosario.some(h => h.termino === g.termino)) falla(`${u.id}: se borró o renombró el término '${g.termino}'`); });
    (a.interactivos || []).forEach(x => { if (!ints.has(x.id)) falla(`${u.id}: se borró el interactivo '${x.id}'`); });
    a.secciones.forEach(s => { if (!secs.has(s.id)) console.log(`  ! ${u.id}: ya no existe la sección '${s.id}' (solo se pierde su marca de «leída»; justifícalo en el commit)`); });
  }
}
console.log(fallas ? `\n${fallas} problema(s).` : `\nTodo bien${anterior ? ' (comparado con ' + ref + ')' : ''}.`);
process.exit(fallas ? 1 : 0);
