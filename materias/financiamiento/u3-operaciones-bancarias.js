/* Unidad 3 — Operaciones bancarias: giro bancario, operaciones directas, filiales,
   sociedades de apoyo al giro, operaciones en el exterior y limitaciones de crédito.
   Fuentes: diapositivas «Operaciones bancarias» y apuntes de clases del Prof. Goldenberg. */
(function () {
  var fmt = function (n, d) { return Number(n).toLocaleString('es-CL', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); };

  Estudio.registrarUnidad({
    id: 'u3', numero: 3, bloque: 'Prof. Goldenberg', profesor: 'Goldenberg',
    titulo: 'Operaciones bancarias',
    resumen: 'Por qué se regula el giro bancario, qué operaciones puede hacer un banco (directamente, por filiales, por sociedades de apoyo al giro y en el exterior) y cuáles son los límites de crédito de los arts. 84 y 85 LGB.',
    lecturas: 'Diapositivas «Operaciones bancarias» (segundo semestre 2026) y apuntes de clases (Prof. Goldenberg). Normas: Ley General de Bancos (LGB), especialmente arts. 39, 40, 69 a 79, 84 y 85.',

    /* ---------------- Glosario (definiciones del material) ---------------- */
    glosario: [
      {"termino": "Banco", "definicion": "Toda sociedad anónima especial que, autorizada en la forma prescrita por esta Ley y con sujeción a la misma, se dedique a captar o recibir en forma habitual dinero o fondos del público, con el objeto de darlos en préstamo, descontar documentos, realizar inversiones, proceder a la intermediación financiera, hacer rentar estos dineros y, en general, realizar toda otra operación que la ley le permita.", "fuente": "Art. 40 LGB", "seccion": "tipos", "literal": true, "alias": ["bancos", "giro bancario"]},
      {"termino": "Exclusividad del giro bancario", "definicion": "Prohibición de que una persona no autorizada por ley se dedique al giro bancario, en especial a captar habitualmente dinero del público, o use expresiones que sugieran que es un banco.", "fuente": "Art. 39 LGB", "seccion": "giro", "alias": ["invasion del giro"]},
      {"termino": "Spread", "definicion": "Diferencia entre la tasa que el banco paga por los depósitos y la que cobra por los créditos; es su ganancia como intermediario.", "fuente": "Apuntes de clases", "seccion": "giro"},
      {"termino": "Operación bancaria", "definicion": "Conjunto de negocios jurídicos que el banco realiza con una finalidad económica, dentro de lo que la ley le permite.", "fuente": "Diapositivas y apuntes", "seccion": "tipos", "alias": ["operaciones bancarias"]},
      {"termino": "Operación pasiva", "definicion": "Aquella en que el banco obtiene recursos del mercado y contrae la obligación de restituir; el banco es deudor (p. ej. depósitos).", "fuente": "Diapositivas, operaciones bancarias", "seccion": "tipos", "alias": ["operaciones pasivas", "captacion"]},
      {"termino": "Operación activa", "definicion": "Aquella en que el banco entrega a sus clientes el dinero captado y queda como acreedor (p. ej. préstamos y descuento).", "fuente": "Diapositivas, operaciones bancarias", "seccion": "tipos", "alias": ["operaciones activas", "colocacion"]},
      {"termino": "Operación neutra", "definicion": "Servicio que el banco presta a cambio de una comisión, sin captar ni colocar fondos (cambio de divisas, cajas de seguridad, custodia, mandatos).", "fuente": "Diapositivas, operaciones bancarias", "seccion": "tipos", "alias": ["operaciones neutras", "operacion de servicios"]},
      {"termino": "Depósito a plazo", "definicion": "Depósito irregular con intereses cuyo retiro anticipado generalmente no se permite, salvo renunciando a intereses y reajuste; si excede 90 días puede ser reajustable.", "fuente": "Art. 69 N°1 LGB", "seccion": "depositos", "alias": ["dap"]},
      {"termino": "Depósito a la vista", "definicion": "Depósito restituible en cualquier momento, que no devenga intereses ni reajustes.", "fuente": "Diapositivas, operaciones bancarias", "seccion": "depositos"},
      {"termino": "Garantía estatal de depósitos", "definicion": "Protección legal de los depósitos: 100% para cuenta corriente, ahorro a la vista y depósitos a la vista (art. 132), y limitada a UF 200 por banco y UF 400 en el sistema por año para depósitos a plazo de personas naturales (art. 144).", "fuente": "Arts. 132 y 144 LGB", "seccion": "depositos"},
      {"termino": "Descuento bancario", "definicion": "Operación en que el banco entrega al portador de un título de crédito no vencido su valor nominal menos un descuento por el tiempo al vencimiento, contra la transferencia del título; es operación de crédito de dinero.", "fuente": "Art. 69 N°4 LGB", "seccion": "activas", "alias": ["descuento"]},
      {"termino": "Mutuo hipotecario endosable", "definicion": "Mutuo hipotecario otorgado por escritura pública con cláusula a la orden, que el banco puede transferir por endoso sin responsabilidad (solo responde de la existencia del crédito).", "fuente": "Art. 69 N°7 LGB", "seccion": "activas", "alias": ["mutuos hipotecarios endosables"]},
      {"termino": "Crédito documentario", "definicion": "Instrumento por el cual el banco asume la responsabilidad de pagar el precio de la mercadería importada por un cliente, contra la entrega de los documentos de embarque. Se rige por la UCP 600.", "fuente": "Art. 69 N°10 LGB", "seccion": "activas", "alias": ["carta de credito", "cartas de credito"]},
      {"termino": "Principio de independencia", "definicion": "En el crédito documentario, la obligación del banco es independiente del negocio causal: no puede negarse a pagar alegando incumplimiento de la compraventa.", "fuente": "UCP 600; diapositivas", "seccion": "activas"},
      {"termino": "Ordenante", "definicion": "En el crédito documentario, el comprador o importador que pide al banco emisor la apertura del crédito.", "fuente": "Diapositivas, operaciones bancarias", "seccion": "activas"},
      {"termino": "Beneficiario", "definicion": "En el crédito documentario, el vendedor o exportador que puede cobrar si cumple las condiciones documentales.", "fuente": "Diapositivas, operaciones bancarias", "seccion": "activas"},
      {"termino": "Banco corresponsal", "definicion": "Banco que comunica el crédito documentario al beneficiario, revisa los documentos y paga.", "fuente": "Diapositivas, operaciones bancarias", "seccion": "activas", "alias": ["banco confirmador"]},
      {"termino": "Filial bancaria", "definicion": "Sociedad del banco que realiza servicios financieros regulados (art. 70 a) o actividades complementarias al giro (art. 70 b), con autorización y fiscalización de la CMF.", "fuente": "Arts. 70 a 73 LGB", "seccion": "filiales", "alias": ["filiales"]},
      {"termino": "Sociedad de apoyo al giro", "definicion": "Sociedad de objeto exclusivo en que participan bancos, que presta servicios para facilitar sus fines (p. ej. Transbank) o canaliza operaciones con el público sin captación.", "fuente": "Art. 74 LGB", "seccion": "apoyo", "alias": ["sociedades de apoyo al giro"]},
      {"termino": "Límite individual de crédito", "definicion": "Ningún deudor puede obtener del banco crédito directo o indirecto por sobre el 10% de su patrimonio efectivo, salvo los márgenes mayores que la ley permite (15% o 30%).", "fuente": "Art. 84 N°1 LGB", "seccion": "limites", "alias": ["limites de credito"]},
      {"termino": "Persona vinculada", "definicion": "Persona relacionada con la propiedad o gestión del banco según los criterios de la CMF; a ella no se le puede prestar en condiciones más favorables que a terceros y rigen límites especiales.", "fuente": "Art. 84 N°2 LGB", "seccion": "limites", "alias": ["persona relacionada", "personas relacionadas", "personas vinculadas"]}
    ],

    secciones: [
      {
        id: 'giro', titulo: '1. El giro bancario y su regulación',
        html: `
<p>El banco es un <b>intermediario</b>: capta dinero de quienes tienen excedentes y lo coloca en quienes lo necesitan. Gana con el <b>spread</b>, la diferencia entre lo que paga por los depósitos (p. ej. 2%) y lo que cobra por los créditos (p. ej. 5%). Sin bancos, financiar algo como la Costanera Norte exigiría contratar con miles de personas.</p>
<p>Como el banco trabaja con dinero ajeno, el núcleo de la protección está en la <b>captación</b>. Por eso, aunque regula relaciones entre privados, el derecho bancario aplica una lógica de derecho público: el banco <b>solo puede hacer lo que la ley le permite</b>.</p>
<div class="grid dos">
  <div class="card"><div class="kicker">Primera respuesta · arts. 27 y ss. LGB</div><h4 style="margin-top:0">Limitar el desarrollo del giro</h4><p>Para crear un banco hay que pasar un procedimiento estricto ante la CMF: capital mínimo, idoneidad de los directores y estudio de factibilidad. Debe ser una <b>sociedad anónima especial</b> autorizada y fiscalizada por la CMF.</p><p><span class="norma">Art. 39 LGB</span>: <b>exclusividad del giro</b>. Nadie que no esté autorizado por ley puede dedicarse al giro bancario, en especial a captar habitualmente dinero del público, ni usar expresiones que sugieran que es un banco. Ejemplo de clase: la fundación «Banco de la Igualdad» tuvo que cambiar su nombre.</p></div>
  <div class="card"><div class="kicker">Segunda respuesta · arts. 40 y 69 LGB</div><h4 style="margin-top:0">Solo actividades permitidas</h4><p>Principio de <b>reserva legal y especialidad del giro</b>: el art. 40 define qué es un banco y el art. 69 enumera, <b>taxativamente</b>, las operaciones permitidas.</p><p>Un acto fuera de ese catálogo (y que no corresponda a filiales ni sociedades de apoyo) tiene <b>objeto ilícito</b> y es <b>nulo absolutamente</b>. Ejemplo de clase: el café del Work Café no lo vende el banco, sino una empresa externa.</p></div>
</div>
<h3>Fuentes del derecho bancario contractual</h3>
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
        id: 'tipos', titulo: '2. Concepto y tipos de operaciones bancarias',
        html: `
<div class="cita">«[…] captar o recibir en forma habitual dinero o fondos del público, con el objeto de darlos en préstamo, descontar documentos, realizar inversiones, proceder a la intermediación financiera, hacer rentar estos dineros y, en general, realizar toda otra operación que la ley le permita.»<span class="fuente">Art. 40 LGB, definición de banco</span></div>
<p>Se habla de <b>operación</b> y no de contrato porque normalmente envuelve un <b>conjunto de negocios jurídicos</b> unidos por una finalidad económica (p. ej. el mutuo hipotecario endosable, que incluye préstamo, hipoteca y circulación del crédito). El <span class="norma">art. 69 LGB</span> es un listado taxativo, sin perjuicio de lo que se hace por filiales (art. 70) y sociedades de apoyo al giro (art. 74).</p>
<div class="grid">
  <div class="card"><span class="etiqueta azul">Pasivas o de captación</span><p>El banco <b>obtiene recursos</b> del mercado y se obliga a restituir. El banco es <b>deudor</b>. Ejemplo típico: los depósitos.</p></div>
  <div class="card"><span class="etiqueta verde">Activas o de colocación</span><p>El banco <b>entrega el dinero captado</b> a sus clientes y queda como <b>acreedor</b>. Ejemplos: préstamos, descuento, mutuo hipotecario.</p></div>
  <div class="card"><span class="etiqueta amarilla">Neutras o de servicios</span><p>El banco <b>presta un servicio</b> a cambio de una comisión: cambio de divisas, cajas de seguridad, custodia de valores, mandatos para administrar bienes.</p></div>
</div>
<div class="callout"><p><b>La cuenta corriente bancaria es mixta:</b> cuando el cliente deposita, el banco capta (operación pasiva); cuando gira sobre una línea de sobregiro, el banco presta (operación activa).</p></div>`
      },
      {
        id: 'depositos', titulo: '3. Depósitos bancarios y garantía estatal',
        html: `
<p>Los depósitos son la operación pasiva por excelencia. Jurídicamente son <b>depósitos irregulares</b>: el banco se hace dueño del dinero y debe restituir otro tanto.</p>
<table class="tabla">
<tr><th>Depósito</th><th>Rasgos</th></tr>
<tr><td><b>A la vista y vale vista</b><br><span class="norma">art. 65 LGB</span></td><td>Restituible en cualquier momento. El vale vista reúne <b>dos actos</b>: (i) un depósito irregular del cliente al banco y (ii) la emisión por el banco de un efecto de comercio a la orden del beneficiario. El banco debe pagarlo a su presentación. <b>No devengan intereses ni reajustes.</b></td></tr>
<tr><td><b>A plazo</b><br><span class="norma">art. 69 N°1 LGB</span></td><td>Depósito irregular con intereses a favor del cliente. Generalmente <b>impide el retiro anticipado</b>, salvo que el cliente renuncie a intereses y reajuste. Si excede <b>90 días</b> puede ser reajustable. Puede emitirse a la orden.</td></tr>
<tr><td><b>Cuenta de ahorro a plazo</b></td><td>Modalidad del depósito a plazo, con libreta o anotaciones en cuenta y un <b>número limitado de giros</b>; si se excede, se pierde el reajuste.</td></tr>
</table>
<h3>Garantía estatal de los depósitos</h3>
<div class="grid dos">
  <div class="card"><div class="kicker">Art. 132 LGB</div><h4 style="margin-top:0">100% garantizados</h4><p>Depósitos en <b>cuenta corriente</b>, cuentas de <b>ahorro a la vista</b>, <b>depósitos a la vista</b> y depósitos en cuenta corriente a plazo con giro incondicional. Según los apuntes, opera en la liquidación forzosa del banco, con cargo a sus reservas.</p></div>
  <div class="card"><div class="kicker">Arts. 144 y ss. LGB</div><h4 style="margin-top:0">Garantía limitada</h4><ul><li>Solo <b>personas naturales</b>.</li><li>Hasta <b>UF 200 por banco</b> por año y hasta <b>UF 400 en todo el sistema</b> por año.</li><li>Solo <b>depósitos a plazo nominativos o a la orden</b> (incluye libretas de ahorro a plazo con giro diferido).</li></ul></div>
</div>
<p class="small">Ejemplo de clase: los $600 millones en depósitos a plazo de una SpA no están cubiertos por el art. 144, porque es una persona jurídica.</p>`
      },
      {
        id: 'activas', titulo: '4. Descuento, avales, mutuos endosables y crédito documentario',
        html: `
<h3>Descuento bancario (art. 69 N°4 LGB)</h3>
<ul>
  <li>El banco entrega dinero al portador de un título de crédito <b>no vencido</b> (letra o pagaré), contra la transferencia del título.</li>
  <li>Entrega el <b>valor nominal menos el descuento</b> por el tiempo que falta al vencimiento, a cierta tasa de interés.</li>
  <li>Por regla general el cliente queda como <b>deudor solidario</b>: como endosante responde del pago.</li>
  <li>Es <b>operación de crédito de dinero</b> (art. 1° Ley 18.010), cualquiera sea la responsabilidad del cedente. Por eso está sujeto a la TMC.</li>
</ul>
<h3>Avales y fianzas (art. 69 N°11 LGB · RAN 8-10)</h3>
<ul>
  <li>Pueden ser simples o solidarios. Al otorgarse son operación <b>neutra</b>: el banco cobra una comisión y compromete su patrimonio.</li>
  <li>Solo se avalan <b>obligaciones de dinero</b> de operaciones efectivas y conocidas, con <b>monto y plazo determinados</b> y riesgo calificado. Si el monto no es determinable (p. ej. derivados), se fija un <b>monto máximo</b>.</li>
  <li>El banco debe quedar con un <b>título ejecutivo</b> incuestionable para su acción de regreso contra el deudor.</li>
  <li><b>No puede</b> avalar ni afianzar obligaciones de <b>otras instituciones financieras del país</b> (y tiene límites respecto de las extranjeras), ni del <b>Fisco</b>, reparticiones del Estado o entidades en que este tenga participación mayoritaria.</li>
</ul>
<h3>Mutuos hipotecarios endosables (art. 69 N°7 LGB)</h3>
<p>El mutuo no es título de crédito sino un <b>crédito nominativo</b>; normalmente se cedería con las reglas de la cesión de créditos. La ley facilita su transferencia: se otorga por <b>escritura pública con cláusula a la orden</b> (una sola copia autorizada) y se transfiere por <b>endoso</b>.</p>
<ul>
  <li>El endoso es <b>sin responsabilidad</b>: el banco cedente solo responde de la <b>existencia</b> del crédito.</li>
  <li>La anotación al margen de la inscripción hipotecaria es <b>solo informativa</b>, no requisito de la transferencia.</li>
  <li>Efectos: facilita la circulación y el refinanciamiento, da liquidez al banco, crea un <b>mercado secundario hipotecario</b> y suele tener una <b>tasa más baja</b>.</li>
</ul>
<h3>Crédito documentario (art. 69 N°10 LGB · UCP 600)</h3>
<p>El banco asume la responsabilidad de <b>pagar el precio</b> de la mercadería importada por un cliente, contra la entrega de los documentos (conocimiento de embarque). Resuelve la <b>desconfianza recíproca</b>: el comprador no quiere pagar sin recibir y el vendedor no quiere embarcar sin cobrar.</p>
<table class="tabla">
<tr><th>Ordenante</th><th>Banco emisor</th><th>Banco corresponsal</th><th>Beneficiario</th></tr>
<tr><td>Comprador o importador. Pide la apertura e indica los documentos exigidos.</td><td>Abre el crédito a favor del beneficiario, por cuenta del ordenante.</td><td>Comunica el crédito al beneficiario, revisa los documentos y paga.</td><td>Vendedor o exportador. Cobra si cumple las condiciones documentales.</td></tr>
</table>
<div class="flow"><div class="node">1. Compraventa</div><div class="arrow">→</div><div class="node">2. Importador pide la carta al banco emisor</div><div class="arrow">→</div><div class="node">3. Emisor instruye al corresponsal, que avisa al exportador</div><div class="arrow">→</div><div class="node">4. Exportador embarca y presenta documentos</div><div class="arrow">→</div><div class="node hot">5. Corresponsal verifica y paga</div><div class="arrow">→</div><div class="node">6. Documentos al importador para retirar la mercadería</div></div>
<div class="callout red"><p><b>Principio de independencia:</b> el crédito documentario es absolutamente independiente del negocio causal. El banco <b>no puede negarse a pagar</b> alegando incumplimiento de la compraventa (p. ej. mercadería defectuosa). El examen es <b>solo documental</b>: si los documentos cumplen, se paga; el comprador reclamará al vendedor por la vía del contrato.</p></div>
<p class="small">Según los apuntes hay tres relaciones autónomas: la compraventa (importador-exportador), la apertura (ordenante-banco emisor) y el compromiso del banco frente al beneficiario. El banco no es fiador del comprador.</p>`
      },
      {
        id: 'filiales', titulo: '5. Operaciones por medio de filiales',
        html: `
<table class="tabla">
<tr><th>Art. 70 letra a): servicios financieros regulados</th><th>Art. 70 letra b): actividades complementarias al giro</th></tr>
<tr><td><ul><li>Agentes de valores y corredores de bolsa.</li><li>Administradoras generales de fondos (Ley 20.712).</li><li>Securitización.</li><li>Corredores de seguros (DFL 251 de 1931): prohibido condicionar créditos a contratar seguros propios.</li><li>Inmobiliarias de leasing habitacional (Ley 19.281).</li></ul><p class="small">Se rigen por su ley sectorial, con fiscalización de la CMF.</p></td>
<td><ul><li>Leasing (con o sin opción de compra).</li><li>Factoraje, asesoría financiera, custodia y transporte de valores, cobranza de créditos.</li><li>Otros servicios que la CMF declare complementarios por NCG.</li></ul><p class="small">La CMF fija por NCG las condiciones de estos giros, y puede autorizar al banco a realizarlos directamente, sin filial (art. 71).</p></td></tr>
</table>
<div class="callout"><p><b>Art. 70 bis: asesoría previsional</b> (incorporado por la Ley 21.130 de 2019, según los apuntes). Orienta a las personas sobre su situación previsional (DL 3.500). La supervisa la Superintendencia de Pensiones, con NCG conjunta con la CMF. Al banco le está vedado condicionar créditos a contratar asesoría con un asesor relacionado.</p></div>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Art. 71: inversión de la filial</h4><ul><li>Regla: la filial <b>no puede adquirir acciones</b> ni participar en otras sociedades.</li><li>Excepción: si la CMF la estima <b>imprescindible</b> para su giro, con un tope del <b>5% del capital pagado</b> de la sociedad en que invierte.</li><li>La CMF puede autorizar que el banco haga directamente las actividades de la letra b).</li></ul></div>
  <div class="card"><h4 style="margin-top:0">Art. 72: requisitos</h4><ul><li>Cumplir los requerimientos patrimoniales del art. 66.</li><li>No estar en las <b>dos últimas categorías</b> de clasificación de gestión.</li><li>Acompañar un <b>estudio de factibilidad</b> económico-financiero.</li><li>Puede tener participación minoritaria, salvo que la CMF lo deniegue porque los demás socios no cumplen el art. 28.</li></ul></div>
</div>
<h3>Art. 73: autorización de la CMF</h3>
<ul>
  <li>Plazo: <b>90 días</b> desde la solicitud; <b>120</b> si pide antecedentes adicionales.</li>
  <li>Rechazo fundado por incumplir los arts. 71 y 72; si el banco está en <b>categoría III</b> de gestión, también por deficiencias de gestión.</li>
  <li><b>Silencio administrativo positivo</b> para bancos en <b>categoría I</b>: si la CMF no rechaza fundadamente en <b>60 días</b>, se entiende aprobada (art. 64 Ley 19.880).</li>
</ul>`
      },
      {
        id: 'apoyo', titulo: '6. Sociedades de apoyo al giro',
        html: `
<p>Por el <span class="norma">art. 74 LGB</span>, los bancos pueden ser accionistas de sociedades de apoyo al giro, con <b>autorización previa de la CMF</b>. A diferencia de las filiales del art. 70, aquí el banco participa como accionista y no presta él el servicio.</p>
<div class="grid dos">
  <div class="card"><div class="kicker">Letra a)</div><h4 style="margin-top:0">Apoyo interno</h4><p>Servicios que facilitan los fines de las entidades financieras. Ejemplos: <b>Transbank</b>, Redbank.</p></div>
  <div class="card"><div class="kicker">Letra b)</div><h4 style="margin-top:0">Canal con el público</h4><p>Por su intermedio los bancos hacen ciertas operaciones con el público que <b>no incluyan captación</b>. Ejemplo: BancoEstado Contacto 24 horas.</p></div>
</div>
<ul>
  <li><b>Objeto único y exclusivo:</b> solo los servicios de la letra a) o b).</li>
  <li><b>Medios de pago:</b> deben ofrecer a emisores y operadores condiciones <b>públicas, generales, objetivas y no discriminatorias</b>; al comercio, condiciones objetivas, competitivas, transparentes y no discriminatorias, informadas con anticipación.</li>
  <li><b>Art. 75:</b> la CMF fiscaliza tanto a las filiales como a las sociedades de apoyo y les dicta NCG.</li>
