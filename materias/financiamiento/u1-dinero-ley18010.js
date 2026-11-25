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
      {"termino": "Comisión de prepago", "definicion": "Compensación máxima al acreedor por el prepago: un mes de intereses pactados sobre el capital prepagado en operaciones no reajustables y un mes y medio en las reajustables.", "fuente": "Art. 10 Ley 18.010", "seccion": "prepago"},
      {"termino": "Cláusula de reserva", "definicion": "Declaración expresa que el acreedor deja en el recibo de pago sobre lo que sigue pendiente (intereses, reajustes o períodos anteriores), para que no operen las presunciones de pago de los arts. 17 y 18 de la Ley 18.010.", "fuente": "Apunte completo de clases, unidad 1", "seccion": "presunciones-pago", "sub": "pp-reserva", "alias": ["reserva", "reserva de derechos"]}
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
<p>Lo aportan los socios o accionistas, al constituir la sociedad o después (aumentos de capital, emisión de acciones). El aportante pasa a ser dueño y asume el riesgo directo de la empresa.</p>
<p>El accionista tiene un derecho <b>residual</b>: está en el último lugar del orden de pago al liquidar la empresa. Es un pasivo <b>no exigible</b>: la sociedad no debe devolverlo en un plazo determinado y lo retribuye solo con dividendos.</p>
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
<div class="callout"><p><b>Cómo se protege el acreedor sin votar.</b> Con covenants de hacer (entregar estados financieros, acreditar cumplimiento tributario o laboral) y de no hacer (no endeudarse sobre cierto límite, no vender activos relevantes); con prendas e hipotecas, cuyo deterioro gatilla la caducidad del plazo (<span class="norma">art. 1496 N°2 CC</span>); y con la cláusula de aceleración, que permite exigir todo el saldo ante un incumplimiento.</p></div>
<p>El acreedor es un tercero ajeno a la sociedad (un banco, un tenedor de bonos). Debe pagársele capital e intereses haya o no utilidades, salvo un escenario concursal. Tributariamente, los intereses son un <b>gasto necesario para producir renta</b> y pueden deducirse.</p>`
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
<ul>
  <li><b>Exclusiones:</b> la CMF puede omitir operaciones que distorsionen el promedio (refinanciamientos, subsidios). Tampoco cuentan las operaciones del <span class="norma">art. 5°</span> (p. ej. con bancos extranjeros, comercio exterior o con el Banco Central).</li>
  <li><b>Segmentación:</b> no hay una sola TIC. La CMF distingue por reajustabilidad, moneda, monto (hasta dos tramos) y plazo.</li>
  <li><b>Vigencia:</b> rige desde su publicación hasta el día anterior a la publicación siguiente.</li>
  <li><b>Reemplazo legal:</b> sustituye al «interés legal» o «máximo bancario» cuando otras leyes los mencionan (ver 3.10.5).</li>
</ul>
<h3 data-sub="tasas-tmc">3.5.2. La tasa de interés máximo convencional (TMC)</h3>
<p>Es el techo de lo que puede pactarse como precio del dinero. Su fin es prevenir la <b>usura</b>: históricamente se pasó de prohibir todo interés (hasta el siglo XIX) a sancionar solo el interés excesivo. Se calcula sobre la TIC.</p>
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
<p>Según el <span class="norma">art. 33 Ley 18.010</span> y el <span class="norma">art. 19 LGB</span>: amonestación, censura o multa de hasta 5.000 UF a quien coloca fondos masivamente (<span class="norma">art. 31</span>). Si reitera la infracción dentro de <b>doce meses</b>, la multa puede multiplicarse hasta por cinco: hasta <b>25.000 UF</b>.</p>
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
<p>Aquí <b>no hay incumplimiento ni mora</b>: es una fórmula pactada que difiere el pago de los intereses sumándolos al capital. En la práctica, casi todos los créditos bancarios a mediano o largo plazo la incluyen.</p>
<h3 data-sub="ana-legal">3.8.3. El anatocismo legal (elemento de la naturaleza)</h3>
<p>Tercera regla del art. 9°: los intereses de una operación <b>vencida</b> no pagados <b>se incorporan a ella</b>, salvo pacto expreso en contrario.</p>
<p>Opera de pleno derecho, sin cláusula. A diferencia del pacto del punto 3.8.1, supone que la obligación venció y hay mora: los intereses remuneratorios impagos se suman al capital y esa suma es la base para calcular el interés moratorio.</p>
<h3 data-sub="ana-reforma">3.8.4. La reforma del artículo 16 (Ley 21.314)</h3>
<div class="cita">«El interés moratorio […] no podrá aplicarse conjunta ni adicionalmente, sobre un mismo monto, con ningún otro interés. Asimismo, este interés sólo podrá cobrarse sobre aquella parte del capital que se encuentre efectivamente vencida y no podrá ser capitalizada para el cálculo de intereses de ningún tipo.»<span class="fuente">Art. 16 Ley 18.010</span></div>
<h4 data-sub="ana-jackson">3.8.4.1. El origen de la reforma y la propuesta de Giorgio Jackson</h4>
<p>La propuesta original (diputado G. Jackson) buscaba eliminar el anatocismo, limitar la regla a obligaciones de hasta 5.000 UF y topar el interés moratorio en el corriente.</p>
<p>El Congreso celebró la reforma como si hubiera eliminado el anatocismo, pero no tocó el art. 9°, que sigue permitiéndolo. Eso generó una contradicción normativa e incertidumbre en la banca.</p>
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
<div class="callout green"><p>El art. 9° <b>no está derogado</b>. Está prohibido capitalizar los <b>intereses moratorios</b>, pero se pueden capitalizar los <b>intereses remuneratorios no vencidos</b> (según lo pactado y con el mínimo de 30 días) y los <b>intereses remuneratorios del capital vencido</b> (art. 9° inc. 3°, salvo pacto en contrario).</p></div>
<p>Congelar el interés moratorio frena el crecimiento explosivo de las deudas en mora. Ejemplo de clase: quien debía $1 millón en una casa comercial y al año debía $3 millones por capitalizar la mora.</p>`
      },
      {
        id: 'prepago', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.9. Pago anticipado (prepago)',
        html: `
<h3 data-sub="pre-concepto">3.9.1. Concepto y regla general (art. 10 Ley 18.010)</h3>
<p>En el derecho común el plazo se entiende a favor del deudor, pero en el mutuo con intereses el deudor no puede renunciarlo sin el acreedor: este cuenta con esos intereses, por ejemplo para pagar a sus propios depositantes (riesgo de <b>descalce</b>).</p>
<p>Regla general del <span class="norma">art. 10 inc. 1°</span>: los prepagos se <b>convienen libremente</b> entre acreedor y deudor.</p>
<div class="callout"><p><b>Excepción:</b> en operaciones cuyo capital <b>no supere 5.000 UF</b>, el deudor que <b>no sea una institución fiscalizada por la CMF, el Fisco ni el Banco Central</b> puede prepagar <b>aun contra la voluntad del acreedor</b>, si prepaga al menos el <b>10% del saldo</b> (antes era 20%; si es menos, necesita consentimiento del acreedor) y paga la comisión de prepago.</p></div>
<h3 data-sub="pre-no-reajustables">3.9.2. Comisión de prepago en operaciones no reajustables</h3>
<p>Como máximo <b>1 mes</b> de intereses pactados sobre el capital que se prepaga.</p>
<h3 data-sub="pre-reajustables">3.9.3. Comisión de prepago en operaciones reajustables</h3>
<p>Como máximo <b>1,5 meses</b> de intereses pactados sobre el capital <b>reajustado</b> que se prepaga.</p>
<h3 data-sub="pre-por-que">3.9.4. ¿Por qué un mes o un mes y medio?</h3>
<p>La comisión compensa al acreedor por los intereses que deja de recibir. Se limita a 1 o 1,5 meses porque se asume que el negocio financiero es dinámico y que en ese plazo el acreedor puede volver a colocar el dinero. La diferencia de medio mes se explica porque en las reajustables (UF o divisa) recolocar exige cubrir inflación y calzar monedas, lo que es más complejo.</p>
<h3 data-sub="pre-proconsumidor">3.9.5. Lectura conjunta con la Ley Pro Consumidor (21.398)</h3>
<p>Agregó al <span class="norma">art. 3° inc. 2° letra h) LPDC</span> que el prepago del art. 10 se aplica a las operaciones financieras de consumo <b>con independencia del capital adeudado</b>.</p>
<h3 data-sub="pre-5000">3.9.6. Se elimina el requisito de 5.000 UF</h3>
<p>Si el crédito es una operación de consumo financiero, desaparece el límite de 5.000 UF: el consumidor puede prepagar incluso un hipotecario de 7.000 o 10.000 UF sin autorización del banco, siempre que abone al menos el 10% y pague la comisión. Ejemplo de clase: el profesor refinanció su hipotecario sobre 5.000 UF por portabilidad en 2019.</p>
<h3 data-sub="pre-tope">3.9.7. ¿Por qué el tope original de 5.000 UF?</h3>
<p>Se pensó para proteger a los deudores de créditos de consumo de mediano o menor tamaño, no a los grandes financiamientos corporativos. Con el alza del precio de la vivienda, el tope dejó fuera a muchos deudores hipotecarios de clase media; eso motivó la Ley Pro Consumidor.</p>
<h3 data-sub="pre-origen">3.9.8. ¿Cómo se quería incorporar el derecho a prepago originalmente?</h3>
<p>El mensaje de la Ley Pro Consumidor lo ubicaba en el <span class="norma">art. 17 D LPDC</span>, una norma miscelánea. Se consideró demasiado importante para quedar ahí y se reguló de forma autónoma en el <span class="norma">art. 3° inc. 2° letra h)</span>.</p>
<h3 data-sub="pre-razones">3.9.9. ¿Por qué se prepaga un crédito?</h3>
<ul><li><b>Liquidez extraordinaria:</b> el deudor recibe dinero imprevisto (herencia, bono, premio) y extingue su deuda.</li><li><b>Portabilidad y refinanciamiento:</b> traslada la deuda a otra institución con mejores condiciones.</li></ul>
<h3 data-sub="pre-refinanciar">3.9.10. ¿Cuándo conviene refinanciar?</h3>
<p>Cuando las tasas de mercado bajan bastante respecto de la tasa fija pactada. El deudor pide un crédito más barato a otro banco, con él prepaga la deuda cara y queda pagando una cuota menor.</p>
<h3 data-sub="pre-irrenunciable">3.9.11. Es un derecho irrenunciable</h3>
<p>Para el consumidor financiero, el derecho a prepagar es <b>irrenunciable</b> (art. 3° LPDC). Una cláusula de un contrato de adhesión que lo prohíba o imponga comisiones superiores a las legales se tiene por no escrita. Lo fiscaliza el <b>Sernac</b>, sin que el deudor tenga que litigar años en un juicio civil.</p>
<div class="callout"><p><b>Ejemplo de clase («el Kino»):</b> quien debe un crédito de consumo de $5.000.000 y gana un premio puede pagar todo el saldo de inmediato. El banco no puede negarse; solo cobra el capital más un mes de intereses (comisión de prepago no reajustable).</p></div>`
      },
      {
        id: 'forma-onerosidad', grupo: '3. Operación de crédito de dinero (Ley 18.010)', titulo: '3.10. Forma, onerosidad y presunción de interés',
        html: `
<h3 data-sub="fo-dinero">3.10.1. Intereses solo en dinero (art. 11 Ley 18.010)</h3>
<p>Los intereses solo pueden estipularse <b>en dinero</b>. Se devengan día por día; meses de 30 días y años de 360.</p>
<h3 data-sub="fo-mutuo">3.10.2. Diferencia con el mutuo civil</h3>
<p>El mutuo civil recae sobre cualquier cosa fungible (trigo, animales, mercaderías) y sus intereses pueden pactarse en cosas de la misma naturaleza (<span class="norma">art. 2205 CC</span>): prestar 5 ovejas y recibir 6. En la OCD, en cambio, está prohibido pactar intereses en cosas: siempre se pagan en dinero.</p>
<h3 data-sub="fo-onerosidad">3.10.3. Presunción de onerosidad (art. 12 Ley 18.010)</h3>
<p><b>La gratuidad no se presume</b>: salvo ley o pacto en contrario, la OCD devenga interés corriente. Es la regla inversa al mutuo civil (<span class="norma">art. 2206 CC</span>), que es gratuito por naturaleza y solo produce intereses si se pactan, e igual a la del mutuo mercantil (<span class="norma">art. 798 CCom</span>).</p>
<p>En la OCD la gratuidad debe pactarse <b>expresamente y por escrito</b>. Si las partes callan sobre la retribución, se debe la TIC vigente al momento de la convención, sobre el capital o el capital reajustado.</p>
<h3 data-sub="fo-escrituracion">3.10.4. Exigencia de escrituración (art. 14 Ley 18.010)</h3>
<p>La estipulación de intereses, o la que exime de pagarlos, debe constar <b>por escrito</b>; si no, es ineficaz en juicio. Es una <b>solemnidad probatoria</b>: el pacto verbal de una tasa o de gratuidad no vale en tribunales y se aplica la regla supletoria, el interés corriente. Ejemplo de clase: el préstamo verbal «sin intereses» de la madre del profesor no lo libera del interés corriente.</p>
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
<ul><li><b>Invierten la carga de la prueba:</b> por regla general quien alega el pago debe probarlo (<span class="norma">art. 1698 CC</span>). Con estas presunciones, es el acreedor quien debe probar un hecho negativo, que no se le pagó (una prueba muy difícil).</li><li><b>Admiten prueba en contrario:</b> el acreedor puede desvirtuarlas, por ejemplo con su contabilidad o cartolas.</li></ul>
<h3 data-sub="pp-capital">3.12.2. Recibo de capital (art. 17 Ley 18.010)</h3>
<p>El recibo del capital hace presumir pagados los intereses y el reajuste. Se funda en la imputación del pago del <span class="norma">art. 1595 CC</span>: los pagos parciales se imputan primero a intereses y reajustes, y solo el saldo al capital. Si el acreedor da recibo del capital, se deduce que antes se pagaron los intereses.</p>
<h3 data-sub="pp-periodos">3.12.3. Recibos de períodos consecutivos (art. 18 Ley 18.010)</h3>
<p>El recibo de intereses de <b>tres períodos consecutivos</b> hace presumir pagados los anteriores. También se aplica a los recibos de capital pagadero en cuotas.</p>
<p>Ejemplo: si el deudor tiene los recibos de los meses 6, 7 y 8, se presumen pagados los meses 2 a 5. Un acreedor diligente no recibiría cuotas nuevas con cuotas antiguas en mora. La regla protege al deudor que pierde comprobantes antiguos.</p>
<h3 data-sub="pp-reserva">3.12.4. La protección del acreedor: la cláusula de reserva</h3>
<p>Para que no opere la presunción, el acreedor debe dejar una <b>reserva expresa en el recibo</b>: que recibe el capital pero quedan pendientes intereses y reajustes (art. 17), o que recibe los períodos recientes pero se deben períodos anteriores (art. 18).</p>
<ul><li><b>Ejemplo del arriendo:</b> si el arrendatario no pagó marzo ni abril y el arrendador firma recibos simples de mayo, junio y julio, se presume que marzo y abril están pagados. Debió anotar en el recibo de mayo que se le deben esos meses.</li><li><b>En la banca:</b> los recibos y cartolas traen reservas preimpresas, así que en la práctica estas presunciones casi no operan a favor del cliente.</li></ul>`
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
<h3 data-sub="cc-antiguo">3.14.1. Sistema antiguo</h3>
<ul><li>Cuando se dictó la Ley 18.010 (inicios de los 80), el sistema seguía la lógica del <b>financiamiento de la oferta</b>: el crédito iba casi solo a empresas y comerciantes.</li><li>La ley no se pensó para el deudor persona natural, ni para las asimetrías de información y los contratos de adhesión de la banca de personas.</li><li>Con el paso al <b>financiamiento de la demanda</b> (crédito masivo a personas y sobreendeudamiento), el legislador fue agregando reglas para proteger al consumidor: límites a comisiones, topes de la TMC y límites al anatocismo.</li></ul>
<h3 data-sub="cc-proconsumidor">3.14.2. Ley Pro Consumidor (21.398)</h3>
<p>Las reglas protectoras tienen sentido en el consumo, pero menos entre empresas, que negocian de igual a igual con asesoría técnica. Para el prepago, la ley actuó por dos vías: cambios a la propia Ley 18.010 que rigen para todos (abono mínimo del 20% al 10%) y derechos irrenunciables en la LPDC.</p>
<p>La ley reconoce como derechos del consumidor financiero los consagrados en la Ley 18.010 y en otras normas que protejan sus derechos (<span class="norma">art. 3° incs. 2° h) y 3° LPDC</span>). Entre ellos, el derecho a prepagar sin el límite de 5.000 UF (ver 3.9.5). Llama la atención porque trata a la Ley 18.010, una ley comercial general de 1981, como «ley referida a los derechos de los consumidores».</p>
<ul><li><b>Efectos:</b> las reglas de la Ley 18.010 pasan a ser <b>irrenunciables</b> para el consumidor y quedan bajo la fiscalización del <b>Sernac</b>.</li><li><b>Dualidad CMF–Sernac:</b> la CMF vela por la estabilidad y solvencia del mercado; el Sernac, por los derechos del consumidor. Un mismo cobro puede ser aceptado por una y calificado de abusivo por el otro, y hay riesgo de doble sanción (ver 3.7.5).</li></ul>
<div class="card"><p><span class="etiqueta azul">Caso Cencosud (tarjeta Jumbo Más)</span></p><p>Cencosud subió unilateralmente la comisión de administración de la tarjeta de $190 a $490 mensuales y avisó que usar la tarjeta o guardar silencio sería aceptación. La SBIF (hoy CMF) tenía circulares que permitían esos cambios informados. El Sernac demandó colectivamente: según el apunte, el <span class="norma">art. 12 LPDC</span> impide que el silencio del consumidor sea aceptación. La <b>Corte Suprema</b> le dio la razón al Sernac: las normas de consumo prevalecen sobre las circulares de la SBIF, y Cencosud debió restituir lo cobrado en exceso a más de dos millones de tarjetahabientes.</p></div>`
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
      { tipo: 'oral', seccion: 'mora-prepago', sub: 'mora-concepto', enunciado: '¿Qué reglas rigen el interés moratorio en las operaciones de crédito de dinero?', puntos: ['Art. 16: desde el retardo se debe el interés corriente vigente durante el retardo, salvo un interés penal pactado dentro de la TMC.', 'No exige la interpelación del art. 1551 CC.', 'Ley 21.314: no se aplica conjuntamente con otro interés sobre el mismo monto.', 'Solo sobre el capital efectivamente vencido (ejemplo de las 10 cuotas), salvo aceleración.', 'No se capitaliza.'], norma: 'Art. 16 Ley 18.010' },
      /* ---- Etapa 4: preguntas por subsección según el apunte completo de clases (agregadas al final) ---- */
      { tipo: 'alternativas', seccion: 'dinero', sub: 'dinero-funciones-lista', enunciado: '¿Qué función del dinero permite expresar el precio de todos los bienes en una sola unidad y así comparar alternativas?', opciones: ['Unidad de medida (unidad de cuenta)', 'Reserva de valor', 'Medio de pago', 'Poder liberatorio'], correcta: 0, explicacion: 'La unidad de medida sirve de estándar de valor. La reserva de valor mantiene la riqueza en forma líquida; el medio de pago extingue obligaciones y su atributo jurídico es el poder liberatorio.' },
      { tipo: 'vf', seccion: 'dinero', sub: 'dinero-funciones-lista', enunciado: 'Como reserva de valor, el dinero conserva la riqueza con menor riesgo relativo que los activos reales, que se deterioran y cuestan mantener.', respuesta: true, explicacion: 'Es la primera función del apunte: mantener la riqueza en forma líquida, a diferencia de autos, casas o ganado.' },
      { tipo: 'vf', seccion: 'dinero', sub: 'dinero-origen', enunciado: 'El trueque fue desplazado por la compraventa, un contrato cuyo precio se expresa en una unidad común: el dinero.', respuesta: true, explicacion: 'Para superar la dificultad de fraccionar y la doble coincidencia de deseos, la permuta dio paso a la compraventa con precio en dinero.' },
      { tipo: 'vf', seccion: 'medios-pago', sub: 'mp-nacionales', enunciado: 'La tarjeta de prepago solo puede emitirla un banco.', respuesta: false, explicacion: 'Puede emitirla una entidad no bancaria (Ley 20.950). Tiene límites de monto, salvo autenticación segura de identidad.' },
      { tipo: 'alternativas', seccion: 'medios-pago', sub: 'mp-nacionales', enunciado: '¿Qué distingue al vale vista del cheque?', opciones: ['Se emite contra un depósito previo, así que siempre tiene fondos', 'Solo puede usarse en comercio exterior', 'No está regulado por normas del Banco Central', 'Se paga siempre en moneda extranjera'], correcta: 0, explicacion: 'El vale vista (Cap. 2-6 RAN) se emite contra un depósito previo; el cheque (DFL 707) puede girarse sin fondos y protestarse.' },
      { tipo: 'vf', seccion: 'financiamiento', sub: 'fin-capital', enunciado: 'La sociedad está obligada a devolver el capital aportado por los accionistas en un plazo determinado.', respuesta: false, explicacion: 'El capital es un pasivo no exigible: se aporta de forma permanente y se retribuye solo con dividendos.' },
      { tipo: 'alternativas', seccion: 'financiamiento', sub: 'fin-capital', enunciado: '¿Qué derechos tiene el accionista, a cambio de asumir el riesgo residual?', opciones: ['Derechos políticos (voto en juntas) y económicos (dividendos)', 'Solo un derecho preferente sobre los flujos de caja', 'Solo covenants y cláusulas de aceleración', 'Un retorno pactado y topado'], correcta: 0, explicacion: 'La ley da al accionista derechos políticos junto a los económicos. Covenants, preferencia y retorno pactado son propios de la deuda.' },
      { tipo: 'vf', seccion: 'financiamiento', sub: 'fin-deuda', enunciado: 'Los intereses pagados por la deuda pueden deducirse tributariamente como gasto necesario para producir renta.', respuesta: true, explicacion: 'Es una diferencia con el capital, cuyas ganancias quedan gravadas con el impuesto a la ganancia de capital.' },
      { tipo: 'alternativas', seccion: 'hibridos', sub: 'hib-bancarios', enunciado: '¿Qué caracteriza a un bono perpetuo?', opciones: ['No tiene vencimiento del capital y el deudor paga intereses de forma perpetua', 'Se convierte en acciones al cumplirse una condición', 'Se paga antes que todos los acreedores valistas', 'No devenga intereses'], correcta: 0, explicacion: 'El capital solo se restituye si la empresa se disuelve o liquida; los intereses perpetuos lo acercan a la posición de un accionista.' },
      { tipo: 'alternativas', seccion: 'hibridos', sub: 'hib-generales', enunciado: '¿Qué permite un bono convertible?', opciones: ['Capitalizar la acreencia: la deuda se extingue y el acreedor pasa a ser accionista', 'Cobrar antes que los acreedores preferentes', 'Votar en las juntas sin ser accionista', 'Exigir el pago sin vencimiento'], correcta: 0, explicacion: 'Cumplidas ciertas condiciones, el acreedor puede transformar su crédito en acciones.' },
      { tipo: 'alternativas', seccion: 'tasas', sub: 'tasas-tic', enunciado: '¿Quién calcula la tasa de interés corriente y con qué periodicidad?', opciones: ['La CMF, mensualmente', 'El Banco Central, anualmente', 'Cada banco, para sus propios créditos', 'El Sernac, cada trimestre'], correcta: 0, explicacion: 'Art. 6°: la CMF calcula el promedio ponderado de las tasas de los bancos y lo publica en la primera quincena del mes siguiente.' },
      { tipo: 'vf', seccion: 'tasas', sub: 'tasas-tic', enunciado: 'La CMF fija una única tasa de interés corriente para todo el mercado.', respuesta: false, explicacion: 'Segmenta por reajustabilidad, moneda, monto (hasta dos tramos) y plazo.' },
      { tipo: 'vf', seccion: 'tasas', sub: 'tasas-tmc', enunciado: 'La TMC busca prevenir la usura sancionando el interés excesivo, no prohibiendo todo interés.', respuesta: true, explicacion: 'Se pasó de una prohibición absoluta del interés (hasta el siglo XIX) a sancionar solo los intereses excesivos.' },
      { tipo: 'alternativas', seccion: 'sanciones', sub: 'san-consumo', enunciado: 'Si un consumidor paga intereses sobre la TMC, ¿qué multa puede aplicarse según la LPDC?', opciones: ['Hasta 50 UTM (art. 24 LPDC)', 'Hasta 5.000 UF', 'Hasta 25.000 UF', 'No hay multa, solo reducción del interés'], correcta: 0, explicacion: 'Es una infracción al art. 39 LPDC, con la multa genérica del art. 24. Las 5.000 y 25.000 UF son de la CMF.' },
      { tipo: 'alternativas', seccion: 'sanciones', sub: 'san-cmf', enunciado: 'Si una institución fiscalizada reitera la infracción a la TMC dentro de doce meses, ¿hasta cuánto puede llegar la multa de la CMF?', opciones: ['25.000 UF', '5.000 UF', '50 UTM', '10.000 UF'], correcta: 0, explicacion: 'La multa base es de hasta 5.000 UF (art. 33 Ley 18.010 y art. 19 LGB); con reiteración puede multiplicarse hasta por cinco.' },
      { tipo: 'vf', seccion: 'sanciones', sub: 'san-penal', enunciado: 'Si un extranjero nacionalizado chileno reincide en el delito de usura, pierde la nacionalidad y es expulsado.', respuesta: true, explicacion: 'Art. 472 CP. Si el condenado es extranjero, se le expulsa; si es nacionalizado y reincide, pierde la nacionalidad y se le expulsa.' },
      { tipo: 'alternativas', seccion: 'sanciones', sub: 'san-nonbis', enunciado: '¿Por qué se discute el principio non bis in idem cuando un banco cobra sobre la TMC a un consumidor?', opciones: ['Porque enfrenta a la vez dos sanciones administrativas (LPDC y CMF) por el mismo hecho', 'Porque la sanción civil anula el contrato', 'Porque la usura no tiene pena', 'Porque la CMF no puede multar a bancos'], correcta: 0, explicacion: 'Concurren la sanción civil, la penal y dos administrativas. Parte de la doctrina cuestiona la doble vía administrativa; en la práctica se aplican todas.' },
      { tipo: 'alternativas', seccion: 'anatocismo', sub: 'ana-caso', enunciado: 'Un crédito de $100.000 al 10% mensual, capitalizable cada 30 días. ¿Cuánto se debe a los 90 días?', opciones: ['$133.100', '$130.000', '$121.000', '$110.000'], correcta: 0, explicacion: '$110.000 a los 30 días, $121.000 a los 60 y $133.100 a los 90: cada interés se suma al capital.' },
      { tipo: 'vf', seccion: 'anatocismo', sub: 'ana-caso', enunciado: 'En la capitalización pactada durante la vigencia del crédito, el deudor está en mora.', respuesta: false, explicacion: 'No hay incumplimiento: es una fórmula pactada que difiere el pago de los intereses. La mora es el supuesto del anatocismo legal (3.8.3).' },
      { tipo: 'alternativas', seccion: 'anatocismo', sub: 'ana-jackson', enunciado: '¿Qué proponía originalmente la indicación del diputado Jackson?', opciones: ['Eliminar el anatocismo, limitarlo a obligaciones de hasta 5.000 UF y topar el moratorio en la TIC', 'Derogar el art. 9° y subir la TMC', 'Permitir capitalizar el interés moratorio', 'Prohibir el prepago'], correcta: 0, explicacion: 'Así lo describe el apunte. Al final no se tocó el art. 9°, lo que generó incertidumbre.' },
      { tipo: 'alternativas', seccion: 'anatocismo', sub: 'ana-critica', enunciado: '¿Qué incentivo perverso se advirtió en la propuesta de topar el interés moratorio en la TIC?', opciones: ['Si el interés pactado está cerca de la TMC, al deudor le convendría dejar de pagar', 'Los bancos subirían la TIC', 'Los deudores prepagarían todos sus créditos', 'Desaparecería el interés corriente'], correcta: 0, explicacion: 'Al caer en mora, la tasa bajaría por ley, haciendo rentable el incumplimiento. Ojo: las fuentes no coinciden en quién formuló la crítica (ver el callout de 3.8.4.2).' },
      { tipo: 'alternativas', seccion: 'prepago', sub: 'pre-no-reajustables', enunciado: 'En una operación no reajustable, ¿cuál es la comisión máxima de prepago?', opciones: ['Un mes de intereses pactados sobre el capital que se prepaga', 'Un mes y medio de intereses', 'El 10% del saldo', 'Todos los intereses que faltaban'], correcta: 0, explicacion: 'Art. 10: un mes en las no reajustables; un mes y medio, sobre el capital reajustado, en las reajustables.' },
      { tipo: 'alternativas', seccion: 'prepago', sub: 'pre-por-que', enunciado: '¿Por qué la ley limita la comisión de prepago a uno o un mes y medio de intereses?', opciones: ['Porque supone que en ese plazo el acreedor puede volver a colocar el dinero', 'Porque es el plazo de gracia de las tarjetas', 'Porque así lo fija la CMF cada mes', 'Porque el deudor está en mora'], correcta: 0, explicacion: 'La comisión compensa parcialmente el descalce; el negocio financiero es dinámico. Las reajustables tienen medio mes más porque recolocarlas es más complejo.' },
      { tipo: 'alternativas', seccion: 'prepago', sub: 'pre-proconsumidor', enunciado: '¿Dónde quedó consagrado el prepago sin límite de monto para el consumidor financiero?', opciones: ['Art. 3° inc. 2° letra h) LPDC', 'Art. 17 D LPDC', 'Art. 9° Ley 18.010', 'Art. 31 LOC Banco Central'], correcta: 0, explicacion: 'Lo incorporó la Ley Pro Consumidor (21.398). Primero se pensó en el art. 17 D, pero se reguló de forma autónoma en el art. 3°.' },
      { tipo: 'alternativas', seccion: 'prepago', sub: 'pre-tope', enunciado: '¿Por qué la Ley 18.010 fijó originalmente el tope de 5.000 UF para prepagar sin consentimiento del acreedor?', opciones: ['Para proteger a deudores de créditos de consumo de mediano o menor tamaño', 'Para proteger a los grandes financiamientos corporativos', 'Porque era el monto máximo de un crédito hipotecario', 'Para cumplir una exigencia del Banco Central'], correcta: 0, explicacion: 'Con el alza de la vivienda, el tope dejó fuera a muchos deudores hipotecarios de clase media.' },
      { tipo: 'vf', seccion: 'prepago', sub: 'pre-origen', enunciado: 'El mensaje original de la Ley Pro Consumidor buscaba regular el prepago dentro del art. 17 D de la LPDC.', respuesta: true, explicacion: 'Se consideró demasiado importante para quedar en esa norma miscelánea y se reguló en el art. 3° inc. 2° letra h).' },
      { tipo: 'relacionar', seccion: 'prepago', sub: 'pre-razones', enunciado: 'Relaciona cada situación con la razón para prepagar.', pares: [['El deudor recibe una herencia', 'Liquidez extraordinaria'], ['Otro banco ofrece mejores condiciones', 'Portabilidad y refinanciamiento']], explicacion: 'El apunte da estas dos razones para prepagar.' },
      { tipo: 'vf', seccion: 'prepago', sub: 'pre-refinanciar', enunciado: 'Refinanciar conviene cuando las tasas de mercado bajan bastante respecto de la tasa fija pactada.', respuesta: true, explicacion: 'Se pide un crédito más barato a otro banco, con él se prepaga la deuda cara y se queda pagando una cuota menor.' },
      { tipo: 'vf', seccion: 'prepago', sub: 'pre-irrenunciable', enunciado: 'Es válida la cláusula de un contrato de adhesión que prohíbe al consumidor financiero prepagar su crédito.', respuesta: false, explicacion: 'El derecho a prepagar es irrenunciable para el consumidor financiero; esa cláusula se tiene por no escrita.' },
      { tipo: 'alternativas', seccion: 'prepago', sub: 'pre-irrenunciable', enunciado: 'Un consumidor con un crédito de consumo de $5.000.000 gana un premio y quiere pagarlo completo. ¿Qué puede cobrarle el banco?', opciones: ['El capital más un mes de intereses (comisión de prepago no reajustable)', 'Todos los intereses hasta el vencimiento', 'Nada: el banco puede negarse a recibir el pago', 'El capital más un mes y medio de intereses'], correcta: 0, explicacion: 'Ejemplo «del Kino»: el banco no puede negarse; solo cobra la comisión máxima de las operaciones no reajustables.' },
      { tipo: 'vf', seccion: 'forma-onerosidad', sub: 'fo-mutuo', enunciado: 'En el mutuo civil pueden pactarse intereses en cosas de la misma naturaleza que las prestadas.', respuesta: true, explicacion: 'Art. 2205 CC (prestar 5 ovejas y recibir 6). En la OCD los intereses solo pueden pactarse en dinero (art. 11 Ley 18.010).' },
      { tipo: 'vf', seccion: 'forma-onerosidad', sub: 'fo-onerosidad', enunciado: 'En el mutuo civil, si nada se dice sobre intereses, el deudor debe el interés corriente.', respuesta: false, explicacion: 'El mutuo civil es gratuito por naturaleza: los intereses deben pactarse. La OCD, en cambio, devenga interés corriente si nada se dice (art. 12).' },
      { tipo: 'alternativas', seccion: 'forma-onerosidad', sub: 'fo-escrituracion', enunciado: 'En una OCD las partes pactan verbalmente que el préstamo será gratuito. ¿Qué efecto tiene ese pacto?', opciones: ['Es ineficaz en juicio y se debe el interés corriente', 'Es válido, porque el pacto verbal basta', 'Anula toda la operación', 'Obliga a pagar la tasa máxima convencional'], correcta: 0, explicacion: 'Art. 14: la estipulación de intereses o la que exonera de pagarlos debe constar por escrito (solemnidad probatoria).' },
      { tipo: 'vf', seccion: 'mora-prepago', sub: 'mora-concepto', enunciado: 'El interés moratorio de una OCD solo se devenga después de la interpelación del art. 1551 CC.', respuesta: false, explicacion: 'Art. 16: se devenga desde el retardo, sin requerir interpelación.' },
      { tipo: 'alternativas', seccion: 'presunciones-pago', sub: 'pp-concepto', enunciado: '¿Qué efecto tienen las presunciones de pago de los arts. 17 y 18 en la carga de la prueba?', opciones: ['La invierten: el acreedor debe probar que no se le pagó, aunque puede presentar prueba en contrario', 'Obligan al deudor a probar el pago con escritura pública', 'Impiden toda prueba en contrario', 'No alteran la regla del art. 1698 CC'], correcta: 0, explicacion: 'Son presunciones simplemente legales: invierten la carga (art. 1698 CC) y admiten prueba en contrario, como cartolas o la contabilidad del acreedor.' },
      { tipo: 'alternativas', seccion: 'presunciones-pago', sub: 'pp-capital', enunciado: 'El acreedor otorga recibo del capital. ¿Qué se presume y en qué se funda?', opciones: ['Que se pagaron los intereses y el reajuste; se funda en la imputación del pago del art. 1595 CC', 'Que el deudor no debe nada más por ningún concepto, aunque haya otras deudas', 'Que se pagaron las tres cuotas anteriores; se funda en el art. 18', 'Nada: el recibo de capital no produce presunción'], correcta: 0, explicacion: 'Art. 17. Como los pagos se imputan primero a intereses y reajustes, si se recibió el capital se deduce que los intereses ya estaban pagados.' },
      { tipo: 'vf', seccion: 'presunciones-pago', sub: 'pp-periodos', enunciado: 'La presunción del art. 18 también se aplica a los recibos de capital cuando este se paga en cuotas.', respuesta: true, explicacion: 'Así lo dispone el mismo art. 18. Ejemplo: recibos de los meses 6, 7 y 8 hacen presumir pagados los meses 2 a 5.' },
      { tipo: 'alternativas', seccion: 'presunciones-pago', sub: 'pp-reserva', enunciado: '¿Cómo evita el acreedor que operen las presunciones de pago?', opciones: ['Dejando una reserva expresa en el recibo sobre lo que sigue pendiente', 'Negándose a recibir cualquier pago parcial', 'Inscribiendo la deuda en el Conservador', 'Avisando a la CMF'], correcta: 0, explicacion: 'Con una cláusula de reserva. En la banca, los recibos y cartolas traen reservas preimpresas.' },
      { tipo: 'alternativas', seccion: 'credito-consumo', sub: 'cc-antiguo', enunciado: 'Cuando se dictó la Ley 18.010, ¿bajo qué lógica funcionaba el crédito en Chile?', opciones: ['Financiamiento de la oferta: crédito casi solo para empresas y comerciantes', 'Financiamiento de la demanda: crédito masivo a personas', 'Crédito exclusivamente estatal', 'Crédito solo en moneda extranjera'], correcta: 0, explicacion: 'La ley no se pensó para el deudor persona natural. Con el paso al financiamiento de la demanda se agregaron reglas protectoras.' },
      { tipo: 'alternativas', seccion: 'credito-consumo', sub: 'cc-proconsumidor', enunciado: 'La Ley Pro Consumidor reconoce como derechos del consumidor financiero los de la Ley 18.010. ¿Qué efectos prácticos tiene?', opciones: ['Esos derechos se vuelven irrenunciables y quedan bajo la fiscalización del Sernac', 'La Ley 18.010 deja de aplicarse a las empresas', 'La CMF pierde toda competencia sobre los bancos', 'Se elimina la tasa máxima convencional'], correcta: 0, explicacion: 'Es lo que destaca el apunte. A la vez genera una dualidad CMF–Sernac, con riesgo de criterios distintos y de doble sanción.' },
      { tipo: 'vf', seccion: 'credito-consumo', sub: 'cc-proconsumidor', enunciado: 'En el caso Cencosud (tarjeta Jumbo Más), la Corte Suprema resolvió que las circulares de la SBIF prevalecían sobre las normas de protección al consumidor.', respuesta: false, explicacion: 'Falló a favor del Sernac: las normas de consumo prevalecen y el silencio del consumidor no es aceptación. Cencosud debió restituir lo cobrado en exceso.' },
      { tipo: 'oral', seccion: 'presunciones-pago', enunciado: 'Explique las presunciones de pago de la Ley 18.010 y cómo puede protegerse el acreedor.', puntos: ['Arts. 17 y 18: presunciones simplemente legales; invierten la carga de la prueba (art. 1698 CC) y admiten prueba en contrario.', 'Art. 17: el recibo del capital hace presumir pagados intereses y reajuste; se funda en la imputación del art. 1595 CC.', 'Art. 18: el recibo de tres períodos consecutivos hace presumir pagados los anteriores; también para capital en cuotas.', 'El acreedor se protege con una reserva expresa en el recibo; en la banca, reservas preimpresas.'], norma: 'Arts. 17 y 18 Ley 18.010; arts. 1595 y 1698 CC' },
      { tipo: 'oral', seccion: 'credito-consumo', enunciado: '¿Cómo se relaciona la Ley 18.010 con la protección del consumidor financiero?', puntos: ['La Ley 18.010 nació bajo el financiamiento de la oferta, pensada para empresas.', 'Con el crédito masivo a personas se agregaron reglas protectoras (comisiones, TMC, anatocismo).', 'Ley Pro Consumidor: abono mínimo de prepago del 10% y prepago sin límite de 5.000 UF para el consumidor (art. 3° inc. 2° letra h) LPDC).', 'Los derechos de la Ley 18.010 pasan a ser irrenunciables y los fiscaliza el Sernac; dualidad con la CMF (caso Cencosud).'], norma: 'Ley 18.010; Ley 21.398; art. 3° inc. 2° letra h) LPDC' },
      /* ---- Etapa 5: preguntas de razonamiento (borrador de NotebookLM, revisadas contra el apunte completo de clases; agregadas al final) ---- */
      { tipo: 'alternativas', seccion: 'dinero', sub: 'dinero-naturaleza', enunciado: 'Según la doctrina de Gisela López, ¿por qué las deudas de dinero son una «obligación lítrica» y no una simple obligación de género?', opciones: ['Porque recaen sobre una unidad de medida abstracta que el ordenamiento regula (reajuste, límites de interés, forma de cálculo)', 'Porque se extinguen de pleno derecho si la inflación devalúa la moneda', 'Porque solo pueden pagarse con divisas autorizadas por el Banco Central', 'Porque obligan a entregar los mismos billetes individualizados al contratar'], correcta: 0, explicacion: 'A las partes no les importa el billete físico, sino el valor que representa. La inflación no extingue la deuda: se enfrenta con reajustes pactados.' },
      { tipo: 'alternativas', seccion: 'medios-pago', sub: 'mp-exterior', enunciado: 'Un exportador duda entre cobranza extranjera y carta de crédito. ¿Cuál es la diferencia de fondo en la garantía de pago?', opciones: ['En la cobranza los bancos solo gestionan documentos sin garantizar el pago; en la carta de crédito el banco emisor se obliga directamente a pagar contra documentos conformes', 'La cobranza se rige por las UCP 600 y la carta de crédito por el Código Civil', 'En la carta de crédito los bancos no revisan documentos y solo fiscalizan la aduana', 'La cobranza exige depositar el precio en una notaría y la carta de crédito no usa documentos'], correcta: 0, explicacion: 'Las UCP 600 rigen la carta de crédito, no la cobranza. En ambas circulan documentos (factura, B/L); la diferencia es si un banco garantiza el pago.' },
      { tipo: 'alternativas', seccion: 'financiamiento', sub: 'fin-capital', enunciado: '¿Qué rasgo es propio del financiamiento con capital y no del financiamiento con deuda?', opciones: ['El aportante cobra al final, con un derecho residual sobre los flujos y la liquidación', 'El inversionista puede exigir covenants de hacer y de no hacer', 'La retribución puede deducirse como gasto necesario para producir renta', 'La retribución es exigible haya o no utilidades'], correcta: 0, explicacion: 'Las otras tres son rasgos de la deuda: covenants para el acreedor sin voto, intereses deducibles y pago obligatorio. El capital se retribuye con dividendos, que dependen de las utilidades.' },
      { tipo: 'alternativas', seccion: 'ocd', enunciado: '¿Cuándo una operación de crédito de dinero es un contrato consensual y no real?', opciones: ['Cuando el acreedor no entrega el dinero al celebrarla, sino que se obliga a entregarlo después', 'Cuando se celebra entre particulares, sin una institución regulada', 'Cuando la deuda se documenta en un pagaré o un cheque', 'Cuando se pacta la gratuidad solo de palabra'], correcta: 0, explicacion: 'El art. 1° dice «entrega o se obliga a entregar». Si solo se promete (p. ej. un cupo de tarjeta), el contrato queda perfecto por el consentimiento. El pagaré o el cheque son una regla de asimilación al dinero, no de perfeccionamiento.' },
      { tipo: 'alternativas', seccion: 'ocd', enunciado: '¿Por qué el art. 1° de la Ley 18.010 excluye el préstamo marítimo y el avío minero?', opciones: ['Porque la restitución es incierta: depende del azar (que el barco llegue o que la mina produzca)', 'Porque recaen solo sobre inmuebles o naves inscritas', 'Porque en ellos está prohibido cobrar intereses', 'Porque se rigen por la Ley 19.496 de protección al consumidor'], correcta: 0, explicacion: 'En la OCD hay obligación de restituir al menos el capital. En el préstamo a la gruesa ventura, si el barco naufraga el deudor no paga; en el avío minero, si no se encuentra mineral, no hay devolución.' },
      { tipo: 'alternativas', seccion: 'reajuste', enunciado: '¿Cuál es la regla sobre reajustabilidad en las operaciones de crédito de dinero?', opciones: ['El reajuste no se presume: si no se pacta, rige el nominalismo (DL 1.123) y se paga la misma suma nominal', 'Toda OCD se reajusta de pleno derecho por IPC', 'Los bancos pueden diseñar libremente cualquier sistema de reajuste', 'Entre particulares está prohibido indexar a mercaderías o divisas'], correcta: 0, explicacion: 'Lo que la ley presume es el interés corriente (art. 12), no el reajuste. Los bancos solo usan sistemas autorizados por el Banco Central; entre particulares rige la libertad de pacto (cobre, petróleo, una bandeja de huevos).' },
      { tipo: 'alternativas', seccion: 'interes', enunciado: 'En el caso Cofisa, ¿qué rasgos del cobro de administración variable llevaron a la Corte Suprema a calificarlo como interés?', opciones: ['Era accesorio, se devengaba periódicamente y dependía del capital y del número de cuotas', 'Se pagaba con vales vista en vez de cheques', 'No se había publicado en el Diario Oficial', 'Superaba las 50 UTM de la LPDC'], correcta: 0, explicacion: 'Un cobro periódico y ligado al capital y al plazo tiene las características de un fruto civil, es decir, de un interés. Las 50 UTM son el tope de la multa de la LPDC, no un criterio para calificar el cobro.' },
      { tipo: 'alternativas', seccion: 'interes-comision', sub: 'com-ncg', enunciado: 'Una entidad cobra una comisión por un servicio que nunca prestó. ¿Qué consecuencia le asigna la regulación (art. 19 ter y NCG 484)?', opciones: ['El cobro se considera interés y se suma a la tasa para revisar si excede la TMC', 'El contrato de crédito es nulo y el deudor queda liberado del capital', 'La operación se transforma en una donación', 'La CMF ordena devolver el doble del capital'], correcta: 0, explicacion: 'En el derecho común, pagar por un servicio inexistente sería un pago sin causa, o un incumplimiento si el servicio no se ejecutó. La norma no aplica esa solución: recalifica el cobro como interés. Es una de las críticas del profesor a la NCG 484.' },
      { tipo: 'alternativas', seccion: 'tasas', sub: 'tasas-general', enunciado: 'La TIC para operaciones no reajustables sobre 5.000 UF es 8% anual. ¿Cuál es la TMC según el art. 6°?', opciones: ['12%', '10%', '22%', '16%'], correcta: 0, explicacion: 'Se comparan dos cálculos: 8% × 1,5 = 12% y 8% + 2 pp = 10%. Rige el mayor. Los recargos de 14 o 21 pp son del art. 6 bis (hasta 200 UF), y el multiplicador es 1,5, no 2.' },
      { tipo: 'alternativas', seccion: 'tasas', sub: 'tasas-descuento', enunciado: '¿Por qué los créditos con descuento por planilla tienen el tope de TMC más bajo del art. 6 bis (TIC base + 7 pp)?', opciones: ['Porque el empleador o la AFP descuentan la cuota antes de que el deudor reciba el sueldo o la pensión, y el riesgo de impago es casi nulo', 'Porque el Fisco avala estos créditos', 'Porque se otorgan en moneda extranjera', 'Porque no devengan intereses remuneratorios'], correcta: 0, explicacion: 'El pago no depende de la voluntad del deudor. A menor riesgo, la ley fija una menor rentabilidad máxima.' },
      { tipo: 'alternativas', seccion: 'prepago', sub: 'pre-5000', enunciado: '¿Qué cambió la Ley Pro Consumidor (21.398) respecto del límite de 5.000 UF para prepagar sin consentimiento del acreedor?', opciones: ['Lo eliminó para las operaciones financieras de consumo', 'Lo mantuvo y subió la comisión de prepago', 'Exigió autorización de la CMF para prepagos sobre 2.000 UF', 'Lo subió a 10.000 UF solo para créditos corporativos'], correcta: 0, explicacion: 'Art. 3° inc. 2° letra h) LPDC: el consumidor puede prepagar con independencia del capital adeudado. Fuera del consumo sigue rigiendo el art. 10, con su límite de 5.000 UF.' },
      { tipo: 'alternativas', seccion: 'moneda-extranjera', enunciado: 'Una empresa debía pagar un pagaré por US$ 10.000 (art. 20) el 15 de agosto, con dólar vendedor a $950. Paga atrasada el 19 de agosto, con el dólar a $930. ¿Cuánto debe pagar?', opciones: ['$9.500.000, al tipo de cambio del vencimiento, porque es superior', '$9.300.000, al tipo de cambio del día del pago', '$9.400.000, el promedio de ambas fechas', 'Lo que fije el acreedor'], correcta: 0, explicacion: 'Art. 20: en obligaciones vencidas se aplica el tipo de cambio del vencimiento si es superior al del pago. El deudor no puede beneficiarse de su propia mora. Si el dólar hubiera subido a $970, pagaría $9.700.000.' },
      { tipo: 'alternativas', seccion: 'interes-comision', sub: 'com-ncg', enunciado: '¿Cuál de estos NO es un requisito de la NCG 484 para que un cobro sea comisión y no interés?', opciones: ['Que se calcule como un porcentaje del capital adeudado', 'Que el servicio sea distinto de los inherentes a la operación de crédito', 'Que el servicio sea real y efectivamente prestado', 'Que se calcule en base al costo de prestar el servicio'], correcta: 0, explicacion: 'Es al revés: un cobro que depende del capital no retribuye un servicio, sino el uso del dinero (caso Cofisa). Los otros tres sí son requisitos, junto con la información y aceptación previas y la publicidad por los mismos canales.' },
      { tipo: 'alternativas', seccion: 'presunciones-pago', sub: 'pp-periodos', enunciado: '¿Cuál de estas afirmaciones sobre las presunciones de pago de los arts. 17 y 18 es INCORRECTA?', opciones: ['El recibo de intereses de dos períodos consecutivos hace presumir pagados los anteriores', 'El recibo del capital hace presumir pagados los intereses y el reajuste', 'El recibo de tres cuotas consecutivas de capital hace presumir pagadas las anteriores', 'El acreedor puede desvirtuarlas con prueba en contrario'], correcta: 0, explicacion: 'El art. 18 exige tres períodos consecutivos, no dos. Las otras son correctas: art. 17, art. 18 aplicado al capital en cuotas y su carácter de presunciones simplemente legales.' },
      { tipo: 'alternativas', seccion: 'mora-prepago', sub: 'mora-regla', enunciado: '¿Cuál de estas afirmaciones sobre el interés moratorio tras la reforma del art. 16 es INCORRECTA?', opciones: ['Puede calcularse sobre todo el saldo del crédito aunque no haya cláusula de aceleración', 'No puede aplicarse conjuntamente con otro interés sobre un mismo monto', 'Solo se calcula sobre el capital efectivamente vencido', 'No puede capitalizarse'], correcta: 0, explicacion: 'Sin aceleración, el moratorio corre solo sobre lo vencido: si no se paga una cuota de $100.000 de un crédito de $1.000.000, corre sobre $100.000. Las otras tres son las reglas del art. 16.' },
      { tipo: 'alternativas', seccion: 'forma-onerosidad', sub: 'fo-mutuo', enunciado: '¿Cuál de estas diferencias entre el mutuo civil y la OCD es INCORRECTA?', opciones: ['El mutuo civil es oneroso por naturaleza y la OCD es gratuita salvo pacto', 'El mutuo civil recae sobre cualquier cosa fungible; la OCD, sobre dinero o documentos asimilados', 'En la OCD los intereses solo pueden pactarse en dinero; en el mutuo civil, también en cosas del mismo género', 'Prestar 5 ovejas y recibir 6 es válido como mutuo civil, pero no puede pactarse en ovejas el interés de un préstamo de dinero'], correcta: 0, explicacion: 'Es al revés: el mutuo civil es gratuito por naturaleza (art. 2206 CC) y la OCD devenga interés corriente salvo ley o pacto en contrario (art. 12 Ley 18.010).' },
      { tipo: 'alternativas', seccion: 'anatocismo', sub: 'ana-cmf', enunciado: 'Según el oficio de la CMF de 26 de abril de 2021, ¿cuál de estas prácticas sigue PERMITIDA?', opciones: ['Pactar la capitalización de intereses remuneratorios no vencidos cada 30 días o más', 'Capitalizar los intereses moratorios cada 30 días', 'Cobrar interés moratorio sobre las cuotas futuras no vencidas sin cláusula de aceleración', 'Pactar la capitalización de intereses remuneratorios cada 15 días'], correcta: 0, explicacion: 'El art. 9° sigue vigente: se pueden capitalizar los remuneratorios no vencidos (con pacto y mínimo de 30 días) y los del capital vencido (art. 9° inc. 3°). Lo prohibido es capitalizar el moratorio y cobrarlo sobre capital no vencido.' },
      { tipo: 'alternativas', seccion: 'sanciones', sub: 'san-infracciones', enunciado: 'Un banco cobra a un consumidor intereses sobre la TMC. ¿Cuál de estas consecuencias NO corresponde?', opciones: ['Los intereses se reducen a la tasa máxima convencional', 'El pacto se tiene por no escrito y los intereses se reducen al interés corriente', 'Multa de hasta 50 UTM por la LPDC', 'Multa de la CMF de hasta 5.000 UF, o hasta 25.000 UF si reitera dentro de doce meses'], correcta: 0, explicacion: 'La reducción es al interés corriente, no a la TMC (art. 8°). Las otras sanciones concurren, junto con la pena por usura (art. 472 CP); por eso se discute el non bis in idem.' },
      { tipo: 'oral', seccion: 'mora-prepago', sub: 'mora-regla', enunciado: '¿En qué consiste la incompatibilidad entre el interés remuneratorio y el moratorio del art. 16 de la Ley 18.010?', puntos: ['Al producirse el retardo, sobre el monto atrasado cesa el interés remuneratorio y corre solo el moratorio: no se cobran ambos sobre un mismo monto.', 'El moratorio es el interés corriente vigente durante el retardo, salvo un interés penal pactado dentro de la TMC.', 'Solo se cobra sobre el capital efectivamente vencido, salvo cláusula de aceleración.', 'No se capitaliza (Ley 21.314).'], norma: 'Art. 16 Ley 18.010' },
      { tipo: 'oral', seccion: 'moneda-extranjera', enunciado: 'Explique la diferencia entre una obligación expresada en moneda extranjera y una pagadera en moneda extranjera.', puntos: ['Expresada: se valora en divisas, pero se paga en pesos según la equivalencia del art. 20.', 'Art. 20: tipo de cambio vendedor del día del pago, certificado por un banco de la plaza; si está vencida, el del vencimiento si es superior.', 'Pagadera: el objeto del pago es la divisa misma (p. ej. billetes de dólar); el deudor no puede obligar al acreedor a recibir pesos, salvo que este acepte.', 'Art. 24: en las expresadas en moneda extranjera y pagaderas en pesos no cabe otro reajuste que la variación cambiaria.'], norma: 'Arts. 20 y 24 Ley 18.010' },
      { tipo: 'oral', seccion: 'credito-consumo', sub: 'cc-proconsumidor', enunciado: '¿Por qué se produce un conflicto entre la CMF y el Sernac en las operaciones de crédito tras la Ley Pro Consumidor?', puntos: ['La Ley Pro Consumidor reconoce como derechos del consumidor financiero los de la Ley 18.010: se vuelven irrenunciables y los fiscaliza el Sernac.', 'La CMF vela por la estabilidad y solvencia del mercado financiero; el Sernac, por los derechos del consumidor.', 'Un mismo cobro puede ser aceptado por la CMF y calificado de abusivo por el Sernac. Caso Cencosud: la Corte Suprema hizo prevalecer las normas de consumo sobre las circulares de la SBIF.', 'Hay riesgo de doble sanción administrativa (non bis in idem): multas de la CMF y de la LPDC por el mismo hecho.'], norma: 'Ley 21.398; art. 3° inc. 2° letra h) LPDC' },
    ]
  });
})();
