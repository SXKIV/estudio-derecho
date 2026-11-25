/* Unidad 1 — Dinero, financiamiento de la empresa y operaciones de crédito de dinero (Ley 18.010).
   Fuentes: diapositivas y apuntes de clases del Prof. Goldenberg; NCG N°484 CMF; sentencia CS Rol 27.802-14 (Cofisa).
   Orden y numeración de las secciones (1.1 … 3.14): los del apunte completo de clases del Prof. Goldenberg. */
(function () {
  var fmt = function (n, d) { return Number(n).toLocaleString('es-CL', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); };
  var pct = function (n) { return fmt(n, 2) + '%'; };

  Estudio.registrarUnidad({
    id: 'u1', numero: 1, bloque: 'Prof. Goldenberg', profesor: 'Goldenberg',
    titulo: 'Dinero y Ley 18.010',
    resumen: 'Qué es el dinero y sus medios de pago, cómo se financia la empresa (capital, deuda e híbridos) y el estatuto de las operaciones de crédito de dinero: reajuste, interés, comisiones, tasas máximas, sanciones, anatocismo, mora y prepago.',
    lecturas: 'Diapositivas «Unidad 1: Dinero y operaciones relativas al dinero» y apuntes de clases (Prof. Goldenberg); NCG N°484 de la CMF (2022); sentencia de reemplazo de la Corte Suprema, Rol N° 27.802-14, caso Sernac con Cofisa (2015). El orden y la numeración de las secciones siguen el apunte completo de clases.',

    /* ---------------- Glosario (definiciones del material) ---------------- */
    glosario: [
      {"termino": "Dinero", "definicion": "Cualquier cosa que sirve como medio de pago o de intercambio de bienes y servicios.", "fuente": "Samuelson, citado en las diapositivas", "seccion": "dinero", "literal": true},
      {"termino": "Poder liberatorio", "definicion": "Aptitud del dinero de curso legal para extinguir obligaciones: nadie puede negarse a recibir billetes y monedas emitidos por el Banco Central.", "fuente": "Art. 31 LOC Banco Central", "seccion": "dinero"},
      {"termino": "Obligación lítrica", "definicion": "Categoría propia de las deudas de dinero (Gisela López): aunque se parecen a las de género, recaen sobre una unidad de medida abstracta regulada por el ordenamiento (reajuste, límites de interés, cálculo).", "fuente": "Apuntes de clases", "seccion": "dinero", "sub": "dinero-naturaleza"},
      {"termino": "Vale vista", "definicion": "Documento que emite el banco contra un depósito previo, por lo que siempre tiene fondos; el banco debe pagarlo a su presentación.", "fuente": "Cap. 2-6 RAN; art. 65 LGB", "seccion": "medios-pago", "sub": "mp-nacionales", "alias": ["valevista"]},
      {"termino": "Orden de pago", "definicion": "Transferencia de fondos instruida por el importador (mensajería SWIFT) en que el banco actúa como simple mandatario, sin garantizar nada.", "fuente": "Diapositivas, unidad 1", "seccion": "medios-pago", "sub": "mp-exterior"},
      {"termino": "Cobranza extranjera", "definicion": "Gestión documental en que los bancos entregan los documentos de la mercadería (factura, conocimiento de embarque) contra el pago, sin garantizar que el comprador pague.", "fuente": "Diapositivas, unidad 1", "seccion": "medios-pago", "sub": "mp-exterior"},
      {"termino": "Tarjeta de prepago", "definicion": "Medio de pago con provisión previa de fondos, que puede emitir una entidad no bancaria y tiene límites de monto salvo autenticación segura de identidad.", "fuente": "Ley 20.950", "seccion": "medios-pago", "sub": "mp-nacionales", "alias": ["prepago tarjeta"]},
      {"termino": "Financiamiento propio (capital)", "definicion": "Recursos aportados por socios o accionistas: dan un derecho residual sobre el remanente, son pasivo no exigible y otorgan derechos políticos y económicos.", "fuente": "Diapositivas y apuntes, unidad 1", "seccion": "financiamiento", "sub": "fin-capital", "alias": ["capital", "financiamiento propio"]},
      {"termino": "Financiamiento ajeno (deuda)", "definicion": "Recursos de un tercero acreedor: dan un derecho preferente y exigible sobre los flujos de caja, sin control ordinario de la empresa.", "fuente": "Diapositivas y apuntes, unidad 1", "seccion": "financiamiento", "sub": "fin-deuda", "alias": ["deuda", "financiamiento ajeno"]},
      {"termino": "Híbrido financiero", "definicion": "Instrumento que combina características de la deuda (restitución, vencimiento, intereses) y del capital (riesgo residual, remuneración variable, subordinación).", "fuente": "Diapositivas, unidad 1", "seccion": "hibridos", "alias": ["hibridos financieros", "hibridos"]},
      {"termino": "Operación de crédito de dinero", "definicion": "Aquella por la cual una de las partes entrega o se obliga a entregar una cantidad de dinero y la otra a pagarla en un momento distinto de aquel en que se celebra la convención.", "fuente": "Art. 1° Ley 18.010", "seccion": "ocd", "literal": true, "alias": ["ocd", "operaciones de credito de dinero"]},
      {"termino": "Avío minero", "definicion": "Contrato del Código de Minería en que un financista (aviador) presta dinero o herramientas a un minero, que le paga con un porcentaje del mineral; si no encuentra nada, no restituye. Está excluido de la Ley 18.010.", "fuente": "Apuntes de clases; art. 1° Ley 18.010", "seccion": "ocd", "alias": ["avio"]},
      {"termino": "Préstamo marítimo", "definicion": "Préstamo a la gruesa ventura: se financia una expedición y, si el barco naufraga, el deudor queda liberado. Es aleatorio y está excluido de la Ley 18.010.", "fuente": "Apuntes de clases; art. 1° Ley 18.010", "seccion": "ocd", "alias": ["prestamo a la gruesa ventura", "gruesa ventura"]},
      {"termino": "Interés legal", "definicion": "Expresión de leyes antiguas que hoy se entiende referida al interés corriente.", "fuente": "Art. 19 Ley 18.010", "seccion": "forma-onerosidad", "sub": "fo-legal"},
      {"termino": "Principio nominalista", "definicion": "Regla supletoria según la cual el deudor se libera pagando la misma suma nominal recibida: el reajuste no se presume.", "fuente": "DL 1.123 de 1975", "seccion": "reajuste", "alias": ["nominalismo"]},
      {"termino": "Reajustabilidad", "definicion": "Mecanismo para proteger al acreedor de la pérdida de poder adquisitivo del dinero por la inflación. Con instituciones reguladas solo valen los sistemas autorizados por el Banco Central; entre particulares hay libertad de pacto.", "fuente": "Art. 3° Ley 18.010", "seccion": "reajuste", "alias": ["reajuste"]},
      {"termino": "Unidad de Fomento", "definicion": "Principal sistema de reajuste autorizado por el Banco Central; varía diariamente reflejando la variación mensual del IPC.", "fuente": "Apuntes de clases", "seccion": "reajuste", "sub": "re-reguladas", "alias": ["uf"]},
      {"termino": "Interés", "definicion": "En las operaciones no reajustables, toda suma que el acreedor recibe o tiene derecho a recibir por sobre el capital, a cualquier título. En las reajustables, por sobre el capital reajustado.", "fuente": "Art. 2° Ley 18.010", "seccion": "interes", "alias": ["intereses"]},
      {"termino": "Comisión", "definicion": "Retribución de un servicio real y efectivamente prestado, distinto de los inherentes al crédito, calculada según su costo e informada y aceptada antes. Si no cumple los requisitos de la CMF, es interés.", "fuente": "Art. 19 ter Ley 18.010; NCG 484", "seccion": "interes-comision", "sub": "com-19ter", "alias": ["comisiones"]},
      {"termino": "Servicio inherente", "definicion": "El necesario para iniciar, celebrar, materializar o terminar la operación de crédito, o el que el acreedor debe prestar por exigencia legal o normativa. No puede cobrarse como comisión.", "fuente": "NCG 484", "seccion": "interes-comision", "sub": "com-ncg"},
      {"termino": "Interés corriente", "definicion": "Promedio ponderado de las tasas que cobran los bancos en Chile por segmento; lo determina la CMF mensualmente.", "fuente": "Art. 6° Ley 18.010", "seccion": "tasas", "sub": "tasas-tic", "alias": ["tic", "tasa de interes corriente"]},
      {"termino": "Tasa máxima convencional", "definicion": "Límite del interés que puede pactarse: la mayor entre 1,5 veces la TIC y la TIC más 2 puntos porcentuales, con regímenes especiales para créditos de hasta 200 UF y tarjetas.", "fuente": "Arts. 6°, 6 bis y 6 ter Ley 18.010", "seccion": "tasas", "sub": "tasas-tmc", "alias": ["tmc", "interes maximo convencional", "imc", "tasa maxima"]},
      {"termino": "Usura", "definicion": "Cobro de intereses por sobre la tasa máxima convencional; constituye delito sancionado con presidio o reclusión menores.", "fuente": "Art. 472 CP", "seccion": "sanciones", "sub": "san-penal"},
      {"termino": "Anatocismo", "definicion": "Capitalización de intereses: los intereses devengados y no pagados se suman al capital y producen nuevos intereses (intereses sobre intereses).", "fuente": "Diapositivas, unidad 1; art. 9° Ley 18.010", "seccion": "anatocismo", "alias": ["capitalizacion de intereses", "intereses sobre intereses"]},
      {"termino": "Interés moratorio", "definicion": "El que debe el deudor que retarda el pago: por defecto el interés corriente desde el retardo, solo sobre el capital vencido, sin acumularse con otro interés y sin capitalizarse.", "fuente": "Art. 16 Ley 18.010", "seccion": "mora-prepago", "sub": "mora-concepto", "alias": ["interes penal", "intereses moratorios"]},
      {"termino": "Pago anticipado", "definicion": "Prepago de una operación de crédito. Por regla general se conviene libremente; en créditos de hasta 5.000 UF (o de consumo, sin límite) el deudor puede hacerlo contra la voluntad del acreedor, prepagando al menos el 10% y pagando la comisión legal.", "fuente": "Art. 10 Ley 18.010; art. 3° LPDC", "seccion": "prepago", "sub": "pre-concepto", "alias": ["prepago"]},
      {"termino": "Comisión de prepago", "definicion": "Compensación máxima al acreedor por el prepago: un mes de intereses pactados sobre el capital prepagado en operaciones no reajustables y un mes y medio en las reajustables.", "fuente": "Art. 10 Ley 18.010", "seccion": "prepago"}
    ],

    secciones: [
      /* ===== 1. Dinero ===== */
      {
        id: 'dinero', grupo: '1. Dinero', titulo: '1.1. ¿Qué es el dinero?',
        html: `
<p>Desde la economía, Samuelson define el dinero como <b>cualquier cosa que sirve como medio de pago o de intercambio</b> de bienes y servicios. El derecho chileno no tiene una definición conceptual; lo más cercano es el <span class="norma">art. 31 LOC Banco Central (Ley 18.840)</span>: los billetes y monedas que emite el Banco Central son los únicos medios de pago con <b>poder liberatorio</b> y <b>circulación ilimitada</b>. Por eso nadie puede negarse a recibir efectivo para extinguir una obligación.</p>
<h3 data-sub="dinero-origen">1.1.1. Origen: del trueque al dinero</h3>
<div class="flow"><div class="node">Economía tribal<small>autosuficiencia, sin intercambio formal</small></div><div class="arrow">→</div><div class="node">Trueque (permuta)<small>problemas de fraccionamiento y doble coincidencia</small></div><div class="arrow">→</div><div class="node hot">Compraventa<small>precio en una unidad común: el dinero</small></div></div>
<p>El trueque tenía dos límites: la <b>dificultad de fraccionar</b> (¿cómo divido una vaca para comprar algo de menor valor?) y la <b>doble coincidencia de deseos</b> (encontrar a alguien que tenga lo que quiero y quiera lo que ofrezco).</p>
<h3 data-sub="dinero-funciones">1.1.2. Funciones y naturaleza jurídica</h3>
<h4 data-sub="dinero-funciones-lista">1.1.2.1. Funciones del dinero</h4>
<div class="grid">
  <div class="card"><h4 style="margin-top:0">Reserva de valor</h4><p>Mantiene la riqueza en forma líquida, con menor riesgo relativo que los activos reales (que se deterioran y cuestan mantener).</p></div>
  <div class="card"><h4 style="margin-top:0">Unidad de medida</h4><p>Expresa el valor de todos los bienes en una sola unidad de cuenta, lo que permite comparar y decidir.</p></div>
  <div class="card"><h4 style="margin-top:0">Medio de pago</h4><p>Extingue obligaciones. Su atributo jurídico es el <b>poder liberatorio</b> (art. 31 LOC BCentral).</p></div>
</div>
<h4 data-sub="dinero-naturaleza">1.1.2.2. Naturaleza jurídica</h4>
<ul>
  <li>En efectivo es un <b>bien mueble corporal</b>; como saldo en una cuenta (dinero bancario) es un <b>bien mueble incorporal</b> (un crédito contra el banco).</li>
  <li>Lo relevante no es su corporeidad, sino su función de <b>unidad de medida</b>: a las partes no les importa el billete físico, sino el valor que representa.</li>
  <li>La doctrina (Gisela López) habla de <b>obligación lítrica</b>: las deudas de dinero son una categoría propia, distinta de las de género, porque recaen sobre una unidad abstracta regulada por el ordenamiento (reajuste, límites de interés, forma de cálculo).</li>
</ul>`
      },
      {
        id: 'medios-pago', grupo: '1. Dinero', titulo: '1.2. Medios de pago',
        html: `
<h3 data-sub="mp-nacionales">1.2.1. Medios de pago nacionales</h3>
<table class="tabla">
<tr><th>Medio</th><th>Rasgos que debes recordar</th></tr>
<tr><td><b>Efectivo</b></td><td>Poder liberatorio absoluto (art. 31 LOC BCentral). Nadie puede negarse a recibirlo.</td></tr>
<tr><td><b>Tarjeta de débito</b></td><td>Débito inmediato sobre fondos existentes en cuenta corriente o vista. Cadena: titular → banco emisor → operador → comercios adheridos.</td></tr>
<tr><td><b>Transferencia electrónica</b></td><td>Entre cuentas corrientes o vista; en Chile es instantánea, por eso exige autenticación reforzada.</td></tr>
<tr><td><b>Cheque</b></td><td><span class="norma">DFL 707</span>. Orden escrita de pago al banco. Puede girarse sin fondos: se protesta, con consecuencias civiles y penales (giro doloso).</td></tr>
<tr><td><b>Vale vista</b></td><td>Capítulo 2-6 RAN. Se emite <b>contra un depósito previo</b>: siempre tiene fondos (diferencia con el cheque). Útil en operaciones de alto valor, p. ej. dejado en notaría con instrucciones.</td></tr>
<tr><td><b>Tarjeta de crédito</b></td><td>Crédito rotativo del banco hasta un cupo; plazo de gracia (~40 días) sin intereses; posibilidad de diferir pagos.</td></tr>
<tr><td><b>Tarjeta de prepago</b></td><td>Provisión previa de fondos. Puede emitirla una entidad no bancaria (<span class="norma">Ley 20.950</span>). Tiene límites de monto, salvo autenticación segura de identidad.</td></tr>
</table>
<h3 data-sub="mp-exterior">1.2.2. Comercio exterior</h3>
<p>De menor a mayor seguridad para el exportador:</p>
<div class="grid">
  <div class="card"><span class="etiqueta roja">Sin garantía</span><h4>Orden de pago</h4><p>Transferencia instruida por el importador (mensajería SWIFT). El banco es un <b>simple mandatario</b>: no garantiza nada.</p></div>
  <div class="card"><span class="etiqueta amarilla">Sin garantía bancaria</span><h4>Cobranza extranjera</h4><p>Los bancos gestionan documentos: entregan la factura y el conocimiento de embarque (B/L) <b>contra pago</b>, pero no garantizan que el comprador pague.</p></div>
  <div class="card"><span class="etiqueta verde">Garantía del banco</span><h4>Carta de crédito</h4><p>Regida por las <span class="norma">UCP 600</span> (Cámara de Comercio Internacional, <i>soft law</i>). El <b>banco emisor se obliga directamente frente al beneficiario</b> (vendedor) a pagar contra documentos conformes.</p></div>
</div>
<figure class="diagrama">
<svg viewBox="0 0 760 250" role="img" aria-label="Esquema de la carta de crédito">
  <defs><marker id="fl1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 z" fill="#637386"/></marker></defs>
  <g font-family="Inter,Segoe UI,Arial" font-size="13">
    <rect x="20" y="20" width="200" height="60" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="120" y="46" text-anchor="middle" font-weight="800">Comprador / importador</text><text x="120" y="64" text-anchor="middle" fill="#637386">ordenante</text>
    <rect x="540" y="20" width="200" height="60" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="640" y="46" text-anchor="middle" font-weight="800">Vendedor / exportador</text><text x="640" y="64" text-anchor="middle" fill="#637386">beneficiario</text>
    <rect x="270" y="165" width="220" height="64" rx="12" fill="#eaf4fb" stroke="#1479c9" stroke-width="2"/><text x="380" y="192" text-anchor="middle" font-weight="800">Banco emisor</text><text x="380" y="210" text-anchor="middle" fill="#637386">se obliga a pagar contra documentos</text>
    <line x1="222" y1="40" x2="536" y2="40" stroke="#637386" stroke-width="1.6" marker-end="url(#fl1)"/><text x="380" y="33" text-anchor="middle" fill="#172536">① compraventa internacional</text>
    <line x1="130" y1="82" x2="290" y2="163" stroke="#637386" stroke-width="1.6" marker-end="url(#fl1)"/><text x="150" y="135" fill="#172536">② solicita la carta</text>
    <line x1="470" y1="163" x2="610" y2="84" stroke="#1479c9" stroke-width="2.4" marker-end="url(#fl1)"/><text x="560" y="140" fill="#0d5d9e" font-weight="800">③ obligación directa</text>
    <line x1="660" y1="84" x2="500" y2="190" stroke="#637386" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#fl1)"/><text x="640" y="190" fill="#172536">④ presenta documentos</text><text x="640" y="206" fill="#172536">(factura, B/L) → ⑤ cobra</text>
  </g>
</svg>
<figcaption>La seguridad del pago descansa en la solvencia del banco emisor, no en la del comprador.</figcaption>
</figure>`
      },
      /* ===== 2. Dotación de recursos para la empresa ===== */
      {
        id: 'financiamiento', grupo: '2. Dotación de recursos para la empresa', titulo: '2.1. Comparación: financiamiento propio vs. ajeno',
        html: `
<p>La empresa necesita recursos para su giro e inversiones; esperar a generarlos ella misma retrasaría su crecimiento. Hay dos vías con lógicas contrapuestas y una categoría intermedia (los híbridos, punto 2.2).</p>
<table class="tabla">
<tr><th></th><th>Capital (financiamiento propio)</th><th>Deuda (financiamiento ajeno)</th></tr>
<tr><td><b>Posición</b></td><td>Derecho <b>residual</b>: recibe el remanente después de pagar a todos los acreedores. Pasivo <b>no exigible</b>.</td><td>Derecho <b>preferente</b> sobre los flujos de caja. Deuda <b>exigible</b>, haya o no utilidades.</td></tr>
<tr><td><b>Control</b></td><td>Derechos políticos (voto en juntas) y económicos (dividendos, cuota de liquidación).</td><td>Sin control ordinario: se protege con <b>covenants</b>, <b>garantías</b> y <b>cláusulas de aceleración</b>.</td></tr>
<tr><td><b>Formas</b></td><td>Derechos sociales; acciones comunes o preferentes.</td><td>Corto o largo plazo; tasa fija o flotante; preferente o subordinada. Variantes: deuda convertible, leasing, factoring.</td></tr>
<tr><td><b>Tributario</b></td><td>Impuesto a la ganancia de capital.</td><td>Los intereses pueden descontarse como gasto.</td></tr>
<tr><td><b>Riesgo / retorno</b></td><td>Mayor riesgo, retorno potencial mayor y no topado.</td><td>Menor riesgo, retorno pactado.</td></tr>
</table>
<h3 data-sub="fin-capital">2.1.1. Capital (financiamiento propio)</h3>
<p>El accionista tiene un derecho <b>residual</b>: está en el último lugar del orden de pago al liquidar la empresa.</p>
<figure class="diagrama">
<svg viewBox="0 0 760 170" role="img" aria-label="Orden de pago entre acreedores y accionistas">
  <defs><marker id="fl2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 z" fill="#637386"/></marker></defs>
  <g font-family="Inter,Segoe UI,Arial" font-size="13" text-anchor="middle">
    <rect x="10" y="40" width="165" height="74" rx="12" fill="#eaf7f0" stroke="#20845c" stroke-width="2"/><text x="92" y="68" font-weight="800">Créditos preferentes</text><text x="92" y="88" fill="#637386">1ª a 4ª clase</text>
    <rect x="200" y="40" width="165" height="74" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="282" y="68" font-weight="800">Valistas</text><text x="282" y="88" fill="#637386">5ª clase (comunes)</text>
    <rect x="390" y="40" width="165" height="74" rx="12" fill="#fffdf0" stroke="#e0c200" stroke-width="2"/><text x="472" y="68" font-weight="800">Subordinados</text><text x="472" y="88" fill="#637386">pactaron pagarse después</text>
    <rect x="580" y="40" width="165" height="74" rx="12" fill="#fff7f7" stroke="#b64747" stroke-width="2"/><text x="662" y="68" font-weight="800">Accionistas</text><text x="662" y="88" fill="#637386">remanente (residual)</text>
    <line x1="177" y1="77" x2="197" y2="77" stroke="#637386" stroke-width="2" marker-end="url(#fl2)"/><line x1="367" y1="77" x2="387" y2="77" stroke="#637386" stroke-width="2" marker-end="url(#fl2)"/><line x1="557" y1="77" x2="577" y2="77" stroke="#637386" stroke-width="2" marker-end="url(#fl2)"/>
    <text x="380" y="150" fill="#637386">deuda ← mayor prioridad · menor riesgo ……… menor prioridad · mayor riesgo → capital</text>
  </g>
</svg>
<figcaption>Los híbridos financieros se ubican en la zona intermedia (por ejemplo, los bonos subordinados).</figcaption>
</figure>
<h3 data-sub="fin-deuda">2.1.2. Deuda (financiamiento ajeno)</h3>
<div class="callout"><p><b>Cómo se protege el acreedor sin votar.</b> Con covenants de hacer (entregar estados financieros, acreditar cumplimiento tributario o laboral) y de no hacer (no endeudarse sobre cierto límite, no vender activos relevantes); con prendas e hipotecas, cuyo deterioro gatilla la caducidad del plazo (<span class="norma">art. 1496 N°2 CC</span>); y con la cláusula de aceleración, que permite exigir todo el saldo ante un incumplimiento.</p></div>`
      },
      {
        id: 'hibridos', grupo: '2. Dotación de recursos para la empresa', titulo: '2.2. Híbridos financieros',
        html: `
<p>Combinan rasgos de la deuda (obligación de restituir, vencimiento, intereses) con rasgos del capital (riesgo residual, remuneración variable, subordinación).</p>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0" data-sub="hib-bancarios">2.2.1. Ejemplos bancarios (Ley General de Bancos)</h4><ul><li><b>Bonos perpetuos:</b> sin vencimiento del capital; intereses perpetuos.</li><li><b>Bonos subordinados:</b> se pagan después de los valistas y antes que los accionistas.</li><li><b>Acciones preferentes</b> en dividendos y liquidación.</li></ul></div>
  <div class="card"><h4 style="margin-top:0" data-sub="hib-generales">2.2.2. Ejemplos generales (ámbito corporativo común)</h4><ul><li><b>Acciones preferentes sin derecho a voto.</b></li><li><b>Bonos subordinados</b> de sociedades no bancarias (poco usuales; caso CMPC, 2025).</li><li><b>Bonos convertibles</b> en acciones (usados como financiamiento <i>mezzanine</i>).</li></ul></div>
</div>`
      },
      /* ===== 3. Operación de crédito de dinero (Ley 18.010) ===== */
      {
        id: 'ocd', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.1. Artículo 1° Ley 18.010',
        html: `
<div class="cita">«Son operaciones de crédito de dinero aquellas por las cuales una de las partes entrega o se obliga a entregar una cantidad de dinero y la otra a pagarla en un momento distinto de aquel en que se celebra la convención.»<span class="fuente">Art. 1° inc. 1° Ley 18.010</span></div>
<h3>Elementos</h3>
<ol>
  <li><b>Entrega o promesa de entrega de dinero.</b> Si se entrega al celebrarse, opera como contrato <b>real</b>; si solo se promete (p. ej. un cupo o línea de crédito), es <b>consensual</b>.</li>
  <li><b>Objeto: dinero.</b> No hay «operación de crédito de ovejas»: si se prestan otras cosas fungibles, rige el Código Civil o el de Comercio.</li>
  <li><b>Restitución diferida en el tiempo:</b> se paga en un momento distinto de la convención.</li>
  <li><b>Obligación de restituir al menos el capital.</b> Si no hay obligación de devolver, es una donación.</li>
</ol>
<h3>Asimilación al dinero</h3>
<p>Se asimilan al dinero los <b>documentos representativos de obligaciones de dinero</b> pagaderos a la vista, a un plazo contado desde la vista o a plazo determinado (cheques, pagarés). Si un financiamiento se documenta así, igual es una OCD.</p>
<h3>Exclusiones (art. 1° inc. final)</h3>
<p>Contratos <b>aleatorios</b>, arbitrajes de monedas a futuro, <b>préstamo marítimo</b> y <b>avío minero</b>. La razón: la restitución es incierta. En el préstamo a la gruesa ventura, si el barco naufraga el deudor no paga; en el avío minero, el «aviador» cobra con un porcentaje del mineral, y si no se encuentra nada, no hay devolución.</p>`
      },
      {
        id: 'reajuste', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.2. Reajustabilidad (art. 3° Ley 18.010)',
        html: `
<p>El reajuste protege al acreedor de la pérdida de poder adquisitivo por la inflación. Si nada se pacta rige el <b>principio nominalista</b> (DL 1.123 de 1975): el deudor se libera pagando la misma suma nominal. El reajuste no se presume.</p>
<h3 data-sub="re-reguladas">3.2.1. Operaciones con instituciones reguladas</h3>
<p>Bancos, cajas de compensación, compañías de seguros, cooperativas u otras instituciones que colocan fondos de manera masiva (<span class="norma">art. 31 Ley 18.010</span>).</p>
<p>Solo pueden usar los <b>sistemas autorizados por el Banco Central</b> (<span class="norma">art. 35 N°9 LOC BCentral</span>): la <b>UF</b> (el principal), la variación de una <b>divisa</b> y el índice de valor promedio (casi en desuso).</p>
<p>Si el sistema se deroga o modifica, los contratos vigentes siguen con el pactado, salvo que las partes acuerden sustituirlo.</p>
<h3 data-sub="re-particulares">3.2.2. Operaciones sin institución regulada (entre particulares)</h3>
<p><b>Libertad de pacto</b> (<span class="norma">art. 3° inc. 1°</span>): cualquier forma de reajuste, como UF, UTM, IPC, cláusula oro, moneda extranjera o el valor de una mercadería (cobre, petróleo… o una bandeja de huevos).</p>`
      },
      {
        id: 'interes', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.3. Concepto de interés (art. 2° Ley 18.010)',
        html: `
<div class="cita">«En las operaciones de crédito de dinero no reajustables, constituye interés toda suma que el acreedor recibe o tiene derecho a recibir por sobre el capital, a cualquier título.»<span class="fuente">Art. 2° Ley 18.010 · en las reajustables, por sobre el capital reajustado</span></div>
<p>El concepto es <b>expansivo</b>: todo lo que exceda el capital (o el capital reajustado) es interés, <b>cualquiera sea su nombre</b>. Así se evita eludir la tasa máxima con «cobros» rotulados de otra forma. No son interés las costas personales ni procesales.</p>
<h3>Caso Cofisa: el origen jurisprudencial</h3>
<div class="card">
<p><span class="etiqueta azul">Corte Suprema · Rol N° 27.802-14 · 8 de octubre de 2015</span> <span class="etiqueta">Sernac con Créditos, Organización y Finanzas S.A.</span></p>
<p class="small">En los apuntes de clase aparece escrito «Cofiza»; la sentencia dice «Cofisa».</p>
<p><b>Hechos.</b> Cofisa emitía y administraba la tarjeta de crédito de las tiendas DIN. Además del interés, cobraba una «<b>Administración Variable Mensual</b>» (AVM): un monto por cada compra <b>multiplicado por el número de cuotas</b> elegido, que se cobraba en cada cuota. Sernac demandó colectivamente: sumada al interés, la AVM superaba la tasa máxima convencional.</p>
<p><b>Problema.</b> Es un <b>problema de calificación</b>: ¿la AVM es comisión o interés? La Corte dice que la calificación se hace <b>objetivamente</b>, mirando el contenido y la naturaleza del cobro; el nombre es un factor más, no decisivo.</p>
<p><b>Razonamiento.</b> La comisión retribuye un <b>servicio específico</b>; el interés es el fruto civil del dinero. Un cobro que crece con el plazo y las cuotas del crédito no remunera un servicio, sino el uso del dinero: es interés.</p>
<p><b>Decisión.</b> Se tiene <b>por no escrita</b> la cláusula de AVM (<span class="norma">art. 8° Ley 18.010</span>), porque como interés, sumada al informado, excedía el máximo. Multas de 50 UTM por infracción al art. 39 y de 50 UTM por el art. 37 b) de la Ley 19.496. No se ordenaron devoluciones porque no se rindió prueba respecto de consumidores en particular.</p>
</div>`
      },
      {
        id: 'interes-comision', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.4. Comisiones',
        html: `
<h3 data-sub="com-19ter">3.4.1. Artículo 19 ter</h3>
<p>La <b>Ley 21.314</b> (agentes financieros) incorporó el <span class="norma">art. 19 ter</span>: la CMF fija por norma de carácter general los requisitos de las comisiones, que deben corresponder a <b>servicios reales y efectivamente prestados</b> y calcularse <b>en base al costo del servicio</b>. <b>Los cobros que no cumplan se consideran intereses.</b></p>
<h3 data-sub="com-ncg">3.4.2. NCG 484</h3>
<p>La CMF dictó la <b>NCG N°484</b> (5 de agosto de 2022, vigente desde el 1 de agosto de 2023). Todo pago al acreedor es interés, salvo que tenga régimen legal especial o cumpla estos requisitos:</p>
<ol>
  <li>Se calcula <b>en base al costo de prestación</b> del servicio. <span class="small">(Recoge Cofisa: un cobro que depende del capital no retribuye un servicio.)</span></li>
  <li>El servicio es <b>real y efectivamente prestado</b>.</li>
  <li>El concepto y su importe total fueron <b>informados y aceptados expresamente</b> por el deudor, antes del cobro y de la prestación.</li>
  <li>La información se pone a disposición del público <b>por los mismos canales</b> con que se ofrece el crédito.</li>
  <li>El servicio es <b>distinto de los inherentes</b> a la operación de crédito.</li>
</ol>
<div class="callout"><p><b>Servicio inherente</b> (no puede ser comisión): (i) el necesario para iniciar, celebrar, materializar o terminar el crédito, o (ii) el que el acreedor debe prestar por exigencia legal o normativa.<br><b>No son inherentes</b> los servicios de terceros para cumplir solemnidades legales o para constituir, realizar o alzar garantías, ni el servicio de pago de un tercero que sea alternativo y voluntario.<br>En <b>tarjetas y líneas de crédito</b>, la administración, operación y mantención no son inherentes (pueden ser comisión) siempre que el cobro <b>no sea función del monto</b> y su costo no se haya cargado en otro producto.</p></div>
<h4>Críticas del profesor a la NCG 484</h4>
<ul>
  <li>«Real y efectivamente prestado» es discutible: si el servicio no es real, el pago carece de causa; si no se prestó, hay falta de causa o incumplimiento.</li>
  <li>El requisito de información y aceptación no es intrínseco a la comisión y está descoordinado con el <span class="norma">art. 17 B LPDC</span>. Su infracción lleva a ineficacia o responsabilidad, no necesariamente a recalificar el cobro como interés.</li>
  <li>El requisito de publicidad por los mismos canales genera problemas fuera del consumo, por ejemplo en créditos sindicados y en la remuneración del banco agente o del agente de garantías.</li>
  <li>«Distinto de los inherentes» es el único factor intrínseco, pero ambiguo. Hay dudas con comisiones usuales (evaluación de solvencia, portabilidad) y con las que la propia ley trata como comisión, como la de <b>prepago</b> del art. 10.</li>
</ul>`
      },
      {
        id: 'tasas', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.5. Tasas de interés',
        html: `
<h3 data-sub="tasas-tic">3.5.1. La tasa de interés corriente (TIC)</h3>
<p>Promedio ponderado de las tasas que cobran los bancos en Chile, por segmento (<span class="norma">art. 6°</span>). Lo determina la <b>CMF</b> mensualmente y se publica en el Diario Oficial en la primera quincena del mes siguiente.</p>
<h3 data-sub="tasas-tmc">3.5.2. La tasa de interés máximo convencional (TMC)</h3>
<h4 data-sub="tasas-general">3.5.2.1. Regla general (art. 6°)</h4>
<p>Límite de lo que se puede pactar: <b>el mayor</b> entre (i) <b>1,5 × TIC</b> vigente al contratar y (ii) <b>TIC + 2 puntos porcentuales</b>. Antes de la Ley 20.715 (2013) solo se multiplicaba por 1,5.</p>
<div class="callout"><p><b>Ejemplo de clase:</b> TIC para operaciones no reajustables sobre 5.000 UF = 7,9%.<br>7,9% × 1,5 = <b>11,85%</b> · 7,9% + 2 = 9,9% → TMC = <b>11,85%</b> (la mayor).</p></div>
<h4 data-sub="tasas-menores">3.5.2.2. TMC para créditos menores (art. 6 bis)</h4>
<p>Para operaciones en moneda nacional no reajustables de <b>hasta 200 UF</b> y plazo de <b>90 días o más</b>, la TMC no se calcula sobre la TIC de su propio tramo, sino sobre la <b>TIC de operaciones no reajustables entre 200 y 5.000 UF</b>, más un recargo:</p>
<table class="tabla">
<tr><th>Tramo</th><th>Fórmula</th><th>Ejemplo (13-12-2013, TIC base 15,94%)</th></tr>
<tr><td>Sobre 50 UF y hasta 200 UF</td><td>TIC base + <b>14</b> pp</td><td>29,94%</td></tr>
<tr><td>Hasta 50 UF</td><td>TIC base + <b>21</b> pp</td><td>36,94%</td></tr>
</table>
<p>Con la regla antigua, el tramo bajo 200 UF tenía TIC de 35,94% y TMC de <b>53,91%</b>. La reforma bajó drásticamente el tope.</p>
<div class="callout yellow"><p><b>Efecto no deseado:</b> al bajar el tope, las instituciones dejaron de prestar a los segmentos más riesgosos. Esto <b>desbancarizó</b> a muchas personas y las empujó al crédito informal (préstamos «gota a gota»).</p></div>
<h4 data-sub="tasas-descuento">3.5.2.3. TMC en caso de descuento (art. 6 bis inc. 3°)</h4>
<p>Si el crédito se paga por <b>descuento de remuneraciones o pensiones</b>, la TMC es la TIC base + <b>7</b> pp (en el ejemplo de 13-12-2013, 22,94%). Es el tope más bajo porque el riesgo de no pago es casi nulo: el deudor no puede negarse al cobro.</p>
<h4 data-sub="tasas-tarjetas">3.5.2.4. TMC en tarjetas y líneas de crédito (art. 6 ter)</h4>
<p>No crea otra tasa: dice <b>cómo</b> se determina la TMC en productos rotativos. Se fija según el <b>monto autorizado (cupo)</b> y el <b>plazo pactado</b>, a la fecha en que se empiezan a devengar intereses. Las modificaciones de cupo o plazo y las renovaciones se consideran <b>nuevas convenciones</b>. La CMF fija los parámetros por norma de carácter general.</p>`
      },
      {
        id: 'sanciones', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.6–3.7. Sanción civil e infracciones a la TMC',
        html: `
<h3 data-sub="san-exceso">3.6. Sanción civil al exceso de interés</h3>
<div class="cita">«Se tendrá por no escrito todo pacto de intereses que exceda el máximo convencional, y en tal caso los intereses se reducirán al interés corriente que rija al momento de la convención o al momento en que se devenguen, según el período.»<span class="fuente">Art. 8° Ley 18.010, según la diapositiva de clases</span></div>
<h3 data-sub="san-infracciones">3.7. Infracciones a la TMC</h3>
<h4 data-sub="san-civil">3.7.1. Sanción civil</h4>
<ul><li>No es nulidad: el pacto se tiene <b>por no escrito</b> y se <b>reduce al interés corriente</b> (ineficacia parcial).</li><li>Es el ejemplo clásico del <b>art. 10 CC</b>: la ley designa otro efecto que la nulidad.</li><li>Lo pagado en exceso se <b>imputa al capital</b>; si ya se extinguió, se <b>restituye</b> reajustado (art. 8° inc. 3°).</li></ul>
<h4 data-sub="san-consumo">3.7.2. Sanción administrativa de consumo</h4>
<p>Infracción al <span class="norma">art. 39 LPDC</span>; multa genérica de hasta 50 UTM (art. 24 LPDC).</p>
<h4 data-sub="san-cmf">3.7.3. Sanción administrativa de la CMF</h4>
<p>Según el <span class="norma">art. 33 Ley 18.010</span> y el <span class="norma">art. 19 LGB</span>: amonestación, censura o multa de hasta 5.000 UF a quien coloca fondos masivamente; si reitera, hasta 5 veces.</p>
<h4 data-sub="san-penal">3.7.4. Sanción penal: el delito de usura (art. 472 CP)</h4>
<p>Presidio o reclusión menores en cualquiera de sus grados. Si el condenado es extranjero, se le expulsa; si es nacionalizado y reincide, pierde la nacionalidad y es expulsado.</p>
<h4 data-sub="san-nonbis">3.7.5. El debate sobre el principio non bis in idem</h4>
<div class="callout yellow"><p>Un banco que cobra sobre la TMC a un consumidor enfrenta a la vez la sanción civil, la penal y dos administrativas (Sernac/LPDC y CMF). Parte de la doctrina cuestiona la doble sanción administrativa; en la práctica se aplican todas.</p></div>`
      },
      {
        id: 'anatocismo', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.8. Anatocismo',
        html: `
<p><b>Anatocismo</b> es la capitalización de intereses: los intereses devengados y no pagados se suman al capital y producen nuevos intereses (intereses sobre intereses).</p>
<table class="tabla">
<tr><th>Ámbito</th><th>Regla</th></tr>
<tr><td>Operaciones de crédito de dinero</td><td>Permitido por el <span class="norma">art. 9° Ley 18.010</span>.</td></tr>
<tr><td>Intereses moratorios</td><td>Prohibido capitalizarlos (<span class="norma">art. 16</span>, reformado por la Ley 21.314).</td></tr>
<tr><td>Demás obligaciones de dinero</td><td>Regla supletoria del <span class="norma">art. 1559 N°3 CC</span>: los intereses atrasados no producen interés.</td></tr>
</table>
<h3 data-sub="ana-art9">3.8.1. Regulación de la capitalización de intereses (art. 9° Ley 18.010)</h3>
<ol>
  <li><b>Pacto (elemento accidental):</b> «podrá estipularse» el pago de intereses sobre intereses, capitalizándolos en cada vencimiento o renovación. <b>Nunca por períodos inferiores a 30 días.</b></li>
  <li><b>Sanción:</b> lo capitalizado en infracción se considera <b>interés</b> para todos los efectos, especialmente para el art. 8°.</li>
</ol>
<h3 data-sub="ana-caso">3.8.2. Caso práctico de cálculo de interés compuesto</h3>
<p>Financieramente, el pacto anatocístico equivale al <b>interés compuesto</b>. Ejemplo: $100.000 al 10% mensual capitalizable cada 30 días → $110.000 → $121.000 → $133.100.</p>
<h3 data-sub="ana-legal">3.8.3. El anatocismo legal (elemento de la naturaleza)</h3>
<p>Tercera regla del art. 9°: los intereses de una operación <b>vencida</b> no pagados <b>se incorporan a ella</b>, salvo pacto expreso en contrario.</p>
<h3 data-sub="ana-reforma">3.8.4. La reforma del artículo 16 (Ley 21.314)</h3>
<div class="cita">«El interés moratorio […] no podrá aplicarse conjunta ni adicionalmente, sobre un mismo monto, con ningún otro interés. Asimismo, este interés sólo podrá cobrarse sobre aquella parte del capital que se encuentre efectivamente vencida y no podrá ser capitalizada para el cálculo de intereses de ningún tipo.»<span class="fuente">Art. 16 Ley 18.010</span></div>
<h4 data-sub="ana-jackson">3.8.4.1. El origen de la reforma y la propuesta de Giorgio Jackson</h4>
<p>La propuesta original (diputado G. Jackson) buscaba eliminar el anatocismo, limitar la regla a obligaciones de hasta 5.000 UF y topar el interés moratorio en el corriente.</p>
<h4 data-sub="ana-critica">3.8.4.2. Crítica técnica a la propuesta de Jackson</h4>
<p>Se advirtió un <b>incentivo perverso</b>: si la mora se cobra a la TIC y el interés pactado está cerca de la TMC, al deudor le conviene dejar de pagar.</p>
<div class="callout yellow"><p><b>Las fuentes no coinciden en quién formuló la crítica.</b> Las diapositivas y los apuntes de clase la atribuyen al <b>Banco Central y la ABIF</b>; el apunte completo de clases, al <b>Banco Central y la CMF</b>.</p></div>
<h3 data-sub="ana-reglas">3.8.5. Reglas aprobadas e incorporadas en el artículo 16</h3>
<ul>
  <li><b>3.8.5.1. Incompatibilidad</b> del interés moratorio con otros intereses sobre un mismo monto.</li>
  <li><b>3.8.5.2.</b> El moratorio se cobra <b>solo sobre el capital vencido</b>.</li>
  <li><b>3.8.5.3. Prohibición de capitalizar</b> el interés moratorio (anatocismo moratorio).</li>
</ul>
<p>Crítica: la frase «no podrá ser capitalizada» no concuerda en género («el interés») y no se coordinó con el art. 9°, que quedó intacto.</p>
<h3 data-sub="ana-cmf">3.8.6. Solución e interpretación de la CMF (oficio de 26 de abril de 2021)</h3>
<div class="callout green"><p>El art. 9° <b>no está derogado</b>. Está prohibido capitalizar los <b>intereses moratorios</b>, pero se pueden capitalizar los <b>intereses remuneratorios no vencidos</b> (según lo pactado y con el mínimo de 30 días) y los <b>intereses remuneratorios del capital vencido</b> (art. 9° inc. 3°, salvo pacto en contrario).</p></div>`
      },
      {
        id: 'prepago', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.9. Pago anticipado (prepago)',
        html: `
<h3 data-sub="pre-concepto">3.9.1. Concepto y regla general (art. 10 Ley 18.010)</h3>
<p>Regla general: los prepagos se <b>convienen libremente</b>. El plazo en un mutuo con intereses también beneficia al acreedor, que cuenta con esos intereses (riesgo de descalce).</p>
<div class="callout"><p><b>Excepción:</b> en operaciones cuyo capital <b>no supere 5.000 UF</b>, el deudor que <b>no sea institución regulada</b> puede prepagar <b>aun contra la voluntad del acreedor</b>, si prepaga al menos el <b>10% del saldo</b> (antes era 20%; si es menos, necesita consentimiento del acreedor) y paga la comisión de prepago.</p></div>
<h3 data-sub="pre-no-reajustables">3.9.2. Comisión de prepago en operaciones no reajustables</h3>
<p>Como máximo <b>1 mes</b> de intereses pactados sobre el capital que se prepaga.</p>
<h3 data-sub="pre-reajustables">3.9.3. Comisión de prepago en operaciones reajustables</h3>
<p>Como máximo <b>1,5 meses</b> de intereses pactados sobre el capital que se prepaga.</p>
<h3 data-sub="pre-por-que">3.9.4. ¿Por qué un mes o un mes y medio?</h3>
<p>La comisión compensa al acreedor por los intereses que deja de recibir. Se limita a 1 o 1,5 meses porque se asume que en ese plazo puede volver a colocar el dinero; en las reajustables recolocar es más complejo.</p>
<h3 data-sub="pre-proconsumidor">3.9.5. Lectura conjunta con la Ley Pro Consumidor (21.398)</h3>
<p>Agregó al <span class="norma">art. 3° inc. 2° letra h) LPDC</span> que el prepago del art. 10 se aplica a las operaciones financieras de consumo <b>con independencia del capital adeudado</b>.</p>
<h3 data-sub="pre-5000">3.9.6. Se elimina el requisito de 5.000 UF</h3>
<p>Para el consumidor financiero desaparece el límite de 5.000 UF. Ejemplo de clase: el profesor refinanció su hipotecario sobre 5.000 UF por portabilidad en 2019.</p>
<h3 data-sub="pre-origen">3.9.8. ¿Cómo se quería incorporar el derecho a prepago originalmente?</h3>
<p>Primero se pensó regularlo en el <span class="norma">art. 17 D LPDC</span>.</p>
<h3 data-sub="pre-irrenunciable">3.9.11. Es un derecho irrenunciable</h3>
<p>El derecho a prepagar es <b>irrenunciable</b> y lo fiscaliza el Sernac.</p>`
      },
      {
        id: 'forma-onerosidad', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.10. Forma, onerosidad y presunción de interés',
        html: `
<h3 data-sub="fo-dinero">3.10.1. Intereses solo en dinero (art. 11 Ley 18.010)</h3>
<p>Los intereses solo pueden estipularse <b>en dinero</b>. Se devengan día por día; meses de 30 días y años de 360.</p>
<h3 data-sub="fo-mutuo">3.10.2. Diferencia con el mutuo civil</h3>
<p>En el mutuo civil los intereses pueden pactarse en otras cosas fungibles (<span class="norma">art. 2205 CC</span>): prestar 5 ovejas y recibir 6.</p>
<h3 data-sub="fo-onerosidad">3.10.3. Presunción de onerosidad (art. 12 Ley 18.010)</h3>
<p><b>La gratuidad no se presume</b>: salvo ley o pacto en contrario, la OCD devenga interés corriente. Es la regla inversa al mutuo civil (<span class="norma">art. 2206 CC</span>) e igual a la del mutuo mercantil (<span class="norma">art. 798 CCom</span>).</p>
<h3 data-sub="fo-escrituracion">3.10.4. Exigencia de escrituración (art. 14 Ley 18.010)</h3>
<p>La estipulación de intereses, o la que exime de pagarlos, debe constar <b>por escrito</b>; si no, es ineficaz en juicio. Ejemplo de clase: el préstamo verbal «sin intereses» de la madre del profesor no lo libera del interés corriente.</p>
<h3 data-sub="fo-legal">3.10.5. ¿Qué es el interés legal? (art. 19 Ley 18.010)</h3>
<p>Cuando las leyes hablan de «interés legal» o «máximo bancario», se aplica el <b>interés corriente</b>. El interés legal quedó reemplazado por la tasa corriente que fija la CMF.</p>`
      },
      {
        id: 'mora-prepago', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.11. Mora e interés moratorio',
        html: `
<h3 data-sub="mora-concepto">3.11.1. Concepto y regulación (art. 16 Ley 18.010)</h3>
<ul>
  <li>El deudor que retarda el pago debe <b>intereses corrientes</b> desde el retardo, a las tasas vigentes durante el retardo, salvo que se haya pactado un interés penal (moratorio) mayor, siempre <b>dentro de la TMC</b>.</li>
  <li>Se devenga desde el <b>retardo</b>, sin requerir la interpelación del art. 1551 CC.</li>
</ul>
<h3 data-sub="mora-regla">3.11.2. ¿Qué quiere decir esta regla?</h3>
<ul>
  <li><b>No se acumula</b> con el interés por uso sobre un mismo monto.</li>
  <li>Solo se cobra sobre el <b>capital efectivamente vencido</b>, salvo una <b>cláusula de aceleración</b> que haga exigible todo.</li>
  <li><b>No se capitaliza.</b></li>
</ul>
<h3 data-sub="mora-ejemplos">3.11.3. Ejemplos</h3>
<p>Un crédito de $1.000.000 en 10 cuotas de $100.000: si no pago la primera, el moratorio corre sobre $100.000, no sobre el millón, salvo una cláusula de aceleración.</p>`
      },
      {
        id: 'presunciones-pago', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.12. Presunciones de pago',
        html: `
<h3 data-sub="pp-concepto">3.12.1. Concepto de presunción simplemente legal</h3>
<p>Las presunciones de pago de los arts. 17 y 18 son <b>simplemente legales</b>.</p>
<h3 data-sub="pp-capital">3.12.2. Recibo de capital (art. 17 Ley 18.010)</h3>
<p>El recibo del capital hace presumir pagados los intereses y el reajuste (como el <span class="norma">art. 1595 CC</span>).</p>
<h3 data-sub="pp-periodos">3.12.3. Recibos de períodos consecutivos (art. 18 Ley 18.010)</h3>
<p>El recibo de intereses de <b>tres períodos consecutivos</b> hace presumir pagados los anteriores.</p>`
      },
      {
        id: 'moneda-extranjera', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.13. Obligaciones en moneda extranjera',
        html: `
<ul>
  <li><span class="norma">Art. 20</span>: se pagan por su equivalente en moneda nacional al <b>tipo de cambio vendedor del día del pago</b>. Si la obligación está vencida, se aplica el del día del vencimiento si es superior.</li>
  <li><span class="norma">Art. 24</span>: si se pagan en moneda nacional, <b>no cabe otro reajuste</b> que el implícito en la fluctuación cambiaria. Acumular UF sobre el dólar sería un cobro doble.</li>
</ul>`
      },
      {
        id: 'credito-consumo', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.14. Crédito al consumo',
        html: `
<h3 data-sub="cc-proconsumidor">3.14.2. Ley Pro Consumidor (21.398)</h3>
<p>La ley reconoce como derechos del consumidor financiero los consagrados en la Ley 18.010 y en otras normas que protejan sus derechos (<span class="norma">art. 3° incs. 2° h) y 3° LPDC</span>). Entre ellos, el derecho a prepagar sin el límite de 5.000 UF (ver 3.9.5).</p>`
      }
    ],

    /* ---------------- Ejemplos interactivos ---------------- */
    interactivos: [
      {
        id: 'tmc', titulo: 'Calculadora de la tasa máxima convencional', seccion: 'tasas',
        descripcion: 'Escribe una TIC y compara la regla general (art. 6°) con la de créditos menores (art. 6 bis). Las tasas cambian cada mes: usa los ejemplos de clase o la tasa que publique la CMF.',
        montar: function (el) {
          el.innerHTML = `<div class="opciones-chip" id="regla"><button class="activo" data-r="6">Regla general (art. 6°)</button><button data-r="6bis">Créditos ≤ 200 UF (art. 6 bis)</button></div>
            <div class="fila"><div class="campo"><label id="lbl">TIC del segmento (% anual)</label><input type="number" step="0.01" id="tic" value="7.9"></div>
            <div class="campo oculto" id="c-tramo"><label>Tramo</label><select id="tramo"><option value="14">Sobre 50 y hasta 200 UF (+14 pp)</option><option value="21">Hasta 50 UF (+21 pp)</option><option value="7">Pago por descuento de remuneraciones o pensiones (+7 pp)</option></select></div>
            <div class="campo"><label>Tasa que se quiere pactar (% anual)</label><input type="number" step="0.01" id="pactada" value="12"></div></div>
            <div class="resultado" id="res"></div>`;
          var regla = '6';
          function calc() {
            var tic = parseFloat(el.querySelector('#tic').value) || 0, pac = parseFloat(el.querySelector('#pactada').value) || 0, tmc, det;
            if (regla === '6') {
              var a = tic * 1.5, b = tic + 2; tmc = Math.max(a, b);
              det = '1,5 × ' + pct(tic) + ' = <b>' + pct(a) + '</b> · ' + pct(tic) + ' + 2 pp = <b>' + pct(b) + '</b> → se aplica <b>la mayor</b>.';
            } else {
              var pp = +el.querySelector('#tramo').value; tmc = tic + pp;
              det = 'TIC de operaciones no reajustables entre 200 y 5.000 UF (' + pct(tic) + ') + ' + pp + ' pp. No se usa la TIC del propio tramo.';
            }
            var ok = pac <= tmc + 1e-9;
            var r = el.querySelector('#res');
            r.className = 'resultado ' + (ok ? 'ok' : 'mal');
            r.innerHTML = '<div class="kicker">TMC</div><div class="big">' + pct(tmc) + '</div><p>' + det + '</p><p>' + (ok
              ? '✓ Una tasa de ' + pct(pac) + ' <b>puede pactarse</b>.'
              : '✗ Una tasa de ' + pct(pac) + ' <b>excede la TMC</b>: el pacto se tiene por no escrito y el interés se reduce a la tasa corriente (art. 8°). Además hay sanciones administrativas y el delito de usura (art. 472 CP).') + '</p>';
          }
          el.querySelectorAll('#regla button').forEach(function (b) {
            b.onclick = function () {
              regla = b.dataset.r;
              el.querySelectorAll('#regla button').forEach(function (x) { x.classList.toggle('activo', x === b); });
              el.querySelector('#c-tramo').classList.toggle('oculto', regla === '6');
              el.querySelector('#lbl').textContent = regla === '6' ? 'TIC del segmento (% anual)' : 'TIC base: no reajustables entre 200 y 5.000 UF (% anual)';
              el.querySelector('#tic').value = regla === '6' ? 7.9 : 15.94;
              el.querySelector('#pactada').value = regla === '6' ? 12 : 30;
              calc();
            };
          });
          el.querySelectorAll('input,select').forEach(function (i) { i.oninput = calc; });
          calc();
        }
      },
      {
        id: 'comision', titulo: '¿Comisión o interés? Aplica la NCG 484', seccion: 'interes-comision',
        descripcion: 'Elige un cobro y revisa los requisitos. Si falta uno solo, el cobro es interés y cuenta para la TMC.',
        montar: function (el) {
          var casos = [
            { n: 'AVM de Cofisa', d: 'Monto por compra multiplicado por el número de cuotas, cobrado en cada cuota.', r: [false, true, true, true], inh: false, x: 'Depende del plazo y de las cuotas, es decir, de la operación de crédito. No se calcula según el costo de un servicio. Es lo que la Corte Suprema calificó como interés.' },
            { n: 'Cargo fijo mensual por mantención de la tarjeta', d: 'Monto fijo, informado y aceptado antes, publicado en los canales de oferta, igual para todo cupo.', r: [true, true, true, true], inh: false, x: 'En tarjetas y líneas la mantención no es servicio inherente. Puede ser comisión si no es función del monto y su costo no se cargó en otro producto.' },
            { n: '«Comisión por otorgamiento» del crédito', d: 'Cobro por el solo hecho de conceder y desembolsar el préstamo.', r: [true, false, true, true], inh: true, x: 'Es un servicio inherente: es necesario para celebrar y materializar la operación. No puede ser comisión, así que es interés.' },
            { n: 'Gasto notarial para la escritura del mutuo', d: 'Lo cobra el notario, un tercero, para cumplir una solemnidad.', r: [true, true, true, true], inh: false, x: 'La NCG excluye de lo inherente los servicios de terceros para cumplir solemnidades legales o constituir garantías.' },
            { n: 'Cobro no informado antes de contratar', d: 'Cargo por «gestión» que aparece en la cartola sin aviso previo.', r: [true, true, false, false], inh: false, x: 'No fue informado ni aceptado expresamente antes, ni publicado por los canales de oferta: no cumple los requisitos 3 y 4.' }
          ];
          var reqs = ['Se calcula según el costo de prestar el servicio', 'Es un servicio real, efectivamente prestado y distinto de los inherentes al crédito', 'Concepto e importe informados y aceptados expresamente antes', 'Publicado por los mismos canales con que se ofrece el crédito'];
          el.innerHTML = '<div class="opciones-chip" id="casos">' + casos.map(function (c, i) { return '<button data-i="' + i + '">' + c.n + '</button>'; }).join('') + '</div><div id="det"></div>';
          function mostrar(i) {
            var c = casos[i];
            el.querySelectorAll('#casos button').forEach(function (b) { b.classList.toggle('activo', +b.dataset.i === i); });
            var d = el.querySelector('#det');
            d.innerHTML = '<p><b>' + c.n + ':</b> ' + c.d + '</p><p class="small">Marca los requisitos que crees que cumple:</p>' +
              reqs.map(function (t, k) { return '<label class="check"><input type="checkbox" data-k="' + k + '"> ' + (k + 1) + '. ' + t + '</label>'; }).join('') +
              '<button class="btn" id="ver">Calificar</button><div id="out"></div>';
            d.querySelector('#ver').onclick = function () {
              var marc = Array.prototype.map.call(d.querySelectorAll('input'), function (x) { return x.checked; });
              var aciertos = marc.filter(function (m, k) { return m === c.r[k]; }).length;
              var esComision = c.r.every(Boolean);
              d.querySelector('#out').innerHTML = '<div class="resultado ' + (esComision ? 'ok' : 'mal') + '"><b>' + (esComision ? 'Puede ser COMISIÓN' : 'Es INTERÉS') + '</b> · acertaste ' + aciertos + ' de 4 requisitos.<p>' + c.x + '</p>' +
                '<p class="small">Requisitos que cumple: ' + c.r.map(function (v, k) { return (k + 1) + (v ? ' ✓' : ' ✗'); }).join(' · ') + '</p></div>';
            };
          }
          el.querySelectorAll('#casos button').forEach(function (b) { b.onclick = function () { mostrar(+b.dataset.i); }; });
          mostrar(0);
        }
      },
      {
        id: 'sancion', titulo: '¿Qué pasa si se pacta sobre la TMC?', seccion: 'sanciones',
        descripcion: 'Simula un crédito con intereses usurarios y observa cómo opera el art. 8°: reducción al interés corriente e imputación del exceso.',
        montar: function (el) {
          el.innerHTML = `<div class="fila"><div class="campo"><label>Capital ($)</label><input type="number" id="cap" value="1000000" step="50000"></div>
            <div class="campo"><label>TIC (% anual)</label><input type="number" id="tic" value="20" step="0.1"></div>
            <div class="campo"><label>TMC (% anual)</label><input type="number" id="tmc" value="30" step="0.1"></div>
            <div class="campo"><label>Tasa pactada (% anual)</label><input type="number" id="pac" value="45" step="0.1"></div>
            <div class="campo"><label>Plazo (meses)</label><input type="number" id="pl" value="12" min="1"></div></div><div id="out"></div>
            <p class="small">Cálculo simplificado con interés simple sobre el capital, solo para ilustrar la regla.</p>`;
          function calc() {
            var g = function (id) { return parseFloat(el.querySelector('#' + id).value) || 0; };
            var cap = g('cap'), tic = g('tic'), tmc = g('tmc'), pac = g('pac'), pl = g('pl');
            var iPac = cap * pac / 100 * pl / 12, iTic = cap * tic / 100 * pl / 12;
            var out = el.querySelector('#out');
            if (pac <= tmc) { out.innerHTML = '<div class="resultado ok">✓ La tasa pactada (' + pct(pac) + ') no excede la TMC. El pacto es válido: intereses por $' + fmt(iPac) + '.</div>'; return; }
            out.innerHTML = '<div class="resultado mal"><b>El pacto excede la TMC.</b><table class="tabla"><tr><th></th><th>Según lo pactado</th><th>Con el art. 8°</th></tr>' +
              '<tr><td>Tasa</td><td>' + pct(pac) + '</td><td><b>' + pct(tic) + '</b> (corriente, no la máxima)</td></tr>' +
              '<tr><td>Intereses</td><td>$' + fmt(iPac) + '</td><td><b>$' + fmt(iTic) + '</b></td></tr>' +
              '<tr><td>Diferencia</td><td colspan="2">$' + fmt(iPac - iTic) + ': si ya se pagó, se <b>imputa al capital</b>; si el capital está extinguido, se <b>restituye reajustado</b>.</td></tr></table>' +
              '<p>No hay nulidad del contrato: el pacto se tiene <b>por no escrito</b> (excepción del art. 10 CC). Además puede haber multa LPDC (hasta 50 UTM), sanción de la CMF y el delito de usura.</p></div>';
          }
          el.querySelectorAll('input').forEach(function (i) { i.oninput = calc; }); calc();
        }
      },
      {
        id: 'anatocismo', titulo: 'Interés simple vs. capitalizado (art. 9°)', seccion: 'anatocismo',
        descripcion: 'Cambia el período de capitalización. Si es menor a 30 días, el art. 9° lo prohíbe y lo capitalizado se trata como interés.',
        montar: function (el) {
          el.innerHTML = `<div class="fila"><div class="campo"><label>Capital ($)</label><input type="number" id="cap" value="100000" step="10000"></div>
            <div class="campo"><label>Tasa por período de 30 días (%)</label><input type="number" id="t" value="10" step="0.5"></div>
            <div class="campo"><label>Capitalizar cada… (días)</label><select id="per"><option>7</option><option>15</option><option selected>30</option><option>60</option><option>90</option></select></div>
            <div class="campo"><label>Duración (días)</label><input type="number" id="dur" value="90" step="30"></div></div><div id="out"></div>`;
          function calc() {
            var cap = +el.querySelector('#cap').value || 0, t = (+el.querySelector('#t').value || 0) / 100, per = +el.querySelector('#per').value, dur = +el.querySelector('#dur').value || 0;
            var tDia = t / 30, filas = '', saldo = cap, n = Math.floor(dur / per);
            for (var k = 1; k <= Math.min(n, 12); k++) {
              var int = saldo * tDia * per; saldo += int;
              filas += '<tr><td>Día ' + (k * per) + '</td><td>$' + fmt(cap + cap * tDia * per * k) + '</td><td>$' + fmt(saldo) + '</td></tr>';
            }
            var aviso = per < 30
              ? '<div class="resultado mal">✗ <b>Capitalización por períodos inferiores a 30 días.</b> El art. 9° inc. 1° la prohíbe. Lo capitalizado en infracción se considera interés para todos los efectos, y si con eso se supera la TMC, se aplica el art. 8°.</div>'
              : '<div class="resultado ok">✓ Pacto anatocístico válido si se estipuló expresamente (elemento accidental) y el período es de 30 días o más. Recuerda: los intereses <b>moratorios</b> nunca se capitalizan (art. 16).</div>';
            el.querySelector('#out').innerHTML = aviso + '<table class="tabla"><tr><th>Momento</th><th>Interés simple</th><th>Con capitalización</th></tr>' + filas + '</table>' + (n > 12 ? '<p class="small">Se muestran los primeros 12 períodos.</p>' : '');
          }
          el.querySelectorAll('input,select').forEach(function (i) { i.oninput = calc; }); calc();
        }
      },
      {
        id: 'mora', titulo: 'Interés moratorio: ¿sobre qué capital?', seccion: 'mora-prepago',
        descripcion: 'Ejemplo de clase: crédito de $1.000.000 en 10 cuotas de capital de $100.000. Elige cuántas cuotas están impagas y si hay cláusula de aceleración.',
        montar: function (el) {
          el.innerHTML = `<div class="fila"><div class="campo" style="min-width:260px"><label>Cuotas vencidas e impagas: <b id="nv">1</b></label><input type="range" id="imp" min="1" max="10" value="1"></div>
            <label class="check" style="margin-bottom:6px"><input type="checkbox" id="acel"> Hay cláusula de aceleración y el acreedor la ejerció</label></div><div id="out"></div>`;
          function calc() {
            var n = +el.querySelector('#imp').value, acel = el.querySelector('#acel').checked;
            el.querySelector('#nv').textContent = n;
            var base = acel ? 1000000 : n * 100000;
            var celdas = '';
            for (var k = 1; k <= 10; k++) {
              var vencida = acel || k <= n;
              celdas += '<div style="flex:1;min-width:46px;text-align:center;padding:8px 2px;border-radius:8px;font-size:12px;font-weight:800;background:' + (vencida ? '#fdeeee' : '#eaf7f0') + ';color:' + (vencida ? '#b64747' : '#20845c') + '">C' + k + '<br>' + (vencida ? 'vencida' : 'futura') + '</div>';
            }
            el.querySelector('#out').innerHTML = '<div style="display:flex;gap:6px;flex-wrap:wrap;margin:10px 0">' + celdas + '</div>' +
              '<div class="resultado"><div class="kicker">Base del interés moratorio</div><div class="big">$' + fmt(base) + '</div><p>' +
              (acel ? 'La aceleración hace exigible todo el saldo, así que todo el capital queda vencido.' : 'Solo el capital <b>efectivamente vencido</b> (art. 16). Las cuotas futuras no generan interés moratorio.') +
              ' Además, el moratorio no se suma a otro interés sobre el mismo monto y <b>no se capitaliza</b>. Sin pacto, la tasa es la corriente vigente durante el retardo; si hay pacto, con tope en la TMC.</p></div>';
          }
          el.querySelectorAll('input').forEach(function (i) { i.oninput = calc; }); calc();
        }
      },
      {
        id: 'prepago', titulo: '¿Puedo prepagar sin permiso del banco?', seccion: 'prepago',
        descripcion: 'Revisa los requisitos del art. 10 y el efecto de la Ley Pro Consumidor.',
        montar: function (el) {
          el.innerHTML = `<div class="fila"><div class="campo"><label>Capital del crédito (UF)</label><input type="number" id="cap" value="3000"></div>
            <div class="campo"><label>Saldo adeudado (UF)</label><input type="number" id="saldo" value="2500"></div>
            <div class="campo"><label>Monto a prepagar (UF)</label><input type="number" id="pre" value="500"></div>
            <div class="campo"><label>Tasa pactada (% anual)</label><input type="number" id="tasa" value="6" step="0.1"></div></div>
            <div class="fila"><label class="check"><input type="checkbox" id="reaj" checked> Operación reajustable (p. ej. en UF)</label>
            <label class="check"><input type="checkbox" id="cons"> El deudor es consumidor financiero</label>
            <label class="check"><input type="checkbox" id="inst"> El deudor es una institución regulada</label></div><div id="out"></div>`;
          function calc() {
            var g = function (id) { return parseFloat(el.querySelector('#' + id).value) || 0; }, c = function (id) { return el.querySelector('#' + id).checked; };
            var cap = g('cap'), saldo = g('saldo'), pre = g('pre'), tasa = g('tasa');
            var problemas = [];
            if (c('inst')) problemas.push('El deudor es una institución regulada: el derecho del art. 10 no le corresponde.');
            if (cap > 5000 && !c('cons')) problemas.push('El capital supera 5.000 UF y no hay relación de consumo: el prepago debe convenirse con el acreedor.');
            if (pre < saldo * 0.1) problemas.push('Prepaga menos del 10% del saldo (' + fmt(saldo * 0.1, 1) + ' UF): necesita el consentimiento del acreedor.');
            var meses = c('reaj') ? 1.5 : 1, com = pre * tasa / 100 / 12 * meses;
            el.querySelector('#out').innerHTML = problemas.length
              ? '<div class="resultado mal"><b>No hay derecho a prepagar unilateralmente.</b><ul>' + problemas.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul><p>Regla general: los pagos anticipados se convienen libremente (art. 10 inc. 1°).</p></div>'
              : '<div class="resultado ok"><b>✓ Puede prepagar aun contra la voluntad del acreedor.</b>' + (cap > 5000 ? ' Aunque el capital supera 5.000 UF, la Ley 21.398 (art. 3° inc. 2° h LPDC) extiende el derecho al consumidor con independencia del monto.' : '') +
                '<p>Comisión máxima: <b>' + meses + ' mes' + (meses > 1 ? 'es' : '') + '</b> de intereses pactados sobre el capital prepagado ≈ <b>' + fmt(com, 2) + ' UF</b> (' + (c('reaj') ? 'reajustable' : 'no reajustable') + ').</p></div>';
          }
          el.querySelectorAll('input').forEach(function (i) { i.oninput = calc; }); calc();
        }
      },
      {
        id: 'prelacion', titulo: 'Liquidación: ¿quién cobra?', seccion: 'financiamiento',
        descripcion: 'Mueve el valor de los activos de la empresa en liquidación y mira cómo se reparte según la prelación. Así se ve por qué el accionista es «residual».',
        montar: function (el) {
          var tramos = [['Créditos preferentes', 300, '#20845c'], ['Valistas', 400, '#1479c9'], ['Bonos subordinados', 200, '#d79b12']];
          el.innerHTML = '<div class="campo" style="max-width:420px"><label>Valor de los activos: <b id="v">700</b> millones</label><input type="range" id="act" min="0" max="1500" step="50" value="700"></div><div id="out" style="margin-top:12px"></div>';
          function calc() {
            var resto = +el.querySelector('#act').value; el.querySelector('#v').textContent = resto;
            var html = '';
            tramos.forEach(function (t) {
              var paga = Math.min(resto, t[1]); resto -= paga;
              html += '<div style="margin:8px 0"><div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px"><span>' + t[0] + ' (deuda ' + t[1] + ')</span><span>' + Math.round(100 * paga / t[1]) + '% cobrado</span></div><div class="barra"><i style="width:' + (100 * paga / t[1]) + '%;background:' + t[2] + '"></i></div></div>';
            });
            html += '<div style="margin:8px 0"><div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px"><span>Accionistas (remanente)</span><span>' + resto + ' millones</span></div><div class="barra"><i style="width:' + Math.min(100, resto / 6) + '%;background:#b64747"></i></div></div>' +
              '<p class="small">' + (resto > 0 ? 'Pagados todos los acreedores, el remanente va a los accionistas: ganancia potencial no topada.' : 'Los accionistas no reciben nada hasta que se paga a todos los acreedores, incluidos los subordinados.') + '</p>';
            el.querySelector('#out').innerHTML = html;
          }
          el.querySelector('#act').oninput = calc; calc();
        }
      }
    ],

    /* ---------------- Preguntas ---------------- */
    preguntas: [
      // Dinero y medios de pago
      { tipo: 'alternativas', seccion: 'dinero', enunciado: '¿Qué norma da al dinero «poder liberatorio y circulación ilimitada»?', opciones: ['Art. 31 de la LOC del Banco Central (Ley 18.840)', 'Art. 1° de la Ley 18.010', 'Art. 2196 del Código Civil', 'DFL 707 sobre cuentas corrientes y cheques'], correcta: 0, explicacion: 'El art. 31 LOC BCentral dice que los billetes y monedas que emite el Banco son los únicos medios de pago con poder liberatorio y circulación ilimitada.' },
      { tipo: 'vf', seccion: 'dinero', sub: 'dinero-naturaleza', enunciado: 'El dinero depositado en una cuenta bancaria es un bien mueble corporal.', respuesta: false, explicacion: 'En efectivo es mueble corporal; como saldo en cuenta es un crédito contra el banco, es decir, un bien mueble incorporal.' },
      { tipo: 'alternativas', seccion: 'dinero', sub: 'dinero-origen', enunciado: '¿Cuáles son los dos problemas del trueque que explican el paso al dinero?', opciones: ['El fraccionamiento y la doble coincidencia de deseos', 'La inflación y el riesgo cambiario', 'La falta de poder liberatorio y la usura', 'El nominalismo y la reajustabilidad'], correcta: 0, explicacion: 'Ciertos bienes no se pueden dividir (la vaca) y para intercambiar hay que encontrar a alguien que tenga lo que quiero y quiera lo que ofrezco.' },
      { tipo: 'relacionar', seccion: 'medios-pago', enunciado: 'Relaciona cada medio de pago con su rasgo distintivo.', pares: [['Vale vista', 'Se emite contra depósito previo: siempre tiene fondos'], ['Cheque', 'Orden escrita al banco; puede protestarse por falta de fondos'], ['Tarjeta de prepago', 'Puede emitirla una entidad no bancaria (Ley 20.950)'], ['Carta de crédito', 'El banco emisor se obliga frente al beneficiario (UCP 600)'], ['Orden de pago', 'Transferencia en que el banco es simple mandatario']], explicacion: 'Recuerda: la diferencia clave entre vale vista y cheque es la garantía de fondos.' },
      { tipo: 'alternativas', seccion: 'medios-pago', sub: 'mp-exterior', enunciado: 'En comercio exterior, ¿qué medio da al exportador la garantía de un banco?', opciones: ['La carta de crédito', 'La cobranza extranjera', 'La orden de pago', 'La transferencia SWIFT'], correcta: 0, explicacion: 'En la carta de crédito el banco emisor se obliga directamente frente al beneficiario. En la cobranza y en la orden de pago los bancos no garantizan el pago.' },
      { tipo: 'vf', seccion: 'medios-pago', sub: 'mp-exterior', enunciado: 'En la cobranza extranjera, el banco garantiza al exportador que el comprador pagará.', respuesta: false, explicacion: 'Los bancos solo gestionan los documentos (factura, B/L) contra pago; no garantizan el pago.' },
      // Financiamiento
      { tipo: 'alternativas', seccion: 'financiamiento', sub: 'fin-deuda', enunciado: '¿Cómo controla el acreedor a la empresa deudora, si no tiene derechos políticos?', opciones: ['Con covenants, garantías y cláusulas de aceleración', 'Votando en la junta de accionistas', 'Designando directores por ley', 'Mediante la cuenta corriente mercantil'], correcta: 0, explicacion: 'La deuda no da control ordinario. El acreedor se protege por contrato (covenants de hacer y no hacer), con prendas e hipotecas y con la aceleración.' },
      { tipo: 'vf', seccion: 'hibridos', enunciado: 'Un bono subordinado se paga después de los acreedores valistas, pero antes que los accionistas.', respuesta: true, explicacion: 'La subordinación lo deja detrás de los acreedores comunes y antes que los accionistas, que son residuales. Por eso es un híbrido.' },
      { tipo: 'relacionar', seccion: 'financiamiento', enunciado: 'Relaciona cada rasgo con capital o deuda.', pares: [['Derecho residual', 'Capital'], ['Intereses deducibles como gasto', 'Deuda'], ['Derechos políticos', 'Acciones con voto'], ['Covenants y garantías', 'Protección del acreedor']], explicacion: 'Capital: residual y con control. Deuda: preferente, exigible y con beneficio tributario.' },
      { tipo: 'alternativas', seccion: 'hibridos', enunciado: '¿Cuál es un híbrido financiero?', opciones: ['Un bono convertible en acciones', 'Una acción ordinaria con voto', 'Un mutuo civil de trigo', 'Un vale vista'], correcta: 0, explicacion: 'El bono convertible es deuda que puede transformarse en capital. Combina rasgos de ambos.' },
      // OCD
      { tipo: 'alternativas', seccion: 'ocd', enunciado: 'Según el art. 1° de la Ley 18.010, ¿qué contrato está EXCLUIDO de las operaciones de crédito de dinero?', opciones: ['El avío minero', 'El préstamo documentado en un pagaré', 'La línea de crédito bancaria', 'El mutuo de dinero entre particulares'], correcta: 0, explicacion: 'Se excluyen los contratos aleatorios, los arbitrajes de monedas a futuro, el préstamo marítimo y el avío minero, porque su restitución es incierta.' },
      { tipo: 'vf', seccion: 'ocd', enunciado: 'Si el dinero no se entrega al celebrar la convención, sino que solo se promete, no hay operación de crédito de dinero.', respuesta: false, explicacion: 'El art. 1° dice «entrega o se obliga a entregar». Si solo se promete (p. ej. un cupo), la OCD funciona como contrato consensual.' },
      { tipo: 'alternativas', seccion: 'forma-onerosidad', sub: 'fo-onerosidad', enunciado: 'En una OCD, A presta $100.000 a B verbalmente y nada dicen sobre intereses. ¿Qué debe B?', opciones: ['El capital más el interés corriente', 'Solo el capital, porque los intereses no se presumen', 'El capital más el interés máximo convencional', 'Solo el capital reajustado por UF'], correcta: 0, explicacion: 'Art. 12: la gratuidad no se presume y la OCD devenga interés corriente salvo ley o pacto en contrario. Ese pacto debe constar por escrito (art. 14).' },
      { tipo: 'vf', seccion: 'forma-onerosidad', sub: 'fo-dinero', enunciado: 'En una OCD pueden pactarse válidamente los intereses en especies, por ejemplo una oveja.', respuesta: false, explicacion: 'Art. 11: en las obligaciones de la Ley 18.010 los intereses solo pueden estipularse en dinero, a diferencia del art. 2205 CC.' },
      { tipo: 'alternativas', seccion: 'presunciones-pago', sub: 'pp-periodos', enunciado: 'El recibo de intereses de tres períodos consecutivos completos…', opciones: ['Hace presumir pagados los intereses anteriores (art. 18)', 'Extingue la obligación de pagar el capital', 'Hace presumir pagado el reajuste futuro', 'Constituye renuncia a los intereses moratorios'], correcta: 0, explicacion: 'Es una presunción simplemente legal del art. 18. El art. 17 agrega que el recibo del capital hace presumir pagados intereses y reajuste.' },
      { tipo: 'vf', seccion: 'forma-onerosidad', sub: 'fo-legal', enunciado: 'Cuando una ley se refiere al «interés legal», se aplica el interés corriente.', respuesta: true, explicacion: 'Art. 19 Ley 18.010.' },
      // Reajuste
      { tipo: 'alternativas', seccion: 'reajuste', sub: 're-reguladas', enunciado: 'Un banco quiere reajustar un crédito según el precio del cobre. ¿Es válido?', opciones: ['No: las instituciones reguladas solo pueden usar los sistemas autorizados por el Banco Central', 'Sí: rige la libertad de pacto del art. 3° inc. 1°', 'Sí, siempre que no exceda la TMC', 'No: en Chile ningún reajuste puede pactarse'], correcta: 0, explicacion: 'Con instituciones del art. 31 solo valen los sistemas autorizados por el Banco Central (UF, divisa, IVP). La libertad de pacto rige entre particulares.' },
      { tipo: 'vf', seccion: 'reajuste', sub: 're-particulares', enunciado: 'Si en una OCD entre particulares nada se dice sobre reajuste, el deudor debe pagar el capital reajustado por UF.', respuesta: false, explicacion: 'Rige el principio nominalista (DL 1.123): el reajuste no se presume.' },
      { tipo: 'alternativas', seccion: 'moneda-extranjera', enunciado: 'Una deuda en dólares pagadera en pesos, ¿puede reajustarse además por UF?', opciones: ['No: el art. 24 prohíbe otro reajuste fuera de la variación cambiaria', 'Sí, si las partes lo pactan por escrito', 'Sí, pero solo con bancos', 'Solo si la deuda supera 5.000 UF'], correcta: 0, explicacion: 'La fluctuación del tipo de cambio ya lleva implícito un reajuste.' },
      { tipo: 'alternativas', seccion: 'moneda-extranjera', enunciado: 'Una obligación en moneda extranjera vencida se paga en pesos según…', opciones: ['El tipo de cambio vendedor del día del pago, o del vencimiento si es superior', 'El tipo de cambio comprador del día del contrato', 'El promedio del mes de vencimiento', 'El tipo que fije libremente el acreedor'], correcta: 0, explicacion: 'Art. 20 Ley 18.010.' },
      // Interés y comisión
      { tipo: 'alternativas', seccion: 'interes', enunciado: 'Según el art. 2° de la Ley 18.010, en una operación no reajustable es interés…', opciones: ['Toda suma que recibe o tiene derecho a recibir el acreedor, a cualquier título, por sobre el capital', 'Solo lo que las partes llaman «interés» en el contrato', 'Lo que exceda la tasa corriente', 'Las costas procesales del cobro judicial'], correcta: 0, explicacion: 'Es un concepto expansivo para evitar fraudes a la TMC. Las costas procesales y personales no son interés.' },
      { tipo: 'alternativas', seccion: 'interes', enunciado: 'En el caso Cofisa, ¿por qué la Corte Suprema calificó la AVM como interés?', opciones: ['Porque su monto dependía del plazo y el número de cuotas, no del costo de un servicio', 'Porque no estaba escrita en el contrato', 'Porque la cobraba una tienda y no un banco', 'Porque superaba las 200 UF'], correcta: 0, explicacion: 'La calificación es objetiva, por contenido y naturaleza. Un cobro ligado a la operación de crédito retribuye el uso del dinero.' },
      { tipo: 'alternativas', seccion: 'interes', enunciado: '¿Qué consecuencia aplicó la Corte Suprema en Cofisa?', opciones: ['Tener por no escrita la cláusula de AVM y multar según la LPDC', 'Declarar nulo todo el contrato de tarjeta', 'Ordenar la devolución a cada consumidor', 'Remitir los antecedentes por usura'], correcta: 0, explicacion: 'Art. 8° Ley 18.010 más multas de 50 UTM por cada infracción (arts. 39 y 37 b LPDC). No ordenó devoluciones por falta de prueba sobre consumidores en particular.' },
      { tipo: 'vf', seccion: 'interes-comision', sub: 'com-19ter', enunciado: 'Según el art. 19 ter, los cobros que no cumplan los requisitos de la CMF para las comisiones se consideran intereses.', respuesta: true, explicacion: 'Por eso entran en el cálculo de la TMC.' },
      { tipo: 'relacionar', seccion: 'interes-comision', sub: 'com-ncg', enunciado: 'Relaciona cada cobro con su calificación según la NCG 484.', pares: [['Cargo por desembolsar el crédito', 'Inherente: es interés'], ['Notario para una solemnidad legal', 'Servicio de tercero no inherente'], ['Mantención fija de tarjeta, informada', 'Puede ser comisión'], ['Cobro proporcional a las cuotas', 'Función del monto: interés']], explicacion: 'Lo inherente nunca puede ser comisión. En tarjetas la mantención puede serlo si no depende del monto.' },
      { tipo: 'alternativas', seccion: 'interes-comision', sub: 'com-ncg', enunciado: 'Según la NCG 484, ¿qué es un servicio «inherente» a la operación de crédito?', opciones: ['El necesario para iniciar, celebrar, materializar o terminar el crédito, o el exigido por ley', 'Cualquier servicio que preste un tercero', 'Solo la administración de tarjetas de crédito', 'El que el deudor acepta expresamente'], correcta: 0, explicacion: 'Esos servicios no pueden cobrarse como comisión.' },
      { tipo: 'vf', seccion: 'interes-comision', sub: 'com-ncg', enunciado: 'La NCG 484 rige desde el 1 de agosto de 2023.', respuesta: true, explicacion: 'Se dictó el 5 de agosto de 2022 y fijó su vigencia desde el 1 de agosto de 2023.' },
      // Tasas
      { tipo: 'alternativas', seccion: 'tasas', sub: 'tasas-general', enunciado: 'Si la TIC de un segmento es 7,9%, ¿cuál es la TMC según el art. 6°?', opciones: ['11,85%', '9,9%', '7,9%', '15,8%'], correcta: 0, explicacion: 'Es la mayor entre 1,5 × 7,9 = 11,85% y 7,9 + 2 = 9,9%.' },
      { tipo: 'alternativas', seccion: 'tasas', sub: 'tasas-menores', enunciado: 'Para un crédito de 40 UF a 12 meses, ¿cómo se calcula la TMC según el art. 6 bis?', opciones: ['TIC de operaciones no reajustables de 200 a 5.000 UF + 21 pp', 'TIC de su propio tramo × 1,5', 'TIC de operaciones no reajustables de 200 a 5.000 UF + 14 pp', 'TIC + 2 pp'], correcta: 0, explicacion: 'Hasta 50 UF se suman 21 pp; sobre 50 y hasta 200 UF, 14 pp. La base es siempre la TIC del tramo 200-5.000 UF.' },
      { tipo: 'vf', seccion: 'tasas', sub: 'tasas-descuento', enunciado: 'Si el crédito se paga por descuento de remuneraciones, la TMC es la TIC base + 7 pp, porque el riesgo de no pago es menor.', respuesta: true, explicacion: 'Art. 6 bis inc. 3°: el deudor no puede negarse al cobro por planilla; la ley compensa con un tope más bajo.' },
      { tipo: 'vf', seccion: 'tasas', sub: 'tasas-tarjetas', enunciado: 'En las tarjetas de crédito, la TMC se determina según cada compra individual y no según el cupo autorizado.', respuesta: false, explicacion: 'Art. 6 ter: se determina por el monto autorizado y el plazo pactado. Las modificaciones de cupo o plazo son nuevas convenciones.' },
      { tipo: 'alternativas', seccion: 'tasas', sub: 'tasas-menores', enunciado: '¿Qué efecto no deseado tuvo la baja de la TMC para créditos pequeños en 2013, según el profesor?', opciones: ['Desbancarización de deudores riesgosos, que fueron al crédito informal', 'Aumento de la inflación', 'Fin del anatocismo', 'Eliminación de la tarjeta de crédito'], correcta: 0, explicacion: 'Con un tope menor, las instituciones dejaron de prestar a quienes tienen más riesgo de no pagar.' },
      // Sanciones
      { tipo: 'alternativas', seccion: 'sanciones', sub: 'san-exceso', enunciado: 'Si un pacto de intereses excede la TMC, el art. 8° dispone que…', opciones: ['Se tiene por no escrito y los intereses se reducen al interés corriente', 'El contrato es nulo absolutamente', 'Los intereses se reducen a la TMC', 'El deudor queda liberado de pagar intereses'], correcta: 0, explicacion: 'Es una ineficacia parcial (art. 10 CC: la ley designa otro efecto). La reducción es a la tasa corriente, no a la máxima.' },
      { tipo: 'vf', seccion: 'sanciones', sub: 'san-civil', enunciado: 'Lo pagado en exceso de la TMC se imputa al capital y, si este ya se extinguió, debe restituirse.', respuesta: true, explicacion: 'Art. 8°, con reajuste según su inc. 3°.' },
      { tipo: 'relacionar', seccion: 'sanciones', sub: 'san-infracciones', enunciado: 'Relaciona cada sanción con su fuente.', pares: [['Usura: presidio o reclusión menores', 'Art. 472 CP'], ['Multa de hasta 50 UTM', 'LPDC (arts. 39 y 24)'], ['Multa de hasta 5.000 UF', 'CMF (art. 33 Ley 18.010 y art. 19 LGB)'], ['Pacto por no escrito', 'Art. 8° Ley 18.010']], explicacion: 'Su acumulación abre el debate sobre non bis in idem.' },
      // Anatocismo
      { tipo: 'alternativas', seccion: 'anatocismo', sub: 'ana-art9', enunciado: '¿Cuál es el período mínimo de capitalización de intereses que permite el art. 9°?', opciones: ['30 días', '6 meses', '1 año', 'No tiene mínimo'], correcta: 0, explicacion: 'Nunca por períodos inferiores a 30 días. En la cuenta corriente mercantil son 6 meses y en el mutuo mercantil, 1 año.' },
      { tipo: 'vf', seccion: 'anatocismo', sub: 'ana-cmf', enunciado: 'Según la CMF (oficio de abril de 2021), la Ley 21.314 derogó tácitamente el art. 9° de la Ley 18.010.', respuesta: false, explicacion: 'La CMF interpretó que el art. 9° sigue vigente; solo los intereses moratorios no pueden capitalizarse.' },
      { tipo: 'alternativas', seccion: 'anatocismo', sub: 'ana-reglas', enunciado: 'Tras la Ley 21.314, ¿qué intereses NO pueden capitalizarse?', opciones: ['Los moratorios', 'Los remuneratorios no vencidos', 'Los remuneratorios del capital vencido', 'Ningún interés puede capitalizarse'], correcta: 0, explicacion: 'Siguen permitidos los remuneratorios no vencidos (pacto, mínimo 30 días) y los del capital vencido (art. 9° inc. 3°).' },
      { tipo: 'vf', seccion: 'anatocismo', sub: 'ana-legal', enunciado: 'En una OCD vencida, los intereses no pagados se incorporan al capital aunque no se haya pactado, salvo pacto expreso en contrario.', respuesta: true, explicacion: 'Art. 9° inc. 3°: es el anatocismo legal, un elemento de la naturaleza.' },
      { tipo: 'alternativas', seccion: 'anatocismo', enunciado: 'Fuera de las OCD y de los regímenes especiales, ¿qué norma rige la capitalización de intereses atrasados?', opciones: ['El art. 1559 N°3 CC: los intereses atrasados no producen interés', 'El art. 9° de la Ley 18.010', 'El art. 617 del Código de Comercio', 'La NCG 484'], correcta: 0, explicacion: 'Es la regla supletoria del derecho común.' },
      // Mora y prepago
      { tipo: 'alternativas', seccion: 'mora-prepago', sub: 'mora-ejemplos', enunciado: 'Crédito de $1.000.000 en 10 cuotas de capital; el deudor no paga la primera y no hay aceleración. ¿Sobre qué monto corre el interés moratorio?', opciones: ['$100.000', '$1.000.000', '$900.000', 'Sobre nada, porque no se lo interpeló'], correcta: 0, explicacion: 'Art. 16: solo sobre el capital efectivamente vencido. Además el moratorio se devenga desde el retardo, sin interpelación.' },
      { tipo: 'vf', seccion: 'mora-prepago', sub: 'mora-regla', enunciado: 'El interés moratorio puede cobrarse sobre el mismo monto junto con el interés remuneratorio pactado.', respuesta: false, explicacion: 'El art. 16 prohíbe aplicarlo conjunta o adicionalmente con otro interés sobre el mismo monto.' },
      { tipo: 'alternativas', seccion: 'prepago', sub: 'pre-reajustables', enunciado: 'En un crédito reajustable de 3.000 UF, ¿cuál es la comisión máxima de prepago?', opciones: ['1,5 meses de intereses pactados sobre el capital prepagado', '1 mes de intereses pactados sobre todo el saldo', '3 meses de intereses', 'No puede cobrarse comisión'], correcta: 0, explicacion: 'Reajustables: 1,5 meses; no reajustables: 1 mes. Siempre sobre el capital que se prepaga.' },
      { tipo: 'vf', seccion: 'prepago', sub: 'pre-5000', enunciado: 'Un consumidor con un hipotecario de 8.000 UF puede prepagar aunque el banco se oponga.', respuesta: true, explicacion: 'La Ley 21.398 (art. 3° inc. 2° h LPDC) aplica el art. 10 a los consumidores con independencia del capital.' },
      { tipo: 'alternativas', seccion: 'prepago', sub: 'pre-concepto', enunciado: '¿Cuál es el monto mínimo que debe prepagarse para hacerlo contra la voluntad del acreedor?', opciones: ['10% del saldo', '20% del saldo', '50% del saldo', 'El total de la deuda'], correcta: 0, explicacion: 'Antes era 20%; la reforma lo bajó a 10%. Bajo ese porcentaje se requiere el consentimiento del acreedor.' },

      // ---------- Preguntas orales ----------
      { tipo: 'oral', seccion: 'ocd', enunciado: 'Defina operación de crédito de dinero y explique sus elementos, las asimilaciones y las exclusiones.', puntos: ['Art. 1° Ley 18.010: una parte entrega o se obliga a entregar dinero y la otra a pagarlo en un momento distinto de la convención.', 'Puede ser real (entrega) o consensual (promesa de entrega, como un cupo).', 'Objeto: dinero. Si es otra cosa fungible, rige el CC o el CCom.', 'Restitución diferida y obligación de devolver al menos el capital (si no, es donación).', 'Se asimilan los documentos representativos de obligaciones de dinero (cheques, pagarés).', 'Excluidos: contratos aleatorios, arbitrajes de monedas a futuro, préstamo marítimo y avío minero, porque la restitución es incierta.'], norma: 'Art. 1° Ley 18.010' },
      { tipo: 'oral', seccion: 'interes-comision', enunciado: '¿Qué es interés en la Ley 18.010 y cómo se distingue de una comisión? Relacione con el caso Cofisa y la NCG 484.', puntos: ['Art. 2°: toda suma que el acreedor recibe o tiene derecho a recibir, a cualquier título, sobre el capital (o el capital reajustado). Es un concepto expansivo.', 'Fin: evitar fraudes a la TMC con cobros con otro nombre.', 'Cofisa (CS 2015): la AVM, que crecía con el número de cuotas, era interés. La calificación es objetiva y el nombre no decide. Consecuencia: cláusula por no escrita (art. 8°) y multas LPDC.', 'Art. 19 ter (Ley 21.314): la comisión retribuye servicios reales, se calcula según su costo y, si no cumple, es interés.', 'NCG 484: costo del servicio; servicio real, prestado y no inherente; información y aceptación previa; publicidad por los mismos canales.', 'Críticas: descoordinación con el art. 17 B LPDC, problemas en créditos sindicados y dudas con la comisión de prepago.'], norma: 'Arts. 2° y 19 ter Ley 18.010; NCG 484; CS Rol 27.802-14' },
      { tipo: 'oral', seccion: 'tasas', enunciado: 'Explique cómo se determina la tasa máxima convencional, incluyendo los regímenes especiales.', puntos: ['TIC: promedio ponderado de las tasas bancarias, que la CMF determina mensualmente por segmento (art. 6°).', 'Regla general: la mayor entre 1,5 × TIC y TIC + 2 pp (desde la Ley 20.715). Ejemplo: 7,9% da 11,85%.', 'Art. 6 bis (≤ 200 UF, plazo ≥ 90 días): base en la TIC no reajustable de 200-5.000 UF; +14 pp (50-200 UF) o +21 pp (≤ 50 UF).', 'Descuento por planilla: +7 pp, por menor riesgo.', 'Art. 6 ter (tarjetas y líneas): según cupo y plazo, a la fecha del devengo; los cambios son nuevas convenciones.', 'Crítica: la desbancarización.'], norma: 'Arts. 6°, 6 bis y 6 ter Ley 18.010' },
      { tipo: 'oral', seccion: 'sanciones', enunciado: '¿Qué ocurre si se pactan intereses sobre la TMC? Explique todas las sanciones.', puntos: ['Civil (art. 8°): el pacto se tiene por no escrito y se reduce al interés corriente. Es ineficacia parcial, no nulidad (art. 10 CC).', 'El exceso pagado se imputa al capital o se restituye reajustado.', 'Administrativa de consumo: art. 39 LPDC, multa de hasta 50 UTM.', 'Administrativa de la CMF: amonestación, censura o multa de hasta 5.000 UF; hasta 5 veces si reitera (art. 33 Ley 18.010, art. 19 LGB).', 'Penal: usura (art. 472 CP), con reglas especiales para extranjeros.', 'Debate sobre non bis in idem por la acumulación de sanciones.'], norma: 'Art. 8° Ley 18.010; art. 472 CP' },
      { tipo: 'oral', seccion: 'anatocismo', enunciado: 'Explique el régimen del anatocismo en Chile y el efecto de la Ley 21.314.', puntos: ['Concepto: capitalización de intereses (intereses sobre intereses).', 'Art. 9° inc. 1°: puede pactarse (elemento accidental), nunca por períodos menores a 30 días.', 'Inc. 2°: si se infringe, lo capitalizado es interés (y puede gatillar el art. 8°).', 'Inc. 3°: en la operación vencida, los intereses no pagados se incorporan al capital salvo pacto (elemento de la naturaleza).', 'Art. 16 reformado: el moratorio no se acumula, solo corre sobre el capital vencido y no se capitaliza.', 'Oficio CMF de abril de 2021: el art. 9° sigue vigente; solo se prohíbe capitalizar el moratorio.', 'Fuera de las OCD rige el art. 1559 N°3 CC.'], norma: 'Arts. 9° y 16 Ley 18.010; art. 1559 CC' },
      { tipo: 'oral', seccion: 'prepago', enunciado: '¿Tiene el deudor derecho a pagar anticipadamente una operación de crédito de dinero?', puntos: ['Regla general: el prepago se conviene libremente (art. 10 inc. 1°); el plazo también beneficia al acreedor.', 'Excepción: capital ≤ 5.000 UF y deudor que no es institución regulada; puede prepagar contra la voluntad del acreedor.', 'Requisitos: al menos 10% del saldo y comisión de hasta 1 mes (no reajustables) o 1,5 meses (reajustables) de intereses sobre lo prepagado.', 'Por qué 1 o 1,5 meses: tiempo razonable para recolocar el dinero.', 'Ley 21.398: para el consumidor financiero rige con independencia del monto (art. 3° inc. 2° h LPDC); es irrenunciable.', 'Uso típico: portabilidad y refinanciamiento cuando bajan las tasas.'], norma: 'Art. 10 Ley 18.010; art. 3° LPDC' },
      { tipo: 'oral', seccion: 'reajuste', enunciado: 'Explique el régimen de reajustabilidad de las operaciones de crédito de dinero.', puntos: ['Su fin es proteger del deterioro por inflación. Sin pacto rige el nominalismo (DL 1.123).', 'Con instituciones del art. 31: solo sistemas autorizados por el Banco Central (UF, divisa, IVP; art. 35 N°9 LOC).', 'Si el sistema se deroga, se mantiene el pactado salvo acuerdo de sustitución.', 'Entre particulares: libertad de pacto (art. 3° inc. 1°).', 'Moneda extranjera: art. 20 (tipo de cambio vendedor) y art. 24 (no hay reajuste adicional).'], norma: 'Arts. 3°, 20, 24 y 31 Ley 18.010' },
      { tipo: 'oral', seccion: 'financiamiento', enunciado: 'Compare el financiamiento con capital y con deuda, y explique qué son los híbridos financieros.', puntos: ['Capital: derecho residual, no exigible, con derechos políticos y económicos; mayor riesgo y retorno no topado.', 'Deuda: derecho preferente y exigible, sin control; el acreedor se protege con covenants, garantías y aceleración; intereses deducibles.', 'Híbridos: combinan restitución, vencimiento e intereses con riesgo residual, remuneración variable y subordinación.', 'Ejemplos: bonos perpetuos, bonos subordinados, acciones preferentes y bonos convertibles (mezzanine).'], norma: 'Diapositivas, unidad 1' },
      { tipo: 'oral', seccion: 'medios-pago', sub: 'mp-exterior', enunciado: 'Explique los medios de pago del comercio exterior y cuál da mayor seguridad al vendedor.', puntos: ['Orden de pago: transferencia por SWIFT; el banco es mandatario y no garantiza.', 'Cobranza extranjera: los bancos entregan documentos (factura, B/L) contra pago; no garantizan.', 'Carta de crédito (UCP 600): el banco emisor se obliga directamente frente al beneficiario a pagar contra documentos conformes.', 'La seguridad depende de la solvencia del banco, no del comprador.'], norma: 'UCP 600' },
      { tipo: 'oral', seccion: 'mora-prepago', sub: 'mora-concepto', enunciado: '¿Qué reglas rigen el interés moratorio en las operaciones de crédito de dinero?', puntos: ['Art. 16: desde el retardo se debe el interés corriente vigente durante el retardo, salvo un interés penal pactado dentro de la TMC.', 'No exige la interpelación del art. 1551 CC.', 'Ley 21.314: no se aplica conjuntamente con otro interés sobre el mismo monto.', 'Solo sobre el capital efectivamente vencido (ejemplo de las 10 cuotas), salvo aceleración.', 'No se capitaliza.'], norma: 'Art. 16 Ley 18.010' }
    ]
  });
})();
