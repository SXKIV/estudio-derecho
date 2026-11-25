/* Unidad 6 — Letra de cambio (clases 4 a 9 del Prof. Gaspar).
   Fuentes: apuntes de clases del Prof. Gaspar (lectura de apoyo: Sandoval, tomo II, pp. 65-162). Norma: Ley 18.092.
   Orden y numeración de las secciones (10.1 … 10.5.8): los del apunte completo de clases del Prof. Gaspar (parte «Títulos de crédito», punto 10).
   Secciones «Profundización (Sandoval)», sin número, al final: Sandoval, Derecho Comercial, tomo II (5ª ed., 2005), cap. II. */
(function () {
  function fecha(d) { return d.toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' }); }
  function masMeses(d, m) { var x = new Date(d.getTime()); x.setMonth(x.getMonth() + m); return x; }

  Estudio.registrarUnidad({
    id: 'u6', numero: 6, bloque: 'Prof. Gaspar', profesor: 'Gaspar',
    titulo: 'Letra de cambio',
    resumen: 'Del contrato de cambio a la letra abstracta; el giro y sus menciones; el endoso y sus clases; la aceptación y el aval; el pago, el protesto y el perjuicio de la letra; las acciones cambiarias y su prescripción. Con Sandoval: la letra sin menciones esenciales, retiro de la aceptación, solidaridad cambiaria, protesto notarial y bancario, extravío, interrupción de la prescripción y tacha de falsedad.',
    lecturas: 'Apuntes de clases del Prof. Gaspar (clases 4 a 9 del cronograma). Lectura de apoyo: Sandoval, tomo II, pp. 65-162. Norma principal: Ley 18.092 sobre letra de cambio y pagaré. El orden y la numeración de las secciones siguen el apunte completo de clases (punto 10). Secciones «Profundización (Sandoval)»: Sandoval, tomo II, cap. II (§§ 64, 70, 98-101, 113-148).',

    /* ---------------- Glosario (definiciones del material) ---------------- */
    glosario: [
      { termino: 'Letra de cambio', definicion: 'Documento incausado, propio del comercio humano, que reemplaza al dinero y en virtud del cual su portador tiene derecho a exigir del ejecutado el pago de la suma de dinero que ella consigna.', fuente: 'C. A. de Santiago, 25-11-1983, citada en los apuntes', seccion: 'concepto', sub: 'lc-definicion', literal: true, alias: ['letras de cambio', 'letra'] },
      { termino: 'Librador', definicion: 'Creador del título: emite la orden de pago y firma la letra. Garantiza la aceptación y el pago (art. 10 Ley 18.092).', fuente: 'Apuntes; art. 10 Ley 18.092', seccion: 'giro', sub: 'lc-actos', alias: ['girador'] },
      { termino: 'Librado', definicion: 'Persona a cuyo cargo se gira la letra y a quien se dirige la orden de pago. No tiene obligación cambiaria mientras no firme la aceptación.', fuente: 'Apuntes de clases', seccion: 'giro', sub: 'lc-actos', alias: ['girado'] },
      { termino: 'Tomador', definicion: 'Beneficiario designado en la letra como acreedor original, a cuya orden debe hacerse el pago.', fuente: 'Apuntes de clases', seccion: 'giro', sub: 'lc-actos', alias: ['beneficiario de la letra'] },
      { termino: 'Aceptante', definicion: 'El librado que firmó la aceptación: queda como principal obligado al pago de la letra.', fuente: 'Arts. 33 y ss. Ley 18.092', seccion: 'aceptacion-aval', sub: 'acep' },
      { termino: 'Giro', definicion: 'Acto formal, solemne y unilateral por el cual el librador crea la letra e incorpora la orden incondicional de pagar una suma de dinero a un beneficiario.', fuente: 'Apuntes de clases', seccion: 'giro', sub: 'lc-giro', alias: ['emision', 'giro de la letra'] },
      { termino: 'Cambio húmedo', definicion: 'Operación real de traslado geográfico de dinero mediante el contrato de cambio.', fuente: 'Apuntes de clases', seccion: 'antecedentes', sub: 'lc-cc-concepto' },
      { termino: 'Cambio seco', definicion: 'Préstamo encubierto bajo la forma de contrato de cambio, con un librado ficticio, para eludir la prohibición medieval de la usura.', fuente: 'Apuntes de clases', seccion: 'antecedentes', sub: 'lc-cc-concepto' },
      { termino: 'Provisión de fondos', definicion: 'Fondos que el librador debía proveer al librado (mandatario) para que pagara. Con la letra abstracta, el librado que acepta no puede excusarse en la falta de provisión.', fuente: 'Apuntes de clases', seccion: 'antecedentes', sub: 'lc-cc-supuestos', alias: ['falta de provision de fondos'] },
      { termino: 'Letra en blanco', definicion: 'Letra a la que le faltan menciones del art. 1°, que cualquier tenedor legítimo puede completar antes del cobro según las instrucciones de los obligados; el abuso no puede oponerse al tenedor de buena fe.', fuente: 'Art. 11 Ley 18.092', seccion: 'giro', sub: 'giro-blanco', alias: ['firma en blanco', 'abuso de firma en blanco'] },
      { termino: 'Cláusula devuelta sin gastos', definicion: 'Cláusula accidental que libera al portador de protestar la letra por falta de aceptación o de pago, conservando las acciones contra todos los firmantes. Puesta por el librador, afecta a todos; por otro obligado, solo a él.', fuente: 'Arts. 13 N°4, 74 y 79 Ley 18.092', seccion: 'giro', sub: 'giro-accidentales', alias: ['sin obligacion de protesto', 'sin protesto', 'devuelta sin gastos'] },
      { termino: 'Adulteración', definicion: 'Alteración material oculta del texto de la letra. Los firmantes anteriores se obligan según el texto original y los posteriores según el nuevo.', fuente: 'Art. 15 Ley 18.092', seccion: 'giro', sub: 'giro-modificaciones', alias: ['adulteracion de la letra'] },
      { termino: 'Endoso traslaticio', definicion: 'Endoso que transfiere el dominio de la letra y todos sus derechos; es el que se presume si no se expresa otra calidad. El endosante garantiza solidariamente la aceptación y el pago.', fuente: 'Arts. 21 y 25 Ley 18.092', seccion: 'endoso', sub: 'end-traslaticio', alias: ['endoso en propiedad', 'endoso traslaticio de dominio'] },
      { termino: 'Endoso en cobro', definicion: 'Endoso con la cláusula «valor en cobro» u otra equivalente: constituye un mandato para cobrar, con todas las facultades del mandatario judicial, pero no permite endosar en dominio ni en garantía.', fuente: 'Art. 29 Ley 18.092', seccion: 'endoso', sub: 'end-cobro', alias: ['endoso en cobranza', 'endoso en comision de cobranza', 'endoso en mandato'] },
      { termino: 'Endoso en garantía', definicion: 'Endoso con la cláusula «valor en prenda» o «en garantía»: constituye prenda sobre la letra; el endosatario puede cobrarla y aplicar su valor a su crédito, rindiendo cuenta.', fuente: 'Art. 30 Ley 18.092', seccion: 'endoso', sub: 'end-garantia', alias: ['endoso en prenda'] },
      { termino: 'Endoso en blanco', definicion: 'Endoso que no contiene el nombre del endosatario, o que consiste solo en la firma del endosante; permite transferir la letra por la sola entrega.', fuente: 'Arts. 23 y 24 Ley 18.092', seccion: 'endoso', sub: 'end-elementos' },
      { termino: 'Cláusula no endosable', definicion: 'Puesta por el librador, convierte la letra en nominativa: solo se transfiere o prenda según las reglas de los créditos nominativos, aunque puede endosarse en cobro. Puesta por un endosante, este solo responde ante su endosatario directo.', fuente: 'Arts. 18 y 25 Ley 18.092', seccion: 'endoso', sub: 'end-limitaciones', alias: ['no endosable'] },
      { termino: 'Portador legítimo', definicion: 'Tenedor de la letra que justifica su derecho por una serie no interrumpida de endosos, aunque el último esté en blanco.', fuente: 'Art. 26 Ley 18.092', seccion: 'endoso', sub: 'end-portador', alias: ['tenedor legitimo'] },
      { termino: 'Aceptación', definicion: 'Acto unilateral por el cual el librado asume la obligación cambiaria de pagar la letra al vencimiento; consta en la letra con «acepto» u otra expresión y su firma, o con su sola firma en el anverso.', fuente: 'Art. 33 Ley 18.092', seccion: 'aceptacion-aval', sub: 'acep', alias: ['aceptacion de la letra'] },
      { termino: 'Aval', definicion: 'Acto escrito y firmado en la letra de cambio, en una hoja de prolongación adherida a ésta, o en un documento separado, por el cual el girador, un endosante o un tercero garantiza, en todo o en parte, el pago de ella.', fuente: 'Art. 46 Ley 18.092', seccion: 'aceptacion-aval', sub: 'aval', literal: true, alias: ['avalista', 'fianza cambiaria'] },
      { termino: 'Protesto', definicion: 'Acto formal e insustituible por el cual un ministro de fe deja constancia de que no tuvo lugar la aceptación, la fecha de la aceptación o el pago de la letra.', fuente: 'Art. 59 Ley 18.092; apuntes', seccion: 'pago-protesto', sub: 'prot-supuestos', alias: ['protestar'] },
      { termino: 'Perjuicio de la letra', definicion: 'Caducidad de las acciones cambiarias contra el librador, los endosantes y sus avales por no protestar en tiempo y forma. No libera al aceptante ni a su aval.', fuente: 'Art. 79 Ley 18.092', seccion: 'pago-protesto', sub: 'prot-perjuicio', alias: ['letra perjudicada', 'caducidad de la letra'] },
      { termino: 'Acción cambiaria directa', definicion: 'La que tiene el portador contra el aceptante y su aval. No requiere protesto y prescribe en un año desde el vencimiento.', fuente: 'Arts. 79, 80 y 98 Ley 18.092', seccion: 'acciones', sub: 'acc-directa', alias: ['accion directa'] },
      { termino: 'Acción de regreso', definicion: 'La que tiene el portador contra el librador, los endosantes y sus avales, solidariamente. Requiere protesto oportuno (salvo cláusula «sin protesto») y prescribe en un año desde el vencimiento.', fuente: 'Arts. 79 y 80 Ley 18.092', seccion: 'acciones', sub: 'acc-regreso' },
      { termino: 'Acción de reembolso', definicion: 'La que tiene el obligado de regreso que pagó, contra los obligados anteriores. Prescribe en seis meses desde el pago.', fuente: 'Art. 99 Ley 18.092; apuntes', seccion: 'acciones', sub: 'acc-reembolso' },
      { termino: 'Retiro de la aceptación', definicion: 'Facultad del librado de borrar o tachar su aceptación antes de restituir la letra, agregando «retiro mi aceptación» y firmando de nuevo; se considera que la aceptación se negó.', fuente: 'Art. 44 Ley 18.092; Sandoval', seccion: 'sandoval-forma', sub: 'sv-aceptacion', alias: ['retiro mi aceptacion'] },
      { termino: 'Solidaridad cambiaria', definicion: 'Responsabilidad solidaria por el total que la ley impone a libradores, aceptantes y endosantes de la letra. A diferencia de la civil, los endosantes actúan más bien como fiadores solidarios con reembolso contra los obligados anteriores.', fuente: 'Arts. 79 y 82 Ley 18.092; Sandoval', seccion: 'sandoval-forma', sub: 'sv-solidaridad' },
      { termino: 'Protesto bancario', definicion: 'Protesto por falta de pago que hace un banco o financiera que tiene la letra como beneficiario o endosatario, salvo instrucción en contrario del portador, con aviso previo de al menos 10 días al aceptante y registros públicos. No es protesto personal para ejecutar.', fuente: 'Art. 71 Ley 18.092; Sandoval', seccion: 'sandoval-protesto', sub: 'sv-protesto-bancario', alias: ['protesto por banco'] },
      { termino: 'Registro de Protestos', definicion: 'Registro que debe llevar todo funcionario que protesta letras, con los protestos realizados día a día, numerados y con sus datos principales.', fuente: 'Art. 63 Ley 18.092; Sandoval', seccion: 'sandoval-protesto', sub: 'sv-protesto-notarial' },
      { termino: 'Declaración de extravío', definicion: 'Procedimiento judicial ante el juez civil del domicilio del portador, con traslado a los obligados y aviso en el Diario Oficial, cuya resolución reemplaza a la letra perdida para requerir la aceptación o el pago.', fuente: 'Arts. 88 a 96 Ley 18.092; Sandoval', seccion: 'sandoval-protesto', sub: 'sv-extravio', alias: ['extravio', 'extravio de la letra'] },
      { termino: 'Acción extracambiaria', definicion: 'Acción que nace de la relación subyacente a la letra, no del título; se rige por el derecho común y puede ser ejecutiva u ordinaria.', fuente: 'Sandoval, tomo II, § 131', seccion: 'sandoval-protesto', sub: 'sv-prescripcion', alias: ['acciones extracambiarias'] },
      { termino: 'Tacha de falsedad', definicion: 'Alegación de que la firma puesta en una letra o pagaré es falsa. Si resulta auténtica, quien la tachó incurre en el delito del art. 110 de la Ley 18.092 (penas del art. 467 CP), salvo justa causa de error o título falso.', fuente: 'Art. 110 Ley 18.092; Sandoval', seccion: 'sandoval-protesto', sub: 'sv-tacha', alias: ['tacha de falsedad de firma'] },
      { termino: 'Distancia loci', definicion: 'Exigencia del antiguo contrato de cambio: el contrato se celebraba en un lugar y el pago se hacía en otro. El DL 777 de 1925 la suprimió para la letra.', fuente: 'Apuntes de clases', seccion: 'antecedentes', sub: 'lc-cc-supuestos' },
      { termino: 'Cláusula sin responsabilidad', definicion: 'Mención que el endosante traslaticio pone en su endoso para liberarse de la garantía de aceptación y de pago frente a todos los portadores posteriores. El librador nunca puede eximirse del pago.', fuente: 'Art. 25 Ley 18.092; apuntes', seccion: 'endoso', sub: 'end-limitaciones', alias: ['sin responsabilidad'] },
      { termino: 'Hoja de prolongación', definicion: 'Hoja adherida a la letra para seguir estampando endosos, avales o el protesto cuando falta espacio en el documento.', fuente: 'Arts. 17, 46 y 62 Ley 18.092; apuntes', seccion: 'endoso', sub: 'end-forma' }
    ],

    secciones: [
      {
        id: 'antecedentes', grupo: '10. Letra de cambio', titulo: '10.1–10.2. Antecedentes y contrato de cambio',
        html: `
<p>La letra de cambio es el título-valor histórico por excelencia. Chile no tiene una ley general de títulos de crédito: la <b>Ley 18.092</b> (letra de cambio y pagaré) funciona como estatuto supletorio, y la <b>Ley 18.552</b> extendió sus reglas a otros documentos a la orden.</p>
<h3 data-sub="lc-antecedentes">10.1. Antecedentes</h3>
<p>La letra no apareció de golpe: es el resultado de una larga evolución mercantil para hacer circular créditos y dinero.</p>
<div class="flow"><div class="node">1. Función probatoria<small>carta que prueba un contrato de cambio</small></div><div class="arrow">→</div><div class="node">2. Medio de crédito<small>cláusula a la orden, endoso, descuento</small></div><div class="arrow">→</div><div class="node hot">3. Autonomía y abstracción<small>escuela alemana (Einert)</small></div></div>
<ul>
  <li><b>Función probatoria:</b> en la Edad Media era una simple carta para probar y ejecutar un contrato de cambio.</li>
  <li><b>Medio de crédito:</b> con la cláusula «a la orden» y el endoso circuló rápido y permitió el <b>descuento</b>: cambiar un cobro futuro por dinero hoy.</li>
  <li><b>Autonomía y abstracción:</b> la escuela alemana (Karl Einert) la separó de su causa. Pasó a ser una promesa unilateral de pago, abstracta, dirigida al público.</li>
</ul>
<h3 data-sub="lc-contrato">10.2. Contrato de cambio</h3>
<p>Es el antecedente directo de la letra. Estaba regulado en los <b>arts. 620 a 781 CCom</b>. La Ley 18.092 (1981) derogó casi todo: hoy subsiste solo en los <b>arts. 620 a 622</b>. No tiene que ver con la compra y venta de divisas.</p>
<h4 data-sub="lc-cc-concepto">10.2.1. Concepto</h4>
<div class="cita">«[…] una convención por la cual una de las partes se obliga, mediante un valor prometido o entregado, a pagar o hacer pagar a la otra parte o a su cesionario legal cierta cantidad de dinero en un lugar distinto de aquel en que se celebra la convención.»<span class="fuente">Art. 620 CCom, según los apuntes</span></div>
<ul>
  <li>Es consensual, bilateral, oneroso y conmutativo: cambia <b>dinero presente por dinero ausente</b>.</li>
  <li>Servía para <b>eludir la prohibición de la usura</b>: la ganancia se presentaba como prima por el cambio de plaza. Ejemplo: B recibe 1.000 de A y se obliga a hacerle pagar 1.050 en otra ciudad; los 50 no se llaman interés.</li>
  <li>De ahí el <b>cambio húmedo</b> (traslado real) y el <b>cambio seco</b> (préstamo encubierto con un librado ficticio).</li>
</ul>
<h4 data-sub="lc-cc-intervinientes">10.2.2. Intervinientes</h4>
<div class="grid">
  <div class="card"><div class="kicker">Viajero o acreedor (A)</div><p>Entrega el dinero en la ciudad de origen y lo necesita en otra.</p></div>
  <div class="card"><div class="kicker">Cambista o deudor (B)</div><p>Recibe el dinero y se obliga a pagar o hacer pagar en el destino.</p></div>
  <div class="card"><div class="kicker">Corresponsal (C)</div><p>Tercero en la ciudad de destino, con negocios o cuenta con B. Entrega el dinero a A.</p></div>
</div>
<p class="small">El corresponsal <b>no participa del contrato</b>: está en otra ciudad. Ejemplo de clase: un comerciante de Concepción (A) paga a un cambista de Concepción (B) para que su corresponsal en Valdivia (C) le entregue los fondos al llegar.</p>
<h4 data-sub="lc-cc-letra">10.2.3. La letra</h4>
<p>Cobrar en el destino con el contrato completo era engorroso. Por eso el cambista (B) escribía una <b>carta</b> al corresponsal (C) ordenándole pagar a A. El derogado <b>art. 632 CCom</b> definía la letra como un <b>mandato escrito</b>, con formas legales, por el cual el librador (B) ordena al librado (C) pagar a la orden del beneficiario (A).</p>
<h4 data-sub="lc-cc-supuestos">10.2.4. Supuestos de la relación jurídica</h4>
<div class="grid">
  <div class="card"><b>Mandato</b><p class="small">B es mandante y C, mandatario encargado de pagar.</p></div>
  <div class="card"><b>Distancia loci</b><p class="small">El contrato se celebra en un lugar y el pago se hace en otro.</p></div>
  <div class="card"><b>Mover el dinero</b><p class="small">Trasladar valor sin transportarlo físicamente.</p></div>
</div>
<p>Como mandatario, C podía negarse a pagar por <b>falta de provisión de fondos</b>: «tengo un mandato con B, pero no me ha pasado los fondos». A quedaba desprotegido y debía volver a su ciudad a demandar a B (como el hijo que va a comprar pan sin monedas).</p>
<div class="callout"><p>El <b>DL 777 de 1925</b> independizó la letra del contrato de cambio: suprimió la <i>distancia loci</i> y las defensas del mandato. Hoy el librado que acepta se obliga en forma pura y simple, sin poder alegar falta de provisión.</p></div>`
      },
      {
        id: 'concepto', grupo: '10. Letra de cambio', titulo: '10.3–10.4. Definición y características',
        html: `
<h3 data-sub="lc-definicion">10.3. Definición de la letra de cambio</h3>
<p>La Ley 18.092 <b>no define</b> la letra: su art. 1° solo enumera las menciones que debe contener.</p>
<div class="cita">«Un documento incausado, propio del comercio humano, que reemplaza al dinero y en virtud del cual su portador tiene derecho a exigir del ejecutado el pago de la suma de dinero que ella consigna.»<span class="fuente">Corte de Apelaciones de Santiago, 25 de noviembre de 1983, citada en los apuntes</span></div>
<p>El derogado art. 632 CCom la definía como un <b>mandato escrito</b>. Con esa idea, el librado sin fondos podía negarse a pagar. Hoy la letra no es un mandato: el librado que <b>acepta</b> se obliga en forma principal y abstracta, aunque el librador no le haya provisto fondos.</p>
<h3 data-sub="lc-caracteristicas">10.4. Características de la letra de cambio</h3>
<table class="tabla">
<tr><th>Característica</th><th>Qué significa</th></tr>
<tr><td><b>Abstracta</b></td><td>Se desvincula del negocio de origen. Por el <span class="norma">art. 12</span>, girarla o aceptarla <b>no nova</b> la obligación original: coexisten la acción cambiaria y la causal (sin poder cobrar dos veces).</td></tr>
<tr><td><b>Formal</b></td><td>Si falta una mención esencial del art. 1°, el documento <b>no vale como letra</b> (<span class="norma">art. 2°</span>); se convierte en un instrumento privado común.</td></tr>
<tr><td><b>Título de pago</b></td><td>Cumple un rol análogo a la moneda, sin curso forzoso.</td></tr>
<tr><td><b>Normalmente a la orden</b></td><td>Circula por endoso y entrega, sin consentimiento ni notificación del deudor, salvo la cláusula «no endosable».</td></tr>
<tr><td><b>Actos unilaterales, independientes y abstractos</b></td><td>Cada firma obliga por sí sola; independencia de las firmas (<span class="norma">art. 7°</span>); inoponibilidad de excepciones personales (<span class="norma">art. 28</span>); todos los firmantes responden <b>solidariamente</b> (<span class="norma">art. 79</span>).</td></tr>
</table>
<p class="small">Ejemplo del art. 12: quien compra mercaderías por $10.000.000 y firma una letra queda con dos obligaciones paralelas, la de la compraventa y la cambiaria. Si la letra se perjudica por no protestarla a tiempo, el vendedor todavía puede cobrar con la acción causal del contrato.</p>`
      },
      {
        id: 'giro', grupo: '10.5. Actos de la letra de cambio', titulo: '10.5–10.5.1. Los actos de la letra y el giro',
        html: `
<h3 data-sub="lc-actos">10.5. Actos de la letra de cambio</h3>
<p>La vida de la letra es una serie de actos unilaterales y formales: <b>giro</b> (creación), <b>aceptación</b>, <b>endoso</b> (circulación), <b>aval</b> (garantía) y <b>pago</b> o <b>protesto</b>. Cada declaración vale por sí sola y el tenedor solo se atiene a lo escrito: «lo que no está en el título no existe».</p>
<p class="small">Ejemplo: librador y beneficiario acuerdan de palabra cobrar tres meses después de la fecha escrita. Ese pacto no es oponible al endosatario de buena fe, que puede cobrar el día que dice el papel.</p>
<div class="grid">
  <div class="card"><div class="kicker">Librador o girador</div><p>Crea la letra y firma la orden. Garantiza aceptación y pago.</p></div>
  <div class="card"><div class="kicker">Librado o girado</div><p>Destinatario de la orden. Sin obligación mientras no firme.</p></div>
  <div class="card"><div class="kicker">Tomador o beneficiario</div><p>Acreedor original, a cuya orden se paga.</p></div>
</div>
<h3 data-sub="lc-giro">10.5.1. Giro o emisión</h3>
<p>Acto formal, solemne y unilateral por el cual el librador <b>crea</b> la letra e incorpora la orden incondicional de pagar una suma de dinero a un beneficiario.</p>
<h4 data-sub="giro-intervinientes">10.5.1.1. Intervinientes</h4>
<p>Las tres posiciones pueden concentrarse en menos personas:</p>
<ul>
  <li><b>A cargo del propio librador</b> (librador = librado, <span class="norma">art. 3°</span>): equivale a un pagaré; el emisor se obliga directamente.</li>
  <li><b>A la orden del propio librador</b> (librador = beneficiario): útil para emitir hoy sin saber aún quién será el acreedor; después se transfiere por endoso.</li>
  <li><b>Varios libradores o librados</b> (<span class="norma">art. 4°</span>): todos los librados lo son, salvo que se fije un orden; entonces el primero es librado y los demás, subsidiarios.</li>
</ul>
<h4 data-sub="giro-menciones">10.5.1.2. Enunciaciones que debe contener</h4>
<p>El art. 1° enumera las menciones. No todas son esenciales: la ley suple algunas (menciones <b>de la naturaleza</b>). Las que, si faltan, privan al documento de valor cambiario son las <b>esenciales</b>. Las <b>accidentales</b> las agregan las partes (art. 13).</p>
<h4 data-sub="giro-esenciales">A. Menciones esenciales (art. 1°)</h4>
<ol>
  <li>La <b>indicación de ser letra de cambio</b>, en el idioma del título. A diferencia de los contratos comunes, la autoidentificación es una solemnidad.</li>
  <li>El <b>lugar y fecha</b> de emisión. La fecha es esencial: sirve para la capacidad de las partes, la ley aplicable y el cálculo de plazos. Si falta el lugar, se entiende girada en el domicilio del librador.</li>
  <li>La <b>orden no sujeta a condición</b> de pagar una cantidad determinada o determinable de dinero (moneda nacional, extranjera o unidades de reajuste). Si el monto difiere entre palabras y cifras, <b>valen las palabras</b> (<span class="norma">art. 6°</span>).</li>
  <li>El <b>nombre del beneficiario</b>.</li>
  <li>El <b>nombre, apellido y domicilio del librado</b>.</li>
  <li>El lugar y la época de pago (de la naturaleza: ver abajo).</li>
  <li>La <b>firma del librador</b>. Debe ser física: en materia cambiaria no rige la equivalencia funcional («somos antediluvianos»). Se admite la huella digital ante notario u oficial del Registro Civil (<span class="norma">art. 9°</span>). Quien firma como representante sin poder, o excediéndolo, se obliga personalmente (<span class="norma">art. 8°</span>).</li>
</ol>
<h4 data-sub="giro-naturaleza">B. Menciones de la naturaleza</h4>
<p>La ley suple el silencio de las partes:</p>
<table class="tabla">
<tr><th>Mención</th><th>Si se omite</th></tr>
<tr><td>Lugar de emisión</td><td>Domicilio del librador. Importa por <i>locus regit actum</i> (arts. 16 y 17 CC).</td></tr>
<tr><td>Lugar de pago</td><td>Domicilio del librado (lógica del art. 1588 CC: la menor carga para el deudor). El lugar de pago se <b>indica</b>, no se estipula: estipular exige acuerdo y el giro es unilateral (pregunta de examen).</td></tr>
<tr><td>Vencimiento</td><td>Se entiende <b>a la vista</b>.</td></tr>
</table>
<div class="callout"><p><b>Art. 48: cuatro formas de vencimiento.</b> (1) A la vista; (2) a un plazo desde la vista (se cuenta desde la aceptación); (3) a un plazo desde el giro; (4) a día fijo (si cae en feriado, pasa al hábil siguiente). <b>No vale como letra</b> la girada a otros vencimientos o a <b>vencimientos sucesivos</b>. En el pagaré sí se admiten cuotas; con letras, hay que girar una por cuota.</p></div>
<p class="small">El «cheque a fecha» no existe jurídicamente: el cheque siempre es pagadero a la vista.</p>
<h4 data-sub="giro-blanco">B.IV. Letra en blanco (art. 11)</h4>
<p>Basta que tenga la firma de al menos uno de los obligados. Cualquier tenedor legítimo puede completar las menciones faltantes antes del cobro, según las <b>instrucciones de llenado</b> de los obligados. Si se llena contra ellas, el obligado puede eximirse <b>probándolo</b>, pero esa defensa <b>no es oponible al tenedor de buena fe</b>: a él le paga todo y solo puede accionar contra el abusador. Ejemplo de clase: el pagaré en blanco que exige una clínica. El art. 17 B LPDC prohíbe mandatos de llenado indeterminados en el consumo.</p>
<h4 data-sub="giro-accidentales">C. Menciones accidentales (art. 13)</h4>
<ul>
  <li><b>Comuna</b> del lugar de pago: permite el pago por consignación en la tesorería comunal (art. 70).</li>
  <li><b>Reajustabilidad</b> (por ejemplo, expresar el monto en UF). Los bancos solo usan los sistemas autorizados por el Banco Central; los particulares tienen libertad.</li>
  <li><b>Intereses</b>: corren desde la emisión. En la letra son <b>accidentales</b> (al revés que en la operación de crédito de dinero) y respetan la TMC; si la exceden, se rebajan al interés corriente.</li>
  <li><b>«Devuelta sin gastos» o «sin obligación de protesto»</b>: libera de protestar. Puesta por el librador, produce efectos respecto de todos los firmantes; puesta por otro obligado, solo respecto de él (<span class="norma">art. 74</span>).</li>
  <li>Otras menciones, siempre que <b>no alteren la esencia</b> (una condición en la orden de pago la destruye).</li>
</ul>
<p class="small">El impuesto de timbres y estampillas no es mención, pero sin él el notario no autoriza firmas y la letra pierde mérito ejecutivo.</p>
<h4 data-sub="giro-modificaciones">10.5.1.3. Modificaciones de la letra de cambio</h4>
<div class="grid dos">
  <div class="card"><b>Modificación (art. 16)</b><p>Cambio visible. Antes de circular, el librador puede modificar libremente. Después, solo obliga a quienes firman con posterioridad o la consienten con una nueva firma.</p></div>
  <div class="card"><b>Adulteración (art. 15)</b><p>Cambio oculto (la goma azul que raspa el papel). Los firmantes <b>anteriores</b> se obligan según el <b>texto original</b>; los <b>posteriores</b>, según el <b>nuevo</b>.</p></div>
</div>
<h4 data-sub="giro-librador">10.5.1.4. Obligaciones del librador (art. 10)</h4>
<p>Al girar, el librador es el único obligado: el librado aún no ha firmado. Garantiza la <b>aceptación</b> y el <b>pago</b>. Puede eximirse de la garantía de aceptación, pero <b>toda cláusula que lo exima o limite su responsabilidad por el pago se tiene por no escrita</b>.</p>
<p class="small">Ejemplo: el beneficiario viaja a cobrar y el librado no acepta. Puede volver y demandar de inmediato al librador. Si el librador se eximió de la garantía de aceptación, debe esperar al vencimiento, cuando opera la garantía de pago.</p>
<div class="callout yellow"><p><b>Ojo: el apunte no es uniforme.</b> Transcribe el art. 10 («se tendrá por no escrita»), pero al explicarlo dice que esa cláusula es nula y que el título «vale cero», y en el endoso, que si el librador se exime del pago «no hay letra». Conviene confirmarlo con el profesor.</p></div>`
      },
      {
        id: 'endoso', grupo: '10.5. Actos de la letra de cambio', titulo: '10.5.2. Endoso',
        html: `
<h3 data-sub="end-intro">10.5.2.1. Introducción</h3>
<div class="cita">«El endoso es el escrito por el cual el tenedor legítimo transfiere el dominio de la letra, la entrega en cobro o la constituye en prenda.»<span class="fuente">Art. 17 Ley 18.092</span></div>
<p>Supera las trabas de la cesión de créditos: no requiere notificar al deudor ni su aceptación. La <b>Ley 18.552</b> extendió sus reglas a todos los títulos a la orden (cheque, pagaré, vale vista). Se puede endosar desde que la letra existe (firma del librador), antes o después de la aceptación.</p>
<h3 data-sub="end-clases">10.5.2.2. Clasificación del endoso</h3>
<div class="grid">
  <div class="card"><b>Traslaticio (en propiedad)</b><p class="small">Enajenación en sentido amplio: título y modo. El endosatario es el nuevo dueño y acreedor.</p></div>
  <div class="card"><b>En cobro (en mandato)</b><p class="small">No transfiere la propiedad: el endosante sigue siendo dueño y el endosatario (banco o abogado) cobra por él.</p></div>
  <div class="card"><b>En garantía (en prenda)</b><p class="small">Enajenación restringida: el endosante conserva la nuda propiedad; el acreedor prendario tiene la letra y la cobra.</p></div>
</div>
<table class="tabla">
<tr><th></th><th>Traslaticio</th><th>En cobro</th><th>En garantía</th></tr>
<tr><td>Efecto</td><td>Transfiere el dominio (título y modo).</td><td>Mandato de cobro (art. 29), con todas las facultades del mandatario judicial.</td><td>Prenda sobre la letra (art. 30).</td></tr>
<tr><td>Cláusula</td><td>Se presume si no se expresa otra calidad (art. 21).</td><td>«Valor en cobro», «en cobranza».</td><td>«Valor en prenda», «en garantía».</td></tr>
<tr><td>¿Puede volver a endosar?</td><td>Sí, en cualquier forma.</td><td>Solo en cobro.</td><td>Solo en cobro (no hay «prenda sobre prenda»).</td></tr>
<tr><td>¿Purga excepciones? (art. 28)</td><td>Sí.</td><td><b>No</b>: el deudor le opone las excepciones que tenía contra el endosante.</td><td>Sí.</td></tr>
<tr><td>Garantía del endosante</td><td>Aceptación y pago, solidariamente (art. 25).</td><td>No aplica.</td><td>Salvo pacto, no responde de aceptación ni pago.</td></tr>
</table>
<h3 data-sub="end-forma">10.5.2.3. Requisito de forma</h3>
<ul>
  <li>Firma del endosante al <b>dorso</b> de la letra o en una <b>hoja de prolongación</b>. En el anverso no es endoso.</li>
  <li>Firma el titular: el beneficiario en el primer endoso; después, el portador legítimo.</li>
  <li>Como en el giro (art. 9°): procedimientos mecánicos autorizados o huella digital.</li>
</ul>
<table class="tabla">
<tr><th>Endoso</th><th>¿Quién puede firmarlo?</th></tr>
<tr><td>Traslaticio</td><td>Solo el portador legítimo dueño: solo él puede transferir el dominio.</td></tr>
<tr><td>En garantía</td><td>Solo el dueño: solo él puede dar la cosa en prenda.</td></tr>
<tr><td>En cobro</td><td>El dueño («quien puede lo más, puede lo menos»), el acreedor prendario (para cobrar la garantía) y el endosatario en cobro (delega el mandato).</td></tr>
</table>
<p class="small">Ejemplo: el acreedor prendario A quiere que su abogado Z cobre la letra vencida. No puede endosarle en dominio (no es dueño) ni en prenda (no hay prenda sobre prenda): solo en cobro.</p>
<h3 data-sub="end-fondo">10.5.2.4. Requisitos de fondo (art. 19)</h3>
<ul>
  <li><b>Puro y simple:</b> la <b>condición se tiene por no escrita</b> y el endoso vale de inmediato («a mi alumno, siempre que apruebe su examen de grado»: puede cobrar esa tarde). En el giro, en cambio, la condición destruye la letra. Un <b>plazo</b> no tiene esa regla: la posición conservadora sostiene que vicia el endoso.</li>
  <li><b>Total:</b> el <b>endoso parcial no produce efecto alguno</b>. El derecho está incorporado al papel y no se puede entregar a dos personas a la vez (no se puede partir un billete).</li>
  <li>El endoso <b>al portador</b> vale como endoso en blanco.</li>
</ul>
<h3 data-sub="end-elementos">10.5.2.5. Elementos del endoso</h3>
<p class="small">El apunte marca este punto para «saber muy bien para la solemne».</p>
<ul>
  <li><b>Calidad (art. 21):</b> si no se expresa, el endoso es <b>traslaticio</b>. Para que sea en cobro o en garantía hay que decirlo («en cobro», «en prenda», «en garantía»).</li>
  <li><b>Endosatario (arts. 23 y 24):</b> no es esencial nombrarlo. Sin nombre, o con la sola firma, es <b>endoso en blanco</b>: el tenedor puede llenarlo, transferir la letra por la sola entrega o endosarla en cobro o en prenda. Circula como un título al portador.</li>
  <li><b>Lugar y fecha (art. 22):</b> sin lugar, se presume hecho en el domicilio del endosante; sin fecha, se presume hecho <b>antes del vencimiento</b>.</li>
</ul>
<div class="callout"><p><b>Límite de la presunción:</b> el endoso sin calidad es traslaticio solo si lo firma el <b>dueño</b>. Si el endosatario en garantía o en cobro endosa, aunque calle la calidad, vale como <b>endoso en cobro</b> (arts. 29 y 30). Y si el acreedor prendario escribe «en prenda a favor de Z», no produce efecto: no hay prenda sobre prenda.</p></div>
<p class="small">Ejemplo: el beneficiario firma «en prenda» sin nombrar al acreedor. Es endoso en blanco, pero limitado a la prenda: quien reciba el papel cobra como acreedor prendario, no como dueño.</p>
<h4 data-sub="end-valevista">Caso del vale vista (pregunta de examen)</h4>
<p>Compra de una casa pagada con vale vista:</p>
<ol>
  <li>Comprar un inmueble exige escritura pública y, además, la inscripción en el Conservador. El comprador no quiere pagar sin inscribir y el vendedor no quiere firmar sin saber que el dinero existe.</li>
  <li>El comprador pide a su banco un <b>vale vista</b> (título a la orden) emitido <b>a su propio nombre</b>: si el negocio se frustra antes de firmar, lo cobra él mismo.</li>
  <li>Al firmar la escritura, lo <b>endosa</b> al vendedor (en blanco o a su nombre) y lo deja en custodia del notario con <b>instrucciones notariales</b>: entregarlo al vendedor solo contra la copia de la inscripción, dentro de un plazo (60 o 90 días).</li>
  <li>Si la inscripción fracasa o vence el plazo, el comprador recupera el vale vista y <b>tacha su endoso</b>. Es una modificación visible, no una adulteración: vuelve a ser el beneficiario y lo cobra en el banco.</li>
</ol>
<h3 data-sub="end-traslaticio">10.5.2.6. Endoso traslaticio</h3>
<p>Es el motor de la circulación: funciona como título y modo para adquirir el dominio de la letra y de todos sus derechos. Cada firma es independiente («cada uno mata su toro»): si un endoso anterior es nulo o falso, los firmantes posteriores siguen obligados.</p>
<p><span class="norma">Art. 25</span>: el endosante traslaticio garantiza <b>solidariamente</b> la aceptación y el pago, salvo estipulación en contrario en el dorso mismo.</p>
<h4 data-sub="end-limitaciones">Limitaciones de responsabilidad</h4>
<table class="tabla">
<tr><th>Cláusula</th><th>Efecto</th></tr>
<tr><td>«Sin responsabilidad» (endosante)</td><td>Libera al endosante de la garantía de aceptación y pago frente a todos los portadores posteriores. El librador nunca puede eximirse del pago.</td></tr>
<tr><td>«No endosable» puesta por un <b>endosante</b> (art. 25)</td><td>La letra sigue circulando, pero ese endosante solo responde ante su endosatario directo.</td></tr>
<tr><td>«No endosable» puesta por el <b>librador</b> (art. 18)</td><td>La letra se vuelve <b>nominativa</b>: solo se transfiere o prenda como crédito nominativo (cesión con notificación). Sí puede endosarse en cobro. Un endoso que debiera ser traslaticio se convierte por ley en endoso en cobro.</td></tr>
<tr><td>Endoso de letra vencida o protestada (art. 32)</td><td>Solo vale como <b>cesión ordinaria</b>.</td></tr>
</table>
<h4 data-sub="end-inoponibilidad">Inoponibilidad de excepciones (art. 28)</h4>
<p>En la cesión de créditos, el cesionario recibe el crédito con sus vicios: el deudor le opone lo que tenía contra el cedente (compensación, dolo, fuerza). En el endoso no: el demandado <b>no puede oponer excepciones fundadas en relaciones personales con anteriores portadores</b>. Por la Ley 18.552, la regla vale para todos los títulos a la orden.</p>
<ul>
  <li><b>Traslaticio y en garantía:</b> purgan las excepciones personales de los titulares anteriores.</li>
  <li><b>En cobro:</b> no las purga. El endosatario representa al endosante, así que el deudor le opone todo lo que tenía contra este.</li>
</ul>
<p class="small">Según Sandoval (citado en el apunte), frente al endosatario sí pueden oponerse: irregularidades formales del documento, falsedad, excepciones de la relación directa entre demandante y demandado, y modos de extinguir que consten en esa relación o en la misma letra.</p>
<h4 data-sub="end-inverlink">Caso Inverlink (2003), pregunta de examen</h4>
<div class="callout red"><p>Funcionarios de la Corfo, coludidos con Inverlink, endosaron depósitos a plazo de la Corfo, que luego circularon por endosos traslaticios a terceros. El presidente Lagos dijo que podían perseguirse «en manos de quien estuvieran» (el jarrón de la abuela) y hubo pánico en el mercado. Por el <b>art. 28</b> (y la Ley 18.552), la inoponibilidad de excepciones protegió a los adquirentes de buena fe; el Estado solo pudo demandar perjuicios a quienes actuaron de mala fe.</p></div>
<h4 data-sub="end-portador">Portador legítimo y deber del que paga (arts. 26 y 31)</h4>
<ul>
  <li><span class="norma">Art. 26</span>: es portador legítimo quien tiene el papel y justifica su derecho por una <b>serie no interrumpida de endosos</b>, aunque el último esté en blanco. Quien firma sin derivar su derecho del anterior es un «nadie» y corta la cadena. Los endosos tachados se tienen por no escritos.</li>
  <li><span class="norma">Art. 31</span>: el que paga <b>no debe verificar la autenticidad</b> de los endosos, pero sí la <b>identidad</b> de quien cobra y la <b>continuidad</b> de los endosos; si no, responde si paga a un portador ilegítimo.</li>
</ul>
<h4 data-sub="end-circulacion">Cuándo se traba la circulación (art. 57)</h4>
<p>No puede prohibirse ni trabarse el pago o la circulación de la letra por resolución judicial, salvo: la liquidación concursal del portador u otro hecho que lo prive de la administración de sus bienes, el extravío, o el embargo del crédito junto con la aprehensión del documento.</p>
<h3 data-sub="end-cobro">10.5.2.7. Endoso en cobro</h3>
<ul>
  <li>Mandato cambiario: el endosante sigue siendo dueño; el endosatario (un banco o un abogado) cobra, protesta y demanda por él.</li>
  <li>Requiere la cláusula «en cobro», «valor en cobro», «en cobranza» u otra equivalente.</li>
  <li><span class="norma">Art. 29</span>: tiene todas las facultades del mandatario judicial, <b>incluidas las especiales del art. 7° inc. 2° CPC</b> (desistirse, transigir, percibir…), sin mencionarlas ni exhibir una escritura de mandato. Solo debe comparecer en juicio en la forma que exige la ley.</li>
  <li>Solo puede endosar en cobro (delegar el mandato). La letra no endosable sí admite endoso en cobro.</li>
</ul>
<h3 data-sub="end-garantia">10.5.2.8. Endoso en garantía</h3>
<ul>
  <li>Prenda cambiaria con desplazamiento sobre el crédito de la letra. Requiere «en garantía», «en prenda» u otra equivalente.</li>
  <li>Si el librador puso «no endosable», no se puede endosar en garantía: hay que usar la prenda civil de créditos (<b>art. 2389 CC</b>), notificando al deudor.</li>
  <li>Ampara <b>todas las obligaciones vigentes entre endosante y endosatario a la fecha del endoso</b>. Las deudas que nacen después no quedan cubiertas: la fecha del endoso es clave como prueba.</li>
  <li><span class="norma">Art. 30</span>: el endosatario cobra la letra y <b>aplica su valor a su crédito sin remate</b>, rindiendo cuenta. Debe hacer las diligencias para conservar los derechos: si por su negligencia la letra se perjudica, responde.</li>
  <li>Salvo pacto, el endosante no responde de la aceptación ni del pago. El endosatario solo puede endosar en cobro.</li>
</ul>`
      },
      {
        id: 'aceptacion-aval', grupo: '10.5. Actos de la letra de cambio', titulo: '10.5.3–10.5.4. Aceptación y aval',
        html: `
<h3 data-sub="acep">10.5.3. Aceptación de la letra de cambio</h3>
<p>Acto unilateral por el que el librado asume la obligación de pagar al vencimiento. No es un consentimiento bilateral: es su manifestación de someterse a la orden. Antes de aceptar, el único obligado es el librador.</p>
<ul>
  <li><b>Forma (art. 33):</b> en la letra, con «acepto», «aceptada» u otra expresión y la firma del librado. <b>Su sola firma en el anverso es aceptación.</b></li>
  <li><b>Fecha (art. 36):</b> solo es obligatoria en las letras a un plazo desde la vista (o si debe presentarse a la aceptación en un plazo). Si falta, hay protesto por falta de fecha.</li>
  <li><b>Pura y simple (art. 42):</b> el librado puede <b>restringirla a una parte</b> de la suma («acepto hasta por $500.000»). Cualquier otra reserva o condición («acepto si apruebas el examen») <b>equivale a un rechazo</b>, aunque el aceptante queda obligado en los términos de su aceptación.</li>
  <li>Si el librado no acepta o acepta solo una parte, opera la <b>garantía de aceptación</b> del librador.</li>
  <li><b>Presentación:</b> facultativa, entre la emisión y el vencimiento; vale incluso la aceptación dada después del vencimiento o del protesto por falta de pago. Es <b>obligatoria</b> en la letra a plazo desde la vista. Se requiere en el domicilio del librado, entre las 9 y las 18 horas, en días hábiles (no sábados, domingos, festivos ni el 31 de diciembre). El librado puede pedir que se le presente de nuevo al día hábil siguiente, pero el portador no tiene que dejarle la letra.</li>
</ul>
<h3 data-sub="aval">10.5.4. El aval</h3>
<div class="cita">«El aval es un acto escrito y firmado en la letra de cambio, en una hoja de prolongación adherida a ésta, o en un documento separado, por el cual el girador, un endosante o un tercero garantiza, en todo o en parte, el pago de ella.»<span class="fuente">Art. 46 Ley 18.092</span></div>
<p>Se le llama «fianza cambiaria», pero a diferencia de la fianza civil (accesoria y causada) es <b>unilateral, autónomo e incausado</b>.</p>
<table class="tabla">
<tr><th>Dónde</th><th>Requisito</th></tr>
<tr><td>Anverso</td><td>La <b>sola firma</b> de alguien que no sea el librador ni el librado es aval.</td></tr>
<tr><td>Dorso</td><td>Firma más la expresión <b>«por aval»</b>. Sin ella, la firma se lee como endoso o, si no podía endosar, como la de un «nadie».</td></tr>
<tr><td>Documento separado</td><td>Es el único acto cambiario que puede ir fuera de la letra. Debe expresar que es aval e identificar la letra. Sus derechos <b>no se transfieren por endoso</b>: por eso en la práctica se pegan hojas de prolongación para firmar sobre la letra.</td></tr>
</table>
<h4 data-sub="aval-limites">Limitaciones del aval (art. 47)</h4>
<p>Sin limitaciones, el avalista responde <b>en los mismos términos que el aceptante</b>. Puede limitar su responsabilidad a:</p>
<table class="tabla">
<tr><th>Límite</th><th>Ejemplo</th></tr>
<tr><td>Tiempo</td><td>Un plazo menor que el año de prescripción: la letra vence el 23-9-2027 y el aval dice «válido hasta el 31-12-2027».</td></tr>
<tr><td>Caso</td><td>Sujeto a un hecho futuro e incierto («aval sujeto a que se apruebe el examen de grado»).</td></tr>
<tr><td>Cantidad</td><td>«Aval hasta por $500.000» en una letra de $1.000.000.</td></tr>
<tr><td>Persona</td><td>Responde solo si incumple un obligado determinado («solo si Y no paga»).</td></tr>
</table>
<h4 data-sub="aval-reales">Prendas e hipotecas</h4>
<p>También pueden constituirse prendas o hipotecas para garantizar una letra. Como la hipoteca consta en escritura pública separada, el endoso no la transfiere: se requiere la cesión de créditos (art. 1906 CC).</p>`
      },
      {
        id: 'pago-protesto', grupo: '10.5. Actos de la letra de cambio', titulo: '10.5.5–10.5.7. Pago, protesto y extravío',
        html: `
<h3 data-sub="pago">10.5.5. El pago de la letra de cambio</h3>
<p>Extingue la obligación cambiaria. Solo es exigible al vencimiento.</p>
<h4 data-sub="pago-epoca">10.5.5.1. Época y modalidades</h4>
<ul>
  <li><b>A la vista:</b> vence al presentarse; plazo máximo de presentación de <b>un año</b> desde el giro (art. 49).</li>
  <li><b>A un plazo desde la vista:</b> desde la aceptación, que debe fecharse (art. 50); si no se fecha, se protesta por falta de fecha.</li>
  <li><b>Desde el giro</b> (girada el 23-9-2026 «a un año desde el giro»: vence el 23-9-2027) o <b>a día fijo</b>.</li>
  <li>Si vence en día feriado o inhábil bancario, pasa al hábil siguiente (art. 51).</li>
</ul>
<h4 data-sub="pago-anticipado">10.5.5.2. Pago anticipado o prepago</h4>
<p>En el derecho mercantil general, el plazo se presume también en beneficio del acreedor (art. 117 CCom): el deudor no puede pagar antes sin su acuerdo. El <span class="norma">art. 55</span> rompe esa regla: el pago anticipado de la letra se rige por las normas de operaciones de crédito de dinero vigentes al emitirla (art. 10 Ley 18.010, ver U1). Según el apunte, bajo 5.000 UF el deudor puede prepagar (en total, o en parte si es al menos el 10% del capital), pagando una comisión de prepago.</p>
<p><span class="norma">Art. 56</span>: quien paga antes del vencimiento responde de la validez del pago. Debe verificar que paga al portador legítimo: «quien paga mal, paga dos veces».</p>
<h4 data-sub="pago-parcial">10.5.5.3. Pago al vencimiento y pagos parciales</h4>
<p>En el Código Civil, el acreedor no está obligado a recibir pagos parciales. El <span class="norma">art. 54</span> dice lo contrario: el portador <b>no puede rehusarlos</b>; vencida la letra, puede rechazar los <b>inferiores a la mitad</b>. La razón: el pago parcial reduce la deuda y beneficia a los demás obligados solidarios. Se anota en la letra, con recibo, y se puede protestar por el saldo.</p>
<p class="small">Ejemplo: letra de $1.000.000; el aceptante ofrece $500.000. El portador debe recibirlos, y al avalista solo podrá cobrarle los $500.000 restantes.</p>
<h4 data-sub="pago-derechos">10.5.5.4. Derechos del deudor que paga</h4>
<ul>
  <li><b>Pago total:</b> exige la letra con constancia de pago y un recibo (arts. 54 y 86). Recuperar el papel es clave: en manos de un tercero, podría volver a cobrarse.</li>
  <li><b>Pago parcial:</b> no puede exigir la letra (el acreedor la necesita para el saldo). Tiene derecho a que se anote el pago y a una <b>copia íntegra certificada por notario</b>, que vale como el original para sus acciones cambiarias (<span class="norma">art. 85</span>). Así el avalista que pagó una parte puede cobrar el reembolso.</li>
</ul>
<h4 data-sub="pago-consignacion">10.5.5.5. Pago por consignación</h4>
<p>Si el acreedor no aparece o se niega a recibir, el deudor no cae en mora: deposita en la <b>tesorería de la comuna de pago</b> indicada en la letra (art. 70). Por eso la comuna, aunque es mención accidental, tiene valor práctico. Antes de protestar por falta de pago, el ministro de fe verifica ese depósito: si alcanza para la letra, intereses y reajustes, no hay protesto; si no alcanza, protesta por el saldo.</p>
<h3 data-sub="protesto">10.5.6. El protesto de la letra de cambio</h3>
<h4 data-sub="prot-supuestos">10.5.6.1. Concepto y supuestos</h4>
<p>Acto formal e <b>insustituible</b> por el que un ministro de fe deja constancia de que no hubo (art. 59):</p>
<div class="grid">
  <div class="card"><b>Aceptación</b><p class="small">El librado se niega a aceptar.</p></div>
  <div class="card"><b>Fecha de la aceptación</b><p class="small">Solo en letras a plazo desde la vista: la fecha del protesto pasa a ser la de aceptación y fija el inicio del plazo.</p></div>
  <div class="card"><b>Pago</b><p class="small">Al vencimiento no se paga.</p></div>
</div>
<h4 data-sub="prot-bancario">10.5.6.2. Protesto bancario</h4>
<p>La regla es que proteste un notario. Pero si la letra la tiene un banco o una financiera (como beneficiario o endosatario), salvo instrucciones en contrario, el propio banco protesta por falta de pago, sin notario (<span class="norma">art. 71</span>): aviso escrito al aceptante al menos 10 días antes del vencimiento, certificación al dorso y Registro de Letras Protestadas. El detalle está en la profundización de Sandoval.</p>
<h4 data-sub="prot-notarial">10.5.6.3. Procedimiento del protesto notarial</h4>
<div class="flow"><div class="node">Aviso<small>arts. 61 y 69</small></div><div class="arrow">→</div><div class="node">Diligencia<small>no comparece o se niega</small></div><div class="arrow">→</div><div class="node">Constancia<small>al dorso u hoja de prolongación (art. 62)</small></div><div class="arrow">→</div><div class="node y">Registro y Boletín Comercial</div></div>
<ul>
  <li><b>Aviso:</b> en el protesto por falta de pago se entrega en el lugar del pago, el primer o segundo día hábil (no sábado) después del vencimiento. Cita al librado para el <b>día hábil siguiente que no sea sábado</b>. Se entrega a una persona adulta o se deja de la forma más adecuada.</li>
  <li><b>Diligencia:</b> si el librado no comparece, se protesta sin requerimiento; si comparece y se niega, se deja constancia de lo que diga.</li>
  <li><b>Contenido (art. 62):</b> constancia del aviso y su fecha; qué acto no hubo (y el monto, si hubo pago parcial); lo que dijo el librado o que no compareció; número en el registro; impuestos y derechos; fecha, hora y lugar; firma del funcionario.</li>
  <li><b>Publicidad:</b> el notario anota el protesto en su registro y, por el DS 950 de 1928, lo informa a la Cámara de Comercio de Santiago para el <b>Boletín Comercial</b>.</li>
</ul>
<h4 data-sub="prot-perjuicio">10.5.6.4. Perjuicio de la letra y cláusula «devuelta sin gastos»</h4>
<p>Nada reemplaza al protesto: es <b>insustituible</b> (art. 76).</p>
<div class="callout red"><p><b>Perjuicio de la letra (art. 79):</b> si no se protesta en tiempo y forma por falta de pago, <b>caducan las acciones contra el librador, los endosantes y sus avales</b>. El <b>aceptante y su aval nunca se liberan</b>. No hay caducidad si el librado o aceptante quebró antes del vencimiento o si la letra tiene la cláusula <b>«devuelta sin gastos» o «sin protesto»</b>. Esa cláusula no evita el protesto por falta de fecha.</p></div>
<p class="small">En la práctica el perjuicio es un riesgo «teórico»: ningún banco acepta una letra o un pagaré sin la cláusula «sin protesto».</p>
<h4 data-sub="prot-nulidad">10.5.6.5. Nulidad del protesto e insolvencia</h4>
<ul>
  <li><span class="norma">Art. 77</span>: el tribunal puede desechar la nulidad si el vicio no causó un perjuicio efectivo. Un error tipográfico del notario no sirve para perjudicar la letra.</li>
  <li>Si el librado o aceptante entra en <b>liquidación concursal antes del vencimiento</b>, no se requiere protesto: el cobro se somete al procedimiento concursal.</li>
</ul>
<h3 data-sub="extravio">10.5.7. Extravío o destrucción de la letra</h3>
<p>Sin el papel no se pueden ejercer los derechos cambiarios. Si se pierde, se quema o es sustraído, los arts. 88 y ss. dan un procedimiento <b>judicial no contencioso</b> ante el juez civil, con avisos para proteger a terceros. La <b>resolución que lo acoge reemplaza</b> a la letra para requerir la aceptación o el pago (art. 92). Los obligados conservan las excepciones que podían oponer respecto del documento original.</p>`
      },
      {
        id: 'acciones', grupo: '10.5. Actos de la letra de cambio', titulo: '10.5.8. Acciones cambiarias y prescripción',
        html: `
<p>Son los medios que la ley da al portador legítimo (o a quien pagó) para exigir el pago cuando la letra no se paga al vencimiento.</p>
<table class="tabla">
<tr><th></th><th>Acción directa</th><th>Acción de regreso</th><th>Acción de reembolso</th></tr>
<tr><td>Quién</td><td>El portador legítimo (incluso endosatario en cobro o garantía) o el tercero que pagó.</td><td>El portador, si el deudor principal no paga.</td><td>El obligado de regreso que pagó (endosante, avalista).</td></tr>
<tr><td>Contra quién</td><td>El <b>aceptante</b> y su aval.</td><td>El <b>librador</b>, los <b>endosantes</b> y sus avales, solidariamente y sin orden.</td><td>Solo los obligados <b>anteriores</b> en la cadena, nunca los posteriores.</td></tr>
<tr><td>Qué cobra</td><td>Capital, reajustes e intereses pactados, más intereses corrientes desde el vencimiento.</td><td>Lo mismo.</td><td>Lo pagado, más reajustes, intereses y costas.</td></tr>
<tr><td>¿Requiere protesto?</td><td><b>No.</b></td><td><b>Sí</b>, salvo cláusula «sin protesto».</td><td>—</td></tr>
<tr><td>Prescripción</td><td><b>1 año</b> desde el vencimiento (art. 98).</td><td><b>1 año</b> desde el vencimiento.</td><td><b>6 meses</b> desde el pago (art. 99); cada pago abre un nuevo plazo.</td></tr>
</table>
<h3 data-sub="acc-directa">10.5.8.1. Acción cambiaria directa</h3>
<p>Se dirige contra el <b>aceptante</b> y su avalista (salvo que el aval se haya limitado a favor de otra persona). No requiere protesto: la omisión del protesto nunca perjudica la letra respecto de ellos. Prescribe en 1 año desde el vencimiento (art. 98).</p>
<p class="small">Ejemplo: la letra vence el 24-9-2027. El tenedor tiene hasta el 24-9-2028 para demandar al aceptante o a su aval por el capital más intereses corrientes desde el vencimiento, aunque no haya protestado.</p>
<h3 data-sub="acc-regreso">10.5.8.2. Acción de regreso</h3>
<p>Se dirige contra el librador, los endosantes traslaticios y los avales de ambos (art. 79). Todos responden <b>solidariamente</b> y, a diferencia de la fianza civil, el portador no tiene que demandar primero al aceptante: elige a quién cobrar el total. Requiere protesto oportuno por falta de pago, salvo la cláusula «sin protesto» o «devuelta sin gastos». Cobra lo mismo y prescribe en el mismo plazo que la directa.</p>
<h3 data-sub="acc-reembolso">10.5.8.3. Acción de reembolso</h3>
<ul>
  <li>La tiene el obligado de regreso que pagó (un endosante traslaticio o un avalista). Si paga el aceptante o el librador, la cadena cambiaria se extingue.</li>
  <li>Solo contra los obligados <b>anteriores</b> (librador, aceptante, sus avales y endosantes previos), nunca contra los posteriores.</li>
  <li>Cobra lo pagado (o el saldo, si el pago fue parcial) más reajustes, intereses y costas.</li>
  <li>Prescribe en <b>6 meses desde el pago</b> (art. 99). Ejemplo: si el aval de un endosante paga el 24-9-2028, tiene hasta el 24-3-2029 para cobrar a los anteriores; si otro obligado le paga a él ese día, este tiene hasta el 24-9-2029.</li>
</ul>
<h3 data-sub="acc-procesal">10.5.8.4. Aspectos procesales y mérito ejecutivo</h3>
<p>Tres vías para tener título ejecutivo (art. 434 N°4 CPC):</p>
<ol>
  <li><b>Protesto personal</b> al aceptante, si no alega en ese acto la falsedad de su firma.</li>
  <li><b>Notificación judicial del protesto</b> como gestión preparatoria (necesaria contra los obligados de regreso, o si el protesto no fue personal).</li>
  <li><b>Firma autorizada ante notario</b>: da mérito ejecutivo directo respecto de ese firmante. Si solo está autorizada la del librador, al aceptante hay que notificarle judicialmente el protesto.</li>
</ol>
<div class="callout yellow"><p><b>Art. 100:</b> a diferencia del art. 2519 CC, la prescripción se interrumpe <b>solo respecto del obligado a quien se notifica</b> la demanda o gestión. Si solo se demanda al aceptante, la acción contra los demás sigue corriendo.</p></div>
<p class="small">Sin el pago del impuesto de timbres y estampillas (art. 26 DL 3.475), la letra conserva su validez pero pierde el mérito ejecutivo: hay que ir a juicio ordinario. Los notarios responden del impuesto, por eso exigen el comprobante antes de autorizar firmas.</p>`
      },
      {
        id: 'sandoval-forma', grupo: 'Profundización (Sandoval)', titulo: 'Forma, aceptación y solidaridad (Sandoval)',
        html: `
<div class="callout green"><p><b>Fuente de esta sección:</b> Sandoval, <i>Derecho Comercial</i>, tomo II (5ª ed., 2005), cap. II. Complementa los puntos 10.5.1 a 10.5.4.</p></div>
<h3 data-sub="sv-conversion">La letra sin una mención esencial: ¿nula o convertida?</h3>
<p>El <span class="norma">art. 2° Ley 18.092</span> dice que el documento sin las menciones del art. 1° «no valdrá como letra de cambio». El derogado art. 641 CCom era distinto: la letra defectuosa valía como <b>simple pagaré</b> del librador.</p>
<div class="grid dos">
  <div class="card"><b>Tesis de Sandoval (y C. de Talca, 1988)</b><p>No es <b>nula</b>: se convierte en otro acto, un <b>instrumento privado</b> que prueba una deuda. Puede servir para preparar la vía ejecutiva (confesión de deuda o reconocimiento de firma), pero sin necesariedad, literalidad, autonomía, abstracción ni acciones cambiarias.</p></div>
  <div class="card"><b>Caso de la firma equivocada (CS, 1998)</b><p>Un documento cuya única firma era la del <b>librado</b> (no la del librador) no vale como letra. Darle mérito ejecutivo como letra infringe los arts. 434 y 435 CPC.</p></div>
</div>
<ul>
  <li><b>Ejemplares:</b> la Ley 18.092 no regula la emisión en varios ejemplares (resabio del contrato de cambio). Nada impide pactarla como mención facultativa, indicando que los segundos solo valen si no se pagó el primero.</li>
</ul>
<h3 data-sub="sv-aceptacion">Aceptación: retiro y negativa</h3>
<div class="grid dos">
  <div class="card"><b>Retiro de la aceptación (art. 44)</b><p>Las declaraciones cambiarias son irrevocables, pero la ley permite al librado <b>borrar o tachar</b> su aceptación <b>antes de restituir la letra</b>, agregando «retiro mi aceptación» y firmando de nuevo. Se entiende que la aceptación se negó.</p></div>
  <div class="card"><b>Negativa a aceptar</b><p>El librado que no acepta <b>no responde</b> ante el portador: no tiene relación con él. Responde el <b>librador</b>, que garantizó la aceptación, y los endosantes traslaticios, siempre que se proteste la letra por falta de aceptación.</p></div>
</div>
<h3 data-sub="sv-solidaridad">Solidaridad cambiaria (art. 79)</h3>
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
        id: 'sandoval-protesto', grupo: 'Profundización (Sandoval)', titulo: 'Protesto, extravío, prescripción y tacha (Sandoval)',
        html: `
<div class="callout green"><p><b>Fuente de esta sección:</b> Sandoval, tomo II, cap. II, §§ 113-148. Complementa los puntos 10.5.5 a 10.5.8.</p></div>
<div class="callout yellow"><p><b>Terminología:</b> Sandoval (ed. 2005) habla de «quiebra» del portador o del librado. El apunte de Gaspar usa «liquidación concursal». Se refieren a la misma hipótesis de los arts. 57 y 79.</p></div>
<h3 data-sub="sv-protesto-notarial">El protesto notarial paso a paso</h3>
<div class="flow"><div class="node">Notario competente<small>u oficial del Registro Civil donde no hay notario (art. 60)</small></div><div class="arrow">→</div><div class="node">Aviso<small>cita al librado al día hábil siguiente que no sea sábado</small></div><div class="arrow">→</div><div class="node">Verifica la Tesorería<small>si hay depósito suficiente, no hay protesto (art. 70)</small></div><div class="arrow">→</div><div class="node">Requerimiento y acta<small>se anota la respuesta</small></div><div class="arrow">→</div><div class="node y">Registro de Protestos<small>art. 63</small></div></div>
<ul>
  <li><b>Competencia:</b> el protesto por falta de aceptación o de fecha se hace ante el funcionario del lugar donde debe aceptarse (art. 65); el de pago, del lugar de pago (art. 68).</li>
  <li>El notario puede delegar la entrega del aviso en un empleado, con autorización de la Corte de Apelaciones.</li>
  <li>Si el depósito en Tesorería no alcanza, se protesta por el saldo. El funcionario retira el depósito y lo entrega al portador.</li>
  <li>Hecho el protesto, debe devolver la letra a más tardar el día hábil siguiente que no sea sábado, y responde de los perjuicios por demora, irregularidades o extravío.</li>
</ul>
<h3 data-sub="sv-protesto-bancario">El protesto por bancos o financieras (art. 71)</h3>
<div class="grid dos">
  <div class="card"><b>Requisitos copulativos</b><ol><li>Que el banco no reciba <b>instrucciones en contrario</b> del portador (por ejemplo, que proteste un notario).</li><li>Que el banco tenga la letra en su poder como <b>beneficiario o endosatario</b> (cualquier endoso).</li></ol></div>
  <div class="card"><b>Formalidades</b><p>Aviso escrito al aceptante con al menos <b>10 días</b> de anticipación al vencimiento; registro diario de avisos; certificación de la falta de pago al dorso; Registro de Letras Protestadas. Los registros son públicos y se presumen verídicos (presunción simplemente legal).</p></div>
</div>
<p><b>Ineficacia:</b> el protesto bancario no produce efecto si se omite el aviso, el número, la fecha o la firma del representante. Y, según Sandoval, <b>no es un protesto personal</b> para el art. 434 N° 4 CPC: para ejecutar hay que notificar judicialmente el protesto.</p>
<h3 data-sub="sv-extravio">Extravío de la letra (arts. 88 a 96)</h3>
<ol>
  <li>Solicitud ante el <b>juez civil del domicilio del peticionario</b>, identificando la letra.</li>
  <li>Traslado de <b>5 días hábiles</b> a los obligados y al librado, y aviso en el Diario Oficial (días 1 o 15) para que los interesados comparezcan dentro de <b>30 días</b>.</li>
  <li>Sin oposición, el juez autoriza a requerir la aceptación o el pago y puede exigir <b>garantía de resultas</b>. Con oposición, se tramita como <b>incidente</b>.</li>
  <li>En cualquier momento puede pedirse la <b>suspensión provisional</b> de la aceptación o el pago.</li>
  <li>Una <b>copia autorizada de la resolución reemplaza la letra</b>; los obligados conservan sus excepciones. Los plazos que vencían durante el procedimiento se prorrogan hasta el tercer día hábil después de ejecutoriada.</li>
  <li>Solo procede <b>apelación en ambos efectos</b>. La aceptación o el pago autorizados producen los mismos efectos que el ejemplar auténtico (art. 96). También se aplica a la destrucción parcial.</li>
</ol>
<h3 data-sub="sv-prescripcion">Acciones y prescripción</h3>
<ul>
  <li><b>Cambiarias y extracambiarias:</b> las cambiarias nacen de la letra (directa, de regreso y de reembolso). Las extracambiarias nacen de la <b>relación subyacente</b>, se rigen por el derecho común y pueden ser ejecutivas u ordinarias.</li>
  <li><b>Interrupción (art. 100):</b> solo respecto del obligado a quien se notifica la demanda o la gestión necesaria para demandar o preparar la ejecución; también con la notificación de la solicitud de extravío, y por el <b>reconocimiento</b> expreso o tácito del obligado (interrupción natural, art. 2518 CC). Una sentencia citada por Sandoval (C. de San Miguel, 1997) exige la <b>notificación</b>, no la mera presentación de la demanda.</li>
</ul>
<h3 data-sub="sv-tacha">Tacha de falsedad de la firma (art. 110)</h3>
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
      { tipo: 'alternativas', seccion: 'antecedentes', sub: 'lc-cc-supuestos', enunciado: '¿Qué norma independizó la letra de cambio del contrato de cambio en Chile?', opciones: ['El DL 777 de 1925', 'La Ley 18.092 de 1981', 'La Ley 18.552', 'El art. 620 CCom'], correcta: 0, explicacion: 'Suprimió la distancia loci y las defensas del mandato, como la falta de provisión de fondos.' },
      { tipo: 'vf', seccion: 'antecedentes', sub: 'lc-cc-supuestos', enunciado: 'El librado que acepta una letra puede negarse a pagar porque el librador no le proveyó fondos.', respuesta: false, explicacion: 'Esa defensa era propia de la letra como mandato. Hoy el aceptante se obliga de forma abstracta.' },
      { tipo: 'alternativas', seccion: 'antecedentes', sub: 'lc-cc-concepto', enunciado: '¿Qué era el «cambio seco»?', opciones: ['Un préstamo encubierto con un librado ficticio para eludir la usura', 'El traslado real de dinero entre ciudades', 'El cambio de divisas en el Banco Central', 'La letra sin aceptación'], correcta: 0, explicacion: 'El cambio húmedo era la operación real de traslado.' },
      { tipo: 'relacionar', seccion: 'antecedentes', sub: 'lc-cc-intervinientes', enunciado: 'Relaciona cada interviniente del contrato de cambio con su papel.', pares: [['Viajero (A)', 'Entrega el dinero en la ciudad de origen'], ['Cambista (B)', 'Se obliga a hacer pagar en el destino'], ['Corresponsal (C)', 'Paga en el destino; no participa del contrato']], explicacion: 'De la carta del cambista al corresponsal nació la letra.' },
      { tipo: 'vf', seccion: 'concepto', sub: 'lc-definicion', enunciado: 'La Ley 18.092 contiene una definición legal de la letra de cambio.', respuesta: false, explicacion: 'Solo enumera sus menciones. La definición citada en clases es de la Corte de Apelaciones de Santiago (1983).' },
      { tipo: 'alternativas', seccion: 'concepto', sub: 'lc-caracteristicas', enunciado: 'Según el art. 12 de la Ley 18.092, girar una letra para pagar una compraventa…', opciones: ['No nova la obligación de la compraventa: coexisten ambas acciones', 'Extingue el precio por novación', 'Obliga a cobrar las dos deudas', 'Requiere notificar al comprador'], correcta: 0, explicacion: 'El acreedor no puede cobrar dos veces, pero si la letra se perjudica conserva la acción causal.' },
      { tipo: 'alternativas', seccion: 'concepto', sub: 'lc-caracteristicas', enunciado: '¿Qué norma establece que todos los firmantes de la letra responden solidariamente ante el portador?', opciones: ['Art. 79 Ley 18.092', 'Art. 7° Ley 18.092', 'Art. 28 Ley 18.092', 'Art. 1907 CC'], correcta: 0, explicacion: 'Libradores, aceptantes y endosantes quedan solidariamente obligados.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-esenciales', enunciado: 'Si el monto de la letra difiere entre lo escrito en palabras y en cifras, ¿qué vale?', opciones: ['Lo escrito en palabras', 'Lo escrito en cifras', 'El monto menor', 'La letra es nula'], correcta: 0, explicacion: 'Art. 6° Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-naturaleza', enunciado: 'Una letra no indica el vencimiento. ¿Qué ocurre?', opciones: ['Se entiende pagadera a la vista', 'No vale como letra', 'Vence en un año desde el giro', 'Vence cuando el librado acepte'], correcta: 0, explicacion: 'Es una mención de la naturaleza que la ley suple.' },
      { tipo: 'vf', seccion: 'giro', sub: 'giro-esenciales', enunciado: 'Una letra de cambio puede emitirse y firmarse válidamente por WhatsApp gracias a la equivalencia funcional.', respuesta: false, explicacion: 'En materia cambiaria la firma debe ser física; no rige la equivalencia funcional.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-accidentales', enunciado: '«Ordeno a Juan pagar $1.000.000 a Pedro, siempre que llueva en Talca mañana». ¿Es letra de cambio?', opciones: ['No: la orden de pago debe ser incondicional', 'Sí: la condición se tiene por no escrita', 'Sí, pero solo vale si llueve', 'Sí, como pagaré'], correcta: 0, explicacion: 'La condición en el giro destruye la esencia. En el endoso, en cambio, la condición se tiene por no escrita.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-librador', enunciado: '¿Puede el librador eximirse de responsabilidad?', opciones: ['Solo de la garantía de aceptación; la cláusula que lo exime del pago se tiene por no escrita', 'De ambas garantías', 'Solo de la garantía de pago', 'De ninguna'], correcta: 0, explicacion: 'Art. 10 Ley 18.092.' },
      { tipo: 'relacionar', seccion: 'giro', sub: 'giro-menciones', enunciado: 'Relaciona cada mención omitida con la solución legal.', pares: [['Lugar de emisión', 'Domicilio del librador'], ['Lugar de pago', 'Domicilio del librado'], ['Vencimiento', 'A la vista'], ['Firma del librador', 'No vale como letra']], explicacion: 'Las tres primeras son de la naturaleza; la firma es esencial.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-modificaciones', enunciado: 'Alguien adultera una letra aumentando el monto. ¿Cómo responden los firmantes?', opciones: ['Los anteriores según el texto original; los posteriores según el nuevo', 'Todos según el texto nuevo', 'Todos según el original', 'La letra es nula para todos'], correcta: 0, explicacion: 'Art. 15 Ley 18.092.' },
      { tipo: 'vf', seccion: 'giro', sub: 'giro-accidentales', enunciado: 'En la letra de cambio los intereses se devengan aunque no se pacten, igual que en una operación de crédito de dinero.', respuesta: false, explicacion: 'En la letra los intereses son una mención accidental: deben pactarse (art. 13).' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-blanco', enunciado: 'La clínica llena un pagaré en blanco por más de lo instruido y lo endosa a un banco de buena fe. ¿Qué pasa?', opciones: ['El deudor debe pagar al banco; solo puede reclamar contra la clínica', 'El deudor puede oponer el abuso al banco', 'El pagaré es nulo', 'El banco debe devolverlo a la clínica'], correcta: 0, explicacion: 'Art. 11: el abuso no es oponible al tenedor de buena fe.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-elementos', enunciado: 'Un endoso firmado al dorso que no expresa calidad se presume…', opciones: ['Traslaticio de dominio', 'En cobro', 'En garantía', 'Nulo'], correcta: 0, explicacion: 'Art. 21 Ley 18.092, si lo firma el dueño.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-fondo', enunciado: '¿Qué efecto tiene un endoso parcial?', opciones: ['Ninguno', 'Transfiere la parte endosada', 'Vale como endoso en cobro', 'Divide la letra en dos'], correcta: 0, explicacion: 'Art. 19: no produce efecto alguno.' },
      { tipo: 'vf', seccion: 'endoso', sub: 'end-fondo', enunciado: 'Si el endoso se sujeta a una condición, el endoso es nulo.', respuesta: false, explicacion: 'Art. 19: la condición se reputa no escrita y el endoso vale.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-inoponibilidad', enunciado: '¿Qué endoso NO purga las excepciones personales del deudor contra el endosante?', opciones: ['El endoso en cobro', 'El endoso traslaticio', 'El endoso en garantía', 'El endoso en blanco traslaticio'], correcta: 0, explicacion: 'El endosatario en cobro actúa en representación del endosante.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-limitaciones', enunciado: 'El librador pone «no endosable». ¿Cómo se transfiere el dominio de la letra?', opciones: ['Por las reglas de los créditos nominativos (cesión), aunque puede endosarse en cobro', 'Por endoso traslaticio común', 'No puede transferirse de ninguna forma', 'Por endoso en blanco'], correcta: 0, explicacion: 'Art. 18 Ley 18.092.' },
      { tipo: 'vf', seccion: 'endoso', sub: 'end-portador', enunciado: 'El que paga una letra debe verificar la autenticidad de las firmas de todos los endosantes.', respuesta: false, explicacion: 'Art. 31: solo verifica la continuidad de los endosos y la identidad de quien cobra.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-portador', enunciado: 'Según el art. 26, ¿quién es portador legítimo?', opciones: ['Quien justifica su derecho por una serie no interrumpida de endosos, aunque el último esté en blanco', 'Quien figura como beneficiario original', 'Quien la tiene materialmente, sin más', 'El último endosatario nombrado expresamente'], correcta: 0, explicacion: 'Los endosos tachados se tienen por no escritos.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-inverlink', enunciado: 'En el caso Inverlink, ¿qué norma protegió a los adquirentes de buena fe de los depósitos de la Corfo?', opciones: ['El art. 28 Ley 18.092 (inoponibilidad de excepciones), con la Ley 18.552', 'La acción reivindicatoria del Código Civil', 'El art. 1907 CC', 'El art. 57 Ley 18.092'], correcta: 0, explicacion: 'Por eso el Estado no pudo recuperar los títulos de manos de terceros de buena fe.' },
      { tipo: 'relacionar', seccion: 'endoso', sub: 'end-clases', enunciado: 'Relaciona cada endoso con lo que puede hacer el endosatario.', pares: [['Traslaticio', 'Endosar en cualquier forma'], ['En cobro', 'Cobrar con facultades judiciales; solo endosar en cobro'], ['En garantía', 'Cobrar y aplicar el valor a su crédito, rindiendo cuenta']], explicacion: 'Arts. 21, 29 y 30.' },
      { tipo: 'vf', seccion: 'endoso', sub: 'end-limitaciones', enunciado: 'El endoso de una letra protestada por falta de pago solo produce los efectos de una cesión ordinaria.', respuesta: true, explicacion: 'Art. 32 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'aceptacion-aval', sub: 'aval', enunciado: 'Una firma suelta de X en el anverso de la letra (X no es librador ni librado) es…', opciones: ['Un aval', 'Una aceptación', 'Un endoso', 'Nada'], correcta: 0, explicacion: 'Art. 46 Ley 18.092. La sola firma del librado en el anverso sería aceptación.' },
      { tipo: 'alternativas', seccion: 'aceptacion-aval', sub: 'acep', enunciado: 'El librado escribe «acepto si apruebas el examen». ¿Qué efecto tiene?', opciones: ['Equivale a un rechazo de la aceptación', 'Es una aceptación condicional válida', 'Es una aceptación pura y simple', 'Es un aval'], correcta: 0, explicacion: 'Art. 42: solo se admite restringirla a una parte de la suma.' },
      { tipo: 'vf', seccion: 'aceptacion-aval', sub: 'acep', enunciado: 'El librado puede aceptar solo una parte de la suma de la letra.', respuesta: true, explicacion: 'Art. 42 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'aceptacion-aval', sub: 'aval-limites', enunciado: 'Sin limitaciones, ¿en qué términos responde el avalista?', opciones: ['En los mismos términos que el aceptante', 'Solo subsidiariamente, como un fiador', 'Solo por la mitad', 'Solo frente al beneficiario original'], correcta: 0, explicacion: 'Art. 47: puede limitarse a tiempo, caso, cantidad o persona.' },
      { tipo: 'vf', seccion: 'aceptacion-aval', sub: 'aval', enunciado: 'Los derechos de un aval otorgado en documento separado se transfieren con el endoso de la letra.', respuesta: false, explicacion: 'Art. 46: no se transfieren por endoso.' },
      { tipo: 'alternativas', seccion: 'pago-protesto', sub: 'pago-parcial', enunciado: 'Vencida la letra, el portador puede rechazar un pago parcial si…', opciones: ['Es inferior a la mitad del valor del documento', 'Es inferior al total', 'Lo ofrece un avalista', 'Nunca puede rechazarlo'], correcta: 0, explicacion: 'Art. 54 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'pago-protesto', sub: 'prot-perjuicio', enunciado: 'No se protestó a tiempo una letra sin cláusula «sin protesto». ¿Contra quién se pierde la acción cambiaria?', opciones: ['Contra el librador, los endosantes y sus avales; no contra el aceptante ni su aval', 'Contra todos los firmantes', 'Solo contra el aceptante', 'Contra nadie'], correcta: 0, explicacion: 'Es el perjuicio de la letra (art. 79).' },
      { tipo: 'relacionar', seccion: 'pago-protesto', sub: 'prot-supuestos', enunciado: 'Relaciona cada protesto con su supuesto.', pares: [['Por falta de aceptación', 'El librado se niega a aceptar'], ['Por falta de fecha', 'Letra a plazo desde la vista sin fecha de aceptación'], ['Por falta de pago', 'No se paga al vencimiento']], explicacion: 'Art. 59 Ley 18.092.' },
      { tipo: 'vf', seccion: 'pago-protesto', sub: 'prot-perjuicio', enunciado: 'La cláusula «devuelta sin gastos» evita también el protesto por falta de fecha de aceptación.', respuesta: false, explicacion: 'Ese protesto es indispensable para fijar el vencimiento.' },
      { tipo: 'alternativas', seccion: 'pago-protesto', sub: 'pago-consignacion', enunciado: 'Antes de protestar por falta de pago, el ministro de fe debe verificar…', opciones: ['Si se depositó el pago en la tesorería de la comuna de pago', 'Si las firmas de los endosantes son auténticas', 'Si el librador tiene fondos', 'Si hay aval'], correcta: 0, explicacion: 'Art. 70: si el depósito alcanza, no hay protesto.' },
      { tipo: 'vf', seccion: 'pago-protesto', sub: 'prot-nulidad', enunciado: 'El tribunal puede desechar la nulidad de un protesto si el vicio no causó un perjuicio efectivo.', respuesta: true, explicacion: 'Art. 77 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'acciones', sub: 'acc-reembolso', enunciado: '¿En qué plazo prescribe la acción de reembolso?', opciones: ['6 meses desde el pago', '1 año desde el vencimiento', '4 años', '6 meses desde el vencimiento'], correcta: 0, explicacion: 'Cada pago abre un nuevo plazo de 6 meses.' },
      { tipo: 'alternativas', seccion: 'acciones', sub: 'acc-directa', enunciado: '¿Qué acción no requiere protesto para conservarse?', opciones: ['La acción directa contra el aceptante y su aval', 'La acción de regreso contra los endosantes', 'La acción de regreso contra el librador', 'Ninguna'], correcta: 0, explicacion: 'El aceptante nunca se libera por el perjuicio de la letra.' },
      { tipo: 'vf', seccion: 'acciones', sub: 'acc-procesal', enunciado: 'Notificar la demanda al aceptante interrumpe la prescripción respecto de todos los obligados.', respuesta: false, explicacion: 'Art. 100: solo respecto del obligado notificado.' },
      { tipo: 'alternativas', seccion: 'acciones', sub: 'acc-reembolso', enunciado: 'El avalista de un endosante pagó la letra. ¿A quién puede cobrarle?', opciones: ['Solo a los obligados anteriores en la cadena', 'A cualquier firmante, incluso los posteriores', 'Solo al endosante avalado', 'A nadie'], correcta: 0, explicacion: 'Acción de reembolso: nunca contra los posteriores.' },
      { tipo: 'vf', seccion: 'acciones', sub: 'acc-procesal', enunciado: 'Si no se pagó el impuesto de timbres y estampillas, la letra es nula.', respuesta: false, explicacion: 'Pierde el mérito ejecutivo, pero conserva su validez.' },

      { tipo: 'oral', seccion: 'antecedentes', sub: 'lc-contrato', enunciado: 'Explique la evolución desde el contrato de cambio hasta la letra de cambio abstracta.', puntos: ['Tres etapas: función probatoria, medio de crédito (a la orden, endoso), autonomía y abstracción (Einert).', 'Contrato de cambio (art. 620 CCom): consensual, bilateral, oneroso; dinero presente por ausente; eludía la usura (cambio húmedo y seco).', 'Intervinientes: viajero, cambista y corresponsal.', 'La letra como mandato (art. 632 derogado): mandato, distancia loci, traslado; defensa de falta de provisión.', 'DL 777 de 1925: independencia; el aceptante se obliga sin poder alegar falta de provisión.'], norma: 'Arts. 620-622 CCom; DL 777 de 1925' },
      { tipo: 'oral', seccion: 'giro', sub: 'lc-giro', enunciado: 'Explique el giro de la letra de cambio y sus menciones esenciales, de la naturaleza y accidentales.', puntos: ['Giro: acto unilateral y solemne del librador.', 'Esenciales (art. 1°): indicación de letra, fecha, orden incondicional (art. 6° palabras sobre cifras), beneficiario, librado, firma física (arts. 8° y 9°). Si falta una, no vale como letra (art. 2°).', 'De la naturaleza: lugar de emisión (domicilio del librador), lugar de pago (domicilio del librado), vencimiento (a la vista); cuatro formas del art. 48.', 'Letra en blanco (art. 11).', 'Accidentales (art. 13): comuna, reajuste, intereses, devuelta sin gastos, otras que no alteren la esencia.', 'Modificación (art. 16) y adulteración (art. 15). Librador: garantías de aceptación y pago (art. 10).'], norma: 'Arts. 1°-16 Ley 18.092' },
      { tipo: 'oral', seccion: 'endoso', sub: 'end-clases', enunciado: 'Explique el endoso: clases, requisitos y efectos.', puntos: ['Art. 17: transfiere el dominio, entrega en cobro o constituye prenda; al dorso y firmado.', 'Puro y simple (condición no escrita) y total (el parcial no produce efecto) (art. 19).', 'Presunción de traslaticio (art. 21); endoso en blanco (arts. 23-24).', 'Traslaticio: garantía solidaria (art. 25), inoponibilidad (art. 28; Inverlink).', 'En cobro (art. 29): mandato, no purga excepciones; en garantía (art. 30): cobrar e imputar.', 'Limitaciones: sin responsabilidad, no endosable (arts. 18 y 25), letra vencida (art. 32). Portador legítimo (art. 26) y deber del que paga (art. 31).'], norma: 'Arts. 17-32 Ley 18.092' },
      { tipo: 'oral', seccion: 'aceptacion-aval', sub: 'acep', enunciado: 'Explique la aceptación y el aval de la letra de cambio.', puntos: ['Aceptación: acto unilateral del librado (art. 33); sola firma en el anverso; fecha obligatoria en letras a plazo desde la vista (art. 36).', 'Pura y simple; se admite la parcial; otra reserva equivale a rechazo (art. 42).', 'Si no acepta: garantía de aceptación del librador y protesto.', 'Aval (art. 46): anverso (sola firma), dorso («por aval»), documento separado (no circula con el endoso).', 'Responde como el aceptante; limitable a tiempo, caso, cantidad o persona (art. 47).', 'Diferencia con la fianza civil: unilateral, autónomo e incausado.'], norma: 'Arts. 33-47 Ley 18.092' },
      { tipo: 'oral', seccion: 'pago-protesto', sub: 'protesto', enunciado: 'Explique el protesto y el perjuicio de la letra.', puntos: ['Protesto: acto formal e insustituible de un ministro de fe; por falta de aceptación, de fecha o de pago (art. 59).', 'Procedimiento notarial (arts. 61, 62, 69) y protesto bancario (art. 71).', 'Consignación previa en la tesorería comunal (art. 70).', 'Perjuicio (art. 79): caducan las acciones contra librador, endosantes y avales; no contra el aceptante ni su aval.', 'Excepciones: quiebra del aceptante antes del vencimiento y cláusula devuelta sin gastos (art. 74).', 'Nulidad solo con perjuicio efectivo (art. 77).'], norma: 'Arts. 59-79 Ley 18.092' },
      { tipo: 'oral', seccion: 'acciones', sub: 'acc-directa', enunciado: 'Explique las acciones cambiarias y su prescripción.', puntos: ['Directa: contra el aceptante y su aval; sin protesto; 1 año desde el vencimiento.', 'Regreso: contra librador, endosantes y avales, solidaria; requiere protesto salvo cláusula; 1 año.', 'Reembolso: el que paga contra los anteriores; 6 meses desde el pago; cada pago abre un plazo nuevo.', 'Si paga el aceptante o el librador, se extingue la cadena.', 'Art. 100: interrupción solo respecto del notificado.', 'Mérito ejecutivo (art. 434 N°4 CPC): protesto personal, notificación judicial del protesto o firma autorizada; impuesto de timbres.'], norma: 'Arts. 79-100 Ley 18.092; art. 434 N°4 CPC' },

      { tipo: 'alternativas', seccion: 'sandoval-forma', sub: 'sv-conversion', enunciado: 'Según Sandoval, ¿qué es un documento al que le falta una mención esencial del art. 1° de la Ley 18.092?', opciones: ['No es nulo: se convierte en un instrumento privado sin los beneficios cambiarios', 'Es nulo absolutamente', 'Vale como pagaré del librador', 'Vale como letra si el deudor no reclama'], correcta: 0, explicacion: 'Puede servir para preparar la vía ejecutiva por confesión o reconocimiento de firma. La regla del pagaré era la del derogado art. 641 CCom.' },
      { tipo: 'vf', seccion: 'sandoval-forma', sub: 'sv-conversion', enunciado: 'Bajo el derogado art. 641 CCom, la letra a la que faltaba una formalidad valía como simple pagaré firmado por el librador.', respuesta: true, explicacion: 'Hoy el art. 2° dice que «no valdrá como letra de cambio».' },
      { tipo: 'alternativas', seccion: 'sandoval-forma', sub: 'sv-conversion', enunciado: '¿Qué resolvió la Corte Suprema (1998) sobre un documento cuya única firma era la del librado?', opciones: ['Que no vale como letra y darle mérito ejecutivo infringe los arts. 434 y 435 CPC', 'Que vale como letra aceptada', 'Que vale como pagaré del librado', 'Que es nulo y obliga a indemnizar'], correcta: 0, explicacion: 'Faltaba la firma del librador, mención esencial.' },
      { tipo: 'alternativas', seccion: 'sandoval-forma', sub: 'sv-aceptacion', enunciado: '¿Cómo puede el librado retirar su aceptación según el art. 44?', opciones: ['Borrándola o tachándola antes de restituir la letra, con la expresión «retiro mi aceptación» y su firma', 'Avisando al librador por carta dentro de 30 días', 'Mediante protesto', 'No puede: la aceptación es irrevocable'], correcta: 0, explicacion: 'Cumplidos esos requisitos, la aceptación se entiende negada.' },
      { tipo: 'vf', seccion: 'sandoval-forma', sub: 'sv-aceptacion', enunciado: 'Si el librado se niega a aceptar, responde ante el portador por los perjuicios.', respuesta: false, explicacion: 'No tiene relación con el portador. Responde el librador, que garantizó la aceptación, previo protesto.' },
      { tipo: 'alternativas', seccion: 'sandoval-forma', sub: 'sv-solidaridad', enunciado: 'Según Sandoval, ¿en qué se diferencia la solidaridad cambiaria de la civil?', opciones: ['Los endosantes no son codeudores de una deuda común, sino fiadores solidarios con reembolso contra el deudor principal', 'En la cambiaria no se puede cobrar el total a ninguno', 'La cambiaria es convencional y la civil legal', 'No hay diferencia'], correcta: 0, explicacion: 'Por eso el que paga solo se dirige contra los obligados anteriores.' },
      { tipo: 'alternativas', seccion: 'sandoval-forma', sub: 'sv-solidaridad', enunciado: 'Por el art. 82, ¿qué acción tiene el aceptante que paga la letra?', opciones: ['Ninguna acción cambiaria de reembolso contra los demás firmantes', 'Reembolso contra todos los endosantes', 'Reembolso solo contra el librador', 'Acción directa contra su avalista'], correcta: 0, explicacion: 'Lo mismo vale para el librador que paga.' },
      { tipo: 'vf', seccion: 'sandoval-forma', sub: 'sv-solidaridad', enunciado: 'Un tercero ajeno a la letra puede pagarla y se subroga en los derechos del portador.', respuesta: true, explicacion: 'Aplica el art. 1572 CC; el portador anota en la letra el nombre de quien pagó.' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', sub: 'sv-protesto-notarial', enunciado: '¿Quién protesta una letra en una comuna que no es asiento de notario?', opciones: ['El oficial del Registro Civil del lugar', 'El juez de policía local', 'El tesorero comunal', 'Nadie: debe ir a la comuna vecina'], correcta: 0, explicacion: 'Art. 60 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', sub: 'sv-protesto-notarial', enunciado: '¿Qué hace el funcionario si hay un depósito en Tesorería, pero no alcanza para pagar la letra, intereses y reajustes?', opciones: ['Deja constancia y protesta por el saldo insoluto', 'No protesta', 'Devuelve el depósito al deudor', 'Suspende el protesto 30 días'], correcta: 0, explicacion: 'Si alcanza, se omite el protesto (art. 70).' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', sub: 'sv-protesto-bancario', enunciado: '¿Cuáles son los requisitos copulativos para que un banco proteste por falta de pago (art. 71)?', opciones: ['Tener la letra como beneficiario o endosatario y no recibir instrucciones en contrario del portador', 'Ser el aceptante y tener autorización de la CMF', 'Tener la letra en endoso en garantía y avisar al notario', 'Que la letra sea en UF'], correcta: 0, explicacion: 'Cualquier clase de endoso sirve.' },
      { tipo: 'vf', seccion: 'sandoval-protesto', sub: 'sv-protesto-bancario', enunciado: 'Según Sandoval, el protesto hecho por un banco permite ejecutar directamente, como un protesto personal del art. 434 N° 4 CPC.', respuesta: false, explicacion: 'No es personal: hay que notificar judicialmente el protesto para preparar la vía ejecutiva.' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', sub: 'sv-extravio', enunciado: '¿Qué reemplaza a la letra extraviada para requerir su aceptación o pago?', opciones: ['Una copia autorizada de la resolución judicial que acoge la solicitud', 'Una declaración jurada del portador', 'Un duplicado firmado por el librador', 'El acta de protesto'], correcta: 0, explicacion: 'Los obligados conservan las excepciones que tenían respecto del original.' },
      { tipo: 'relacionar', seccion: 'sandoval-protesto', sub: 'sv-extravio', enunciado: 'Relaciona cada paso del procedimiento de extravío con su plazo o regla.', pares: [['Traslado a obligados y librado', '5 días hábiles'], ['Comparecencia de interesados tras el aviso', '30 días'], ['Prórroga de plazos vencidos durante el procedimiento', 'Tercer día hábil tras quedar ejecutoriada'], ['Recurso contra la resolución final', 'Apelación en ambos efectos']], explicacion: 'Arts. 88 a 96 Ley 18.092, según Sandoval.' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', sub: 'sv-prescripcion', enunciado: 'Además de la demanda notificada, ¿qué otra cosa interrumpe la prescripción de las acciones cambiarias respecto de un obligado?', opciones: ['Su reconocimiento expreso o tácito de la calidad de obligado', 'La mera presentación de la demanda sin notificar', 'El protesto notarial', 'El aviso de cobro del banco'], correcta: 0, explicacion: 'Es la interrupción natural (art. 2518 CC). La notificación de la solicitud de extravío también interrumpe.' },
      { tipo: 'vf', seccion: 'sandoval-protesto', sub: 'sv-tacha', enunciado: 'Quien tacha de falsa su firma en la gestión preparatoria y luego se prueba que es auténtica puede cometer un delito.', respuesta: true, explicacion: 'Art. 110 Ley 18.092: penas del art. 467 CP, salvo justa causa de error o título falso.' },
      { tipo: 'alternativas', seccion: 'sandoval-protesto', sub: 'sv-prescripcion', enunciado: '¿Qué son las acciones extracambiarias?', opciones: ['Las que nacen de la relación subyacente y se rigen por el derecho común', 'Las acciones de regreso contra los endosantes', 'Las que tiene el avalista contra el avalado', 'Las acciones penales por giro doloso'], correcta: 0, explicacion: 'Pueden ser ejecutivas u ordinarias.' },
      { tipo: 'oral', seccion: 'sandoval-protesto', sub: 'sv-extravio', enunciado: 'Explique el procedimiento de extravío de la letra de cambio.', puntos: ['Fundamento: «desincorporar» la prestación del documento perdido o destruido.', 'Solicitud ante el juez civil del domicilio del peticionario; traslado de 5 días; aviso en el Diario Oficial y 30 días.', 'Sin oposición: autorización para requerir aceptación o pago, con posible garantía; con oposición: incidente.', 'Suspensión provisional; la copia de la resolución reemplaza la letra; los obligados conservan sus excepciones.', 'Prórroga de plazos, apelación en ambos efectos y mismos efectos que el original (art. 96).'], norma: 'Arts. 88 a 96 Ley 18.092' },
      { tipo: 'oral', seccion: 'sandoval-forma', sub: 'sv-solidaridad', enunciado: 'Explique la solidaridad cambiaria y sus diferencias con la solidaridad civil.', puntos: ['Fuente legal (art. 79): libradores, aceptantes y endosantes responden del total.', 'Los endosantes son más bien fiadores solidarios, no codeudores de una deuda común.', 'Reembolso solo contra los obligados anteriores (art. 82 inc. 2°); librador y aceptante que pagan no tienen reembolso.', 'Solo el endoso traslaticio obliga (art. 25); puede excluirse en el endoso.', 'Depende del protesto oportuno; si no, la letra se perjudica.'], norma: 'Arts. 25, 79 y 82 Ley 18.092' },

      { tipo: 'alternativas', seccion: 'antecedentes', sub: 'lc-antecedentes', enunciado: '¿Qué caracteriza a la tercera etapa en la evolución de la letra de cambio?', opciones: ['Se desvincula de su causa y pasa a ser una promesa de pago abstracta (escuela alemana, Einert)', 'Es una carta que solo prueba un contrato de cambio', 'Incorpora la cláusula a la orden y permite el descuento', 'Pasa a ser dinero de curso forzoso'], correcta: 0, explicacion: 'Las tres etapas son: función probatoria, medio de crédito y autonomía y abstracción.' },
      { tipo: 'vf', seccion: 'antecedentes', sub: 'lc-contrato', enunciado: 'Tras la Ley 18.092, el contrato de cambio sigue regulado en detalle en los arts. 620 a 781 del Código de Comercio.', respuesta: false, explicacion: 'La reforma de 1981 derogó casi todos esos artículos: subsiste solo en los arts. 620 a 622 CCom.' },
      { tipo: 'alternativas', seccion: 'antecedentes', sub: 'lc-cc-letra', enunciado: '¿Cómo definía la letra de cambio el derogado art. 632 CCom?', opciones: ['Como un mandato escrito por el cual el librador ordena al librado pagar a la persona designada o a su orden', 'Como un documento incausado que reemplaza al dinero', 'Como una promesa unilateral de pago del librador', 'Como un contrato de cambio solemne'], correcta: 0, explicacion: 'Nació como la carta del cambista a su corresponsal. La idea de «documento incausado» viene de la Corte de Apelaciones de Santiago (1983).' },
      { tipo: 'alternativas', seccion: 'concepto', sub: 'lc-caracteristicas', enunciado: 'En una letra aparece la firma falsa de un endosante. ¿Qué pasa con las obligaciones de los demás firmantes?', opciones: ['Siguen válidas: rige la independencia de las firmas (art. 7°)', 'Son nulas todas', 'Solo subsiste la del librador', 'Quedan suspendidas hasta que se aclare la falsedad'], correcta: 0, explicacion: 'Las firmas falsas, de incapaces o de personas imaginarias no invalidan las obligaciones de los demás firmantes.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'lc-actos', enunciado: 'Librador y beneficiario acuerdan de palabra cobrar la letra tres meses después de la fecha escrita. El beneficiario la endosa a un tercero de buena fe. ¿Cuándo puede cobrar el tercero?', opciones: ['En la fecha escrita en la letra: el pacto verbal no le es oponible', 'Tres meses después de la fecha escrita', 'Solo cuando el librador lo autorice', 'Nunca: el pacto anula la letra'], correcta: 0, explicacion: '«Lo que no está en el título no existe»: el tenedor se atiene a lo escrito.' },
      { tipo: 'vf', seccion: 'giro', sub: 'lc-actos', enunciado: 'El librado queda obligado cambiariamente desde que el librador gira la letra a su cargo.', respuesta: false, explicacion: 'Mientras no firme la aceptación, el librado no tiene obligación cambiaria. Al girar, el único obligado es el librador.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'lc-giro', enunciado: '¿Qué es el giro de la letra de cambio?', opciones: ['El acto formal, solemne y unilateral por el que el librador crea la letra con la orden incondicional de pago', 'El acuerdo entre librador y librado para pagar', 'La firma del librado que asume la obligación', 'La transferencia de la letra a un tercero'], correcta: 0, explicacion: 'La firma del librado es la aceptación; la transferencia es el endoso.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-intervinientes', enunciado: 'El librador gira la letra a su propio cargo (librador y librado son la misma persona). ¿A qué equivale?', opciones: ['A un pagaré: el emisor se obliga directamente, sin aceptación', 'A una letra nula', 'A un cheque', 'A un endoso en blanco'], correcta: 0, explicacion: 'Art. 3° Ley 18.092. También puede girarse a la orden del propio librador.' },
      { tipo: 'vf', seccion: 'giro', sub: 'giro-naturaleza', enunciado: 'Una letra con vencimientos sucesivos (en cuotas) vale como letra de cambio.', respuesta: false, explicacion: 'Art. 48: no vale como letra la girada a vencimientos sucesivos. En el pagaré sí se admiten cuotas; con letras, hay que girar una por cuota.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-naturaleza', enunciado: 'El apunte dice que el lugar de pago de la letra «se indica, pero no se estipula». ¿Por qué?', opciones: ['Porque estipular exige acuerdo de voluntades y el giro es un acto unilateral del librador', 'Porque el lugar de pago lo fija siempre la ley', 'Porque lo decide el librado al aceptar', 'Porque es una mención esencial'], correcta: 0, explicacion: 'Está marcada como pregunta de examen. Si se omite, se paga en el domicilio del librado.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-accidentales', enunciado: 'La cláusula «sin protesto» la pone un endosante, no el librador. ¿Respecto de quién produce efectos?', opciones: ['Solo respecto de ese endosante', 'Respecto de todos los firmantes', 'Solo respecto del aceptante', 'De nadie: solo vale puesta por el librador'], correcta: 0, explicacion: 'Art. 74: puesta por el librador, produce efectos respecto de todos los firmantes; por otro obligado, solo respecto de él.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-modificaciones', enunciado: 'Una letra ya circuló por endosos y se modifica su texto de forma visible. ¿A quién obliga el nuevo texto?', opciones: ['A quienes firman después de la modificación o la consienten con una nueva firma', 'A todos los firmantes', 'Solo al librador', 'A nadie: la letra se anula'], correcta: 0, explicacion: 'Antes de circular, el librador modifica libremente. Quienes firmaron antes siguen obligados por el texto que vieron (art. 16).' },
      { tipo: 'vf', seccion: 'giro', sub: 'giro-blanco', enunciado: 'Para que una letra en blanco exista y valga, basta que tenga la firma de al menos uno de los obligados.', respuesta: true, explicacion: 'Art. 11: después, un tenedor legítimo completa las menciones según las instrucciones de llenado.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-intro', enunciado: '¿Desde cuándo puede endosarse una letra de cambio?', opciones: ['Desde que existe, con la firma del librador, aunque el librado no haya aceptado', 'Solo después de la aceptación', 'Solo al vencimiento', 'Solo después del protesto'], correcta: 0, explicacion: 'Puede endosarse antes o después de la aceptación.' },
      { tipo: 'vf', seccion: 'endoso', sub: 'end-forma', enunciado: 'Una firma de transferencia estampada en el anverso de la letra constituye endoso.', respuesta: false, explicacion: 'Art. 17: el endoso va al dorso de la letra o en una hoja de prolongación. En el anverso no es endoso.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-forma', enunciado: 'A es acreedor prendario de una letra (la recibió por endoso en garantía) y quiere que su abogado Z la cobre. ¿Qué endoso puede hacerle?', opciones: ['Solo un endoso en cobro', 'Un endoso traslaticio', 'Un nuevo endoso en garantía', 'Ninguno'], correcta: 0, explicacion: 'No es dueño, así que no puede transferir el dominio, y no hay prenda sobre prenda.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-elementos', enunciado: 'Un endoso no indica fecha. ¿Qué presume la ley?', opciones: ['Que se extendió antes del vencimiento de la letra', 'Que se hizo el día del giro', 'Que es nulo', 'Que se hizo después del protesto'], correcta: 0, explicacion: 'Art. 22. Si falta el lugar, se presume hecho en el domicilio del endosante.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-valevista', enunciado: 'En la compra de una casa con vale vista, ¿por qué se emite el vale vista a nombre del propio comprador?', opciones: ['Para poder cobrarlo él mismo si el negocio se frustra antes de firmar', 'Porque la ley prohíbe emitirlo a nombre del vendedor', 'Para evitar el impuesto de timbres', 'Para que el notario pueda cobrarlo'], correcta: 0, explicacion: 'Al firmar la escritura lo endosa al vendedor y queda en custodia del notario con instrucciones notariales.' },
      { tipo: 'vf', seccion: 'endoso', sub: 'end-valevista', enunciado: 'Si la inscripción fracasa, el comprador que recupera el vale vista puede tachar de forma visible su endoso al vendedor y cobrarlo en el banco.', respuesta: true, explicacion: 'Es una modificación visible, no una adulteración: vuelve a ser el beneficiario.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-traslaticio', enunciado: 'Por el art. 25, ¿qué garantiza el endosante traslaticio?', opciones: ['La aceptación y el pago, solidariamente, salvo estipulación en contrario en el dorso', 'Solo la existencia del crédito', 'Nada: es un simple intermediario', 'Solo la autenticidad de las firmas anteriores'], correcta: 0, explicacion: 'A diferencia del librador, puede eximirse, por ejemplo con la cláusula «sin responsabilidad».' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-inoponibilidad', enunciado: 'B debe pagar una letra a A, pero tiene contra A un crédito compensable. A endosa traslaticiamente la letra a C. ¿Puede B oponerle la compensación a C?', opciones: ['No: es una excepción personal con un portador anterior (art. 28)', 'Sí, igual que en la cesión de créditos', 'Sí, si C es un banco', 'Solo si la letra no fue aceptada'], correcta: 0, explicacion: 'En una cesión de créditos común sí podría oponerla. El endoso traslaticio purga esas excepciones.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-circulacion', enunciado: 'Según el art. 57, ¿cuál de estos hechos permite trabar por resolución judicial el pago o la circulación de la letra?', opciones: ['El embargo del crédito junto con la aprehensión del documento, en juicio contra su tenedor legítimo', 'Una demanda del librador contra el beneficiario', 'Una orden del aceptante', 'La sola petición de un acreedor del librador'], correcta: 0, explicacion: 'También la liquidación concursal del portador (u otro hecho que lo prive de administrar sus bienes) y el extravío.' },
      { tipo: 'vf', seccion: 'endoso', sub: 'end-cobro', enunciado: 'El endosatario en cobro necesita que el endoso le otorgue expresamente la facultad de transigir o de percibir para ejercerlas.', respuesta: false, explicacion: 'Art. 29: tiene todas las facultades del mandatario judicial, incluidas las que requieren mención expresa (art. 7° inc. 2° CPC).' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-garantia', enunciado: 'B endosa en garantía una letra a Z. Después, B contrae una nueva deuda con Z. ¿La prenda cambiaria cubre esa nueva deuda?', opciones: ['No: solo ampara las obligaciones existentes a la fecha del endoso', 'Sí: cubre todas las deudas presentes y futuras', 'Sí, si Z la anota en la letra', 'Solo si el librado acepta'], correcta: 0, explicacion: 'Por eso la fecha del endoso es clave como prueba.' },
      { tipo: 'alternativas', seccion: 'endoso', sub: 'end-garantia', enunciado: 'Al vencimiento, ¿cómo se paga el endosatario en garantía?', opciones: ['Cobra la letra y aplica su valor a su crédito, sin remate, rindiendo cuenta al endosante', 'Debe sacar la letra a remate judicial', 'Debe devolverla al endosante para que la cobre', 'Se queda con la letra sin cobrarla'], correcta: 0, explicacion: 'Art. 30. Además, debe cobrarla a tiempo para no perjudicarla.' },
      { tipo: 'vf', seccion: 'endoso', sub: 'end-garantia', enunciado: 'Si el librador puso «no endosable», la letra igual puede darse en prenda por endoso en garantía.', respuesta: false, explicacion: 'Hay que usar la prenda civil de créditos (art. 2389 CC), notificando al deudor.' },
      { tipo: 'alternativas', seccion: 'aceptacion-aval', sub: 'acep', enunciado: '¿En qué letra es obligatorio presentar a la aceptación?', opciones: ['En la girada a un plazo desde la vista', 'En la girada a día fijo', 'En la girada a la vista', 'En todas'], correcta: 0, explicacion: 'En las demás es facultativa. El plazo corre desde la aceptación o desde el protesto.' },
      { tipo: 'vf', seccion: 'aceptacion-aval', sub: 'acep', enunciado: 'Una aceptación dada después del vencimiento de la letra no tiene valor.', respuesta: false, explicacion: 'Según el apunte, es válida incluso después del vencimiento o del protesto por falta de pago.' },
      { tipo: 'alternativas', seccion: 'aceptacion-aval', sub: 'aval', enunciado: 'Un tercero firma al dorso de la letra sin agregar «por aval». ¿Qué es esa firma?', opciones: ['No es aval: se lee como endoso o, si no podía endosar, como la firma de un «nadie»', 'Un aval', 'Una aceptación', 'Un aval limitado'], correcta: 0, explicacion: 'Art. 46: en el dorso, el aval exige la expresión «por aval» u otra equivalente.' },
      { tipo: 'alternativas', seccion: 'aceptacion-aval', sub: 'aval-limites', enunciado: 'Una letra vence el 23-9-2027. El avalista escribe «aval válido hasta el 31-12-2027». ¿Hasta cuándo se le puede cobrar?', opciones: ['Hasta el 31-12-2027', 'Hasta el 23-9-2028, como al aceptante', 'Solo el día del vencimiento', 'Nunca: la limitación anula el aval'], correcta: 0, explicacion: 'Art. 47: el aval puede limitarse a tiempo, caso, cantidad o persona.' },
      { tipo: 'vf', seccion: 'aceptacion-aval', sub: 'aval-reales', enunciado: 'Si una letra garantizada con hipoteca se endosa, el endoso transfiere también la hipoteca.', respuesta: false, explicacion: 'La hipoteca consta en una escritura pública separada: hay que cederla según el art. 1906 CC.' },
      { tipo: 'alternativas', seccion: 'pago-protesto', sub: 'pago-epoca', enunciado: '¿En qué plazo debe presentarse al cobro una letra a la vista?', opciones: ['Dentro de un año desde su giro', 'Dentro de 30 días desde el giro', 'Cuando quiera el portador, sin plazo', 'Dentro de 6 meses desde la aceptación'], correcta: 0, explicacion: 'Art. 49: si no se paga en ese plazo, queda sin valor a menos que se proteste oportunamente.' },
      { tipo: 'vf', seccion: 'pago-protesto', sub: 'pago-epoca', enunciado: 'Si la letra vence un día feriado, el pago se adelanta al día hábil anterior.', respuesta: false, explicacion: 'Art. 51: se prorroga al día hábil siguiente.' },
      { tipo: 'alternativas', seccion: 'pago-protesto', sub: 'pago-anticipado', enunciado: 'Según el art. 55, ¿qué normas rigen el pago anticipado de una letra?', opciones: ['Las de operaciones de crédito de dinero vigentes al emitir la letra', 'El art. 117 CCom, que exige el acuerdo del acreedor', 'Las del Código Civil sobre el plazo', 'Ninguna: está prohibido'], correcta: 0, explicacion: 'Así se aparta de la regla mercantil de que el plazo beneficia también al acreedor. Quien paga antes responde de la validez del pago (art. 56).' },
      { tipo: 'alternativas', seccion: 'pago-protesto', sub: 'pago-derechos', enunciado: 'Un avalista paga solo una parte de la letra. ¿Qué puede exigir?', opciones: ['Que se anote el pago en la letra y una copia certificada por notario, que vale como el original para sus acciones', 'La entrega de la letra original', 'Nada, porque el pago es parcial', 'Que se anule la letra'], correcta: 0, explicacion: 'Art. 85. Si paga todo, exige la letra con constancia de pago y recibo (art. 86).' },
      { tipo: 'alternativas', seccion: 'pago-protesto', sub: 'prot-bancario', enunciado: '¿Quién puede protestar por falta de pago sin intervención de notario?', opciones: ['El banco o la financiera que tiene la letra como beneficiario o endosatario, salvo instrucciones en contrario', 'El propio portador particular', 'El aceptante', 'El tesorero comunal'], correcta: 0, explicacion: 'Art. 71, con aviso al aceptante al menos 10 días antes del vencimiento.' },
      { tipo: 'alternativas', seccion: 'pago-protesto', sub: 'prot-notarial', enunciado: 'En el protesto notarial, ¿para cuándo cita el aviso al librado?', opciones: ['Para el día hábil siguiente que no sea sábado', 'Para el mismo día', 'Para dentro de 10 días', 'Para el próximo lunes'], correcta: 0, explicacion: 'Art. 61. Si no comparece, se protesta sin requerimiento.' },
      { tipo: 'vf', seccion: 'pago-protesto', sub: 'prot-notarial', enunciado: 'El notario debe informar los protestos para su publicación en el Boletín Comercial.', respuesta: true, explicacion: 'Por el DS 950 de 1928, los informa a la Cámara de Comercio de Santiago.' },
      { tipo: 'vf', seccion: 'pago-protesto', sub: 'prot-nulidad', enunciado: 'Si el aceptante entra en liquidación concursal antes del vencimiento, igual hay que protestar la letra para conservar las acciones contra los endosantes.', respuesta: false, explicacion: 'No se requiere protesto (art. 79): el cobro se somete al procedimiento concursal.' },
      { tipo: 'alternativas', seccion: 'pago-protesto', sub: 'extravio', enunciado: '¿Qué tipo de procedimiento prevén los arts. 88 y ss. para la letra extraviada o destruida?', opciones: ['Uno judicial no contencioso ante el juez civil, con avisos para proteger a terceros', 'Uno administrativo ante el notario', 'Uno penal', 'Uno arbitral'], correcta: 0, explicacion: 'La resolución que lo acoge reemplaza a la letra (art. 92).' },
      { tipo: 'alternativas', seccion: 'acciones', sub: 'acc-regreso', enunciado: 'El aceptante no paga. ¿Debe el portador demandar primero al aceptante antes que a los endosantes?', opciones: ['No: puede elegir a cualquier obligado de regreso y cobrarle el total', 'Sí, como en la fianza civil', 'Sí, salvo cláusula «sin protesto»', 'Debe demandar a todos a la vez'], correcta: 0, explicacion: 'Responden solidariamente y sin orden de prelación (art. 79), siempre que se haya protestado o haya cláusula «sin protesto».' },
      { tipo: 'alternativas', seccion: 'acciones', sub: 'acc-procesal', enunciado: 'En una letra solo la firma del librador está autorizada ante notario. ¿Contra quién hay mérito ejecutivo inmediato?', opciones: ['Solo contra el librador; al aceptante hay que notificarle judicialmente el protesto', 'Contra todos los firmantes', 'Solo contra el aceptante', 'Contra nadie'], correcta: 0, explicacion: 'La firma autorizada da mérito ejecutivo respecto de ese firmante (art. 434 N°4 CPC).' },
      { tipo: 'oral', seccion: 'pago-protesto', sub: 'pago', enunciado: 'Explique el pago de la letra de cambio.', puntos: ['Época: a la vista (un año para presentarla, art. 49), a plazo desde la vista (desde la aceptación fechada, art. 50), desde el giro o a día fijo; si vence en feriado, pasa al hábil siguiente (art. 51).', 'Pago anticipado: el art. 55 remite a las normas de operaciones de crédito de dinero; quien paga antes responde de la validez del pago (art. 56).', 'Pagos parciales: el portador no puede rehusarlos; vencida la letra, puede rechazar los inferiores a la mitad (art. 54). Benefician a los demás obligados.', 'Derechos del que paga: la letra con constancia y recibo (art. 86); en pago parcial, anotación y copia certificada (art. 85).', 'Consignación en la tesorería de la comuna de pago; el ministro de fe la verifica antes de protestar (art. 70).'], norma: 'Arts. 48-56, 70, 85 y 86 Ley 18.092' }
    ]
  });
})();
