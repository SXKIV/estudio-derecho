/* Unidad 2 — Otros contratos sobre dinero o crédito: mutuo, crédito sindicado, covenants,
   apertura de crédito, depósito y cuentas corrientes.
   Fuentes: diapositivas y apuntes de clases del Prof. Goldenberg. */
(function () {
  var fmt = function (n, d) { return Number(n).toLocaleString('es-CL', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); };

  Estudio.registrarUnidad({
    id: 'u2', numero: 2, bloque: 'Prof. Goldenberg', profesor: 'Goldenberg',
    titulo: 'Contratos sobre dinero o crédito',
    resumen: 'El mutuo civil y mercantil, el crédito sindicado con sus covenants y eventos de incumplimiento, la apertura de crédito, el depósito (regular, irregular y mercantil) y las cuentas corrientes mercantil y bancaria.',
    lecturas: 'Diapositivas «Unidad 1: Dinero y operaciones relativas al dinero», parte «Otros contratos sobre dinero o crédito», y apuntes de clases (Prof. Goldenberg).',

    /* ---------------- Glosario (definiciones del material) ---------------- */
    glosario: [
      {"termino": "Mutuo", "definicion": "Contrato en que una de las partes entrega a la otra cierta cantidad de cosas fungibles con cargo de restituir otras tantas del mismo género y calidad.", "fuente": "Art. 2196 CC", "seccion": "mutuo", "literal": true, "alias": ["prestamo de consumo", "mutuo mercantil"]},
      {"termino": "Tantundem", "definicion": "Otras tantas cosas del mismo género y calidad que debe restituir el mutuario o el depositario irregular.", "fuente": "Apuntes de clases", "seccion": "mutuo"},
      {"termino": "Teoría de lo accesorio", "definicion": "Criterio para calificar como mercantil un acto no enumerado en el art. 3° CCom: es mercantil si accede a una actividad mercantil principal.", "fuente": "Apuntes de clases", "seccion": "mutuo", "alias": ["teoria de los accesorios"]},
      {"termino": "Crédito sindicado", "definicion": "Contrato único de financiamiento en que concurren varios acreedores con términos, tasas y covenants comunes; cada uno aporta y cobra su porción (obligación mancomunada).", "fuente": "Apuntes de clases", "seccion": "sindicado", "alias": ["sindicado", "creditos sindicados"]},
      {"termino": "Banco agente", "definicion": "Banco que estructura el crédito sindicado, actúa como interlocutor único con el deudor y recibe y distribuye los pagos a prorrata.", "fuente": "Diapositivas y apuntes", "seccion": "sindicado", "alias": ["agente de credito"]},
      {"termino": "Agente de garantías", "definicion": "Mandatario de todos los acreedores para constituir, custodiar, administrar y ejecutar las garantías del crédito.", "fuente": "Diapositivas y apuntes", "seccion": "sindicado", "alias": ["security agent"]},
      {"termino": "Intercreditor agreement", "definicion": "Convenio entre los acreedores del sindicato que regula sus relaciones internas: quórums, waivers, aceleración, ejecución de garantías y compartición de pagos.", "fuente": "Diapositivas y apuntes", "seccion": "sindicado", "alias": ["convenio entre acreedores"]},
      {"termino": "Cláusula de compartición", "definicion": "Obliga al banco que recibe un pago superior a su prorrata a repartir el exceso con los demás miembros del sindicato.", "fuente": "Apuntes de clases", "seccion": "sindicado", "alias": ["sharing clause", "sharing"]},
      {"termino": "Covenant", "definicion": "Obligación de hacer o de no hacer con que el acreedor controla el riesgo durante la vida del crédito, ya que no tiene derechos políticos en la empresa.", "fuente": "Diapositivas y apuntes", "seccion": "covenants", "alias": ["covenants"]},
      {"termino": "Evento de incumplimiento", "definicion": "Hecho pactado que permite al acreedor acelerar el crédito: mora, infracción de covenants, cross-default, cambio de control, insolvencia o efecto material adverso.", "fuente": "Diapositivas, unidad 1", "seccion": "covenants", "alias": ["event of default", "eventos de incumplimiento"]},
      {"termino": "Cross-default", "definicion": "Evento de incumplimiento que se activa si el deudor incumple otra obligación financiera, aunque esté al día en este crédito.", "fuente": "Apuntes de clases", "seccion": "covenants", "alias": ["incumplimiento cruzado", "cross default"]},
      {"termino": "Cláusula de aceleración", "definicion": "Faculta al acreedor, ante un incumplimiento, a declarar vencido el crédito y exigir de inmediato todo el saldo.", "fuente": "Apuntes de clases", "seccion": "covenants", "alias": ["aceleracion"]},
      {"termino": "Efecto material adverso", "definicion": "Cláusula general que permite acelerar ante cualquier circunstancia que empeore sustancialmente la posición del acreedor; es ambigua y litigiosa.", "fuente": "Apuntes de clases", "seccion": "covenants", "alias": ["mae", "mac", "material adverse effect"]},
      {"termino": "Período de cura", "definicion": "Plazo pactado (típicamente 10, 15 o 30 días) para que el deudor corrija una falta antes de que el acreedor pueda acelerar.", "fuente": "Apuntes de clases", "seccion": "covenants", "alias": ["cure period"]},
      {"termino": "Waiver", "definicion": "Dispensa o autorización de los acreedores para que el deudor realice un acto prohibido por los covenants.", "fuente": "Apuntes de clases", "seccion": "covenants", "alias": ["dispensa"]},
      {"termino": "Apertura de crédito", "definicion": "Contrato por el que el banco se obliga a otorgar crédito al cliente en la forma convenida (aceptación o suscripción de documentos, descuento, pagos a terceros o abono en cuenta corriente). Su objeto es el crédito en forma genérica, disponible al solo requerimiento del cliente.", "fuente": "Diapositivas, unidad 1", "seccion": "apertura"},
      {"termino": "Comisión de disponibilidad", "definicion": "La que paga el cliente en la apertura de crédito por mantener los fondos a su disposición, los use o no.", "fuente": "Apuntes de clases", "seccion": "apertura"},
      {"termino": "Depósito", "definicion": "Contrato en que se confía una cosa corporal a una persona que se encarga de guardarla y de restituirla en especie.", "fuente": "Art. 2211 CC", "seccion": "deposito", "literal": true, "alias": ["deposito regular", "deposito mercantil"]},
      {"termino": "Depósito irregular", "definicion": "Depósito de dinero que no se hace en arca cerrada cuya llave tiene el depositante: se presume que se permite emplearlo y el depositario debe restituir otro tanto en la misma moneda.", "fuente": "Art. 2221 CC", "seccion": "deposito"},
      {"termino": "Cuenta corriente mercantil", "definicion": "Contrato bilateral y conmutativo por el cual una de las partes remite a otra o recibe de ella en propiedad cantidades de dinero u otros valores, sin aplicación a un empleo determinado ni obligación de tener a la orden una cantidad o un valor equivalente, pero a cargo de acreditar al remitente por sus remesas, liquidarlas en las épocas convenidas, compensarlas de una sola vez hasta concurrencia del débito y crédito y pagar el saldo.", "fuente": "Art. 602 CCom", "seccion": "ccm", "literal": true, "alias": ["ccm"]},
      {"termino": "Remesa", "definicion": "Cada envío de dinero o valores que una parte hace a la otra en la cuenta corriente mercantil; mientras el contrato está vigente no es un crédito exigible.", "fuente": "Arts. 602 y 605 CCom", "seccion": "ccm", "alias": ["remesas"]},
      {"termino": "Cuenta corriente bancaria", "definicion": "Contrato a virtud del cual un banco se obliga a cumplir las órdenes de pago de otra persona hasta concurrencia de las cantidades de dinero que hubiere depositado en ella o del crédito que se haya estipulado.", "fuente": "Art. 1° DFL 707", "seccion": "ccb", "literal": true}
    ],

    secciones: [
      {
        id: 'mutuo', titulo: '1. Mutuo civil y mercantil',
        html: `
<div class="cita">«El mutuo o préstamo de consumo es un contrato en que una de las partes entrega a la otra cierta cantidad de cosas fungibles con cargo de restituir otras tantas del mismo género y calidad.»<span class="fuente">Art. 2196 CC</span></div>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Naturaleza</h4><ul><li><b>Real</b>: se perfecciona con la entrega.</li><li><b>Unilateral</b>, aunque puede ser sinalagmático imperfecto (la oveja enferma que contagia al rebaño del mutuario obliga a indemnizar).</li><li><b>Principal.</b></li><li>En general <b>oneroso</b>, pero puede pactarse la gratuidad por escrito.</li></ul></div>
  <div class="card"><h4 style="margin-top:0">Partes y objeto</h4><ul><li><b>Mutuante</b> (presta) y <b>mutuario</b> (recibe y restituye el <i>tantundem</i>). Puede haber pluralidad (créditos sindicados).</li><li>Objeto: cosas <b>fungibles</b> (dinero, acciones, mercaderías).</li><li>Si es <b>dinero</b>, rige la <b>Ley 18.010</b>; si es otra cosa fungible, el CC o el CCom.</li></ul></div>
</div>
<h3>¿Civil o mercantil?</h3>
<p>El mutuo no está en el art. 3° del Código de Comercio, así que se aplica la <b>teoría de lo accesorio</b>: se mira la actividad del <b>mutuario</b>. El carbón prestado a una empresa de transporte para su locomotora es mutuo mercantil; las ovejas que pide el profesor a su madre para comérselas, civil, y para su restaurante, mercantil. Importa, entre otras cosas, para las garantías.</p>
<h3>Reglas del mutuo mercantil (arts. 795 y ss. CCom)</h3>
<table class="tabla">
<tr><th>Materia</th><th>Regla</th></tr>
<tr><td>Restitución</td><td>Préstamo por <b>tiempo indeterminado</b>: exigible <b>10 días después de reclamada</b> la restitución (art. 795). Si el plazo no está bien determinado, el <b>juez lo fija prudencialmente</b> según los términos del contrato, la operación a la que se destinó y las circunstancias de las partes (art. 796).</td></tr>
<tr><td>Onerosidad</td><td>La gratuidad <b>no se presume</b>: devenga intereses legales, hoy el interés corriente (art. 798).</td></tr>
<tr><td>Forma</td><td>La estipulación de intereses o la que exonera de pagarlos debe constar <b>por escrito</b>; si no, es ineficaz en juicio (art. 799).</td></tr>
<tr><td>Intereses en dinero</td><td>Siempre en dinero, aunque se presten mercaderías, calculados según el precio corriente del día y lugar de la restitución (art. 800).</td></tr>
<tr><td>Mora</td><td>Interés corriente desde que se reclama judicialmente el pago (art. 801).</td></tr>
<tr><td>Anatocismo</td><td>Por demanda judicial o convenio especial, sobre intereses debidos por <b>al menos un año completo</b> (art. 804).</td></tr>
</table>
<div class="callout yellow"><p><b>Compara el anatocismo:</b> CC, prohibido (art. 1559 N°3) · Ley 18.010, períodos de 30 días o más (art. 9°) · cuenta corriente mercantil, 6 meses o más (art. 617 CCom) · mutuo mercantil, al menos 1 año (art. 804 CCom).</p></div>`
      },
      {
        id: 'sindicado', titulo: '2. El crédito moderno: crédito sindicado',
        html: `
<p>El mutuo del Código Civil es bilateral y lineal. Los grandes financiamientos (project finance, adquisiciones) requieren montos que un solo banco no puede o no quiere asumir, por sus <b>límites legales de crédito</b> y sus políticas de riesgo. La solución es el <b>sindicato</b>: varias instituciones (bancos, fondos, aseguradoras) comparten el riesgo a prorrata.</p>
<ul>
  <li>Es un <b>contrato único</b> (normalmente una escritura pública) con pluralidad de acreedores y términos, tasas y covenants comunes. No son varios contratos separados.</li>
  <li>La obligación es <b>mancomunada, no solidaria</b>: cada banco aporta su cuota y solo puede cobrar su porción.</li>
</ul>
<figure class="diagrama">
<svg viewBox="0 0 760 250" role="img" aria-label="Estructura de un crédito sindicado">
  <defs><marker id="fl3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 z" fill="#637386"/></marker></defs>
  <g font-family="Inter,Segoe UI,Arial" font-size="13" text-anchor="middle">
    <rect x="20" y="20" width="130" height="44" rx="10" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="85" y="47" font-weight="800">Banco A</text>
    <rect x="20" y="80" width="130" height="44" rx="10" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="85" y="107" font-weight="800">Banco B</text>
    <rect x="20" y="140" width="130" height="44" rx="10" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="85" y="167" font-weight="800">Fondo C</text>
    <rect x="260" y="55" width="200" height="94" rx="12" fill="#eaf4fb" stroke="#1479c9" stroke-width="2"/><text x="360" y="88" font-weight="800">Banco agente</text><text x="360" y="108" fill="#637386">estructura, interlocutor único,</text><text x="360" y="124" fill="#637386">distribuye pagos a prorrata</text>
    <rect x="570" y="55" width="170" height="94" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="655" y="96" font-weight="800">Deudor</text><text x="655" y="116" fill="#637386">empresa o SPV</text>
    <rect x="260" y="185" width="200" height="50" rx="12" fill="#fffdf0" stroke="#e0c200" stroke-width="2"/><text x="360" y="208" font-weight="800">Agente de garantías</text><text x="360" y="225" fill="#637386">mandatario de todos los acreedores</text>
    <line x1="152" y1="42" x2="258" y2="90" stroke="#637386" stroke-width="1.5" marker-end="url(#fl3)"/><line x1="152" y1="102" x2="258" y2="102" stroke="#637386" stroke-width="1.5" marker-end="url(#fl3)"/><line x1="152" y1="162" x2="258" y2="116" stroke="#637386" stroke-width="1.5" marker-end="url(#fl3)"/>
    <line x1="462" y1="102" x2="566" y2="102" stroke="#637386" stroke-width="1.5" marker-end="url(#fl3)"/><text x="514" y="94" fill="#172536">desembolsos</text>
    <line x1="85" y1="186" x2="85" y2="232" stroke="#b9c7d4" stroke-width="1.5"/><text x="85" y="246" fill="#637386">intercreditor agreement</text>
  </g>
</svg>
<figcaption>El intercreditor agreement regula las relaciones entre los acreedores; el deudor casi no participa en él.</figcaption>
</figure>
<table class="tabla">
<tr><th>Rol</th><th>Función</th></tr>
<tr><td><b>Banco agente</b></td><td>Normalmente el banco líder: estructura la operación e invita a los demás bancos. Durante la vigencia es el <b>interlocutor único</b> con el deudor y <b>recibe y distribuye los pagos</b> a prorrata. Cobra una comisión de agencia.</td></tr>
<tr><td><b>Agente de garantías</b></td><td><b>Mandatario de los acreedores</b> para constituir, custodiar, administrar y ejecutar las garantías. Existe porque prendas reales exigen entregar la cosa, y no se puede entregar el mismo bien a cinco bancos. Puede haber uno por jurisdicción.</td></tr>
<tr><td><b>Intercreditor agreement</b></td><td>Convenio entre acreedores: <b>quórums</b> para modificar, otorgar <i>waivers</i>, acelerar o ejecutar; <b>cláusulas de compartición</b> (<i>sharing</i>): el banco que recibe más de su prorrata debe repartir el exceso.</td></tr>
</table>
<h3>Modalidades de desembolso</h3>
<div class="grid">
  <div class="card"><h4 style="margin-top:0">Único al firmar</h4><p>Cumplidas las condiciones precedentes, todos los bancos desembolsan en un acto.</p></div>
  <div class="card"><h4 style="margin-top:0">Sucesivos por hitos</h4><p>Cada tramo se libera al acreditar un avance (p. ej. una carretera concesionada). Así el deudor no paga intereses por dinero inactivo.</p></div>
  <div class="card"><h4 style="margin-top:0">Línea de crédito</h4><p>Giros según necesidad dentro de un cupo, sin hitos.</p></div>
</div>`
      },
      {
        id: 'covenants', titulo: '3. Covenants y eventos de incumplimiento',
        html: `
<p>Los <b>covenants</b> son obligaciones de hacer y de no hacer con que el acreedor, que no vota en la empresa, vigila el riesgo durante la vida del crédito.</p>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Covenants (obligaciones)</h4><ul>
    <li><b>Informar:</b> entregar estados financieros periódicos. Rompe el secreto contable.</li>
    <li><b>Financieros:</b> mantener ratios (EBITDA/deuda, cobertura).</li>
    <li><b>No endeudarse</b> sobre cierto límite.</li>
    <li><b>No vender activos significativos</b> (los hornos del restaurante).</li>
    <li><b>No cambiar la línea de negocios.</b></li>
    <li><b>No alterar relevantemente la situación financiera.</b></li>
    <li><b>Restringir el reparto de dividendos.</b></li></ul></div>
  <div class="card"><h4 style="margin-top:0">Eventos de incumplimiento</h4><ul>
    <li><b>Mora o simple retardo</b> en cualquier pago.</li>
    <li><b>Infracción a covenants.</b></li>
    <li><b>Cross-default:</b> incumplir otro crédito del deudor, aunque esté al día en este (también con deudas laborales).</li>
    <li><b>Cambio de control</b> del deudor: el crédito es <i>intuito personae</i>.</li>
    <li><b>Insolvencia</b>, con el límite de la protección financiera concursal.</li>
    <li><b>Efecto material adverso (MAE/MAC):</b> cualquier circunstancia que empeore sustancialmente la posición del acreedor. Es ambigua y litigiosa (ejemplo: el 11 de septiembre de 2001).</li></ul></div>
</div>
<div class="callout"><p><b>Consecuencia:</b> el acreedor puede <b>acelerar</b> el crédito («tirar la cadena») y exigir todo el saldo. Suele haber un <b>período de cura</b> (10, 15 o 30 días) para corregir faltas menores. Si el deudor necesita hacer algo prohibido, pide un <b>waiver</b> (dispensa), normalmente pagando una comisión.</p></div>
<div class="callout red"><p><b>Límite legal:</b> si el deudor entra en un procedimiento de <b>reorganización concursal (Ley 20.720)</b>, mientras dure la protección financiera concursal los acreedores no pueden acelerar ni ejecutar garantías.</p></div>`
      },
      {
        id: 'apertura', titulo: '4. Apertura de crédito',
        html: `
<p>El banco <b>se obliga a poner crédito a disposición</b> del cliente en la forma convenida. Es un contrato <b>atípico</b> (no está regulado en detalle) y funciona como <b>contrato marco</b>: cada giro efectivo es una operación de crédito de dinero que se rige por las condiciones ya pactadas.</p>
<div class="callout"><p><b>Diferencia con el mutuo:</b> el objeto no es una cosa fungible entregada, sino el <b>crédito en forma genérica</b>, disponible al solo requerimiento del cliente.</p></div>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Obligaciones</h4><p><b>Banco:</b> obligación de <b>hacer</b>, mantener el crédito disponible desde la firma. Incumple si se niega injustificadamente a un giro solicitado dentro de las condiciones.</p><p><b>Cliente:</b> no está obligado a usar el crédito. En la práctica paga una <b>comisión de disponibilidad</b> (en la tarjeta, la de mantención), aunque no gire nada.</p></div>
  <div class="card"><h4 style="margin-top:0">Formas de utilización</h4><ul><li><b>Abono en cuenta corriente</b> para libre uso.</li><li><b>Pagos a terceros</b> (proveedores) por cuenta del cliente.</li><li><b>Suscripción o aceptación</b> de letras o pagarés por cuenta del cliente.</li><li><b>Descuento</b> de documentos que presenta el cliente.</li></ul></div>
</div>
<table class="tabla">
<tr><th>Característica</th><th>Explicación</th></tr>
<tr><td>Consensual</td><td>Se perfecciona por el consentimiento, aunque en la práctica siempre consta por escrito.</td></tr>
<tr><td>Unilateral o bilateral</td><td>En teoría solo obliga al banco; en la práctica es bilateral por la comisión.</td></tr>
<tr><td>Instantáneo o de tracto sucesivo</td><td>Un giro único futuro o, por regla general, giros parciales en el tiempo.</td></tr>
<tr><td><i>Intuito personae</i></td><td>Se otorga según la persona del cliente, su solvencia y la viabilidad de su negocio.</td></tr>
</table>
<p><b>Usos:</b> la <b>tarjeta de crédito bancaria</b> (crédito rotativo hasta un cupo; regulada por el Compendio de Normas Financieras del Banco Central) y el <b>financiamiento de proyectos</b> (desembolsos condicionados al avance; no rotativo).</p>`
      },
      {
        id: 'deposito', titulo: '5. Depósito: civil, mercantil e irregular',
        html: `
<div class="cita">«Llámase depósito en general el contrato en que se confía una cosa corporal a una persona que se encarga de guardarla y de restituirla en especie.»<span class="fuente">Art. 2211 CC</span></div>
<p>Será civil o mercantil según la <b>teoría de lo accesorio</b>, o mercantil si es un depósito bancario. El Código de Comercio no lo define; el <span class="norma">art. 807 CCom</span> dice que se constituye «en la misma forma que la comisión».</p>
<table class="tabla">
<tr><th>Aspecto</th><th>Depósito civil</th><th>Depósito mercantil</th></tr>
<tr><td>Perfeccionamiento</td><td><b>Real</b> (entrega).</td><td><b>Consensual</b>, porque el art. 807 lo remite a la comisión. <span class="etiqueta roja">Crítica</span>: no se puede custodiar lo que aún no se recibe.</td></tr>
<tr><td>Onerosidad</td><td><b>Gratuito</b> (art. 2219).</td><td><b>Oneroso</b> (art. 809): retribución pactada o según el uso de la plaza.</td></tr>
<tr><td>Culpa</td><td><b>Grave</b>, por defecto.</td><td>Régimen de la comisión: debería ser <b>leve</b>.</td></tr>
<tr><td>Uso de la cosa</td><td>Prohibido salvo permiso, que puede presumirse (art. 2220): el auto que se deja a la madre. Si se usa sin permiso, se puede terminar el contrato.</td><td>Si el depositario usa la cosa, <b>pierde el derecho a retribución</b> (art. 810).</td></tr>
</table>
<h3>Depósito irregular (art. 2221 CC)</h3>
<div class="cita">«En el depósito de dinero, si no es en arca cerrada cuya llave tiene el depositante, se presumirá que se permite emplearlo, y el depositario será obligado a restituir otro tanto en la misma moneda.»<span class="fuente">Art. 2221 CC</span></div>
<p>El depositario (típicamente el banco) <b>se hace dueño del dinero</b>, y el depositante tiene un <b>crédito</b> para exigir el <i>tantundem</i>. Por eso, cuando un tercero sustrae fondos de una cuenta por fraude informático, lo que se roba es dinero <b>del banco</b>: cobrar al cliente un seguro antifraude es hacerle asegurar el patrimonio del banco.</p>
<table class="tabla">
<tr><th></th><th>Mutuo</th><th>Depósito irregular</th><th>Depósito regular</th></tr>
<tr><td>Causa</td><td>Transferir el <b>uso</b> del dinero (financiamiento).</td><td><b>Custodia</b> del dinero, aunque se permita usarlo.</td><td><b>Custodia</b> de una cosa corporal en especie.</td></tr>
<tr><td>¿Se puede emplear?</td><td>Siempre: es el objeto del contrato.</td><td>Se presume que sí (art. 2221).</td><td>Solo con permiso; en lo mercantil, perdiendo la remuneración.</td></tr>
<tr><td>Dominio</td><td>Se transfiere.</td><td>Se transfiere.</td><td>No se transfiere (mera tenencia).</td></tr>
<tr><td>Restitución</td><td>Al plazo; sin pacto, 10 días desde la entrega.</td><td>A voluntad del depositante (art. 2226), salvo pacto (depósito a plazo).</td><td>A voluntad del depositante (art. 2226).</td></tr>
</table>
<p class="small">El profesor menciona el debate de Guzmán Brito sobre si al depósito irregular de dinero se aplica una regla similar a la de las operaciones de crédito de dinero.</p>`
      },
      {
        id: 'ccm', titulo: '6. Cuenta corriente mercantil',
        html: `
<p>Nace de la contabilidad de <b>partida doble</b> entre comerciantes que se hacen cargos y abonos continuos y recíprocos. En vez de pagar cada negocio, los ligan en una unidad de relación y al final liquidan, compensan y pagan el saldo. Olavarría la describe como la convención en que dos personas se conceden crédito recíprocamente y acuerdan novar en cuenta corriente las relaciones que nazcan de ello.</p>
<div class="cita">«La cuenta corriente es un contrato bilateral y conmutativo por el cual una de las partes remite a otra o recibe de ella en propiedad cantidades de dinero u otros valores, sin aplicación a un empleo determinado ni obligación de tener a la orden una cantidad o un valor equivalente, pero a cargo de acreditar al remitente por sus remesas, liquidarlas en las épocas convenidas, compensarlas de una sola vez hasta concurrencia del débito y crédito y pagar el saldo.»<span class="fuente">Art. 602 CCom</span></div>
<div class="grid">
  <div class="card"><h4 style="margin-top:0">Requisitos</h4><ul><li>Al menos una parte <b>comerciante</b> (art. 604).</li><li>Remesas <b>en propiedad</b>, sin destino determinado ni obligación de tenerlas a la orden (si no, sería depósito).</li><li>Más de una remesa <b>recíproca</b> (SII y doctrina mayoritaria). El «fiado» de Don Mario no es cuenta corriente.</li></ul></div>
  <div class="card"><h4 style="margin-top:0">Características</h4><ul><li><b>Consensual</b>, pero no se prueba por testigos (art. 618).</li><li>Bilateral, principal, oneroso conmutativo.</li><li>De prestaciones sucesivas.</li><li><b>Título traslaticio de dominio.</b></li></ul></div>
  <div class="card"><h4 style="margin-top:0">Efecto clave: art. 605</h4><p>Mientras dura el contrato, <b>nadie es acreedor ni deudor</b>. Por eso las remesas no son operaciones de crédito de dinero (no pagan impuesto de timbres), no se pueden embargar ni ceder.</p></div>
</div>
<h3>Efectos y terminación</h3>
<table class="tabla">
<tr><th>Tema</th><th>Regla</th></tr>
<tr><td>Obligaciones esenciales</td><td>Remitir o recibir las remesas; acreditarlas en libros; compensar débito y crédito al liquidar; pagar el saldo.</td></tr>
<tr><td>Obligaciones de la naturaleza (art. 606)</td><td>Las remesas devengan <b>interés corriente</b> (o el pactado). <b>Anatocismo</b> permitido por períodos de <b>6 meses o más</b> (art. 617).</td></tr>
<tr><td>Terminación (art. 611)</td><td>Llegada de la época pactada; mutuo consentimiento; muerte natural o civil; interdicción o demencia; resolución de liquidación concursal; cualquier suceso que prive de la libre disposición de los bienes.</td></tr>
<tr><td>Efectos de la liquidación (art. 613 y ss.)</td><td>Fija irrevocablemente las relaciones (<b>novación</b>); opera la <b>compensación</b>; el saldo es <b>capital productivo de intereses</b> (art. 614); puede garantizarse con <b>hipoteca</b> (art. 615); la acción prescribe en <b>4 años</b> (art. 619).</td></tr>
</table>
<div class="callout yellow"><p><b>Ojo tributario:</b> el SII fiscaliza que no se simule una cuenta corriente para encubrir un préstamo unilateral y no pagar impuesto de timbres (por ejemplo, devolver $500 frente a US$2 millones). Debe haber reciprocidad real y una legítima razón de negocios.</p></div>`
      },
      {
        id: 'ccb', titulo: '7. Cuenta corriente bancaria',
        html: `
<div class="cita">«Contrato en virtud del cual un Banco se obliga a cumplir las órdenes de pago de otra persona hasta concurrencia de las cantidades de dinero que hubiere depositado en ella o del crédito que se haya estipulado.»<span class="fuente">Art. 1° DFL 707</span></div>
<table class="tabla">
<tr><th></th><th>Cuenta corriente mercantil</th><th>Cuenta corriente bancaria</th></tr>
<tr><td>Partes</td><td>Al menos una comerciante.</td><td>Una debe ser <b>necesariamente un banco</b>.</td></tr>
<tr><td>Objeto</td><td>Dinero u otros valores.</td><td><b>Solo dinero.</b></td></tr>
<tr><td>Destino de los fondos</td><td>Sin empleo determinado ni obligación de tenerlos a la orden.</td><td>Los fondos deben estar <b>a la orden y disponibles</b>: hay un uso determinado.</td></tr>
</table>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Características</h4><ul><li>Consensual (en la práctica, contrato de adhesión sujeto a la LPDC y al Sernac financiero).</li><li>Bilateral.</li><li>Oneroso conmutativo: el cliente paga comisiones y el banco da seguridad y disponibilidad.</li><li>Principal y de tracto sucesivo.</li></ul></div>
  <div class="card"><h4 style="margin-top:0">Obligaciones</h4><p><b>Banco:</b> abrir la cuenta; acreditar los depósitos; cumplir las órdenes de pago (cheque, débito, PAC, transferencia); informar los movimientos mensualmente (cartola). El saldo se entiende aceptado si no se objeta en 30 días.</p><p><b>Cliente:</b> pagar comisiones de apertura y mantención, y los sobregiros que el banco haya cubierto.</p></div>
</div>`
      }
    ],

    interactivos: [
      {
        id: 'quecontrato', titulo: '¿Mutuo, depósito irregular o depósito regular?', seccion: 'deposito',
        descripcion: 'Lee cada situación y clasifícala. La pista está en la causa (financiamiento o custodia), en el objeto y en quién se hace dueño.',
        montar: function (el) {
          var casos = [
            ['Ana entrega $2.000.000 al banco en una cuenta vista para tenerlos seguros y retirarlos cuando quiera.', 'irregular', 'Es dinero entregado para custodia, no en arca cerrada: el banco se hace dueño y se presume que puede emplearlo (art. 2221 CC).'],
            ['Una empresa recibe $50 millones del banco y se obliga a devolverlos en 24 cuotas con intereses.', 'mutuo', 'La causa es el financiamiento: es un mutuo de dinero, es decir, una operación de crédito de dinero.'],
            ['Pedro deja su chaqueta en el guardarropía de la discoteca y recibe un número.', 'regular', 'Es una cosa corporal en especie, entregada para guardarla y devolverla: depósito regular.'],
            ['Una persona deja monedas de oro en una caja de seguridad del banco cuya llave conserva ella.', 'regular', 'Es dinero en «arca cerrada» cuya llave tiene el depositante: no se presume permiso de uso y se restituye en especie.'],
            ['Una bodega mercantil guarda la mercadería de un importador a cambio de una tarifa y la usa en su propio negocio.', 'regular', 'Es un depósito regular mercantil. Al usar la cosa, pierde el derecho a la retribución (art. 810 CCom).']
          ];
          var nombres = { mutuo: 'Mutuo', irregular: 'Depósito irregular', regular: 'Depósito regular' }, i = 0, ok = 0;
          function pintar() {
            if (i >= casos.length) { el.innerHTML = '<div class="resultado ok"><b>Resultado: ' + ok + ' de ' + casos.length + '.</b> <button class="btn sec" id="re">Repetir</button></div>'; el.querySelector('#re').onclick = function () { i = 0; ok = 0; pintar(); }; return; }
            var c = casos[i];
            el.innerHTML = '<p class="small">Situación ' + (i + 1) + ' de ' + casos.length + '</p><p style="font-size:18px;font-weight:700">' + c[0] + '</p><div class="opciones-chip">' +
              Object.keys(nombres).map(function (k) { return '<button data-k="' + k + '">' + nombres[k] + '</button>'; }).join('') + '</div><div id="fb"></div>';
            el.querySelectorAll('[data-k]').forEach(function (b) {
              b.onclick = function () {
                var bien = b.dataset.k === c[1]; if (bien) ok++;
                el.querySelectorAll('[data-k]').forEach(function (x) { x.disabled = true; if (x.dataset.k === c[1]) x.classList.add('activo'); });
                el.querySelector('#fb').innerHTML = '<div class="resultado ' + (bien ? 'ok' : 'mal') + '"><b>' + (bien ? '✓ Correcto' : '✗ Es ' + nombres[c[1]].toLowerCase()) + '.</b> ' + c[2] + '<div style="margin-top:10px"><button class="btn" id="sig">Siguiente</button></div></div>';
                el.querySelector('#sig').onclick = function () { i++; pintar(); };
              };
            });
          }
          pintar();
        }
      },
      {
        id: 'liquidacion', titulo: 'Simulador de cuenta corriente mercantil', seccion: 'ccm',
        descripcion: 'Agrega remesas entre la matriz y la filial y liquida la cuenta. Mientras no liquides, nadie es acreedor ni deudor (art. 605).',
        montar: function (el) {
          var remesas = [{ de: 'Matriz', monto: 200 }, { de: 'Filial', monto: 400 }];
          el.innerHTML = '<div class="fila"><div class="campo"><label>Remite</label><select id="de"><option>Matriz</option><option>Filial</option></select></div><div class="campo"><label>Monto (UF)</label><input type="number" id="monto" value="150"></div><button class="btn sec" id="add">Agregar remesa</button><button class="btn ghost" id="lim">Vaciar</button><button class="btn" id="liq">Liquidar</button></div><div id="lista"></div><div id="out"></div>';
          function lista() {
            el.querySelector('#lista').innerHTML = '<table class="tabla"><tr><th>#</th><th>Remesa</th><th>Monto</th><th>Estado</th></tr>' + remesas.map(function (r, k) {
              return '<tr><td>' + (k + 1) + '</td><td>' + r.de + ' → ' + (r.de === 'Matriz' ? 'Filial' : 'Matriz') + '</td><td>' + fmt(r.monto) + ' UF</td><td class="small">Partida en suspenso: no es crédito exigible</td></tr>';
            }).join('') + '</table>';
            el.querySelector('#out').innerHTML = '';
          }
          el.querySelector('#add').onclick = function () { var m = +el.querySelector('#monto').value; if (m > 0) { remesas.push({ de: el.querySelector('#de').value, monto: m }); lista(); } };
          el.querySelector('#lim').onclick = function () { remesas = []; lista(); };
          el.querySelector('#liq').onclick = function () {
            var m = 0, f = 0; remesas.forEach(function (r) { if (r.de === 'Matriz') m += r.monto; else f += r.monto; });
            var recip = m > 0 && f > 0, saldo = Math.abs(m - f), deudor = m > f ? 'la Filial' : 'la Matriz', acreedor = m > f ? 'la Matriz' : 'la Filial';
            el.querySelector('#out').innerHTML = (recip ? '' : '<div class="resultado mal"><b>Ojo:</b> todas las remesas van en un solo sentido. Sin reciprocidad no hay cuenta corriente mercantil según el SII y la doctrina mayoritaria; sería más bien un préstamo, es decir, una operación de crédito de dinero.</div>') +
              '<div class="resultado ' + (recip ? 'ok' : '') + '"><div class="kicker">Liquidación (art. 613 CCom)</div><p>Matriz remitió ' + fmt(m) + ' UF · Filial remitió ' + fmt(f) + ' UF → compensación hasta la concurrencia de ' + fmt(Math.min(m, f)) + ' UF.</p>' +
              (saldo ? '<div class="big">' + fmt(saldo) + ' UF</div><p><b>' + deudor.charAt(0).toUpperCase() + deudor.slice(1) + '</b> debe el saldo a ' + acreedor + '. Desde ahora el saldo es capital productivo de intereses (art. 614), puede garantizarse con hipoteca (art. 615) y la acción prescribe en 4 años (art. 619).</p>' : '<p>No hay saldo: las remesas se compensan totalmente.</p>') +
              '<p class="small">Simplificado: en la realidad cada remesa devenga interés corriente desde que se hizo (art. 606), así que también se compensan los intereses.</p></div>';
          };
          lista();
        }
      },
      {
        id: 'sharing', titulo: 'Crédito sindicado: prorrata y cláusula de compartición', seccion: 'sindicado',
        descripcion: 'Un crédito de US$1.000 millones entre tres acreedores. El deudor hace un pago: mira cómo lo distribuye el banco agente y qué pasa si un banco cobra por su cuenta.',
        montar: function (el) {
          var bancos = [['Banco A (agente)', 500], ['Banco B', 300], ['Fondo C', 200]];
          el.innerHTML = '<div class="fila"><div class="campo"><label>Pago del deudor (US$ millones)</label><input type="number" id="pago" value="100"></div><label class="check"><input type="checkbox" id="directo"> El deudor le paga todo directamente al Banco B</label></div><div id="out"></div>';
          function calc() {
            var pago = +el.querySelector('#pago').value || 0, directo = el.querySelector('#directo').checked;
            var filas = bancos.map(function (b) {
              var cuota = pago * b[1] / 1000;
              var recibido = directo ? (b[0] === 'Banco B' ? pago : 0) : cuota;
              return '<tr><td>' + b[0] + '</td><td>' + (b[1] / 10) + '%</td><td>' + fmt(cuota, 1) + '</td><td>' + fmt(recibido, 1) + '</td><td>' + (directo ? (recibido > cuota ? 'Debe compartir ' + fmt(recibido - cuota, 1) : 'Recibe ' + fmt(cuota - recibido, 1) + ' por sharing') : '—') + '</td></tr>';
            }).join('');
            el.querySelector('#out').innerHTML = '<table class="tabla"><tr><th>Acreedor</th><th>Participación</th><th>Prorrata</th><th>Recibió</th><th>Ajuste</th></tr>' + filas + '</table>' +
              '<p class="small">' + (directo ? 'La <b>cláusula de compartición</b> del intercreditor agreement obliga al banco que recibió más que su prorrata a repartir el exceso, para mantener el equilibrio del sindicato.' : 'El <b>banco agente</b> recibe el pago y lo distribuye a prorrata. Recuerda que la obligación es mancomunada: cada uno cobra solo su porción.') + '</p>';
          }
          el.querySelectorAll('input').forEach(function (i) { i.oninput = calc; }); calc();
        }
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'mutuo', enunciado: '¿Cómo se determina si un mutuo es civil o mercantil?', opciones: ['Por la teoría de lo accesorio, según la actividad del mutuario', 'Porque está enumerado en el art. 3° del Código de Comercio', 'Según si el mutuante es un banco', 'Según el monto del préstamo'], correcta: 0, explicacion: 'El mutuo no está en el art. 3° CCom; se mira si el préstamo es accesorio a una actividad mercantil del mutuario.' },
      { tipo: 'vf', seccion: 'mutuo', enunciado: 'En el mutuo mercantil por tiempo indeterminado, la restitución es exigible 10 días después de reclamada.', respuesta: true, explicacion: 'Art. 795 CCom. Si el plazo no está bien determinado, lo fija el juez prudencialmente (art. 796).' },
      { tipo: 'vf', seccion: 'mutuo', enunciado: 'El mutuo civil es oneroso por naturaleza.', respuesta: false, explicacion: 'El mutuo civil es naturalmente gratuito (art. 2206 CC). El mercantil es oneroso: la gratuidad no se presume (art. 798 CCom).' },
      { tipo: 'alternativas', seccion: 'mutuo', enunciado: 'Si se prestan mercaderías en un mutuo mercantil, ¿cómo se pagan los intereses?', opciones: ['En dinero, según el precio corriente de las mercaderías el día y lugar de la restitución', 'En mercaderías del mismo género', 'Como lo elija el mutuario', 'No devengan intereses'], correcta: 0, explicacion: 'Art. 800 CCom.' },
      { tipo: 'relacionar', seccion: 'mutuo', enunciado: 'Relaciona cada régimen con su regla de anatocismo.', pares: [['Código Civil', 'Prohibido (art. 1559 N°3)'], ['Ley 18.010', 'Períodos de 30 días o más'], ['Cuenta corriente mercantil', 'Períodos de 6 meses o más'], ['Mutuo mercantil', 'Intereses de al menos 1 año']], explicacion: 'Es una comparación que suele preguntarse en el oral.' },
      { tipo: 'alternativas', seccion: 'mutuo', enunciado: 'Si la oveja prestada está enferma y contagia al rebaño del mutuario, el mutuo…', opciones: ['Se vuelve sinalagmático imperfecto: el mutuante debe indemnizar', 'Se resuelve de pleno derecho', 'Se transforma en depósito', 'Se vuelve mercantil'], correcta: 0, explicacion: 'Nace una obligación para el mutuante por los vicios de la cosa prestada.' },
      { tipo: 'alternativas', seccion: 'sindicado', enunciado: 'En un crédito sindicado, la obligación de los bancos frente al deudor es, en principio…', opciones: ['Mancomunada: cada banco aporta y cobra su porción', 'Solidaria activa', 'Indivisible', 'Subsidiaria del banco agente'], correcta: 0, explicacion: 'Cada banco se compromete con su cuota y tiene derecho a su porción.' },
      { tipo: 'alternativas', seccion: 'sindicado', enunciado: '¿Por qué existe el agente de garantías?', opciones: ['Porque una garantía real que exige entrega no puede entregarse a varios bancos a la vez', 'Porque la ley prohíbe a los bancos tener prendas', 'Para cobrar la comisión de estructuración', 'Para votar en la junta de accionistas del deudor'], correcta: 0, explicacion: 'Es el mandatario común de todos los acreedores para constituir, custodiar y ejecutar las garantías.' },
      { tipo: 'vf', seccion: 'sindicado', enunciado: 'El intercreditor agreement regula las relaciones entre los acreedores, como los quórums y la compartición de pagos.', respuesta: true, explicacion: 'El deudor tiene una participación marginal en ese convenio.' },
      { tipo: 'relacionar', seccion: 'sindicado', enunciado: 'Relaciona cada figura con su función.', pares: [['Banco agente', 'Interlocutor único y distribuye pagos'], ['Agente de garantías', 'Mandatario para administrar las garantías'], ['Sharing clause', 'Reparte lo cobrado sobre la prorrata'], ['Desembolso por hitos', 'Libera fondos según el avance del proyecto']], explicacion: 'Estructura típica del crédito sindicado moderno.' },
      { tipo: 'alternativas', seccion: 'covenants', enunciado: '¿Qué es el cross-default?', opciones: ['Un evento de incumplimiento que se activa si el deudor incumple otro crédito', 'El incumplimiento recíproco de dos bancos del sindicato', 'Un covenant de información', 'La compensación en la cuenta corriente mercantil'], correcta: 0, explicacion: 'Permite acelerar aunque el deudor esté al día en este crédito, para anticiparse a los demás acreedores.' },
      { tipo: 'vf', seccion: 'covenants', enunciado: 'Durante la protección financiera concursal de una reorganización (Ley 20.720), los bancos pueden acelerar el crédito por la insolvencia del deudor.', respuesta: false, explicacion: 'La ley lo impide mientras dure la protección financiera concursal.' },
      { tipo: 'alternativas', seccion: 'covenants', enunciado: '¿Qué es un waiver?', opciones: ['La dispensa que dan los acreedores para realizar un acto prohibido por los covenants', 'El período para corregir un incumplimiento', 'La aceleración del crédito', 'Una garantía personal'], correcta: 0, explicacion: 'El período para corregir es el «período de cura».' },
      { tipo: 'alternativas', seccion: 'covenants', enunciado: 'El cambio de control del deudor es evento de incumplimiento porque…', opciones: ['El crédito se otorga intuito personae, en consideración a quien controla y administra', 'La ley prohíbe vender acciones de un deudor', 'Lo exige la NCG 484', 'Extingue la sociedad deudora'], correcta: 0, explicacion: 'El banco evaluó a ese controlador; si cambia, puede querer salir de la operación.' },
      { tipo: 'vf', seccion: 'covenants', enunciado: 'La restricción al reparto de dividendos es un covenant usual en los créditos a empresas.', respuesta: true, explicacion: '«Primero me paga a mí como acreedor».' },
      { tipo: 'alternativas', seccion: 'apertura', enunciado: '¿Cuál es la obligación principal del banco en la apertura de crédito?', opciones: ['Una obligación de hacer: mantener el crédito a disposición del cliente', 'Una obligación de dar: entregar todo el dinero al firmar', 'Garantizar las deudas del cliente con terceros', 'Pagar intereses al cliente'], correcta: 0, explicacion: 'Incumple si se niega injustificadamente a un giro solicitado dentro de las condiciones.' },
      { tipo: 'vf', seccion: 'apertura', enunciado: 'En la apertura de crédito, el cliente está obligado a girar el total del cupo.', respuesta: false, explicacion: 'El uso es facultativo; en la práctica paga una comisión de disponibilidad.' },
      { tipo: 'alternativas', seccion: 'apertura', enunciado: '¿Por qué la apertura de crédito, siendo teóricamente unilateral, es en la práctica bilateral?', opciones: ['Por el cobro habitual de una comisión de disponibilidad al cliente', 'Porque el cliente debe girar todo el cupo', 'Porque la ley la califica como bilateral', 'Porque siempre lleva hipoteca'], correcta: 0, explicacion: 'Solo el banco se obliga a la disponibilidad, pero el cliente asume pagar la comisión.' },
      { tipo: 'relacionar', seccion: 'apertura', enunciado: 'Relaciona cada forma de utilizar la apertura de crédito con su descripción.', pares: [['Abono en cuenta corriente', 'El banco deposita el monto para libre uso'], ['Pagos a terceros', 'El banco paga a proveedores por cuenta del cliente'], ['Aceptación de documentos', 'El banco acepta letras o pagarés por el cliente'], ['Descuento', 'El banco anticipa fondos contra documentos del cliente']], explicacion: 'El contrato es multipropósito.' },
      { tipo: 'alternativas', seccion: 'deposito', enunciado: 'Según el art. 807 CCom, el depósito mercantil es…', opciones: ['Consensual, porque se constituye en la forma de la comisión', 'Real, como el civil', 'Solemne', 'Siempre gratuito'], correcta: 0, explicacion: 'La doctrina lo critica: no se puede custodiar lo que no se ha recibido.' },
      { tipo: 'alternativas', seccion: 'deposito', enunciado: 'El depositario mercantil que usa la cosa depositada…', opciones: ['Pierde el derecho a la retribución (art. 810 CCom)', 'Comete el delito de usura', 'Se transforma en mutuario', 'No tiene ninguna consecuencia'], correcta: 0, explicacion: 'En el civil, en cambio, el uso no autorizado permite terminar el contrato.' },
      { tipo: 'vf', seccion: 'deposito', enunciado: 'En el depósito irregular de dinero el banco se hace dueño de los fondos y el cliente tiene un crédito para exigir el tantundem.', respuesta: true, explicacion: 'Por eso el fraude informático a una cuenta afecta, jurídicamente, el patrimonio del banco.' },
      { tipo: 'alternativas', seccion: 'deposito', enunciado: '¿Cuál es la diferencia de CAUSA entre el mutuo y el depósito irregular?', opciones: ['Mutuo: transferir el uso del dinero (financiar); depósito irregular: custodia', 'Mutuo: custodia; depósito irregular: financiar', 'No hay diferencia', 'El mutuo recae en cosas no fungibles'], correcta: 0, explicacion: 'En ambos se transfiere el dominio y se restituye un tantundem; cambian la causa y la época de restitución.' },
      { tipo: 'vf', seccion: 'deposito', enunciado: 'El depósito civil es oneroso por naturaleza.', respuesta: false, explicacion: 'El depósito civil es gratuito (art. 2219 CC); el mercantil es oneroso (art. 809 CCom).' },
      { tipo: 'alternativas', seccion: 'ccm', enunciado: 'Según el art. 605 CCom, mientras la cuenta corriente mercantil está vigente…', opciones: ['Ninguna parte es acreedora ni deudora', 'Cada remesa es un crédito exigible', 'Las remesas son operaciones de crédito de dinero', 'El saldo prescribe en 4 años'], correcta: 0, explicacion: 'Por eso las remesas no son OCD (sin impuesto de timbres) y no se pueden embargar ni ceder.' },
      { tipo: 'vf', seccion: 'ccm', enunciado: 'Para que haya cuenta corriente mercantil basta con remesas en un solo sentido.', respuesta: false, explicacion: 'Según el SII y la doctrina mayoritaria se requiere más de una remesa recíproca. El «fiado» del almacén no es cuenta corriente.' },
      { tipo: 'alternativas', seccion: 'ccm', enunciado: '¿En qué plazo prescribe la acción por el saldo de la cuenta corriente mercantil?', opciones: ['4 años', '1 año', '5 años', '6 meses'], correcta: 0, explicacion: 'Art. 619 CCom.' },
      { tipo: 'alternativas', seccion: 'ccm', enunciado: '¿Qué efecto produce la liquidación de la cuenta corriente mercantil?', opciones: ['Fija irrevocablemente las relaciones (novación), opera la compensación y el saldo devenga intereses', 'Resuelve los contratos de origen con efecto retroactivo', 'Transforma cada remesa en un mutuo independiente', 'Obliga a constituir hipoteca'], correcta: 0, explicacion: 'Arts. 613 y 614. La hipoteca del art. 615 es facultativa.' },
      { tipo: 'vf', seccion: 'ccm', enunciado: 'La cuenta corriente mercantil puede probarse por testigos.', respuesta: false, explicacion: 'Art. 618 CCom: aunque es consensual, no puede probarse por testigos.' },
      { tipo: 'relacionar', seccion: 'ccb', enunciado: 'Relaciona el rasgo con la cuenta corriente que corresponde.', pares: [['Una parte debe ser banco', 'Cuenta corriente bancaria'], ['Al menos una parte comerciante', 'Cuenta corriente mercantil'], ['Fondos a la orden y disponibles', 'Cuenta corriente bancaria'], ['Remesas sin empleo determinado', 'Cuenta corriente mercantil']], explicacion: 'DFL 707 frente al art. 602 CCom.' },
      { tipo: 'vf', seccion: 'ccb', enunciado: 'En la cuenta corriente bancaria, el saldo informado en la cartola se entiende aceptado si no se objeta en 30 días.', respuesta: true, explicacion: 'Es una de las obligaciones de información del banco.' },

      { tipo: 'oral', seccion: 'mutuo', enunciado: 'Explique el mutuo mercantil y en qué se diferencia del mutuo civil.', puntos: ['Concepto (art. 2196 CC): entrega de cosas fungibles con cargo de restituir otras tantas del mismo género y calidad.', 'Real, unilateral (puede ser sinalagmático imperfecto) y principal.', 'Calificación: teoría de lo accesorio, según la actividad del mutuario. Si es dinero, Ley 18.010.', 'Restitución: 10 días después de reclamada (art. 795) o plazo fijado por el juez (art. 796).', 'Oneroso por naturaleza (art. 798); los intereses deben pactarse por escrito (art. 799) y en dinero (art. 800).', 'Anatocismo con intereses de al menos un año (art. 804).'], norma: 'Arts. 2196 CC; 795-804 CCom' },
      { tipo: 'oral', seccion: 'sindicado', enunciado: 'Describa la estructura de un crédito sindicado y sus principales actores.', puntos: ['Razón: límites de crédito y riesgo de cada banco; se reparte el riesgo.', 'Contrato único con pluralidad de acreedores; la obligación es mancomunada.', 'Banco agente: estructura, interlocutor único, distribuye pagos; cobra comisión.', 'Agente de garantías: mandatario de los acreedores para las garantías (problema de la entrega).', 'Intercreditor agreement: quórums, waivers, aceleración y sharing.', 'Desembolsos: único, por hitos (condiciones precedentes) o línea de crédito.'], norma: 'Diapositivas, crédito moderno' },
      { tipo: 'oral', seccion: 'covenants', enunciado: '¿Qué son los covenants y los eventos de incumplimiento? Dé ejemplos.', puntos: ['Covenants: obligaciones de hacer y no hacer con que el acreedor, sin derechos políticos, controla el riesgo.', 'Ejemplos: informar estados financieros, ratios, no endeudarse, no vender activos, no cambiar de giro, restringir dividendos.', 'Eventos de incumplimiento: mora, infracción de covenants, cross-default, cambio de control, insolvencia, MAE.', 'Efecto: aceleración; período de cura; waiver.', 'Límite: protección financiera concursal (Ley 20.720).'], norma: 'Diapositivas, covenants' },
      { tipo: 'oral', seccion: 'apertura', enunciado: 'Explique la apertura de crédito: naturaleza, obligaciones y formas de uso.', puntos: ['El banco se obliga a dar crédito en la forma convenida; el objeto es el crédito en forma genérica, no una cosa fungible entregada.', 'Atípica; contrato marco: cada giro es una OCD.', 'Banco: obligación de hacer (disponibilidad). Cliente: uso facultativo y comisión de disponibilidad.', 'Consensual (escrita en la práctica), unilateral o bilateral, instantánea o de tracto sucesivo, intuito personae.', 'Formas: abono en cuenta, pagos a terceros, aceptación o suscripción de documentos, descuento.', 'Usos: tarjeta de crédito (rotativa) y project finance.'], norma: 'Diapositivas, apertura de crédito' },
      { tipo: 'oral', seccion: 'deposito', enunciado: 'Compare el mutuo, el depósito irregular y el depósito regular.', puntos: ['Causa: mutuo = transferir el uso (financiar); irregular y regular = custodia.', 'Empleo: mutuo, siempre; irregular, se presume (art. 2221); regular, solo con permiso.', 'Dominio: se transfiere en el mutuo y en el irregular; en el regular hay mera tenencia.', 'Restitución: mutuo al plazo (sin pacto, 10 días); depósitos a voluntad del depositante (art. 2226).', 'Consecuencia práctica: el fraude informático afecta el patrimonio del banco.', 'Depósito mercantil: consensual (art. 807, criticado), oneroso (809), pierde la retribución si usa la cosa (810).'], norma: 'Arts. 2211, 2219-2221, 2226 CC; 807-810 CCom' },
      { tipo: 'oral', seccion: 'ccm', enunciado: 'Explique la cuenta corriente mercantil: concepto, requisitos y efectos.', puntos: ['Art. 602 CCom: remesas en propiedad, sin empleo determinado, que se acreditan, liquidan, compensan y cuyo saldo se paga.', 'Requisitos: una parte comerciante (604); remesas en propiedad; reciprocidad.', 'Art. 605: nadie es acreedor ni deudor antes de liquidar; las remesas no son OCD (timbres) ni son embargables.', 'Naturaleza: interés corriente de las remesas (606); anatocismo de 6 meses o más (617).', 'Terminación (611) y efectos de la liquidación: novación, compensación, saldo productivo de intereses (614), hipoteca (615), prescripción de 4 años (619).', 'Se diferencia de la cuenta corriente bancaria (DFL 707): banco, solo dinero, fondos disponibles.'], norma: 'Arts. 602-619 CCom; DFL 707' }
    ]
  });
})();
