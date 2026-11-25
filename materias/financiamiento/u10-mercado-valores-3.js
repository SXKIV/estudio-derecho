/* Unidad 10 — Mercado de valores III: información y CMF (clases 19 a 22 del Prof. Gaspar).
   Fuentes: apunte completo de clases del Prof. Gaspar (secciones 7.8 a 9 del apunte de mercado
   de valores). Las secciones 3 a 6 se agregaron con el apunte completo.
   Orden y numeración de las secciones (7.8.1 … 9.3): los del apunte completo de clases del Prof. Gaspar
   (parte «Mercado de valores», puntos 7.8 a 9). */
(function () {
  var fmt = function (n) { return Number(n).toLocaleString('es-CL'); };

  Estudio.registrarUnidad({
    id: 'u10', numero: 10, bloque: 'Prof. Gaspar', profesor: 'Gaspar',
    titulo: 'Mercado de valores III: información y CMF',
    resumen: 'Revelación obligatoria (mandatory disclosure, art. 9° LMV): información veraz (auditores externos, La Polar y Enron), suficiente (IFRS, memoria integrada y clasificadoras de riesgo) y oportuna (hechos esenciales y reservados). Triple responsabilidad del art. 55 LMV y el rol sancionador de la CMF. Información privilegiada: objeto, insiders, conductas prohibidas y período de bloqueo (casos Videla, Blanco y Negro y Navarrete).',
    lecturas: 'Apunte completo de clases del Prof. Gaspar (clases 19 a 22 del cronograma). Lecturas: Mardones, tomo II, pp. 401-407, 210-221, 411-424 y 64-85; Gaspar, artículo sobre gatekeepers. El orden y la numeración de las secciones siguen el apunte completo de clases (parte «Mercado de valores», puntos 7.8 a 9).',

    glosario: [
      { termino: 'Mandatory disclosure', definicion: 'Revelación obligatoria: quien capta recursos del público en el mercado de valores queda sujeto imperativamente a decir la verdad y divulgar su información (art. 9° LMV).', fuente: 'Art. 9° LMV; apuntes', seccion: 'disclosure', sub: 'dis-trio', alias: ['revelacion obligatoria', 'deber de informar al mercado'] },
      { termino: 'Trío dorado', definicion: 'Los tres atributos que debe tener la información que los emisores entregan al mercado según el art. 9° LMV: veraz, suficiente y oportuna.', fuente: 'Art. 9° LMV; apuntes', seccion: 'disclosure', sub: 'dis-trio', alias: ['veraz suficiente y oportuna'] },
      { termino: 'Información veraz', definicion: 'Información ajustada estrictamente a la realidad contable y financiera de la empresa, sin engaños ni distorsiones. Su infracción es además delito según el apunte (art. 59 a LMV).', fuente: 'Arts. 9° y 59 LMV; apuntes', seccion: 'auditores', sub: 'au-polar', alias: ['veracidad'] },
      { termino: 'Información suficiente', definicion: 'Información completa, detallada e idónea para que un hombre juicioso pueda evaluar el riesgo real de la inversión.', fuente: 'Art. 9° LMV; apuntes', seccion: 'disclosure', sub: 'dis-trio', alias: ['suficiencia'] },
      { termino: 'Información oportuna', definicion: 'Información divulgada en el momento en que ocurren los hechos, para evitar asimetrías y aprovechamientos indebidos.', fuente: 'Art. 9° LMV; apuntes', seccion: 'disclosure', sub: 'dis-trio', alias: ['oportunidad'] },
      { termino: 'Auditor externo', definicion: 'Auditor independiente que examina los estados financieros de los emisores de oferta pública y certifica si reflejan razonablemente la realidad económica de la empresa.', fuente: 'Apuntes de clases', seccion: 'auditores', sub: 'au-independencia', alias: ['auditores externos', 'auditoria externa', 'empresa de auditoria externa'] },
      { termino: 'Escepticismo profesional', definicion: 'Principio que obliga al auditor a cuestionar diligentemente la veracidad de la información financiera que certifica; por eso la Corte Suprema rechazó la excusa de PwC de haber sido engañada (caso La Polar).', fuente: 'Apuntes de clases', seccion: 'auditores', sub: 'au-polar' },
      { termino: 'Incompatibilidad de servicios', definicion: 'Prohibición a la empresa de auditoría externa de prestar cualquier servicio distinto de la auditoría a la entidad que audita o a las sociedades de su mismo grupo, para proteger su independencia.', fuente: 'Apuntes de clases', seccion: 'auditores', sub: 'au-independencia', alias: ['independencia del auditor'] },
      { termino: 'Información esencial', definicion: 'Aquella que un hombre juicioso consideraría importante para sus decisiones sobre inversión.', fuente: 'Art. 9° inc. 2° LMV, según el apunte', seccion: 'suficiencia', sub: 'su-concepto', literal: true, alias: ['hecho relevante', 'informacion relevante'] },
      { termino: 'IFRS', definicion: 'Estándar internacional de contabilidad (International Financial Reporting Standards) que Chile adoptó para que sus estados financieros sean comparables con los de cualquier país. EE. UU. usa su propio estándar (US GAAP).', fuente: 'Apuntes de clases', seccion: 'suficiencia', sub: 'su-estandar', alias: ['normas ifrs', 'international financial reporting standards'] },
      { termino: 'Memoria integrada', definicion: 'Memoria anual que reúne en un solo documento oficial el reporte del negocio y los estándares ESG/ASG, según la NCG 461 de la CMF.', fuente: 'NCG 461 CMF; apuntes', seccion: 'suficiencia', sub: 'su-estandar', alias: ['ncg 461', 'memoria anual'] },
      { termino: 'Factores ESG', definicion: 'Exigencias de información sobre aspectos medioambientales (E), sociales (S) y de gobierno corporativo (G), que se sumaron a la memoria tras casos como La Polar.', fuente: 'Apuntes de clases', seccion: 'suficiencia', sub: 'su-estandar', alias: ['esg', 'asg', 'factores asg'] },
      { termino: 'Clasificadora de riesgo', definicion: 'Entidad que procesa la información pública de un emisor y emite un pronóstico sencillo y actualizado sobre su probabilidad de solvencia, en una escala que va de AAA a E.', fuente: 'Apuntes de clases', seccion: 'suficiencia', sub: 'su-clasificadoras', alias: ['clasificadoras de riesgo', 'clasificadores de riesgo', 'clasificacion de riesgo'] },
      { termino: 'Categoría E', definicion: 'Clasificación que indica que no existe información suficiente para pronosticar la solvencia del emisor; no significa que sea insolvente. El mercado la castiga más que una mala situación financiera.', fuente: 'Apuntes de clases', seccion: 'suficiencia', sub: 'su-clasificadoras', alias: ['clasificacion e'] },
      { termino: 'Hecho esencial', definicion: 'Hecho, negociación o evento no programado ni periódico, relevante para las decisiones de un inversionista razonable, que el emisor debe divulgar en forma veraz, suficiente y oportuna en cuanto ocurre o llega a su conocimiento. Calificarlo es facultad del directorio.', fuente: 'Art. 10 LMV; apuntes', seccion: 'oportunidad', sub: 'opo-esencial', alias: ['hechos esenciales'] },
      { termino: 'Hecho esencial reservado', definicion: 'Hecho esencial referido a negociaciones pendientes cuya divulgación perjudicaría el interés social, que con el acuerdo de tres cuartas partes de los directores en ejercicio se comunica solo a la CMF, al día siguiente. Por el art. 164 es información privilegiada per se.', fuente: 'Arts. 10 y 164 LMV; apuntes', seccion: 'oportunidad', sub: 'opo-reservado', alias: ['hecho reservado', 'hechos reservados', 'informacion reservada'] },
      { termino: 'Deber de reserva', definicion: 'Deber de los directores de guardar confidencialidad sobre los negocios e información social no divulgada oficialmente. Cede cuando la reserva lesiona el interés social o la información trata de infracciones a los estatutos, a la ley o a la normativa de la CMF.', fuente: 'Art. 43 LSA; apuntes', seccion: 'oportunidad', sub: 'opo-tension' },
      { termino: 'Triple responsabilidad', definicion: 'Esquema del art. 55 LMV: quien infringe la ley, sus normas complementarias o las de la CMF responde civilmente (indemnización), administrativamente (sanciones de la CMF) y penalmente (si la conducta es delito).', fuente: 'Art. 55 LMV; apuntes', seccion: 'infracciones', sub: 'in-art55', alias: ['articulo 55', 'responsabilidad civil administrativa y penal'] },
      { termino: 'Comisión para el Mercado Financiero', definicion: 'Agencia que supervisa y regula el mercado de capitales chileno. Tiene atribuciones normativa, de licenciamiento y registro, de supervisión y sancionadora; separa la investigación (Fiscal) de la decisión (Consejo).', fuente: 'Apuntes de clases', seccion: 'infracciones', sub: 'in-adm', alias: ['cmf', 'la comision', 'svs'] },
      { termino: 'Principio de oportunidad', definicion: 'Política implícita de la CMF de no perseguir todas las infracciones por sus recursos limitados, priorizando corregir por supervisión directa sin abrir procedimientos sancionatorios.', fuente: 'Apuntes de clases', seccion: 'infracciones', sub: 'in-adm' },
      { termino: 'Compatibilidad de sanciones', definicion: 'Posibilidad de sancionar un mismo hecho en sede administrativa y penal sin violar el non bis in idem; el art. 78 de la Ley 21.595 dispone que la multa firme de una sede se abona a la de la otra.', fuente: 'Art. 78 Ley 21.595; apuntes', seccion: 'infracciones', sub: 'in-penal', alias: ['non bis in idem', 'abono de multas'] },
      { termino: 'Información privilegiada', definicion: 'Cualquier información referida a uno o varios emisores de valores, a sus negocios o a uno o varios valores por ellos emitidos, no divulgada al mercado y cuyo conocimiento, por su naturaleza, sea capaz de influir en la cotización de los valores emitidos, como asimismo, la información reservada a que se refiere el artículo 10 de esta ley.', fuente: 'Art. 164 inc. 1° LMV, según el apunte', seccion: 'privilegiada', sub: 'pr-objeto', literal: true, alias: ['insider trading'] },
      { termino: 'Uso de información privilegiada', definicion: 'Conducta de comprar o vender valores aprovechando información privilegiada para evitar una pérdida u obtener una ganancia. Tiene sanción administrativa y es delito. Ejemplos: Restle en Blanco y Negro; la CMF sancionó a Videla por esta conducta.', fuente: 'Arts. 165 y 166 LMV; apuntes', seccion: 'privilegiada', sub: 'pr-conductas' },
      { termino: 'Insider', definicion: 'Persona que accede a la información o la custodia en razón de su cargo, posición, profesión, oficio o relación de confianza; solo a ella alcanzan las prohibiciones sobre información privilegiada.', fuente: 'Arts. 165 y 166 LMV; apuntes', seccion: 'privilegiada', sub: 'pr-sujeto', alias: ['insiders', 'iniciado', 'iniciados'] },
      { termino: 'Deber de abstención', definicion: 'Prohibición de transar valores teniendo información privilegiada, aunque no haya ánimo de lucro especulativo. Su infracción tiene sanción administrativa, pero no es delito (Mosa en Blanco y Negro).', fuente: 'Arts. 165 y 166 LMV; apuntes', seccion: 'privilegiada', sub: 'pr-conductas' },
      { termino: 'Revelación de información privilegiada', definicion: 'Conducta de transmitir información privilegiada o recomendar o inducir a comprar o vender valores. Tiene sanción administrativa y es delito (caso Navarrete).', fuente: 'Arts. 165 y 166 LMV; apuntes', seccion: 'privilegiada', sub: 'pr-conductas', alias: ['induccion', 'recomendacion', 'comunicacion de informacion privilegiada'] },
      { termino: 'Período de bloqueo', definicion: 'Prohibición objetiva para directores y ejecutivos principales, y sus parientes hasta el segundo grado, de transar valores del emisor en los 30 días previos a la publicación de los estados financieros. Su infracción tiene sanción administrativa, no penal.', fuente: 'Art. 16 LMV, según el apunte', seccion: 'privilegiada', sub: 'pr-bloqueo', alias: ['blackout', 'blackout period', 'periodo de bloqueo'] }
    ],

    secciones: [
      {
        id: 'disclosure', grupo: '7.8. Mandatory disclosure (riesgo de solvencia)', titulo: '7.8–7.8.1. Mandatory disclosure: introducción',
        html: `
<h3 data-sub="dis-intro">Por qué revelar: de La Vega al mercado de valores</h3>
<p>Si se suprime al banco, el mercado debe dar al inversionista otra forma de evaluar el <b>riesgo de solvencia</b> del emisor. El banco puede exigir, auditar y verificar la información del deudor; el inversionista común no, y queda expuesto a asimetrías de información y a que le vendan información falsa.</p>
<div class="grid dos">
  <div class="card"><b>En La Vega</b><p>El comprador ve la fruta y verifica en el acto la calidad y lo que dice el vendedor.</p></div>
  <div class="card"><b>En el mercado de valores</b><p>Se compran <b>expectativas futuras</b> (dividendos, alza del título, pago de la deuda). No se pueden verificar por uno mismo: se exige un estándar ético y legal superior.</p></div>
</div>
<h3 data-sub="dis-trio">El «trío dorado» (art. 9° LMV)</h3>
<p>A diferencia del derecho común, donde el engaño o la omisión pueden matizarse, la LMV impone la <b>revelación obligatoria</b> (<span class="norma">art. 9° LMV</span>): quien capta recursos del público debe decir la verdad y divulgar su información.</p>
<div class="flow"><div class="node">Veraz<small>ajustada a la realidad</small></div><div class="arrow">+</div><div class="node">Suficiente<small>para que un hombre juicioso evalúe el riesgo</small></div><div class="arrow">+</div><div class="node">Oportuna<small>en el momento de los hechos</small></div><div class="arrow">=</div><div class="node y">«Trío dorado»<small>art. 9° LMV</small></div></div>
<p class="small">Cada atributo tiene una institución que lo resguarda: veracidad → auditores externos (7.8.2); suficiencia → clasificadores de riesgo (7.8.3); oportunidad → hechos esenciales y reservados (7.8.4).</p>`
      },
      {
        id: 'auditores', grupo: '7.8. Mandatory disclosure (riesgo de solvencia)', titulo: '7.8.2. Veracidad de la información: auditores externos',
        html: `
<h3 data-sub="au-polar">Veracidad: el caso La Polar</h3>
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
<h3 data-sub="au-independencia">Auditores externos e independencia: Enron</h3>
<p>Los estados financieros de los emisores de oferta pública deben ser examinados por <b>auditores externos independientes</b>, que certifican si reflejan razonablemente la realidad económica de la empresa.</p>
<div class="callout red"><p><b>El conflicto:</b> la auditora conoce a fondo a la empresa y puede venderle consultoría (tributaria, legal, laboral, outsourcing). Si gana más por consultoría que por auditoría, la empresa puede presionarla: «apruebe mis estados financieros o cancelo los contratos». Fue lo que ocurrió en <b>Enron</b> (EE. UU.), que llevó a la quiebra a una auditora muy conocida.</p></div>
<p><b>Solución chilena:</b> en vez de prohibir toda consultoría, una regla de <b>incompatibilidad de servicios</b>: la auditora externa no puede prestar ningún servicio distinto de la auditoría a la entidad que audita ni a las sociedades de su grupo empresarial.</p>`
      },
      {
        id: 'suficiencia', grupo: '7.8. Mandatory disclosure (riesgo de solvencia)', titulo: '7.8.3. Suficiencia: estados financieros, memoria y clasificadores de riesgo',
        html: `
<h3 data-sub="su-concepto">Un criterio de sustancia (art. 9° inc. 2°)</h3>
<p>La suficiencia es la segunda exigencia del art. 9° LMV. A diferencia de la veracidad, no se mide con un porcentaje: es un criterio de <b>sustancia</b>. La información es suficiente si entrega todos los antecedentes sustantivos para que un inversionista razonable decida invertir o desinvertir.</p>
<div class="cita">«Se entiende por información esencial aquella que un hombre juicioso consideraría importante para sus decisiones sobre inversión.»<span class="fuente">Art. 9° inc. 2° Ley 18.045, según el apunte</span></div>
<h3 data-sub="su-estandar">Estandarizar: estados financieros (IFRS) y memoria integrada</h3>
<p>Si cada empresa decide qué es «suficiente», cada una informará cosas distintas en formatos distintos y no se podrán comparar. Por eso la regulación <b>estandariza</b> la información pública en formatos fijos: los <b>estados financieros</b> y la <b>memoria anual</b>.</p>
<div class="grid dos">
  <div class="card"><b>Estados financieros: de las notas a IFRS</b><p>En los años 90, con la apertura económica, las empresas chilenas se financiaron afuera (por ejemplo, con ADRs en EE. UU.). Sus balances seguían la contabilidad chilena más largas <b>notas aclaratorias</b> para explicar las diferencias. Para atraer capitales, Chile adoptó <b>IFRS</b>, que permite comparar los estados financieros chilenos con los de cualquier país (activos, pasivos, provisiones, deterioros, capital).</p><p class="small">Nota del apunte: EE. UU. no usa IFRS, sino su propio estándar (US GAAP).</p></div>
  <div class="card"><b>Memoria: de la marcha del negocio a la memoria integrada</b><p>Hasta principios de siglo la memoria explicaba la marcha financiera y comercial. Tras casos como <b>La Polar</b> se exigió informar el <b>gobierno corporativo (G)</b>; después, aspectos <b>sociales (S)</b> (relaciones laborales, diversidad, comunidad) y <b>medioambientales (E)</b>: los factores <b>ESG/ASG</b>. La <span class="norma">NCG 461</span> de la CMF creó la <b>memoria integrada</b>: un solo documento con el negocio y los estándares ESG.</p><p class="small">Nota del apunte: hay tensión geopolítica sobre ESG, con retrocesos o congelamientos en la SEC de EE. UU. y aprensiones en la Unión Europea.</p></div>
</div>
<h3 data-sub="su-clasificadoras">Clasificadoras de riesgo</h3>
<p>Tanta información puede abrumar al inversionista común. Las <b>clasificadoras de riesgo</b> procesan la información pública y emiten un pronóstico <b>sencillo y actualizado</b> sobre la probabilidad de solvencia del emisor.</p>
<div class="flow"><div class="node">AAA</div><div class="arrow">→</div><div class="node">AA</div><div class="arrow">→</div><div class="node">A</div><div class="arrow">→</div><div class="node y">BBB<small>límite de inversión</small></div><div class="arrow">→</div><div class="node">B</div><div class="arrow">→</div><div class="node">C</div><div class="arrow">→</div><div class="node">D</div><div class="arrow">→</div><div class="node">E<small>sin información suficiente</small></div></div>
<div class="callout"><p><b>Ojo con la categoría E:</b> no significa que la empresa sea insolvente ni que el negocio sea malo, sino que <b>no hay información suficiente</b> para pronosticar. El mercado castiga la falta de información con más severidad que una mala situación financiera.</p></div>
<div class="card"><b>Problemas de las clasificadoras</b>
<ol>
  <li><b>Errores graves:</b> en la crisis subprime y en La Polar mantenían clasificaciones óptimas pese al fraude.</li>
  <li><b>Mercado cerrado:</b> en el mundo hay solo 4 o 5 firmas clasificadoras.</li>
  <li><b>Sin otros productos</b> como las auditoras: enfrentan alto riesgo por falta de escepticismo profesional y una eventual <b>responsabilidad civil extracontractual</b> ante los inversionistas por informes deficientes.</li>
</ol></div>`
      },
      {
        id: 'oportunidad', grupo: '7.8. Mandatory disclosure (riesgo de solvencia)', titulo: '7.8.4. Oportunidad: hechos esenciales y reservados',
        html: `
<h3 data-sub="opo-precio">Oportunidad y formación del precio</h3>
<p>La información debe entregarse a tiempo para que nadie conozca un hecho relevante antes que el resto y lo aproveche. Lo que se protege es la correcta <b>formación del precio</b>, la guía principal del inversionista para comprar o vender.</p>
<ul>
  <li>En la práctica, las empresas comunican la información no programada <b>al cierre de las bolsas</b>, para que el mercado la asimile antes de abrir.</li>
  <li>Ante hechos de impacto sistémico extremo (por ejemplo, el 11 de septiembre de 2001), las bolsas <b>suspenden</b> sus transacciones mientras se procesa la información.</li>
</ul>
<h3 data-sub="opo-tension">La tensión: informar vs. guardar reserva</h3>
<div class="grid dos">
  <div class="card"><b>Deber de reserva</b><p>Por regla general, la contabilidad y las negociaciones de una empresa son reservadas. El <span class="norma">art. 43 LSA</span> impone a los directores un deber de reserva sobre los negocios sociales. Divulgar antes de tiempo puede hacer fracasar un negocio.</p><p class="small">Según el apunte, ese deber cede cuando la reserva lesiona el interés social o cuando la información trata de infracciones a los estatutos, a la ley o a la normativa de la CMF.</p></div>
  <div class="card"><b>Deber de informar</b><p>Los estados financieros y la memoria son <b>periódicos y programados</b>. Para los hechos <b>imprevistos</b>, la ley creó dos instituciones que resuelven la tensión: el hecho esencial y el hecho esencial reservado.</p></div>
</div>
<h3 data-sub="opo-esencial">1) Hecho esencial (art. 10 LMV)</h3>
<p>Mecanismo por el que el emisor comunica al mercado cualquier hecho, negociación o evento <b>no programado ni periódico</b> que sea relevante para las decisiones de un inversionista razonable.</p>
<div class="cita">«[…] las entidades comprendidas en él deberán divulgar en forma veraz, suficiente y oportuna todo hecho o información esencial respecto de ellas mismas y de sus negocios en el momento en que éste ocurra o llegue a su conocimiento.»<span class="fuente">Art. 10 inc. 2° Ley 18.045, según el apunte</span></div>
<ul>
  <li>Decidir si algo es hecho esencial es facultad <b>exclusiva del directorio</b> (o de la administración). Según el apunte, es una decisión de alta responsabilidad que el regulador no puede forzar con instrucciones directas de revelación.</li>
  <li>El directorio debe implementar <b>políticas, procedimientos, sistemas y controles</b> para asegurar la divulgación y evitar filtraciones; la CMF fija sus requisitos por norma de carácter general (art. 10 inc. 3°).</li>
</ul>
<h3 data-sub="opo-reservado">2) Hecho esencial reservado (art. 10 LMV)</h3>
<p>El directorio está convencido de que hay un hecho esencial, pero concluye que divulgarlo de inmediato <b>perjudicaría el interés social</b>. Se comunica en forma confidencial solo a la CMF, que lo guarda con protocolos de seguridad para evitar filtraciones.</p>
<div class="cita">«[…] con la aprobación de las tres cuartas partes de los directores en ejercicio podrá darse el carácter de reservado a ciertos hechos o antecedentes que se refieran a negociaciones aún pendientes que al conocerse puedan perjudicar el interés social.»<span class="fuente">Art. 10 inc. 4° Ley 18.045, según el apunte</span></div>
<div class="flow"><div class="node">Negociación pendiente<small>cuya divulgación perjudica</small></div><div class="arrow">→</div><div class="node">Acuerdo de ¾ de los directores en ejercicio<small>sin directorio: todos los administradores</small></div><div class="arrow">→</div><div class="node">Aviso a la CMF<small>al día siguiente, en forma confidencial</small></div><div class="arrow">→</div><div class="node y">Información privilegiada per se<small>art. 164 LMV</small></div></div>
<div class="callout red"><p><b>Consecuencia clave:</b> por el solo hecho de calificarse como reservado, el art. 164 LMV lo convierte en <b>información privilegiada</b>. Como la propia administración dijo que era relevante y secreto, se prohíbe en forma absoluta usarlo para operar. Ver 9.2.1 y el caso Videla.</p></div>`
      },
      {
        id: 'infracciones', grupo: '8. Régimen general de infracciones', titulo: '8. Régimen general de infracciones (art. 55 LMV)',
        html: `
<h3 data-sub="in-art55">El art. 55: triple responsabilidad</h3>
<p>Infringir la LMV, sus normas complementarias o las normas de la CMF genera una <b>triple responsabilidad</b>: civil, administrativa y penal.</p>
<div class="cita">«La persona que infrinja las disposiciones contenidas en la presente ley, sus normas complementarias o las normas que imparta la Comisión ocasionando daño a otro, está obligada a la indemnización de los perjuicios. Lo anterior no obsta a las sanciones administrativas o penales que asimismo pudiere corresponderle.»<span class="fuente">Art. 55 inc. 1° Ley 18.045, según el apunte</span></div>
<p class="small">El mismo artículo agrega que por las personas jurídicas responden además sus administradores o representantes, salvo que conste su falta de participación o su oposición. Directores, gerentes y auditores de emisores que infrinjan las normas de su organización responden <b>solidariamente</b>; también los oferentes de una misma OPA que infrinjan el Título XXV.</p>
<h3 data-sub="in-civil">8.1. Responsabilidad civil (indemnización de perjuicios)</h3>
<p>Permite exigir la reparación integral del daño a inversionistas u otros agentes. Se usa poco por dos razones: <b>honorarios muy altos</b> y <b>juicios muy largos</b> (cerca de 5 años en primera instancia y entre 9 y 10 años con la Corte de Apelaciones y la Corte Suprema).</p>
<div class="card" style="margin-bottom:12px"><p><span class="etiqueta roja">Pregunta de examen</span> <b>La Polar y la responsabilidad civil de PwC</b></p>
<ul>
  <li>PwC, auditora externa, no detectó la falsedad contable ni las repactaciones unilaterales y validó estados financieros inflados.</li>
  <li>Además de las sanciones administrativas, las <b>AFP</b> y <b>Moneda AGF</b> demandaron indemnización a PwC.</li>
  <li>Las demandas fueron rechazadas en primera instancia. Tras 9 a 10 años (hacia 2020), la <b>Corte Suprema</b> dio vuelta el criterio y las acogió a favor de accionistas y tenedores de bonos.</li>
  <li>La indemnización a dos AFP era tan alta que ponía a PwC en riesgo de quiebra. Las partes llegaron a un <b>acuerdo</b>: seguros internacionales más un porcentaje de las utilidades futuras de los socios.</li>
</ul></div>
<h3 data-sub="in-adm">8.2. Responsabilidad administrativa y el rol de la CMF</h3>
<p>La <b>Comisión para el Mercado Financiero (CMF)</b> es la agencia que supervisa y regula el mercado de capitales.</p>
<table class="tabla">
<tr><th>Atribución</th><th>Qué hace</th></tr>
<tr><td><b>Normativa</b></td><td>Dicta reglamentación general para los participantes (por ejemplo, la NCG N° 30).</td></tr>
<tr><td><b>Licenciamiento y registro</b></td><td>Inscribe valores y autoriza bolsas, depósitos de valores y agentes.</td></tr>
<tr><td><b>Supervisión</b></td><td>Fiscaliza en forma continua; recibe y revisa estados financieros y comunicaciones.</td></tr>
<tr><td><b>Sancionadora</b></td><td>Impone sanciones administrativas.</td></tr>
</table>
<ul>
  <li><b>Sanciones:</b> la <b>multa</b> (en principio, hasta 100.000 UF, monto que puede subir según variables de la ley), la <b>amonestación</b> escrita y la <b>revocación</b> de la autorización para operar.</li>
  <li><b>Estructura:</b> separa la <b>Unidad de Investigación</b> (a cargo de un Fiscal) del órgano que resuelve y sanciona (el <b>Consejo</b> de la CMF). Sus resoluciones tienen un régimen propio de reclamación judicial, sin recurrir al recurso de protección como vía general.</li>
  <li><b>Principio de oportunidad implícito:</b> toda infracción podría sancionarse, haya o no perjuicio, pero con recursos limitados la CMF prioriza: muchas veces corrige por supervisión directa sin abrir un procedimiento sancionatorio.</li>
  <li>Las multas son <b>a beneficio fiscal</b>: no reparan a las víctimas. Para eso está la acción civil.</li>
</ul>
<h3 data-sub="in-penal">8.3. Responsabilidad penal y compatibilidad de sanciones</h3>
<p>Solo hay delito si la conducta está <b>expresamente descrita como tal</b> en la ley. Se discutió si sancionar un mismo hecho en sede administrativa y penal viola el <i>non bis in idem</i> (Soto Kloss cuestionaba la potestad sancionadora y la duplicidad; García y Arancibia debatieron los tipos penales en esta esfera). La jurisprudencia, incluido el Tribunal Constitucional, afirmó la <b>compatibilidad</b>. El <span class="norma">art. 78 de la Ley 21.595</span> (delitos económicos) lo zanjó: la multa firme de una sede se <b>abona</b> a la de la otra.</p>
<table class="tabla">
<tr><th>Ilícitos de doble persecución (administrativa y penal)</th><th>Caso</th></tr>
<tr><td>Entrega de información falsa al mercado</td><td>La Polar; Sartor</td></tr>
<tr><td>Manipulación de precios y transacciones ficticias</td><td>Cascadas (Unidad 9)</td></tr>
<tr><td>Oferta pública de valores no inscritos</td><td>Arcano</td></tr>
<tr><td>Uso y revelación de información privilegiada</td><td>La sanción penal y administrativa máxima (punto 9)</td></tr>
</table>`
      },
      {
        id: 'privilegiada', grupo: '9. Información privilegiada', titulo: '9. Régimen legal de la información privilegiada',
        html: `
<h3 data-sub="pr-ratio">9.1. Ratio legis y tensión institucional</h3>
<p>Choca el deber tradicional de <b>reserva</b> (art. 43 LSA, reserva contable) con la <b>revelación obligatoria</b> (art. 9° LMV). La información privilegiada existe naturalmente dentro de las empresas (negociaciones en curso, balances en preparación). La ley <b>no prohíbe que exista</b>: prohíbe <b>aprovecharla</b>. Si un iniciado opera con ventaja, el precio deja de ser correcto y se destruye la confianza en el mercado.</p>
<h3 data-sub="pr-aristas">9.2. Las tres aristas de la información privilegiada</h3>
<p>Para saber si hay una infracción se miran tres cosas: <b>qué</b> información es privilegiada (objeto), <b>quién</b> queda sujeto a la prohibición (insiders) y <b>qué</b> conductas se prohíben.</p>
<h4 data-sub="pr-objeto">9.2.1. Primera arista: el objeto (art. 164 LMV)</h4>
<div class="cita">«[…] se entiende por información privilegiada cualquier información referida a uno o varios emisores de valores, a sus negocios o a uno o varios valores por ellos emitidos, no divulgada al mercado y cuyo conocimiento, por su naturaleza, sea capaz de influir en la cotización de los valores emitidos, como asimismo, la información reservada a que se refiere el artículo 10 de esta ley.»<span class="fuente">Art. 164 inc. 1° Ley 18.045, según el apunte</span></div>
<p class="small">El inc. 2° agrega la información sobre decisiones de adquisición, enajenación y aceptación o rechazo de ofertas específicas de un inversionista institucional.</p>
<ul>
  <li><b>Aptitud ex ante:</b> se juzga desde un observador racional al momento de generarse la información. No se exige que el precio efectivamente cambie después (ex post), porque otros factores (combustibles, contingencias internacionales como la exportación de chips de Nvidia a China) pueden neutralizar el efecto. Es el mismo análisis que la <b>tentativa</b> penal: importa la idoneidad del dato al momento del hecho.</li>
  <li><b>Per se:</b> los <b>hechos reservados</b> (art. 10) y los <b>balances aprobados por el directorio</b> que aún no se envían a la CMF.</li>
</ul>
<div class="grid dos">
  <div class="card"><p><span class="etiqueta roja">Pregunta de examen</span> <b>Caso Matías Videla (Cencosud, 2023)</b></p><p>Cencosud negociaba comprar una cadena de supermercados en Brasil y lo informó a la CMF como <b>hecho reservado</b>, en una comunicación firmada por Videla, su gerente general. Durante la reserva, Videla <b>compró acciones</b> de Cencosud. Luego la operación se cayó. La CMF lo sancionó por uso de información privilegiada; la Corte de Apelaciones y la Corte Suprema confirmaron la multa (3-0 y 8-0, según el apunte), con condena en costas: no tenía motivo plausible para litigar, porque el hecho reservado es información privilegiada <b>per se</b>.</p></div>
  <div class="card"><b>Balances aprobados</b><p><b>Piñera con LAN (2007):</b> sentó la doctrina de que los estados financieros aprobados por el directorio son información privilegiada antes de entregarse al mercado.</p><p><b>Blanco y Negro (2020):</b> el directorio aprobó estados financieros con pérdidas. Al día siguiente, antes de su difusión, el director Gabriel Restle <b>vendió</b> acciones y el director Aníbal Mosa <b>compró</b>.</p></div>
</div>
<h4 data-sub="pr-sujeto">9.2.2. Segunda arista: el sujeto activo, los insiders</h4>
<p>La prohibición alcanza solo a los <b>insiders</b>: quienes acceden a la información o la custodian <b>en razón de su cargo, posición, profesión, oficio o relación de confianza</b>. No alcanza a quien la obtiene por azar o por su propio análisis:</p>
<ul>
  <li>El repartidor de comida que escucha una reunión corporativa.</li>
  <li>El taxista o chofer de Uber que oye a ejecutivos conversar.</li>
  <li>El inversionista que llega a conclusiones con su propio análisis financiero.</li>
</ul>
<h4 data-sub="pr-conductas">9.2.3. Tercera arista: las conductas prohibidas</h4>
<p class="small">Arts. 165 y 166 LMV.</p>
<table class="tabla">
<tr><th>Conducta</th><th>Qué es</th><th>Sanción</th></tr>
<tr><td><b>Uso</b></td><td>Comprar o vender valores para evitar una pérdida u obtener una ganancia.</td><td>Administrativa (CMF) y <b>delito</b>.</td></tr>
<tr><td><b>Infracción al deber de abstención</b></td><td>Transar valores teniendo la información, sin ánimo de lucro especulativo.</td><td>Solo administrativa (CMF). <b>No es delito.</b></td></tr>
<tr><td><b>Revelación o comunicación</b></td><td>Transmitir la información o recomendar o inducir a comprar o vender.</td><td>Administrativa (CMF) y <b>delito</b>.</td></tr>
</table>
<div class="grid dos">
  <div class="card"><b>Blanco y Negro: dos conductas distintas</b><p><b>Restle (uso):</b> vendió tras el balance negativo para evitar una pérdida. Sanción CMF y delito.</p><p><b>Mosa (deber de abstención):</b> compró conociendo el balance negativo, pero no para especular, sino para aumentar su control accionario en Colo-Colo (según el apunte, para lanzar una OPA y tomar el control). Sanción CMF, sin delito.</p></div>
  <div class="card"><p><span class="etiqueta roja">Pregunta de examen</span> <b>Hermanos Navarrete (CAP / Ibercap)</b></p><p>Felipe Navarrete, director, sabía por su cargo que Ibercap se reestructuraría para aumentar su participación en CAP y obtener un director más. En un almuerzo familiar con sus hermanas (en la pizzería Tiramisú, en El Golf), les reveló la información o les recomendó comprar. En el mismo almuerzo, ellas instruyeron por teléfono a sus corredores comprar acciones de CAP. Se sancionó a Felipe y a sus hermanas por infringir las prohibiciones de <b>revelación e inducción</b>; los tribunales lo ratificaron.</p></div>
</div>
<h3 data-sub="pr-bloqueo">9.3. Medida preventiva: período de bloqueo</h3>
<p class="small">En el apunte aparece como «2.6»; es el punto siguiente a 9.2.</p>
<p>Como probar la aptitud de la información es difícil, la ley agrega una <b>regla objetiva</b>: los <b>directores y ejecutivos principales</b> no pueden transar valores del emisor en los <b>30 días previos</b> a la publicación de los estados financieros. Se extiende a sus parientes por consanguinidad o afinidad hasta el <b>segundo grado</b> (hermanos, cuñados, suegros, etc.), con sanción incluso si el pariente no sabía que el familiar era director.</p>
<div class="callout yellow"><p><b>Ojo:</b> el apunte ubica esta regla en el «art. 16 LMV» y la trata como sanción <b>administrativa</b> de la CMF: no es delito por el solo hecho de operar dentro de los 30 días. El apunte no precisa si son días corridos o hábiles.</p></div>`
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
      },
      {
        id: 'hechoesencial', titulo: '¿Hecho esencial, reservado o nada que informar?', seccion: 'oportunidad',
        descripcion: 'Situaciones ilustrativas. Decide qué debe hacer el directorio según el art. 10 LMV, tal como lo explica el apunte.',
        montar: function (el) {
          var casos = [
            ['El emisor pierde un contrato que un inversionista razonable consideraría importante. No hay negociación pendiente.', 'e', 'Es un hecho no programado y relevante: se divulga al mercado en cuanto ocurre.'],
            ['El emisor negocia comprar una cadena en el extranjero. Si se supiera, la negociación fracasaría. Votan a favor de la reserva 6 de 8 directores en ejercicio.', 'r', '6 de 8 son las tres cuartas partes: se comunica reservadamente a la CMF al día siguiente.'],
            ['Misma negociación, pero solo 5 de 8 directores en ejercicio aprueban la reserva.', 'e', 'No se alcanzan las tres cuartas partes (6 de 8). Si es esencial, debe divulgarse.'],
            ['El emisor cambia al proveedor de café de sus oficinas.', 'n', 'Un hombre juicioso no lo consideraría importante para invertir: no es información esencial.'],
            ['El directorio quiere reservar la noticia de que la fábrica principal se incendió ayer, porque bajaría la acción.', 'e', 'La reserva solo procede para negociaciones aún pendientes. Un hecho consumado se divulga.']
          ];
          var et = { e: 'Divulgar como hecho esencial', r: 'Hecho reservado ante la CMF', n: 'No hay que informar' };
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
        id: 'abonomultas', titulo: 'Multa CMF y multa penal: el abono del art. 78', seccion: 'infracciones',
        descripcion: 'Ejemplo ilustrativo (cifras inventadas). Por el art. 78 de la Ley 21.595, la multa firme de una sede se descuenta de la que se fije en la otra.',
        montar: function (el) {
          el.innerHTML = '<div class="fila"><div class="campo"><label>Multa administrativa firme de la CMF (UF)</label><input type="number" id="a" value="20000" step="1000" min="0"></div><div class="campo"><label>Multa penal fijada después (UF)</label><input type="number" id="p" value="15000" step="1000" min="0"></div><div class="campo"><label>Perjuicio sufrido por los inversionistas (UF)</label><input type="number" id="d" value="50000" step="1000" min="0"></div></div><div id="out"></div>';
          function calc() {
            var a = Math.max(0, +el.querySelector('#a').value || 0), p = Math.max(0, +el.querySelector('#p').value || 0), d = Math.max(0, +el.querySelector('#d').value || 0);
            var saldo = Math.max(0, p - a);
            el.querySelector('#out').innerHTML = '<table class="tabla"><tr><th>Concepto</th><th>UF</th></tr>' +
              '<tr><td>Multa penal fijada</td><td>' + fmt(p) + '</td></tr><tr><td>Menos multa CMF ya pagada y firme</td><td>− ' + fmt(Math.min(a, p)) + '</td></tr>' +
              '<tr><td><b>Saldo de multa penal a pagar</b></td><td><b>' + fmt(saldo) + '</b></td></tr>' +
              '<tr><td>Total pagado al Fisco</td><td>' + fmt(a + saldo) + '</td></tr>' +
              '<tr><td>Lo que reciben los inversionistas por las multas</td><td>0</td></tr></table>' +
              '<div class="resultado mal">Las multas son <b>a beneficio fiscal</b>. Para recuperar sus ' + fmt(d) + ' UF de perjuicio, los inversionistas deben demandar la <b>indemnización civil</b> (art. 55 LMV), con juicios que pueden durar 9 a 10 años, como en La Polar contra PwC.</div>';
          }
          el.querySelectorAll('input').forEach(function (x) { x.oninput = calc; }); calc();
        }
      },
      {
        id: 'conductas', titulo: '¿Uso, abstención, revelación o nada?', seccion: 'privilegiada',
        descripcion: 'Clasifica cada caso según las tres aristas de la información privilegiada (objeto, sujeto y conducta).',
        montar: function (el) {
          var casos = [
            ['Restle, director de Blanco y Negro, vende acciones el día después de que el directorio aprobó un balance con pérdidas, antes de publicarlo.', 'u', 'Vendió para evitar una pérdida: uso de información privilegiada. Sanción CMF y delito.'],
            ['Mosa, director de Blanco y Negro, compra acciones conociendo el balance negativo, para aumentar su control en Colo-Colo.', 'a', 'No buscaba lucro especulativo: infracción al deber de abstención. Sanción CMF, sin delito.'],
            ['Un director cuenta en un almuerzo familiar una reestructuración que hará subir la acción, y sus hermanas compran ese mismo día.', 'r', 'Caso Navarrete: revelación e inducción. Se sancionó al director y a sus hermanas.'],
            ['Un chofer de Uber escucha a dos ejecutivos hablar de una fusión y compra acciones.', 'n', 'No es insider: no accedió a la información por su cargo ni por una relación de confianza.'],
            ['Un analista independiente deduce, con su propio estudio de los estados financieros públicos, que la empresa ganará más y compra.', 'n', 'Llegó a la conclusión por sus propios medios: no hay información privilegiada.'],
            ['Un gerente general firma la comunicación de un hecho reservado a la CMF y, durante la reserva, compra acciones de su empresa.', 'u', 'Caso Videla: el hecho reservado es información privilegiada per se. La CMF lo sancionó por uso.']
          ];
          var et = { u: 'Uso', a: 'Deber de abstención', r: 'Revelación', n: 'No hay infracción' };
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
        id: 'blackout', titulo: 'Calculadora del período de bloqueo', seccion: 'privilegiada',
        descripcion: 'Indica la fecha de publicación de los estados financieros, la fecha de la operación y quién opera. Cuenta días corridos (el apunte no precisa si son corridos o hábiles).',
        montar: function (el) {
          el.innerHTML = '<div class="fila"><div class="campo"><label>Publicación de los estados financieros</label><input type="date" id="pub" value="2026-03-31"></div><div class="campo"><label>Fecha de la compra o venta</label><input type="date" id="op" value="2026-03-10"></div></div>' +
            '<div class="campo" style="max-width:420px"><label>¿Quién opera?</label><select id="q"><option value="d">Director o ejecutivo principal</option><option value="p">Hermano, cuñado o suegro de un director (2° grado)</option><option value="x">Persona sin cargo ni parentesco</option></select></div><div id="out"></div>';
          function calc() {
            var pub = new Date(el.querySelector('#pub').value + 'T12:00:00'), op = new Date(el.querySelector('#op').value + 'T12:00:00'), q = el.querySelector('#q').value;
            if (isNaN(pub) || isNaN(op)) { el.querySelector('#out').innerHTML = ''; return; }
            var dias = Math.round((pub - op) / 86400000);
            var dentro = dias > 0 && dias <= 30;
            var txt = dias > 0 ? 'La operación es <b>' + dias + ' día(s) antes</b> de la publicación.' : 'La operación es el mismo día o después de la publicación.';
            var res;
            if (q === 'x') res = '<div class="resultado ok">' + txt + ' El período de bloqueo no le alcanza: no es director, ejecutivo principal ni pariente hasta el 2° grado. (Igual podría infringir las reglas de información privilegiada si fuera insider.)</div>';
            else if (dentro) res = '<div class="resultado mal">' + txt + ' <b>Dentro del período de bloqueo.</b> Sanción administrativa de la CMF (no es delito por el solo plazo).' + (q === 'p' ? ' Para los parientes se sanciona incluso si no sabían que su familiar era director.' : '') + '</div>';
            else res = '<div class="resultado ok">' + txt + ' <b>Fuera del período de bloqueo.</b> Ojo: si tenía información privilegiada, igual rigen las prohibiciones de uso y abstención.</div>';
            el.querySelector('#out').innerHTML = res;
          }
          el.querySelectorAll('input, select').forEach(function (x) { x.oninput = calc; x.onchange = calc; }); calc();
        }
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'disclosure', sub: 'dis-trio', enunciado: '¿Qué atributos debe tener la información que los emisores entregan al mercado según el art. 9° LMV?', opciones: ['Veraz, suficiente y oportuna', 'Pública, gratuita y auditada', 'Escrita, firmada y notarial', 'Breve, clara y en español'], correcta: 0, explicacion: 'El «trío dorado».' },
      { tipo: 'vf', seccion: 'disclosure', sub: 'dis-intro', enunciado: 'La revelación obligatoria se justifica porque el inversionista compra expectativas futuras que no puede verificar por sí mismo.', respuesta: true, explicacion: 'A diferencia de quien compra fruta en La Vega.' },
      { tipo: 'alternativas', seccion: 'disclosure', sub: 'dis-intro', enunciado: '¿Por qué el mercado de valores necesita revelación obligatoria si el banco no la necesita para prestar?', opciones: ['Porque el banco puede exigir y verificar la información del deudor, y el inversionista común no', 'Porque los bancos no corren riesgo de solvencia', 'Porque la CMF garantiza las inversiones', 'Porque los bonos no tienen riesgo'], correcta: 0, explicacion: 'Al suprimir al banco, el inversionista queda expuesto a asimetrías de información.' },
      { tipo: 'relacionar', seccion: 'disclosure', sub: 'dis-trio', enunciado: 'Relaciona cada atributo con su institución de resguardo.', pares: [['Veracidad', 'Auditores externos'], ['Suficiencia', 'Clasificadores de riesgo'], ['Oportunidad', 'Hechos esenciales y reservados']], explicacion: 'Según la estructura del apunte y el cronograma.' },
      { tipo: 'alternativas', seccion: 'auditores', sub: 'au-polar', enunciado: '¿Cómo inflaba La Polar sus resultados?', opciones: ['Repactando unilateralmente los créditos de clientes morosos, para no castigarlos y registrar créditos nuevos mayores', 'Vendiendo acciones propias en bolsa', 'Ocultando una toma de control', 'Emitiendo bonos sin inscribir'], correcta: 0, explicacion: 'Eliminaba la morosidad y mostraba utilidades ficticias.' },
      { tipo: 'vf', seccion: 'auditores', sub: 'au-polar', enunciado: 'En el caso La Polar, la Corte Suprema aceptó la defensa de PwC de que los auditores no están para detectar fraudes.', respuesta: false, explicacion: 'La rechazó: el auditor debe aplicar escepticismo profesional.' },
      { tipo: 'alternativas', seccion: 'auditores', sub: 'au-polar', enunciado: '¿Qué incentivo tenían los ejecutivos de La Polar para inflar el precio de la acción?', opciones: ['Un plan de stock options a precio fijo aprobado en 2005', 'Una OPA pendiente', 'Un aumento de capital con descuento', 'La venta del edificio corporativo'], correcta: 0, explicacion: 'Mientras más subiera la acción, más ganaban con las opciones.' },
      { tipo: 'alternativas', seccion: 'auditores', sub: 'au-independencia', enunciado: '¿Qué conflicto de interés de los auditores ilustra el caso Enron?', opciones: ['Ganar más por consultoría que por auditoría, lo que permite a la empresa presionar a la auditora', 'Ser accionista de la empresa auditada', 'Auditar a la competencia', 'Cobrar en acciones'], correcta: 0, explicacion: 'La amenaza de cancelar la consultoría compromete la independencia.' },
      { tipo: 'alternativas', seccion: 'auditores', sub: 'au-independencia', enunciado: '¿Qué solución adoptó la legislación chilena para proteger la independencia del auditor externo?', opciones: ['Prohibir que preste servicios distintos de la auditoría a la entidad auditada y a su grupo', 'Prohibir toda consultoría a las auditoras', 'Que la CMF designe al auditor', 'Rotar al auditor cada año'], correcta: 0, explicacion: 'Regla de incompatibilidad de servicios, sin prohibición absoluta de consultoría.' },
      { tipo: 'vf', seccion: 'auditores', sub: 'au-independencia', enunciado: 'El auditor externo certifica si los estados financieros reflejan razonablemente la realidad económica de la empresa.', respuesta: true, explicacion: 'Es su función legal respecto de los emisores de oferta pública.' },

      { tipo: 'oral', seccion: 'disclosure', sub: 'dis-trio', enunciado: 'Explique el mandatory disclosure y sus atributos.', puntos: ['Por qué: sin banco, el inversionista no puede verificar la solvencia; compra expectativas (La Vega vs. mercado).', 'Art. 9° LMV: quien capta del público debe decir la verdad y divulgar.', 'Trío dorado: veraz, suficiente, oportuna.', 'Instituciones: auditores externos, clasificadores de riesgo, hechos esenciales.', 'Sanciones: multas de la CMF y delito por información falsa.'], norma: 'Art. 9° Ley 18.045' },
      { tipo: 'oral', seccion: 'auditores', sub: 'au-polar', enunciado: 'Explique el caso La Polar y el rol de los auditores externos.', puntos: ['Stock options de 2005 e incentivo a inflar el precio.', 'Repactaciones unilaterales: evitar castigos y crear créditos mayores; utilidades ficticias.', 'Resultados «espectaculares» en plena crisis; acción sobre $2.400 y caída de más de 99% en 2011.', 'Infracción a la veracidad y fallas de gobierno corporativo; sanción a PwC; escepticismo profesional.', 'Independencia del auditor: conflicto por consultoría (Enron) e incompatibilidad de servicios.'], norma: 'Arts. 9° y 59 Ley 18.045' },

      { tipo: 'alternativas', seccion: 'suficiencia', sub: 'su-concepto', enunciado: 'Según el art. 9° inc. 2° LMV, ¿qué es información esencial?', opciones: ['La que un hombre juicioso consideraría importante para sus decisiones sobre inversión', 'La que la CMF califica como tal por resolución', 'Toda la información contable del emisor', 'La que hace variar el precio en más de 5%'], correcta: 0, explicacion: 'Es un criterio de sustancia, no un porcentaje.' },
      { tipo: 'vf', seccion: 'suficiencia', sub: 'su-concepto', enunciado: 'La suficiencia de la información se mide con un porcentaje matemático fijo, igual que la veracidad.', respuesta: false, explicacion: 'Responde a un criterio de sustancia: los antecedentes que un inversionista razonable necesita.' },
      { tipo: 'alternativas', seccion: 'suficiencia', sub: 'su-estandar', enunciado: '¿Por qué la regulación estandariza la información en estados financieros y memoria anual?', opciones: ['Porque con un criterio solo sustantivo cada empresa informaría cosas distintas y no se podrían comparar', 'Para reducir el trabajo de la CMF', 'Porque así lo exige la Ley 18.010', 'Para reemplazar a las clasificadoras de riesgo'], correcta: 0, explicacion: 'Permite comparar instrumentos y emisores.' },
      { tipo: 'alternativas', seccion: 'suficiencia', sub: 'su-estandar', enunciado: '¿Para qué adoptó Chile el estándar contable IFRS?', opciones: ['Para que sus estados financieros fueran comparables con los de cualquier inversionista del mundo y atraer capitales', 'Para copiar el estándar de EE. UU.', 'Para eliminar la memoria anual', 'Para que los auditores pudieran prestar consultoría'], correcta: 0, explicacion: 'Antes había que agregar extensas notas aclaratorias. EE. UU. usa US GAAP, no IFRS.' },
      { tipo: 'alternativas', seccion: 'suficiencia', sub: 'su-estandar', enunciado: '¿Qué hizo la NCG 461 de la CMF?', opciones: ['Consolidó la memoria integrada: negocio y estándares ESG en un solo documento', 'Creó el período de bloqueo', 'Fijó las categorías de las clasificadoras', 'Reguló los hechos reservados'], correcta: 0, explicacion: 'Antes lo socioambiental iba en reportes separados.' },
      { tipo: 'relacionar', seccion: 'suficiencia', sub: 'su-estandar', enunciado: 'Relaciona cada letra de ESG con su contenido.', pares: [['E', 'Impacto ambiental y cambio climático'], ['S', 'Relaciones laborales, diversidad y comunidad'], ['G', 'Gobierno corporativo']], explicacion: 'El gobierno corporativo se exigió primero, tras casos como La Polar.' },
      { tipo: 'vf', seccion: 'suficiencia', sub: 'su-clasificadoras', enunciado: 'Una clasificación «E» significa que la empresa es insolvente.', respuesta: false, explicacion: 'Significa que no hay información suficiente para pronosticar. El mercado la castiga más que una mala situación financiera.' },
      { tipo: 'alternativas', seccion: 'suficiencia', sub: 'su-clasificadoras', enunciado: '¿Cuál de estos NO es un problema de las clasificadoras de riesgo según el apunte?', opciones: ['Que la CMF fije sus tarifas', 'Errores graves en la crisis subprime y en La Polar', 'Un mercado cerrado de 4 o 5 firmas en el mundo', 'Riesgo de responsabilidad civil extracontractual por informes deficientes'], correcta: 0, explicacion: 'Los otros tres son los problemas que señala el apunte.' },
      { tipo: 'alternativas', seccion: 'suficiencia', sub: 'su-clasificadoras', enunciado: '¿Qué categoría marca el «límite de inversión» en la escala de clasificación?', opciones: ['BBB', 'AAA', 'D', 'E'], correcta: 0, explicacion: 'De AAA a BBB son las categorías de menor riesgo.' },
      { tipo: 'alternativas', seccion: 'oportunidad', sub: 'opo-precio', enunciado: '¿Qué protege, en último término, la exigencia de información oportuna?', opciones: ['La adecuada formación del precio del instrumento', 'El secreto comercial', 'La estabilidad del tipo de cambio', 'El patrimonio de la CMF'], correcta: 0, explicacion: 'El precio es la guía principal del inversionista.' },
      { tipo: 'vf', seccion: 'oportunidad', sub: 'opo-esencial', enunciado: 'Según el apunte, decidir si un acontecimiento es hecho esencial es facultad del directorio y el regulador no puede forzarla con instrucciones directas de revelación.', respuesta: true, explicacion: 'Es una decisión de alta responsabilidad de la administración.' },
      { tipo: 'alternativas', seccion: 'oportunidad', sub: 'opo-reservado', enunciado: '¿Qué quórum exige el art. 10 LMV para dar carácter de reservado a un hecho esencial?', opciones: ['Tres cuartas partes de los directores en ejercicio', 'Mayoría absoluta de los directores', 'Unanimidad del directorio', 'Dos tercios de la junta de accionistas'], correcta: 0, explicacion: 'Si no hay directorio, deciden todos los administradores.' },
      { tipo: 'alternativas', seccion: 'oportunidad', sub: 'opo-reservado', enunciado: '¿Cuándo debe comunicarse a la CMF el acuerdo de reserva?', opciones: ['Al día siguiente de su adopción', 'Dentro de 30 días', 'Cuando termine la negociación', 'Nunca: es reservado también para la CMF'], correcta: 0, explicacion: 'Art. 10 inc. 5°, por los medios que habilite la Comisión.' },
      { tipo: 'vf', seccion: 'oportunidad', sub: 'opo-reservado', enunciado: 'Un hecho reservado puede referirse a cualquier hecho que perjudique a la empresa, como un incendio ya ocurrido.', respuesta: false, explicacion: 'Solo a hechos o antecedentes sobre negociaciones aún pendientes cuya divulgación pueda perjudicar el interés social.' },
      { tipo: 'alternativas', seccion: 'oportunidad', sub: 'opo-reservado', enunciado: '¿Qué efecto tiene, por el art. 164 LMV, calificar un hecho como reservado?', opciones: ['Se transforma automáticamente en información privilegiada', 'Queda exento de toda divulgación futura', 'Se publica en el Diario Oficial', 'Libera a los directores del deber de reserva'], correcta: 0, explicacion: 'Por eso el caso Videla no tenía defensa plausible.' },
      { tipo: 'alternativas', seccion: 'oportunidad', sub: 'opo-tension', enunciado: '¿Qué norma impone a los directores el deber de reserva que entra en tensión con el deber de informar?', opciones: ['Art. 43 LSA', 'Art. 55 LMV', 'Art. 78 Ley 21.595', 'Art. 1907 CC'], correcta: 0, explicacion: 'Deber fiduciario de reserva sobre los negocios sociales.' },
      { tipo: 'relacionar', seccion: 'infracciones', sub: 'in-art55', enunciado: 'Relaciona cada responsabilidad del art. 55 LMV con su rasgo.', pares: [['Civil', 'Indemnización a quien sufrió el daño'], ['Administrativa', 'Multas de la CMF a beneficio fiscal'], ['Penal', 'Solo si la conducta está descrita como delito']], explicacion: 'Las tres son compatibles.' },
      { tipo: 'alternativas', seccion: 'infracciones', sub: 'in-civil', enunciado: '¿Por qué se usan poco las demandas civiles de indemnización en el mercado de valores?', opciones: ['Por los altos honorarios y la duración de los juicios (9 a 10 años con todas las instancias)', 'Porque la ley las prohíbe', 'Porque la CMF indemniza a las víctimas', 'Porque prescriben en 30 días'], correcta: 0, explicacion: 'Unos 5 años en primera instancia, más apelación y casación.' },
      { tipo: 'alternativas', seccion: 'infracciones', sub: 'in-civil', enunciado: '¿Cómo terminó la demanda de las AFP contra PwC por el caso La Polar?', opciones: ['La Corte Suprema la acogió y las partes pactaron un acuerdo con seguros y un porcentaje de las utilidades futuras de los socios', 'Fue rechazada definitivamente por la Corte Suprema', 'PwC fue liquidada', 'La CMF pagó la indemnización'], correcta: 0, explicacion: 'Se evitó la quiebra de una de las principales auditoras del país.' },
      { tipo: 'alternativas', seccion: 'infracciones', sub: 'in-adm', enunciado: '¿Cuál NO es una de las cuatro atribuciones de la CMF según el apunte?', opciones: ['Jurisdiccional: resolver juicios de indemnización', 'Normativa', 'Licenciamiento y registro', 'Sancionadora'], correcta: 0, explicacion: 'Las cuatro son normativa, licenciamiento y registro, supervisión y sancionadora.' },
      { tipo: 'vf', seccion: 'infracciones', sub: 'in-adm', enunciado: 'Las multas que impone la CMF se destinan a indemnizar a los inversionistas afectados.', respuesta: false, explicacion: 'Son a beneficio fiscal.' },
      { tipo: 'alternativas', seccion: 'infracciones', sub: 'in-adm', enunciado: 'En la CMF, ¿quién investiga y quién sanciona?', opciones: ['Investiga la Unidad de Investigación (Fiscal); resuelve y sanciona el Consejo', 'Investiga y sanciona el mismo Fiscal', 'Investiga el Ministerio Público; sanciona la CMF', 'Investiga el Consejo; sanciona la Corte Suprema'], correcta: 0, explicacion: 'Separación estricta entre investigación y decisión.' },
      { tipo: 'vf', seccion: 'infracciones', sub: 'in-adm', enunciado: 'La CMF persigue y sanciona todas las infracciones a la LMV que conoce.', respuesta: false, explicacion: 'Aplica un principio de oportunidad implícito: muchas veces corrige por supervisión, sin procedimiento sancionatorio.' },
      { tipo: 'alternativas', seccion: 'infracciones', sub: 'in-penal', enunciado: '¿Qué dispone el art. 78 de la Ley 21.595 sobre las multas administrativa y penal por un mismo hecho?', opciones: ['La multa firme impuesta en una sede se abona a la de la otra', 'Solo puede aplicarse una de las dos', 'Se suman sin descuento', 'La penal deja sin efecto la administrativa'], correcta: 0, explicacion: 'Zanjó la discusión sobre el non bis in idem.' },
      { tipo: 'relacionar', seccion: 'infracciones', sub: 'in-penal', enunciado: 'Relaciona cada ilícito de doble persecución con el caso que da el apunte.', pares: [['Información falsa al mercado', 'La Polar y Sartor'], ['Manipulación de precios y transacciones ficticias', 'Cascadas'], ['Oferta pública de valores no inscritos', 'Arcano']], explicacion: 'Todos se persiguen administrativa y penalmente.' },
      { tipo: 'vf', seccion: 'privilegiada', sub: 'pr-ratio', enunciado: 'La ley prohíbe que exista información privilegiada dentro de las empresas.', respuesta: false, explicacion: 'Existe naturalmente; se prohíbe su aprovechamiento indebido.' },
      { tipo: 'alternativas', seccion: 'privilegiada', sub: 'pr-objeto', enunciado: '¿Cómo se juzga la aptitud de la información para influir en la cotización?', opciones: ['Ex ante, desde un observador racional al momento de generarse la información', 'Ex post, según cuánto cambió el precio', 'Según lo que declare el emisor', 'Según el volumen transado'], correcta: 0, explicacion: 'Como en la tentativa penal: importa la idoneidad del dato al momento del hecho.' },
      { tipo: 'alternativas', seccion: 'privilegiada', sub: 'pr-objeto', enunciado: '¿Por qué la Corte Suprema confirmó la multa a Matías Videla con condena en costas?', opciones: ['Porque compró acciones mientras regía un hecho reservado, que es información privilegiada per se', 'Porque la operación en Brasil se concretó', 'Porque no firmó la comunicación a la CMF', 'Porque vendió en el período de bloqueo'], correcta: 0, explicacion: 'No tenía motivo plausible para litigar.' },
      { tipo: 'alternativas', seccion: 'privilegiada', sub: 'pr-objeto', enunciado: '¿Qué doctrina sentó el caso Piñera con LAN (2007)?', opciones: ['Los estados financieros aprobados por el directorio son información privilegiada antes de entregarse al mercado', 'Los presidentes de directorio no son insiders', 'La OPA debe anunciarse con 30 días de anticipación', 'Las clasificadoras responden civilmente'], correcta: 0, explicacion: 'Se aplicó también en Blanco y Negro (2020).' },
      { tipo: 'vf', seccion: 'privilegiada', sub: 'pr-sujeto', enunciado: 'El chofer de Uber que escucha a ejecutivos hablar de una fusión y compra acciones infringe la prohibición de uso de información privilegiada.', respuesta: false, explicacion: 'No es insider: no accedió por su cargo, profesión ni relación de confianza.' },
      { tipo: 'relacionar', seccion: 'privilegiada', sub: 'pr-conductas', enunciado: 'Relaciona cada persona con la conducta que le atribuye el apunte.', pares: [['Gabriel Restle', 'Uso de información privilegiada'], ['Aníbal Mosa', 'Infracción al deber de abstención'], ['Felipe Navarrete', 'Revelación e inducción']], explicacion: 'Blanco y Negro (2020) y CAP/Ibercap.' },
      { tipo: 'alternativas', seccion: 'privilegiada', sub: 'pr-conductas', enunciado: '¿Cuál de estas conductas tiene sanción administrativa pero NO es delito?', opciones: ['Infracción al deber de abstención', 'Uso de información privilegiada', 'Revelación de información privilegiada', 'Recomendar comprar con información privilegiada'], correcta: 0, explicacion: 'Se transa con la información, pero sin ánimo de lucro especulativo.' },
      { tipo: 'alternativas', seccion: 'privilegiada', sub: 'pr-bloqueo', enunciado: 'En el período de bloqueo, ¿quiénes no pueden transar valores del emisor y por cuánto tiempo?', opciones: ['Directores y ejecutivos principales, y sus parientes hasta el 2° grado, en los 30 días previos a la publicación de los estados financieros', 'Todos los accionistas, durante 10 días', 'Solo el gerente general, durante 60 días', 'Los corredores de bolsa, durante 30 días después de la publicación'], correcta: 0, explicacion: 'Regla objetiva para evitar las dificultades de prueba.' },
      { tipo: 'vf', seccion: 'privilegiada', sub: 'pr-bloqueo', enunciado: 'Transar dentro del período de bloqueo es delito por el solo transcurso del plazo.', respuesta: false, explicacion: 'Es infracción administrativa sancionada por la CMF.' },

      { tipo: 'oral', seccion: 'suficiencia', sub: 'su-clasificadoras', enunciado: 'Explique la exigencia de suficiencia y el rol de las clasificadoras de riesgo.', puntos: ['Criterio de sustancia: lo que un hombre juicioso consideraría importante (art. 9° inc. 2°).', 'Estandarización: estados financieros (de notas aclaratorias a IFRS) y memoria (de la marcha del negocio a ESG y memoria integrada, NCG 461).', 'Clasificadoras: simplifican la información en un pronóstico de solvencia; escala AAA a E; BBB como límite de inversión.', 'La categoría E: falta de información, no insolvencia.', 'Problemas: subprime y La Polar; mercado de 4 o 5 firmas; riesgo de responsabilidad civil.'], norma: 'Art. 9° Ley 18.045; NCG 461' },
      { tipo: 'oral', seccion: 'oportunidad', sub: 'opo-reservado', enunciado: 'Explique los hechos esenciales y los hechos reservados.', puntos: ['Fin: formación correcta del precio; evitar asimetrías.', 'Tensión con el deber de reserva de los directores (art. 43 LSA).', 'Hecho esencial (art. 10): no programado, relevante; se divulga cuando ocurre; lo califica el directorio.', 'Hecho reservado: negociaciones pendientes; ¾ de los directores en ejercicio; aviso a la CMF al día siguiente.', 'Efecto: información privilegiada per se (art. 164); caso Videla.'], norma: 'Arts. 10 y 164 Ley 18.045' },
      { tipo: 'oral', seccion: 'infracciones', sub: 'in-art55', enunciado: 'Explique el régimen de responsabilidades del art. 55 LMV y el rol de la CMF.', puntos: ['Triple responsabilidad: civil, administrativa y penal.', 'Civil: poco usada por costos y duración; La Polar contra PwC (AFP y Moneda AGF; Corte Suprema; acuerdo).', 'CMF: atribuciones normativa, de registro, de supervisión y sancionadora; multas hasta 100.000 UF, amonestación y revocación.', 'Fiscal investiga y Consejo resuelve; principio de oportunidad; multas a beneficio fiscal.', 'Penal: tipicidad; compatibilidad de sanciones y abono (art. 78 Ley 21.595); ilícitos de doble persecución.'], norma: 'Art. 55 Ley 18.045; art. 78 Ley 21.595' },
      { tipo: 'oral', seccion: 'privilegiada', sub: 'pr-aristas', enunciado: 'Explique el régimen de la información privilegiada y sus tres aristas.', puntos: ['Tensión entre reserva y revelación; se prohíbe el aprovechamiento, no la existencia.', 'Objeto (art. 164): aptitud ex ante; per se: hechos reservados (Videla) y balances aprobados (Piñera-LAN, Blanco y Negro).', 'Sujeto: insiders por cargo o relación de confianza; excluidos el chofer o el analista propio.', 'Conductas: uso (delito), abstención (solo administrativa), revelación o inducción (delito); Restle, Mosa, Navarrete.', 'Período de bloqueo: 30 días previos a los estados financieros, parientes hasta el 2° grado, sanción administrativa.'], norma: 'Arts. 164 a 166 Ley 18.045' },

      { tipo: 'relacionar', seccion: 'privilegiada', sub: 'pr-aristas', enunciado: 'Relaciona cada arista de la información privilegiada con su contenido.', pares: [['Objeto', 'Información no divulgada apta para influir en la cotización (art. 164)'], ['Sujeto activo', 'Insiders: acceden por su cargo, profesión o relación de confianza'], ['Conductas', 'Uso, infracción al deber de abstención y revelación']], explicacion: 'Las tres aristas del punto 9.2 del apunte.' },
      { tipo: 'alternativas', seccion: 'oportunidad', sub: 'opo-precio', enunciado: 'Según el apunte, ¿qué hacen las bolsas ante un hecho de impacto sistémico extremo, como el 11 de septiembre de 2001?', opciones: ['Suspenden temporalmente las transacciones mientras el mercado procesa la información', 'Fijan un precio máximo', 'Obligan a los emisores a recomprar acciones', 'Nada: el mercado se ajusta solo'], correcta: 0, explicacion: 'En lo cotidiano, las empresas informan lo no programado al cierre de las bolsas.' },
      { tipo: 'vf', seccion: 'oportunidad', sub: 'opo-tension', enunciado: 'Según el apunte, el deber de reserva de los directores (art. 43 LSA) cede cuando la información trata de infracciones a la ley o a la normativa de la CMF.', respuesta: true, explicacion: 'También cede cuando mantener la reserva lesiona el interés social.' },
      { tipo: 'alternativas', seccion: 'oportunidad', sub: 'opo-esencial', enunciado: 'Según el art. 10 LMV, ¿qué debe implementar el directorio respecto de los hechos esenciales?', opciones: ['Políticas, procedimientos, sistemas y controles para asegurar su divulgación y evitar filtraciones', 'Un comité de vigilancia', 'Una auditoría externa de cada hecho', 'La aprobación previa de la junta de accionistas'], correcta: 0, explicacion: 'La CMF fija por norma de carácter general los requisitos de esos controles.' },
      { tipo: 'vf', seccion: 'infracciones', sub: 'in-art55', enunciado: 'Según el art. 55 LMV, por las personas jurídicas responden además sus administradores o representantes, salvo que conste su falta de participación o su oposición.', respuesta: true, explicacion: 'Responden civil, administrativa y penalmente.' },
      { tipo: 'vf', seccion: 'privilegiada', sub: 'pr-sujeto', enunciado: 'El inversionista que deduce, con su propio análisis financiero, que una empresa anunciará malos resultados, y vende sus acciones, usa información privilegiada.', respuesta: false, explicacion: 'No es insider: no accedió a la información por su cargo, profesión o relación de confianza.' },
      { tipo: 'alternativas', seccion: 'privilegiada', sub: 'pr-ratio', enunciado: 'Según el apunte, ¿qué daño produce que un iniciado opere con información privilegiada?', opciones: ['El precio bursátil deja de ser correcto y se destruye la confianza en el mercado', 'La empresa pierde su inscripción en la CMF', 'Se anula la operación de pleno derecho', 'Ninguno, si la operación es pequeña'], correcta: 0, explicacion: 'La finalidad de la regulación es erradicar las asimetrías de información.' },

      /* ---- Preguntas de razonamiento (borrador de NotebookLM, revisadas contra el apunte de Gaspar) ---- */
      { tipo: 'alternativas', seccion: 'privilegiada', sub: 'pr-objeto', enunciado: 'Un director conoce el balance aprobado y aún no publicado, con utilidades muy altas, y compra acciones. El día de la publicación, un conflicto internacional hace caer toda la bolsa y la acción baja. ¿Cómo se analiza la aptitud de la información?', opciones: ['Ex ante: basta que el dato fuera idóneo para influir en la cotización al momento de comprar; la caída posterior no lo excusa', 'Ex post: como el precio no subió, la información no era apta y no hay infracción', 'Solo hay infracción si el director vende después con ganancia', 'Depende de que la CMF pruebe que el emisor provocó la caída de la bolsa'], correcta: 0, explicacion: 'La aptitud se juzga desde un observador racional al momento del hecho, como en la tentativa penal. Factores externos (contingencias internacionales, combustibles) pueden alterar el precio final. Además, los balances aprobados por el directorio y aún no enviados a la CMF son información privilegiada (Piñera con LAN).' },
      { tipo: 'alternativas', seccion: 'auditores', sub: 'au-independencia', enunciado: 'La firma que audita a una S.A. abierta recibe dos ofertas de consultoría tributaria: una de una filial del grupo auditado y otra de una empresa sin relación con ese grupo. ¿Qué puede aceptar?', opciones: ['Solo la de la empresa sin relación: no puede prestar servicios distintos de la auditoría a la entidad auditada ni a su grupo', 'Ninguna: la ley prohíbe a las auditoras toda consultoría', 'Ambas, si los honorarios de consultoría no superan los de auditoría', 'Ambas, si la consultoría la hace un equipo distinto del que audita'], correcta: 0, explicacion: 'Según el apunte, para proteger la independencia (lección de Enron) la ley no prohibió toda consultoría: estableció una incompatibilidad. La firma no puede prestar otros servicios a la misma entidad que audita ni a las sociedades de su grupo empresarial.' },
      { tipo: 'alternativas', seccion: 'privilegiada', sub: 'pr-bloqueo', enunciado: 'El cuñado de un director compra acciones del emisor 15 días antes de que se publiquen los estados financieros. Ante la CMF alega que no sabía que su cuñado era director. ¿Qué ocurre?', opciones: ['Igual puede ser sancionado administrativamente por la CMF: el bloqueo alcanza a parientes por afinidad hasta el 2° grado, aunque desconozcan la condición de director', 'Queda libre: el bloqueo solo alcanza a parientes por consanguinidad', 'Comete delito por el solo hecho de operar dentro del plazo', 'Queda libre si prueba que no tuvo acceso a los estados financieros'], correcta: 0, explicacion: 'El período de bloqueo es una regla objetiva: evita probar la aptitud de la información. Alcanza a parientes por consanguinidad o afinidad hasta el segundo grado (hermanos, cuñados, suegros), con sanción incluso si no sabían que el familiar era director. La sanción es administrativa, no penal.' }
    ]
  });
})();