</ul>
<p class="small">Según las diapositivas, la CMF tiene registradas 20 sociedades de apoyo al giro.</p>`
      },
      {
        id: 'exterior', titulo: '7. Operaciones en el exterior',
        html: `
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Vías (art. 76)</h4><ul><li>Sucursales u oficinas de representación.</li><li>Inversión en acciones de bancos extranjeros.</li><li>Inversión en empresas con los giros de los arts. 70, 71, 72 y 74.</li></ul><p><b>Autorización:</b> siempre de la CMF. Además del <b>Banco Central</b> para las inversiones accionarias (todo lo que no sean sucursales u oficinas de representación).</p></div>
  <div class="card"><h4 style="margin-top:0">Requisitos y procedimiento (arts. 77-79)</h4><ul><li>Capital, buena clasificación de gestión, estudio de factibilidad y país con fiscalización adecuada.</li><li>Plazo: <b>90 días</b> (+45 si se piden antecedentes).</li><li><b>Vía rápida:</b> plazos a la mitad si el banco es sólido y el país de bajo riesgo.</li><li><b>Silencio positivo</b> si la CMF no resuelve a tiempo.</li></ul></div>
</div>
<p>Casos: Itaú Corpbanca tiene sucursales en Nueva York; BCI participa en City National Bank, en Florida.</p>`
      },
      {
        id: 'limites', titulo: '8. Limitaciones de crédito (arts. 84 y 85 LGB)',
        html: `
