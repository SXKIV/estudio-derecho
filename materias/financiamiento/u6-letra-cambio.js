/* Unidad 6 — Letra de cambio (clases 4 a 9 del Prof. Gaspar).
   Fuentes: apuntes de clases del Prof. Gaspar (lectura de apoyo: Sandoval, tomo II, pp. 65-162). Norma: Ley 18.092.
   Secciones 8 y 9: Sandoval, Derecho Comercial, tomo II (5ª ed., 2005), cap. II. */
(function () {
  function fecha(d) { return d.toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' }); }
  function masMeses(d, m) { var x = new Date(d.getTime()); x.setMonth(x.getMonth() + m); return x; }

  Estudio.registrarUnidad({
    id: 'u6', numero: 6, bloque: 'Prof. Gaspar', profesor: 'Gaspar',
    titulo: 'Letra de cambio',
    resumen: 'Del contrato de cambio a la letra abstracta; el giro y sus menciones; el endoso y sus clases; la aceptación y el aval; el pago, el protesto y el perjuicio de la letra; las acciones cambiarias y su prescripción. Con Sandoval: la letra sin menciones esenciales, retiro de la aceptación, solidaridad cambiaria, protesto notarial y bancario, extravío, interrupción de la prescripción y tacha de falsedad.',
    lecturas: 'Apuntes de clases del Prof. Gaspar (clases 4 a 9 del cronograma). Lectura de apoyo: Sandoval, tomo II, pp. 65-162. Norma principal: Ley 18.092 sobre letra de cambio y pagaré. Secciones 8 y 9: Sandoval, tomo II, cap. II (§§ 64, 70, 98-101, 113-148).',

    /* ---------------- Glosario (definiciones del material) ---------------- */
    glosario: [
      { termino: 'Letra de cambio', definicion: 'Documento incausado, propio del comercio humano, que reemplaza al dinero y en virtud del cual su portador tiene derecho a exigir del ejecutado el pago de la suma de dinero que ella consigna.', fuente: 'C. A. de Santiago, 25-11-1983, citada en los apuntes', seccion: 'concepto', literal: true, alias: ['letras de cambio', 'letra'] },
      { termino: 'Librador', definicion: 'Creador del título: emite la orden de pago y firma la letra. Garantiza la aceptación y el pago (art. 10 Ley 18.092).', fuente: 'Apuntes; art. 10 Ley 18.092', seccion: 'concepto', alias: ['girador'] },
      { termino: 'Librado', definicion: 'Persona a cuyo cargo se gira la letra y a quien se dirige la orden de pago. No tiene obligación cambiaria mientras no firme la aceptación.', fuente: 'Apuntes de clases', seccion: 'concepto', alias: ['girado'] },
      { termino: 'Tomador', definicion: 'Beneficiario designado en la letra como acreedor original, a cuya orden debe hacerse el pago.', fuente: 'Apuntes de clases', seccion: 'concepto', alias: ['beneficiario de la letra'] },
      { termino: 'Aceptante', definicion: 'El librado que firmó la aceptación: queda como principal obligado al pago de la letra.', fuente: 'Arts. 33 y ss. Ley 18.092', seccion: 'aceptacion-aval' },
      { termino: 'Giro', definicion: 'Acto formal, solemne y unilateral por el cual el librador crea la letra e incorpora la orden incondicional de pagar una suma de dinero a un beneficiario.', fuente: 'Apuntes de clases', seccion: 'giro', alias: ['emision', 'giro de la letra'] },
      { termino: 'Cambio húmedo', definicion: 'Operación real de traslado geográfico de dinero mediante el contrato de cambio.', fuente: 'Apuntes de clases', seccion: 'antecedentes' },
      { termino: 'Cambio seco', definicion: 'Préstamo encubierto bajo la forma de contrato de cambio, con un librado ficticio, para eludir la prohibición medieval de la usura.', fuente: 'Apuntes de clases', seccion: 'antecedentes' },
      { termino: 'Provisión de fondos', definicion: 'Fondos que el librador debía proveer al librado (mandatario) para que pagara. Con la letra abstracta, el librado que acepta no puede excusarse en la falta de provisión.', fuente: 'Apuntes de clases', seccion: 'antecedentes', alias: ['falta de provision de fondos'] },
      { termino: 'Letra en blanco', definicion: 'Letra a la que le faltan menciones del art. 1°, que cualquier tenedor legítimo puede completar antes del cobro según las instrucciones de los obligados; el abuso no puede oponerse al tenedor de buena fe.', fuente: 'Art. 11 Ley 18.092', seccion: 'giro', alias: ['firma en blanco', 'abuso de firma en blanco'] },
      { termino: 'Cláusula devuelta sin gastos', definicion: 'Cláusula accidental que libera al portador de protestar la letra por falta de aceptación o de pago, conservando las acciones contra todos los firmantes. Puesta por el librador, afecta a todos; por otro obligado, solo a él.', fuente: 'Arts. 13 N°4, 74 y 79 Ley 18.092', seccion: 'giro', alias: ['sin obligacion de protesto', 'sin protesto', 'devuelta sin gastos'] },
      { termino: 'Adulteración', definicion: 'Alteración material oculta del texto de la letra. Los firmantes anteriores se obligan según el texto original y los posteriores según el nuevo.', fuente: 'Art. 15 Ley 18.092', seccion: 'giro', alias: ['adulteracion de la letra'] },
      { termino: 'Endoso traslaticio', definicion: 'Endoso que transfiere el dominio de la letra y todos sus derechos; es el que se presume si no se expresa otra calidad. El endosante garantiza solidariamente la aceptación y el pago.', fuente: 'Arts. 21 y 25 Ley 18.092', seccion: 'endoso', alias: ['endoso en propiedad', 'endoso traslaticio de dominio'] },
      { termino: 'Endoso en cobro', definicion: 'Endoso con la cláusula «valor en cobro» u otra equivalente: constituye un mandato para cobrar, con todas las facultades del mandatario judicial, pero no permite endosar en dominio ni en garantía.', fuente: 'Art. 29 Ley 18.092', seccion: 'endoso', alias: ['endoso en cobranza', 'endoso en comision de cobranza', 'endoso en mandato'] },
      { termino: 'Endoso en garantía', definicion: 'Endoso con la cláusula «valor en prenda» o «en garantía»: constituye prenda sobre la letra; el endosatario puede cobrarla y aplicar su valor a su crédito, rindiendo cuenta.', fuente: 'Art. 30 Ley 18.092', seccion: 'endoso', alias: ['endoso en prenda'] },
      { termino: 'Endoso en blanco', definicion: 'Endoso que no contiene el nombre del endosatario, o que consiste solo en la firma del endosante; permite transferir la letra por la sola entrega.', fuente: 'Arts. 23 y 24 Ley 18.092', seccion: 'endoso' },
      { termino: 'Cláusula no endosable', definicion: 'Puesta por el librador, convierte la letra en nominativa: solo se transfiere o prenda según las reglas de los créditos nominativos, aunque puede endosarse en cobro. Puesta por un endosante, este solo responde ante su endosatario directo.', fuente: 'Arts. 18 y 25 Ley 18.092', seccion: 'endoso', alias: ['no endosable'] },
      { termino: 'Portador legítimo', definicion: 'Tenedor de la letra que justifica su derecho por una serie no interrumpida de endosos, aunque el último esté en blanco.', fuente: 'Art. 26 Ley 18.092', seccion: 'endoso', alias: ['tenedor legitimo'] },
      { termino: 'Aceptación', definicion: 'Acto unilateral por el cual el librado asume la obligación cambiaria de pagar la letra al vencimiento; consta en la letra con «acepto» u otra expresión y su firma, o con su sola firma en el anverso.', fuente: 'Art. 33 Ley 18.092', seccion: 'aceptacion-aval', alias: ['aceptacion de la letra'] },
      { termino: 'Aval', definicion: 'Acto escrito y firmado en la letra de cambio, en una hoja de prolongación adherida a ésta, o en un documento separado, por el cual el girador, un endosante o un tercero garantiza, en todo o en parte, el pago de ella.', fuente: 'Art. 46 Ley 18.092', seccion: 'aceptacion-aval', literal: true, alias: ['avalista', 'fianza cambiaria'] },
      { termino: 'Protesto', definicion: 'Acto formal e insustituible por el cual un ministro de fe deja constancia de que no tuvo lugar la aceptación, la fecha de la aceptación o el pago de la letra.', fuente: 'Art. 59 Ley 18.092; apuntes', seccion: 'pago-protesto', alias: ['protestar'] },
      { termino: 'Perjuicio de la letra', definicion: 'Caducidad de las acciones cambiarias contra el librador, los endosantes y sus avales por no protestar en tiempo y forma. No libera al aceptante ni a su aval.', fuente: 'Art. 79 Ley 18.092', seccion: 'pago-protesto', alias: ['letra perjudicada', 'caducidad de la letra'] },
      { termino: 'Acción cambiaria directa', definicion: 'La que tiene el portador contra el aceptante y su aval. No requiere protesto y prescribe en un año desde el vencimiento.', fuente: 'Arts. 79, 80 y 98 Ley 18.092', seccion: 'acciones', alias: ['accion directa'] },
      { termino: 'Acción de regreso', definicion: 'La que tiene el portador contra el librador, los endosantes y sus avales, solidariamente. Requiere protesto oportuno (salvo cláusula «sin protesto») y prescribe en un año desde el vencimiento.', fuente: 'Arts. 79 y 80 Ley 18.092', seccion: 'acciones' },
      { termino: 'Acción de reembolso', definicion: 'La que tiene el obligado de regreso que pagó, contra los obligados anteriores. Prescribe en seis meses desde el pago.', fuente: 'Art. 99 Ley 18.092; apuntes', seccion: 'acciones' },
      { termino: 'Retiro de la aceptación', definicion: 'Facultad del librado de borrar o tachar su aceptación antes de restituir la letra, agregando «retiro mi aceptación» y firmando de nuevo; se considera que la aceptación se negó.', fuente: 'Art. 44 Ley 18.092; Sandoval', seccion: 'sandoval-forma', alias: ['retiro mi aceptacion'] },
      { termino: 'Solidaridad cambiaria', definicion: 'Responsabilidad solidaria por el total que la ley impone a libradores, aceptantes y endosantes de la letra. A diferencia de la civil, los endosantes actúan más bien como fiadores solidarios con reembolso contra los obligados anteriores.', fuente: 'Arts. 79 y 82 Ley 18.092; Sandoval', seccion: 'sandoval-forma' },
      { termino: 'Protesto bancario', definicion: 'Protesto por falta de pago que hace un banco o financiera que tiene la letra como beneficiario o endosatario, salvo instrucción en contrario del portador, con aviso previo de al menos 10 días al aceptante y registros públicos. No es protesto personal para ejecutar.', fuente: 'Art. 71 Ley 18.092; Sandoval', seccion: 'sandoval-protesto', alias: ['protesto por banco'] },
      { termino: 'Registro de Protestos', definicion: 'Registro que debe llevar todo funcionario que protesta letras, con los protestos realizados día a día, numerados y con sus datos principales.', fuente: 'Art. 63 Ley 18.092; Sandoval', seccion: 'sandoval-protesto' },
      { termino: 'Declaración de extravío', definicion: 'Procedimiento judicial ante el juez civil del domicilio del portador, con traslado a los obligados y aviso en el Diario Oficial, cuya resolución reemplaza a la letra perdida para requerir la aceptación o el pago.', fuente: 'Arts. 88 a 96 Ley 18.092; Sandoval', seccion: 'sandoval-protesto', alias: ['extravio', 'extravio de la letra'] },
      { termino: 'Acción extracambiaria', definicion: 'Acción que nace de la relación subyacente a la letra, no del título; se rige por el derecho común y puede ser ejecutiva u ordinaria.', fuente: 'Sandoval, tomo II, § 131', seccion: 'sandoval-protesto', alias: ['acciones extracambiarias'] },
      { termino: 'Tacha de falsedad', definicion: 'Alegación de que la firma puesta en una letra o pagaré es falsa. Si resulta auténtica, quien la tachó incurre en el delito del art. 110 de la Ley 18.092 (penas del art. 467 CP), salvo justa causa de error o título falso.', fuente: 'Art. 110 Ley 18.092; Sandoval', seccion: 'sandoval-protesto', alias: ['tacha de falsedad de firma'] }
    ],

    secciones: [
      {
        id: 'antecedentes', titulo: '1. Antecedentes: del contrato de cambio a la letra abstracta',
        html: `
<p>La letra de cambio es el título-valor histórico por excelencia. Chile no tiene una ley general de títulos de crédito: la <b>Ley 18.092</b> (letra de cambio y pagaré) funciona como estatuto supletorio, y la <b>Ley 18.552</b> extendió sus reglas a otros documentos a la orden.</p>
<div class="flow"><div class="node">1. Función probatoria<small>carta que prueba un contrato de cambio</small></div><div class="arrow">→</div><div class="node">2. Medio de crédito<small>cláusula a la orden, endoso, descuento</small></div><div class="arrow">→</div><div class="node hot">3. Autonomía y abstracción<small>escuela alemana (Einert)</small></div></div>
<h3>El contrato de cambio</h3>
<div class="cita">«[…] una convención por la cual una de las partes se obliga, mediante un valor prometido o entregado, a pagar o hacer pagar a la otra parte o a su cesionario legal cierta cantidad de dinero en un lugar distinto de aquel en que se celebra la convención.»<span class="fuente">Art. 620 CCom, según los apuntes</span></div>
<ul>
  <li>Estaba regulado en los arts. 620 a 781 CCom; tras la Ley 18.092 (1981) subsiste solo en los <b>arts. 620 a 622</b>. No tiene que ver con el mercado de divisas.</li>
  <li>Es consensual, bilateral, oneroso y conmutativo: cambia dinero presente por dinero ausente.</li>
  <li>Servía para <b>eludir la prohibición de la usura</b>: la ganancia se presentaba como prima por el cambio de plaza. De ahí el <b>cambio húmedo</b> (traslado real) y el <b>cambio seco</b> (préstamo encubierto con un librado ficticio).</li>
  <li>Intervinientes: el <b>viajero</b> que entrega el dinero (A), el <b>cambista</b> que se obliga a hacer pagar (B) y el <b>corresponsal</b> en la otra ciudad (C), que no participa del contrato.</li>
</ul>
<h3>De mandato a título abstracto</h3>
<p>El derogado <b>art. 632 CCom</b> definía la letra como un <b>mandato escrito</b> del librador al librado. Descansaba en tres supuestos: mandato, <i>distancia loci</i> y traslado del dinero. Como mandatario, el librado podía negarse a pagar por <b>falta de provisión de fondos</b>, dejando al beneficiario desprotegido (el hijo que va a comprar pan sin monedas).</p>
<div class="callout"><p>El <b>DL 777 de 1925</b> independizó la letra del contrato de cambio: suprimió la <i>distancia loci</i> y las defensas del mandato. Hoy el librado que acepta se obliga en forma pura y simple, sin poder alegar falta de provisión.</p></div>`
      },
      {
        id: 'concepto', titulo: '2. Concepto, características y sujetos',
        html: `
<p>La Ley 18.092 <b>no define</b> la letra: su art. 1° solo enumera sus menciones.</p>
<div class="cita">«Un documento incausado, propio del comercio humano, que reemplaza al dinero y en virtud del cual su portador tiene derecho a exigir del ejecutado el pago de la suma de dinero que ella consigna.»<span class="fuente">Corte de Apelaciones de Santiago, 25 de noviembre de 1983, citada en los apuntes</span></div>
<table class="tabla">
<tr><th>Característica</th><th>Qué significa</th></tr>
<tr><td><b>Abstracta</b></td><td>Se desvincula del negocio de origen. Por el <span class="norma">art. 12</span>, girarla o aceptarla <b>no nova</b> la obligación original: coexisten la acción cambiaria y la causal (sin poder cobrar dos veces).</td></tr>
<tr><td><b>Formal</b></td><td>Si falta una mención esencial del art. 1°, el documento <b>no vale como letra</b> (<span class="norma">art. 2°</span>); se convierte en un instrumento privado común.</td></tr>
<tr><td><b>Título de pago</b></td><td>Cumple un rol análogo a la moneda, sin curso forzoso.</td></tr>
<tr><td><b>Normalmente a la orden</b></td><td>Circula por endoso, salvo la cláusula «no endosable».</td></tr>
<tr><td><b>Actos unilaterales, independientes y abstractos</b></td><td>Cada firma obliga por sí sola; independencia de las firmas (<span class="norma">art. 7°</span>); inoponibilidad de excepciones personales (<span class="norma">art. 28</span>); todos los firmantes responden <b>solidariamente</b> (<span class="norma">art. 79</span>).</td></tr>
</table>
<div class="grid">
  <div class="card"><div class="kicker">Librador o girador</div><p>Crea la letra y firma la orden. Garantiza aceptación y pago.</p></div>
  <div class="card"><div class="kicker">Librado o girado</div><p>Destinatario de la orden. Sin obligación mientras no acepte.</p></div>
  <div class="card"><div class="kicker">Tomador o beneficiario</div><p>Acreedor original, a cuya orden se paga.</p></div>
</div>
<p class="small">«Lo que no está en el título no existe»: un acuerdo verbal para postergar el cobro no es oponible al endosatario de buena fe.</p>`
      },
      {
        id: 'giro', titulo: '3. El giro: menciones, modificaciones y obligaciones del librador',
        html: `
<p>Las tres posiciones pueden concentrarse: girar <b>a cargo del propio librador</b> (librador = librado, art. 3°; equivale a un pagaré), girar <b>a la orden del propio librador</b> (librador = beneficiario) o girar contra <b>varios librados</b> (art. 4°: todos son librados, salvo que se fije un orden).</p>
<h3>Menciones esenciales (art. 1°)</h3>
<ol>
  <li>La <b>indicación de ser letra de cambio</b>, en el idioma del título.</li>
  <li>El <b>lugar y fecha</b> de emisión. La fecha es esencial; si falta el lugar, se entiende girada en el domicilio del librador.</li>
  <li>La <b>orden no sujeta a condición</b> de pagar una cantidad determinada o determinable de dinero. Si el monto difiere entre palabras y cifras, <b>valen las palabras</b> (<span class="norma">art. 6°</span>).</li>
  <li>El <b>nombre del beneficiario</b>.</li>
  <li>El <b>nombre, apellido y domicilio del librado</b>.</li>
  <li>El lugar y la época de pago (de la naturaleza: ver abajo).</li>
  <li>La <b>firma del librador</b>. Debe ser física: en materia cambiaria no rige la equivalencia funcional («somos antediluvianos»). Se admite la huella digital ante notario u oficial del Registro Civil (<span class="norma">art. 9°</span>). Quien firma como representante sin poder se obliga personalmente (<span class="norma">art. 8°</span>).</li>
</ol>
<h3>Menciones de la naturaleza (la ley suple el silencio)</h3>
<table class="tabla">
<tr><th>Mención</th><th>Si se omite</th></tr>
<tr><td>Lugar de emisión</td><td>Domicilio del librador. Importa por <i>locus regit actum</i> (arts. 16 y 17 CC).</td></tr>
<tr><td>Lugar de pago</td><td>Domicilio del librado (lógica del art. 1588 CC). El lugar de pago se <b>indica</b>, no se estipula: el giro es unilateral.</td></tr>
<tr><td>Vencimiento</td><td>Se entiende <b>a la vista</b>.</td></tr>
</table>
<div class="callout"><p><b>Art. 48: cuatro formas de vencimiento.</b> (1) A la vista; (2) a un plazo desde la vista (se cuenta desde la aceptación); (3) a un plazo desde el giro; (4) a día fijo. No se admiten vencimientos sucesivos o cuotas en una misma letra.</p></div>
<h3>Letra en blanco (art. 11)</h3>
<p>Cualquier tenedor legítimo puede completar las menciones faltantes antes del cobro, según las instrucciones de los obligados. Si se llena contra ellas, el obligado puede eximirse <b>probándolo</b>, pero esa defensa <b>no es oponible al tenedor de buena fe</b>. Ejemplo de clase: el pagaré en blanco que exige una clínica. El art. 17 B LPDC prohíbe mandatos de llenado indeterminados en el consumo.</p>
<h3>Menciones accidentales (art. 13)</h3>
<ul>
  <li><b>Comuna</b> del lugar de pago: permite el pago por consignación en la tesorería comunal (art. 70).</li>
  <li><b>Reajustabilidad</b> (por ejemplo, expresar el monto en UF). Los bancos solo usan los sistemas autorizados por el Banco Central; los particulares tienen libertad.</li>
  <li><b>Intereses</b>: corren desde la emisión. En la letra son <b>accidentales</b> (al revés que en la operación de crédito de dinero) y respetan la TMC.</li>
  <li><b>«Devuelta sin gastos» o «sin obligación de protesto»</b>: libera de protestar (art. 74).</li>
  <li>Otras menciones, siempre que <b>no alteren la esencia</b> (una condición en la orden de pago la destruye).</li>
</ul>
<p class="small">El impuesto de timbres y estampillas no es mención, pero sin él el notario no autoriza firmas y la letra pierde mérito ejecutivo.</p>
<h3>Modificación vs. adulteración</h3>
<div class="grid dos">
  <div class="card"><b>Modificación (art. 16)</b><p>Cambio visible. Antes de circular, el librador puede modificar libremente. Después, solo obliga a quienes firman con posterioridad o la consienten con una nueva firma.</p></div>
  <div class="card"><b>Adulteración (art. 15)</b><p>Cambio oculto (la goma azul que raspa el papel). Los firmantes <b>anteriores</b> se obligan según el <b>texto original</b>; los <b>posteriores</b>, según el <b>nuevo</b>.</p></div>
</div>
<h3>Obligaciones del librador (art. 10)</h3>
<p>Garantiza la <b>aceptación</b> y el <b>pago</b>. Puede eximirse de la garantía de aceptación, pero <b>toda cláusula que lo exima o limite su responsabilidad por el pago se tiene por no escrita</b>.</p>`
      },
      {
        id: 'endoso', titulo: '4. El endoso',
        html: `
<div class="cita">«El endoso es el escrito por el cual el tenedor legítimo transfiere el dominio de la letra, la entrega en cobro o la constituye en prenda.»<span class="fuente">Art. 17 Ley 18.092</span></div>
<p>Supera las trabas de la cesión de créditos: no requiere notificar al deudor. La Ley 18.552 extendió sus reglas a todos los títulos a la orden (cheque, pagaré, vale vista). Se puede endosar desde que la letra existe (firma del librador), antes o después de la aceptación.</p>
<table class="tabla">
<tr><th></th><th>Traslaticio</th><th>En cobro</th><th>En garantía</th></tr>
<tr><td>Efecto</td><td>Transfiere el dominio (título y modo).</td><td>Mandato de cobro (art. 29), con todas las facultades del mandatario judicial.</td><td>Prenda sobre la letra (art. 30).</td></tr>
<tr><td>Cláusula</td><td>Se presume si no se expresa otra calidad (art. 21).</td><td>«Valor en cobro», «en cobranza».</td><td>«Valor en prenda», «en garantía».</td></tr>
<tr><td>¿Puede volver a endosar?</td><td>Sí, en cualquier forma.</td><td>Solo en cobro.</td><td>Solo en cobro (no hay «prenda sobre prenda»).</td></tr>
<tr><td>¿Purga excepciones? (art. 28)</td><td>Sí.</td><td><b>No</b>: el deudor le opone las excepciones que tenía contra el endosante.</td><td>Sí.</td></tr>
<tr><td>Garantía del endosante</td><td>Aceptación y pago, solidariamente (art. 25).</td><td>No aplica.</td><td>Salvo pacto, no responde de aceptación ni pago.</td></tr>
</table>
<h3>Requisitos</h3>
<ul>
  <li><b>De forma:</b> firma del endosante al <b>dorso</b> de la letra o en una hoja de prolongación. En el anverso no es endoso.</li>
  <li><b>Puro y simple</b> (art. 19): la <b>condición se tiene por no escrita</b> y el endoso vale. Un <b>plazo</b> no tiene esa regla: la posición conservadora sostiene que vicia el endoso.</li>
  <li><b>Total</b> (art. 19): el <b>endoso parcial no produce efecto alguno</b> (no se puede partir un billete).</li>
  <li>El endoso <b>al portador</b> vale como endoso en blanco.</li>
</ul>
<h3>Endoso en blanco (arts. 23 y 24)</h3>
<p>Sin nombre del endosatario, o solo la firma. Permite llenarlo, transferir por la sola entrega o endosar en cobro o en prenda. La presunción de endoso traslaticio solo opera si quien firma es dueño: si un endosatario en garantía o en cobro endosa en blanco, vale como <b>endoso en cobro</b>.</p>
<h3>Limitaciones de responsabilidad</h3>
<table class="tabla">
<tr><th>Cláusula</th><th>Efecto</th></tr>
<tr><td>«Sin responsabilidad» (endosante)</td><td>Libera al endosante de la garantía de aceptación y pago frente a todos los portadores posteriores. El librador nunca puede eximirse del pago.</td></tr>
<tr><td>«No endosable» puesta por un <b>endosante</b> (art. 25)</td><td>La letra sigue circulando, pero ese endosante solo responde ante su endosatario directo.</td></tr>
<tr><td>«No endosable» puesta por el <b>librador</b> (art. 18)</td><td>La letra se vuelve <b>nominativa</b>: solo se transfiere o prenda como crédito nominativo (cesión con notificación). Sí puede endosarse en cobro. Un endoso que debiera ser traslaticio se convierte por ley en endoso en cobro.</td></tr>
<tr><td>Endoso de letra vencida o protestada (art. 32)</td><td>Solo vale como <b>cesión ordinaria</b>.</td></tr>
</table>
<h3>Portador legítimo y deber del que paga</h3>
<ul>
  <li><span class="norma">Art. 26</span>: es portador legítimo quien justifica su derecho por una <b>serie no interrumpida de endosos</b>, aunque el último esté en blanco. Los endosos tachados se tienen por no escritos.</li>
  <li><span class="norma">Art. 31</span>: el que paga <b>no debe verificar la autenticidad</b> de los endosos, pero sí la <b>identidad</b> de quien cobra y la <b>continuidad</b> de los endosos; si no, responde si paga a un portador ilegítimo.</li>
  <li><span class="norma">Art. 57</span>: no puede prohibirse ni trabarse el pago o la circulación de la letra por resolución judicial, salvo la liquidación concursal del portador u otro hecho que lo prive de la administración de sus bienes, el extravío, o el embargo del crédito junto con la aprehensión del documento.</li>
</ul>
<div class="callout red"><p><b>Caso Inverlink (2003), pregunta de examen.</b> Funcionarios de la Corfo, coludidos con Inverlink, endosaron depósitos a plazo de la Corfo, que luego circularon por endosos traslaticios a terceros. El presidente Lagos dijo que podían perseguirse «en manos de quien estuvieran» (el jarrón de la abuela) y hubo pánico. Por el <b>art. 28</b> (y la Ley 18.552), la inoponibilidad de excepciones protegió a los adquirentes de buena fe; el Estado solo pudo demandar perjuicios a quienes actuaron de mala fe.</p></div>
<p class="small">Según Sandoval, frente al endosatario sí pueden oponerse: irregularidades formales del documento, falsedad, excepciones de la relación directa entre demandante y demandado, y modos de extinguir que consten en esa relación o en la misma letra.</p>`
      },
      {
        id: 'aceptacion-aval', titulo: '5. Aceptación y aval',
        html: `
<h3>La aceptación</h3>
<p>Acto unilateral por el que el librado asume la obligación de pagar. Antes de aceptar, el único obligado es el librador.</p>
<ul>
  <li><b>Forma (art. 33):</b> en la letra, con «acepto», «aceptada» u otra expresión y la firma del librado. <b>Su sola firma en el anverso es aceptación.</b></li>
  <li><b>Fecha (art. 36):</b> solo es obligatoria en las letras a un plazo desde la vista (o si debe presentarse a la aceptación en un plazo). Si falta, hay protesto por falta de fecha.</li>
  <li><b>Pura y simple (art. 42):</b> el librado puede <b>restringirla a una parte</b> de la suma. Cualquier otra reserva o condición <b>equivale a un rechazo</b>, aunque el aceptante queda obligado en los términos de su aceptación.</li>
  <li>Si el librado no acepta, opera la <b>garantía de aceptación</b> del librador.</li>
  <li><b>Presentación:</b> facultativa, entre la emisión y el vencimiento (incluso después). Es obligatoria en la letra a plazo desde la vista. El librado puede pedir que se le presente de nuevo al día hábil siguiente; se requiere en su domicilio entre las 9 y las 18 horas.</li>
</ul>
<h3>El aval</h3>
<div class="cita">«El aval es un acto escrito y firmado en la letra de cambio, en una hoja de prolongación adherida a ésta, o en un documento separado, por el cual el girador, un endosante o un tercero garantiza, en todo o en parte, el pago de ella.»<span class="fuente">Art. 46 Ley 18.092</span></div>
<p>Se le llama «fianza cambiaria», pero a diferencia de la fianza civil (accesoria y causada) es <b>unilateral, autónomo e incausado</b>.</p>
<table class="tabla">
<tr><th>Dónde</th><th>Requisito</th></tr>
<tr><td>Anverso</td><td>La <b>sola firma</b> de alguien que no sea el librador ni el librado es aval.</td></tr>
<tr><td>Dorso</td><td>Firma más la expresión <b>«por aval»</b>. Sin ella, la firma se lee como endoso.</td></tr>
<tr><td>Documento separado</td><td>Expresar que es aval e identificar la letra. Los derechos de este aval <b>no se transfieren por endoso</b>.</td></tr>
</table>
<div class="callout"><p><b>Art. 47:</b> sin limitaciones, el avalista responde <b>en los mismos términos que el aceptante</b>. Puede limitar su aval a <b>tiempo, caso, cantidad o persona determinada</b> (por ejemplo, «aval hasta $500.000» o «solo si Y no paga»).</p></div>
<p class="small">También pueden constituirse prendas o hipotecas para garantizar una letra. Como la hipoteca consta en escritura pública separada, el endoso no la transfiere: se requiere la cesión de créditos (art. 1906 CC).</p>`
      },
      {
        id: 'pago-protesto', titulo: '6. Pago, protesto y extravío',
        html: `
<h3>Época del pago</h3>
<ul>
  <li><b>A la vista:</b> vence al presentarse; plazo máximo de presentación de <b>un año</b> desde el giro (art. 49).</li>
  <li><b>A un plazo desde la vista:</b> desde la aceptación, que debe fecharse (art. 50).</li>
  <li><b>Desde el giro</b> o <b>a día fijo</b>. Si vence en día inhábil, pasa al hábil siguiente (art. 51).</li>
</ul>
<table class="tabla">
<tr><th>Tema</th><th>Regla</th></tr>
<tr><td>Pago anticipado (art. 55)</td><td>Se rige por las normas de las operaciones de crédito de dinero vigentes al emitir la letra (art. 10 Ley 18.010). Quien paga antes responde de la validez del pago (art. 56): «quien paga mal, paga dos veces».</td></tr>
<tr><td>Pagos parciales (art. 54)</td><td>El portador no puede rehusarlos; <b>vencida la letra</b>, puede rechazarlos si son <b>inferiores a la mitad</b>. El pago parcial beneficia a los demás obligados. Se anota en la letra, con recibo, y puede protestarse por el saldo.</td></tr>
<tr><td>Derechos del que paga (arts. 54, 85 y 86)</td><td>Si paga todo, exige la letra con constancia de pago y recibo. Si paga parte, constancia en la letra y <b>copia autorizada</b>, que sirve para sus acciones cambiarias.</td></tr>
<tr><td>Consignación (art. 70)</td><td>Si el acreedor no aparece, el deudor deposita en la <b>tesorería de la comuna de pago</b>. Antes de protestar, el ministro de fe verifica ese depósito; si alcanza, no hay protesto.</td></tr>
</table>
<h3>El protesto</h3>
<p>Acto formal e <b>insustituible</b> (art. 76) por el que un ministro de fe deja constancia de que no hubo:</p>
<div class="grid">
  <div class="card"><b>Aceptación</b><p class="small">El librado se niega a aceptar.</p></div>
  <div class="card"><b>Fecha de la aceptación</b><p class="small">Solo en letras a plazo desde la vista: la fecha del protesto fija el inicio del plazo.</p></div>
  <div class="card"><b>Pago</b><p class="small">Al vencimiento no se paga.</p></div>
</div>
<ul>
  <li><b>Protesto notarial:</b> aviso al librado citándolo al día hábil siguiente (arts. 61 y 69); si no comparece o se niega, se protesta. Se estampa al dorso o en una hoja de prolongación con las menciones del art. 62. Los protestos se informan para su publicación en el Boletín Comercial.</li>
  <li><b>Protesto bancario (art. 71):</b> si la letra la tiene un banco, este mismo protesta por falta de pago, con aviso al aceptante al menos 10 días antes del vencimiento y un registro público.</li>
  <li><b>Nulidad (art. 77):</b> el tribunal puede desecharla si el vicio no causó un perjuicio efectivo.</li>
</ul>
<div class="callout red"><p><b>Perjuicio de la letra (art. 79):</b> si no se protesta en tiempo y forma por falta de pago, <b>caducan las acciones contra el librador, los endosantes y sus avales</b>. El <b>aceptante y su aval nunca se liberan</b>. No hay caducidad si el librado o aceptante quebró antes del vencimiento o si la letra tiene la cláusula <b>«devuelta sin gastos» o «sin protesto»</b>, que es la práctica estándar. Esa cláusula no evita el protesto por falta de fecha.</p></div>
<h3>Extravío (arts. 88 y ss.)</h3>
<p>Procedimiento judicial no contencioso, con avisos, para que una <b>resolución reemplace</b> a la letra perdida o destruida (art. 92). Los obligados conservan las excepciones que podían oponer respecto del documento original.</p>`
      },
      {
        id: 'acciones', titulo: '7. Acciones cambiarias y prescripción',
        html: `
<table class="tabla">
<tr><th></th><th>Acción directa</th><th>Acción de regreso</th><th>Acción de reembolso</th></tr>
<tr><td>Quién</td><td>El portador legítimo (incluso endosatario en cobro o garantía) o el tercero que pagó.</td><td>El portador, si el deudor principal no paga.</td><td>El obligado de regreso que pagó (endosante, avalista).</td></tr>
<tr><td>Contra quién</td><td>El <b>aceptante</b> y su aval.</td><td>El <b>librador</b>, los <b>endosantes</b> y sus avales, solidariamente y sin orden.</td><td>Solo los obligados <b>anteriores</b> en la cadena, nunca los posteriores.</td></tr>
<tr><td>Qué cobra</td><td>Capital, reajustes e intereses pactados, más intereses corrientes desde el vencimiento.</td><td>Lo mismo.</td><td>Lo pagado, más reajustes, intereses y costas.</td></tr>
<tr><td>¿Requiere protesto?</td><td><b>No.</b></td><td><b>Sí</b>, salvo cláusula «sin protesto».</td><td>—</td></tr>
<tr><td>Prescripción</td><td><b>1 año</b> desde el vencimiento (art. 98).</td><td><b>1 año</b> desde el vencimiento.</td><td><b>6 meses</b> desde el pago (art. 99); cada pago abre un nuevo plazo.</td></tr>
</table>
<p>Si paga el aceptante o el librador, la cadena cambiaria se extingue.</p>
<div class="callout yellow"><p><b>Art. 100:</b> a diferencia del art. 2519 CC, la prescripción se interrumpe <b>solo respecto del obligado a quien se notifica</b> la demanda o gestión. Si solo se demanda al aceptante, la acción contra los demás sigue corriendo.</p></div>
<h3>Mérito ejecutivo (art. 434 N°4 CPC)</h3>
<ol>
  <li><b>Protesto personal</b> al aceptante, si no alega en ese acto la falsedad de su firma.</li>
  <li><b>Notificación judicial del protesto</b> como gestión preparatoria (necesaria contra los obligados de regreso).</li>
  <li><b>Firma autorizada ante notario.</b></li>
</ol>
<p class="small">Sin el pago del impuesto de timbres y estampillas (art. 26 DL 3.475), la letra conserva su validez pero pierde el mérito ejecutivo: hay que ir a juicio ordinario.</p>`
      },
      {
        id: 'sandoval-forma', titulo: '8. Profundización (Sandoval): forma, aceptación y solidaridad',
        html: `
<div class="callout green"><p><b>Fuente de esta sección:</b> Sandoval, <i>Derecho Comercial</i>, tomo II (5ª ed., 2005), cap. II. Complementa las secciones 3 a 5.</p></div>
<h3>La letra sin una mención esencial: ¿nula o convertida?</h3>
<p>El <span class="norma">art. 2° Ley 18.092</span> dice que el documento sin las menciones del art. 1° «no valdrá como letra de cambio». El derogado art. 641 CCom era distinto: la letra defectuosa valía como <b>simple pagaré</b> del librador.</p>
<div class="grid dos">
  <div class="card"><b>Tesis de Sandoval (y C. de Talca, 1988)</b><p>No es <b>nula</b>: se convierte en otro acto, un <b>instrumento privado</b> que prueba una deuda. Puede servir para preparar la vía ejecutiva (confesión de deuda o reconocimiento de firma), pero sin necesariedad, literalidad, autonomía, abstracción ni acciones cambiarias.</p></div>
  <div class="card"><b>Caso de la firma equivocada (CS, 1998)</b><p>Un documento cuya única firma era la del <b>librado</b> (no la del librador) no vale como letra. Darle mérito ejecutivo como letra infringe los arts. 434 y 435 CPC.</p></div>
</div>
<ul>
  <li><b>Ejemplares:</b> la Ley 18.092 no regula la emisión en varios ejemplares (resabio del contrato de cambio). Nada impide pactarla como mención facultativa, indicando que los segundos solo valen si no se pagó el primero.</li>
</ul>
<h3>Aceptación: retiro y negativa</h3>
<div class="grid dos">
  <div class="card"><b>Retiro de la aceptación (art. 44)</b><p>Las declaraciones cambiarias son irrevocables, pero la ley permite al librado <b>borrar o tachar</b> su aceptación <b>antes de restituir la letra</b>, agregando «retiro mi aceptación» y firmando de nuevo. Se entiende que la aceptación se negó.</p></div>
  <div class="card"><b>Negativa a aceptar</b><p>El librado que no acepta <b>no responde</b> ante el portador: no tiene relación con él. Responde el <b>librador</b>, que garantizó la aceptación, y los endosantes traslaticios, siempre que se proteste la letra por falta de aceptación.</p></div>
</div>
<h3>Solidaridad cambiaria (art. 79)</h3>
<p>La ley hace solidariamente responsables del total a quienes firman como libradores, aceptantes o endosantes. Pero no es la solidaridad del Código Civil:</p>
<table class="tabla">
<tr><th>Solidaridad civil</th><th>Solidaridad cambiaria</th></tr>
<tr><td>Los codeudores comparten una deuda común; cada uno tiene su parte, aunque se le pueda cobrar el total.</td><td>Los endosantes no son codeudores, sino más bien <b>fiadores solidarios</b>: responden si no paga el deudor principal y, si pagan, tienen reembolso contra él.</td></tr>
</table>
<ul>
  <li>El endosante que paga solo tiene reembolso contra el librador, el aceptante, los <b>endosantes anteriores</b> y sus avalistas (art. 82 inc. 2°): son ellos quienes le garantizaron el pago.</li>
  <li>El librador o el aceptante que pagan <b>no tienen reembolso</b> entre sí ni contra los demás firmantes (art. 82).</li>
  <li>Solo el endoso <b>traslaticio</b> genera la solidaridad del endosante (art. 25), que puede excluirla en el mismo endoso.</li>
  <li>La solidaridad del librador y de los endosantes depende del <b>protesto oportuno</b>; si no, la letra se perjudica.</li>
  <li><b>Pago por un extraño:</b> cualquier tercero puede pagar (art. 1572 CC) y se <b>subroga</b> en los derechos del portador, que debe anotar en la letra el nombre de quien pagó.</li>
</ul>`
      },
      {
        id: 'sandoval-protesto', titulo: '9. Profundización (Sandoval): protesto, extravío, prescripción y tacha',
        html: `
<div class="callout green"><p><b>Fuente de esta sección:</b> Sandoval, tomo II, cap. II, §§ 113-148. Complementa las secciones 6 y 7.</p></div>
<div class="callout yellow"><p><b>Terminología:</b> Sandoval (ed. 2005) habla de «quiebra» del portador o del librado. El apunte de Gaspar usa «liquidación concursal». Se refieren a la misma hipótesis de los arts. 57 y 79.</p></div>
<h3>El protesto notarial paso a paso</h3>
<div class="flow"><div class="node">Notario competente<small>u oficial del Registro Civil donde no hay notario (art. 60)</small></div><div class="arrow">→</div><div class="node">Aviso<small>cita al librado al día hábil siguiente que no sea sábado</small></div><div class="arrow">→</div><div class="node">Verifica la Tesorería<small>si hay depósito suficiente, no hay protesto (art. 70)</small></div><div class="arrow">→</div><div class="node">Requerimiento y acta<small>se anota la respuesta</small></div><div class="arrow">→</div><div class="node y">Registro de Protestos<small>art. 63</small></div></div>
<ul>
  <li><b>Competencia:</b> el protesto por falta de aceptación o de fecha se hace ante el funcionario del lugar donde debe aceptarse (art. 65); el de pago, del lugar de pago (art. 68).</li>
  <li>El notario puede delegar la entrega del aviso en un empleado, con autorización de la Corte de Apelaciones.</li>
  <li>Si el depósito en Tesorería no alcanza, se protesta por el saldo. El funcionario retira el depósito y lo entrega al portador.</li>
  <li>Hecho el protesto, debe devolver la letra a más tardar el día hábil siguiente que no sea sábado, y responde de los perjuicios por demora, irregularidades o extravío.</li>
</ul>
<h3>El protesto por bancos o financieras (art. 71)</h3>
<div class="grid dos">
  <div class="card"><b>Requisitos copulativos</b><ol><li>Que el banco no reciba <b>instrucciones en contrario</b> del portador (por ejemplo, que proteste un notario).</li><li>Que el banco tenga la letra en su poder como <b>beneficiario o endosatario</b> (cualquier endoso).</li></ol></div>
  <div class="card"><b>Formalidades</b><p>Aviso escrito al aceptante con al menos <b>10 días</b> de anticipación al vencimiento; registro diario de avisos; certificación de la falta de pago al dorso; Registro de Letras Protestadas. Los registros son públicos y se presumen verídicos (presunción simplemente legal).</p></div>
</div>
<p><b>Ineficacia:</b> el protesto bancario no produce efecto si se omite el aviso, el número, la fecha o la firma del representante. Y, según Sandoval, <b>no es un protesto personal</b> para el art. 434 N° 4 CPC: para ejecutar hay que notificar judicialmente el protesto.</p>
<h3>Extravío de la letra (arts. 88 a 96)</h3>
<ol>
  <li>Solicitud ante el <b>juez civil del domicilio del peticionario</b>, identificando la letra.</li>
  <li>Traslado de <b>5 días hábiles</b> a los obligados y al librado, y aviso en el Diario Oficial (días 1 o 15) para que los interesados comparezcan dentro de <b>30 días</b>.</li>
  <li>Sin oposición, el juez autoriza a requerir la aceptación o el pago y puede exigir <b>garantía de resultas</b>. Con oposición, se tramita como <b>incidente</b>.</li>
  <li>En cualquier momento puede pedirse la <b>suspensión provisional</b> de la aceptación o el pago.</li>
  <li>Una <b>copia autorizada de la resolución reemplaza la letra</b>; los obligados conservan sus excepciones. Los plazos que vencían durante el procedimiento se prorrogan hasta el tercer día hábil después de ejecutoriada.</li>
  <li>Solo procede <b>apelación en ambos efectos</b>. La aceptación o el pago autorizados producen los mismos efectos que el ejemplar auténtico (art. 96). También se aplica a la destrucción parcial.</li>
</ol>
<h3>Acciones y prescripción</h3>
<ul>
  <li><b>Cambiarias y extracambiarias:</b> las cambiarias nacen de la letra (directa, de regreso y de reembolso). Las extracambiarias nacen de la <b>relación subyacente</b>, se rigen por el derecho común y pueden ser ejecutivas u ordinarias.</li>
  <li><b>Interrupción (art. 100):</b> solo respecto del obligado a quien se notifica la demanda o la gestión necesaria para demandar o preparar la ejecución; también con la notificación de la solicitud de extravío, y por el <b>reconocimiento</b> expreso o tácito del obligado (interrupción natural, art. 2518 CC). Una sentencia citada por Sandoval (C. de San Miguel, 1997) exige la <b>notificación</b>, no la mera presentación de la demanda.</li>
</ul>
<h3>Tacha de falsedad de la firma (art. 110)</h3>
<p>Para frenar a deudores que negaban su propia firma y obligaban a ir a juicio ordinario, la ley sanciona con las penas del <b>art. 467 del Código Penal</b> a quien, en el protesto o en la gestión preparatoria, tacha de falsa su firma y esta resulta auténtica, salvo justa causa de error o que el título sea falso.</p>
<ul>
  <li>La tacha se tramita como <b>incidente</b>; el demandante debe probar que la firma es auténtica (por ejemplo, con peritaje caligráfico). La Corte Suprema (1984) admitió también la confesión judicial.</li>
  <li>Si se acredita, el documento es título ejecutivo. Las apelaciones se conceden en el solo efecto devolutivo.</li>
</ul>`
      }
    ],

    interactivos: [
      {
        id: 'cadena', titulo: '¿A quién puede cobrarle W? La cadena de endosos de clase', seccion: 'endoso',
        descripcion: 'Beneficiario → H (endoso normal) → Z (H endosa «sin responsabilidad») → M (Z endosa con «no endosable») → W (M endosa normal). El aceptante no paga y la letra tiene cláusula «sin protesto». Toca a cada persona.',
        montar: function (el) {
          var personas = [
            ['Aceptante', true, 'Sí: acción directa contra el principal obligado.'],
            ['Librador', true, 'Sí: garantiza el pago y nunca puede eximirse (art. 10).'],
            ['Beneficiario', true, 'Sí: hizo un endoso traslaticio ordinario y responde solidariamente (art. 25).'],
            ['H', false, 'No: endosó «sin responsabilidad» y se liberó frente a todos los posteriores.'],
            ['Z', false, 'No: puso «no endosable», así que solo responde ante M, su endosatario directo. Si M paga a W, M sí puede cobrarle a Z.'],
            ['M', true, 'Sí: es el endosante directo de W y no limitó su responsabilidad.']
          ];
          el.innerHTML = '<div class="opciones-chip" id="p">' + personas.map(function (p, i) { return '<button data-i="' + i + '">' + p[0] + '</button>'; }).join('') + '</div><div id="out"><p class="small">Elige a quién quiere demandar W.</p></div>';
          el.querySelectorAll('#p button').forEach(function (b) {
            b.onclick = function () {
              var p = personas[+b.dataset.i];
              el.querySelectorAll('#p button').forEach(function (x) { x.classList.toggle('activo', x === b); });
              el.querySelector('#out').innerHTML = '<div class="resultado ' + (p[1] ? 'ok' : 'mal') + '"><b>' + p[0] + ':</b> ' + p[2] + '</div>';
            };
          });
        }
      },
      {
        id: 'queendoso', titulo: '¿Qué endoso es y qué efecto tiene?', seccion: 'endoso',
        descripcion: 'Clasifica cada situación según los arts. 18, 19, 21, 24, 29, 30 y 32.',
        montar: function (el) {
          var casos = [
            ['El beneficiario firma al dorso sin decir nada más.', 'Traslaticio (en blanco)', ['Traslaticio (en blanco)', 'En cobro', 'Sin efecto'], 'Art. 21: si no expresa otra calidad, es traslaticio; sin nombre del endosatario, es en blanco (art. 23).'],
            ['El acreedor prendario (endosatario en garantía) firma al dorso, en blanco, a favor de su abogado.', 'En cobro', ['Traslaticio (en blanco)', 'En cobro', 'En garantía'], 'Nadie transfiere más de lo que tiene: el endoso del endosatario en garantía solo vale como endoso en cobro (art. 30).'],
            ['El beneficiario endosa «$500.000 a favor de Pedro» una letra de $1.000.000.', 'Sin efecto', ['Traslaticio parcial', 'Sin efecto', 'En cobro'], 'Art. 19: el endoso parcial no produce efecto alguno.'],
            ['«Endoso a mi alumno, siempre que apruebe su examen de grado».', 'Traslaticio puro y simple', ['Traslaticio puro y simple', 'Sin efecto', 'Condicional'], 'Art. 19: la condición se reputa no escrita y el endoso vale de inmediato.'],
            ['La letra dice «no endosable» (puesto por el librador) y el beneficiario endosa en silencio a M.', 'En cobro', ['Traslaticio', 'En cobro', 'Sin efecto'], 'Art. 18: la prohibición del librador impide transferir el dominio; el endoso vale como endoso en cobro.'],
            ['Se endosa una letra que ya fue protestada por falta de pago.', 'Cesión ordinaria', ['Traslaticio', 'Cesión ordinaria', 'En garantía'], 'Art. 32: solo tiene los efectos de una cesión ordinaria.']
          ];
          var i = 0, ok = 0;
          function pintar() {
            if (i >= casos.length) { el.innerHTML = '<div class="resultado ok"><b>Resultado: ' + ok + ' de ' + casos.length + '.</b> <button class="btn sec" id="re">Repetir</button></div>'; el.querySelector('#re').onclick = function () { i = 0; ok = 0; pintar(); }; return; }
            var c = casos[i];
            el.innerHTML = '<p class="small">Caso ' + (i + 1) + ' de ' + casos.length + '</p><p style="font-size:17px;font-weight:700">' + c[0] + '</p><div class="opciones-chip">' + c[2].map(function (o, k) { return '<button data-k="' + k + '">' + o + '</button>'; }).join('') + '</div><div id="fb"></div>';
            el.querySelectorAll('[data-k]').forEach(function (b) {
              b.onclick = function () {
                var bien = c[2][+b.dataset.k] === c[1]; if (bien) ok++;
                el.querySelectorAll('[data-k]').forEach(function (x) { x.disabled = true; if (c[2][+x.dataset.k] === c[1]) x.classList.add('activo'); });
                el.querySelector('#fb').innerHTML = '<div class="resultado ' + (bien ? 'ok' : 'mal') + '"><b>' + (bien ? '✓ Correcto.' : '✗ Es: ' + c[1] + '.') + '</b> ' + c[3] + '<div style="margin-top:10px"><button class="btn" id="sig">Siguiente</button></div></div>';
                el.querySelector('#sig').onclick = function () { i++; pintar(); };
              };
            });
          }
          pintar();
        }
      },
      {
        id: 'prescripcion', titulo: 'Calculadora de prescripción y perjuicio de la letra', seccion: 'acciones',
        descripcion: 'Indica el vencimiento, si hubo protesto y si alguien pagó. Muestra hasta cuándo hay acción contra cada obligado.',
        montar: function (el) {
          el.innerHTML = `<div class="fila"><div class="campo"><label>Vencimiento de la letra</label><input type="date" id="v" value="2027-09-24"></div>
            <div class="campo"><label>Un obligado de regreso pagó el…</label><input type="date" id="p" value="2028-09-24"></div></div>
            <div class="fila"><label class="check"><input type="checkbox" id="prot"> Se protestó oportunamente por falta de pago</label>
            <label class="check"><input type="checkbox" id="sin" checked> La letra tiene la cláusula «sin protesto»</label></div><div id="out"></div>`;
          function calc() {
            var v = new Date(el.querySelector('#v').value + 'T12:00:00'), p = new Date(el.querySelector('#p').value + 'T12:00:00');
            if (isNaN(v)) return;
            var regresoViva = el.querySelector('#prot').checked || el.querySelector('#sin').checked;
            var html = '<table class="tabla"><tr><th>Acción</th><th>Contra</th><th>Hasta</th></tr>' +
              '<tr><td>Directa</td><td>Aceptante y su aval</td><td><b>' + fecha(masMeses(v, 12)) + '</b> (1 año desde el vencimiento; no requiere protesto)</td></tr>' +
              '<tr><td>Regreso</td><td>Librador, endosantes y sus avales</td><td>' + (regresoViva ? '<b>' + fecha(masMeses(v, 12)) + '</b> (1 año desde el vencimiento)' : '<span class="etiqueta roja">Caducada</span> Perjuicio de la letra: no hubo protesto ni cláusula «sin protesto» (art. 79).') + '</td></tr>' +
              (isNaN(p) ? '' : '<tr><td>Reembolso</td><td>Obligados anteriores al que pagó</td><td><b>' + fecha(masMeses(p, 6)) + '</b> (6 meses desde el pago)</td></tr>') + '</table>' +
              '<p class="small">Recuerda el art. 100: la prescripción se interrumpe solo respecto del obligado a quien se notifica la demanda.</p>';
            el.querySelector('#out').innerHTML = html;
          }
          el.querySelectorAll('input').forEach(function (i) { i.oninput = calc; i.onchange = calc; }); calc();
        }
      },
      {
        id: 'valeletra', titulo: '¿Vale como letra de cambio?', seccion: 'giro',
        descripcion: 'Marca lo que contiene el documento. Revisa qué suple la ley y qué falta de forma esencial (arts. 1° y 2°).',
        montar: function (el) {
          var m = [
            ['ind', 'Dice que es «letra de cambio»', true, ''],
            ['fecha', 'Indica la fecha de emisión', true, ''],
            ['lugar', 'Indica el lugar de emisión', false, 'Si falta, se entiende girada en el domicilio del librador.'],
            ['orden', 'Contiene una orden no sujeta a condición de pagar una suma determinada o determinable', true, ''],
            ['benef', 'Indica el nombre del beneficiario', true, ''],
            ['librado', 'Indica nombre, apellido y domicilio del librado', true, ''],
            ['lpago', 'Indica el lugar de pago', false, 'Si falta, se paga en el domicilio del librado.'],
            ['venc', 'Indica el vencimiento', false, 'Si falta, es pagadera a la vista.'],
            ['firma', 'Tiene la firma física del librador', true, '']
          ];
          el.innerHTML = m.map(function (x) { return '<label class="check"><input type="checkbox" data-k="' + x[0] + '" checked> ' + x[1] + '</label>'; }).join('') + '<div id="out"></div>';
          function calc() {
            var faltan = [], suple = [];
            m.forEach(function (x) { var c = el.querySelector('[data-k="' + x[0] + '"]').checked; if (!c) { if (x[2]) faltan.push(x[1].toLowerCase()); else suple.push(x[3]); } });
            el.querySelector('#out').innerHTML = (faltan.length
              ? '<div class="resultado mal"><b>No vale como letra de cambio</b> (art. 2°). Falta: ' + faltan.join('; ') + '. Puede valer como instrumento privado común (conversión).</div>'
              : '<div class="resultado ok"><b>✓ Vale como letra de cambio.</b></div>') +
              (suple.length ? '<div class="resultado" style="margin-top:8px"><b>La ley suple:</b><ul>' + suple.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul></div>' : '') +
              '<p class="small">Además: si faltan menciones, un tenedor legítimo puede completarlas según las instrucciones recibidas (art. 11, letra en blanco).</p>';
          }
          el.querySelectorAll('input').forEach(function (i) { i.onchange = calc; }); calc();
        }
      },
      {
        id: 'protestobanco', titulo: '¿Vale el protesto hecho por el banco?', seccion: 'sandoval-protesto',
        descripcion: 'Marca lo que ocurrió y revisa si el protesto bancario del art. 71 es eficaz y si sirve para ejecutar directamente (según Sandoval).',
        montar: function (el) {
          var req = [
            ['tiene', 'El banco tiene la letra como beneficiario o endosatario', 'requisito'],
            ['instr', 'El portador NO dio instrucciones de protestar ante notario', 'requisito'],
            ['aviso', 'Se envió aviso escrito al aceptante con 10 días o más de anticipación', 'formalidad'],
            ['numero', 'La certificación lleva el número del Registro de Letras no Pagadas', 'formalidad'],
            ['fecha', 'La certificación indica fecha y lugar', 'formalidad'],
            ['firma', 'Firma el representante autorizado del banco', 'formalidad']
          ];
          el.innerHTML = req.map(function (r) { return '<label class="check" style="display:block;margin:6px 0"><input type="checkbox" data-k="' + r[0] + '" checked> ' + r[1] + '</label>'; }).join('') + '<div id="out"></div>';
          function calc() {
            var falta = req.filter(function (r) { return !el.querySelector('[data-k="' + r[0] + '"]').checked; });
            var out;
            if (!falta.length) out = '<div class="resultado ok"><b>Protesto eficaz.</b> Conserva las acciones de regreso. Pero no es un protesto personal para el art. 434 N° 4 CPC: para ejecutar hay que notificar judicialmente el protesto.</div>';
            else if (falta.some(function (r) { return r[2] === 'requisito'; })) out = '<div class="resultado mal"><b>El banco no podía protestar.</b> Faltan requisitos copulativos: ' + falta.filter(function (r) { return r[2] === 'requisito'; }).map(function (r) { return r[1].toLowerCase(); }).join('; ') + '. Debe protestar un notario.</div>';
            else out = '<div class="resultado mal"><b>Protesto sin efectos jurídicos.</b> Se omitió: ' + falta.map(function (r) { return r[1].toLowerCase(); }).join('; ') + '. Si no se protesta bien a tiempo, la letra se perjudica frente al librador, los endosantes y sus avales.</div>';
            el.querySelector('#out').innerHTML = out;
          }
          el.querySelectorAll('input').forEach(function (i) { i.onchange = calc; }); calc();
        }
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'antecedentes', enunciado: '¿Qué norma independizó la letra de cambio del contrato de cambio en Chile?', opciones: ['El DL 777 de 1925', 'La Ley 18.092 de 1981', 'La Ley 18.552', 'El art. 620 CCom'], correcta: 0, explicacion: 'Suprimió la distancia loci y las defensas del mandato, como la falta de provisión de fondos.' },
      { tipo: 'vf', seccion: 'antecedentes', enunciado: 'El librado que acepta una letra puede negarse a pagar porque el librador no le proveyó fondos.', respuesta: false, explicacion: 'Esa defensa era propia de la letra como mandato. Hoy el aceptante se obliga de forma abstracta.' },
      { tipo: 'alternativas', seccion: 'antecedentes', enunciado: '¿Qué era el «cambio seco»?', opciones: ['Un préstamo encubierto con un librado ficticio para eludir la usura', 'El traslado real de dinero entre ciudades', 'El cambio de divisas en el Banco Central', 'La letra sin aceptación'], correcta: 0, explicacion: 'El cambio húmedo era la operación real de traslado.' },
      { tipo: 'relacionar', seccion: 'antecedentes', enunciado: 'Relaciona cada interviniente del contrato de cambio con su papel.', pares: [['Viajero (A)', 'Entrega el dinero en la ciudad de origen'], ['Cambista (B)', 'Se obliga a hacer pagar en el destino'], ['Corresponsal (C)', 'Paga en el destino; no participa del contrato']], explicacion: 'De la carta del cambista al corresponsal nació la letra.' },
      { tipo: 'vf', seccion: 'concepto', enunciado: 'La Ley 18.092 contiene una definición legal de la letra de cambio.', respuesta: false, explicacion: 'Solo enumera sus menciones. La definición citada en clases es de la Corte de Apelaciones de Santiago (1983).' },
      { tipo: 'alternativas', seccion: 'concepto', enunciado: 'Según el art. 12 de la Ley 18.092, girar una letra para pagar una compraventa…', opciones: ['No nova la obligación de la compraventa: coexisten ambas acciones', 'Extingue el precio por novación', 'Obliga a cobrar las dos deudas', 'Requiere notificar al comprador'], correcta: 0, explicacion: 'El acreedor no puede cobrar dos veces, pero si la letra se perjudica conserva la acción causal.' },
      { tipo: 'alternativas', seccion: 'concepto', enunciado: '¿Qué norma establece que todos los firmantes de la letra responden solidariamente ante el portador?', opciones: ['Art. 79 Ley 18.092', 'Art. 7° Ley 18.092', 'Art. 28 Ley 18.092', 'Art. 1907 CC'], correcta: 0, explicacion: 'Libradores, aceptantes y endosantes quedan solidariamente obligados.' },
      { tipo: 'alternativas', seccion: 'giro', enunciado: 'Si el monto de la letra difiere entre lo escrito en palabras y en cifras, ¿qué vale?', opciones: ['Lo escrito en palabras', 'Lo escrito en cifras', 'El monto menor', 'La letra es nula'], correcta: 0, explicacion: 'Art. 6° Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'giro', enunciado: 'Una letra no indica el vencimiento. ¿Qué ocurre?', opciones: ['Se entiende pagadera a la vista', 'No vale como letra', 'Vence en un año desde el giro', 'Vence cuando el librado acepte'], correcta: 0, explicacion: 'Es una mención de la naturaleza que la ley suple.' },
      { tipo: 'vf', seccion: 'giro', enunciado: 'Una letra de cambio puede emitirse y firmarse válidamente por WhatsApp gracias a la equivalencia funcional.', respuesta: false, explicacion: 'En materia cambiaria la firma debe ser física; no rige la equivalencia funcional.' },
      { tipo: 'alternativas', seccion: 'giro', enunciado: '«Ordeno a Juan pagar $1.000.000 a Pedro, siempre que llueva en Talca mañana». ¿Es letra de cambio?', opciones: ['No: la orden de pago debe ser incondicional', 'Sí: la condición se tiene por no escrita', 'Sí, pero solo vale si llueve', 'Sí, como pagaré'], correcta: 0, explicacion: 'La condición en el giro destruye la esencia. En el endoso, en cambio, la condición se tiene por no escrita.' },
      { tipo: 'alternativas', seccion: 'giro', enunciado: '¿Puede el librador eximirse de responsabilidad?', opciones: ['Solo de la garantía de aceptación; la cláusula que lo exime del pago se tiene por no escrita', 'De ambas garantías', 'Solo de la garantía de pago', 'De ninguna'], correcta: 0, explicacion: 'Art. 10 Ley 18.092.' },
      { tipo: 'relacionar', seccion: 'giro', enunciado: 'Relaciona cada mención omitida con la solución legal.', pares: [['Lugar de emisión', 'Domicilio del librador'], ['Lugar de pago', 'Domicilio del librado'], ['Vencimiento', 'A la vista'], ['Firma del librador', 'No vale como letra']], explicacion: 'Las tres primeras son de la naturaleza; la firma es esencial.' },
      { tipo: 'alternativas', seccion: 'giro', enunciado: 'Alguien adultera una letra aumentando el monto. ¿Cómo responden los firmantes?', opciones: ['Los anteriores según el texto original; los posteriores según el nuevo', 'Todos según el texto nuevo', 'Todos según el original', 'La letra es nula para todos'], correcta: 0, explicacion: 'Art. 15 Ley 18.092.' },
      { tipo: 'vf', seccion: 'giro', enunciado: 'En la letra de cambio los intereses se devengan aunque no se pacten, igual que en una operación de crédito de dinero.', respuesta: false, explicacion: 'En la letra los intereses son una mención accidental: deben pactarse (art. 13).' },
      { tipo: 'alternativas', seccion: 'giro', enunciado: 'La clínica llena un pagaré en blanco por más de lo instruido y lo endosa a un banco de buena fe. ¿Qué pasa?', opciones: ['El deudor debe pagar al banco; solo puede reclamar contra la clínica', 'El deudor puede oponer el abuso al banco', 'El pagaré es nulo', 'El banco debe devolverlo a la clínica'], correcta: 0, explicacion: 'Art. 11: el abuso no es oponible al tenedor de buena fe.' },
      { tipo: 'alternativas', seccion: 'endoso', enunciado: 'Un endoso firmado al dorso que no expresa calidad se presume…', opciones: ['Traslaticio de dominio', 'En cobro', 'En garantía', 'Nulo'], correcta: 0, explicacion: 'Art. 21 Ley 18.092, si lo firma el dueño.' },
      { tipo: 'alternativas', seccion: 'endoso', enunciado: '¿Qué efecto tiene un endoso parcial?', opciones: ['Ninguno', 'Transfiere la parte endosada', 'Vale como endoso en cobro', 'Divide la letra en dos'], correcta: 0, explicacion: 'Art. 19: no produce efecto alguno.' },
      { tipo: 'vf', seccion: 'endoso', enunciado: 'Si el endoso se sujeta a una condición, el endoso es nulo.', respuesta: false, explicacion: 'Art. 19: la condición se reputa no escrita y el endoso vale.' },
      { tipo: 'alternativas', seccion: 'endoso', enunciado: '¿Qué endoso NO purga las excepciones personales del deudor contra el endosante?', opciones: ['El endoso en cobro', 'El endoso traslaticio', 'El endoso en garantía', 'El endoso en blanco traslaticio'], correcta: 0, explicacion: 'El endosatario en cobro actúa en representación del endosante.' },
      { tipo: 'alternativas', seccion: 'endoso', enunciado: 'El librador pone «no endosable». ¿Cómo se transfiere el dominio de la letra?', opciones: ['Por las reglas de los créditos nominativos (cesión), aunque puede endosarse en cobro', 'Por endoso traslaticio común', 'No puede transferirse de ninguna forma', 'Por endoso en blanco'], correcta: 0, explicacion: 'Art. 18 Ley 18.092.' },
      { tipo: 'vf', seccion: 'endoso', enunciado: 'El que paga una letra debe verificar la autenticidad de las firmas de todos los endosantes.', respuesta: false, explicacion: 'Art. 31: solo verifica la continuidad de los endosos y la identidad de quien cobra.' },
      { tipo: 'alternativas', seccion: 'endoso', enunciado: 'Según el art. 26, ¿quién es portador legítimo?', opciones: ['Quien justifica su derecho por una serie no interrumpida de endosos, aunque el último esté en blanco', 'Quien figura como beneficiario original', 'Quien la tiene materialmente, sin más', 'El último endosatario nombrado expresamente'], correcta: 0, explicacion: 'Los endosos tachados se tienen por no escritos.' },
      { tipo: 'alternativas', seccion: 'endoso', enunciado: 'En el caso Inverlink, ¿qué norma protegió a los adquirentes de buena fe de los depósitos de la Corfo?', opciones: ['El art. 28 Ley 18.092 (inoponibilidad de excepciones), con la Ley 18.552', 'La acción reivindicatoria del Código Civil', 'El art. 1907 CC', 'El art. 57 Ley 18.092'], correcta: 0, explicacion: 'Por eso el Estado no pudo recuperar los títulos de manos de terceros de buena fe.' },
      { tipo: 'relacionar', seccion: 'endoso', enunciado: 'Relaciona cada endoso con lo que puede hacer el endosatario.', pares: [['Traslaticio', 'Endosar en cualquier forma'], ['En cobro', 'Cobrar con facultades judiciales; solo endosar en cobro'], ['En garantía', 'Cobrar y aplicar el valor a su crédito, rindiendo cuenta']], explicacion: 'Arts. 21, 29 y 30.' },
      { tipo: 'vf', seccion: 'endoso', enunciado: 'El endoso de una letra protestada por falta de pago solo produce los efectos de una cesión ordinaria.', respuesta: true, explicacion: 'Art. 32 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'aceptacion-aval', enunciado: 'Una firma suelta de X en el anverso de la letra (X no es librador ni librado) es…', opciones: ['Un aval', 'Una aceptación', 'Un endoso', 'Nada'], correcta: 0, explicacion: 'Art. 46 Ley 18.092. La sola firma del librado en el anverso sería aceptación.' },
      { tipo: 'alternativas', seccion: 'aceptacion-aval', enunciado: 'El librado escribe «acepto si apruebas el examen». ¿Qué efecto tiene?', opciones: ['Equivale a un rechazo de la aceptación', 'Es una aceptación condicional válida', 'Es una aceptación pura y simple', 'Es un aval'], correcta: 0, explicacion: 'Art. 42: solo se admite restringirla a una parte de la suma.' },
      { tipo: 'vf', seccion: 'aceptacion-aval', enunciado: 'El librado puede aceptar solo una parte de la suma de la letra.', respuesta: true, explicacion: 'Art. 42 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'aceptacion-aval', enunciado: 'Sin limitaciones, ¿en qué términos responde el avalista?', opciones: ['En los mismos términos que el aceptante', 'Solo subsidiariamente, como un fiador', 'Solo por la mitad', 'Solo frente al beneficiario original'], correcta: 0, explicacion: 'Art. 47: puede limitarse a tiempo, caso, cantidad o persona.' },
      { tipo: 'vf', seccion: 'aceptacion-aval', enunciado: 'Los derechos de un aval otorgado en documento separado se transfieren con el endoso de la letra.', respuesta: false, explicacion: 'Art. 46: no se transfieren por endoso.' },
      { tipo: 'alternativas', seccion: 'pago-protesto', enunciado: 'Vencida la letra, el portador puede rechazar un pago parcial si…', opciones: ['Es inferior a la mitad del valor del documento', 'Es inferior al total', 'Lo ofrece un avalista', 'Nunca puede rechazarlo'], correcta: 0, explicacion: 'Art. 54 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'pago-protesto', enunciado: 'No se protestó a tiempo una letra sin cláusula «sin protesto». ¿Contra quién se pierde la acción cambiaria?', opciones: ['Contra el librador, los endosantes y sus avales; no contra el aceptante ni su aval', 'Contra todos los firmantes', 'Solo contra el aceptante', 'Contra nadie'], correcta: 0, explicacion: 'Es el perjuicio de la letra (art. 79).' },
      { tipo: 'relacionar', seccion: 'pago-protesto', enunciado: 'Relaciona cada protesto con su supuesto.', pares: [['Por falta de aceptación', 'El librado se niega a aceptar'], ['Por falta de fecha', 'Letra a plazo desde la vista sin fecha de aceptación'], ['Por falta de pago', 'No se paga al vencimiento']], explicacion: 'Art. 59 Ley 18.092.' },
      { tipo: 'vf', seccion: 'pago-protesto', enunciado: 'La cláusula «devuelta sin gastos» evita también el protesto por falta de fecha de aceptación.', respuesta: false, explicacion: 'Ese protesto es indispensable para fijar el vencimiento.' },
      { tipo: 'alternativas', seccion: 'pago-protesto', enunciado: 'Antes de protestar por falta de pago, el ministro de fe debe verificar…', opciones: ['Si se depositó el pago en la tesorería de la comuna de pago', 'Si las firmas de los endosantes son auténticas', 'Si el librador tiene fondos', 'Si hay aval'], correcta: 0, explicacion: 'Art. 70: si el depósito alcanza, no hay protesto.' },
      { tipo: 'vf', seccion: 'pago-protesto', enunciado: 'El tribunal puede desechar la nulidad de un protesto si el vicio no causó un perjuicio efectivo.', respuesta: true, explicacion: 'Art. 77 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'acciones', enunciado: '¿En qué plazo prescribe la acción de reembolso?', opciones: ['6 meses desde el pago', '1 año desde el vencimiento', '4 años', '6 meses desde el vencimiento'], correcta: 0, explicacion: 'Cada pago abre un nuevo plazo de 6 meses.' },
      { tipo: 'alternativas', seccion: 'acciones', enunciado: '¿Qué acción no requiere protesto para conservarse?', opciones: ['La acción directa contra el aceptante y su aval', 'La acción de regreso contra los endosantes', 'La acción de regreso contra el librador', 'Ninguna'], correcta: 0, explicacion: 'El aceptante nunca se libera por el perjuicio de la letra.' },
      { tipo: 'vf', seccion: 'acciones', enunciado: 'Notificar la demanda al aceptante interrumpe la prescripción respecto de todos los obligados.', respuesta: false, explicacion: 'Art. 100: solo respecto del obligado notificado.' },
      { tipo: 'alternativas', seccion: 'acciones', enunciado: 'El avalista de un endosante pagó la letra. ¿A quién puede cobrarle?', opciones: ['Solo a los obligados anteriores en la cadena', 'A cualquier firmante, incluso los posteriores', 'Solo al endosante avalado', 'A nadie'], correcta: 0, explicacion: 'Acción de reembolso: nunca contra los posteriores.' },
      { tipo: 'vf', seccion: 'acciones', enunciado: 'Si no se pagó el impuesto de timbres y estampillas, la letra es nula.', respuesta: false, explicacion: 'Pierde el mérito ejecutivo, pero conserva su validez.' },

      { tipo: 'oral', seccion: 'antecedentes', enunciado: 'Explique la evolución desde el contrato de cambio hasta la letra de cambio abstracta.', puntos: ['Tres etapas: función probatoria, medio de crédito (a la orden, endoso), autonomía y abstracción (Einert).', 'Contrato de cambio (art. 620 CCom): consensual, bilateral, oneroso; dinero presente por ausente; eludía la usura (cambio húmedo y seco).', 'Intervinientes: viajero, cambista y corresponsal.', 'La letra como mandato (art. 632 derogado): mandato, distancia loci, traslado; defensa de falta de provisión.', 'DL 777 de 1925: independencia; el aceptante se obliga sin poder alegar falta de provisión.'], norma: 'Arts. 620-622 CCom; DL 777 de 1925' },
      { tipo: 'oral', seccion: 'giro', enunciado: 'Explique el giro de la letra de cambio y sus menciones esenciales, de la naturaleza y accidentales.', puntos: ['Giro: acto unilateral y solemne del librador.', 'Esenciales (art. 1°): indicación de letra, fecha, orden incondicional (art. 6° palabras sobre cifras), beneficiario, librado, firma física (arts. 8° y 9°). Si falta una, no vale como letra (art. 2°).', 'De la naturaleza: lugar de emisión (domicilio del librador), lugar de pago (domicilio del librado), vencimiento (a la vista); cuatro formas del art. 48.', 'Letra en blanco (art. 11).', 'Accidentales (art. 13): comuna, reajuste, intereses, devuelta sin gastos, otras que no alteren la esencia.', 'Modificación (art. 16) y adulteración (art. 15). Librador: garantías de aceptación y pago (art. 10).'], norma: 'Arts. 1°-16 Ley 18.092' },
      { tipo: 'oral', seccion: 'endoso', enunciado: 'Explique el endoso: clases, requisitos y efectos.', puntos: ['Art. 17: transfiere el dominio, entrega en cobro o constituye prenda; al dorso y firmado.', 'Puro y simple (condición no escrita) y total (el parcial no produce efecto) (art. 19).', 'Presunción de traslaticio (art. 21); endoso en blanco (arts. 23-24).', 'Traslaticio: garantía solidaria (art. 25), inoponibilidad (art. 28; Inverlink).', 'En cobro (art. 29): mandato, no purga excepciones; en garantía (art. 30): cobrar e imputar.', 'Limitaciones: sin responsabilidad, no endosable (arts. 18 y 25), letra vencida (art. 32). Portador legítimo (art. 26) y deber del que paga (art. 31).'], norma: 'Arts. 17-32 Ley 18.092' },
      { tipo: 'oral', seccion: 'aceptacion-aval', enunciado: 'Explique la aceptación y el aval de la letra de cambio.', puntos: ['Aceptación: acto unilateral del librado (art. 33); sola firma en el anverso; fecha obligatoria en letras a plazo desde la vista (art. 36).', 'Pura y simple; se admite la parcial; otra reserva equivale a rechazo (art. 42).', 'Si no acepta: garantía de aceptación del librador y protesto.', 'Aval (art. 46): anverso (sola firma), dorso («por aval»), documento separado (no circula con el endoso).', 'Responde como el aceptante; limitable a tiempo, caso, cantidad o persona (art. 47).', 'Diferencia con la fianza civil: unilateral, autónomo e incausado.'], norma: 'Arts. 33-47 Ley 18.092' },
      { tipo: 'oral', seccion: 'pago-protesto', enunciado: 'Explique el protesto y el perjuicio de la letra.', puntos: ['Protesto: acto formal e insustituible de un ministro de fe; por falta de aceptación, de fecha o de pago (art. 59).', 'Procedimiento notarial (arts. 61, 62, 69) y protesto bancario (art. 71).', 'Consignación previa en la tesorería comunal (art. 70).', 'Perjuicio (art. 79): caducan las acciones contra librador, endosantes y avales; no contra el aceptante ni su aval.', 'Excepciones: quiebra del aceptante antes del vencimiento y cláusula devuelta sin gastos (art. 74).', 'Nulidad solo con perjuicio efectivo (art. 77).'], norma: 'Arts. 59-79 Ley 18.092' },
      { tipo: 'oral', seccion: 'acciones', enunciado: 'Explique las acciones cambiarias y su prescripción.', puntos: ['Directa: contra el aceptante y su aval; sin protesto; 1 año desde el vencimiento.', 'Regreso: contra librador, endosantes y avales, solidaria; requiere protesto salvo cláusula; 1 año.', 'Reembolso: el que paga contra los anteriores; 6 meses desde el pago; cada pago abre un plazo nuevo.', 'Si paga el aceptante o el librador, se extingue la cadena.', 'Art. 100: interrupción solo respecto del notificado.', 'Mérito ejecutivo (art. 434 N°4 CPC): protesto personal, notificación judicial del protesto o firma autorizada; impuesto de timbres.'], norma: 'Arts. 79-100 Ley 18.092; art. 434 N°4 CPC' },

      { tipo: 'alternativas', seccion: 'sandoval-forma', enunciado: 'Según Sandoval, ¿qué es un documento al que le falta una mención esencial del art. 1° de la Ley 18.092?', opciones: ['No es nulo: se convierte en un instrumento privado sin los beneficios cambiarios', 'Es nulo absolutamente', 'Vale como pagaré del librador', 'Vale como letra si el deudor no reclama'], correcta: 0, explicacion: 'Puede servir para preparar la vía ejecutiva por confesión o reconocimiento de firma. La regla del pagaré era la del derogado art. 641 CCom.' },
      { tipo: 'vf', seccion: 'sandoval-forma', enunciado: 'Bajo el derogado art. 641 CCom, la letra a la que faltaba una formalidad valía como simple pagaré firmado por el librador.', respuesta: true, explicacion: 'Hoy el art. 2° dice que «no valdrá como letra de cambio».' },
      { tipo: 'alternativas', seccion: 'sandoval-forma', enunciado: '¿Qué resolvió la Corte Suprema (1998) sobre un documento cuya única firma era la del librado?', opciones: ['Que no vale como letra y darle mérito ejecutivo infringe los arts. 434 y 435 CPC', 'Que vale como letra aceptada', 'Que vale como pagaré del librado', 'Que es nulo y obliga a indemnizar'], correcta: 0, explicacion: 'Faltaba la firma del librador, mención esencial.' },
      { tipo: 'alternativas', seccion: 'sandoval-forma', enunciado: '¿Cómo puede el librado retirar su aceptación según el art. 44?', opciones: ['Borrándola o tachándola antes de restituir la letra, con la expresión «retiro mi aceptación» y su firma', 'Avisando al librador por carta dentro de 30 días', 'Mediante protesto', 'No puede: la aceptación es irrevocable'], correcta: 0, explicacion: 'Cumplidos esos requisitos, la aceptación se entiende negada.' },
      { tipo: 'vf', seccion: 'sandoval-forma', enunciado: 'Si el librado se niega a aceptar, responde ante el portador por los perjuicios.', respuesta: false, explicacion: 'No tiene relación con el portador. Responde el librador, que garantizó la aceptación, previo protesto.' },
      { tipo: 'alternativas', seccion: 'sandoval-forma', enunciado: 'Según Sandoval, ¿en qué se diferencia la solidaridad cambiaria de la civil?', opciones: ['Los endosantes no son codeudores de una deuda común, sino fiadores solidarios con reembolso contra el deudor principal', 'En la cambiaria no se puede cobrar el total a ninguno', 'La cambiaria es convencional y la civil legal', 'No hay diferencia'], correcta: 0, explicacion: 'Por eso el que paga solo se dirige contra los obligados anteriores.' },
      { tipo: 'alternativas', seccion: 'sandoval-forma', enunciado: 'Por el art. 82, ¿qué acción tiene el aceptante que paga la letra?', opciones: ['Ninguna acción cambiaria de reembolso contra los demás firmantes', 'Reembolso contra todos los endosantes', 'Reembolso solo contra el librador', 'Acción directa contra su avalista'], correcta: 0, explicacion: 'Lo mismo vale para el librador que paga.' },
      { tipo: 'vf', seccion: 'sandoval-forma', enunciado: 'Un tercero ajeno a la letra puede pagarla y se subroga en los derechos del portador.', respuesta: true, explicacion: 'Aplica el art. 1572 CC; el portador anota en la letra el nombre de quien pagó.' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', enunciado: '¿Quién protesta una letra en una comuna que no es asiento de notario?', opciones: ['El oficial del Registro Civil del lugar', 'El juez de policía local', 'El tesorero comunal', 'Nadie: debe ir a la comuna vecina'], correcta: 0, explicacion: 'Art. 60 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', enunciado: '¿Qué hace el funcionario si hay un depósito en Tesorería, pero no alcanza para pagar la letra, intereses y reajustes?', opciones: ['Deja constancia y protesta por el saldo insoluto', 'No protesta', 'Devuelve el depósito al deudor', 'Suspende el protesto 30 días'], correcta: 0, explicacion: 'Si alcanza, se omite el protesto (art. 70).' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', enunciado: '¿Cuáles son los requisitos copulativos para que un banco proteste por falta de pago (art. 71)?', opciones: ['Tener la letra como beneficiario o endosatario y no recibir instrucciones en contrario del portador', 'Ser el aceptante y tener autorización de la CMF', 'Tener la letra en endoso en garantía y avisar al notario', 'Que la letra sea en UF'], correcta: 0, explicacion: 'Cualquier clase de endoso sirve.' },
      { tipo: 'vf', seccion: 'sandoval-protesto', enunciado: 'Según Sandoval, el protesto hecho por un banco permite ejecutar directamente, como un protesto personal del art. 434 N° 4 CPC.', respuesta: false, explicacion: 'No es personal: hay que notificar judicialmente el protesto para preparar la vía ejecutiva.' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', enunciado: '¿Qué reemplaza a la letra extraviada para requerir su aceptación o pago?', opciones: ['Una copia autorizada de la resolución judicial que acoge la solicitud', 'Una declaración jurada del portador', 'Un duplicado firmado por el librador', 'El acta de protesto'], correcta: 0, explicacion: 'Los obligados conservan las excepciones que tenían respecto del original.' },
      { tipo: 'relacionar', seccion: 'sandoval-protesto', enunciado: 'Relaciona cada paso del procedimiento de extravío con su plazo o regla.', pares: [['Traslado a obligados y librado', '5 días hábiles'], ['Comparecencia de interesados tras el aviso', '30 días'], ['Prórroga de plazos vencidos durante el procedimiento', 'Tercer día hábil tras quedar ejecutoriada'], ['Recurso contra la resolución final', 'Apelación en ambos efectos']], explicacion: 'Arts. 88 a 96 Ley 18.092, según Sandoval.' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', enunciado: 'Además de la demanda notificada, ¿qué otra cosa interrumpe la prescripción de las acciones cambiarias respecto de un obligado?', opciones: ['Su reconocimiento expreso o tácito de la calidad de obligado', 'La mera presentación de la demanda sin notificar', 'El protesto notarial', 'El aviso de cobro del banco'], correcta: 0, explicacion: 'Es la interrupción natural (art. 2518 CC). La notificación de la solicitud de extravío también interrumpe.' },
      { tipo: 'vf', seccion: 'sandoval-protesto', enunciado: 'Quien tacha de falsa su firma en la gestión preparatoria y luego se prueba que es auténtica puede cometer un delito.', respuesta: true, explicacion: 'Art. 110 Ley 18.092: penas del art. 467 CP, salvo justa causa de error o título falso.' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', enunciado: '¿Qué son las acciones extracambiarias?', opciones: ['Las que nacen de la relación subyacente y se rigen por el derecho común', 'Las acciones de regreso contra los endosantes', 'Las que tiene el avalista contra el avalado', 'Las acciones penales por giro doloso'], correcta: 0, explicacion: 'Pueden ser ejecutivas u ordinarias.' },
      { tipo: 'oral', seccion: 'sandoval-protesto', enunciado: 'Explique el procedimiento de extravío de la letra de cambio.', puntos: ['Fundamento: «desincorporar» la prestación del documento perdido o destruido.', 'Solicitud ante el juez civil del domicilio del peticionario; traslado de 5 días; aviso en el Diario Oficial y 30 días.', 'Sin oposición: autorización para requerir aceptación o pago, con posible garantía; con oposición: incidente.', 'Suspensión provisional; la copia de la resolución reemplaza la letra; los obligados conservan sus excepciones.', 'Prórroga de plazos, apelación en ambos efectos y mismos efectos que el original (art. 96).'], norma: 'Arts. 88 a 96 Ley 18.092' },
      { tipo: 'oral', seccion: 'sandoval-forma', enunciado: 'Explique la solidaridad cambiaria y sus diferencias con la solidaridad civil.', puntos: ['Fuente legal (art. 79): libradores, aceptantes y endosantes responden del total.', 'Los endosantes son más bien fiadores solidarios, no codeudores de una deuda común.', 'Reembolso solo contra los obligados anteriores (art. 82 inc. 2°); librador y aceptante que pagan no tienen reembolso.', 'Solo el endoso traslaticio obliga (art. 25); puede excluirse en el endoso.', 'Depende del protesto oportuno; si no, la letra se perjudica.'], norma: 'Arts. 25, 79 y 82 Ley 18.092' }
    ]
  });
})();
