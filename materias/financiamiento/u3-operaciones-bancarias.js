/* Unidad 3 — Operaciones bancarias: giro bancario, operaciones directas, filiales,
   sociedades de apoyo al giro, operaciones en el exterior y limitaciones de crédito.
   Fuentes: diapositivas «Operaciones bancarias» y apuntes de clases del Prof. Goldenberg.
   Orden y numeración de las secciones (1 … 3.4): los del apunte completo de clases del Prof. Goldenberg (parte «Operaciones bancarias»). */
(function () {
  var fmt = function (n, d) { return Number(n).toLocaleString('es-CL', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); };

  Estudio.registrarUnidad({
    id: 'u3', numero: 3, bloque: 'Prof. Goldenberg', profesor: 'Goldenberg',
    titulo: 'Operaciones bancarias',
    resumen: 'Por qué se regula el giro bancario, qué operaciones puede hacer un banco (directamente, por filiales, por sociedades de apoyo al giro y en el exterior) y cuáles son los límites de crédito de los arts. 84 y 85 LGB.',
    lecturas: 'Diapositivas «Operaciones bancarias» (segundo semestre 2026) y apuntes de clases (Prof. Goldenberg). Normas: Ley General de Bancos (LGB), especialmente arts. 39, 40, 69 a 79, 84 y 85. El orden y la numeración de las secciones siguen el apunte completo de clases.',

    /* ---------------- Glosario (definiciones del material) ---------------- */
    glosario: [
      {"termino": "Banco", "definicion": "Toda sociedad anónima especial que, autorizada en la forma prescrita por esta Ley y con sujeción a la misma, se dedique a captar o recibir en forma habitual dinero o fondos del público, con el objeto de darlos en préstamo, descontar documentos, realizar inversiones, proceder a la intermediación financiera, hacer rentar estos dineros y, en general, realizar toda otra operación que la ley le permita.", "fuente": "Art. 40 LGB", "seccion": "tipos", "sub": "tipos-intro", "literal": true, "alias": ["bancos", "giro bancario"]},
      {"termino": "Exclusividad del giro bancario", "definicion": "Prohibición de que una persona no autorizada por ley se dedique al giro bancario, en especial a captar habitualmente dinero del público, o use expresiones que sugieran que es un banco.", "fuente": "Art. 39 LGB", "seccion": "giro", "sub": "giro-respuestas", "alias": ["invasion del giro"]},
      {"termino": "Spread", "definicion": "Diferencia entre la tasa que el banco paga por los depósitos y la que cobra por los créditos; es su ganancia como intermediario.", "fuente": "Apuntes de clases", "seccion": "giro"},
      {"termino": "Operación bancaria", "definicion": "Conjunto de negocios jurídicos que el banco realiza con una finalidad económica, dentro de lo que la ley le permite.", "fuente": "Diapositivas y apuntes", "seccion": "tipos", "sub": "tipos-intro", "alias": ["operaciones bancarias"]},
      {"termino": "Operación pasiva", "definicion": "Aquella en que el banco obtiene recursos del mercado y contrae la obligación de restituir; el banco es deudor (p. ej. depósitos).", "fuente": "Diapositivas, operaciones bancarias", "seccion": "tipos", "sub": "tipos-clases", "alias": ["operaciones pasivas", "captacion"]},
      {"termino": "Operación activa", "definicion": "Aquella en que el banco entrega a sus clientes el dinero captado y queda como acreedor (p. ej. préstamos y descuento).", "fuente": "Diapositivas, operaciones bancarias", "seccion": "tipos", "sub": "tipos-clases", "alias": ["operaciones activas", "colocacion"]},
      {"termino": "Operación neutra", "definicion": "Servicio que el banco presta a cambio de una comisión, sin captar ni colocar fondos (cambio de divisas, cajas de seguridad, custodia, mandatos).", "fuente": "Diapositivas, operaciones bancarias", "seccion": "tipos", "sub": "tipos-clases", "alias": ["operaciones neutras", "operacion de servicios"]},
      {"termino": "Depósito a plazo", "definicion": "Depósito irregular con intereses cuyo retiro anticipado generalmente no se permite, salvo renunciando a intereses y reajuste; si excede 90 días puede ser reajustable.", "fuente": "Art. 69 N°1 LGB", "seccion": "depositos", "sub": "dep-plazo", "alias": ["dap"]},
      {"termino": "Depósito a la vista", "definicion": "Depósito restituible en cualquier momento, que no devenga intereses ni reajustes.", "fuente": "Diapositivas, operaciones bancarias", "seccion": "depositos", "sub": "dep-vista"},
      {"termino": "Garantía estatal de depósitos", "definicion": "Protección legal de los depósitos: 100% para cuenta corriente, ahorro a la vista y depósitos a la vista (art. 132), y limitada a UF 200 por banco y UF 400 en el sistema por año para depósitos a plazo de personas naturales (art. 144).", "fuente": "Arts. 132 y 144 LGB", "seccion": "depositos", "sub": "dep-garantia"},
      {"termino": "Descuento bancario", "definicion": "Operación en que el banco entrega al portador de un título de crédito no vencido su valor nominal menos un descuento por el tiempo al vencimiento, contra la transferencia del título; es operación de crédito de dinero.", "fuente": "Art. 69 N°4 LGB", "seccion": "activas", "sub": "act-descuento", "alias": ["descuento"]},
      {"termino": "Mutuo hipotecario endosable", "definicion": "Mutuo hipotecario otorgado por escritura pública con cláusula a la orden, que el banco puede transferir por endoso sin responsabilidad (solo responde de la existencia del crédito).", "fuente": "Art. 69 N°7 LGB", "seccion": "activas", "sub": "act-mutuos", "alias": ["mutuos hipotecarios endosables"]},
      {"termino": "Crédito documentario", "definicion": "Instrumento por el cual el banco asume la responsabilidad de pagar el precio de la mercadería importada por un cliente, contra la entrega de los documentos de embarque. Se rige por la UCP 600.", "fuente": "Art. 69 N°10 LGB", "seccion": "activas", "sub": "doc-concepto", "alias": ["carta de credito", "cartas de credito"]},
      {"termino": "Principio de independencia", "definicion": "En el crédito documentario, la obligación del banco es independiente del negocio causal: no puede negarse a pagar alegando incumplimiento de la compraventa.", "fuente": "UCP 600; diapositivas", "seccion": "activas", "sub": "doc-independencia"},
      {"termino": "Ordenante", "definicion": "En el crédito documentario, el comprador o importador que pide al banco emisor la apertura del crédito.", "fuente": "Diapositivas, operaciones bancarias", "seccion": "activas", "sub": "doc-sujetos"},
      {"termino": "Beneficiario", "definicion": "En el crédito documentario, el vendedor o exportador que puede cobrar si cumple las condiciones documentales.", "fuente": "Diapositivas, operaciones bancarias", "seccion": "activas", "sub": "doc-sujetos"},
      {"termino": "Banco corresponsal", "definicion": "Banco que comunica el crédito documentario al beneficiario, revisa los documentos y paga.", "fuente": "Diapositivas, operaciones bancarias", "seccion": "activas", "sub": "doc-sujetos", "alias": ["banco confirmador"]},
      {"termino": "Filial bancaria", "definicion": "Sociedad del banco que realiza servicios financieros regulados (art. 70 a) o actividades complementarias al giro (art. 70 b), con autorización y fiscalización de la CMF.", "fuente": "Arts. 70 a 73 LGB", "seccion": "filiales", "sub": "fil-actividades", "alias": ["filiales"]},
      {"termino": "Sociedad de apoyo al giro", "definicion": "Sociedad de objeto exclusivo en que participan bancos, que presta servicios para facilitar sus fines (p. ej. Transbank) o canaliza operaciones con el público sin captación.", "fuente": "Art. 74 LGB", "seccion": "apoyo", "sub": "apoyo-concepto", "alias": ["sociedades de apoyo al giro"]},
      {"termino": "Límite individual de crédito", "definicion": "Ningún deudor puede obtener del banco crédito directo o indirecto por sobre el 10% de su patrimonio efectivo, salvo los márgenes mayores que la ley permite (15% o 30%).", "fuente": "Art. 84 N°1 LGB", "seccion": "limites", "sub": "lim-individual", "alias": ["limites de credito"]},
      {"termino": "Persona vinculada", "definicion": "Persona relacionada con la propiedad o gestión del banco según los criterios de la CMF; a ella no se le puede prestar en condiciones más favorables que a terceros y rigen límites especiales.", "fuente": "Art. 84 N°2 LGB", "seccion": "limites", "sub": "lim-relacionadas", "alias": ["persona relacionada", "personas relacionadas", "personas vinculadas"]}
    ],

    secciones: [
      {
        id: 'giro', grupo: '1. Giro bancario', titulo: '1.1–1.2. El giro bancario y su regulación',
        html: `
<p>El banco es un <b>intermediario</b>: capta dinero de quienes tienen excedentes y lo coloca en quienes lo necesitan. Gana con el <b>spread</b>, la diferencia entre lo que paga por los depósitos (p. ej. 2%) y lo que cobra por los créditos (p. ej. 5%). Sin bancos, financiar algo como la Costanera Norte exigiría contratar con miles de personas.</p>
<p>Como el banco trabaja con dinero ajeno, el núcleo de la protección está en la <b>captación</b>: sin controles, cualquiera podría recibir ahorros con promesas falsas y desaparecer con ellos. Por eso, aunque regula relaciones entre privados, el derecho bancario aplica una lógica de derecho público: el banco <b>solo puede hacer lo que la ley le permite</b>.</p>
<h3 data-sub="giro-respuestas">1.1. Respuestas regulatorias al giro bancario</h3>
<div class="grid dos">
  <div class="card"><div class="kicker">Primera respuesta · arts. 27 y ss. LGB</div><h4 style="margin-top:0">Limitar el desarrollo del giro</h4><p>Para crear un banco hay que pasar un procedimiento estricto ante la CMF: capital mínimo, idoneidad de los directores y estudio de factibilidad. Debe ser una <b>sociedad anónima especial</b> autorizada y fiscalizada por la CMF.</p><p><span class="norma">Art. 39 LGB</span>: <b>exclusividad del giro</b>. Nadie que no esté autorizado por ley puede dedicarse al giro bancario, en especial a captar habitualmente dinero del público, ni usar expresiones que sugieran que es un banco. Ejemplo de clase: la fundación «Banco de la Igualdad» tuvo que cambiar su nombre.</p></div>
  <div class="card"><div class="kicker">Segunda respuesta · arts. 40 y 69 LGB</div><h4 style="margin-top:0">Solo actividades permitidas</h4><p>Principio de <b>reserva legal y especialidad del giro</b>: el art. 40 define qué es un banco y el art. 69 enumera, <b>taxativamente</b>, las operaciones permitidas.</p><p>Un acto fuera de ese catálogo (y que no corresponda a filiales ni sociedades de apoyo) tiene <b>objeto ilícito</b> y es <b>nulo absolutamente</b>. Ejemplo de clase: el café del Work Café no lo vende el banco, sino una empresa externa.</p></div>
</div>
<h3 data-sub="giro-fuentes">1.2. Fuentes del derecho bancario contractual</h3>
<p>Según Sandoval, el derecho bancario privado regula las relaciones patrimoniales entre el banco y sus clientes. Para el banco las operaciones son <b>siempre mercantiles</b> (<span class="norma">art. 3° N°11 CCom</span>); para el cliente pueden ser civiles o mercantiles según la <b>teoría de lo accesorio</b>.</p>
<table class="tabla">
<tr><th>Fuente</th><th>Idea clave</th></tr>
<tr><td>Ley y normativa del Banco Central y la CMF</td><td>La mayoría de las operaciones no tienen regulación legal expresa; el Banco Central y la CMF las complementan por vía administrativa, respetando la libertad contractual y las normas imperativas.</td></tr>
<tr><td>Condiciones generales de contratación</td><td>Actividad en serie: el cliente no puede modificar las cláusulas. Son <b>contratos de adhesión</b> sujetos a la Ley 19.496 y al Sernac Financiero.</td></tr>
<tr><td>Costumbre mercantil (<span class="norma">arts. 4° y 5° CCom</span>)</td><td>Las prácticas del sector son fuente material relevante (p. ej. la huella digital en caja, recomendada por la ABIF).</td></tr>
<tr><td>Jurisprudencia y práctica</td><td>Han creado contratos <i>sui generis</i> que integran varios actos con una finalidad económica (p. ej. el régimen de la boleta de garantía).</td></tr>
</table>`
      },
      {
        id: 'tipos', grupo: '2. Operaciones bancarias', titulo: '2.1–2.2. Concepto y tipos de operaciones bancarias',
        html: `
<h3 data-sub="tipos-intro">2.1. Introducción</h3>
<div class="cita">«[…] captar o recibir en forma habitual dinero o fondos del público, con el objeto de darlos en préstamo, descontar documentos, realizar inversiones, proceder a la intermediación financiera, hacer rentar estos dineros y, en general, realizar toda otra operación que la ley le permita.»<span class="fuente">Art. 40 LGB, definición de banco</span></div>
<p>Se habla de <b>operación</b> y no de contrato porque normalmente envuelve un <b>conjunto de negocios jurídicos</b> unidos por una finalidad económica (p. ej. el mutuo hipotecario endosable, que incluye préstamo, hipoteca y circulación del crédito). El <span class="norma">art. 69 LGB</span> es un listado taxativo, sin perjuicio de lo que se hace por filiales (art. 70) y sociedades de apoyo al giro (art. 74).</p>
<h3 data-sub="tipos-clases">2.2. Tipos de operaciones bancarias</h3>
<div class="grid">
  <div class="card"><span class="etiqueta azul">Pasivas o de captación</span><p>El banco <b>obtiene recursos</b> del mercado y se obliga a restituir. El banco es <b>deudor</b>. Ejemplo típico: los depósitos.</p></div>
  <div class="card"><span class="etiqueta verde">Activas o de colocación</span><p>El banco <b>entrega el dinero captado</b> a sus clientes y queda como <b>acreedor</b>. Ejemplos: préstamos, descuento, mutuo hipotecario.</p></div>
  <div class="card"><span class="etiqueta amarilla">Neutras o de servicios</span><p>El banco <b>presta un servicio</b> a cambio de una comisión: cambio de divisas, cajas de seguridad, custodia de valores, mandatos para administrar bienes.</p></div>
</div>
<p>Ejemplos de clase: quien arrienda una caja de seguridad no entrega el dominio de sus joyas ni recibe un préstamo (operación neutra). El estudiante que hace un depósito a plazo al 2% permite al banco prestar ese dinero a un empresario al 5%: el banco gana con dinero ajeno el spread del 3%.</p>`
      },
      {
        id: 'depositos', grupo: '2. Operaciones bancarias', titulo: '2.3.1–2.3.2. Depósitos y cuenta corriente bancaria',
        html: `
<p>Las <b>operaciones directas</b> (2.3) son las de la esencia del giro, que el banco hace por sí mismo dentro del catálogo del art. 69.</p>
<h3 data-sub="dep-bancarios">2.3.1. Depósitos bancarios</h3>
<p>Los depósitos son la operación pasiva por excelencia. Jurídicamente son <b>depósitos irregulares</b>: el banco se hace dueño del dinero y debe restituir otro tanto.</p>
<h4 data-sub="dep-vista">2.3.1.1. Depósito a la vista y vale vista (art. 65 LGB)</h4>
<p>Restituible en cualquier momento. El vale vista reúne <b>dos actos</b>: (i) un depósito irregular del cliente al banco y (ii) la emisión por el banco de un efecto de comercio a la orden del beneficiario. El banco debe pagarlo a su presentación. <b>No devengan intereses ni reajustes.</b></p>
<h4 data-sub="dep-plazo">2.3.1.2. Depósito a plazo (art. 69 N°1 LGB)</h4>
<p>Depósito irregular con intereses a favor del cliente. Generalmente <b>impide el retiro anticipado</b>, salvo que el cliente renuncie a intereses y reajuste. Si excede <b>90 días</b> puede ser reajustable. Puede emitirse a la orden.</p>
<h4 data-sub="dep-ahorro">2.3.1.3. Cuenta de ahorro a plazo</h4>
<p>Modalidad del depósito a plazo, con libreta o anotaciones en cuenta y un <b>número limitado de giros</b>; si se excede, se pierde el reajuste.</p>
<h4 data-sub="dep-garantia">2.3.1.4. Garantía estatal de los depósitos (arts. 132 y 144 LGB)</h4>
<div class="grid dos">
  <div class="card"><div class="kicker">Art. 132 LGB</div><h4 style="margin-top:0">100% garantizados</h4><p>Depósitos en <b>cuenta corriente</b>, cuentas de <b>ahorro a la vista</b>, <b>depósitos a la vista</b> y depósitos en cuenta corriente a plazo con giro incondicional. Opera en la <b>liquidación forzosa</b> del banco, con cargo a sus reservas y encajes en el Banco Central. Cubre a todo titular.</p></div>
  <div class="card"><div class="kicker">Arts. 144 y ss. LGB</div><h4 style="margin-top:0">Garantía limitada</h4><ul><li>Opera ante <b>iliquidez o corridas</b>, sin procedimiento concursal, y la financia el <b>Fisco</b>.</li><li>Solo <b>personas naturales</b>.</li><li>Hasta <b>UF 200 por banco</b> por año y hasta <b>UF 400 en todo el sistema</b> por año.</li><li>Solo <b>depósitos a plazo nominativos o a la orden</b> (incluye libretas de ahorro a plazo con giro diferido).</li></ul></div>
</div>
<p class="small">Ejemplos de clase: los $600 millones en depósitos a plazo de una SpA no están cubiertos por el art. 144, porque es una persona jurídica. En la crisis bancaria de los años 80, el Fisco tuvo que comprar cartera vencida e invocar las garantías estatales.</p>
<h3 data-sub="dep-ccb">2.3.2. Cuenta corriente bancaria</h3>
<p>Definida en el <span class="norma">art. 1° DFL 707</span> (su estudio como contrato está en la unidad 2, punto 4.4.4). Como operación bancaria funciona como centralizador de caja del cliente.</p>
<div class="callout"><p><b>Es mixta:</b> cuando el cliente deposita, el banco capta (operación pasiva); cuando gira sobre una línea de sobregiro, el banco presta (operación activa). Ejemplo de clase: una constructora con fondos en su cuenta para pagar proveedores (pasiva) que el día de pago de sueldos usa $50 millones de sobregiro (activa).</p></div>`
      },
      {
        id: 'activas', grupo: '2. Operaciones bancarias', titulo: '2.3.3–2.3.6. Descuento, avales, mutuos endosables y crédito documentario',
        html: `
<h3 data-sub="act-descuento">2.3.3. Descuento bancario (art. 69 N°4 LGB)</h3>
<ul>
  <li>El banco entrega dinero al portador de un título de crédito <b>no vencido</b> (letra o pagaré), contra la transferencia del título.</li>
  <li>Entrega el <b>valor nominal menos el descuento</b> por el tiempo que falta al vencimiento, a cierta tasa de interés.</li>
  <li>Por regla general el cliente queda como <b>deudor solidario</b>: como endosante responde del pago.</li>
  <li>Es <b>operación de crédito de dinero</b> (art. 1° Ley 18.010), cualquiera sea la responsabilidad del cedente. Por eso está sujeto a la TMC.</li>
</ul>
<h3 data-sub="act-avales">2.3.4. Avales y fianzas (art. 69 N°11 LGB · RAN 8-10)</h3>
<ul>
  <li>Pueden ser simples o solidarios. Al otorgarse son operación <b>neutra</b>: el banco cobra una comisión y compromete su patrimonio.</li>
  <li>Solo se avalan <b>obligaciones de dinero</b> de operaciones efectivas y conocidas, con <b>monto y plazo determinados</b> y riesgo calificado. Si el monto no es determinable (p. ej. derivados), se fija un <b>monto máximo</b>.</li>
  <li>El banco debe quedar con un <b>título ejecutivo</b> incuestionable para su acción de regreso contra el deudor.</li>
  <li><b>No puede</b> avalar ni afianzar obligaciones de <b>otras instituciones financieras del país</b> (y tiene límites respecto de las extranjeras), ni del <b>Fisco</b>, reparticiones del Estado o entidades en que este tenga participación mayoritaria.</li>
</ul>
<h3 data-sub="act-mutuos">2.3.5. Mutuos hipotecarios endosables (art. 69 N°7 LGB)</h3>
<p>El mutuo no es título de crédito sino un <b>crédito nominativo</b>; normalmente se cedería con las reglas de la cesión de créditos. La ley facilita su transferencia: se otorga por <b>escritura pública con cláusula a la orden</b> (una sola copia autorizada) y se transfiere por <b>endoso</b>.</p>
<ul>
  <li>El endoso es <b>sin responsabilidad</b>: el banco cedente solo responde de la <b>existencia</b> del crédito.</li>
  <li>La anotación al margen de la inscripción hipotecaria es <b>solo informativa</b>, no requisito de la transferencia.</li>
  <li>Efectos: facilita la circulación y el refinanciamiento, da liquidez al banco, crea un <b>mercado secundario hipotecario</b> y suele tener una <b>tasa más baja</b>.</li>
</ul>
<h3 data-sub="act-documentario">2.3.6. Crédito documentario (art. 69 N°10 LGB · UCP 600)</h3>
<h4 data-sub="doc-concepto">2.3.6.1. Concepto, marco regulatorio y contexto económico</h4>
<p>El banco emisor, a pedido de su cliente (ordenante o importador), se obliga directamente a <b>pagar</b> al beneficiario (exportador), o a autorizar a otro banco para hacerlo, contra la entrega de los documentos de embarque pactados. Se rige sobre todo por las <b>UCP 600</b> de la Cámara de Comercio Internacional; el contrato de compraventa se rige por la <b>Convención de Viena de 1980</b> y los <b>Incoterms</b> (FOB, CFR, CIF). Ejemplo de clase: una viña chilena vende 60.000 botellas a un supermercado en China.</p>
<h4 data-sub="doc-desconfianza">2.3.6.2. Problema por solucionar: la desconfianza recíproca</h4>
<p>El comprador no quiere pagar sin saber que se embarcó la mercadería; el vendedor no quiere embarcar sin tener asegurado el cobro. El crédito documentario reemplaza la incertidumbre sobre el comprador por el compromiso de un banco solvente.</p>
<h4 data-sub="doc-independencia">2.3.6.3. Principio de independencia y examen documental</h4>
<div class="callout red"><p><b>Principio de independencia:</b> el crédito documentario es absolutamente independiente del negocio causal. El banco <b>no puede negarse a pagar</b> alegando incumplimiento de la compraventa (p. ej. mercadería defectuosa). El examen es <b>solo documental</b> («check, check, check»): si los documentos cumplen, se paga; el comprador reclamará al vendedor por la vía del contrato.</p></div>
<p>Ejemplo de clase: la compraventa exigía equipos modelo 2026 y llegaron de 2025. Como ese requisito no estaba entre los documentos de la carta de crédito, y la factura, el conocimiento de embarque, el seguro y el certificado de origen estaban en regla, el banco debe pagar aunque el comprador le ordene no hacerlo.</p>
<h4 data-sub="doc-sujetos">2.3.6.4. Sujetos intervinientes y relaciones jurídicas</h4>
<table class="tabla">
<tr><th>Ordenante</th><th>Banco emisor</th><th>Banco corresponsal</th><th>Beneficiario</th></tr>
<tr><td>Comprador o importador. Pide la apertura e indica los documentos exigidos.</td><td>Abre el crédito a favor del beneficiario, por cuenta del ordenante.</td><td>Comunica el crédito al beneficiario, revisa los documentos y paga.</td><td>Vendedor o exportador. Cobra si cumple las condiciones documentales.</td></tr>
</table>
<p class="small">Hay tres relaciones autónomas: la compraventa (importador-exportador), la apertura (ordenante-banco emisor) y el compromiso del banco frente al beneficiario. El banco no es fiador del comprador.</p>
<h4 data-sub="doc-fases">2.3.6.5. Funcionamiento básico y fases de la operación</h4>
<div class="flow"><div class="node">1. Compraventa</div><div class="arrow">→</div><div class="node">2. Importador pide la carta al banco emisor</div><div class="arrow">→</div><div class="node">3. Emisor instruye al corresponsal, que avisa al exportador</div><div class="arrow">→</div><div class="node">4. Exportador embarca y presenta documentos</div><div class="arrow">→</div><div class="node hot">5. Corresponsal verifica y paga</div><div class="arrow">→</div><div class="node">6. Documentos al importador para retirar la mercadería</div></div>
<h4 data-sub="doc-standby">2.3.6.6. Aplicación en el comercio local: cartas de crédito standby</h4>
<p class="small">En el apunte este punto aparece también con el número 2.3.6.5.</p>
<p>También se usa entre empresas chilenas, sin importación ni exportación, para asegurar pagos en contratos de ejecución diferida (p. ej. construcción). El banco libera cada pago contra la sola presentación de un <b>certificado de avance</b> de un perito independiente, sin ir a la obra. Ejemplo de clase: el primer tramo de la construcción de un hospital se paga al presentar el certificado de que el terreno fue despejado.</p>`
      },
      {
        id: 'filiales', grupo: '2. Operaciones bancarias', titulo: '2.4. Operaciones por medio de filiales',
        html: `
<h3 data-sub="fil-actividades">2.4.1. Filiales bancarias: actividades autorizadas</h3>
<table class="tabla">
<tr><th data-sub="fil-letra-a">2.4.1.1. Art. 70 letra a): servicios financieros regulados</th><th data-sub="fil-letra-b">2.4.1.2. Art. 70 letra b): actividades complementarias al giro</th></tr>
<tr><td><ul><li>Agentes de valores y corredores de bolsa.</li><li>Administradoras generales de fondos (Ley 20.712).</li><li>Securitización.</li><li>Corredores de seguros (DFL 251 de 1931): prohibido condicionar créditos a contratar seguros propios.</li><li>Inmobiliarias de leasing habitacional (Ley 19.281).</li></ul><p class="small">Se rigen por su ley sectorial, con fiscalización de la CMF.</p></td>
<td><ul><li>Leasing (con o sin opción de compra).</li><li>Factoraje, asesoría financiera, custodia y transporte de valores, cobranza de créditos.</li><li>Otros servicios que la CMF declare complementarios por NCG.</li></ul><p class="small">La CMF fija por NCG las condiciones de estos giros, y puede autorizar al banco a realizarlos directamente, sin filial (art. 71).</p></td></tr>
</table>
<h4 data-sub="fil-previsional">2.4.1.3. Asesoría previsional (art. 70 bis LGB)</h4>
<div class="callout"><p>Incorporada por la Ley 21.130 de 2019. Orienta a las personas sobre su situación previsional (DL 3.500): renta vitalicia, retiro programado. La supervisan en conjunto la Superintendencia de Pensiones y la CMF, con NCG conjunta. Al banco le está vedado condicionar créditos a contratar asesoría con un asesor relacionado.</p></div>
<h3 data-sub="fil-requisitos">2.4.2. Límites y requisitos de las filiales</h3>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Art. 71: inversión de la filial</h4><ul><li>Regla: la filial <b>no puede adquirir acciones</b> ni participar en otras sociedades.</li><li>Excepción: si la CMF la estima <b>imprescindible</b> para su giro, con un tope del <b>5% del capital pagado</b> de la sociedad en que invierte.</li><li>La CMF puede autorizar que el banco haga directamente las actividades de la letra b).</li></ul></div>
  <div class="card"><h4 style="margin-top:0">Art. 72: requisitos</h4><ul><li>Cumplir los requerimientos patrimoniales del art. 66.</li><li>No estar en las <b>dos últimas categorías</b> de clasificación de gestión.</li><li>Acompañar un <b>estudio de factibilidad</b> económico-financiero.</li><li>Puede tener participación minoritaria, salvo que la CMF lo deniegue porque los demás socios no cumplen el art. 28.</li></ul></div>
</div>
<h3 data-sub="fil-procedimiento">2.4.3. Procedimiento de autorización ante la CMF (art. 73)</h3>
<h4 data-sub="fil-plazos">2.4.3.1. Plazos generales</h4>
<p><b>90 días</b> desde la solicitud; <b>120</b> si la CMF pide antecedentes adicionales.</p>
<h4 data-sub="fil-rechazo">2.4.3.2. Causales de rechazo</h4>
<p>Resolución fundada por incumplir los arts. 71 y 72; si el banco está en <b>categoría III</b> de gestión, también por deficiencias de gestión: no es prudente que asuma nuevos riesgos.</p>
<h4 data-sub="fil-silencio">2.4.3.3. Silencio administrativo positivo</h4>
<p>Solo para bancos en <b>categoría I</b>: si la CMF no rechaza fundadamente en <b>60 días</b>, se entiende aprobada (art. 64 Ley 19.880).</p>`
      },
      {
        id: 'apoyo', grupo: '2. Operaciones bancarias', titulo: '2.5. Sociedades de apoyo al giro',
        html: `
<h3 data-sub="apoyo-concepto">2.5.1. Sociedades de apoyo al giro bancario</h3>
<p>Por el <span class="norma">art. 74 LGB</span>, los bancos pueden ser accionistas de sociedades de apoyo al giro, con <b>autorización previa de la CMF</b>. A diferencia de las filiales del art. 70, aquí el banco participa como accionista y no presta él el servicio.</p>
<div class="grid dos">
  <div class="card"><div class="kicker">Letra a)</div><h4 style="margin-top:0">Apoyo interno</h4><p>Servicios que facilitan los fines de las entidades financieras. Ejemplos: <b>Transbank</b>, Redbank.</p></div>
  <div class="card"><div class="kicker">Letra b)</div><h4 style="margin-top:0">Canal con el público</h4><p>Por su intermedio los bancos hacen ciertas operaciones con el público que <b>no incluyan captación</b>. Ejemplo: BancoEstado Contacto 24 horas.</p></div>
</div>
<p><b>Objeto único y exclusivo:</b> solo los servicios de la letra a) o b).</p>
<p class="small">Según las diapositivas, la CMF tiene registradas 20 sociedades de apoyo al giro.</p>
<h3 data-sub="apoyo-condiciones">2.5.2. Condiciones de acceso y fiscalización</h3>
<ul>
  <li><b>Medios de pago:</b> según el apunte, la Ley Fintech (Ley 21.521) modificó el art. 74. Las sociedades de apoyo deben ofrecer a emisores y operadores, incluidas las fintech no bancarias, condiciones <b>públicas, generales, objetivas y no discriminatorias</b>; al comercio, condiciones objetivas, competitivas, transparentes y no discriminatorias, informadas con anticipación.</li>
  <li>Ejemplo de clase: la red de pagos no puede cobrarle más a una fintech de prepago solo porque no es uno de los bancos dueños de la red, ni subirle la comisión al almacén de la esquina sin aviso.</li>
  <li><b>Art. 75:</b> la CMF fiscaliza tanto a las filiales como a las sociedades de apoyo y les dicta NCG.</li>
</ul>`
      },
      {
        id: 'exterior', grupo: '2. Operaciones bancarias', titulo: '2.6. Operaciones en el exterior',
        html: `
<h3 data-sub="ext-vias">2.6.1. Vías para operar en el exterior (art. 76)</h3>
<ul><li>Sucursales u oficinas de representación.</li><li>Inversión en acciones de bancos extranjeros.</li><li>Inversión en empresas con los giros de los arts. 70, 71, 72 y 74.</li></ul>
<p><b>Autorización:</b> siempre de la CMF. Además del <b>Banco Central</b> para las inversiones accionarias (todo lo que no sean sucursales u oficinas de representación).</p>
<p>Casos: Itaú Corpbanca abrió una sucursal en Nueva York (solo CMF); BCI participa en City National Bank, en Florida (CMF y Banco Central).</p>
<h3 data-sub="ext-requisitos">2.6.2. Requisitos y procedimiento</h3>
<h4 data-sub="ext-fondo">2.6.2.1. Requisitos de fondo (art. 77)</h4>
<ul><li>Capital (arts. 66 y ss.) y no estar en las dos categorías más bajas de gestión.</li><li>Estudio de factibilidad del país y de las actividades proyectadas.</li><li>País con <b>fiscalización adecuada</b> (no se autorizaría en un territorio sin supervisión).</li><li><b>No discriminación:</b> si se autorizó a un banco para operar en un país, no puede negarse a otro, salvo cambio sustancial de condiciones.</li><li>Si la participación es de <b>10% o más</b>, los socios deben cumplir la idoneidad del art. 28.</li></ul>
<h4 data-sub="ext-procedimiento">2.6.2.2. Procedimiento, plazos y efectos (arts. 78 y 79)</h4>
<ul><li>Plazo: <b>90 días</b> (+45 si se piden antecedentes).</li><li><b>Vía rápida:</b> plazos a la mitad si el banco tiene la mejor calificación y el país es de bajo riesgo.</li><li><b>Silencio positivo</b> si la CMF no resuelve a tiempo. Ejemplo de clase: en el «día 89», la CMF pide antecedentes para ganar los 45 días adicionales.</li></ul>`
      },
      {
        id: 'limites', grupo: '3. Limitaciones de créditos', titulo: '3.1–3.4. Límites de crédito (arts. 84 y 85 LGB)',
        html: `
<p>Buscan que la insolvencia de un deudor o de un grupo no arrastre al banco: obligan a diversificar la cartera. Se miden sobre el <b>patrimonio efectivo</b> del banco.</p>
<h3 data-sub="lim-individual">3.1. Límite individual de crédito (art. 84 N°1)</h3>
<div class="grid cuatro">
  <div class="card"><div class="big">10%</div><p><b>Regla general:</b> crédito directo o indirecto a una misma persona.</p></div>
  <div class="card"><div class="big">15%</div><p><b>Obra pública concesionada:</b> créditos del DFL 164 de 1991 con prenda especial de concesión, o con dos o más bancos en convenio.</p></div>
  <div class="card"><div class="big">30%</div><p><b>Exceso caucionado:</b> garantías sobre bienes corporales de valor igual o superior al exceso sobre el 10%.</p></div>
  <div class="card"><div class="big">30%</div><p><b>Otro banco</b>, y el total al conjunto de un mismo <b>grupo empresarial</b> (Título XV Ley 18.045).</p></div>
</div>
<p><b>Sanción:</b> multa del <b>10% del exceso</b>. Ejemplo de clase: con patrimonio efectivo de 8.000.000 UF, el límite general es 800.000 UF; prestar 1.000.000 UF sin caucionar el exceso de 200.000 UF cuesta una multa de 20.000 UF.</p>
<h3 data-sub="lim-relacionadas">3.2. Créditos a personas relacionadas (art. 84 N°2)</h3>
<ul>
  <li>No se les puede dar crédito en <b>condiciones más favorables</b> (plazo, tasa, garantías) que a terceros en operaciones similares.</li>
  <li>Límites: <b>5%</b> del patrimonio efectivo por cada grupo de personas vinculadas; hasta <b>25%</b> si el exceso está caucionado como en el N°1; el total nunca puede superar el patrimonio efectivo.</li>
  <li>Quién está vinculado lo determina la CMF por NCG, atendiendo a relaciones de negocios, capitales o administración con influencia significativa y permanente, a presunciones de que el crédito de una se usará en beneficio de otra, o a una unidad de intereses económicos.</li>
  <li><b>Se presume</b> vinculada una deudora constituida en el extranjero entre cuyos socios figuren otras sociedades o con acciones al portador. <b>No hay</b> vinculación para la persona natural con hasta el 1% de las acciones del banco o que le debe hasta UF 3.000.</li>
  <li><b>Sanción:</b> multa del <b>20% del crédito</b> (sobre todo el crédito, no solo el exceso). Los créditos vinculados se muestran en un rubro separado de los estados financieros.</li>
</ul>
<h3 data-sub="lim-prohibiciones">3.3. Prohibiciones (art. 84 N°3 a N°6)</h3>
<table class="tabla">
<tr><th>Punto</th><th>Prohibición</th><th>Sanción</th></tr>
<tr><td data-sub="lim-propias">3.3.1. Acciones de propia emisión (N°3)</td><td>Crédito para que alguien <b>pague acciones emitidas por el propio banco</b> (evita manipular el control de la junta con fondos de los depositantes).</td><td>Multa igual al valor del crédito.</td></tr>
<tr><td data-sub="lim-directores">3.3.2. Directores y apoderados (N°4)</td><td>Crédito a <b>directores y apoderados generales</b>, su cónyuge o conviviente civil, hijos menores bajo patria potestad y sociedades en que participen.</td><td>Multa igual al crédito o al exceso.</td></tr>
<tr><td data-sub="lim-bienes">3.3.3. Bienes físicos (N°5)</td><td>Adquirir bienes que la ley no autoriza. Excepciones: los recibidos en pago de deudas vencidas (hasta el 20% del patrimonio efectivo) y los adquiridos en remate judicial; deben enajenarse en un año (seis meses si son acciones).</td><td>Multa igual al valor de los bienes y 10% mensual por mantenerlos.</td></tr>
<tr><td data-sub="lim-cauciones">3.3.4. Cauciones y obligaciones ajenas (N°6)</td><td>Comprometer su responsabilidad por obligaciones ajenas fuera de los casos legales, o hipotecar o prendar sus bienes físicos.</td><td>Nulidad absoluta del acto, más sanciones pecuniarias.</td></tr>
</table>
<p><b>3.3.2 en detalle:</b> quien asume como director o apoderado general debe antes extinguir o ajustar sus deudas con el banco. La CMF dictó la <b>Circular N° 2364</b>, que extiende la prohibición a la participación indirecta (umbral conjunto del 5%); por los reclamos del mercado, según el apunte, postergó su vigencia hasta diciembre de 2026.</p>
<h4 data-sub="lim-encuadramiento">3.3.5. Regla común: deber de encuadramiento</h4>
<div class="callout"><p>Pagar la multa no subsana la infracción. El banco que infringe el art. 84 debe ajustarse a los márgenes en <b>90 días</b>; si no, se aplican los apremios y sanciones del Título III de la Ley 21.000.</p></div>
<h3 data-sub="lim-computo">3.4. Cómputo del crédito de una misma persona (art. 85)</h3>
<h4 data-sub="lim-100">3.4.1. Sociedades imputadas al deudor (100%)</h4>
<p>Letra a): se imputan al deudor las obligaciones de las sociedades colectivas o en comandita de que sea socio solidario, de las sociedades en que tenga <b>más del 50%</b> del capital o de las utilidades, y de su EIRL. Ejemplo: si el deudor tiene el 51% de una SpA, todo el crédito de la SpA se suma al suyo.</p>
<h4 data-sub="lim-prorrata">3.4.2. Imputación a prorrata (más del 2% y hasta el 50%)</h4>
<p>Letra b): si su participación es <b>superior al 2% y no excede el 50%</b>, se imputa a prorrata (con 30%, se le imputan 300.000 UF de un crédito de 1.000.000). La CMF puede excluir por NCG a sociedades con muchos socios en que el deudor no tiene influencia significativa.</p>
<h4 data-sub="lim-pluralidad">3.4.3. Pluralidad de deudores</h4>
<p>Letra c): la obligación se considera <b>solidaria</b> para cada obligado, salvo que conste fehacientemente que es simplemente conjunta. Invierte la regla del art. 1511 CC, que presume la obligación simplemente conjunta.</p>`
      }
    ],

    interactivos: [
      {
        id: 'limite84', titulo: 'Calculadora de límites de crédito (art. 84 LGB)', seccion: 'limites',
        descripcion: 'Ejemplo de los apuntes: un banco con patrimonio efectivo de 8.000.000 UF. Cambia el tipo de deudor, el monto y las garantías.',
        montar: function (el) {
          el.innerHTML = `<div class="fila"><div class="campo"><label>Patrimonio efectivo del banco (UF)</label><input type="number" id="pe" value="8000000" step="100000"></div>
            <div class="campo"><label>Crédito total al deudor (UF)</label><input type="number" id="cr" value="1000000" step="50000"></div>
            <div class="campo" style="min-width:260px"><label>Tipo de deudor</label><select id="tipo">
              <option value="ind">Deudor individual (art. 84 N°1)</option>
              <option value="conc">Obra pública concesionada con prenda especial (N°1)</option>
              <option value="banco">Otro banco (N°1)</option>
              <option value="rel">Persona relacionada con el banco (N°2)</option></select></div>
            <div class="campo"><label>Garantías sobre bienes corporales (UF)</label><input type="number" id="gar" value="0" step="50000"></div></div><div id="out"></div>`;
          function calc() {
            var g = function (id) { return parseFloat(el.querySelector('#' + id).value) || 0; };
            var pe = g('pe'), cr = g('cr'), gar = g('gar'), tipo = el.querySelector('#tipo').value;
            var base, max, multa, txt;
            if (tipo === 'rel') { base = 0.05; max = 0.25; multa = 0.20; }
            else if (tipo === 'conc') { base = 0.15; max = 0.15; multa = 0.10; }
            else if (tipo === 'banco') { base = 0.30; max = 0.30; multa = 0.10; }
            else { base = 0.10; max = 0.30; multa = 0.10; }
            var limBase = pe * base, limMax = pe * max, exceso = Math.max(0, cr - limBase);
            var ok, detalle;
            if (cr <= limBase) { ok = true; detalle = 'Está dentro del límite base de ' + (base * 100) + '% (' + fmt(limBase) + ' UF).'; }
            else if (cr <= limMax && max > base && gar >= exceso) { ok = true; detalle = 'Excede el ' + (base * 100) + '% en ' + fmt(exceso) + ' UF, pero ese exceso está caucionado y no supera el ' + (max * 100) + '% (' + fmt(limMax) + ' UF).'; }
            else {
              ok = false;
              var infr = cr > limMax ? cr - limMax : exceso;
              detalle = (cr > limMax ? 'Supera el máximo absoluto de ' + (max * 100) + '% (' + fmt(limMax) + ' UF).' : 'Excede el ' + (base * 100) + '% en ' + fmt(exceso) + ' UF y ' + (max > base ? 'las garantías (' + fmt(gar) + ' UF) no cubren ese exceso.' : 'en este caso no hay margen adicional por garantías.')) +
                '<br>Multa: <b>' + (tipo === 'rel' ? '20% del crédito concedido' : '10% del exceso') + '</b> ≈ <b>' + fmt(tipo === 'rel' ? cr * multa : infr * multa) + ' UF</b>. El banco debe ajustarse en 90 días.';
            }
            el.querySelector('#out').innerHTML = '<div class="resultado ' + (ok ? 'ok' : 'mal') + '"><b>' + (ok ? '✓ Crédito permitido.' : '✗ Infringe el art. 84.') + '</b><p>' + detalle + '</p>' +
              (tipo === 'rel' ? '<p class="small">Recuerda además: no puede darse en condiciones más favorables que a terceros, y el total de créditos a relacionados no puede superar el patrimonio efectivo.</p>' : '') +
              (tipo === 'banco' ? '<p class="small">El 30% también es el tope para el total otorgado a un mismo grupo empresarial.</p>' : '') + '</div>';
          }
          el.querySelectorAll('input,select').forEach(function (i) { i.oninput = calc; }); calc();
        }
      },
      {
        id: 'cartacredito', titulo: '¿Debe pagar el banco? Crédito documentario', seccion: 'activas',
        descripcion: 'Aplica el principio de independencia y el examen documental a cada situación.',
        montar: function (el) {
          var casos = [
            ['Los documentos (factura, B/L, certificado de origen y seguro) están conformes, pero el importador descubre que los equipos son de 2025 y no de 2026, como exigía la compraventa. La carta de crédito no pedía acreditar el año.', true, 'El banco revisa papeles, no mercaderías. La exigencia del año estaba en la compraventa, no en la carta de crédito. Debe pagar; el importador reclamará al vendedor por el contrato.'],
            ['El exportador presenta la factura y el seguro, pero no el conocimiento de embarque que exigía la carta de crédito.', false, 'Falta un documento exigido. Como el pago está condicionado a la presentación conforme de los documentos, el banco no debe pagar.'],
            ['El importador avisa al banco que no quiere pagar porque la mercadería llegó con daños, aunque todos los documentos están en regla.', true, 'Principio de independencia: el banco no puede excusarse en el incumplimiento de la compraventa. Si los documentos cumplen, paga.'],
            ['El importador está en problemas financieros y el banco emisor duda de que le reembolse, pero los documentos son conformes.', true, 'El compromiso del banco frente al beneficiario es directo y autónomo de la relación con el ordenante. Debe pagar y luego cobrarle al ordenante.']
          ];
          var i = 0, ok = 0;
          function pintar() {
            if (i >= casos.length) { el.innerHTML = '<div class="resultado ok"><b>Resultado: ' + ok + ' de ' + casos.length + '.</b> <button class="btn sec" id="re">Repetir</button></div>'; el.querySelector('#re').onclick = function () { i = 0; ok = 0; pintar(); }; return; }
            var c = casos[i];
            el.innerHTML = '<p class="small">Caso ' + (i + 1) + ' de ' + casos.length + '</p><p style="font-size:17px;font-weight:700">' + c[0] + '</p><div class="opciones-chip"><button data-v="1">El banco debe pagar</button><button data-v="0">El banco no debe pagar</button></div><div id="fb"></div>';
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
        id: 'clasifica', titulo: 'Clasifica la operación: pasiva, activa o neutra', seccion: 'tipos',
        descripcion: 'Pregúntate quién queda como deudor y si se mueve dinero del banco.',
        montar: function (el) {
          var casos = [
            ['Un estudiante abre un depósito a plazo a 90 días.', 'pasiva', 'El banco capta fondos y queda como deudor.'],
            ['El banco descuenta un pagaré a 120 días de una constructora.', 'activa', 'El banco entrega fondos y queda como acreedor (es una OCD).'],
            ['Un cliente arrienda una caja de seguridad para guardar joyas.', 'neutra', 'No hay captación ni colocación: es un servicio a cambio de una comisión.'],
            ['El banco otorga una fianza solidaria a favor de un cliente frente a una inmobiliaria.', 'neutra', 'Al otorgarse, el banco no recibe ni desembolsa dinero: compromete su patrimonio por una comisión.'],
            ['El banco otorga un mutuo hipotecario endosable.', 'activa', 'Coloca dinero y queda como acreedor.'],
            ['Una empresa deposita su recaudación en su cuenta corriente.', 'pasiva', 'Es el componente pasivo de la cuenta corriente; si girara sobre su línea de sobregiro, sería activa.']
          ];
          var nombres = { pasiva: 'Pasiva (captación)', activa: 'Activa (colocación)', neutra: 'Neutra (servicio)' }, i = 0, ok = 0;
          function pintar() {
            if (i >= casos.length) { el.innerHTML = '<div class="resultado ok"><b>Resultado: ' + ok + ' de ' + casos.length + '.</b> <button class="btn sec" id="re">Repetir</button></div>'; el.querySelector('#re').onclick = function () { i = 0; ok = 0; pintar(); }; return; }
            var c = casos[i];
            el.innerHTML = '<p class="small">Situación ' + (i + 1) + ' de ' + casos.length + '</p><p style="font-size:18px;font-weight:700">' + c[0] + '</p><div class="opciones-chip">' +
              Object.keys(nombres).map(function (k) { return '<button data-k="' + k + '">' + nombres[k] + '</button>'; }).join('') + '</div><div id="fb"></div>';
            el.querySelectorAll('[data-k]').forEach(function (b) {
              b.onclick = function () {
                var bien = b.dataset.k === c[1]; if (bien) ok++;
                el.querySelectorAll('[data-k]').forEach(function (x) { x.disabled = true; if (x.dataset.k === c[1]) x.classList.add('activo'); });
                el.querySelector('#fb').innerHTML = '<div class="resultado ' + (bien ? 'ok' : 'mal') + '"><b>' + (bien ? '✓ Correcto.' : '✗ Es ' + nombres[c[1]].toLowerCase() + '.') + '</b> ' + c[2] + '<div style="margin-top:10px"><button class="btn" id="sig">Siguiente</button></div></div>';
                el.querySelector('#sig').onclick = function () { i++; pintar(); };
              };
            });
          }
          pintar();
        }
      },
      {
        id: 'garantia', titulo: '¿Está cubierto por la garantía estatal?', seccion: 'depositos',
        descripcion: 'Elige el tipo de depósito y el titular. Simplificado según las diapositivas (arts. 132 y 144 LGB).',
        montar: function (el) {
          el.innerHTML = `<div class="fila"><div class="campo" style="min-width:260px"><label>Tipo de depósito</label><select id="tipo">
            <option value="cc">Cuenta corriente</option><option value="vista">Depósito a la vista / ahorro a la vista</option>
            <option value="plazo" selected>Depósito a plazo nominativo o a la orden</option><option value="ahorro">Cuenta de ahorro a plazo con giro diferido</option></select></div>
            <div class="campo"><label>Titular</label><select id="tit"><option value="n">Persona natural</option><option value="j">Persona jurídica</option></select></div>
            <div class="campo"><label>Monto en este banco (UF)</label><input type="number" id="m" value="500"></div></div><div id="out"></div>`;
          function calc() {
            var tipo = el.querySelector('#tipo').value, tit = el.querySelector('#tit').value, m = +el.querySelector('#m').value || 0, html;
            if (tipo === 'cc' || tipo === 'vista') html = '<div class="resultado ok"><b>Garantía del 100% (art. 132 LGB).</b> Cubre ' + fmt(m) + ' UF, sin importar si el titular es persona natural o jurídica.</div>';
            else if (tit === 'j') html = '<div class="resultado mal"><b>Sin garantía estatal.</b> La garantía limitada del art. 144 beneficia solo a personas naturales.</div>';
            else { var cub = Math.min(m, 200); html = '<div class="resultado ' + (cub === m ? 'ok' : '') + '"><b>Garantía limitada (art. 144 y ss.).</b> Cubre hasta <b>' + fmt(cub) + ' UF</b> en este banco' + (m > 200 ? ' (no cubre ' + fmt(m - 200) + ' UF)' : '') + '. Tope: UF 200 por banco al año y UF 400 en todo el sistema al año.</div>'; }
            el.querySelector('#out').innerHTML = html;
          }
          el.querySelectorAll('input,select').forEach(function (i) { i.oninput = calc; }); calc();
        }
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-respuestas', enunciado: '¿Qué establece el art. 39 LGB?', opciones: ['La exclusividad del giro bancario: solo los autorizados por ley pueden captar habitualmente dinero del público', 'El listado de operaciones que puede hacer un banco', 'Los límites individuales de crédito', 'La garantía estatal de los depósitos'], correcta: 0, explicacion: 'También prohíbe usar expresiones que sugieran que se trata de un banco. El listado de operaciones está en el art. 69.' },
      { tipo: 'vf', seccion: 'giro', sub: 'giro-respuestas', enunciado: 'Un banco puede realizar cualquier actividad comercial que la ley no le prohíba.', respuesta: false, explicacion: 'Rige el principio de reserva legal y especialidad del giro: solo puede hacer lo que la ley le permite (arts. 40 y 69 LGB).' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-respuestas', enunciado: '¿Qué sanción civil tiene el acto de un banco fuera del catálogo legal de operaciones?', opciones: ['Nulidad absoluta por objeto ilícito', 'Inoponibilidad frente al cliente', 'Se tiene por no escrito', 'Nulidad relativa'], correcta: 0, explicacion: 'Por eso el café del Work Café lo vende una empresa externa.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-fuentes', enunciado: 'Para el banco, las operaciones bancarias son…', opciones: ['Siempre mercantiles (art. 3° N°11 CCom)', 'Civiles o mercantiles según la teoría de lo accesorio', 'Siempre civiles', 'Mercantiles solo si el cliente es comerciante'], correcta: 0, explicacion: 'Para el cliente sí se aplica la teoría de lo accesorio.' },
      { tipo: 'relacionar', seccion: 'giro', sub: 'giro-fuentes', enunciado: 'Relaciona cada fuente del derecho bancario contractual con su ejemplo.', pares: [['Normativa administrativa', 'NCG de la CMF y normas del Banco Central'], ['Condiciones generales', 'Contratos de adhesión sujetos a la LPDC'], ['Costumbre mercantil', 'Huella digital en caja, recomendada por la ABIF'], ['Jurisprudencia', 'Régimen de la boleta de garantía']], explicacion: 'La mayoría de las operaciones no tienen regulación legal expresa.' },
      { tipo: 'vf', seccion: 'giro', sub: 'giro-respuestas', enunciado: 'Los bancos deben constituirse como sociedades anónimas especiales autorizadas por la CMF.', respuesta: true, explicacion: 'Es parte de la primera respuesta regulatoria (arts. 27 y ss. LGB).' },
      { tipo: 'alternativas', seccion: 'tipos', sub: 'tipos-clases', enunciado: 'El cambio de divisas, las cajas de seguridad y la custodia de valores son operaciones…', opciones: ['Neutras o de servicios', 'Pasivas o de captación', 'Activas o de colocación', 'Prohibidas a los bancos'], correcta: 0, explicacion: 'El banco presta un servicio a cambio de una comisión.' },
      { tipo: 'vf', seccion: 'tipos', sub: 'tipos-clases', enunciado: 'En las operaciones pasivas el banco queda como acreedor.', respuesta: false, explicacion: 'En las pasivas el banco capta y queda como deudor; en las activas, como acreedor.' },
      { tipo: 'alternativas', seccion: 'tipos', sub: 'tipos-intro', enunciado: '¿Por qué se habla de «operación» bancaria y no de «contrato»?', opciones: ['Porque suele envolver un conjunto de negocios jurídicos con una finalidad económica', 'Porque los bancos no celebran contratos', 'Porque la LGB prohíbe usar la palabra contrato', 'Porque son actos unilaterales del banco'], correcta: 0, explicacion: 'Ejemplo: el mutuo hipotecario endosable.' },
      { tipo: 'vf', seccion: 'depositos', sub: 'dep-ccb', enunciado: 'La cuenta corriente bancaria puede ser a la vez operación pasiva y activa.', respuesta: true, explicacion: 'Pasiva cuando el cliente deposita; activa cuando gira sobre su línea de sobregiro.' },
      { tipo: 'alternativas', seccion: 'depositos', sub: 'dep-vista', enunciado: '¿Qué dos actos concurren en el vale vista?', opciones: ['Un depósito irregular del cliente y la emisión por el banco de un efecto de comercio a la orden del beneficiario', 'Un mutuo y una fianza', 'Una cuenta corriente y un cheque', 'Un depósito a plazo y un endoso'], correcta: 0, explicacion: 'Por eso siempre tiene fondos y el banco debe pagarlo a su presentación.' },
      { tipo: 'vf', seccion: 'depositos', sub: 'dep-vista', enunciado: 'Los depósitos a la vista devengan intereses y reajustes.', respuesta: false, explicacion: 'No devengan intereses ni reajustes.' },
      { tipo: 'alternativas', seccion: 'depositos', sub: 'dep-plazo', enunciado: '¿Desde qué plazo puede ser reajustable un depósito a plazo?', opciones: ['Si excede 90 días', 'Desde 30 días', 'Desde 1 año', 'Nunca puede ser reajustable'], correcta: 0, explicacion: 'Según las diapositivas.' },
      { tipo: 'alternativas', seccion: 'depositos', sub: 'dep-garantia', enunciado: 'Una SpA tiene depósitos a plazo por $600 millones. ¿Los cubre la garantía limitada del art. 144 LGB?', opciones: ['No, porque solo beneficia a personas naturales', 'Sí, hasta UF 200', 'Sí, en un 100%', 'Sí, hasta UF 400'], correcta: 0, explicacion: 'Ejemplo de los apuntes.' },
      { tipo: 'relacionar', seccion: 'depositos', sub: 'dep-garantia', enunciado: 'Relaciona cada depósito con su régimen de garantía estatal.', pares: [['Cuenta corriente', '100% (art. 132)'], ['Depósito a la vista', '100% (art. 132)'], ['Depósito a plazo de persona natural', 'Hasta UF 200 por banco al año'], ['Depósitos a plazo en todo el sistema', 'Hasta UF 400 al año']], explicacion: 'La garantía limitada exige además persona natural y depósito nominativo o a la orden.' },
      { tipo: 'alternativas', seccion: 'activas', sub: 'act-descuento', enunciado: '¿Por qué el descuento bancario está sujeto a la TMC?', opciones: ['Porque es operación de crédito de dinero (art. 1° Ley 18.010), cualquiera sea la responsabilidad del cedente', 'Porque es un depósito irregular', 'Porque lo dice la UCP 600', 'No está sujeto a la TMC'], correcta: 0, explicacion: 'Además, el cliente suele quedar como deudor solidario por ser endosante.' },
      { tipo: 'alternativas', seccion: 'activas', sub: 'act-avales', enunciado: '¿Cuál de estas obligaciones NO puede avalar o afianzar un banco?', opciones: ['Una obligación del Fisco o de una entidad con participación estatal mayoritaria', 'Una obligación de dinero de un cliente, con monto y plazo determinados', 'Un contrato de derivados con monto máximo pactado', 'Una deuda comercial de una empresa privada'], correcta: 0, explicacion: 'Tampoco puede garantizar obligaciones de otras instituciones financieras del país.' },
      { tipo: 'vf', seccion: 'activas', sub: 'act-avales', enunciado: 'Al otorgar una fianza, el banco debe quedar con un título ejecutivo para su acción de regreso contra el deudor.', respuesta: true, explicacion: 'Exigencia del art. 69 N°11 LGB y la RAN 8-10.' },
      { tipo: 'alternativas', seccion: 'activas', sub: 'act-mutuos', enunciado: 'En el mutuo hipotecario endosable, el banco que endosa responde…', opciones: ['Solo de la existencia del crédito', 'Del pago, solidariamente con el deudor', 'De la solvencia del deudor por un año', 'De la existencia y del valor del inmueble'], correcta: 0, explicacion: 'El endoso es sin responsabilidad.' },
      { tipo: 'vf', seccion: 'activas', sub: 'act-mutuos', enunciado: 'La anotación del endoso al margen de la inscripción hipotecaria es requisito para transferir el mutuo hipotecario endosable.', respuesta: false, explicacion: 'Es solo para fines de información.' },
      { tipo: 'alternativas', seccion: 'activas', sub: 'doc-independencia', enunciado: 'La mercadería llega defectuosa, pero los documentos de la carta de crédito están conformes. ¿Qué hace el banco?', opciones: ['Paga, por el principio de independencia', 'Suspende el pago hasta que se resuelva la disputa', 'Paga solo la mitad', 'Devuelve los documentos al exportador'], correcta: 0, explicacion: 'El comprador debe reclamar al vendedor por la compraventa.' },
      { tipo: 'relacionar', seccion: 'activas', sub: 'doc-sujetos', enunciado: 'Relaciona cada sujeto del crédito documentario con su papel.', pares: [['Ordenante', 'Importador que pide la apertura'], ['Banco emisor', 'Abre el crédito a favor del beneficiario'], ['Banco corresponsal', 'Avisa, revisa los documentos y paga'], ['Beneficiario', 'Exportador que cobra contra documentos']], explicacion: 'Rige la UCP 600.' },
      { tipo: 'alternativas', seccion: 'filiales', sub: 'fil-letra-a', enunciado: '¿Cuál actividad corresponde al art. 70 letra a) LGB (servicios financieros regulados)?', opciones: ['Corredores de bolsa', 'Leasing', 'Factoraje', 'Cobranza de créditos'], correcta: 0, explicacion: 'Leasing, factoraje y cobranza son complementarias al giro (letra b).' },
      { tipo: 'vf', seccion: 'filiales', sub: 'fil-requisitos', enunciado: 'Por regla general, una filial bancaria no puede adquirir acciones de otras sociedades.', respuesta: true, explicacion: 'Art. 71: solo si la CMF lo estima imprescindible, con tope del 5% del capital pagado de la sociedad.' },
      { tipo: 'alternativas', seccion: 'filiales', sub: 'fil-silencio', enunciado: '¿Cuándo opera el silencio administrativo positivo para constituir una filial?', opciones: ['Si el banco está en categoría I y la CMF no rechaza fundadamente en 60 días', 'Siempre, después de 90 días', 'Si el banco está en categoría III', 'Nunca'], correcta: 0, explicacion: 'Art. 73 LGB, con remisión al art. 64 de la Ley 19.880.' },
      { tipo: 'vf', seccion: 'filiales', sub: 'fil-letra-a', enunciado: 'Un banco puede condicionar un crédito a que el cliente contrate seguros con su corredora filial.', respuesta: false, explicacion: 'Está prohibido. Lo mismo vale para la asesoría previsional del art. 70 bis.' },
      { tipo: 'alternativas', seccion: 'apoyo', sub: 'apoyo-concepto', enunciado: 'Transbank es un ejemplo de…', opciones: ['Sociedad de apoyo al giro del art. 74 LGB', 'Filial del art. 70 letra a)', 'Sucursal en el exterior', 'Operación neutra directa'], correcta: 0, explicacion: 'Presta servicios para facilitar los fines de las entidades financieras (letra a).' },
      { tipo: 'vf', seccion: 'apoyo', sub: 'apoyo-concepto', enunciado: 'Por medio de una sociedad de apoyo al giro de la letra b) un banco puede captar dinero del público.', respuesta: false, explicacion: 'La letra b) permite operaciones con el público que no incluyan la captación de dinero.' },
      { tipo: 'alternativas', seccion: 'exterior', sub: 'ext-vias', enunciado: 'Para invertir en acciones de un banco extranjero, un banco chileno necesita autorización de…', opciones: ['La CMF y el Banco Central', 'Solo la CMF', 'Solo el Banco Central', 'El Ministerio de Hacienda'], correcta: 0, explicacion: 'Para sucursales u oficinas de representación basta la CMF.' },
      { tipo: 'alternativas', seccion: 'limites', sub: 'lim-individual', enunciado: '¿Cuál es el límite individual general de crédito del art. 84 N°1 LGB?', opciones: ['10% del patrimonio efectivo', '5% del patrimonio efectivo', '30% del patrimonio efectivo', '50% del capital pagado'], correcta: 0, explicacion: 'Puede subir a 15% (concesiones) o a 30% (exceso caucionado, otro banco o grupo empresarial).' },
      { tipo: 'alternativas', seccion: 'limites', sub: 'lim-individual', enunciado: 'Banco con patrimonio efectivo de 8.000.000 UF presta 1.000.000 UF a un deudor sin garantías. ¿Cuál es la multa?', opciones: ['20.000 UF (10% del exceso de 200.000 UF)', '100.000 UF', '200.000 UF', 'No hay multa'], correcta: 0, explicacion: 'Límite: 800.000 UF. Exceso: 200.000 UF. Multa: 10% del exceso.' },
      { tipo: 'vf', seccion: 'limites', sub: 'lim-relacionadas', enunciado: 'A una persona relacionada con el banco se le puede prestar en mejores condiciones que a terceros si el crédito está caucionado.', respuesta: false, explicacion: 'Art. 84 N°2: nunca en términos más favorables que a terceros en operaciones similares.' },
      { tipo: 'relacionar', seccion: 'limites', sub: 'lim-prohibiciones', enunciado: 'Relaciona cada infracción del art. 84 con su sanción.', pares: [['Exceder el límite individual', 'Multa del 10% del exceso'], ['Crédito a relacionados sobre el límite', 'Multa del 20% del crédito'], ['Crédito para pagar acciones del banco', 'Multa igual al valor del crédito'], ['Prendar o hipotecar bienes físicos del banco', 'Nulidad absoluta del acto']], explicacion: 'Y en todos los casos, ajustarse en 90 días.' },
      { tipo: 'alternativas', seccion: 'limites', sub: 'lim-prorrata', enunciado: 'Según el art. 85, si el deudor tiene el 40% de una sociedad, las deudas de esa sociedad…', opciones: ['Se le imputan a prorrata', 'Se le imputan en un 100%', 'No se le imputan', 'Se le imputan solo si es socio solidario'], correcta: 0, explicacion: 'Sobre 50% se imputan completas; entre más de 2% y 50%, a prorrata.' },
      { tipo: 'vf', seccion: 'limites', sub: 'lim-relacionadas', enunciado: 'No hay vinculación para la persona natural que solo tiene hasta el 1% de las acciones del banco o le debe hasta UF 3.000.', respuesta: true, explicacion: 'Según las diapositivas del art. 84 N°2.' },

      { tipo: 'oral', seccion: 'giro', enunciado: '¿Por qué y cómo se regula el giro bancario?', puntos: ['El banco intermedia: capta del público y coloca; gana con el spread. El riesgo está en la captación de dinero ajeno.', 'Primera respuesta (arts. 27 y ss.): limitar el desarrollo del giro; sociedad anónima especial autorizada y fiscalizada por la CMF.', 'Art. 39: exclusividad del giro; nadie no autorizado puede captar habitualmente dinero del público ni usar expresiones de banco.', 'Segunda respuesta (arts. 40 y 69): reserva legal y especialidad; catálogo taxativo; fuera de él, objeto ilícito y nulidad absoluta.', 'Fuentes: ley y normativa de BC y CMF, condiciones generales (adhesión, LPDC), costumbre (arts. 4° y 5° CCom) y jurisprudencia.'], norma: 'Arts. 27, 39, 40 y 69 LGB; art. 3° N°11 CCom' },
      { tipo: 'oral', seccion: 'tipos', enunciado: 'Clasifique las operaciones bancarias y dé ejemplos de cada una.', puntos: ['Concepto: «operación» porque envuelve un conjunto de negocios (art. 40 y 69 LGB).', 'Pasivas o de captación: el banco obtiene recursos y es deudor (depósitos).', 'Activas o de colocación: el banco entrega lo captado y es acreedor (préstamos, descuento, mutuo hipotecario).', 'Neutras o de servicios: comisión por un servicio (divisas, cajas de seguridad, custodia, mandatos, fianzas al otorgarse).', 'La cuenta corriente es mixta.'], norma: 'Arts. 40 y 69 LGB' },
      { tipo: 'oral', seccion: 'depositos', enunciado: 'Explique los depósitos bancarios y la garantía estatal.', puntos: ['Son depósitos irregulares: el banco se hace dueño y restituye otro tanto.', 'Vista y vale vista (art. 65): dos actos; el banco paga a la presentación; sin intereses ni reajustes.', 'A plazo (art. 69 N°1): con intereses; sin retiro anticipado salvo renunciar a intereses y reajuste; reajustable si excede 90 días.', 'Ahorro a plazo: giros limitados.', 'Garantía: 100% para cuenta corriente, ahorro a la vista y vista (art. 132); limitada para depósitos a plazo de personas naturales: UF 200 por banco y UF 400 en el sistema por año (art. 144).'], norma: 'Arts. 65, 69 N°1, 132 y 144 LGB' },
      { tipo: 'oral', seccion: 'activas', enunciado: 'Explique el crédito documentario y el principio de independencia.', puntos: ['Art. 69 N°10 LGB; se rige por la UCP 600.', 'Resuelve la desconfianza entre comprador y vendedor a distancia.', 'Sujetos: ordenante, banco emisor, banco corresponsal y beneficiario.', 'Fases: compraventa, solicitud, aviso del corresponsal, embarque y presentación, verificación y pago, entrega de documentos al importador.', 'Independencia: el banco no puede negarse a pagar por incumplimiento de la compraventa; el examen es solo documental.', 'No es fianza: es un compromiso directo y autónomo del banco.'], norma: 'Art. 69 N°10 LGB; UCP 600' },
      { tipo: 'oral', seccion: 'activas', enunciado: 'Explique el descuento bancario, los avales y fianzas bancarias y el mutuo hipotecario endosable.', puntos: ['Descuento (69 N°4): valor nominal menos descuento; cliente como deudor solidario; es OCD y queda sujeto a la TMC.', 'Avales y fianzas (69 N°11, RAN 8-10): obligaciones de dinero con monto y plazo determinados; título ejecutivo para el regreso; prohibido garantizar a otras financieras nacionales y al Fisco o entidades estatales.', 'Mutuo hipotecario endosable (69 N°7): escritura pública a la orden; endoso sin responsabilidad (solo existencia); anotación marginal informativa; mercado secundario y tasas más bajas.'], norma: 'Art. 69 N°4, 7 y 11 LGB' },
      { tipo: 'oral', seccion: 'filiales', enunciado: '¿Qué puede hacer un banco por medio de filiales y sociedades de apoyo al giro?', puntos: ['Art. 70 a): corredores de bolsa, AGF, securitización, corredores de seguros, leasing habitacional.', 'Art. 70 b): leasing, factoraje, asesoría financiera, custodia, cobranza y otras que declare la CMF.', 'Art. 70 bis: asesoría previsional.', 'Arts. 71-73: límites de inversión (5%), requisitos (capital, clasificación, factibilidad), plazos de 90/120 días y silencio positivo para categoría I.', 'Art. 74: apoyo al giro, objeto exclusivo; letra a) apoyo interno (Transbank), letra b) canal con el público sin captación. Art. 75: fiscaliza la CMF.'], norma: 'Arts. 70 a 75 LGB' },
      { tipo: 'oral', seccion: 'limites', enunciado: 'Explique las limitaciones de crédito de los arts. 84 y 85 LGB.', puntos: ['N°1: 10% del patrimonio efectivo; 15% concesiones; 30% si el exceso está caucionado; 30% a otro banco y al grupo empresarial. Multa: 10% del exceso.', 'N°2: relacionados sin mejores condiciones; 5% por grupo, 25% caucionado, total no mayor al patrimonio efectivo; multa del 20%.', 'N°3 a 6: crédito para pagar acciones propias; a directores y apoderados; adquisición de bienes; garantías por terceros e hipotecar o prendar bienes (nulidad absoluta).', 'Ajuste en 90 días; si no, Título III Ley 21.000.', 'Art. 85: imputación de sociedades (más de 50% completo; más de 2% hasta 50% a prorrata) y solidaridad con pluralidad de deudores.'], norma: 'Arts. 84 y 85 LGB' },
      /* ---- Preguntas por subsección según el apunte completo de clases (agregadas al final) ---- */
      { tipo: 'vf', seccion: 'depositos', sub: 'dep-ahorro', enunciado: 'En la cuenta de ahorro a plazo, si se excede el número de giros permitido, se pierde el reajuste.', respuesta: true, explicacion: 'Es una modalidad del depósito a plazo con un número limitado de giros.' },
      { tipo: 'alternativas', seccion: 'depositos', sub: 'dep-garantia', enunciado: '¿En qué supuesto opera la garantía del 100% del art. 132 LGB?', opciones: ['En la liquidación forzosa del banco, con cargo a sus reservas y encajes', 'En cualquier corrida bancaria, financiada por el Fisco', 'Solo para depósitos a plazo de personas naturales', 'Solo para bancos extranjeros'], correcta: 0, explicacion: 'La garantía limitada del art. 144 es la que opera ante iliquidez o corridas, sin procedimiento concursal, financiada por el Fisco y solo para personas naturales.' },
      { tipo: 'alternativas', seccion: 'activas', sub: 'doc-concepto', enunciado: '¿Qué normas rigen principalmente el crédito documentario?', opciones: ['Las UCP 600 de la Cámara de Comercio Internacional', 'El Código Civil chileno', 'La Ley 18.010', 'La Ley de Mercado de Valores'], correcta: 0, explicacion: 'La compraventa de fondo se rige por la Convención de Viena de 1980 y los Incoterms.' },
      { tipo: 'alternativas', seccion: 'activas', sub: 'doc-desconfianza', enunciado: '¿Qué problema resuelve el crédito documentario?', opciones: ['La desconfianza recíproca: el comprador no quiere pagar sin embarque y el vendedor no quiere embarcar sin cobro', 'La falta de liquidez del banco emisor', 'El cálculo de la tasa máxima convencional', 'La inscripción de la mercadería en el Conservador'], correcta: 0, explicacion: 'Reemplaza la incertidumbre sobre el comprador por el compromiso de un banco solvente.' },
      { tipo: 'vf', seccion: 'activas', sub: 'doc-independencia', enunciado: 'Si el comprador descubre que los equipos son de un año distinto al pactado, pero ese requisito no figura entre los documentos de la carta de crédito, el banco puede negarse a pagar.', respuesta: false, explicacion: 'El banco solo revisa los documentos exigidos en la carta («check, check, check»). Si están conformes, paga; el comprador reclama al vendedor por la compraventa.' },
      { tipo: 'alternativas', seccion: 'activas', sub: 'doc-fases', enunciado: 'En el crédito documentario, ¿quién verifica los documentos y paga al exportador?', opciones: ['El banco corresponsal, en el país del exportador', 'El importador, al recibir la mercadería', 'La aduana del país de destino', 'El exportador mismo'], correcta: 0, explicacion: 'Luego remite los documentos al banco emisor, que los entrega al importador para desaduanar la mercadería.' },
      { tipo: 'alternativas', seccion: 'activas', sub: 'doc-standby', enunciado: 'En una carta de crédito standby para un contrato de construcción, ¿contra qué paga el banco cada tramo?', opciones: ['Contra la presentación de un certificado de avance de un perito independiente', 'Después de que sus ejecutivos inspeccionan la obra', 'Cuando el mandante lo autoriza en cada caso', 'Al terminar toda la obra'], correcta: 0, explicacion: 'Se mantiene la lógica documental: el banco no va a la obra; paga contra el certificado.' },
      { tipo: 'alternativas', seccion: 'filiales', sub: 'fil-letra-b', enunciado: '¿Cuál es una actividad complementaria al giro del art. 70 letra b) LGB?', opciones: ['Leasing', 'Corretaje de bolsa', 'Administración general de fondos', 'Securitización'], correcta: 0, explicacion: 'Letra b): leasing, factoraje, asesoría financiera, custodia y transporte de valores, cobranza. Las otras son servicios financieros regulados de la letra a).' },
      { tipo: 'alternativas', seccion: 'filiales', sub: 'fil-previsional', enunciado: '¿Quién supervisa a las filiales bancarias de asesoría previsional (art. 70 bis)?', opciones: ['La Superintendencia de Pensiones y la CMF, con NCG conjunta', 'Solo el Banco Central', 'El Sernac', 'Las AFP'], correcta: 0, explicacion: 'Las incorporó la Ley 21.130 de 2019. El banco no puede condicionar créditos a contratar esa asesoría.' },
      { tipo: 'alternativas', seccion: 'filiales', sub: 'fil-plazos', enunciado: '¿En qué plazo debe pronunciarse la CMF sobre la constitución de una filial bancaria?', opciones: ['90 días, o 120 si pide antecedentes adicionales', '30 días', '60 días en todos los casos', '1 año'], correcta: 0, explicacion: 'Art. 73. Los 60 días son el plazo del silencio positivo para bancos en categoría I.' },
      { tipo: 'vf', seccion: 'filiales', sub: 'fil-rechazo', enunciado: 'Si el banco está en categoría III de gestión, la CMF puede rechazar la filial por deficiencias de gestión.', respuesta: true, explicacion: 'Además de incumplir los arts. 71 y 72. No es prudente que un banco con problemas asuma nuevos riesgos.' },
      { tipo: 'vf', seccion: 'apoyo', sub: 'apoyo-condiciones', enunciado: 'Una sociedad de apoyo al giro que administra medios de pago puede cobrar más a una fintech solo porque no es uno de los bancos dueños de la red.', respuesta: false, explicacion: 'Según el apunte, tras la Ley Fintech (21.521) debe ofrecer condiciones públicas, generales, objetivas y no discriminatorias.' },
      { tipo: 'vf', seccion: 'exterior', sub: 'ext-fondo', enunciado: 'Si la CMF autorizó a un banco chileno a operar en un país, puede negar la misma autorización a otro banco aunque las condiciones del país no hayan cambiado.', respuesta: false, explicacion: 'Art. 77: principio de no discriminación, salvo un cambio sustancial en las condiciones del país.' },
      { tipo: 'alternativas', seccion: 'exterior', sub: 'ext-procedimiento', enunciado: '¿Qué ocurre si la CMF no resuelve a tiempo una solicitud para operar en el exterior?', opciones: ['Se entiende aprobada (silencio positivo)', 'Se entiende rechazada', 'Decide el Banco Central', 'Se suspende indefinidamente'], correcta: 0, explicacion: 'El plazo es de 90 días (+45 si pide antecedentes), y se reduce a la mitad si el banco es sólido y el país de bajo riesgo.' },
      { tipo: 'alternativas', seccion: 'limites', sub: 'lim-propias', enunciado: '¿Por qué el art. 84 N°3 prohíbe al banco dar crédito para pagar acciones del propio banco?', opciones: ['Para evitar manipular el control de la junta con fondos de los depositantes', 'Porque las acciones bancarias no pueden venderse', 'Porque la CMF fija su precio', 'Para proteger a los directores'], correcta: 0, explicacion: 'La sanción es una multa igual al valor del crédito.' },
      { tipo: 'vf', seccion: 'limites', sub: 'lim-directores', enunciado: 'Quien es nombrado director de un banco puede asumir el cargo manteniendo su crédito hipotecario vigente en ese banco.', respuesta: false, explicacion: 'Según el apunte, debe antes extinguir o ajustar sus deudas con el banco (art. 84 N°4).' },
      { tipo: 'alternativas', seccion: 'limites', sub: 'lim-bienes', enunciado: 'Un banco se adjudica una casa en un remate judicial. ¿En qué plazo debe enajenarla?', opciones: ['1 año', '6 meses', '90 días', '5 años'], correcta: 0, explicacion: 'Art. 84 N°5: un año para bienes en general y seis meses si son acciones. Si no, multa igual al valor y 10% mensual.' },
      { tipo: 'vf', seccion: 'limites', sub: 'lim-cauciones', enunciado: 'Es válida la hipoteca que un banco constituye sobre su casa central para garantizar la obligación de un tercero.', respuesta: false, explicacion: 'Art. 84 N°6: es nula absolutamente, además de las sanciones pecuniarias.' },
      { tipo: 'alternativas', seccion: 'limites', sub: 'lim-encuadramiento', enunciado: 'Un banco pagó la multa por exceder un límite del art. 84. ¿Qué debe hacer además?', opciones: ['Ajustarse a los márgenes en 90 días; si no, la CMF aplica las sanciones del Título III de la Ley 21.000', 'Nada: la multa subsana la infracción', 'Pedir autorización al Banco Central', 'Liquidar el banco'], correcta: 0, explicacion: 'Pagar la multa no da derecho a mantener la irregularidad.' },
      { tipo: 'alternativas', seccion: 'limites', sub: 'lim-100', enunciado: 'Un deudor pide 500.000 UF y una SpA en que tiene el 51% pide 400.000 UF. ¿Cuánto se le imputa para el límite individual?', opciones: ['900.000 UF', '500.000 UF', '704.000 UF', '400.000 UF'], correcta: 0, explicacion: 'Art. 85 letra a): las deudas de sociedades en que tiene más del 50% se le imputan al 100%.' },
      { tipo: 'vf', seccion: 'limites', sub: 'lim-pluralidad', enunciado: 'Si dos personas piden juntas un crédito sin pactar nada más, para los límites del art. 84 se imputa a cada una solo la mitad.', respuesta: false, explicacion: 'Art. 85 letra c): se presume solidaria y se imputa el total a cada uno, salvo que conste fehacientemente que es simplemente conjunta.' },
      { tipo: 'oral', seccion: 'activas', enunciado: 'Explique las fases del crédito documentario y su uso en el comercio local (standby).', puntos: ['Fases: compraventa; el importador pide la apertura al banco emisor; el emisor instruye al corresponsal, que avisa al exportador.', 'El exportador embarca y presenta documentos; el corresponsal los verifica y paga; los documentos llegan al importador para retirar la mercadería.', 'Independencia y examen solo documental (UCP 600).', 'Standby: pagos por hitos contra certificados de avance de un perito, sin que el banco revise la obra.'], norma: 'Art. 69 N°10 LGB; UCP 600' },
      /* ---- Preguntas de razonamiento (borrador de NotebookLM, revisadas contra el apunte completo de Goldenberg; agregadas al final) ---- */
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-respuestas', enunciado: 'Una startup sin autorización de la CMF capta dinero del público, promete un 4% anual y con esos fondos presta a empresas. ¿Cómo se califica su actividad?', opciones: ['Infringe el art. 39 LGB: solo quien está autorizado por ley puede captar habitualmente dinero del público', 'Es lícita mientras no supere la tasa máxima convencional', 'Es lícita porque las fintech no son bancos', 'Solo requiere inscribirse en el Sernac'], correcta: 0, explicacion: 'La captación de fondos del público es el centro de protección del derecho bancario: genera el riesgo de insolvencia que justifica la intervención del Estado. Por eso el art. 39 la reserva a quienes la ley autoriza.' },
      { tipo: 'alternativas', seccion: 'giro', sub: 'giro-respuestas', enunciado: 'Una fundación sin fines de lucro, que da microcréditos y no busca engañar a nadie, se presenta al público como «Banco de la Igualdad». ¿Infringe la ley?', opciones: ['Sí: el art. 39 prohíbe a quien no está autorizado usar expresiones que indiquen que es una empresa bancaria', 'No, porque sus fines son benéficos', 'No, porque no capta depósitos', 'Solo si cobra intereses sobre la TMC'], correcta: 0, explicacion: 'La prohibición alcanza el local, la publicidad, los membretes y los formularios, en cualquier idioma. En el ejemplo de clase, sus representantes enfrentaron un proceso penal y tuvieron que cambiar el nombre.' },
      { tipo: 'alternativas', seccion: 'tipos', sub: 'tipos-clases', enunciado: 'Un banco (1) abre un depósito a plazo a un cliente, (2) otorga una fianza solidaria para garantizar una obligación de otro cliente y (3) le aprueba una línea de crédito a una empresa. ¿Cómo se clasifican, al momento de celebrarse?', opciones: ['(1) Pasiva, (2) neutra y (3) activa', '(1) Activa, (2) activa y (3) pasiva', '(1) Pasiva, (2) activa y (3) activa', '(1) Neutra, (2) pasiva y (3) activa'], correcta: 0, explicacion: 'Al otorgarse, la fianza es neutra: el banco no recibe ni desembolsa dinero; solo compromete su patrimonio a cambio de una comisión. Si se ejecuta después, la operación pasa a tener un flujo de fondos.' },
      { tipo: 'alternativas', seccion: 'depositos', sub: 'dep-plazo', enunciado: 'Una constructora tiene un depósito a plazo a 180 días. Al día 60, el contrato le permite un retiro anticipado y lo hace. ¿Qué consecuencia tiene?', opciones: ['Pierde todos los intereses y reajustes devengados', 'Recibe los intereses proporcionales a los 60 días', 'Paga una comisión de un mes de intereses, como en el prepago', 'El banco no puede devolverle nada antes del vencimiento, aunque el contrato lo permita'], correcta: 0, explicacion: 'El plazo también beneficia al banco, que planifica su liquidez y coloca esos fondos. Por regla general no se puede retirar antes; si el contrato lo permite, el castigo es perder intereses y reajustes.' },
      { tipo: 'alternativas', seccion: 'depositos', sub: 'dep-ccb', enunciado: 'Un cliente tiene $5.000.000 en su cuenta corriente y en el mes hace pagos por $7.000.000; los $2.000.000 que faltan los cubre su línea de crédito. ¿Cómo se clasifica la operación del banco?', opciones: ['Pasiva respecto de los $5.000.000 depositados y activa respecto de los $2.000.000 del sobregiro', 'Activa por los $7.000.000', 'Pasiva por los $7.000.000', 'Neutra, porque el banco solo cumple órdenes de pago'], correcta: 0, explicacion: 'La cuenta corriente bancaria tiene un componente pasivo (el banco recibe y custodia fondos) y uno activo (cuando el cliente gira sobre sus fondos, sale dinero del banco como préstamo).' },
      { tipo: 'alternativas', seccion: 'activas', sub: 'act-mutuos', enunciado: 'Pedro tiene un mutuo hipotecario endosable a 20 años. El banco lo endosa a una compañía de seguros sin preguntarle. Pedro alega que la transferencia no vale sin su consentimiento. ¿Tiene razón?', opciones: ['No: la escritura tiene cláusula a la orden y el crédito se transfiere por endoso, sin autorización ni notificación del deudor', 'Sí: toda cesión de créditos requiere notificar o aceptar al deudor', 'Sí, salvo que el endoso conste en el Conservador', 'No, pero el banco cedente queda respondiendo del pago'], correcta: 0, explicacion: 'Es la ventaja del art. 69 N°7 LGB frente a la cesión de créditos ordinaria. El banco endosa sin responsabilidad (solo responde de la existencia del crédito), y la anotación al margen de la inscripción es para informar a terceros.' },
      { tipo: 'alternativas', seccion: 'apoyo', sub: 'apoyo-concepto', enunciado: 'Transbank, una sociedad de apoyo al giro, quiere aprovechar sus oficinas para abrir una cafetería. ¿Puede hacerlo?', opciones: ['No: por el principio de objeto único y exclusivo (art. 74 LGB) solo puede dedicarse a su finalidad autorizada', 'Sí, si la cafetería es rentable', 'Sí, si la CMF no se opone en 90 días', 'No, porque solo un banco puede tener locales abiertos al público'], correcta: 0, explicacion: 'A diferencia de una sociedad comercial común, la sociedad de apoyo al giro no puede desarrollar actividades ajenas a su objeto autorizado.' },
      { tipo: 'alternativas', seccion: 'exterior', sub: 'ext-vias', enunciado: 'Un banco chileno quiere (1) abrir una oficina de representación en Tokio y (2) comprar acciones de un banco peruano. ¿Qué autorizaciones necesita?', opciones: ['(1) Solo de la CMF; (2) de la CMF y del Banco Central', '(1) y (2) solo de la CMF', '(1) y (2) de la CMF y del Banco Central', '(1) Del Banco Central; (2) solo de la CMF'], correcta: 0, explicacion: 'Art. 76 LGB: la CMF autoriza siempre. El Banco Central se agrega solo cuando hay inversión en acciones. Ejemplos de clase: la sucursal de Itaú Corpbanca en Nueva York (solo CMF) y la participación de BCI en City National Bank (CMF y Banco Central).' },
    ]
  });
})();
