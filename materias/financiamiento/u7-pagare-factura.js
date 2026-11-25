/* Unidad 7 — Pagaré, factura, descuento y factoring (clases 10 y 11 del cronograma del Prof. Gaspar).
   Fuentes: apuntes de clases del Prof. Gaspar (pagaré completo; factura solo en menciones dispersas).
   PENDIENTE: la clase de descuento y factoring la dictó una profesora invitada y no está en el apunte.
   Orden y numeración de las secciones del pagaré (11.1 … 11.4): los del apunte completo de clases del Prof. Gaspar
   (parte «Títulos de crédito», punto 11). Factura, descuento y factoring van sin número: el apunte no los trata en el punto 11.
   Secciones «Profundización (Sandoval)», sin número, al final: Sandoval, Derecho Comercial, tomo II (5ª ed., 2005),
   cap. III (pagaré y carta orden de crédito). */
(function () {
  Estudio.registrarUnidad({
    id: 'u7', numero: 7, bloque: 'Prof. Gaspar', profesor: 'Gaspar',
    titulo: 'Pagaré, factura, descuento y factoring',
    resumen: 'El pagaré como promesa directa de pago: menciones, vencimientos sucesivos y cláusula de aceleración. Lo que el material dice de la factura, el descuento y el factoring. Con Sandoval: diferencias con la letra, jurisprudencia de la cláusula de aceleración y la carta orden de crédito. La clase de descuento y factoring (profesora invitada) está pendiente.',
    lecturas: 'Apuntes de clases del Prof. Gaspar (pagaré). Lecturas del cronograma: Sandoval, tomo II, pp. 165-175 y 219-224 (pagaré y factura) y pp. 224-230 y 296-302 (descuento y factoring). <b>Pendiente:</b> la clase de descuento y factoring la dictó una profesora invitada y no está en el apunte de Gaspar. El orden y la numeración de las secciones del pagaré siguen el apunte completo de clases (punto 11); la factura reúne lo que el apunte dice en otros puntos. Secciones «Profundización (Sandoval)»: Sandoval, tomo II, cap. III (§§ 149-163) y arts. 782 a 794 CCom.',

    glosario: [
      { termino: 'Pagaré', definicion: 'Título de crédito en que el suscriptor formula una promesa incondicional de pagar una suma de dinero al beneficiario («debo y pagaré»), obligándose directamente desde su emisión. Se le aplican supletoriamente las reglas de la letra de cambio.', fuente: 'Arts. 102 y 107 Ley 18.092; apuntes', seccion: 'pagare', sub: 'pg-evolucion', alias: ['pagares', 'promissory note'] },
      { termino: 'Suscriptor', definicion: 'Deudor principal que firma el pagaré y asume la obligación de pago; equivale al aceptante de la letra de cambio.', fuente: 'Art. 102 N°6 Ley 18.092; apuntes', seccion: 'pagare', sub: 'pg-esenciales' },
      { termino: 'Vencimientos sucesivos', definicion: 'Pago del pagaré en cuotas dentro de un mismo documento. Para que el no pago de una cuota haga exigible todo el saldo, debe expresarse en el pagaré; si no, cada cuota morosa se protesta por separado.', fuente: 'Art. 105 Ley 18.092', seccion: 'vencimientos', sub: 'vt-cuotas', alias: ['cuotas', 'pagare en cuotas'] },
      { termino: 'Aceleración automática', definicion: 'Cláusula por la que el solo no pago de una cuota hace exigible de pleno derecho todo el saldo; desde ese momento corre la prescripción sobre toda la deuda.', fuente: 'Apuntes de clases', seccion: 'vencimientos', sub: 'vt-aceleracion' },
      { termino: 'Aceleración facultativa', definicion: 'Cláusula por la que el no pago de una cuota permite al acreedor, si así lo decide, hacer exigible el saldo; le da control sobre el inicio de la prescripción. Es la preferida en la práctica.', fuente: 'Apuntes de clases', seccion: 'vencimientos', sub: 'vt-aceleracion' },
      { termino: 'Factura', definicion: 'Título-valor causado que debe referirse a una compraventa o prestación de servicios real; la Ley 19.983 convirtió su copia cedible en un título dinerario con mérito ejecutivo.', fuente: 'Ley 19.983; apuntes', seccion: 'factura', sub: 'fac-causado', alias: ['facturas', 'copia cedible'] },
      { termino: 'Factoring', definicion: 'Operación en que un tercero adquiere un crédito a plazo (por ejemplo, una factura) por un precio menor a su valor, para dar liquidez inmediata al cedente.', fuente: 'Apuntes de clases (ejemplo de la lechería)', seccion: 'descuento-factoring', sub: 'df-factoring', alias: ['factoraje', 'factorings'] },
      { termino: 'Carta orden de crédito', definicion: 'Documento por el que el dador ordena a un corresponsal entregar al tomador las sumas que necesite, dentro de un máximo y un plazo. Realiza un contrato de cambio condicional que se perfecciona si el tomador usa el crédito; es nominativa y no se protesta.', fuente: 'Arts. 782 y ss. CCom; Sandoval, §§ 158-163', seccion: 'carta-orden', sub: 'co-concepto', alias: ['carta orden', 'cartas ordenes de credito'] },
      { termino: 'Dador', definicion: 'Quien expide la carta orden de crédito: debe pagar al corresponsal lo que entregó y mantener el crédito durante el plazo, sin revocarlo sin motivo serio.', fuente: 'Arts. 786 y 787 CCom; Sandoval', seccion: 'carta-orden', sub: 'co-obligaciones' },
      { termino: 'Corresponsal', definicion: 'Persona a quien va dirigida la carta orden de crédito y que entrega el dinero al tomador; su relación con el dador es un mandato.', fuente: 'Sandoval, § 160', seccion: 'carta-orden', sub: 'co-concepto' },
      { termino: 'Carta de introducción y recomendación', definicion: 'Carta orden que no designa cantidad: el dador no responde de los contratos que el corresponsal celebre con el tomador, salvo dolo.', fuente: 'Art. 794 CCom; Sandoval', seccion: 'carta-orden', sub: 'co-requisitos', alias: ['carta de recomendacion'] },
      { termino: 'Pagaré a la vista', definicion: 'Pagaré exigible desde su emisión. Según la jurisprudencia que cita Sandoval, su prescripción corre desde la suscripción y debe protestarse dentro del año siguiente para evitar la caducidad del art. 49, aunque tenga cláusula sin protesto.', fuente: 'Arts. 49 y 105 Ley 18.092; Sandoval', seccion: 'sandoval-pagare', sub: 'sv-vista' }
    ],

    secciones: [
      {
        id: 'pagare', grupo: '11. Pagaré', titulo: '11.1–11.2. De la letra al pagaré; requisitos y menciones',
        html: `
<h3 data-sub="pg-evolucion">11.1. De la letra de cambio al pagaré: evolución mercantil</h3>
<p>La letra nació para mover dinero entre plazas distintas, pero la práctica la usó para documentar créditos de dinero. Supone <b>tres</b> posiciones (librador, librado y beneficiario). Para documentar una deuda entre <b>dos</b> personas había que forzarla: el deudor firmaba como librador y como aceptante. Por ejemplo, Z firmaba como librador una orden de pagar $1.000.000 a X dirigida a sí mismo como librado y aceptante: una deuda de dos personas metida en un título de tres.</p>
<p>El pagaré refleja directamente la relación bipartita: el <b>suscriptor</b> no da una orden a un tercero, sino que hace una <b>promesa incondicional de pago</b> («debo y pagaré»). Queda obligado desde la emisión. Es como llegar directo a la aceptación.</p>
<div class="callout"><p><b>Economía normativa (art. 107 Ley 18.092):</b> al pagaré se aplican las normas de la letra de cambio (endoso, aval, protesto, inoponibilidad, autonomía, abstracción) en lo que no sean incompatibles con su naturaleza. El profesor lo compara con la Ley 3.918 de sociedades de responsabilidad limitada, que remite casi todo a la sociedad colectiva.</p></div>
<h3 data-sub="pg-requisitos">11.2. Requisitos y menciones del pagaré (art. 102)</h3>
<p>El apunte las separa en menciones esenciales (N° 1, 2, 4, 5 y 6) y de la naturaleza (N° 3).</p>
<h4 data-sub="pg-esenciales">11.2.1. Menciones necesarias o esenciales</h4>
<table class="tabla">
<tr><th>N°</th><th>Mención</th><th>Lo que dice el apunte</th></tr>
<tr><td>1</td><td>La <b>indicación de ser pagaré</b>, en el idioma del título.</td><td>En inglés se usa <i>promissory note</i> o <i>note</i>, no la palabra «pagaré».</td></tr>
<tr><td>2</td><td>La <b>promesa no sujeta a condición</b> de pagar una cantidad determinada o determinable de dinero.</td><td>Fórmula práctica: «debo y pagaré». Es determinable si depende de reajustes, intereses o UF (p. ej. «debo y pagaré 1.000 UF»).</td></tr>
<tr><td>4</td><td>El nombre del <b>beneficiario</b> o la indicación de que es pagadero <b>al portador</b>.</td><td>Puede nacer al portador (ver abajo).</td></tr>
<tr><td>5</td><td>El <b>lugar y fecha de expedición</b>.</td><td></td></tr>
<tr><td>6</td><td>La <b>firma del suscriptor</b>.</td><td>Es el deudor principal; equivale al aceptante de la letra.</td></tr>
</table>
<div class="card"><h4 style="margin-top:0">Puede nacer al portador</h4><p>La letra nace nominativa o a la orden y solo pasa a ser al portador por endoso en blanco. El pagaré puede emitirse <b>al portador</b> desde el inicio, como un billete de $1.000: el dueño del derecho es quien tiene el documento.</p></div>
<h4 data-sub="pg-naturaleza">11.2.2. Menciones de la naturaleza</h4>
<p><b>N° 3: el lugar y época del pago.</b> Si falta el lugar, se paga en el lugar de expedición; si falta el vencimiento, es <b>a la vista</b>.</p>
<div class="callout yellow"><p><b>Diferencia dentro del apunte:</b> el art. 102 N° 3 que transcribe dice que, sin lugar de pago, se paga en el <b>lugar de expedición</b>. Al explicarlo, el apunte agrega «el domicilio del suscriptor o el lugar de expedición». Para el examen, cita la norma.</p></div>
<div class="card"><h4 style="margin-top:0">Solo protesto por falta de pago</h4><p>Como no hay presentación a la aceptación ni fecha de aceptación, el único protesto posible es el <b>por falta de pago</b>.</p></div>
<p class="small">Usos típicos: el pagaré que exige una clínica en una urgencia, o el que firma el cliente de un banco por una tarjeta o un crédito universitario (a veces, con un mandato para suscribirlo).</p>`
      },
      {
        id: 'vencimientos', grupo: '11. Pagaré', titulo: '11.3. Modalidades de vencimiento y vencimientos sucesivos',
        html: `
<h3 data-sub="vt-modalidades">Tres modalidades de vencimiento (art. 105)</h3>
<p>El <span class="norma">art. 105</span> contempla tres formas de vencimiento (no existe «a un plazo desde la vista», porque no hay aceptación):</p>
<div class="flow"><div class="node">A la vista<small>exigible desde la emisión; también si no indica vencimiento (art. 102 N° 3)</small></div><div class="node">A un plazo desde su fecha<small>se cuenta desde la expedición</small></div><div class="node">A día fijo y determinado<small>una fecha del calendario</small></div></div>
<h3 data-sub="vt-cuotas">Vencimientos sucesivos (cuotas)</h3>
<div class="callout green"><p><b>Ventaja frente a la letra:</b> el pagaré admite <b>vencimientos sucesivos (cuotas)</b> en un solo documento. En la letra esto es imposible y habría que emitir varias letras, cada una con su impuesto y su autorización notarial.</p></div>
<div class="cita">«El pagaré puede tener también vencimientos sucesivos, y en tal caso, para que el no pago de una de las cuotas haga exigible el monto total insoluto, es necesario que así se exprese en el documento. Si nada se expresare al respecto, cada cuota morosa será protestada separadamente.»<span class="fuente">Art. 105 Ley 18.092, según los apuntes</span></div>
<h3 data-sub="vt-aceleracion">Cláusula de aceleración: automática o facultativa</h3>
<p>Para no tener que protestar y demandar cada cuota a medida que vence, se pacta una <b>cláusula de aceleración</b>: el no pago de una cuota hace exigible todo el saldo insoluto. Hay dos tipos, y el tipo decide desde cuándo corre la prescripción.</p>
<table class="tabla">
<tr><th>Aceleración automática</th><th>Aceleración facultativa</th></tr>
<tr><td>El solo no pago de una cuota hace exigible todo el saldo. Riesgo para el acreedor: desde ese momento corre la prescripción (1 año) sobre <b>toda</b> la deuda.</td><td>«El no pago de una cuota provocará la aceleración de las demás <b>si el acreedor así lo decide</b>». Es la preferida por los bancos: el acreedor controla cuándo empieza a correr la prescripción.</td></tr>
</table>
<h3 data-sub="vt-intereses">Intereses en la aceleración (art. 30 Ley 18.010)</h3>
<div class="callout yellow"><p><b>Regla:</b> al acelerar, sea la cláusula automática o facultativa, el acreedor solo cobra el <b>capital</b> y los <b>intereses devengados hasta la aceleración</b>. Los intereses futuros no se aceleran: es una norma imperativa e irrenunciable. Sin ella, acelerar un hipotecario el primer año permitiría cobrar los intereses de treinta años. Se conecta con el prepago, donde el deudor se libera de los intereses futuros pagando la comisión.</p></div>
<p><b>Ejemplo de clase:</b> pagaré de 1.000 UF en dos cuotas de 500 UF (24-09-2027 y 24-09-2028), con 5% anual. Si no paga la primera y el acreedor acelera, puede exigir las 1.000 UF y los intereses del primer año, pero no los del segundo, que aún no se devengan.</p>`
      },
      {
        id: 'ejercicios', grupo: '11. Pagaré', titulo: '11.4. Ejercicios: cadena de endosos y reembolsos',
        html: `
<p>Los ejercicios aplican al pagaré las reglas de endoso y acciones de la letra (art. 107). Cadena del ejercicio: el <b>beneficiario</b> endosa en blanco a <b>Y</b>; Y a <b>Z</b>; Z endosa <b>en prenda</b> a <b>J</b>; J endosa <b>en cobro</b> a <b>U</b>. Luego U intenta darlo en prenda a <b>K</b>, y K lo transfiere a <b>L</b>. Hay además un avalista <b>M</b> del suscriptor.</p>
<div class="flow"><div class="node">Beneficiario</div><div class="arrow">→</div><div class="node">Y</div><div class="arrow">→</div><div class="node">Z</div><div class="arrow">→</div><div class="node y">J<small>en prenda</small></div><div class="arrow">→</div><div class="node y">U<small>en cobro</small></div><div class="arrow">→</div><div class="node" style="opacity:.5">K<small>«prenda»</small></div><div class="arrow">→</div><div class="node" style="opacity:.5">L</div></div>
<h3 data-sub="ej-quien">Caso 1: ¿quién es L?</h3>
<p>«Nadie»: deriva su tenencia de un mandatario en cobro (U), que no podía dar en prenda ni transferir el dominio. Por lo mismo, K también es «nadie».</p>
<h3 data-sub="ej-cobro">Cobro por U al vencimiento</h3>
<p>Si el pagaré de 1.000 UF vence el 24-09-2027, U tiene <b>1 año</b>, hasta el <b>24-09-2028</b>, para demandar el total:</p>
<ul>
  <li>Al <b>suscriptor</b> y al avalista <b>M</b>: acción <b>directa</b>.</li>
  <li>A los <b>endosantes traslaticios</b> y al <b>beneficiario</b>: acción <b>de regreso</b>.</li>
  <li>No puede demandar a <b>J</b>, que es su propio mandante, ni a K o L, que son «nadie».</li>
</ul>
<p class="small">En el apunte aparecen como endosantes traslaticios W, Y y H, aunque la cadena del caso 1 nombra a Y y Z: parece mezclar la pauta de otro ejercicio. La regla no cambia.</p>
<h3 data-sub="ej-reembolsos">Cadena de reembolsos: 6 meses desde cada pago</h3>
<table class="tabla">
<tr><th>Quién paga y cuándo</th><th>Contra quién va</th><th>Su acción de reembolso vence</th></tr>
<tr><td>El endosante traslaticio H paga 500 UF al tenedor el 31-07-2029.</td><td>Los anteriores: beneficiario, suscriptor o avalista M.</td><td>31-01-2030</td></tr>
<tr><td>El beneficiario paga 500 UF a U el 31-07-2029 y 500 UF a H el 31-01-2030.</td><td>Suscriptor o avalista M.</td><td>Dos plazos: 31-01-2030 (primera mitad) y 31-07-2030 (segunda).</td></tr>
<tr><td>El avalista M paga el saldo al beneficiario el 31-01-2030.</td><td>Solo el suscriptor.</td><td>31-07-2030</td></tr>
</table>`
      },
      {
        id: 'factura', grupo: 'Factura, descuento y factoring', titulo: 'La factura (lo que dice el apunte en otros puntos)',
        html: `
<div class="callout yellow"><p><b>Ojo:</b> el apunte completo no trata la factura en el punto 11; lo que sigue reúne lo que dice en otras partes, con el punto donde aparece. Lectura del cronograma: Sandoval, tomo II, pp. 165-175 y 219-224.</p></div>
<h3 data-sub="fac-causado">Título causado y copia cedible (Ley 19.983)</h3>
<p class="small">Apunte: títulos de crédito, puntos 7 y 9; mercado de valores, punto 2.</p>
<ul>
  <li><b>Título causado:</b> por la <span class="norma">Ley 19.983</span>, debe referirse a una <b>compraventa o prestación de servicios real</b> del emisor, que consta en su propio texto. Emitirla sin ese negocio es un ilícito: la llamada factura ideológicamente falsa.</li>
  <li>Es un <b>título de pago</b>, como la letra, el pagaré y el cheque: permite al acreedor disponer del crédito antes del vencimiento, por ejemplo descontándolo con una empresa de factoring.</li>
  <li>La Ley 19.983 transformó la <b>copia cedible</b> en un título-valor dinerario con <b>mérito ejecutivo</b>, lo que facilitó obtener liquidez por medio del factoring.</li>
  <li>Se discute si es un título de crédito puro, por su fuerte dependencia del negocio causal (Arturo Prado y Álvaro Parra).</li>
</ul>
<h3 data-sub="fac-electronica">Factura electrónica</h3>
<p class="small">Apunte: títulos de crédito, punto 9 (clasificación por su sustrato material).</p>
<p>La factura tiene regulación expresa que permite emitirla y hacerla circular en forma <b>electrónica</b>, en la plataforma del SII. El pagaré, en cambio, solo puede emitirse en <b>papel</b>.</p>
<h3 data-sub="fac-valor">¿Es un «valor»? La bolsa de productos</h3>
<p class="small">Apunte: mercado de valores, punto 2 (concepto de valor).</p>
<ul>
  <li><b>No es «valor»</b> para la Ley de Mercado de Valores, según la SVS (hoy CMF): carece de la autonomía exigida, y el deudor puede oponer las excepciones de la relación causal si no la aceptó irrevocablemente o si el cesionario actúa de mala fe.</li>
  <li>Para que se transara públicamente, se usó la <span class="norma">Ley 19.220</span> (bolsas de productos), ampliando el concepto de «producto». Así convive un mercado bursátil de facturas con el factoring privado.</li>
</ul>`
      },
      {
        id: 'descuento-factoring', grupo: 'Factura, descuento y factoring', titulo: 'Descuento y factoring (pendiente)',
        html: `
<div class="callout red"><p><b>Pendiente:</b> la clase de descuento y factoring (clase 11 del cronograma) la dictó una profesora invitada y <b>no está en el apunte de Gaspar</b>. Lectura del cronograma: Sandoval, tomo II, pp. 224-230 y 296-302. Ojo: la edición de Sandoval que tenemos (5ª ed., 2005) termina en el cheque y no trata el descuento ni el factoring; esas páginas deben ser de otra edición. Esta sección se completará cuando llegue ese material. Mientras tanto, esto es lo que dicen las otras unidades:</p></div>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0" data-sub="df-descuento">Descuento bancario</h4><p>El banco entrega al portador de un título no vencido su valor nominal menos un descuento por el tiempo al vencimiento; el cliente suele quedar como deudor solidario por ser endosante. Es <b>operación de crédito de dinero</b> (art. 1° Ley 18.010), sujeta a la TMC (<span class="norma">art. 69 N°4 LGB</span>).</p><p class="small"><a href="#/u/u3/contenido/activas">Ver Unidad 3 →</a></p></div>
  <div class="card"><h4 style="margin-top:0" data-sub="df-factoring">Factoring</h4><ul><li>Es una variante de la deuda como forma de financiamiento (Unidad 1).</li><li>Las empresas de factoring se financian emitiendo <b>efectos de comercio</b> (pagarés y letras de corto plazo) y con eso compran facturas a 30, 60 o 90 días: calzan los plazos de su deuda y de su cobranza (apunte, mercado de valores, punto 6.1; Unidad 8).</li><li>El factoraje es una actividad complementaria al giro que un banco puede hacer por filial (art. 70 b LGB, Unidad 3).</li><li>Ejemplo de la lechería: el factoring compra en $500.000 un crédito de $1.000.000; con cesión civil, si el deudor no paga, solo recupera el precio (art. 1907 CC). Por eso se imponen cláusulas de «plena responsabilidad» al cedente (Unidad 5).</li></ul></div>
</div>`
      },
      {
        id: 'sandoval-pagare', grupo: 'Profundización (Sandoval)', titulo: 'Concepto, diferencias y jurisprudencia de la aceleración (Sandoval)',
        html: `
<div class="callout green"><p><b>Fuente de esta sección:</b> Sandoval, <i>Derecho Comercial</i>, tomo II (5ª ed., 2005), cap. III, §§ 149-157, y la jurisprudencia que cita. Complementa los puntos 11.1 a 11.3.</p></div>
<h3 data-sub="sv-concepto">Concepto</h3>
<ul>
  <li>El pagaré es un <b>efecto de comercio</b> (como la letra, el cheque y la carta orden de crédito). Su emisión, suscripción, endoso y aval son <b>actos de comercio formales</b> (art. 3° N° 10 CCom, texto fijado por la Ley 18.092).</li>
  <li>Es un acto <b>unilateral</b>: una verdadera <b>confesión de deuda</b> del suscriptor. No requiere aceptación.</li>
  <li>El derogado <b>art. 766 CCom</b> lo definía como un escrito por el que quien lo firma se confiesa deudor de cierta cantidad y se obliga a pagarla a su orden en un plazo; si se pagaba en otro lugar, era «pagaré a domicilio». La Ley 18.092 no lo define: solo fija sus menciones.</li>
  <li>El suscriptor queda obligado <b>de igual manera que el aceptante</b> de una letra de cambio.</li>
</ul>
<h3 data-sub="sv-diferencias">Diferencias con la letra de cambio</h3>
<table class="tabla">
<tr><th></th><th>Pagaré</th><th>Letra de cambio</th></tr>
<tr><td>Creación</td><td>Una persona: el suscriptor (confesión de deuda).</td><td>Al menos dos: librador y librado.</td></tr>
<tr><td>Aceptación</td><td>No existe.</td><td>El librado se obliga solo si acepta.</td></tr>
<tr><td>Protesto</td><td>Solo por falta de pago.</td><td>Por falta de aceptación, de fecha de aceptación o de pago.</td></tr>
<tr><td>Vencimiento</td><td>Admite cuotas y cláusula de aceleración.</td><td>Un solo vencimiento; no admite aceleración.</td></tr>
</table>
<h3 data-sub="sv-menciones">Matices de las menciones (art. 102)</h3>
<ul>
  <li>El <b>beneficiario</b> define cómo circula: nominativo, por cesión de créditos; a la orden, por endoso; al portador, por simple entrega.</li>
  <li>El <b>lugar y fecha de expedición</b> sirven para juzgar la capacidad del suscriptor, contar el plazo de los pagarés «a un plazo desde su fecha», suplir el lugar de pago y aplicar <i>locus regit actum</i>.</li>
  <li>Sin las menciones del art. 102 el documento <b>no vale como pagaré</b>, salvo el lugar y la época de pago, que la ley suple.</li>
  <li>El art. 107 remite a las normas de la letra en lo que no sean contrarias a la naturaleza del pagaré.</li>
</ul>
<div class="callout yellow"><p><b>Diferencia entre fuentes sobre la firma:</b> Sandoval señala que, bajo responsabilidad del suscriptor, la firma puede estamparse por otros procedimientos que autorice el reglamento. El apunte de Gaspar enseña que en materia cambiaria la firma debe ser física y que el pagaré solo se emite en papel. Para el examen, sigue el apunte y menciona la regla reglamentaria como matiz.</p></div>
<h3 data-sub="sv-aceleracion">La cláusula de aceleración en los tribunales</h3>
<p>Sandoval reúne fallos que matizan lo visto en el punto 11.3:</p>
<table class="tabla">
<tr><th>Fallo</th><th>Criterio</th></tr>
<tr><td>C. de Santiago, 1990</td><td>La aceleración <b>facultativa</b> no opera por el solo no pago: requiere que el acreedor manifieste su voluntad. Mientras tanto, <b>cada cuota</b> es exigible y prescribe desde su propio vencimiento.</td></tr>
<tr><td>C. de Santiago, 1997</td><td>El acreedor no puede usar la cláusula «en cualquier tiempo» para evitar la prescripción: sería una <b>renuncia anticipada a la prescripción</b>, prohibida por el art. 2494 CC y contraria al art. 98 de la Ley 18.092.</td></tr>
<tr><td>Corte Suprema, 1991</td><td>Si la cláusula está redactada en forma <b>imperativa</b> («hará exigible»), el vencimiento es el día de la primera cuota impaga y desde ahí corre la prescripción. Si se entendiera facultativa, la voluntad se manifiesta al protestar y presentar la demanda.</td></tr>
<tr><td>Voto disidente citado</td><td>La cláusula siempre está concebida en beneficio del acreedor, sea imperativa o facultativa, y nunca opera de pleno derecho.</td></tr>
<tr><td>C. de San Miguel y CS, 1988</td><td>Las cuotas son un beneficio para el suscriptor; la aceleración favorece solo al acreedor y no lo obliga a cobrar el total.</td></tr>
<tr><td>C. de Arica, 1991</td><td>La aceleración no favorece al <b>fiador ni al codeudor solidario</b> (arts. 1479, 1520 y 2354 CC).</td></tr>
</table>
<div class="callout yellow"><p><b>Ojo con la tensión:</b> el apunte de Gaspar presenta la aceleración facultativa como la forma en que el acreedor <b>controla</b> cuándo empieza la prescripción. La jurisprudencia que cita Sandoval pone un límite: cada cuota prescribe desde su vencimiento y la cláusula no puede usarse para postergar la prescripción indefinidamente. En el oral, explica ambas cosas.</p></div>
<h3 data-sub="sv-vista">Pagaré a la vista</h3>
<ul>
  <li>Su prescripción se cuenta desde la <b>suscripción</b>, porque desde ese día el acreedor puede cobrarlo (C. de Concepción, 1985).</li>
  <li>Debe protestarse dentro del <b>año siguiente a la suscripción</b> para evitar la caducidad del art. 49, aunque tenga la cláusula «devuelta sin protesto» (Corte Suprema, 1985).</li>
</ul>`
      },
      {
        id: 'carta-orden', grupo: 'Profundización (Sandoval)', titulo: 'La carta orden de crédito (Sandoval)',
        html: `
<div class="callout green"><p><b>Fuente de esta sección:</b> Sandoval, <i>Derecho Comercial</i>, tomo II (5ª ed., 2005), cap. III, §§ 158-163, y arts. 782 a 794 CCom. El apunte completo no trata la carta orden.</p></div>
<h3 data-sub="co-concepto">Concepto, función y relaciones</h3>
<p>Sandoval la cuenta entre los efectos de comercio chilenos, junto a la letra, el pagaré y el cheque. Sigue regulada en el <b>Código de Comercio</b> (arts. 782 y ss.). Una persona (el <b>dador</b>) se dirige a otra (el <b>corresponsal</b>) para que entregue a un tercero (el <b>tomador</b>) el dinero que necesite, hasta cierto monto. Se llama «carta» porque se redactaba en forma de carta; «orden», porque contiene una orden; «de crédito», porque se funda en el crédito de quienes intervienen.</p>
<div class="cita">«Las cartas órdenes de crédito tienen por objeto realizar un contrato de cambio condicional, celebrado entre el dador y el tomador, cuya perfección pende de que éste haga uso del crédito que aquél le abre.»<span class="fuente">Art. 782 CCom, citado por Sandoval</span></div>
<div class="grid dos">
  <div class="card"><b>Para qué sirve</b><p>A diferencia de la letra y el pagaré, que se pagan en un solo lugar, permite retirar dinero <b>en varias plazas</b> y en montos que no se conocen de antemano. Suele emitirse a la vista. Es <b>acto de comercio</b>: remesa de dinero de una plaza a otra en virtud de un contrato de cambio (art. 3° N° 10 CCom).</p></div>
  <div class="card"><b>Dos relaciones</b><p><b>Dador–tomador:</b> contrato de cambio condicional (depende de que el tomador use la carta) e indeterminado en montos y plazas; el tomador paga un precio por el servicio.</p><p><b>Dador–corresponsal:</b> mandato; el dador reembolsa al corresponsal lo que entregó.</p></div>
</div>
<div class="flow"><div class="node">Dador<small>emite la carta</small></div><div class="arrow">→</div><div class="node">Tomador<small>la presenta en otra plaza</small></div><div class="arrow">→</div><div class="node">Corresponsal<small>entrega el dinero</small></div><div class="arrow">→</div><div class="node y">Dador reembolsa al corresponsal<small>y el tomador al dador</small></div></div>
<h3 data-sub="co-requisitos">Requisitos</h3>
<ol>
  <li><b>Nominativa:</b> se da a persona determinada, no a la orden (art. 783). Si se expide a la orden, el tomador puede cobrarla personalmente, pero <b>no endosarla</b>: el endoso no transfiere el derecho a cobrarla.</li>
  <li><b>Cantidad:</b> fija, o una o más cantidades indeterminadas dentro de un <b>máximo</b> señalado (arts. 784 y 793). Sin cantidad, es una simple <b>carta de introducción y recomendación</b> y el dador no responde de lo que el corresponsal contrate con el tomador, salvo dolo (art. 794).</li>
  <li><b>Plazo de uso</b> (art. 784). Si falta, lo fija el tribunal según las circunstancias.</li>
  <li><b>Firmas</b> del dador, del tomador y de los corresponsales si son varios.</li>
</ol>
<h3 data-sub="co-obligaciones">Obligaciones del dador y del tomador</h3>
<table class="tabla">
<tr><th>Obligaciones del dador</th><th>Obligaciones del tomador</th></tr>
<tr><td>Extenderla con las formalidades legales. Pagar al corresponsal lo que entregó (art. 787). Mantener el crédito durante el plazo: si lo <b>revoca</b> sin motivo serio, responde de los perjuicios, salvo que se deteriore el crédito del tomador (art. 786).</td><td>Firmar la carta o dar al dador un modelo de su firma (art. 785). Probar su identidad si el corresponsal lo pide (art. 789). Devolverla si no la usa o caucionar su importe (art. 790). Reembolsar al dador lo recibido; si no, debe además intereses corrientes desde la entrega.</td></tr>
</table>
<h3 data-sub="co-efectos">Sin acción ni protesto; desuso</h3>
<div class="callout red"><p><b>Una carta que no se protesta:</b> aunque no se pague, la carta no da al tomador <b>ningún derecho</b> contra el dador ni contra el corresponsal (art. 788). Por eso no se protesta y la ley no le da garantías de pago. Según Sandoval, hoy casi no se usa: la reemplazaron el cheque viajero, el vale vista y la tarjeta de crédito.</p></div>
<div class="callout yellow"><p><b>No la confundas con la carta de crédito documentaria</b> (Unidad 3, UCP 600), que es una operación bancaria internacional. El art. 783 CCom llama «cartas de crédito» a las cartas órdenes, lo que se presta a confusión.</p></div>`
      }
    ],

    interactivos: [
      {
        id: 'aceleracion', titulo: 'Pagaré en cuotas: aceleración e intereses (art. 30 Ley 18.010)', seccion: 'vencimientos',
        descripcion: 'Ejemplo de clase: 1.000 UF en cuotas anuales iguales con 5% anual de interés simple. El deudor no paga la primera cuota. Cambia la cláusula y el número de cuotas.',
        montar: function (el) {
          el.innerHTML = `<div class="fila"><div class="campo"><label>Capital (UF)</label><input type="number" id="cap" value="1000"></div>
            <div class="campo"><label>Número de cuotas anuales</label><input type="number" id="n" value="2" min="2" max="30"></div>
            <div class="campo"><label>Interés anual (%)</label><input type="number" id="t" value="5" step="0.5"></div></div>
            <div class="opciones-chip" id="cl"><button data-c="sin">Sin cláusula de aceleración</button><button data-c="auto">Aceleración automática</button><button data-c="fac" class="activo">Aceleración facultativa (el acreedor acelera)</button></div><div id="out"></div>`;
          var cl = 'fac';
          function calc() {
            var cap = +el.querySelector('#cap').value || 0, n = Math.max(2, +el.querySelector('#n').value || 2), t = (+el.querySelector('#t').value || 0) / 100;
            var cuota = cap / n, intUno = cap * t, intTotal = 0;
            for (var k = 1; k <= n; k++) intTotal += cuota * t * k;
            var html;
            if (cl === 'sin') html = '<div class="resultado"><b>Sin cláusula:</b> solo es exigible la cuota vencida: ' + cuota.toFixed(1) + ' UF más sus intereses. <b>Cada cuota morosa se protesta por separado</b> (art. 105).</div>';
            else html = '<div class="resultado ' + (cl === 'auto' ? '' : 'ok') + '"><b>' + (cl === 'auto' ? 'Aceleración automática:' : 'Aceleración facultativa ejercida:') + '</b> se hace exigible todo el capital (' + cap.toFixed(0) + ' UF) más los intereses devengados hasta la aceleración (≈ ' + intUno.toFixed(1) + ' UF por el primer año).' +
              '<p>No se pueden cobrar los intereses futuros (≈ ' + (intTotal - cuota * t).toFixed(1) + ' UF que se habrían devengado después): art. 30 Ley 18.010, irrenunciable.</p>' +
              (cl === 'auto' ? '<p class="small">Riesgo: desde el no pago corre el año de prescripción sobre toda la deuda.</p>' : '<p class="small">El acreedor decide cuándo acelerar y, con eso, cuándo empieza a correr la prescripción del saldo.</p>') + '</div>';
            el.querySelector('#out').innerHTML = html;
          }
          el.querySelectorAll('#cl button').forEach(function (b) { b.onclick = function () { cl = b.dataset.c; el.querySelectorAll('#cl button').forEach(function (x) { x.classList.toggle('activo', x === b); }); calc(); }; });
          el.querySelectorAll('input').forEach(function (i) { i.oninput = calc; }); calc();
        }
      },
      {
        id: 'cadenapagare', titulo: 'Ejercicio de clase: ¿quién es quién en la cadena?', seccion: 'ejercicios',
        descripcion: 'Beneficiario → Y → Z → J (en prenda) → U (en cobro) → K («en prenda») → L. M es avalista del suscriptor. U quiere cobrar. Toca a cada persona.',
        montar: function (el) {
          var p = [
            ['Suscriptor', 'Demandable por U: acción directa (1 año desde el vencimiento).', true],
            ['M (aval)', 'Demandable por U: acción directa, responde como el suscriptor.', true],
            ['Beneficiario, Y, Z', 'Demandables por U: acción de regreso como endosantes traslaticios (con protesto o cláusula «sin protesto»).', true],
            ['J', 'No: J es el mandante de U (U es su endosatario en cobro). U cobra por cuenta de J.', false],
            ['K', 'Es «nadie»: U, mandatario en cobro, no podía darlo en prenda. Solo podía endosar en cobro.', false],
            ['L', 'Es «nadie»: deriva su tenencia de quien no tenía derechos. No es portador legítimo.', false]
          ];
          el.innerHTML = '<div class="opciones-chip" id="pp">' + p.map(function (x, i) { return '<button data-i="' + i + '">' + x[0] + '</button>'; }).join('') + '</div><div id="out"><p class="small">Elige a una persona de la cadena.</p></div>';
          el.querySelectorAll('#pp button').forEach(function (b) {
            b.onclick = function () {
              var x = p[+b.dataset.i];
              el.querySelectorAll('#pp button').forEach(function (y) { y.classList.toggle('activo', y === b); });
              el.querySelector('#out').innerHTML = '<div class="resultado ' + (x[2] ? 'ok' : 'mal') + '"><b>' + x[0] + ':</b> ' + x[1] + '</div>';
            };
          });
        }
      },
      {
        id: 'letraopagare', titulo: '¿Letra de cambio o pagaré?', seccion: 'pagare',
        descripcion: 'Compara los dos títulos en los puntos que suelen preguntarse.',
        montar: function (el) {
          var filas = [
            ['Partes', 'Tres: librador, librado, beneficiario', 'Dos: suscriptor y beneficiario'],
            ['Contenido', 'Orden de pago a un tercero', 'Promesa directa de pago («debo y pagaré»)'],
            ['¿Puede nacer al portador?', 'No: nominativa o a la orden', 'Sí'],
            ['Vencimientos', 'Cuatro formas; sin cuotas (art. 48)', 'Tres formas; admite cuotas (art. 105)'],
            ['Protestos posibles', 'Falta de aceptación, de fecha o de pago', 'Solo falta de pago'],
            ['Obligado principal', 'El aceptante', 'El suscriptor'],
            ['Normas', 'Ley 18.092 (régimen base)', 'Arts. 102 y ss.; remisión a la letra (art. 107)']
          ];
          el.innerHTML = '<table class="tabla"><tr><th></th><th>Letra de cambio</th><th>Pagaré</th></tr>' + filas.map(function (f) { return '<tr><td><b>' + f[0] + '</b></td><td>' + f[1] + '</td><td>' + f[2] + '</td></tr>'; }).join('') + '</table>';
        }
      },
      {
        id: 'cartaorden', titulo: 'Carta orden de crédito: ¿qué pasa en cada caso?', seccion: 'carta-orden',
        descripcion: 'Situaciones ilustrativas resueltas con las reglas del Código de Comercio que cita Sandoval.',
        montar: function (el) {
          var casos = [
            ['El dador expide la carta «a la orden» del tomador y este la endosa a un amigo.', 'a', 'El tomador puede cobrarla personalmente, pero el endoso no transfiere al endosatario el derecho a cobrarla (art. 783).'],
            ['La carta no indica ninguna cantidad, ni fija ni máxima.', 'b', 'Es una simple carta de introducción y recomendación: el dador no responde de lo que contraten, salvo dolo (art. 794).'],
            ['El corresponsal se niega a pagar y el tomador quiere protestar y demandar al dador.', 'c', 'La carta no le da derecho alguno contra el dador ni contra el corresponsal (art. 788): no se protesta.'],
            ['La carta no dice dentro de qué plazo debe usarse.', 'd', 'El plazo lo fija el tribunal, según las circunstancias del dador y del tomador y la operación (art. 784 inc. 2°).'],
            ['El dador revoca la carta sin motivo serio mientras el tomador está de viaje y le causa perjuicios.', 'e', 'Responde de los daños, salvo que haya sobrevenido un deterioro del crédito del tomador (art. 786).']
          ];
          var et = { a: 'Solo cobra el tomador', b: 'Es carta de recomendación', c: 'No hay acción ni protesto', d: 'Plazo lo fija el juez', e: 'Dador indemniza' };
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
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'pagare', sub: 'pg-evolucion', enunciado: '¿Qué norma permite aplicar al pagaré las reglas de la letra de cambio?', opciones: ['Art. 107 Ley 18.092', 'Art. 102 Ley 18.092', 'Art. 1° Ley 18.552', 'Art. 30 Ley 18.010'], correcta: 0, explicacion: 'En todo lo que no sea incompatible con su naturaleza.' },
      { tipo: 'vf', seccion: 'pagare', sub: 'pg-esenciales', enunciado: 'El pagaré puede emitirse al portador desde su origen.', respuesta: true, explicacion: 'La letra, en cambio, nace nominativa o a la orden.' },
      { tipo: 'alternativas', seccion: 'pagare', sub: 'pg-naturaleza', enunciado: '¿Qué protesto procede en el pagaré?', opciones: ['Solo el protesto por falta de pago', 'Por falta de aceptación y de pago', 'Por falta de fecha de aceptación', 'Ninguno'], correcta: 0, explicacion: 'No hay aceptación ni fecha de aceptación.' },
      { tipo: 'alternativas', seccion: 'pagare', sub: 'pg-naturaleza', enunciado: 'Un pagaré no indica el lugar de pago. ¿Dónde se paga?', opciones: ['En el lugar de su expedición', 'En el domicilio del beneficiario', 'En cualquier notaría', 'No vale como pagaré'], correcta: 0, explicacion: 'Art. 102 N°3 Ley 18.092.' },
      { tipo: 'vf', seccion: 'pagare', sub: 'pg-evolucion', enunciado: 'En el pagaré el suscriptor da una orden de pago a un tercero.', respuesta: false, explicacion: 'Es una promesa directa de pago; la orden a un tercero es propia de la letra.' },
      { tipo: 'relacionar', seccion: 'pagare', sub: 'pg-requisitos', enunciado: 'Relaciona cada mención del pagaré con su tipo.', pares: [['Indicación de ser pagaré', 'Esencial'], ['Promesa incondicional de pago', 'Esencial'], ['Lugar y época del pago', 'De la naturaleza'], ['Firma del suscriptor', 'Esencial']], explicacion: 'Art. 102 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'pagare', sub: 'pg-evolucion', enunciado: '¿Por qué surgió el pagaré, según el profesor?', opciones: ['Para reflejar directamente una relación de dos partes sin forzar la estructura tripartita de la letra', 'Para reemplazar al cheque', 'Para eludir el impuesto de timbres', 'Para permitir títulos electrónicos'], correcta: 0, explicacion: 'Con la letra, el deudor debía ser a la vez librador y aceptante.' },
      { tipo: 'alternativas', seccion: 'vencimientos', sub: 'vt-cuotas', enunciado: '¿Cuál es una ventaja del pagaré frente a la letra de cambio?', opciones: ['Admite vencimientos sucesivos (cuotas) en un mismo documento', 'No requiere firma', 'No se le aplica el protesto', 'Puede emitirse por WhatsApp'], correcta: 0, explicacion: 'Art. 105; en la letra hay que emitir varias.' },
      { tipo: 'vf', seccion: 'vencimientos', sub: 'vt-cuotas', enunciado: 'En un pagaré en cuotas sin cláusula de aceleración, el no pago de una cuota hace exigible todo el saldo.', respuesta: false, explicacion: 'Art. 105: debe expresarse; si no, cada cuota morosa se protesta por separado.' },
      { tipo: 'alternativas', seccion: 'vencimientos', sub: 'vt-aceleracion', enunciado: '¿Por qué los bancos prefieren la aceleración facultativa?', opciones: ['Porque controlan cuándo empieza a correr la prescripción del saldo', 'Porque les permite cobrar los intereses futuros', 'Porque evita el impuesto de timbres', 'Porque la automática está prohibida'], correcta: 0, explicacion: 'Con la automática, la prescripción corre desde el no pago sobre toda la deuda.' },
      { tipo: 'alternativas', seccion: 'vencimientos', sub: 'vt-intereses', enunciado: 'Al acelerar un pagaré en cuotas, ¿qué puede cobrar el acreedor?', opciones: ['El capital y los intereses devengados hasta la aceleración', 'El capital y todos los intereses futuros', 'Solo la cuota vencida', 'Solo los intereses'], correcta: 0, explicacion: 'Art. 30 Ley 18.010, irrenunciable.' },
      { tipo: 'vf', seccion: 'vencimientos', sub: 'vt-modalidades', enunciado: 'El pagaré puede girarse «a un plazo desde la vista», igual que la letra.', respuesta: false, explicacion: 'El art. 105 contempla a la vista, a un plazo desde su fecha y a día fijo; no hay aceptación.' },
      { tipo: 'alternativas', seccion: 'ejercicios', sub: 'ej-quien', enunciado: 'U es endosatario en cobro y «da en prenda» el pagaré a K, que lo transfiere a L. ¿Qué es L?', opciones: ['«Nadie»: no es portador legítimo', 'Acreedor prendario', 'Dueño del pagaré', 'Mandatario de cobro'], correcta: 0, explicacion: 'El endosatario en cobro solo puede endosar en cobro.' },
      { tipo: 'alternativas', seccion: 'ejercicios', sub: 'ej-cobro', enunciado: 'U, endosatario en cobro de J, cobra el pagaré. ¿A quién NO puede demandar?', opciones: ['A J, su propio mandante', 'Al suscriptor', 'Al avalista del suscriptor', 'A los endosantes traslaticios anteriores'], correcta: 0, explicacion: 'U cobra por cuenta de J.' },
      { tipo: 'alternativas', seccion: 'ejercicios', sub: 'ej-reembolsos', enunciado: 'El avalista M del suscriptor paga el saldo al beneficiario el 31-01-2030. ¿Contra quién y hasta cuándo puede ir?', opciones: ['Solo contra el suscriptor, hasta el 31-07-2030', 'Contra todos los endosantes, hasta el 31-01-2031', 'Contra el beneficiario, hasta el 31-07-2030', 'Contra nadie'], correcta: 0, explicacion: 'Reembolso: 6 meses desde el pago, solo contra los anteriores.' },
      { tipo: 'alternativas', seccion: 'factura', sub: 'fac-causado', enunciado: '¿Qué hizo la Ley 19.983 con la factura?', opciones: ['Transformó su copia cedible en un título-valor dinerario con mérito ejecutivo', 'La convirtió en un valor de oferta pública', 'La hizo un título abstracto', 'Prohibió cederla'], correcta: 0, explicacion: 'Facilitó la liquidez por medio del factoring.' },
      { tipo: 'vf', seccion: 'factura', sub: 'fac-valor', enunciado: 'Según la CMF, la factura es un «valor» para efectos de la Ley de Mercado de Valores.', respuesta: false, explicacion: 'La SVS (hoy CMF) dictaminó que no lo es: carece de la autonomía exigida.' },
      { tipo: 'alternativas', seccion: 'factura', sub: 'fac-valor', enunciado: '¿Qué ley permitió transar facturas en bolsa?', opciones: ['La Ley 19.220, de bolsas de productos', 'La Ley 18.045', 'La Ley 18.092', 'La Ley 20.190'], correcta: 0, explicacion: 'Se amplió el concepto de «producto».' },
      { tipo: 'vf', seccion: 'factura', sub: 'fac-causado', enunciado: 'La factura es un título causado: debe referirse a una compraventa o servicio real.', respuesta: true, explicacion: 'Emitirla sin negocio real es una factura ideológicamente falsa.' },
      { tipo: 'alternativas', seccion: 'descuento-factoring', sub: 'df-descuento', enunciado: '¿Por qué el descuento bancario está sujeto a la TMC?', opciones: ['Porque es operación de crédito de dinero (art. 1° Ley 18.010)', 'Porque lo dice la Ley 19.983', 'Porque es un depósito', 'No lo está'], correcta: 0, explicacion: 'Ver Unidad 3. La clase específica de descuento y factoring está pendiente.' },
      { tipo: 'vf', seccion: 'descuento-factoring', sub: 'df-factoring', enunciado: 'Un banco puede hacer factoraje por medio de una filial (art. 70 letra b LGB).', respuesta: true, explicacion: 'Es una actividad complementaria al giro (Unidad 3).' },

      { tipo: 'oral', seccion: 'pagare', sub: 'pg-requisitos', enunciado: 'Explique el pagaré y compárelo con la letra de cambio.', puntos: ['Promesa directa de pago («debo y pagaré»), relación bipartita; la letra es una orden tripartita.', 'Remisión a la letra (art. 107).', 'Menciones del art. 102: indicación, promesa incondicional, lugar y época (naturaleza), beneficiario o al portador, lugar y fecha, firma.', 'Puede nacer al portador; solo protesto por falta de pago.', 'Vencimientos (art. 105): a la vista, a plazo desde su fecha, a día fijo; admite cuotas.'], norma: 'Arts. 102-107 Ley 18.092' },
      { tipo: 'oral', seccion: 'vencimientos', sub: 'vt-aceleracion', enunciado: 'Explique los vencimientos sucesivos del pagaré y la cláusula de aceleración.', puntos: ['Art. 105: cuotas en un solo documento; para hacer exigible todo, debe expresarse; si no, cada cuota se protesta.', 'Aceleración automática: prescripción corre sobre todo desde el no pago.', 'Aceleración facultativa: el acreedor decide; preferida en la práctica.', 'Art. 30 Ley 18.010: solo capital e intereses devengados; los futuros no se aceleran; irrenunciable.', 'Ejemplo: 1.000 UF en dos cuotas con 5%.'], norma: 'Art. 105 Ley 18.092; art. 30 Ley 18.010' },
      { tipo: 'oral', seccion: 'factura', sub: 'fac-valor', enunciado: '¿Qué es la factura como título de crédito y por qué no es un valor?', puntos: ['Título causado (Ley 19.983): compraventa o servicio real.', 'La copia cedible es título-valor dinerario con mérito ejecutivo; facilita el factoring.', 'Debate sobre si es título de crédito puro (Prado y Parra).', 'No es valor para la LMV (SVS/CMF): sin autonomía; excepciones causales si no fue aceptada irrevocablemente o hay mala fe.', 'Ley 19.220: se transa en bolsas de productos.'], norma: 'Ley 19.983; Ley 19.220' },

      { tipo: 'alternativas', seccion: 'sandoval-pagare', sub: 'sv-concepto', enunciado: 'Según Sandoval, ¿qué naturaleza tiene la emisión, suscripción, endoso y aval de un pagaré?', opciones: ['Son actos de comercio formales (art. 3° N° 10 CCom)', 'Son actos civiles salvo entre comerciantes', 'Son actos mixtos', 'Dependen del giro del suscriptor'], correcta: 0, explicacion: 'Texto fijado por la Ley 18.092.' },
      { tipo: 'vf', seccion: 'sandoval-pagare', sub: 'sv-concepto', enunciado: 'Para Sandoval, el pagaré es en el fondo una confesión de deuda del suscriptor.', respuesta: true, explicacion: 'Acto unilateral que no requiere aceptación.' },
      { tipo: 'relacionar', seccion: 'sandoval-pagare', sub: 'sv-diferencias', enunciado: 'Relaciona cada rasgo con el título al que corresponde.', pares: [['Solo se protesta por falta de pago', 'Pagaré'], ['Puede protestarse por falta de aceptación', 'Letra de cambio'], ['Admite cláusula de aceleración', 'Pagaré'], ['Requiere librador y librado', 'Letra de cambio']], explicacion: 'Diferencias del § 151 de Sandoval.' },
      { tipo: 'alternativas', seccion: 'sandoval-pagare', sub: 'sv-menciones', enunciado: 'Si el pagaré es nominativo, ¿cómo circula según Sandoval?', opciones: ['Por cesión de créditos', 'Por endoso', 'Por simple entrega', 'No puede circular'], correcta: 0, explicacion: 'A la orden circula por endoso; al portador, por entrega.' },
      { tipo: 'alternativas', seccion: 'sandoval-pagare', sub: 'sv-aceleracion', enunciado: 'Según la C. de Santiago (1997) citada por Sandoval, ¿por qué el acreedor no puede usar la cláusula de aceleración en cualquier tiempo para evitar la prescripción?', opciones: ['Porque equivaldría a una renuncia anticipada a la prescripción (art. 2494 CC)', 'Porque la cláusula es nula en los pagarés', 'Porque solo el deudor puede acelerar', 'Porque la aceleración exige autorización judicial'], correcta: 0, explicacion: 'También sería contrario al art. 98 de la Ley 18.092.' },
      { tipo: 'vf', seccion: 'sandoval-pagare', sub: 'sv-aceleracion', enunciado: 'Según la C. de Santiago (1990), mientras el acreedor no ejerce la aceleración facultativa, cada cuota prescribe desde su propio vencimiento.', respuesta: true, explicacion: 'La cláusula sirve para anticipar la exigibilidad, no para postergarla.' },
      { tipo: 'alternativas', seccion: 'sandoval-pagare', sub: 'sv-aceleracion', enunciado: 'Según la Corte Suprema (1991), si la cláusula dice que el atraso «hará exigible» todo el saldo, ¿desde cuándo corre la prescripción?', opciones: ['Desde el día en que se dejó de pagar la primera cuota', 'Desde la última cuota pactada', 'Desde que el acreedor demanda', 'Desde la suscripción'], correcta: 0, explicacion: 'Redactada así, es imperativa.' },
      { tipo: 'vf', seccion: 'sandoval-pagare', sub: 'sv-aceleracion', enunciado: 'Según la C. de Arica (1991), la cláusula de aceleración puede ser invocada por el fiador o codeudor solidario.', respuesta: false, explicacion: 'Es una estipulación personal del deudor que no los favorece (arts. 1479, 1520 y 2354 CC).' },
      { tipo: 'alternativas', seccion: 'sandoval-pagare', sub: 'sv-vista', enunciado: 'Según la Corte Suprema (1985), ¿qué debe hacer el portador de un pagaré a la vista con cláusula «devuelta sin protesto»?', opciones: ['Protestarlo dentro del año siguiente a la suscripción para evitar la caducidad del art. 49', 'Nada: la cláusula lo libera de protestar', 'Protestarlo dentro de 30 días', 'Notificar al suscriptor por carta certificada'], correcta: 0, explicacion: 'El protesto es el único modo de impedir esa caducidad.' },
      { tipo: 'alternativas', seccion: 'carta-orden', sub: 'co-concepto', enunciado: 'Según el art. 782 CCom, ¿qué objeto tiene la carta orden de crédito?', opciones: ['Realizar un contrato de cambio condicional entre dador y tomador, que se perfecciona si este usa el crédito', 'Garantizar una compraventa internacional', 'Documentar un mutuo bancario', 'Transferir mercaderías en tránsito'], correcta: 0, explicacion: 'Permite retirar dinero en varias plazas.' },
      { tipo: 'relacionar', seccion: 'carta-orden', sub: 'co-concepto', enunciado: 'Relaciona cada persona de la carta orden con su papel.', pares: [['Dador', 'Expide la carta y reembolsa al corresponsal'], ['Tomador', 'Retira el dinero y luego reembolsa al dador'], ['Corresponsal', 'Entrega el dinero por mandato del dador']], explicacion: 'Sandoval, § 160.' },
      { tipo: 'vf', seccion: 'carta-orden', sub: 'co-requisitos', enunciado: 'La carta orden de crédito expedida a la orden puede transferirse por endoso.', respuesta: false, explicacion: 'Es nominativa: el tomador puede cobrarla, pero el endoso no transfiere el derecho a cobrarla (art. 783).' },
      { tipo: 'alternativas', seccion: 'carta-orden', sub: 'co-requisitos', enunciado: '¿Qué es una carta orden que no designa cantidad?', opciones: ['Una simple carta de introducción y recomendación', 'Una carta a la vista por monto ilimitado', 'Un pagaré en blanco', 'Una carta nula'], correcta: 0, explicacion: 'El dador no responde salvo dolo (art. 794).' },
      { tipo: 'vf', seccion: 'carta-orden', sub: 'co-efectos', enunciado: 'Si el corresponsal no paga la carta orden, el tomador puede protestarla y demandar al dador.', respuesta: false, explicacion: 'No le da derecho alguno contra el dador ni contra el corresponsal (art. 788); no se protesta.' },
      { tipo: 'alternativas', seccion: 'carta-orden', sub: 'co-obligaciones', enunciado: '¿Cuándo responde el dador por revocar la carta orden?', opciones: ['Cuando la revoca intempestivamente y sin motivo serio, salvo que se deteriore el crédito del tomador', 'Siempre que la revoque', 'Nunca, porque es un acto unilateral', 'Solo si el tomador ya la usó'], correcta: 0, explicacion: 'Art. 786 CCom.' },
      { tipo: 'oral', seccion: 'carta-orden', sub: 'co-concepto', enunciado: 'Explique la carta orden de crédito.', puntos: ['Concepto y art. 782: contrato de cambio condicional; utilidad en varias plazas.', 'Personas y relaciones: dador–tomador (cambio condicional) y dador–corresponsal (mandato).', 'Requisitos: nominativa (art. 783), cantidad o máximo (si no, carta de recomendación), plazo, firmas.', 'Obligaciones del dador y del tomador; revocación (art. 786).', 'No da acción ni se protesta (art. 788); hoy en desuso; no confundir con el crédito documentario.'], norma: 'Arts. 782 a 794 CCom' },
      { tipo: 'oral', seccion: 'sandoval-pagare', sub: 'sv-aceleracion', enunciado: 'Explique la jurisprudencia sobre la cláusula de aceleración que recoge Sandoval.', puntos: ['Facultativa: requiere voluntad del acreedor; mientras tanto, cada cuota prescribe desde su vencimiento.', 'No puede usarse para eludir la prescripción: renuncia anticipada (art. 2494 CC).', 'Imperativa («hará exigible»): prescripción desde la primera cuota impaga (CS 1991).', 'Beneficia solo al acreedor y no favorece al fiador ni al codeudor solidario.', 'Contraste con el apunte: control del acreedor sobre el inicio de la prescripción.'], norma: 'Art. 105 Ley 18.092; art. 2494 CC' },

      { tipo: 'alternativas', seccion: 'pagare', sub: 'pg-esenciales', enunciado: 'Un pagaré se redacta en inglés. ¿Cómo cumple la mención de ser pagaré?', opciones: ['Con la expresión «promissory note» o «note»', 'Con la palabra castellana «pagaré»', 'Basta la firma del suscriptor', 'Con la frase «a la orden»'], correcta: 0, explicacion: 'Art. 102 N° 1: la indicación va en el mismo idioma empleado en el título.' },
      { tipo: 'vf', seccion: 'pagare', sub: 'pg-esenciales', enunciado: '«Debo y pagaré 1.000 UF» cumple el requisito de cantidad, aunque el monto en pesos solo se conozca el día del pago.', respuesta: true, explicacion: 'Art. 102 N° 2: la cantidad puede ser determinable; se calcula multiplicando las UF por su valor del día.' },
      { tipo: 'alternativas', seccion: 'pagare', sub: 'pg-evolucion', enunciado: '¿Con qué ley compara el profesor la remisión del pagaré a la letra de cambio (art. 107)?', opciones: ['Con la Ley 3.918 de sociedades de responsabilidad limitada, que remite casi todo a la sociedad colectiva', 'Con la Ley 18.010, que remite al Código Civil', 'Con la Ley 19.983 de facturas', 'Con la Ley de Mercado de Valores'], correcta: 0, explicacion: 'Economía normativa: en vez de un estatuto desde cero, se remite a uno decantado.' },
      { tipo: 'alternativas', seccion: 'vencimientos', sub: 'vt-modalidades', enunciado: 'En un pagaré «a un plazo desde su fecha», ¿desde cuándo se cuenta el plazo?', opciones: ['Desde la fecha de expedición del documento', 'Desde la aceptación', 'Desde la presentación a la vista', 'Desde el protesto'], correcta: 0, explicacion: 'Art. 105. En el pagaré no hay aceptación, por eso no existe el plazo desde la vista.' },
      { tipo: 'vf', seccion: 'vencimientos', sub: 'vt-aceleracion', enunciado: 'Con una cláusula de aceleración automática, desde el no pago de una cuota corre la prescripción de 1 año sobre toda la deuda.', respuesta: true, explicacion: 'Es el riesgo de la automática; por eso la práctica prefiere la facultativa.' },
      { tipo: 'alternativas', seccion: 'vencimientos', sub: 'vt-intereses', enunciado: 'Pagaré de 1.000 UF en dos cuotas de 500 UF (septiembre de 2027 y de 2028), con 5% anual. El deudor no paga la primera y el acreedor acelera. ¿Qué puede exigir?', opciones: ['Las 1.000 UF y los intereses del primer año', 'Las 1.000 UF y los intereses de los dos años', 'Solo 500 UF y sus intereses', 'Solo los intereses de los dos años'], correcta: 0, explicacion: 'Art. 30 Ley 18.010: los intereses del segundo año aún no se devengan y no se aceleran.' },
      { tipo: 'alternativas', seccion: 'ejercicios', sub: 'ej-cobro', enunciado: 'El pagaré vence el 24-09-2027. ¿Hasta cuándo puede U demandar al suscriptor, al avalista y a los endosantes traslaticios?', opciones: ['Hasta el 24-09-2028 (1 año desde el vencimiento)', 'Hasta el 24-03-2028 (6 meses)', 'Hasta el 24-09-2030 (3 años)', 'Sin plazo mientras tenga el título'], correcta: 0, explicacion: 'Acciones directa y de regreso: 1 año desde el vencimiento.' },
      { tipo: 'alternativas', seccion: 'ejercicios', sub: 'ej-reembolsos', enunciado: 'El beneficiario paga 500 UF el 31-07-2029 y otras 500 UF el 31-01-2030. ¿Cuándo vencen sus acciones de reembolso?', opciones: ['Dos plazos: 31-01-2030 y 31-07-2030', 'Uno solo: 31-07-2030', 'Uno solo: 31-01-2030', 'Dos plazos de 1 año: 31-07-2030 y 31-01-2031'], correcta: 0, explicacion: 'Reembolso: 6 meses desde cada pago.' },
      { tipo: 'vf', seccion: 'factura', sub: 'fac-electronica', enunciado: 'Según el apunte, en Chile el pagaré puede emitirse en forma electrónica, igual que la factura.', respuesta: false, explicacion: 'La factura se emite y circula electrónicamente en el SII; el pagaré solo puede emitirse en papel.' },
      { tipo: 'alternativas', seccion: 'descuento-factoring', sub: 'df-factoring', enunciado: 'Según el apunte, ¿cómo se financian las empresas de factoring?', opciones: ['Emitiendo efectos de comercio de corto plazo para comprar facturas a 30, 60 o 90 días', 'Emitiendo bonos a más de 3 años', 'Captando depósitos a la vista del público', 'Con préstamos del Banco Central'], correcta: 0, explicacion: 'Así calzan los plazos de su deuda y de su cobranza (mercado de valores, punto 6.1).' },
      { tipo: 'oral', seccion: 'ejercicios', sub: 'ej-cobro', enunciado: 'Resuelva el ejercicio de clase: beneficiario → Y → Z → J (en prenda) → U (en cobro) → K («en prenda») → L, con M avalista del suscriptor.', puntos: ['K y L son «nadie»: U, endosatario en cobro, solo podía endosar en cobro.', 'U no puede demandar a J, su mandante.', 'U tiene 1 año desde el vencimiento: acción directa contra el suscriptor y M; de regreso contra endosantes traslaticios y beneficiario.', 'Quien paga tiene 6 meses desde cada pago para la acción de reembolso contra los anteriores.', 'El avalista M que paga solo puede ir contra el suscriptor.'], norma: 'Art. 107 Ley 18.092 (remisión a la letra)' },

      /* ---- Preguntas de razonamiento (borrador de NotebookLM, revisadas contra el apunte de Gaspar) ---- */
      { tipo: 'alternativas', seccion: 'pagare', sub: 'pg-naturaleza', enunciado: 'Un pagaré dice «debo y pagaré 500 UF», lleva la firma del suscriptor y todas las menciones esenciales, pero no indica fecha de vencimiento. ¿Qué pasa?', opciones: ['Vale como pagaré y se considera pagadero a la vista', 'Es nulo: falta una mención esencial', 'Vale, pero vence un año después de su expedición', 'Vale solo como principio de prueba por escrito'], correcta: 0, explicacion: 'La época del pago es una mención de la naturaleza: si falta, la ley la suple (art. 102 N° 3). La trampa es tratarla como esencial.' },
      { tipo: 'alternativas', seccion: 'vencimientos', sub: 'vt-aceleracion', enunciado: 'Un pagaré en 24 cuotas dice: «el no pago de cualquier cuota hará exigible de pleno derecho todo el saldo». El deudor no paga la cuota 3 y el acreedor demanda el saldo 14 meses después. ¿Qué ocurre?', opciones: ['La acción por todo el saldo prescribió: con aceleración automática, el año corre sobre toda la deuda desde el no pago', 'No prescribió: el año se cuenta desde la última cuota pactada', 'No prescribió: el año corre desde que el acreedor decide acelerar', 'Solo prescribió la cuota 3; el resto sigue intacto'], correcta: 0, explicacion: 'Es el riesgo de la aceleración automática. Que el plazo dependa de la decisión del acreedor es propio de la facultativa, por eso la prefieren los bancos.' },
      { tipo: 'alternativas', seccion: 'factura', sub: 'fac-valor', enunciado: 'Una PYME cede a un factoring una factura que el comprador no ha aceptado irrevocablemente. Al cobro, el comprador alega que la mercadería nunca llegó. ¿Puede oponer esa defensa?', opciones: ['Sí: la factura es un título causado y, sin aceptación irrevocable, el deudor puede oponer las excepciones del negocio de origen', 'No: la copia cedible es un título abstracto y la cesión purga las excepciones', 'No: el factoring es un tercero de buena fe y la factura es un «valor» de la LMV', 'Sí, pero solo si la factura fue emitida en papel'], correcta: 0, explicacion: 'Por esa dependencia de la causa, la CMF dictaminó que la factura carece de la autonomía que exige la LMV y no es un «valor».' },
      { tipo: 'vf', seccion: 'factura', sub: 'fac-valor', enunciado: 'Desde que las facturas se transan en la bolsa de productos (Ley 19.220), el factoring privado dejó de operar con ellas.', respuesta: false, explicacion: 'El mercado público de facturas en bolsa convive en paralelo con el mercado privado tradicional de factoring.' },
      { tipo: 'alternativas', seccion: 'pagare', sub: 'pg-esenciales', enunciado: '¿Cuál de estas menciones del art. 102 NO es esencial en el pagaré?', opciones: ['El lugar del pago', 'El lugar y la fecha de expedición', 'El nombre del beneficiario o la indicación de ser pagadero al portador', 'La firma del suscriptor'], correcta: 0, explicacion: 'El lugar del pago es de la naturaleza (N° 3): si falta, se paga en el lugar de expedición. Ojo: el lugar y la fecha de expedición (N° 5) sí son esenciales.' }
    ]
  });
})();
