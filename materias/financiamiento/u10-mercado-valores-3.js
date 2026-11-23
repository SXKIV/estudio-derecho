/* Unidad 10 — Mercado de valores III: información y CMF (clases 19 a 22 del Prof. Gaspar).
   Fuentes: apuntes de clases del Prof. Gaspar. Las clases 20 a 22 vienen vacías en el apunte:
   quedan marcadas como pendientes. */
(function () {
  var fmt = function (n) { return Number(n).toLocaleString('es-CL'); };

  Estudio.registrarUnidad({
    id: 'u10', numero: 10, bloque: 'Prof. Gaspar', profesor: 'Gaspar',
    titulo: 'Mercado de valores III: información y CMF',
    resumen: 'Revelación obligatoria (mandatory disclosure, art. 9° LMV): información veraz, suficiente y oportuna; auditores externos, independencia y casos La Polar y Enron. Pendientes: clasificadores de riesgo, hechos esenciales, información privilegiada y la CMF.',
    lecturas: 'Apuntes de clases del Prof. Gaspar (clase 19 del cronograma; las clases 20 a 22 no están en el apunte). Lecturas: Mardones, tomo II, pp. 401-407, 210-221, 411-424 y 64-85; Gaspar, artículo sobre gatekeepers.',

    glosario: [
      { termino: 'Mandatory disclosure', definicion: 'Revelación obligatoria: quien capta recursos del público en el mercado de valores queda sujeto imperativamente a decir la verdad y divulgar su información (art. 9° LMV).', fuente: 'Art. 9° LMV; apuntes', seccion: 'disclosure', alias: ['revelacion obligatoria', 'deber de informar al mercado'] },
      { termino: 'Trío dorado', definicion: 'Los tres atributos que debe tener la información que los emisores entregan al mercado según el art. 9° LMV: veraz, suficiente y oportuna.', fuente: 'Art. 9° LMV; apuntes', seccion: 'disclosure', alias: ['veraz suficiente y oportuna'] },
      { termino: 'Información veraz', definicion: 'Información ajustada estrictamente a la realidad contable y financiera de la empresa, sin engaños ni distorsiones. Su infracción es además delito según el apunte (art. 59 a LMV).', fuente: 'Arts. 9° y 59 LMV; apuntes', seccion: 'auditores', alias: ['veracidad'] },
      { termino: 'Información suficiente', definicion: 'Información completa, detallada e idónea para que un hombre juicioso pueda evaluar el riesgo real de la inversión.', fuente: 'Art. 9° LMV; apuntes', seccion: 'disclosure', alias: ['suficiencia'] },
      { termino: 'Información oportuna', definicion: 'Información divulgada en el momento en que ocurren los hechos, para evitar asimetrías y aprovechamientos indebidos.', fuente: 'Art. 9° LMV; apuntes', seccion: 'disclosure', alias: ['oportunidad'] },
      { termino: 'Auditor externo', definicion: 'Auditor independiente que examina los estados financieros de los emisores de oferta pública y certifica si reflejan razonablemente la realidad económica de la empresa.', fuente: 'Apuntes de clases', seccion: 'auditores', alias: ['auditores externos', 'auditoria externa', 'empresa de auditoria externa'] },
      { termino: 'Escepticismo profesional', definicion: 'Principio que obliga al auditor a cuestionar diligentemente la veracidad de la información financiera que certifica; por eso la Corte Suprema rechazó la excusa de PwC de haber sido engañada (caso La Polar).', fuente: 'Apuntes de clases', seccion: 'auditores' },
      { termino: 'Incompatibilidad de servicios', definicion: 'Prohibición a la empresa de auditoría externa de prestar cualquier servicio distinto de la auditoría a la entidad que audita o a las sociedades de su mismo grupo, para proteger su independencia.', fuente: 'Apuntes de clases', seccion: 'auditores', alias: ['independencia del auditor'] }
    ],

    secciones: [
      {
        id: 'disclosure', titulo: '1. Revelación obligatoria (mandatory disclosure)',
        html: `
<p>Si se suprime al banco, el mercado debe dar al inversionista otra forma de evaluar el <b>riesgo de solvencia</b> del emisor. El banco puede exigir, auditar y verificar la información del deudor; el inversionista común no, y queda expuesto a asimetrías de información y a que le vendan información falsa.</p>
<div class="grid dos">
  <div class="card"><b>En La Vega</b><p>El comprador ve la fruta y verifica en el acto la calidad y lo que dice el vendedor.</p></div>
  <div class="card"><b>En el mercado de valores</b><p>Se compran <b>expectativas futuras</b> (dividendos, alza del título, pago de la deuda). No se pueden verificar por uno mismo: se exige un estándar ético y legal superior.</p></div>
</div>
<p>A diferencia del derecho común, donde el engaño o la omisión pueden matizarse, la LMV impone la <b>revelación obligatoria</b> (<span class="norma">art. 9° LMV</span>): quien capta recursos del público debe decir la verdad y divulgar su información.</p>
<div class="flow"><div class="node">Veraz<small>ajustada a la realidad</small></div><div class="arrow">+</div><div class="node">Suficiente<small>para que un hombre juicioso evalúe el riesgo</small></div><div class="arrow">+</div><div class="node">Oportuna<small>en el momento de los hechos</small></div><div class="arrow">=</div><div class="node y">«Trío dorado»<small>art. 9° LMV</small></div></div>
<p class="small">Cada atributo tiene una institución que lo resguarda: veracidad → auditores externos (sección 2); suficiencia → clasificadores de riesgo; oportunidad → hechos esenciales y reservados (sección 3, pendientes).</p>`
      },
      {
        id: 'auditores', titulo: '2. Veracidad: auditores externos, La Polar y Enron',
        html: `
<p>La veracidad es tan importante que su infracción no solo trae multas de la CMF: el apunte la señala como <b>delito</b> en el «art. 59a» de la LMV.</p>
<div class="callout yellow"><p><b>Ojo con la numeración:</b> el mismo apunte dice, en la Unidad 9, que el antiguo art. 59 A fue reubicado como art. 62 a) tras la reforma de delitos económicos. Confirma con la ley vigente qué artículo tipifica hoy la entrega de información falsa.</p></div>
<div class="card" style="margin-bottom:12px"><p><span class="etiqueta roja">Pregunta de examen</span> <b>Caso La Polar</b></p>
<ul>
  <li><b>Motivo:</b> en 2005 la junta aprobó <i>stock options</i> para ejecutivos (suscribir acciones a 5 años a precio fijo). Para ganar con ellas, había que inflar el precio de la acción.</li>
  <li><b>Mecanismo:</b> de noche, los sistemas <b>repactaban unilateralmente</b> los créditos de clientes morosos, sin su consentimiento. Así (1) desaparecía la morosidad y se evitaba castigar el crédito, y (2) se registraba un crédito nuevo, no moroso y mayor: utilidades ficticias.</li>
  <li><b>Señal de alerta:</b> en la crisis de 2007-2008, Falabella, Ripley y Cencosud cayeron; La Polar mostraba resultados «espectaculares». La acción superó los $2.400.</li>
  <li><b>Caída:</b> un inversionista, asesorado por abogados jóvenes de la UDP, cuestionó los números ante la SVS y la SBIF. En junio de 2011 estalló: la acción cayó a $20-$30 (más de 99%).</li>
  <li><b>Lecciones:</b> infracción al deber de información veraz y fallas de gobierno corporativo (el directorio no supervisó). Se sancionó a la auditora <b>PwC</b>; la Corte Suprema rechazó la excusa de que «fueron engañados y no estaban para detectar fraudes»: el auditor debe aplicar <b>escepticismo profesional</b>.</li>
</ul></div>
<h3>Auditores externos e independencia</h3>
<p>Los estados financieros de los emisores de oferta pública deben ser examinados por <b>auditores externos independientes</b>, que certifican si reflejan razonablemente la realidad económica de la empresa.</p>
<div class="callout red"><p><b>El conflicto:</b> la auditora conoce a fondo a la empresa y puede venderle consultoría (tributaria, legal, laboral, outsourcing). Si gana más por consultoría que por auditoría, la empresa puede presionarla: «apruebe mis estados financieros o cancelo los contratos». Fue lo que ocurrió en <b>Enron</b> (EE. UU.), que llevó a la quiebra a una auditora muy conocida.</p></div>
<p><b>Solución chilena:</b> en vez de prohibir toda consultoría, una regla de <b>incompatibilidad de servicios</b>: la auditora externa no puede prestar ningún servicio distinto de la auditoría a la entidad que audita ni a las sociedades de su grupo empresarial.</p>`
      },
      {
        id: 'pendientes', titulo: '3. Pendientes: suficiencia, oportunidad, información privilegiada y CMF',
        html: `
<div class="callout red"><p><span class="etiqueta roja">Pendiente</span> Estas clases aparecen en el cronograma, pero en el apunte de Gaspar solo están los títulos, sin desarrollo. No se agregó contenido de memoria. Complétalas con las lecturas o los apuntes de un compañero.</p></div>
<table class="tabla">
<tr><th>Clase</th><th>Tema</th><th>Lectura de apoyo</th></tr>
<tr><td>20</td><td><b>Suficiencia:</b> clasificadores de riesgo.<br><b>Oportunidad:</b> hechos esenciales y reservados.<br>Caso Matías Videla.</td><td>Mardones II, pp. 216-221; Gaspar, artículo sobre gatekeepers.</td></tr>
<tr><td>21</td><td>Asimetrías de información e <b>información privilegiada</b>. Caso Hermanos Navarrete.</td><td>Mardones II, pp. 411-424.</td></tr>
<tr><td>22</td><td>El regulador: la <b>CMF</b>.</td><td>Mardones II, pp. 64-85.</td></tr>
</table>
<p class="small">Lo que sí está en otras unidades: la información periódica y la eventual (hechos relevantes) en la Unidad 9, sección 3; el art. 12 LMV sobre compras de directores y accionistas relevantes en la Unidad 8.</p>`
      }
    ],

    interactivos: [
      {
        id: 'triodorado', titulo: '¿Qué atributo se infringe?', seccion: 'disclosure',
        descripcion: 'Para cada situación, elige qué atributo del art. 9° LMV falla: veracidad, suficiencia u oportunidad.',
        montar: function (el) {
          var casos = [
            ['La Polar registra como créditos al día las deudas repactadas sin consentimiento de clientes morosos.', 'v', 'Los estados financieros no reflejaban la realidad: falta de veracidad.'],
            ['Un emisor informa un cambio en su administración tres meses después de ocurrido.', 'o', 'La información debe divulgarse en el momento de los hechos.'],
            ['Una memoria anual omite detalles que un hombre juicioso necesitaría para evaluar el riesgo.', 's', 'La información debe ser completa e idónea para evaluar el riesgo.'],
            ['Una empresa publica utilidades que no existen para inflar el precio de sus acciones.', 'v', 'Información falsa: infracción a la veracidad.']
          ];
          var et = { v: 'Veracidad', s: 'Suficiencia', o: 'Oportunidad' };
          var i = 0, ok = 0;
          function pintar() {
            if (i >= casos.length) { el.innerHTML = '<div class="resultado ok"><b>Resultado: ' + ok + ' de ' + casos.length + '.</b> <button class="btn sec" id="re">Repetir</button></div>'; el.querySelector('#re').onclick = function () { i = 0; ok = 0; pintar(); }; return; }
            var c = casos[i];
            el.innerHTML = '<p class="small">Caso ' + (i + 1) + ' de ' + casos.length + '</p><p style="font-size:18px;font-weight:700">' + c[0] + '</p><div class="opciones-chip">' + Object.keys(et).map(function (k) { return '<button data-v="' + k + '">' + et[k] + '</button>'; }).join('') + '</div><div id="fb"></div>';
            el.querySelectorAll('[data-v]').forEach(function (b) {
              b.onclick = function () {
                var bien = b.dataset.v === c[1]; if (bien) ok++;
                el.querySelectorAll('[data-v]').forEach(function (x) { x.disabled = true; if (x.dataset.v === c[1]) x.classList.add('activo'); });
                el.querySelector('#fb').innerHTML = '<div class="resultado ' + (bien ? 'ok' : 'mal') + '"><b>' + (bien ? '✓ Correcto.' : '✗ Era: ' + et[c[1]] + '.') + '</b> ' + c[2] + '<div style="margin-top:10px"><button class="btn" id="sig">Siguiente</button></div></div>';
                el.querySelector('#sig').onclick = function () { i++; pintar(); };
              };
            });
          }
          pintar();
        }
      },
      {
        id: 'repactacion', titulo: 'La Polar: castigar o repactar', seccion: 'auditores',
        descripcion: 'Ejemplo ilustrativo (cifras inventadas): una cartera con créditos morosos. Compara lo que muestran los estados financieros si se castigan o si se repactan unilateralmente.',
        montar: function (el) {
          el.innerHTML = '<div class="fila"><div class="campo"><label>Cartera total ($ millones)</label><input type="number" id="c" value="1000" step="50"></div><div class="campo"><label>Recargo de la repactación (%)</label><input type="number" id="r" value="10" step="1"></div></div>' +
            '<div class="campo" style="max-width:420px"><label>Créditos morosos: <b id="m">30</b>%</label><input type="range" id="mo" min="0" max="60" value="30"></div><div id="out"></div>';
          function calc() {
            var c = +el.querySelector('#c').value || 0, r = +el.querySelector('#r').value || 0, m = +el.querySelector('#mo').value;
            el.querySelector('#m').textContent = m;
            var mor = c * m / 100, castigo = mor, repact = mor * (1 + r / 100);
            el.querySelector('#out').innerHTML = '<table class="tabla"><tr><th></th><th>Castigar (lo correcto)</th><th>Repactar sin consentimiento</th></tr>' +
              '<tr><td>Activo (cartera)</td><td>$' + fmt(c - castigo) + ' MM</td><td>$' + fmt(c - mor + repact) + ' MM</td></tr>' +
              '<tr><td>Efecto en resultados</td><td>Pérdida de $' + fmt(castigo) + ' MM</td><td>«Ingreso» de $' + fmt(repact - mor) + ' MM</td></tr>' +
              '<tr><td>Morosidad informada</td><td>' + m + '%</td><td>0%</td></tr></table>' +
              '<div class="resultado mal">La diferencia entre ambas columnas es la información <b>no veraz</b> que recibió el mercado. Multiplicada año a año, llevó la acción sobre $2.400 hasta que todo se transparentó en 2011.</div>';
          }
          el.querySelectorAll('input').forEach(function (i) { i.oninput = calc; }); calc();
        }
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'disclosure', enunciado: '¿Qué atributos debe tener la información que los emisores entregan al mercado según el art. 9° LMV?', opciones: ['Veraz, suficiente y oportuna', 'Pública, gratuita y auditada', 'Escrita, firmada y notarial', 'Breve, clara y en español'], correcta: 0, explicacion: 'El «trío dorado».' },
      { tipo: 'vf', seccion: 'disclosure', enunciado: 'La revelación obligatoria se justifica porque el inversionista compra expectativas futuras que no puede verificar por sí mismo.', respuesta: true, explicacion: 'A diferencia de quien compra fruta en La Vega.' },
      { tipo: 'alternativas', seccion: 'disclosure', enunciado: '¿Por qué el mercado de valores necesita revelación obligatoria si el banco no la necesita para prestar?', opciones: ['Porque el banco puede exigir y verificar la información del deudor, y el inversionista común no', 'Porque los bancos no corren riesgo de solvencia', 'Porque la CMF garantiza las inversiones', 'Porque los bonos no tienen riesgo'], correcta: 0, explicacion: 'Al suprimir al banco, el inversionista queda expuesto a asimetrías de información.' },
      { tipo: 'relacionar', seccion: 'disclosure', enunciado: 'Relaciona cada atributo con su institución de resguardo.', pares: [['Veracidad', 'Auditores externos'], ['Suficiencia', 'Clasificadores de riesgo'], ['Oportunidad', 'Hechos esenciales y reservados']], explicacion: 'Según la estructura del apunte y el cronograma.' },
      { tipo: 'alternativas', seccion: 'auditores', enunciado: '¿Cómo inflaba La Polar sus resultados?', opciones: ['Repactando unilateralmente los créditos de clientes morosos, para no castigarlos y registrar créditos nuevos mayores', 'Vendiendo acciones propias en bolsa', 'Ocultando una toma de control', 'Emitiendo bonos sin inscribir'], correcta: 0, explicacion: 'Eliminaba la morosidad y mostraba utilidades ficticias.' },
      { tipo: 'vf', seccion: 'auditores', enunciado: 'En el caso La Polar, la Corte Suprema aceptó la defensa de PwC de que los auditores no están para detectar fraudes.', respuesta: false, explicacion: 'La rechazó: el auditor debe aplicar escepticismo profesional.' },
      { tipo: 'alternativas', seccion: 'auditores', enunciado: '¿Qué incentivo tenían los ejecutivos de La Polar para inflar el precio de la acción?', opciones: ['Un plan de stock options a precio fijo aprobado en 2005', 'Una OPA pendiente', 'Un aumento de capital con descuento', 'La venta del edificio corporativo'], correcta: 0, explicacion: 'Mientras más subiera la acción, más ganaban con las opciones.' },
      { tipo: 'alternativas', seccion: 'auditores', enunciado: '¿Qué conflicto de interés de los auditores ilustra el caso Enron?', opciones: ['Ganar más por consultoría que por auditoría, lo que permite a la empresa presionar a la auditora', 'Ser accionista de la empresa auditada', 'Auditar a la competencia', 'Cobrar en acciones'], correcta: 0, explicacion: 'La amenaza de cancelar la consultoría compromete la independencia.' },
      { tipo: 'alternativas', seccion: 'auditores', enunciado: '¿Qué solución adoptó la legislación chilena para proteger la independencia del auditor externo?', opciones: ['Prohibir que preste servicios distintos de la auditoría a la entidad auditada y a su grupo', 'Prohibir toda consultoría a las auditoras', 'Que la CMF designe al auditor', 'Rotar al auditor cada año'], correcta: 0, explicacion: 'Regla de incompatibilidad de servicios, sin prohibición absoluta de consultoría.' },
      { tipo: 'vf', seccion: 'auditores', enunciado: 'El auditor externo certifica si los estados financieros reflejan razonablemente la realidad económica de la empresa.', respuesta: true, explicacion: 'Es su función legal respecto de los emisores de oferta pública.' },

      { tipo: 'oral', seccion: 'disclosure', enunciado: 'Explique el mandatory disclosure y sus atributos.', puntos: ['Por qué: sin banco, el inversionista no puede verificar la solvencia; compra expectativas (La Vega vs. mercado).', 'Art. 9° LMV: quien capta del público debe decir la verdad y divulgar.', 'Trío dorado: veraz, suficiente, oportuna.', 'Instituciones: auditores externos, clasificadores de riesgo, hechos esenciales.', 'Sanciones: multas de la CMF y delito por información falsa.'], norma: 'Art. 9° Ley 18.045' },
      { tipo: 'oral', seccion: 'auditores', enunciado: 'Explique el caso La Polar y el rol de los auditores externos.', puntos: ['Stock options de 2005 e incentivo a inflar el precio.', 'Repactaciones unilaterales: evitar castigos y crear créditos mayores; utilidades ficticias.', 'Resultados «espectaculares» en plena crisis; acción sobre $2.400 y caída de más de 99% en 2011.', 'Infracción a la veracidad y fallas de gobierno corporativo; sanción a PwC; escepticismo profesional.', 'Independencia del auditor: conflicto por consultoría (Enron) e incompatibilidad de servicios.'], norma: 'Arts. 9° y 59 Ley 18.045' }
    ]
  });
})();