<p>Buscan que la insolvencia de un deudor o de un grupo no arrastre al banco. Se miden sobre el <b>patrimonio efectivo</b> del banco.</p>
<h3>Art. 84 N°1: límite individual</h3>
<div class="grid cuatro">
  <div class="card"><div class="big">10%</div><p><b>Regla general:</b> crédito directo o indirecto a una misma persona.</p></div>
  <div class="card"><div class="big">15%</div><p><b>Obra pública concesionada:</b> créditos del DFL 164 de 1991 con prenda especial de concesión, o con dos o más bancos en convenio.</p></div>
  <div class="card"><div class="big">30%</div><p><b>Exceso caucionado:</b> garantías sobre bienes corporales de valor igual o superior al exceso sobre el 10%.</p></div>
  <div class="card"><div class="big">30%</div><p><b>Otro banco</b>, y el total al conjunto de un mismo <b>grupo empresarial</b> (Título XV Ley 18.045).</p></div>
</div>
<p><b>Sanción:</b> multa del <b>10% del exceso</b>.</p>
<h3>Art. 84 N°2: personas relacionadas</h3>
<ul>
  <li>No se les puede dar crédito en <b>condiciones más favorables</b> (plazo, tasa, garantías) que a terceros en operaciones similares.</li>
  <li>Límites: <b>5%</b> del patrimonio efectivo por cada grupo de personas vinculadas; hasta <b>25%</b> si el exceso está caucionado como en el N°1; el total nunca puede superar el patrimonio efectivo.</li>
  <li>Quién está vinculado lo determina la CMF por NCG, atendiendo a relaciones de negocios, capitales o administración con influencia significativa y permanente, a presunciones de que el crédito de una se usará en beneficio de otra, o a una unidad de intereses económicos.</li>
  <li><b>Se presume</b> vinculada una deudora constituida en el extranjero entre cuyos socios figuren otras sociedades o con acciones al portador. <b>No hay</b> vinculación para la persona natural con hasta el 1% de las acciones del banco o que le debe hasta UF 3.000.</li>
  <li><b>Sanción:</b> multa del <b>20% del crédito</b>. Los créditos vinculados se muestran en un rubro separado de los estados financieros.</li>
