/* Unidad 7 — Pagaré, factura, descuento y factoring (clases 10 y 11 del cronograma del Prof. Gaspar).
   Fuentes: apuntes de clases del Prof. Gaspar (pagaré completo; factura solo en menciones dispersas).
   PENDIENTE: la clase de descuento y factoring la dictó una profesora invitada y no está en el apunte. */
(function () {
  Estudio.registrarUnidad({
    id: 'u7', numero: 7, bloque: 'Prof. Gaspar', profesor: 'Gaspar',
    titulo: 'Pagaré, factura, descuento y factoring',
    resumen: 'El pagaré como promesa directa de pago: menciones, vencimientos sucesivos y cláusula de aceleración. Lo que el material dice de la factura, el descuento y el factoring. La clase de descuento y factoring (profesora invitada) está pendiente.',
    lecturas: 'Apuntes de clases del Prof. Gaspar (pagaré). Lecturas del cronograma: Sandoval, tomo II, pp. 165-175 y 219-224 (pagaré y factura) y pp. 224-230 y 296-302 (descuento y factoring). <b>Pendiente:</b> la clase de descuento y factoring la dictó una profesora invitada y no está en el apunte de Gaspar.',

    glosario: [
      { termino: 'Pagaré', definicion: 'Título de crédito en que el suscriptor formula una promesa incondicional de pagar una suma de dinero al beneficiario («debo y pagaré»), obligándose directamente desde su emisión. Se le aplican supletoriamente las reglas de la letra de cambio.', fuente: 'Arts. 102 y 107 Ley 18.092; apuntes', seccion: 'pagare', alias: ['pagares', 'promissory note'] },
      { termino: 'Suscriptor', definicion: 'Deudor principal que firma el pagaré y asume la obligación de pago; equivale al aceptante de la letra de cambio.', fuente: 'Art. 102 N°6 Ley 18.092; apuntes', seccion: 'pagare' },
      { termino: 'Vencimientos sucesivos', definicion: 'Pago del pagaré en cuotas dentro de un mismo documento. Para que el no pago de una cuota haga exigible todo el saldo, debe expresarse en el pagaré; si no, cada cuota morosa se protesta por separado.', fuente: 'Art. 105 Ley 18.092', seccion: 'vencimientos', alias: ['cuotas', 'pagare en cuotas'] },
      { termino: 'Aceleración automática', definicion: 'Cláusula por la que el solo no pago de una cuota hace exigible de pleno derecho todo el saldo; desde ese momento corre la prescripción sobre toda la deuda.', fuente: 'Apuntes de clases', seccion: 'vencimientos' },
      { termino: 'Aceleración facultativa', definicion: 'Cláusula por la que el no pago de una cuota permite al acreedor, si así lo decide, hacer exigible el saldo; le da control sobre el inicio de la prescripción. Es la preferida en la práctica.', fuente: 'Apuntes de clases', seccion: 'vencimientos' },
      { termino: 'Factura', definicion: 'Título-valor causado que debe referirse a una compraventa o prestación de servicios real; la Ley 19.983 convirtió su copia cedible en un título dinerario con mérito ejecutivo.', fuente: 'Ley 19.983; apuntes', seccion: 'factura', alias: ['facturas', 'copia cedible'] },
      { termino: 'Factoring', definicion: 'Operación en que un tercero adquiere un crédito a plazo (por ejemplo, una factura) por un precio menor a su valor, para dar liquidez inmediata al cedente.', fuente: 'Apuntes de clases (ejemplo de la lechería)', seccion: 'descuento-factoring', alias: ['factoraje', 'factorings'] }
    ],

    secciones: [
      {
        id: 'pagare', titulo: '1. El pagaré: de la letra de cambio a la promesa directa',
        html: `
<p>La letra supone <b>tres</b> posiciones (librador, librado y beneficiario). Para documentar una deuda entre <b>dos</b> personas había que forzarla: el deudor firmaba como librador y como aceptante. El pagaré refleja directamente la relación bipartita: el <b>suscriptor</b> no da una orden a un tercero, sino que hace una <b>promesa incondicional de pago</b> («debo y pagaré»). Es como llegar directo a la aceptación.</p>
<div class="callout"><p><b>Economía normativa (art. 107 Ley 18.092):</b> al pagaré se aplican las normas de la letra de cambio (endoso, aval, protesto, inoponibilidad, autonomía, abstracción) en lo que no sean incompatibles con su naturaleza. El profesor lo compara con la Ley 3.918 de sociedades de responsabilidad limitada, que remite casi todo a la sociedad colectiva.</p></div>
<h3>Menciones (art. 102)</h3>
<table class="tabla">
<tr><th>N°</th><th>Mención</th><th>Tipo</th></tr>
<tr><td>1</td><td>La <b>indicación de ser pagaré</b>, en el idioma del título (en inglés, <i>promissory note</i> o <i>note</i>).</td><td>Esencial</td></tr>
<tr><td>2</td><td>La <b>promesa no sujeta a condición</b> de pagar una cantidad determinada o determinable de dinero (p. ej. «debo y pagaré 1.000 UF»).</td><td>Esencial</td></tr>
<tr><td>3</td><td>El <b>lugar y época del pago</b>. Sin lugar, se paga en el lugar de expedición; sin vencimiento, es <b>a la vista</b>.</td><td>De la naturaleza</td></tr>
<tr><td>4</td><td>El nombre del <b>beneficiario</b> o la indicación de que es pagadero <b>al portador</b>.</td><td>Esencial</td></tr>
<tr><td>5</td><td>El <b>lugar y fecha de expedición</b>.</td><td>Esencial</td></tr>
<tr><td>6</td><td>La <b>firma del suscriptor</b>.</td><td>Esencial</td></tr>
</table>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Puede nacer al portador</h4><p>La letra nace nominativa o a la orden y solo pasa a ser al portador por endoso en blanco. El pagaré puede emitirse <b>al portador</b> desde el inicio, como un billete.</p></div>
  <div class="card"><h4 style="margin-top:0">Solo protesto por falta de pago</h4><p>Como no hay presentación a la aceptación ni fecha de aceptación, el único protesto posible es el <b>por falta de pago</b>.</p></div>
</div>
<p class="small">Usos típicos: el pagaré que exige una clínica en una urgencia, o el que firma el cliente de un banco por una tarjeta o un crédito universitario.</p>`
      },
      {
        id: 'vencimientos', titulo: '2. Vencimientos, cuotas y cláusula de aceleración',
        html: `
<p>El <span class="norma">art. 105</span> contempla tres formas de vencimiento (no existe «a un plazo desde la vista», porque no hay aceptación):</p>
<div class="flow"><div class="node">A la vista<small>exigible desde la emisión</small></div><div class="node">A un plazo desde su fecha</div><div class="node">A día fijo</div></div>
<div class="callout green"><p><b>Ventaja frente a la letra:</b> el pagaré admite <b>vencimientos sucesivos (cuotas)</b> en un solo documento. En la letra esto es imposible y habría que emitir varias letras, cada una con su impuesto y su autorización notarial.</p></div>
<div class="cita">«El pagaré puede tener también vencimientos sucesivos, y en tal caso, para que el no pago de una de las cuotas haga exigible el monto total insoluto, es necesario que así se exprese en el documento. Si nada se expresare al respecto, cada cuota morosa será protestada separadamente.»<span class="fuente">Art. 105 Ley 18.092, según los apuntes</span></div>
<table class="tabla">
<tr><th>Aceleración automática</th><th>Aceleración facultativa</th></tr>
<tr><td>El solo no pago de una cuota hace exigible todo el saldo. Riesgo para el acreedor: desde ese momento corre la prescripción (1 año) sobre <b>toda</b> la deuda.</td><td>«El no pago de una cuota provocará la aceleración de las demás <b>si el acreedor así lo decide</b>». Es la preferida por los bancos: el acreedor controla cuándo empieza a correr la prescripción.</td></tr>
</table>
<div class="callout yellow"><p><b>Intereses en la aceleración (art. 30 Ley 18.010):</b> al acelerar, el acreedor solo cobra el <b>capital</b> y los <b>intereses devengados hasta la aceleración</b>. Los intereses futuros no se aceleran: es una norma imperativa e irrenunciable. Sin ella, acelerar un hipotecario el primer año permitiría cobrar los intereses de treinta años. Se conecta con el prepago, donde el deudor se libera de los intereses futuros pagando la comisión.</p></div>
<p><b>Ejemplo de clase:</b> pagaré de 1.000 UF en dos cuotas de 500 UF (24-09-2027 y 24-09-2028), con 5% anual. Si no paga la primera y el acreedor acelera, puede exigir las 1.000 UF y los intereses del primer año, pero no los del segundo, que aún no se devengan.</p>`
      },
      {
        id: 'ejercicios', titulo: '3. Ejercicios de clase: cadena de endosos y reembolsos',
        html: `
<p>Cadena del ejercicio: el <b>beneficiario</b> endosa en blanco a <b>Y</b>; Y a <b>Z</b>; Z endosa <b>en prenda</b> a <b>J</b>; J endosa <b>en cobro</b> a <b>U</b>. Luego U intenta darlo en prenda a <b>K</b>, y K lo transfiere a <b>L</b>. Hay además un avalista <b>M</b> del suscriptor.</p>
<div class="flow"><div class="node">Beneficiario</div><div class="arrow">→</div><div class="node">Y</div><div class="arrow">→</div><div class="node">Z</div><div class="arrow">→</div><div class="node y">J<small>en prenda</small></div><div class="arrow">→</div><div class="node y">U<small>en cobro</small></div><div class="arrow">→</div><div class="node" style="opacity:.5">K<small>«prenda»</small></div><div class="arrow">→</div><div class="node" style="opacity:.5">L</div></div>
<ul>
  <li><b>¿Quién es L?</b> «Nadie»: deriva su tenencia de un mandatario en cobro (U), que no podía dar en prenda ni transferir el dominio.</li>
  <li><b>U cobra:</b> si el pagaré vence el 24-09-2027, U tiene hasta el <b>24-09-2028</b> para demandar al <b>suscriptor</b> y al avalista <b>M</b> (acción directa) y a los <b>endosantes traslaticios</b> y al <b>beneficiario</b> (acción de regreso). No puede demandar a <b>J</b>, que es su propio mandante, ni a K o L.</li>
  <li><b>Reembolsos (6 meses desde cada pago):</b> si un endosante traslaticio (H, en la pauta) paga 500 UF el 31-07-2029, su acción contra los anteriores vence el 31-01-2030. Si el beneficiario paga en dos fechas, tiene dos plazos distintos. Si el avalista M paga el saldo, solo puede demandar al suscriptor.</li>
</ul>`
      },
      {
        id: 'factura', titulo: '4. La factura (lo que dice el material)',
        html: `
<div class="callout yellow"><p><b>Ojo:</b> el apunte de Gaspar no tiene una sección propia de factura; lo que sigue reúne lo que dice en otras partes. Lectura del cronograma: Sandoval, tomo II, pp. 165-175 y 219-224.</p></div>
<ul>
  <li><b>Título causado:</b> por la <span class="norma">Ley 19.983</span>, debe referirse a una <b>compraventa o prestación de servicios real</b>. Emitirla sin ese negocio es un ilícito: la llamada factura ideológicamente falsa.</li>
  <li>La Ley 19.983 transformó la <b>copia cedible</b> en un título-valor dinerario con <b>mérito ejecutivo</b>, lo que facilitó obtener liquidez por medio del factoring.</li>
  <li>Hay <b>versión electrónica</b> en el SII (el pagaré, en cambio, solo puede ser de papel).</li>
  <li>Se discute si es un título de crédito puro, por su fuerte dependencia del negocio causal (Arturo Prado y Álvaro Parra).</li>
  <li><b>No es «valor»</b> para la Ley de Mercado de Valores, según la SVS (hoy CMF): carece de la autonomía exigida, y el deudor puede oponer las excepciones de la relación causal si no la aceptó irrevocablemente o si el cesionario actúa de mala fe.</li>
  <li>Para que se transara públicamente, se usó la <span class="norma">Ley 19.220</span> (bolsas de productos), ampliando el concepto de «producto». Así convive un mercado bursátil de facturas con el factoring privado.</li>
</ul>`
      },
      {
        id: 'descuento-factoring', titulo: '5. Descuento y factoring (pendiente)',
        html: `
<div class="callout red"><p><b>Pendiente:</b> la clase de descuento y factoring (clase 11 del cronograma) la dictó una profesora invitada y <b>no está en el apunte de Gaspar</b>. Lectura del cronograma: Sandoval, tomo II, pp. 224-230 y 296-302. Esta sección se completará cuando llegue ese material. Mientras tanto, esto es lo que dicen las otras unidades:</p></div>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Descuento bancario</h4><p>El banco entrega al portador de un título no vencido su valor nominal menos un descuento por el tiempo al vencimiento; el cliente suele quedar como deudor solidario por ser endosante. Es <b>operación de crédito de dinero</b> (art. 1° Ley 18.010), sujeta a la TMC (<span class="norma">art. 69 N°4 LGB</span>).</p><p class="small"><a href="#/u/u3/contenido/activas">Ver Unidad 3 →</a></p></div>
  <div class="card"><h4 style="margin-top:0">Factoring</h4><ul><li>Es una variante de la deuda como forma de financiamiento (Unidad 1).</li><li>El factoraje es una actividad complementaria al giro que un banco puede hacer por filial (art. 70 b LGB, Unidad 3).</li><li>Ejemplo de la lechería: el factoring compra en $500.000 un crédito de $1.000.000; con cesión civil, si el deudor no paga, solo recupera el precio (art. 1907 CC). Por eso se imponen cláusulas de «plena responsabilidad» al cedente (Unidad 5).</li></ul></div>
</div>`
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
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'pagare', enunciado: '¿Qué norma permite aplicar al pagaré las reglas de la letra de cambio?', opciones: ['Art. 107 Ley 18.092', 'Art. 102 Ley 18.092', 'Art. 1° Ley 18.552', 'Art. 30 Ley 18.010'], correcta: 0, explicacion: 'En todo lo que no sea incompatible con su naturaleza.' },
      { tipo: 'vf', seccion: 'pagare', enunciado: 'El pagaré puede emitirse al portador desde su origen.', respuesta: true, explicacion: 'La letra, en cambio, nace nominativa o a la orden.' },
      { tipo: 'alternativas', seccion: 'pagare', enunciado: '¿Qué protesto procede en el pagaré?', opciones: ['Solo el protesto por falta de pago', 'Por falta de aceptación y de pago', 'Por falta de fecha de aceptación', 'Ninguno'], correcta: 0, explicacion: 'No hay aceptación ni fecha de aceptación.' },
      { tipo: 'alternativas', seccion: 'pagare', enunciado: 'Un pagaré no indica el lugar de pago. ¿Dónde se paga?', opciones: ['En el lugar de su expedición', 'En el domicilio del beneficiario', 'En cualquier notaría', 'No vale como pagaré'], correcta: 0, explicacion: 'Art. 102 N°3 Ley 18.092.' },
      { tipo: 'vf', seccion: 'pagare', enunciado: 'En el pagaré el suscriptor da una orden de pago a un tercero.', respuesta: false, explicacion: 'Es una promesa directa de pago; la orden a un tercero es propia de la letra.' },
      { tipo: 'relacionar', seccion: 'pagare', enunciado: 'Relaciona cada mención del pagaré con su tipo.', pares: [['Indicación de ser pagaré', 'Esencial'], ['Promesa incondicional de pago', 'Esencial'], ['Lugar y época del pago', 'De la naturaleza'], ['Firma del suscriptor', 'Esencial']], explicacion: 'Art. 102 Ley 18.092.' },
      { tipo: 'alternativas', seccion: 'pagare', enunciado: '¿Por qué surgió el pagaré, según el profesor?', opciones: ['Para reflejar directamente una relación de dos partes sin forzar la estructura tripartita de la letra', 'Para reemplazar al cheque', 'Para eludir el impuesto de timbres', 'Para permitir títulos electrónicos'], correcta: 0, explicacion: 'Con la letra, el deudor debía ser a la vez librador y aceptante.' },
      { tipo: 'alternativas', seccion: 'vencimientos', enunciado: '¿Cuál es una ventaja del pagaré frente a la letra de cambio?', opciones: ['Admite vencimientos sucesivos (cuotas) en un mismo documento', 'No requiere firma', 'No se le aplica el protesto', 'Puede emitirse por WhatsApp'], correcta: 0, explicacion: 'Art. 105; en la letra hay que emitir varias.' },
      { tipo: 'vf', seccion: 'vencimientos', enunciado: 'En un pagaré en cuotas sin cláusula de aceleración, el no pago de una cuota hace exigible todo el saldo.', respuesta: false, explicacion: 'Art. 105: debe expresarse; si no, cada cuota morosa se protesta por separado.' },
      { tipo: 'alternativas', seccion: 'vencimientos', enunciado: '¿Por qué los bancos prefieren la aceleración facultativa?', opciones: ['Porque controlan cuándo empieza a correr la prescripción del saldo', 'Porque les permite cobrar los intereses futuros', 'Porque evita el impuesto de timbres', 'Porque la automática está prohibida'], correcta: 0, explicacion: 'Con la automática, la prescripción corre desde el no pago sobre toda la deuda.' },
      { tipo: 'alternativas', seccion: 'vencimientos', enunciado: 'Al acelerar un pagaré en cuotas, ¿qué puede cobrar el acreedor?', opciones: ['El capital y los intereses devengados hasta la aceleración', 'El capital y todos los intereses futuros', 'Solo la cuota vencida', 'Solo los intereses'], correcta: 0, explicacion: 'Art. 30 Ley 18.010, irrenunciable.' },
      { tipo: 'vf', seccion: 'vencimientos', enunciado: 'El pagaré puede girarse «a un plazo desde la vista», igual que la letra.', respuesta: false, explicacion: 'El art. 105 contempla a la vista, a un plazo desde su fecha y a día fijo; no hay aceptación.' },
      { tipo: 'alternativas', seccion: 'ejercicios', enunciado: 'U es endosatario en cobro y «da en prenda» el pagaré a K, que lo transfiere a L. ¿Qué es L?', opciones: ['«Nadie»: no es portador legítimo', 'Acreedor prendario', 'Dueño del pagaré', 'Mandatario de cobro'], correcta: 0, explicacion: 'El endosatario en cobro solo puede endosar en cobro.' },
      { tipo: 'alternativas', seccion: 'ejercicios', enunciado: 'U, endosatario en cobro de J, cobra el pagaré. ¿A quién NO puede demandar?', opciones: ['A J, su propio mandante', 'Al suscriptor', 'Al avalista del suscriptor', 'A los endosantes traslaticios anteriores'], correcta: 0, explicacion: 'U cobra por cuenta de J.' },
      { tipo: 'alternativas', seccion: 'ejercicios', enunciado: 'El avalista M del suscriptor paga el saldo al beneficiario el 31-01-2030. ¿Contra quién y hasta cuándo puede ir?', opciones: ['Solo contra el suscriptor, hasta el 31-07-2030', 'Contra todos los endosantes, hasta el 31-01-2031', 'Contra el beneficiario, hasta el 31-07-2030', 'Contra nadie'], correcta: 0, explicacion: 'Reembolso: 6 meses desde el pago, solo contra los anteriores.' },
      { tipo: 'alternativas', seccion: 'factura', enunciado: '¿Qué hizo la Ley 19.983 con la factura?', opciones: ['Transformó su copia cedible en un título-valor dinerario con mérito ejecutivo', 'La convirtió en un valor de oferta pública', 'La hizo un título abstracto', 'Prohibió cederla'], correcta: 0, explicacion: 'Facilitó la liquidez por medio del factoring.' },
      { tipo: 'vf', seccion: 'factura', enunciado: 'Según la CMF, la factura es un «valor» para efectos de la Ley de Mercado de Valores.', respuesta: false, explicacion: 'La SVS (hoy CMF) dictaminó que no lo es: carece de la autonomía exigida.' },
      { tipo: 'alternativas', seccion: 'factura', enunciado: '¿Qué ley permitió transar facturas en bolsa?', opciones: ['La Ley 19.220, de bolsas de productos', 'La Ley 18.045', 'La Ley 18.092', 'La Ley 20.190'], correcta: 0, explicacion: 'Se amplió el concepto de «producto».' },
      { tipo: 'vf', seccion: 'factura', enunciado: 'La factura es un título causado: debe referirse a una compraventa o servicio real.', respuesta: true, explicacion: 'Emitirla sin negocio real es una factura ideológicamente falsa.' },
      { tipo: 'alternativas', seccion: 'descuento-factoring', enunciado: '¿Por qué el descuento bancario está sujeto a la TMC?', opciones: ['Porque es operación de crédito de dinero (art. 1° Ley 18.010)', 'Porque lo dice la Ley 19.983', 'Porque es un depósito', 'No lo está'], correcta: 0, explicacion: 'Ver Unidad 3. La clase específica de descuento y factoring está pendiente.' },
      { tipo: 'vf', seccion: 'descuento-factoring', enunciado: 'Un banco puede hacer factoraje por medio de una filial (art. 70 letra b LGB).', respuesta: true, explicacion: 'Es una actividad complementaria al giro (Unidad 3).' },

      { tipo: 'oral', seccion: 'pagare', enunciado: 'Explique el pagaré y compárelo con la letra de cambio.', puntos: ['Promesa directa de pago («debo y pagaré»), relación bipartita; la letra es una orden tripartita.', 'Remisión a la letra (art. 107).', 'Menciones del art. 102: indicación, promesa incondicional, lugar y época (naturaleza), beneficiario o al portador, lugar y fecha, firma.', 'Puede nacer al portador; solo protesto por falta de pago.', 'Vencimientos (art. 105): a la vista, a plazo desde su fecha, a día fijo; admite cuotas.'], norma: 'Arts. 102-107 Ley 18.092' },
      { tipo: 'oral', seccion: 'vencimientos', enunciado: 'Explique los vencimientos sucesivos del pagaré y la cláusula de aceleración.', puntos: ['Art. 105: cuotas en un solo documento; para hacer exigible todo, debe expresarse; si no, cada cuota se protesta.', 'Aceleración automática: prescripción corre sobre todo desde el no pago.', 'Aceleración facultativa: el acreedor decide; preferida en la práctica.', 'Art. 30 Ley 18.010: solo capital e intereses devengados; los futuros no se aceleran; irrenunciable.', 'Ejemplo: 1.000 UF en dos cuotas con 5%.'], norma: 'Art. 105 Ley 18.092; art. 30 Ley 18.010' },
      { tipo: 'oral', seccion: 'factura', enunciado: '¿Qué es la factura como título de crédito y por qué no es un valor?', puntos: ['Título causado (Ley 19.983): compraventa o servicio real.', 'La copia cedible es título-valor dinerario con mérito ejecutivo; facilita el factoring.', 'Debate sobre si es título de crédito puro (Prado y Parra).', 'No es valor para la LMV (SVS/CMF): sin autonomía; excepciones causales si no fue aceptada irrevocablemente o hay mala fe.', 'Ley 19.220: se transa en bolsas de productos.'], norma: 'Ley 19.983; Ley 19.220' }
    ]
  });
})();
