/* Unidad 9 — Mercado de valores II: oferta, control, OPA, intermediarios y bolsas
   (clases 16 a 18 del Prof. Gaspar).
   Fuentes: apuntes de clases del Prof. Gaspar (lecturas: Mardones II; Trucco). */
(function () {
  var fmt = function (n) { return Number(n).toLocaleString('es-CL'); };

  Estudio.registrarUnidad({
    id: 'u9', numero: 9, bloque: 'Prof. Gaspar', profesor: 'Gaspar',
    titulo: 'Mercado de valores II: oferta, OPA e intermediarios',
    resumen: 'Mercado primario y secundario, clases de inversionistas, oferta pública y su inscripción (NCG 336), tomas de control: deber de informar (art. 54) y OPA (art. 199), concepto de controlador (art. 97), intermediarios y bolsas, plazos de liquidación, venta corta, operaciones ficticias (caso Cascada) y cámaras de compensación.',
    lecturas: 'Apuntes de clases del Prof. Gaspar (clases 16 a 18 del cronograma). Lecturas: Mardones, tomo II, pp. 89-99, 329-358, 368-400, 159-175 y 359-368; Trucco, pp. 131-164. Norma principal: Ley 18.045 de Mercado de Valores (LMV).',

    glosario: [
      { termino: 'Mercado primario', definicion: 'Operaciones sobre instrumentos que no tienen un dueño previo. Su operación típica es la suscripción, por la cual nace el valor y quien lo adquiere pasa a ser su primer titular.', fuente: 'Apuntes de clases', seccion: 'operaciones', alias: ['mercado primario de valores'] },
      { termino: 'Mercado secundario', definicion: 'Operaciones sobre títulos que ya tienen un titular; su objetivo es dar liquidez a los instrumentos mediante su transferencia entre inversionistas (por ejemplo, la compraventa de acciones en bolsa).', fuente: 'Apuntes de clases', seccion: 'operaciones', alias: ['mercado secundario de valores'] },
      { termino: 'Inversionista retail', definicion: 'Persona común que invierte sus ahorros sin que sea su giro habitual y sin conocimientos ni medios para protegerse por sí misma. Es el sujeto prioritario de tutela de la ley.', fuente: 'Apuntes de clases', seccion: 'inversionistas', alias: ['inversionista no calificado', 'inversionistas retail', 'retail'] },
      { termino: 'Inversionista calificado', definicion: 'Persona o entidad que, por su giro, conocimientos, patrimonio o estructura, puede evaluar riesgos y defenderse por sí misma (corredoras, administradores de fondos, family offices). Soporta una regulación menos protectora.', fuente: 'Art. 4° bis F LMV; apuntes', seccion: 'inversionistas', alias: ['inversionistas calificados'] },
      { termino: 'Inversionista institucional', definicion: 'Subgrupo de los inversionistas calificados cuyo giro principal es invertir continuamente en el mercado de capitales: AFP, bancos, compañías de seguros de vida.', fuente: 'Art. 4° bis E LMV; apuntes', seccion: 'inversionistas', alias: ['inversionistas institucionales'] },
      { termino: 'Oferta pública de valores', definicion: 'Oferta dirigida al público en general o a ciertos sectores o grupos específicos de este. Para hacerla hay que inscribir antes el valor y al emisor en el Registro de Valores de la CMF (art. 6° LMV).', fuente: 'Arts. 4° y 6° LMV; apuntes', seccion: 'oferta', alias: ['oferta publica', 'ofertas publicas'] },
      { termino: 'Registro de Valores', definicion: 'Registro que lleva la CMF, donde deben inscribirse el emisor y el valor antes de ofrecerlo públicamente. La CMF revisa la información ex ante, pero la inscripción no garantiza la solvencia ni el éxito del negocio.', fuente: 'Art. 6° LMV; apuntes', seccion: 'oferta', alias: ['inscripcion en el registro de valores'] },
      { termino: 'Safe harbor', definicion: 'Hipótesis objetivas en que una oferta no se reputa pública (NCG 336, modificada por la NCG 452/2021): solo a calificados; hasta 250 calificados y 50 no calificados en 12 meses; hasta 50 no calificados; valor unitario de 3.000 UF o más.', fuente: 'NCG 336 y NCG 452/2021 de la CMF; apuntes', seccion: 'oferta', alias: ['ncg 336', 'ncg 452', 'oferta privada', 'ofertas que no se reputan publicas'] },
      { termino: 'Ventana de oportunidad', definicion: 'Lapso acotado en que el mercado ofrece tasas y liquidez muy favorables para colocar instrumentos; la demora de la revisión previa de la CMF puede hacer que se cierre.', fuente: 'Apuntes de clases', seccion: 'oferta' },
      { termino: 'Toma de control', definicion: 'Paso de una persona o grupo a controlar una sociedad anónima abierta, por cualquier medio, acto, contrato o hecho. Siempre obliga a informar al mercado (art. 54 LMV); exige OPA solo si se origina en una adquisición de acciones (art. 199).', fuente: 'Arts. 54 y 199 LMV; apuntes', seccion: 'control', alias: ['tomas de control', 'cambio de control'] },
      { termino: 'Oferta pública de adquisición de acciones', definicion: 'Procedimiento formal de compra pública dirigido a todos los accionistas, obligatorio cuando la toma de control de una S.A. abierta se produce por adquisición directa o indirecta de acciones; asegura que todos puedan vender en igualdad de condiciones y precio.', fuente: 'Arts. 198 y ss. LMV; apuntes', seccion: 'control', alias: ['opa', 'opas'] },
      { termino: 'Adquisición indirecta', definicion: 'Toma de control en que no se compran las acciones de la S.A. abierta, sino la entidad o vehículo que es dueño del paquete controlador («se compra al accionista»). También obliga a hacer OPA (caso Azul Azul).', fuente: 'Art. 199 LMV; apuntes', seccion: 'control', alias: ['adquisicion indirecta de acciones'] },
      { termino: 'Controlador', definicion: 'Persona o grupo con acuerdo de actuación conjunta que participa en la propiedad y puede (a) asegurar la mayoría de votos en las juntas y elegir a la mayoría de los directores, o (b) influir decisivamente en la administración.', fuente: 'Art. 97 LMV; apuntes', seccion: 'controlador', alias: ['control', 'controladores', 'articulo 97'] },
      { termino: 'Influencia decisiva', definicion: 'Segunda hipótesis de control (art. 97 b): más del 40% del capital con voto sin que otro lo iguale o supere, o entre 25% y 40% si supera la suma de quienes tienen individualmente 5% o más.', fuente: 'Art. 97 LMV; apuntes', seccion: 'controlador' },
      { termino: 'Miembro del controlador', definicion: 'Cada una de las personas de un grupo con acuerdo de actuación conjunta para ejercer los poderes de control del art. 97.', fuente: 'Art. 97 LMV; apuntes', seccion: 'controlador', alias: ['acuerdo de actuacion conjunta', 'pacto de actuacion conjunta'] },
      { termino: 'Corredor de bolsa', definicion: 'Intermediario de valores miembro de una bolsa; es el único habilitado para intermediar acciones de S.A. abiertas que se cotizan en bolsa.', fuente: 'Art. 24 LMV; apuntes', seccion: 'intermediarios', alias: ['corredores de bolsa', 'corredora', 'corredoras'] },
      { termino: 'Agente de valores', definicion: 'Intermediario de valores que opera en el mercado no organizado; no puede ser miembro de una bolsa ni intermediar acciones inscritas en bolsa.', fuente: 'Art. 24 LMV; apuntes', seccion: 'intermediarios', alias: ['agentes de valores'] },
      { termino: 'Falta de provisión de fondos', definicion: 'Excepción del mandatario civil o comercial para no cumplir el encargo si el mandante no le entrega los fondos. El art. 33 LMV prohíbe al intermediario oponerla: aceptada la orden, responde con su propio patrimonio.', fuente: 'Art. 33 LMV; apuntes', seccion: 'intermediarios', alias: ['excepcion de falta de provision de fondos', 'articulo 33'] },
      { termino: 'Suitability', definicion: 'Deber de idoneidad del producto (art. 28 Ley Fintech): conocer el perfil de riesgo del cliente y ofrecerle productos acordes; si insiste en uno más riesgoso, se puede ejecutar dejando respaldo de la advertencia.', fuente: 'Art. 28 Ley Fintech; apuntes', seccion: 'intermediarios', alias: ['idoneidad del producto', 'perfil de riesgo'] },
      { termino: 'Custodia de valores', definicion: 'Contrato por el cual el cliente entrega la guarda de sus títulos al corredor o custodio. Frente a terceros figura como titular el custodio; entre ellos, la propiedad es del cliente (art. 179 LMV).', fuente: 'Art. 179 LMV; apuntes', seccion: 'intermediarios', alias: ['custodia'] },
      { termino: 'Administración de cartera', definicion: 'Contrato por el cual el cliente da un mandato discrecional al gestor para que decida y ejecute por su cuenta las inversiones, sin instrucciones para cada operación.', fuente: 'Apuntes de clases', seccion: 'intermediarios', alias: ['mandato discrecional', 'administracion de carteras'] },
      { termino: 'Bolsa de valores', definicion: 'Punto de encuentro, hoy totalmente electrónico, donde los corredores ejecutan las compraventas de valores. Dicta reglas operativas aprobadas por la CMF, fiscaliza a sus corredores y puede suspender cotizaciones.', fuente: 'Apuntes de clases', seccion: 'intermediarios', alias: ['bolsas de valores', 'bolsa'] },
      { termino: 'Contado normal', definicion: 'Regla general de liquidación en la bolsa chilena: pago y entrega al segundo día hábil bursátil, lo que permite compensar operaciones entre corredores.', fuente: 'Apuntes de clases', seccion: 'bursatiles', alias: ['contado'] },
      { termino: 'Operación a plazo', definicion: 'Operación bursátil que se cumple entre 3 y 180 días hábiles bursátiles; exige garantías ante la bolsa y tiene un propósito mayormente especulativo.', fuente: 'Apuntes de clases', seccion: 'bursatiles', alias: ['operaciones a plazo', 'compraventa a plazo'] },
      { termino: 'Venta corta', definicion: 'Venta a plazo de un título que el vendedor no tiene al contratar («vender desnudo»), apostando a que su precio bajará para comprarlo barato al vencimiento.', fuente: 'Apuntes de clases', seccion: 'bursatiles', alias: ['short selling', 'vender desnudo'] },
      { termino: 'Operación ficticia', definicion: 'Operación que se ejecuta en la bolsa, pero sin intención real de transferir el dominio: usa la bolsa como ropaje para manipular precios, simular liquidez o eludir impuestos. Prohibida por el art. 53 LMV y tipificada como delito.', fuente: 'Arts. 53 y 59 f) LMV; apuntes', seccion: 'bursatiles', alias: ['operaciones ficticias', 'articulo 53'] },
      { termino: 'Cámara de compensación y liquidación', definicion: 'Entidad que agrupa las órdenes, compensa los saldos netos de dinero y valores solo entre corredores y procesa el pago efectivo; separada de la bolsa, donde se negocia y cierra la operación.', fuente: 'Apuntes de clases', seccion: 'bursatiles', alias: ['camara de compensacion', 'neteo', 'compensacion bursatil'] }
    ],

    secciones: [
      {
        id: 'operaciones', titulo: '1. Operaciones del mercado y protección al inversionista',
        html: `
<p>En el mercado de capitales se celebran los contratos de siempre: compraventa, suscripción, mutuo y arriendo de títulos. Se distinguen dos mercados:</p>
<div class="grid dos">
  <div class="card"><div class="kicker">Mercado primario</div><h4 style="margin-top:0">El título no tiene dueño previo</h4><p>La operación típica es la <b>suscripción</b>: nace el valor (emisión de acciones, bonos o pagarés) y quien lo adquiere es su primer titular.</p></div>
  <div class="card"><div class="kicker">Mercado secundario</div><h4 style="margin-top:0">El título ya tiene titular</h4><p>La operación típica es la <b>compraventa</b> entre inversionistas. Su función es dar <b>liquidez</b>.</p></div>
</div>
<div class="flow"><div class="node">S.A. abierta aumenta capital</div><div class="arrow">→</div><div class="node y">Primer titular suscribe<small>(mercado primario)</small></div><div class="arrow">→</div><div class="node hot">Vende en la Bolsa<small>(mercado secundario)</small></div></div>
<h3>¿Por qué no basta la autonomía de la voluntad?</h3>
<p>Una estafa en una venta privada (un auto usado) afecta solo a las partes. Un fraude en el mercado de valores produce un <b>daño sistémico</b>: los títulos circulan muy rápido y, ante un engaño, los inversionistas entran en <b>pánico</b>. Todos venden, nadie compra y el precio se desploma.</p>
<div class="callout"><p>Tras la crisis de Wall Street de 1929, EE. UU. dictó la <b>Securities Act of 1933</b>. El objetivo central de la legislación bursátil es la <b>protección al inversionista</b>: prevenir engaños, asimetrías de información y reacciones de pánico.</p></div>`
      },
      {
        id: 'inversionistas', titulo: '2. Clases de inversionistas',
        html: `
<p>Como en el derecho del consumo, la protección no es igual para todos: depende de la capacidad técnica, patrimonial y de autoprotección del inversionista.</p>
<table class="tabla">
<tr><th>Retail o no calificado</th><th>Calificado <span class="norma">Art. 4° bis F LMV</span></th><th>Institucional <span class="norma">Art. 4° bis E LMV</span></th></tr>
<tr><td>Persona común que invierte sus ahorros sin ser su giro y sin medios para protegerse. Es el sujeto <b>prioritario</b> de tutela. Ejemplo: el padre del profesor, médico de excelencia, pero profano en finanzas.</td><td>Por su giro, conocimientos, patrimonio o estructura puede evaluar riesgos y defenderse solo: corredoras, administradores de fondos, <i>family offices</i>. Regulación menos paternalista.</td><td>Especie de calificado cuyo giro principal es invertir de forma continua: <b>AFP</b>, <b>bancos</b> e instituciones financieras, <b>compañías de seguros de vida</b>.</td></tr>
</table>
<h3>¿Quién decide la inversión?</h3>
<div class="grid dos">
  <div class="card"><b>El cliente da la orden</b><p>«Cómprame X»: sigue siendo <b>retail</b>, porque la decisión la toma alguien sin giro calificado.</p></div>
  <div class="card"><b>Mandato discrecional</b><p>«Administre mi capital y decida usted»: la operación se califica como hecha por un <b>inversionista calificado</b>, porque decide el profesional.</p></div>
</div>
<div class="callout red"><p><b>Caso Real Fondo Capital («Fondo Corneta»).</b> Personas de alto patrimonio encargaron sus capitales a corredoras. Quienes dieron mandatos discrecionales quedaron calificados como inversionistas calificados: sufrieron pérdidas en instrumentos de alto riesgo sin poder invocar las protecciones reservadas al cliente retail.</p></div>`
      },
      {
        id: 'oferta', titulo: '3. Oferta pública de valores',
        html: `
<div class="cita">«dirigida al público en general o a ciertos sectores o grupos específicos de este»<span class="fuente">Art. 4° Ley 18.045 (fragmento citado en el apunte)</span></div>
<p>La oferta es la invitación a celebrar una operación del mercado primario (suscripción) o secundario (compraventa). La fórmula chilena es muy amplia: basta un «sector o grupo».</p>
<h3>¿Por qué se protege la oferta pública?</h3>
<p>Por una razón <b>psicológica</b>: en una invitación colectiva, el inversionista teme hacer el ridículo si pregunta por los balances o la legitimidad del negocio, y queda más expuesto al engaño. Es lo que pasa con el alumno que no levanta la mano en clase, pero pregunta a solas al profesor. Ejemplo: en el capitalismo popular, el padre del profesor compró acciones de Endesa por la presión de sus colegas, no por un análisis financiero.</p>
<div class="callout yellow"><p><b>¿Qué es un «grupo»?</b> El criterio no es la suma de personas contactadas en el tiempo, sino la <b>simultaneidad</b> de la invitación. La negociación «uno a uno» no genera presión de grupo. En cambio, una invitación simultánea a solo dos personas reunidas ya podría ser oferta pública («donde dos o tres se reúnan…»).</p></div>
<h3>Inscripción previa y control ex ante</h3>
<p><span class="norma">Art. 6° LMV</span>: quien quiera hacer oferta pública debe inscribir antes el valor y al emisor en el <b>Registro de Valores</b> de la CMF. La CMF verifica la existencia y constitución del emisor, la validez del título y la veracidad de sus estados financieros. La inscripción <b>no garantiza la solvencia</b> ni el éxito del negocio: solo busca evitar engaños y ocultamiento. La SEC de EE. UU. aplica el mismo principio.</p>
<div class="cita">«Con pena de presidio menor en cualquier de sus grados será sancionado: a) El que sin la correspondiente autorización o registro realizare oferta pública de valores o actuare como corredor de bolsa, agente de valores, empresa de auditoría externa o clasificadora de riesgos.»<span class="fuente">Art. 62 letra a) Ley 18.045 (antiguo art. 59 A, según el apunte)</span></div>
<div class="card" style="margin-bottom:12px"><p><span class="etiqueta roja">Delito</span> <b>Caso Alberto Chang</b></p><p>Captaba dinero del público emitiendo <b>pagarés</b> con altas rentabilidades prometidas y proyectaba solvencia con fotos junto a figuras como Richard Branson. No estaba inscrito en el Registro de Valores ni en ninguna hipótesis de exención. Al colapsar el esquema huyó a Malta, que denegó la extradición por falta de tratado y reciprocidad. Su madre, socia en Chile, fue procesada y privada de libertad.</p></div>
<h3>Ofertas que no se reputan públicas (<i>safe harbor</i>)</h3>
<p>El art. 4° LMV faculta a la CMF para declarar, por norma de carácter general, qué ofertas <b>no</b> son públicas. Es la <b>NCG 336</b>, modificada por la <b>NCG 452/2021</b>, con cuatro hipótesis:</p>
<ol>
  <li>Ofertas dirigidas exclusivamente a <b>inversionistas calificados</b>.</li>
  <li>A no más de <b>250 calificados y hasta 50 no calificados</b> en 12 meses.</li>
  <li>A un máximo de <b>50 no calificados</b>.</li>
  <li>Sobre instrumentos de valor unitario igual o superior a <b>3.000 UF</b>.</li>
</ol>
<p class="small">Fundamento: los calificados pueden defenderse solos; someterlos a la revisión estatal no tiene sentido económico. Mardones (citado en el apunte) distingue entre ofertas privadas y ofertas públicas eximidas de inscripción (por ejemplo, a trabajadores o en bolsas locales por menos de 100.000 UF).</p>
<h3>Ventana de oportunidad y mecanismos flexibles</h3>
<p>Las condiciones de tasa y liquidez cambian rápido; si la CMF demora, la <b>ventana de oportunidad</b> se cierra. Por eso existen controles más ágiles:</p>
<div class="grid dos">
  <div class="card"><b>Depósito del reglamento interno</b><p>Las AGF depositan el reglamento del fondo en la CMF, sin revisión previa, y al día hábil siguiente pueden vender las cuotas. La CMF fiscaliza ex post.</p></div>
  <div class="card"><b>Registro automático</b><p>Para emisores recurrentes de deuda con buena clasificación de riesgo e información: la inscripción se otorga de forma automática e inmediata.</p></div>
</div>
<h3>Consecuencias de entrar al mercado</h3>
<p>Se pierde el secreto de los negocios («si usted le pidió plata al mercado, va a tener que informarle cómo le está yendo»): hay <b>información periódica</b> (balances, memorias, estados financieros, informes de auditores) e <b>información eventual</b> (hechos relevantes, de inmediato). Además, el cambio de control de una S.A. abierta no puede hacerse a espaldas del mercado: queda sujeto a la <b>OPA</b> (sección 4).</p>
<div class="callout red"><p><span class="etiqueta roja">Pendiente</span> <b>Caso Almacenes París.</b> El cronograma lo asigna a esta clase (16), pero el apunte de Gaspar no lo desarrolla. Revísalo en la lectura (Mardones II, pp. 329-358) o con tus compañeros.</p></div>`
      },
      {
        id: 'control', titulo: '4. Tomas de control: deber de informar y OPA',
        html: `
<p>La regla en el mercado es la <b>libre transferibilidad</b>: si alguien compra el 0,01% de una S.A. abierta, no hay trámite especial. Esa libertad cede cuando la compra permite <b>tomar el control</b>. ¿Por qué importa saber quién controla? Porque la mayoría de los accionistas no va a las juntas: en Lucchetti (controlador con 97%) los accionistas iban por las canastas de mercadería, y en Calaf, por los chocolates.</p>
<table class="tabla">
<tr><th></th><th>Deber de informar <span class="norma">Art. 54 LMV</span></th><th>OPA <span class="norma">Arts. 198 y ss. LMV</span></th></tr>
<tr><td>Cuándo</td><td><b>Regla general</b>: toda toma de control, por cualquier medio (herencia, fusión, aumento de capital, pacto, compra).</td><td><b>Especial</b>: solo si el control se toma por <b>adquisición de acciones</b>, directa o indirecta (art. 199 a).</td></tr>
<tr><td>Qué exige</td><td>Informar previamente al público: comunicación a la sociedad, sus controladoras y controladas, la CMF y las bolsas, y aviso en 2 diarios y en el sitio web, con al menos <b>10 días hábiles</b> de anticipación.</td><td>Oferta formal a <b>todos</b> los accionistas para que puedan vender en igualdad de condiciones y precio.</td></tr>
<tr><td>Si se omite</td><td><b>No invalida la operación</b>: da derecho a indemnización y a sanciones administrativas.</td><td>No hay dispensa de invalidez: la operación queda expuesta a <b>nulidad absoluta</b>, y es delito (art. 61 A LMV).</td></tr>
</table>
<div class="cita">«La infracción de este artículo no invalidará la operación, pero otorgará a los accionistas o a los terceros interesados el derecho de exigir indemnización por los perjuicios ocasionados, además de las sanciones administrativas que correspondan.»<span class="fuente">Art. 54 Ley 18.045</span></div>
<div class="callout yellow"><p><span class="etiqueta roja">Pregunta de examen</span> En derecho común (art. 1683 CC), omitir un requisito legal provocaría nulidad absoluta. El art. 54 hace una <b>excepción expresa</b>: la omisión de informar no invalida la toma de control. Según el <b>art. 54 B</b>, cuando el control se toma por OPA rigen solo las normas del Título XXV, que no tienen esa dispensa.</p></div>
<div class="cita">«Deberán someterse al procedimiento de oferta contemplado en este Título, las siguientes adquisiciones de acciones, directas o indirectas, de una o más series, emitidas por una sociedad anónima abierta: a) Las que permitan tomar el control de una sociedad;»<span class="fuente">Art. 199 Ley 18.045</span></div>
<div class="grid dos">
  <div class="card"><b>Adquisición directa</b><p>Se compran las acciones de la S.A. abierta.</p></div>
  <div class="card"><b>Adquisición indirecta</b><p>Se compra la sociedad o vehículo dueño del paquete de control: «se compra al accionista».</p></div>
</div>
<figure class="diagrama">
<svg viewBox="0 0 760 230" role="img" aria-label="Estructura del caso Azul Azul">
  <defs><marker id="fa9" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 z" fill="#637386"/></marker></defs>
  <g font-family="Inter,Segoe UI,Arial" font-size="13" text-anchor="middle">
    <rect x="20" y="15" width="200" height="54" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="120" y="38" font-weight="800">Asesorías Sartor</text><text x="120" y="56" fill="#637386">90% de las cuotas</text>
    <rect x="540" y="15" width="200" height="54" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="640" y="38" font-weight="800">Michael Clark</text><text x="640" y="56" fill="#637386">10% (Inv. Antumalal)</text>
    <rect x="270" y="95" width="220" height="50" rx="12" fill="#eaf4fb" stroke="#1479c9" stroke-width="2"/><text x="380" y="125" font-weight="800">FIP Tactical Sport</text>
    <rect x="270" y="170" width="220" height="50" rx="12" fill="#fff8cc" stroke="#c9a400" stroke-width="2"/><text x="380" y="192" font-weight="800">Azul Azul S.A. (abierta)</text><text x="380" y="210" fill="#637386">~63% en manos del FIP</text>
    <line x1="140" y1="70" x2="300" y2="94" stroke="#637386" stroke-width="1.6" marker-end="url(#fa9)"/>
    <line x1="620" y1="70" x2="460" y2="94" stroke="#637386" stroke-width="1.6" marker-end="url(#fa9)"/>
    <line x1="380" y1="146" x2="380" y2="168" stroke="#637386" stroke-width="1.6" marker-end="url(#fa9)"/>
    <line x1="224" y1="42" x2="536" y2="42" stroke="#c62828" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#fa9)"/>
    <text x="380" y="30" fill="#c62828" font-weight="700">Clark compra a plazo el 90% a Sartor</text>
    <text x="380" y="62" fill="#c62828">→ queda con el 100% del FIP</text>
  </g>
</svg>
</figure>
<div class="card" style="margin-bottom:12px"><p><span class="etiqueta roja">Pregunta de examen</span> <b>Caso Azul Azul S.A.</b></p><p>Clark no hizo OPA ni informó: alegó que compró <b>cuotas de un FIP</b>, no acciones. La CMF y la Corte Suprema (fallo ejecutoriado) resolvieron que hubo <b>adquisición indirecta</b> de acciones y que debía hacer OPA.</p><ul><li><b>Arista civil y concursal:</b> Clark no pagó, la compraventa se rescindió y el liquidador de Sartor asumió el FIP y pidió revocar el directorio de Azul Azul.</li><li><b>Arista penal y de nulidad:</b> Clark fue formalizado por el art. 61 A LMV; el accionista Schapira demandó la nulidad absoluta por falta de OPA (luego se desistió por un acuerdo).</li></ul></div>
<div class="grid dos">
  <div class="card"><b>Clínica Las Condes: sin OPA</b><p>Cecilia Karlezi (~51%) vendió por separado a Euroamérica (~26,5%) e Indisa (~25,5%), sin pacto entre ellos. Ninguno tomó el control por sí solo: no hubo OPA.</p></div>
  <div class="card"><b>LAN: sin OPA, pero con deber de informar</b><p>Sebastián Piñera y la familia Cueto tomaron el control por un <b>pacto de actuación conjunta</b>, no por compra de acciones en ese momento: exento de OPA, sin perjuicio del art. 54.</p></div>
</div>
<p class="small"><b>Herencia (Luksic):</b> al morir Andrónico Luksic Abaroa, el control pasó a sus hijos por sucesión. La ley los eximió de OPA, pero se mantuvo el deber de informar del art. 54.</p>`
      },
      {
        id: 'controlador', titulo: '5. ¿Quién es controlador? (art. 97 LMV)',
        html: `
<p>Los arts. 54 y 199 hablan de «control», pero la LMV no lo define. Sí define al <b>controlador</b> en el art. 97, y en la práctica las autoridades usan esos criterios.</p>
<div class="cita">«Es controlador de una sociedad toda persona o grupo de personas con acuerdo de actuación conjunta que, directamente o a través de otras personas naturales o jurídicas, participa en su propiedad y tiene poder para realizar alguna de las siguientes actuaciones: a) Asegurar la mayoría de votos en las juntas de accionistas y elegir a la mayoría de los directores tratándose de sociedades anónimas […], o b) Influir decisivamente en la administración de la sociedad.»<span class="fuente">Art. 97 Ley 18.045</span></div>
<div class="grid dos">
  <div class="card"><div class="kicker">Hipótesis I · letra a)</div><p>Requisitos <b>copulativos</b>: (1) mayoría de votos en la junta <b>y</b> (2) poder de elegir a la mayoría del directorio. Si falta uno, no hay control por esta vía.</p><p class="small">El art. 86 LSA (matriz-filial) usa los mismos elementos, pero en forma <b>disyuntiva</b> (uno <b>u</b> otro).</p></div>
  <div class="card"><div class="kicker">Hipótesis II · letra b): influencia decisiva</div><p>Cuando nadie tiene la mayoría absoluta; se explica por la apatía de los minoritarios.</p><ul><li><b>A:</b> más del <b>40%</b> del capital con voto, si nadie lo iguala o supera.</li><li><b>B:</b> entre <b>25% y 40%</b>, si supera la suma de los accionistas que tienen individualmente <b>5% o más</b> (los de menos de 5% no se cuentan).</li></ul></div>
</div>
<h3>Los tres ejemplos de clase</h3>
<table class="tabla">
<tr><th>Caso</th><th>Datos</th><th>Resultado</th></tr>
<tr><td>Quiñenco y Banco de Chile</td><td>LQIF tiene el 51% del banco. LQIF es 50% de Quiñenco y 50% de Citigroup; Quiñenco nombra 4 de 7 directores.</td><td><b>No es controlador</b> (art. 97 a): no tiene la mayoría de votos y los requisitos son copulativos. Influencia decisiva tampoco, porque Citigroup lo iguala. Pero el banco <b>sí es filial</b> de Quiñenco (art. 86 LSA).</td></tr>
<tr><td>Invercap y CAP</td><td>Invercap tiene ~41% y nadie la iguala.</td><td><b>Controlador</b> por influencia decisiva (sub-hipótesis A).</td></tr>
<tr><td>Euroamérica y Clínica Las Condes</td><td>26,5% vs. Indisa 25,5% + tercero 6% = 31,5%. Luego un aumento de capital diluye al tercero a 4,5%.</td><td>Antes: no controla. Después: el tercero sale de la suma y Euroamérica (26,5%) supera a Indisa (25,5%): <b>pasa a controlar</b> (sub-hipótesis B). Sin OPA, porque se originó en la suscripción de un aumento de capital.</td></tr>
</table>
<p class="small">Cada integrante de un grupo con acuerdo de actuación conjunta es <b>miembro del controlador</b>. En la comandita por acciones, el controlador es el socio gestor. Según Mardones (citado en el apunte), la CMF (Of. Ord. 29.632/2016) entiende el control en su sentido natural («dominio, mando o preponderancia fáctica»), sin atarse rígidamente a los porcentajes del art. 97.</p>`
      },
      {
        id: 'intermediarios', titulo: '6. Intermediarios de valores y bolsas',
        html: `
<p>La oferta pública, la inscripción, el control ex ante y la OPA atacan el <b>riesgo de solvencia</b>. El <b>riesgo de liquidez</b> exige que los valores circulen sin trabas. Sin banco, nadie puede buscar uno a uno a miles de ahorrantes: hacen falta intermediarios, como los supermercados entre la granja y el consumidor.</p>
<div class="grid dos">
  <div class="card"><div class="kicker">Art. 24 LMV</div><h4 style="margin-top:0">Corredores de bolsa</h4><p>Miembros de una bolsa. Son los <b>únicos</b> que pueden intermediar acciones de S.A. abiertas cotizadas en bolsa (reserva legal).</p></div>
  <div class="card"><div class="kicker">Art. 24 LMV</div><h4 style="margin-top:0">Agentes de valores</h4><p>Operan en el mercado no organizado. No pueden ser miembros de una bolsa ni intermediar acciones inscritas en bolsa.</p></div>
</div>
<h3>Naturaleza: mandato</h3>
<p>En el mercado primario, el intermediario puede ser mandatario del <b>emisor</b> (la corredora en el Hospital de Talca que colocaba acciones de la actual Enel). En el secundario, del inversionista o de ambas partes. En bolsa actúa normalmente <b>a nombre propio</b>: el mercado ve al corredor y la identidad del cliente queda en reserva.</p>
<div class="callout red"><p><b>Art. 33 LMV.</b> El mandatario común puede negarse a cumplir si el mandante no le provee fondos. El intermediario <b>no puede oponer la excepción de falta de provisión de fondos</b>: nadie lo obliga a aceptar la orden, pero una vez aceptada responde personal e ilimitadamente, le pague o no su cliente. El niño sin plata no puede comprar el pan; el corredor que aceptó comprar $100 millones paga con su propio patrimonio. Fundamento: certeza e instantaneidad de la bolsa y protección de la cadena de pagos.</p></div>
<p>Por ese riesgo, la CMF exige <b>autorización previa</b>, patrimonio mínimo, garantías e indicadores de liquidez. Intermediar valores es un <b>giro reservado</b>: hacerlo habitualmente sin autorización es delito (<span class="norma">art. 39 LGB</span>, según el apunte).</p>
<h3>Actividades complementarias</h3>
<table class="tabla">
<tr><th>Intermediación simple</th><th>Asesoría de inversión</th><th>Administración de cartera</th></tr>
<tr><td>El cliente da la orden; el corredor ejecuta.</td><td>El profesional sugiere; el cliente decide.</td><td>El gestor decide y ejecuta por cuenta del cliente (mandato discrecional).</td></tr>
</table>
<div class="card" style="margin-bottom:12px"><p><b>Asesoría de inversión.</b> Reestructurada por la Ley 21.314 y hoy regulada en la Ley Fintech: hay que estar <b>inscrito en la CMF</b>, que controla la idoneidad técnica y los conflictos de interés (comisiones por referidos). La CMF fiscaliza a influencers sin registro. <b>Art. 28 Ley Fintech (suitability):</b> (1) conocer el perfil de riesgo del cliente; (2) ofrecerle productos acordes. Si un cliente conservador insiste en comprar algo riesgoso, se puede ejecutar dejando respaldo escrito de la advertencia.</p><p class="small"><b>Felices y Forrados:</b> los cambios masivos de fondo (A al E) obligaban a las AFP a vender activos de golpe, bajaban los precios y perjudicaban a todos los afiliados. Se reguló la asesoría previsional (Superintendencia de Pensiones y CMF), con garantías y control de conflictos. Lorenzini la llamó «ley mordaza» y cerró en Chile.</p></div>
<div class="card" style="margin-bottom:12px"><p><b>Custodia de valores.</b> Frente al emisor y a terceros, el titular registral es el <b>custodio</b> (mandato sin representación). Entre custodio y cliente, la propiedad es del <b>cliente</b> (<span class="norma">art. 179 LMV</span>). Ejemplo: las acciones de Enel Américas del profesor, en custodia, se vendieron al instante en la recompra; las de su padre, en papel, no alcanzaron. Riesgo: que el corredor use los títulos de sus clientes (quiebras de Alfa y Raimundo Serrano). El <b>depósito central de valores</b> (Ley 18.876; el apunte lo abrevia «DCB») inmoviliza los títulos y permite transferencias electrónicas. Tras Inverlink (depósitos de CORFO), las AFP solo pueden invertir en instrumentos depositados allí.</p></div>
<div class="card" style="margin-bottom:12px"><p><b>Administración de cartera.</b> Puede prestarla el corredor o un administrador independiente (<i>family offices</i>). La CMF la fiscaliza sobre ciertos volúmenes: idoneidad y conflictos de interés. <b>Caso STF:</b> la corredora invirtió el dinero de clientes administrados en el Fondo Capital Estructurado I para rescatar a Álvaro y Antonio Jalaff; la CMF la sancionó por invertir en instrumentos de altísimo riesgo no idóneos para esos perfiles.</p></div>
<h3>Las bolsas de valores</h3>
<p>Son el punto de encuentro donde los corredores ejecutan las compraventas. La «rueda» presencial desapareció: hoy todo es electrónico (el edificio de Bandera con Alameda se vendió a Territoria). La bolsa dicta sus reglas operativas, con <b>aprobación previa de la CMF</b>, fiscaliza y sanciona a sus corredores, y puede <b>suspender la cotización</b> de un valor o a un corredor.</p>`
      },
      {
        id: 'bursatiles', titulo: '7. Operaciones bursátiles',
        html: `
<p>Suscripción (primario) y compraventa (secundario) son contratos bilaterales que se forman por oferta y aceptación. No es obligatorio pasar por la bolsa: un particular puede vender sus acciones directamente. En bolsa, el contrato se <b>perfecciona en el cierre</b> (el calce de órdenes), pero se <b>cumple después</b>, según la modalidad de plazo.</p>
<table class="tabla">
<tr><th>Modalidad</th><th>Pago y entrega</th><th>Idea</th></tr>
<tr><td><b>PH</b> (pagadero hoy)</td><td>El mismo día hábil del cierre.</td><td>—</td></tr>
<tr><td><b>PM</b> (pagadero mañana)</td><td>El día hábil bursátil siguiente.</td><td>Si se cierra un viernes, vence el lunes (o el día hábil siguiente).</td></tr>
<tr><td><b>Contado normal</b> (regla general)</td><td>Segundo día hábil bursátil (48 horas hábiles).</td><td>Da tiempo para <b>compensar</b> (netear) dinero y acciones de la misma especie entre corredores.</td></tr>
<tr><td><b>A plazo</b></td><td>Entre 3 y 180 días hábiles bursátiles.</td><td>Exige <b>garantías</b> (prendas sobre instrumentos administradas por la bolsa). Propósito predominantemente especulativo.</td></tr>
</table>
<p class="small">Neteo: si el corredor A debe entregar 10.000 acciones de Copec a B, y B le compró a A 8.000 en la misma jornada, A solo transfiere las 2.000 netas.</p>
<h3>Especulación a plazo y venta corta</h3>
<p>En la compraventa a plazo se fijan hoy la cosa y el precio, pero cada parte apuesta a la cotización futura. No es una «ruleta»: revela si hay quien cree que un activo está sobre o subvalorado. En la <b>venta corta</b> se vende a plazo un título que no se tiene («vender desnudo»): si vendió a $100 y al vencimiento vale $50, compra a $50, entrega y gana $50. El comprador a plazo apuesta al alza.</p>
<div class="callout"><p>Al vencimiento hay que cumplir (art. 33 y garantías). Si la apuesta falla, se puede <b>materializar la pérdida</b> o <b>postergar</b>: el vendedor pide prestados los títulos (paga un canon) para entregar; el comprador pide dinero prestado para pagar y conserva las acciones. Se puede repetir mientras el costo del préstamo compense la pérdida que se quiere diferir.</p></div>
<h3>Ejes regulatorios de las operaciones en bolsa</h3>
<div class="grid dos">
  <div class="card"><b>1. Adecuada formación de precios</b><p>Para la mayoría de los inversionistas, la variación del precio es su principal fuente de información.</p></div>
  <div class="card"><b>2. Realidad de las operaciones</b><p>Cada operación debe reflejar una intención genuina de transferir la propiedad.</p></div>
</div>
<div class="callout yellow"><p><b>Operaciones ficticias.</b> Sí quedan registradas en la bolsa. Son ficticias porque no buscan un cambio de dominio real: la bolsa es un ropaje para manipular precios, simular liquidez o eludir impuestos. Ejemplo: sociedades de inversión que vendían el 31 de diciembre para bajar la base de la patente municipal y recompraban el primer día hábil. Las prohíbe el <span class="norma">art. 53 LMV</span> y son delito (<span class="norma">art. 59 letra f) LMV</span>).</p></div>
<figure class="diagrama">
<svg viewBox="0 0 760 210" role="img" aria-label="Esquema de las operaciones del caso Cascada">
  <defs><marker id="fc9" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 z" fill="#637386"/></marker></defs>
  <g font-family="Inter,Segoe UI,Arial" font-size="13" text-anchor="middle">
    <rect x="15" y="70" width="190" height="64" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="110" y="97" font-weight="800">Oro Blanco</text><text x="110" y="116" fill="#637386">(S.A. abierta)</text>
    <rect x="285" y="70" width="190" height="64" rx="12" fill="#fff8cc" stroke="#c9a400" stroke-width="2"/><text x="380" y="97" font-weight="800">Sociedad vinculada</text><text x="380" y="116" fill="#637386">a Julio Ponce</text>
    <rect x="555" y="70" width="190" height="64" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="650" y="97" font-weight="800">Otra S.A. de</text><text x="650" y="116" fill="#637386">la cascada</text>
    <line x1="207" y1="102" x2="281" y2="102" stroke="#637386" stroke-width="1.6" marker-end="url(#fc9)"/><text x="244" y="62" fill="#172536">① vende en</text><text x="244" y="78" fill="#172536">bolsa a $90</text>
    <line x1="477" y1="102" x2="551" y2="102" stroke="#637386" stroke-width="1.6" marker-end="url(#fc9)"/><text x="514" y="62" fill="#172536">② revende en</text><text x="514" y="78" fill="#172536">bolsa a $110</text>
    <text x="380" y="168" fill="#c62828" font-weight="700">③ la «pasadita» de $20 por acción queda en la sociedad del controlador</text>
    <text x="380" y="192" fill="#637386">Oro Blanco dejó de recibir $100 y la otra sociedad pagó de más: pierden los minoritarios</text>
  </g>
</svg>
</figure>
<div class="card" style="margin-bottom:12px"><p><span class="etiqueta roja">Pregunta de examen</span> <b>Caso Cascada (Julio Ponce Lerou / SQM)</b></p><p>Ponce controlaba SQM por una cascada de S.A. abiertas (Norte Grande, Oro Blanco, Potasios y Nitratos). En un aumento de capital de Oro Blanco, para ofrecer acciones a terceros a un precio menor que el de la opción preferente (ejemplo: $90 en vez de $100), la ley exige pasarlas por la bolsa. Sociedades vinculadas a Ponce compraban a $90 y otra sociedad de la cascada las recompraba más caro (ejemplo: $110). La SVS (hoy CMF) lo sancionó en 2014 como <b>operaciones ficticias y esquema fraudulento</b>: el paso por bolsa no buscaba un comprador real, sino extraer el diferencial. La sanción contra Ponce y sus ejecutivos está firme; según el apunte, la responsabilidad de las corredoras estaba pendiente de fallo en la Corte Suprema.</p></div>
<h3>Compensación y liquidación</h3>
<div class="grid dos">
  <div class="card"><b>Bolsa</b><p>Donde se negocia, se calza el precio y se cierra la operación.</p></div>
  <div class="card"><b>Cámara de compensación y liquidación</b><p>Agrupa las órdenes, fija los saldos netos y procesa el pago. Compensa <b>solo entre corredores</b> (nunca con el cliente), en dinero y en valores fungibles.</p></div>
</div>`
      }
    ],

    interactivos: [
      {
        id: 'espublica', titulo: '¿Oferta pública o no?', seccion: 'oferta',
        descripcion: 'Clasifica cada oferta según el art. 4° LMV y las hipótesis de la NCG 336 (modificada por la NCG 452/2021).',
        montar: function (el) {
          var casos = [
            ['Alberto Chang ofrece pagarés con alta rentabilidad a cualquier interesado.', true, 'Oferta pública sin inscripción: delito del art. 62 a) LMV.'],
            ['Una empresa ofrece bonos solo a AFP, bancos y compañías de seguros.', false, 'Dirigida exclusivamente a inversionistas calificados: safe harbor.'],
            ['Una startup ofrece acciones a 40 personas comunes en un año.', false, 'No más de 50 inversionistas no calificados: no se reputa pública.'],
            ['Una sociedad ofrece pagarés de 5.000 UF cada uno.', false, 'Valor unitario de 3.000 UF o más: safe harbor.'],
            ['Un emisor invita por redes sociales a «todos los profesionales de la salud» a suscribir acciones.', true, 'La ley incluye la oferta a «ciertos sectores o grupos específicos» del público.'],
            ['Una empresa ofrece acciones a 200 calificados y 120 no calificados en el año.', true, 'Supera el límite de 50 no calificados: no entra en ningún safe harbor.']
          ];
          var i = 0, ok = 0;
          function pintar() {
            if (i >= casos.length) { el.innerHTML = '<div class="resultado ok"><b>Resultado: ' + ok + ' de ' + casos.length + '.</b> <button class="btn sec" id="re">Repetir</button></div>'; el.querySelector('#re').onclick = function () { i = 0; ok = 0; pintar(); }; return; }
            var c = casos[i];
            el.innerHTML = '<p class="small">Caso ' + (i + 1) + ' de ' + casos.length + '</p><p style="font-size:18px;font-weight:700">' + c[0] + '</p><div class="opciones-chip"><button data-v="1">Oferta pública: requiere inscripción</button><button data-v="0">No se reputa pública</button></div><div id="fb"></div>';
            el.querySelectorAll('[data-v]').forEach(function (b) {
              b.onclick = function () {
                var bien = (b.dataset.v === '1') === c[1]; if (bien) ok++;
                el.querySelectorAll('[data-v]').forEach(function (x) { x.disabled = true; if ((x.dataset.v === '1') === c[1]) x.classList.add('activo'); });
                el.querySelector('#fb').innerHTML = '<div class="resultado ' + (bien ? 'ok' : 'mal') + '"><b>' + (bien ? '✓ Correcto.' : '✗ No.') + '</b> ' + c[2] + '<div style="margin-top:10px"><button class="btn" id="sig">Siguiente</button></div></div>';
                el.querySelector('#sig').onclick = function () { i++; pintar(); };
              };
            });
          }
          pintar();
        }
      },
      {
        id: 'informaropa', titulo: '¿Informar, OPA o nada?', seccion: 'control',
        descripcion: 'Para cada operación, decide qué exige la LMV: solo el deber de informar del art. 54, OPA (art. 199) o ningún trámite especial.',
        montar: function (el) {
          var casos = [
            ['Un inversionista compra en bolsa el 0,01% de una S.A. abierta.', 'nada', 'No hay toma de control: rige la libre transferibilidad.'],
            ['Los hijos de Andrónico Luksic heredan el control de las empresas del grupo.', 'info', 'La herencia no es adquisición de acciones: sin OPA, pero con deber de informar (art. 54).'],
            ['Michael Clark compra el 90% de las cuotas del FIP dueño del 63% de Azul Azul S.A.', 'opa', 'Adquisición indirecta de acciones («se compra al accionista»): debía hacer OPA.'],
            ['Piñera y la familia Cueto firman un pacto de actuación conjunta y pasan a controlar LAN.', 'info', 'El control nace de un pacto, no de una compra de acciones: sin OPA, pero con art. 54.'],
            ['Euroamérica (26,5%) e Indisa (25,5%) compran por separado y sin pacto el 51% de Karlezi en Clínica Las Condes.', 'nada', 'Ninguno toma el control por sí solo y no hay pacto: no hay OPA.'],
            ['Un grupo compra directamente a varios accionistas el 60% de una tienda abierta en bolsa.', 'opa', 'Toma de control por adquisición directa de acciones: OPA a todos los accionistas.']
          ];
          var et = { nada: 'Nada especial', info: 'Solo informar (art. 54)', opa: 'OPA (art. 199)' };
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
        id: 'calccontrol', titulo: 'Calculadora del controlador (art. 97)', seccion: 'controlador',
        descripcion: 'Ingresa el porcentaje del accionista A y de los demás accionistas. Prueba los casos de clase con los botones.',
        montar: function (el) {
          var presets = {
            quinenco: ['Quiñenco en LQIF', 50, '50', true],
            invercap: ['Invercap en CAP', 41, '20, 10', false],
            euro1: ['Euroamérica (antes)', 26.5, '25.5, 6', false],
            euro2: ['Euroamérica (después)', 26.5, '25.5, 4.5', false]
          };
          el.innerHTML = '<div class="opciones-chip" id="pre">' + Object.keys(presets).map(function (k) { return '<button data-k="' + k + '">' + presets[k][0] + '</button>'; }).join('') + '</div>' +
            '<div class="fila"><div class="campo"><label>Accionista A (% con voto)</label><input type="number" id="a" value="26.5" step="0.5" min="0" max="100"></div>' +
            '<div class="campo"><label>Otros accionistas (%, separados por coma)</label><input type="text" id="o" value="25.5, 6"></div></div>' +
            '<label class="check"><input type="checkbox" id="dir"> A puede elegir a la mayoría del directorio</label><div id="out"></div>';
          function calc() {
            var a = parseFloat(el.querySelector('#a').value) || 0;
            var otros = el.querySelector('#o').value.split(/[,;]/).map(function (x) { return parseFloat(x.replace(',', '.')); }).filter(function (x) { return !isNaN(x) && x > 0; });
            var dir = el.querySelector('#dir').checked;
            var max = otros.length ? Math.max.apply(null, otros) : 0;
            var relevantes = otros.filter(function (x) { return x >= 5; });
            var suma = relevantes.reduce(function (s, x) { return s + x; }, 0);
            var r, ok = true;
            if (a > 50 && dir) r = '<b>Controlador por la letra a)</b>: tiene la mayoría de votos <b>y</b> elige a la mayoría del directorio.';
            else if (a > 40 && max < a) r = '<b>Controlador por influencia decisiva (sub-hipótesis A)</b>: más del 40% y nadie lo iguala o supera (máximo de los demás: ' + fmt(max) + '%).';
            else if (a >= 25 && a <= 40 && a > suma) r = '<b>Controlador por influencia decisiva (sub-hipótesis B)</b>: ' + fmt(a) + '% supera la suma de los accionistas con 5% o más (' + fmt(suma) + '%).' + (otros.length > relevantes.length ? ' Los de menos de 5% no se cuentan.' : '');
            else {
              ok = false;
              if (a > 40) r = '<b>No es controlador</b>: otro accionista lo iguala o supera (' + fmt(max) + '%).';
              else if (a >= 25) r = '<b>No es controlador</b>: ' + fmt(a) + '% no supera la suma de los accionistas con 5% o más (' + fmt(suma) + '%).';
              else r = '<b>No es controlador</b>: con menos de 25% no hay hipótesis de influencia decisiva.';
            }
            var filial = (a > 50 || dir) ? '<p class="small">Art. 86 LSA (disyuntivo): A sería <b>matriz</b> de la sociedad, porque tiene la mayoría de votos <b>o</b> elige a la mayoría del directorio.</p>' : '';
            el.querySelector('#out').innerHTML = '<div class="resultado ' + (ok ? 'ok' : 'mal') + '">' + r + filial + '</div>';
          }
          el.querySelectorAll('#pre button').forEach(function (b) {
            b.onclick = function () {
              var p = presets[b.dataset.k];
              el.querySelectorAll('#pre button').forEach(function (x) { x.classList.toggle('activo', x === b); });
              el.querySelector('#a').value = p[1]; el.querySelector('#o').value = p[2]; el.querySelector('#dir').checked = p[3]; calc();
            };
          });
          el.querySelectorAll('input').forEach(function (i) { i.oninput = calc; i.onchange = calc; });
          calc();
        }
      },
      {
        id: 'liquidacion', titulo: '¿Cuándo se paga y se entrega?', seccion: 'bursatiles',
        descripcion: 'Elige el día del cierre en bolsa y la modalidad. No considera feriados: solo sábados y domingos.',
        montar: function (el) {
          var dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
          el.innerHTML = '<div class="fila"><div class="campo"><label>Día del cierre</label><select id="d">' + [1, 2, 3, 4, 5].map(function (d) { return '<option value="' + d + '"' + (d === 5 ? ' selected' : '') + '>' + dias[d] + '</option>'; }).join('') + '</select></div>' +
            '<div class="campo"><label>Modalidad</label><select id="m"><option value="0">PH (pagadero hoy)</option><option value="1" selected>PM (pagadero mañana)</option><option value="2">Contado normal</option><option value="p">A plazo</option></select></div>' +
            '<div class="campo" id="cp" style="display:none"><label>Días hábiles de plazo (3 a 180)</label><input type="number" id="n" value="30" min="3" max="180"></div></div><div id="out"></div>';
          function calc() {
            var d = +el.querySelector('#d').value, m = el.querySelector('#m').value;
            el.querySelector('#cp').style.display = m === 'p' ? '' : 'none';
            var n = m === 'p' ? Math.min(180, Math.max(3, +el.querySelector('#n').value || 3)) : +m;
            var dia = d, cal = 0, k = n;
            while (k > 0) { dia = (dia + 1) % 7; cal++; if (dia !== 0 && dia !== 6) k--; }
            var txt = n === 0 ? 'el <b>mismo ' + dias[d] + '</b>' : 'el <b>' + dias[dia] + '</b>, ' + n + ' día(s) hábil(es) después (' + cal + ' días corridos)';
            var nota = m === '2' ? 'Las 48 horas hábiles permiten a los corredores compensar (netear) dinero y acciones de la misma especie.' :
              m === 'p' ? 'Operación a plazo: la bolsa exige garantías (prendas sobre instrumentos) porque el corredor responde con su patrimonio (art. 33 LMV).' :
              m === '1' && d === 5 ? 'Cerrada un viernes, no vence el sábado (inhábil), sino el lunes.' : 'El contrato se perfeccionó en el cierre; aquí solo se fija cuándo se cumple.';
            el.querySelector('#out').innerHTML = '<div class="resultado"><p>Pago del dinero y entrega de los títulos: ' + txt + '.</p><p class="small">' + nota + '</p></div>';
          }
          el.querySelectorAll('select, input').forEach(function (i) { i.oninput = calc; i.onchange = calc; }); calc();
        }
      },
      {
        id: 'ventacorta', titulo: 'Simulador de venta corta', seccion: 'bursatiles',
        descripcion: 'Ejemplo de clase: vendes a plazo una acción a $100 sin tenerla. Mueve el precio que tendrá al vencimiento.',
        montar: function (el) {
          el.innerHTML = '<div class="fila"><div class="campo"><label>Precio pactado a plazo ($)</label><input type="number" id="pp" value="100" step="10"></div><div class="campo"><label>Acciones vendidas</label><input type="number" id="q" value="1000" step="100"></div></div>' +
            '<div class="campo" style="max-width:420px"><label>Precio al contado al vencimiento: $<b id="v">50</b></label><input type="range" id="pf" min="10" max="250" step="5" value="50"></div><div id="out"></div>';
          function calc() {
            var pp = +el.querySelector('#pp').value || 0, q = +el.querySelector('#q').value || 0, pf = +el.querySelector('#pf').value;
            el.querySelector('#v').textContent = pf;
            var dif = (pp - pf) * q;
            var html = dif >= 0 ?
              '<div class="resultado ok"><b>Ganancia: $' + fmt(dif) + '.</b> Compras al contado a $' + pf + ', entregas al comprador a $' + pp + ' y te quedas con la diferencia. El comprador a plazo pierde: apostó al alza.</div>' :
              '<div class="resultado mal"><b>Pérdida: $' + fmt(-dif) + '.</b> Igual debes cumplir (el corredor responde y hay garantías). Opciones:<ul><li><b>Materializar la pérdida:</b> compras a $' + pf + ' y entregas.</li><li><b>Postergar:</b> pides prestadas las acciones pagando un canon, entregas, y esperas que el precio baje para comprarlas y devolverlas.</li></ul></div>';
            el.querySelector('#out').innerHTML = html;
          }
          el.querySelectorAll('input').forEach(function (i) { i.oninput = calc; }); calc();
        }
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'operaciones', enunciado: '¿Cuál es la operación típica del mercado primario?', opciones: ['La suscripción', 'La compraventa en bolsa', 'El préstamo de valores', 'La custodia'], correcta: 0, explicacion: 'Por la suscripción nace el valor y el adquirente es su primer titular.' },
      { tipo: 'vf', seccion: 'operaciones', enunciado: 'Cuando el primer titular vende en bolsa las acciones que suscribió, la operación es de mercado secundario.', respuesta: true, explicacion: 'El título ya tenía un titular; la venta da liquidez.' },
      { tipo: 'alternativas', seccion: 'operaciones', enunciado: '¿Por qué el mercado de valores tiene una regulación imperativa especial?', opciones: ['Porque un fraude produce daño sistémico: el pánico genera exceso de oferta y desplome de precios', 'Porque los valores son bienes raíces', 'Porque el Estado garantiza las inversiones', 'Porque el Código Civil no regula la compraventa'], correcta: 0, explicacion: 'El objetivo central es proteger al inversionista.' },
      { tipo: 'relacionar', seccion: 'inversionistas', enunciado: 'Relaciona cada inversionista con su descripción.', pares: [['Retail', 'Invierte sus ahorros sin ser su giro'], ['Calificado', 'Puede evaluar riesgos y defenderse solo'], ['Institucional', 'Su giro principal es invertir (AFP, bancos)']], explicacion: 'Arts. 4° bis E y F LMV.' },
      { tipo: 'alternativas', seccion: 'inversionistas', enunciado: 'Un cliente de alto patrimonio le dice a su corredora: «administre mi capital y decida usted». ¿Cómo se califica la operación?', opciones: ['Como hecha por un inversionista calificado', 'Como hecha por un inversionista retail', 'Como inversión institucional', 'Como oferta pública'], correcta: 0, explicacion: 'Con mandato discrecional decide el profesional. Es lo que ocurrió en el caso Real Fondo Capital.' },
      { tipo: 'vf', seccion: 'inversionistas', enunciado: 'Las compañías de seguros de vida son inversionistas institucionales.', respuesta: true, explicacion: 'Invierten las primas en bonos de largo plazo para pagar pensiones y rentas vitalicias.' },
      { tipo: 'alternativas', seccion: 'oferta', enunciado: 'Según el apunte, ¿cuál es el criterio decisivo para que una invitación a un «grupo» sea oferta pública?', opciones: ['La simultaneidad de la invitación', 'La suma de personas contactadas en el tiempo', 'El monto total ofrecido', 'Que se publique en un diario'], correcta: 0, explicacion: 'En la negociación uno a uno no hay presión de grupo.' },
      { tipo: 'vf', seccion: 'oferta', enunciado: 'La inscripción en el Registro de Valores es una garantía estatal de la solvencia del emisor.', respuesta: false, explicacion: 'Solo busca evitar engaños y ocultamiento de información.' },
      { tipo: 'alternativas', seccion: 'oferta', enunciado: '¿Qué norma tipifica como delito hacer oferta pública de valores sin registro?', opciones: ['Art. 62 letra a) LMV', 'Art. 54 LMV', 'Art. 97 LMV', 'Art. 33 LMV'], correcta: 0, explicacion: 'El apunte indica que reubicó al antiguo art. 59 A. Caso Alberto Chang.' },
      { tipo: 'alternativas', seccion: 'oferta', enunciado: '¿Cuál de estas ofertas NO se reputa pública según la NCG 336 (modificada por la NCG 452/2021)?', opciones: ['Una oferta de pagarés de 3.000 UF cada uno', 'Una oferta a 120 inversionistas no calificados', 'Una oferta por redes sociales a todo el público', 'Una oferta a un sector específico del público'], correcta: 0, explicacion: 'Valor unitario igual o superior a 3.000 UF: safe harbor.' },
      { tipo: 'alternativas', seccion: 'oferta', enunciado: '¿Cómo inicia una AGF la oferta de un nuevo fondo?', opciones: ['Deposita el reglamento interno en la CMF y al día hábil siguiente puede vender', 'Espera la aprobación previa de la CMF', 'Lo inscribe en el Conservador de Comercio', 'Obtiene autorización de la bolsa'], correcta: 0, explicacion: 'Es un mecanismo flexible para no perder la ventana de oportunidad; la CMF fiscaliza ex post.' },
      { tipo: 'relacionar', seccion: 'oferta', enunciado: 'Relaciona cada deber de información con su contenido.', pares: [['Información periódica', 'Balances, memorias y estados financieros'], ['Información eventual', 'Hechos relevantes, de inmediato']], explicacion: 'Quien acude al mercado pierde el secreto de los negocios.' },
      { tipo: 'alternativas', seccion: 'control', enunciado: '¿Cuándo es obligatoria la OPA?', opciones: ['Cuando el control de una S.A. abierta se toma por adquisición directa o indirecta de acciones', 'En toda toma de control, incluida la herencia', 'Solo en las fusiones', 'Cuando se compra cualquier cantidad de acciones en bolsa'], correcta: 0, explicacion: 'Art. 199 a) LMV. El deber de informar del art. 54, en cambio, rige siempre.' },
      { tipo: 'vf', seccion: 'control', enunciado: 'La infracción al deber de informar la toma de control (art. 54 LMV) produce la nulidad absoluta de la operación.', respuesta: false, explicacion: 'El art. 54 dice expresamente que la infracción no invalidará la operación, sin perjuicio de indemnizaciones y sanciones.' },
      { tipo: 'alternativas', seccion: 'control', enunciado: '¿Qué consecuencia tiene omitir una OPA obligatoria?', opciones: ['La operación queda expuesta a nulidad absoluta y es delito (art. 61 A LMV)', 'Solo una multa, sin afectar la validez', 'Ninguna, si se informa después', 'La sociedad debe cerrarse'], correcta: 0, explicacion: 'El estatuto de OPA no tiene la dispensa de invalidez del art. 54.' },
      { tipo: 'alternativas', seccion: 'control', enunciado: 'En el caso Azul Azul, ¿qué argumentó Michael Clark para no hacer OPA?', opciones: ['Que compró cuotas de un FIP y no acciones de la S.A. abierta', 'Que heredó las acciones', 'Que la sociedad era cerrada', 'Que tenía menos del 25%'], correcta: 0, explicacion: 'La CMF y la Corte Suprema resolvieron que fue una adquisición indirecta de acciones.' },
      { tipo: 'vf', seccion: 'control', enunciado: 'La toma de control de LAN por Piñera y la familia Cueto, mediante un pacto de actuación conjunta, estuvo exenta de OPA.', respuesta: true, explicacion: 'No hubo adquisición de acciones en ese momento; sí regía el deber de informar.' },
      { tipo: 'alternativas', seccion: 'control', enunciado: '¿Por qué la venta del paquete de Karlezi en Clínica Las Condes no exigió OPA?', opciones: ['Porque Euroamérica e Indisa compraron por separado, sin pacto, y ninguno tomó el control por sí solo', 'Porque fue una herencia', 'Porque la clínica es sociedad cerrada', 'Porque se pagó al contado'], correcta: 0, explicacion: '~26,5% y ~25,5% sin acuerdo de actuación conjunta.' },
      { tipo: 'alternativas', seccion: 'controlador', enunciado: 'Según el art. 97 a) LMV, ¿qué requisitos debe reunir el controlador?', opciones: ['Mayoría de votos en la junta Y poder de elegir a la mayoría del directorio', 'Mayoría de votos O poder de elegir a la mayoría del directorio', 'Más del 25% de las acciones', 'Ser el accionista más antiguo'], correcta: 0, explicacion: 'Son copulativos. El art. 86 LSA (filial) los usa en forma disyuntiva.' },
      { tipo: 'vf', seccion: 'controlador', enunciado: 'Quiñenco es controlador de Banco de Chile según el art. 97 LMV, porque nombra 4 de los 7 directores de LQIF.', respuesta: false, explicacion: 'Tiene 50% de los votos, no la mayoría, y Citigroup lo iguala. Sí hay relación matriz-filial (art. 86 LSA).' },
      { tipo: 'alternativas', seccion: 'controlador', enunciado: 'Un accionista tiene 30%; los demás tienen 20%, 8% y muchos con menos de 5%. ¿Es controlador?', opciones: ['Sí, por influencia decisiva: 30% supera la suma de quienes tienen 5% o más (28%)', 'No, porque no tiene más del 40%', 'No, porque no tiene la mayoría absoluta', 'Sí, pero solo si elige al directorio'], correcta: 0, explicacion: 'Sub-hipótesis B: entre 25% y 40%, comparando solo con los que tienen 5% o más.' },
      { tipo: 'alternativas', seccion: 'controlador', enunciado: '¿Por qué Euroamérica pasó a controlar Clínica Las Condes tras el aumento de capital?', opciones: ['Porque el tercer accionista se diluyó bajo el 5% y dejó de contarse en la suma', 'Porque compró las acciones de Indisa', 'Porque hizo una OPA', 'Porque firmó un pacto con Indisa'], correcta: 0, explicacion: '26,5% pasó a compararse solo con el 25,5% de Indisa. No hubo OPA, porque fue suscripción de un aumento de capital.' },
      { tipo: 'relacionar', seccion: 'intermediarios', enunciado: 'Relaciona cada intermediario con su rasgo.', pares: [['Corredor de bolsa', 'Único que intermedia acciones cotizadas en bolsa'], ['Agente de valores', 'Opera en el mercado no organizado']], explicacion: 'Art. 24 LMV.' },
      { tipo: 'alternativas', seccion: 'intermediarios', enunciado: '¿Qué prohíbe el art. 33 LMV al intermediario de valores?', opciones: ['Oponer la excepción de falta de provisión de fondos', 'Actuar a nombre propio', 'Cobrar comisiones', 'Rechazar clientes'], correcta: 0, explicacion: 'Aceptada la orden, responde personal e ilimitadamente ante el mercado.' },
      { tipo: 'vf', seccion: 'intermediarios', enunciado: 'En bolsa, el corredor suele actuar a nombre propio, de modo que la identidad del cliente queda en reserva.', respuesta: true, explicacion: 'Mandato sin representación.' },
      { tipo: 'alternativas', seccion: 'intermediarios', enunciado: 'Un cliente conservador insiste en comprar acciones de alto riesgo. ¿Qué debe hacer el asesor según el deber de suitability (art. 28 Ley Fintech)?', opciones: ['Puede ejecutar la orden, pero debe dejar respaldo de haberle advertido el riesgo', 'Debe negarse siempre', 'Debe pedir autorización a la CMF', 'Debe reclasificarlo como calificado'], correcta: 0, explicacion: 'Conocer el perfil de riesgo y ofrecer productos acordes.' },
      { tipo: 'alternativas', seccion: 'intermediarios', enunciado: 'En la custodia de valores, ¿quién es el dueño de los títulos entre el custodio y el cliente?', opciones: ['El cliente (art. 179 LMV)', 'El custodio', 'El emisor', 'La bolsa'], correcta: 0, explicacion: 'Frente a terceros figura el custodio, pero la propiedad es del cliente.' },
      { tipo: 'relacionar', seccion: 'intermediarios', enunciado: 'Relaciona cada servicio con quién decide.', pares: [['Intermediación simple', 'El cliente ordena; el corredor ejecuta'], ['Asesoría de inversión', 'El profesional sugiere; el cliente decide'], ['Administración de cartera', 'El gestor decide y ejecuta']], explicacion: 'Caso STF: administración de cartera con inversiones no idóneas.' },
      { tipo: 'vf', seccion: 'intermediarios', enunciado: 'Las reglas operativas de una bolsa deben contar con la aprobación previa de la CMF.', respuesta: true, explicacion: 'La bolsa además fiscaliza a sus corredores y puede suspender cotizaciones.' },
      { tipo: 'alternativas', seccion: 'bursatiles', enunciado: '¿Cuál es la regla general de liquidación en la bolsa chilena?', opciones: ['Contado normal: al segundo día hábil bursátil', 'Pagadero hoy', 'Pagadero mañana', 'A 30 días'], correcta: 0, explicacion: 'Las 48 horas permiten compensar entre corredores.' },
      { tipo: 'alternativas', seccion: 'bursatiles', enunciado: '¿Cuándo se perfecciona una compraventa en bolsa?', opciones: ['En el cierre (calce de las órdenes)', 'Cuando se paga el precio', 'Cuando se entregan los títulos', 'Cuando se inscribe en el registro de accionistas'], correcta: 0, explicacion: 'El cumplimiento es diferido según la modalidad de plazo.' },
      { tipo: 'vf', seccion: 'bursatiles', enunciado: 'Una operación ficticia es la que no queda registrada en la bolsa.', respuesta: false, explicacion: 'Se registra, pero carece de intención real de cambiar el dominio (art. 53 LMV).' },
      { tipo: 'alternativas', seccion: 'bursatiles', enunciado: 'En el caso Cascada, ¿cómo calificó la SVS las operaciones de Oro Blanco?', opciones: ['Operaciones ficticias y esquema fraudulento', 'Uso de información privilegiada', 'Oferta pública sin registro', 'Omisión de OPA'], correcta: 0, explicacion: 'El paso por bolsa no buscaba un comprador real, sino extraer el diferencial de precio para el controlador.' },
      { tipo: 'alternativas', seccion: 'bursatiles', enunciado: 'Vendiste a plazo a $100 una acción que no tenías y al vencimiento vale $50. ¿Qué ocurre?', opciones: ['Compras a $50, entregas a $100 y ganas $50', 'Pierdes $50', 'El contrato se resuelve', 'Debes devolver $100'], correcta: 0, explicacion: 'Es una venta corta exitosa.' },
      { tipo: 'alternativas', seccion: 'bursatiles', enunciado: '¿Entre quiénes compensa la cámara de compensación y liquidación?', opciones: ['Solo entre corredores de bolsa', 'Entre corredores y clientes', 'Entre emisores', 'Entre la CMF y la bolsa'], correcta: 0, explicacion: 'Nunca con el cliente; netea dinero y valores fungibles.' },

      { tipo: 'oral', seccion: 'oferta', enunciado: '¿Qué es una oferta pública de valores y qué exige la ley para hacerla?', puntos: ['Art. 4° LMV: dirigida al público en general o a sectores o grupos específicos; criterio de simultaneidad (presión de grupo).', 'Fundamento psicológico: temor al ridículo; ejemplo de Endesa.', 'Art. 6°: inscripción previa del valor y del emisor en el Registro de Valores; control ex ante, que no garantiza solvencia.', 'Art. 62 a): delito ofrecer sin registro (caso Chang).', 'NCG 336 / NCG 452: cuatro safe harbors; mecanismos flexibles (depósito de reglamento, registro automático).'], norma: 'Arts. 4°, 6° y 62 a) Ley 18.045; NCG 336' },
      { tipo: 'oral', seccion: 'control', enunciado: 'Compare el deber de informar la toma de control (art. 54) con la OPA y explique el caso Azul Azul.', puntos: ['Art. 54: regla general, cualquier medio; aviso previo con 10 días hábiles; la infracción no invalida (excepción al art. 1683 CC).', 'OPA (art. 199 a): solo por adquisición directa o indirecta de acciones; art. 54 B; sin dispensa: nulidad absoluta; delito del art. 61 A.', 'Azul Azul: Clark compró cuotas del FIP dueño del 63%; adquisición indirecta; CMF y Corte Suprema exigieron OPA.', 'Aristas: rescisión y liquidador de Sartor; formalización; demanda de nulidad de Schapira.', 'Sin OPA: herencia (Luksic), pacto (LAN), compras separadas sin control (Clínica Las Condes).'], norma: 'Arts. 54, 54 B, 61 A y 199 Ley 18.045' },
      { tipo: 'oral', seccion: 'controlador', enunciado: '¿Quién es controlador según el art. 97 LMV? Explique con ejemplos.', puntos: ['La LMV no define control; define controlador (art. 97).', 'Letra a): mayoría de votos y elegir mayoría del directorio, copulativo; art. 86 LSA es disyuntivo (Quiñenco y Banco de Chile).', 'Letra b) A: más de 40% sin que nadie lo iguale (Invercap y CAP).', 'Letra b) B: entre 25% y 40% y más que la suma de los que tienen 5% o más (Euroamérica tras la dilución).', 'Miembro del controlador; socio gestor; postura de la CMF (control fáctico).'], norma: 'Art. 97 Ley 18.045; art. 86 LSA' },
      { tipo: 'oral', seccion: 'intermediarios', enunciado: 'Explique el rol de los intermediarios de valores y sus responsabilidades.', puntos: ['Por qué existen: costos de transacción sin banco.', 'Art. 24: corredores (miembros de bolsa, reserva sobre acciones cotizadas) y agentes de valores.', 'Mandato, normalmente a nombre propio: reserva de la identidad del cliente.', 'Art. 33: no pueden oponer la falta de provisión de fondos; responden con su patrimonio; exigencias de la CMF; giro reservado.', 'Actividades complementarias: asesoría (suitability, art. 28 Fintech), custodia (art. 179, DCV), administración de cartera (STF).'], norma: 'Arts. 24, 33 y 179 Ley 18.045; art. 28 Ley Fintech' },
      { tipo: 'oral', seccion: 'bursatiles', enunciado: 'Explique las operaciones bursátiles, sus plazos y el caso Cascada.', puntos: ['Perfeccionamiento en el cierre; cumplimiento diferido.', 'PH, PM, contado normal (regla general, 2 días, neteo) y a plazo (3-180 días, garantías, especulación, venta corta).', 'Ejes: formación de precios y realidad de las operaciones.', 'Operaciones ficticias: art. 53 y art. 59 f) LMV.', 'Cascada: venta en bolsa de Oro Blanco a $90 a vinculadas y recompra a $110; sanción de 2014; perjuicio a minoritarios.'], norma: 'Arts. 53 y 59 f) Ley 18.045' }
    ]
  });
})();