</ul>
<h3>Art. 84 N°3 a N°6: prohibiciones</h3>
<table class="tabla">
<tr><th>N°</th><th>Prohibición</th><th>Sanción</th></tr>
<tr><td>3</td><td>Crédito para que alguien <b>pague acciones emitidas por el propio banco</b>.</td><td>Multa igual al valor del crédito.</td></tr>
<tr><td>4</td><td>Crédito a <b>directores y apoderados generales</b>, su cónyuge o conviviente civil, hijos menores bajo patria potestad y sociedades en que participen.</td><td>Multa igual al crédito o al exceso.</td></tr>
<tr><td>5</td><td>Adquirir bienes que la ley no autoriza. Excepciones: los recibidos en pago de deudas vencidas (hasta el 20% del patrimonio efectivo) y los adquiridos en remate judicial; deben enajenarse en un año (seis meses si son acciones).</td><td>Multa igual al valor de los bienes y 10% mensual por mantenerlos.</td></tr>
<tr><td>6</td><td>Comprometer su responsabilidad por obligaciones ajenas fuera de los casos legales, o hipotecar o prendar sus bienes físicos.</td><td>Nulidad absoluta del acto, más sanciones pecuniarias.</td></tr>
</table>
<div class="callout"><p><b>Regla común:</b> el banco que infringe el art. 84 debe ajustarse a los márgenes en <b>90 días</b>; si no, se aplican los apremios y sanciones del Título III de la Ley 21.000.</p></div>
<h3>Art. 85: cómputo del crédito de una misma persona</h3>
<ol type="a">
  <li>Se imputan al deudor las obligaciones de las sociedades colectivas o en comandita de que sea socio solidario, de las sociedades en que tenga <b>más del 50%</b> del capital o de las utilidades, y de su EIRL.</li>
  <li>Si su participación es <b>superior al 2% y no excede el 50%</b>, se imputa <b>a prorrata</b>. La CMF puede excluir por NCG a sociedades con muchos socios en que el deudor no tiene influencia significativa.</li>
  <li>Con <b>pluralidad de deudores</b>, la obligación se considera <b>solidaria</b> para cada obligado, salvo que conste fehacientemente que es simplemente conjunta.</li>
</ol>`
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
      { tipo: 'alternativas', seccion: 'giro', enunciado: '¿Qué establece el art. 39 LGB?', opciones: ['La exclusividad del giro bancario: solo los autorizados por ley pueden captar habitualmente dinero del público', 'El listado de operaciones que puede hacer un banco', 'Los límites individuales de crédito', 'La garantía estatal de los depósitos'], correcta: 0, explicacion: 'También prohíbe usar expresiones que sugieran que se trata de un banco. El listado de operaciones está en el art. 69.' },
      { tipo: 'vf', seccion: 'giro', enunciado: 'Un banco puede realizar cualquier actividad comercial que la ley no le prohíba.', respuesta: false, explicacion: 'Rige el principio de reserva legal y especialidad del giro: solo puede hacer lo que la ley le permite (arts. 40 y 69 LGB).' },
      { tipo: 'alternativas', seccion: 'giro', enunciado: '¿Qué sanción civil tiene el acto de un banco fuera del catálogo legal de operaciones?', opciones: ['Nulidad absoluta por objeto ilícito', 'Inoponibilidad frente al cliente', 'Se tiene por no escrito', 'Nulidad relativa'], correcta: 0, explicacion: 'Por eso el café del Work Café lo vende una empresa externa.' },
      { tipo: 'alternativas', seccion: 'giro', enunciado: 'Para el banco, las operaciones bancarias son…', opciones: ['Siempre mercantiles (art. 3° N°11 CCom)', 'Civiles o mercantiles según la teoría de lo accesorio', 'Siempre civiles', 'Mercantiles solo si el cliente es comerciante'], correcta: 0, explicacion: 'Para el cliente sí se aplica la teoría de lo accesorio.' },
      { tipo: 'relacionar', seccion: 'giro', enunciado: 'Relaciona cada fuente del derecho bancario contractual con su ejemplo.', pares: [['Normativa administrativa', 'NCG de la CMF y normas del Banco Central'], ['Condiciones generales', 'Contratos de adhesión sujetos a la LPDC'], ['Costumbre mercantil', 'Huella digital en caja, recomendada por la ABIF'], ['Jurisprudencia', 'Régimen de la boleta de garantía']], explicacion: 'La mayoría de las operaciones no tienen regulación legal expresa.' },
      { tipo: 'vf', seccion: 'giro', enunciado: 'Los bancos deben constituirse como sociedades anónimas especiales autorizadas por la CMF.', respuesta: true, explicacion: 'Es parte de la primera respuesta regulatoria (arts. 27 y ss. LGB).' },
      { tipo: 'alternativas', seccion: 'tipos', enunciado: 'El cambio de divisas, las cajas de seguridad y la custodia de valores son operaciones…', opciones: ['Neutras o de servicios', 'Pasivas o de captación', 'Activas o de colocación', 'Prohibidas a los bancos'], correcta: 0, explicacion: 'El banco presta un servicio a cambio de una comisión.' },
      { tipo: 'vf', seccion: 'tipos', enunciado: 'En las operaciones pasivas el banco queda como acreedor.', respuesta: false, explicacion: 'En las pasivas el banco capta y queda como deudor; en las activas, como acreedor.' },
      { tipo: 'alternativas', seccion: 'tipos', enunciado: '¿Por qué se habla de «operación» bancaria y no de «contrato»?', opciones: ['Porque suele envolver un conjunto de negocios jurídicos con una finalidad económica', 'Porque los bancos no celebran contratos', 'Porque la LGB prohíbe usar la palabra contrato', 'Porque son actos unilaterales del banco'], correcta: 0, explicacion: 'Ejemplo: el mutuo hipotecario endosable.' },
      { tipo: 'vf', seccion: 'tipos', enunciado: 'La cuenta corriente bancaria puede ser a la vez operación pasiva y activa.', respuesta: true, explicacion: 'Pasiva cuando el cliente deposita; activa cuando gira sobre su línea de sobregiro.' },
      { tipo: 'alternativas', seccion: 'depositos', enunciado: '¿Qué dos actos concurren en el vale vista?', opciones: ['Un depósito irregular del cliente y la emisión por el banco de un efecto de comercio a la orden del beneficiario', 'Un mutuo y una fianza', 'Una cuenta corriente y un cheque', 'Un depósito a plazo y un endoso'], correcta: 0, explicacion: 'Por eso siempre tiene fondos y el banco debe pagarlo a su presentación.' },
      { tipo: 'vf', seccion: 'depositos', enunciado: 'Los depósitos a la vista devengan intereses y reajustes.', respuesta: false, explicacion: 'No devengan intereses ni reajustes.' },
      { tipo: 'alternativas', seccion: 'depositos', enunciado: '¿Desde qué plazo puede ser reajustable un depósito a plazo?', opciones: ['Si excede 90 días', 'Desde 30 días', 'Desde 1 año', 'Nunca puede ser reajustable'], correcta: 0, explicacion: 'Según las diapositivas.' },
      { tipo: 'alternativas', seccion: 'depositos', enunciado: 'Una SpA tiene depósitos a plazo por $600 millones. ¿Los cubre la garantía limitada del art. 144 LGB?', opciones: ['No, porque solo beneficia a personas naturales', 'Sí, hasta UF 200', 'Sí, en un 100%', 'Sí, hasta UF 400'], correcta: 0, explicacion: 'Ejemplo de los apuntes.' },
      { tipo: 'relacionar', seccion: 'depositos', enunciado: 'Relaciona cada depósito con su régimen de garantía estatal.', pares: [['Cuenta corriente', '100% (art. 132)'], ['Depósito a la vista', '100% (art. 132)'], ['Depósito a plazo de persona natural', 'Hasta UF 200 por banco al año'], ['Depósitos a plazo en todo el sistema', 'Hasta UF 400 al año']], explicacion: 'La garantía limitada exige además persona natural y depósito nominativo o a la orden.' },
      { tipo: 'alternativas', seccion: 'activas', enunciado: '¿Por qué el descuento bancario está sujeto a la TMC?', opciones: ['Porque es operación de crédito de dinero (art. 1° Ley 18.010), cualquiera sea la responsabilidad del cedente', 'Porque es un depósito irregular', 'Porque lo dice la UCP 600', 'No está sujeto a la TMC'], correcta: 0, explicacion: 'Además, el cliente suele quedar como deudor solidario por ser endosante.' },
      { tipo: 'alternativas', seccion: 'activas', enunciado: '¿Cuál de estas obligaciones NO puede avalar o afianzar un banco?', opciones: ['Una obligación del Fisco o de una entidad con participación estatal mayoritaria', 'Una obligación de dinero de un cliente, con monto y plazo determinados', 'Un contrato de derivados con monto máximo pactado', 'Una deuda comercial de una empresa privada'], correcta: 0, explicacion: 'Tampoco puede garantizar obligaciones de otras instituciones financieras del país.' },
      { tipo: 'vf', seccion: 'activas', enunciado: 'Al otorgar una fianza, el banco debe quedar con un título ejecutivo para su acción de regreso contra el deudor.', respuesta: true, explicacion: 'Exigencia del art. 69 N°11 LGB y la RAN 8-10.' },
      { tipo: 'alternativas', seccion: 'activas', enunciado: 'En el mutuo hipotecario endosable, el banco que endosa responde…', opciones: ['Solo de la existencia del crédito', 'Del pago, solidariamente con el deudor', 'De la solvencia del deudor por un año', 'De la existencia y del valor del inmueble'], correcta: 0, explicacion: 'El endoso es sin responsabilidad.' },
      { tipo: 'vf', seccion: 'activas', enunciado: 'La anotación del endoso al margen de la inscripción hipotecaria es requisito para transferir el mutuo hipotecario endosable.', respuesta: false, explicacion: 'Es solo para fines de información.' },
      { tipo: 'alternativas', seccion: 'activas', enunciado: 'La mercadería llega defectuosa, pero los documentos de la carta de crédito están conformes. ¿Qué hace el banco?', opciones: ['Paga, por el principio de independencia', 'Suspende el pago hasta que se resuelva la disputa', 'Paga solo la mitad', 'Devuelve los documentos al exportador'], correcta: 0, explicacion: 'El comprador debe reclamar al vendedor por la compraventa.' },
      { tipo: 'relacionar', seccion: 'activas', enunciado: 'Relaciona cada sujeto del crédito documentario con su papel.', pares: [['Ordenante', 'Importador que pide la apertura'], ['Banco emisor', 'Abre el crédito a favor del beneficiario'], ['Banco corresponsal', 'Avisa, revisa los documentos y paga'], ['Beneficiario', 'Exportador que cobra contra documentos']], explicacion: 'Rige la UCP 600.' },
      { tipo: 'alternativas', seccion: 'filiales', enunciado: '¿Cuál actividad corresponde al art. 70 letra a) LGB (servicios financieros regulados)?', opciones: ['Corredores de bolsa', 'Leasing', 'Factoraje', 'Cobranza de créditos'], correcta: 0, explicacion: 'Leasing, factoraje y cobranza son complementarias al giro (letra b).' },
      { tipo: 'vf', seccion: 'filiales', enunciado: 'Por regla general, una filial bancaria no puede adquirir acciones de otras sociedades.', respuesta: true, explicacion: 'Art. 71: solo si la CMF lo estima imprescindible, con tope del 5% del capital pagado de la sociedad.' },
      { tipo: 'alternativas', seccion: 'filiales', enunciado: '¿Cuándo opera el silencio administrativo positivo para constituir una filial?', opciones: ['Si el banco está en categoría I y la CMF no rechaza fundadamente en 60 días', 'Siempre, después de 90 días', 'Si el banco está en categoría III', 'Nunca'], correcta: 0, explicacion: 'Art. 73 LGB, con remisión al art. 64 de la Ley 19.880.' },
      { tipo: 'vf', seccion: 'filiales', enunciado: 'Un banco puede condicionar un crédito a que el cliente contrate seguros con su corredora filial.', respuesta: false, explicacion: 'Está prohibido. Lo mismo vale para la asesoría previsional del art. 70 bis.' },
      { tipo: 'alternativas', seccion: 'apoyo', enunciado: 'Transbank es un ejemplo de…', opciones: ['Sociedad de apoyo al giro del art. 74 LGB', 'Filial del art. 70 letra a)', 'Sucursal en el exterior', 'Operación neutra directa'], correcta: 0, explicacion: 'Presta servicios para facilitar los fines de las entidades financieras (letra a).' },
      { tipo: 'vf', seccion: 'apoyo', enunciado: 'Por medio de una sociedad de apoyo al giro de la letra b) un banco puede captar dinero del público.', respuesta: false, explicacion: 'La letra b) permite operaciones con el público que no incluyan la captación de dinero.' },
      { tipo: 'alternativas', seccion: 'exterior', enunciado: 'Para invertir en acciones de un banco extranjero, un banco chileno necesita autorización de…', opciones: ['La CMF y el Banco Central', 'Solo la CMF', 'Solo el Banco Central', 'El Ministerio de Hacienda'], correcta: 0, explicacion: 'Para sucursales u oficinas de representación basta la CMF.' },
      { tipo: 'alternativas', seccion: 'limites', enunciado: '¿Cuál es el límite individual general de crédito del art. 84 N°1 LGB?', opciones: ['10% del patrimonio efectivo', '5% del patrimonio efectivo', '30% del patrimonio efectivo', '50% del capital pagado'], correcta: 0, explicacion: 'Puede subir a 15% (concesiones) o a 30% (exceso caucionado, otro banco o grupo empresarial).' },
      { tipo: 'alternativas', seccion: 'limites', enunciado: 'Banco con patrimonio efectivo de 8.000.000 UF presta 1.000.000 UF a un deudor sin garantías. ¿Cuál es la multa?', opciones: ['20.000 UF (10% del exceso de 200.000 UF)', '100.000 UF', '200.000 UF', 'No hay multa'], correcta: 0, explicacion: 'Límite: 800.000 UF. Exceso: 200.000 UF. Multa: 10% del exceso.' },
      { tipo: 'vf', seccion: 'limites', enunciado: 'A una persona relacionada con el banco se le puede prestar en mejores condiciones que a terceros si el crédito está caucionado.', respuesta: false, explicacion: 'Art. 84 N°2: nunca en términos más favorables que a terceros en operaciones similares.' },
      { tipo: 'relacionar', seccion: 'limites', enunciado: 'Relaciona cada infracción del art. 84 con su sanción.', pares: [['Exceder el límite individual', 'Multa del 10% del exceso'], ['Crédito a relacionados sobre el límite', 'Multa del 20% del crédito'], ['Crédito para pagar acciones del banco', 'Multa igual al valor del crédito'], ['Prendar o hipotecar bienes físicos del banco', 'Nulidad absoluta del acto']], explicacion: 'Y en todos los casos, ajustarse en 90 días.' },
      { tipo: 'alternativas', seccion: 'limites', enunciado: 'Según el art. 85, si el deudor tiene el 40% de una sociedad, las deudas de esa sociedad…', opciones: ['Se le imputan a prorrata', 'Se le imputan en un 100%', 'No se le imputan', 'Se le imputan solo si es socio solidario'], correcta: 0, explicacion: 'Sobre 50% se imputan completas; entre más de 2% y 50%, a prorrata.' },
      { tipo: 'vf', seccion: 'limites', enunciado: 'No hay vinculación para la persona natural que solo tiene hasta el 1% de las acciones del banco o le debe hasta UF 3.000.', respuesta: true, explicacion: 'Según las diapositivas del art. 84 N°2.' },

      { tipo: 'oral', seccion: 'giro', enunciado: '¿Por qué y cómo se regula el giro bancario?', puntos: ['El banco intermedia: capta del público y coloca; gana con el spread. El riesgo está en la captación de dinero ajeno.', 'Primera respuesta (arts. 27 y ss.): limitar el desarrollo del giro; sociedad anónima especial autorizada y fiscalizada por la CMF.', 'Art. 39: exclusividad del giro; nadie no autorizado puede captar habitualmente dinero del público ni usar expresiones de banco.', 'Segunda respuesta (arts. 40 y 69): reserva legal y especialidad; catálogo taxativo; fuera de él, objeto ilícito y nulidad absoluta.', 'Fuentes: ley y normativa de BC y CMF, condiciones generales (adhesión, LPDC), costumbre (arts. 4° y 5° CCom) y jurisprudencia.'], norma: 'Arts. 27, 39, 40 y 69 LGB; art. 3° N°11 CCom' },
      { tipo: 'oral', seccion: 'tipos', enunciado: 'Clasifique las operaciones bancarias y dé ejemplos de cada una.', puntos: ['Concepto: «operación» porque envuelve un conjunto de negocios (art. 40 y 69 LGB).', 'Pasivas o de captación: el banco obtiene recursos y es deudor (depósitos).', 'Activas o de colocación: el banco entrega lo captado y es acreedor (préstamos, descuento, mutuo hipotecario).', 'Neutras o de servicios: comisión por un servicio (divisas, cajas de seguridad, custodia, mandatos, fianzas al otorgarse).', 'La cuenta corriente es mixta.'], norma: 'Arts. 40 y 69 LGB' },
      { tipo: 'oral', seccion: 'depositos', enunciado: 'Explique los depósitos bancarios y la garantía estatal.', puntos: ['Son depósitos irregulares: el banco se hace dueño y restituye otro tanto.', 'Vista y vale vista (art. 65): dos actos; el banco paga a la presentación; sin intereses ni reajustes.', 'A plazo (art. 69 N°1): con intereses; sin retiro anticipado salvo renunciar a intereses y reajuste; reajustable si excede 90 días.', 'Ahorro a plazo: giros limitados.', 'Garantía: 100% para cuenta corriente, ahorro a la vista y vista (art. 132); limitada para depósitos a plazo de personas naturales: UF 200 por banco y UF 400 en el sistema por año (art. 144).'], norma: 'Arts. 65, 69 N°1, 132 y 144 LGB' },
      { tipo: 'oral', seccion: 'activas', enunciado: 'Explique el crédito documentario y el principio de independencia.', puntos: ['Art. 69 N°10 LGB; se rige por la UCP 600.', 'Resuelve la desconfianza entre comprador y vendedor a distancia.', 'Sujetos: ordenante, banco emisor, banco corresponsal y beneficiario.', 'Fases: compraventa, solicitud, aviso del corresponsal, embarque y presentación, verificación y pago, entrega de documentos al importador.', 'Independencia: el banco no puede negarse a pagar por incumplimiento de la compraventa; el examen es solo documental.', 'No es fianza: es un compromiso directo y autónomo del banco.'], norma: 'Art. 69 N°10 LGB; UCP 600' },
      { tipo: 'oral', seccion: 'activas', enunciado: 'Explique el descuento bancario, los avales y fianzas bancarias y el mutuo hipotecario endosable.', puntos: ['Descuento (69 N°4): valor nominal menos descuento; cliente como deudor solidario; es OCD y queda sujeto a la TMC.', 'Avales y fianzas (69 N°11, RAN 8-10): obligaciones de dinero con monto y plazo determinados; título ejecutivo para el regreso; prohibido garantizar a otras financieras nacionales y al Fisco o entidades estatales.', 'Mutuo hipotecario endosable (69 N°7): escritura pública a la orden; endoso sin responsabilidad (solo existencia); anotación marginal informativa; mercado secundario y tasas más bajas.'], norma: 'Art. 69 N°4, 7 y 11 LGB' },
      { tipo: 'oral', seccion: 'filiales', enunciado: '¿Qué puede hacer un banco por medio de filiales y sociedades de apoyo al giro?', puntos: ['Art. 70 a): corredores de bolsa, AGF, securitización, corredores de seguros, leasing habitacional.', 'Art. 70 b): leasing, factoraje, asesoría financiera, custodia, cobranza y otras que declare la CMF.', 'Art. 70 bis: asesoría previsional.', 'Arts. 71-73: límites de inversión (5%), requisitos (capital, clasificación, factibilidad), plazos de 90/120 días y silencio positivo para categoría I.', 'Art. 74: apoyo al giro, objeto exclusivo; letra a) apoyo interno (Transbank), letra b) canal con el público sin captación. Art. 75: fiscaliza la CMF.'], norma: 'Arts. 70 a 75 LGB' },
      { tipo: 'oral', seccion: 'limites', enunciado: 'Explique las limitaciones de crédito de los arts. 84 y 85 LGB.', puntos: ['N°1: 10% del patrimonio efectivo; 15% concesiones; 30% si el exceso está caucionado; 30% a otro banco y al grupo empresarial. Multa: 10% del exceso.', 'N°2: relacionados sin mejores condiciones; 5% por grupo, 25% caucionado, total no mayor al patrimonio efectivo; multa del 20%.', 'N°3 a 6: crédito para pagar acciones propias; a directores y apoderados; adquisición de bienes; garantías por terceros e hipotecar o prendar bienes (nulidad absoluta).', 'Ajuste en 90 días; si no, Título III Ley 21.000.', 'Art. 85: imputación de sociedades (más de 50% completo; más de 2% hasta 50% a prorrata) y solidaridad con pluralidad de deudores.'], norma: 'Arts. 84 y 85 LGB' }
    ]
  });
})();
