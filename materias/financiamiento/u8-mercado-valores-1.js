/* Unidad 8 — Mercado de valores I: los valores (clases 12 a 15 del Prof. Gaspar).
   Fuentes: apuntes de clases del Prof. Gaspar (lecturas: Mardones II; Guzmán y Guerrero). */
(function () {
  var fmt = function (n) { return Number(n).toLocaleString('es-CL'); };

  Estudio.registrarUnidad({
    id: 'u8', numero: 8, bloque: 'Prof. Gaspar', profesor: 'Gaspar',
    titulo: 'Mercado de valores I: los valores',
    resumen: 'Para qué sirve el mercado de valores (riesgos de solvencia y de liquidez), qué es un «valor» en la LMV y el test de Howey, renta fija y variable, acciones y cuotas de fondos (casos Aurus y Sartor), bonos y efectos de comercio, securitización y crisis subprime.',
    lecturas: 'Apuntes de clases del Prof. Gaspar (clases 12 a 15 del cronograma). Lecturas: Mardones, tomo II, pp. 319-329, 223-232, 104-123, 232-246 y 202-210; Guzmán y Guerrero, pp. 3-21. Norma principal: Ley 18.045 de Mercado de Valores (LMV) y Ley 20.712 (LUF).',

    glosario: [
      { termino: 'Valor', definicion: 'Cualesquiera títulos transferibles incluyendo acciones, opciones a la compra y venta de acciones, bonos, debentures, cuotas de fondos mutuos, planes de ahorro, efectos de comercio y, en general, todo título de crédito o inversión.', fuente: 'Art. 3° inc. 1° LMV', seccion: 'valor', literal: true, alias: ['valores', 'valores de oferta publica'] },
      { termino: 'Riesgo de solvencia', definicion: 'Probabilidad de que el deudor no devuelva el capital y los intereses al vencimiento; se evalúa obteniendo y procesando información.', fuente: 'Apuntes de clases', seccion: 'intro', alias: ['riesgo de no pago'] },
      { termino: 'Riesgo de liquidez', definicion: 'Expectativa del inversionista de poder convertir su inversión en dinero cuando lo necesite; el mercado de capitales busca instrumentos que permitan vender rápido.', fuente: 'Apuntes de clases', seccion: 'intro' },
      { termino: 'Spread bancario', definicion: 'Diferencia entre la tasa de colocación (lo que el banco cobra por prestar) y la tasa de captación (lo que paga a los depositantes).', fuente: 'Apuntes de clases', seccion: 'intro' },
      { termino: 'Test de Howey', definicion: 'Criterio estadounidense para saber si hay un contrato de inversión (security): (1) entrega de dinero, (2) expectativa de ganancia y (3) ganancia que proviene de la actividad de un tercero.', fuente: 'SEC v. W.J. Howey Co.; apuntes', seccion: 'howey', alias: ['howey', 'caso howey', 'contrato de inversion'] },
      { termino: 'Instrumento financiero', definicion: 'Categoría amplia de la Ley Fintech que abarca bienes corporales e incorporales, contratos, activos electrónicos y criptoactivos; quedan fuera el dinero y las divisas y los valores de oferta pública.', fuente: 'Ley Fintech, art. 3°; apuntes', seccion: 'howey', alias: ['instrumentos financieros', 'ley fintech'] },
      { termino: 'Renta variable', definicion: 'Valores cuya rentabilidad es aleatoria y contingente, sin obligación de devolver una suma determinada (acciones, cuotas de fondos).', fuente: 'Apuntes de clases', seccion: 'clasificacion', alias: ['titulos de renta variable'] },
      { termino: 'Renta fija', definicion: 'Títulos de deuda en que el emisor se compromete a devolver el capital más intereses o reajustes en un plazo prefijado (bonos, efectos de comercio); el riesgo es la insolvencia del emisor.', fuente: 'Apuntes de clases', seccion: 'clasificacion', alias: ['titulos de renta fija'] },
      { termino: 'Patrimonio de afectación', definicion: 'Conjunto de activos y pasivos afectos a un fin, sin personalidad jurídica, administrado por un tercero y separado de su patrimonio (por ejemplo, un fondo).', fuente: 'Apuntes de clases', seccion: 'acciones-fondos', alias: ['patrimonio separado'] },
      { termino: 'Fondo mutuo', definicion: 'Fondo en que el aportante puede pedir en cualquier momento el rescate de sus cuotas al valor cuota vigente; la administradora debe liquidar activos y pagar.', fuente: 'Ley 20.712; apuntes', seccion: 'acciones-fondos', alias: ['fondos mutuos'] },
      { termino: 'Fondo de inversión', definicion: 'Fondo en que el aportante no puede exigir el rescate hasta el término del plazo (salvo que el reglamento lo permita); obtiene liquidez vendiendo la cuota. Tiene asamblea de aportantes y comité de vigilancia.', fuente: 'Ley 20.712; apuntes', seccion: 'acciones-fondos', alias: ['fondos de inversion'] },
      { termino: 'Administradora General de Fondos', definicion: 'Sociedad anónima especial, autorizada y fiscalizada por la CMF, que administra fondos mutuos y de inversión; crea un fondo depositando su reglamento interno en la CMF.', fuente: 'Ley 20.712; apuntes', seccion: 'acciones-fondos', alias: ['agf'] },
      { termino: 'Fondo de inversión privado', definicion: 'Fondo con un número acotado de aportantes, fuera de la oferta pública y de la fiscalización directa de la LMV y la LUF.', fuente: 'Apuntes de clases', seccion: 'acciones-fondos', alias: ['fip'] },
      { termino: 'Bono', definicion: 'Título de deuda de largo plazo emitido en serie; los tenedores actúan colectivamente por un representante y una junta de tenedores.', fuente: 'Título XVI LMV (art. 103); apuntes', seccion: 'deuda', alias: ['bonos', 'debentures'] },
      { termino: 'Efecto de comercio', definicion: 'Título de deuda de corto plazo (pagarés u otros títulos de crédito) de oferta pública; cada acreedor ejerce sus derechos individualmente.', fuente: 'Título XVII LMV (art. 131); NCG 30/1989; apuntes', seccion: 'deuda', alias: ['efectos de comercio'] },
      { termino: 'Línea de bonos', definicion: 'Inscripción en la CMF de un marco con monto máximo y plazo de vigencia, que permite hacer emisiones sucesivas en forma rápida.', fuente: 'Apuntes de clases', seccion: 'deuda', alias: ['emision por linea', 'linea de efectos de comercio'] },
      { termino: 'Project finance', definicion: 'Bono que financia una obra que aún no existe (autopista, hospital, aeropuerto) y se paga con los flujos futuros de su explotación; los fondos se liberan por hitos.', fuente: 'Apuntes de clases', seccion: 'deuda', alias: ['bono de financiamiento de proyectos'] },
      { termino: 'Securitización', definicion: 'Operación en que una originadora vende un paquete de flujos presentes y futuros a un patrimonio separado administrado por una securitizadora, que emite bonos respaldados por esos activos y con su producto paga el precio.', fuente: 'Apuntes de clases', seccion: 'deuda', alias: ['bono securitizado', 'securitizadora'] }
    ],

    secciones: [
      {
        id: 'intro', titulo: '1. Para qué existe el mercado de valores',
        html: `
<p>El mercado conecta a las <b>unidades superavitarias</b> (tienen ahorro) con las <b>deficitarias</b> (tienen un proyecto y necesitan capital). Primero se recurre a amigos y familia; luego al <b>banco</b>, que intermedia: capta y coloca, y gana con el <b>spread</b> (tasa de colocación mayor que la de captación), que cubre sus costos, sus utilidades y la gestión del riesgo.</p>
<p>Cuando se prescinde del banco y el inversionista financia directamente al emisor, la ley debe asegurar información y transparencia. Hay dos grandes ejes regulatorios:</p>
<div class="grid dos">
  <div class="card"><div class="kicker">Eje 1</div><h4 style="margin-top:0">Riesgo de solvencia (de no pago)</h4><p>¿Me devolverán el dinero? Se evalúa con información: historial crediticio (informe de deudas de la CMF), registro de deuda consolidada, nivel de ingresos. Las hipotecas no reemplazan la capacidad de pago (crisis subprime) y se exige seguro de desgravamen.</p></div>
  <div class="card"><div class="kicker">Eje 2</div><h4 style="margin-top:0">Riesgo de liquidez</h4><p>¿Podré recuperar mi dinero cuando lo necesite? Un inmueble o una obra de arte son ilíquidos. El mercado de capitales busca instrumentos que se puedan vender rápido.</p></div>
</div>
<p class="small">Ejemplo de clase: el padre del profesor recibía en papel la memoria anual de Endesa (capitalismo popular, años 80). Recibir información no garantiza que un inversionista común pueda entenderla.</p>`
      },
      {
        id: 'valor', titulo: '2. El concepto de «valor» (art. 3° LMV)',
        html: `
<p>En el mercado de valores solo se transan <b>valores</b>. La ley usa la técnica de los títulos de crédito: «cosificar» el derecho para que circule como una cosa mueble.</p>
<div class="cita">«Para los efectos de esta ley, se entenderá por valores cualesquiera títulos transferibles incluyendo acciones, opciones a la compra y venta de acciones, bonos, debentures, cuotas de fondos mutuos, planes de ahorro, efectos de comercio y, en general, todo título de crédito o inversión.»<span class="fuente">Art. 3° inc. 1° Ley 18.045</span></div>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Valores por mandato legal</h4><p>Siempre son valores: acciones, cuotas de fondos mutuos, efectos de comercio, bonos.</p></div>
  <div class="card"><h4 style="margin-top:0">Cláusula general («bolsillo de payaso»)</h4><p>«Todo título de crédito o inversión». Para que un instrumento atípico califique, debe ser formalmente un título de crédito y además de inversión.</p></div>
</div>
<div class="callout"><p><b>Requisitos según la SVS/CMF</b> (Oficios 987/2006, 9.100/2015 y 3.502/2017), acumulativos: (1) título de <b>crédito o de inversión</b>; (2) <b>autónomo y abstracto</b> (y literal); (3) <b>transferible</b> sin trámites engorrosos.</p></div>
<p><b>¿Por qué importa ser «valor»?</b> Da competencia de fiscalización a la <b>CMF</b>, somete la actividad a los <b>delitos del mercado</b> (como el uso de información privilegiada) y abre la protección administrativa y judicial al inversionista. Quien es estafado con Bitcoin no puede reclamar a la CMF.</p>
<h3>Las acciones son siempre valores</h3>
<p>En Chile la acción es valor por mandato legal, sin importar su finalidad: también las de colegios o clubes (La Vizcacha, Club de Golf), que no dan dividendos. La CMF tuvo que dictar normas especiales para liberarlos de los deberes de las sociedades abiertas. En EE. UU., la Securities Act de 1933 define <i>security</i> «a menos que el contexto requiera lo contrario», lo que permite a los tribunales excluir esos casos. La LMV de 1981 no tiene esa flexibilidad.</p>
<h3>No son valores, según la CMF</h3>
<table class="tabla">
<tr><th>Instrumento</th><th>Razón</th></tr>
<tr><td>Cuentas y libretas de ahorro</td><td>No son libremente cedibles ni títulos de crédito.</td></tr>
<tr><td>APV, APVC y depósitos convenidos</td><td>Intransferibles por su fin previsional (salvo cuotas de fondos mutuos).</td></tr>
<tr><td>Depósitos a plazo</td><td>Solo se transfieren con las formas de la cesión de créditos.</td></tr>
<tr><td>Saldos en cuenta corriente, cheques y facturas</td><td>No son títulos de inversión y carecen de autonomía.</td></tr>
<tr><td>Seguros con ahorro, criptomonedas, divisas, oro</td><td>Contratos, medios de pago o bienes corporales.</td></tr>
</table>
<p class="small">Según Mardones (citado en los apuntes): antes de la LMV regía la Ley 16.394 de 1965; la LMV de 1981 trajo la primera definición de valores; la Ley 20.345 incorporó la noción amplia de «instrumentos financieros».</p>`
      },
      {
        id: 'howey', titulo: '3. El caso Howey y los activos que no son valores',
        html: `
<div class="card"><p><span class="etiqueta azul">SEC v. W.J. Howey Co. (EE. UU.)</span></p>
<p>Howey tenía plantaciones de naranjas en Florida. Vendía pequeñas parcelas a compradores de Nueva York y Boston y, junto con la venta, ofrecía un <b>contrato de administración</b>: Howey cultivaba, cosechaba y vendía, y entregaba las utilidades. La Corte Suprema de EE. UU. resolvió que el esquema era un <b>contrato de inversión</b> sujeto a las leyes bursátiles.</p></div>
<div class="flow"><div class="node">1. Entrega de dinero</div><div class="arrow">+</div><div class="node">2. Expectativa de ganancia</div><div class="arrow">+</div><div class="node hot">3. Ganancia por la actividad de un tercero</div><div class="arrow">=</div><div class="node y">Contrato de inversión<small>(security)</small></div></div>
<ul>
  <li><b>Bitcoin:</b> hay dinero y ánimo de lucro, pero la ganancia depende de la especulación, no de la actividad de un tercero: no es valor bajo Howey.</li>
  <li><b>Herbalife:</b> caso límite, porque mezcla inversión con el trabajo propio de la red.</li>
  <li><b>Endesa (capitalismo popular):</b> los médicos renunciaban a su indemnización por años de servicio a cambio de acciones; las ganancias dependían de la gestión de Endesa.</li>
</ul>
<div class="callout yellow"><p><b>En Chile el esquema Howey no sería valor:</b> el art. 3° LMV exige un <b>título de crédito de inversión</b> (abstracto, autónomo y transferible), no basta un contrato de inversión. Por eso los criptoactivos y las plataformas de financiamiento colaborativo quedaron fuera de la LMV y se dictó la <b>Ley Fintech</b>, con la categoría amplia de <b>«instrumento financiero»</b> (art. 3°), que excluye solo el dinero y las divisas (Banco Central) y los valores de oferta pública (LMV).</p><p class="small">Nota: el apunte cita la Ley Fintech como Ley 21.521 y, en otro pasaje, como Ley 21.236. Conviene confirmar el número con la lectura.</p></div>
<p><b>Facturas:</b> la SVS (hoy CMF) resolvió que <b>no son valor</b>. Para transarlas en bolsa se usó la <b>Ley 19.220</b> de bolsas de productos (ver Unidad 7).</p>`
      },
      {
        id: 'clasificacion', titulo: '4. Renta variable y renta fija',
        html: `
<table class="tabla">
<tr><th></th><th>Renta variable</th><th>Renta fija</th></tr>
<tr><td>Idea</td><td>Inversión patrimonial: se asume el riesgo del negocio, sin devolución garantizada.</td><td>Acreencia de deuda: se pacta devolver capital más intereses o reajustes en un plazo.</td></tr>
<tr><td>Ejemplos</td><td><b>Acciones</b> (dividendos y ganancia de capital); <b>cuotas de fondos</b> (valor cuota diario).</td><td><b>Bonos</b> (largo plazo, en serie) y <b>efectos de comercio</b> (corto plazo, declaraciones individuales).</td></tr>
<tr><td>Riesgo</td><td>Rentabilidad aleatoria y contingente.</td><td>Rentabilidad conocida, pero con riesgo de insolvencia del emisor.</td></tr>
</table>
<div class="callout red"><p><b>Acciones preferentes:</b> la preferencia solo da prioridad en el reparto <b>si hay utilidades</b>. Prometer un dividendo fijo e incondicional aunque haya pérdidas desnaturaliza la acción y la convierte en deuda: esa estipulación es nula.</p></div>
<p class="small">Hay fondos mutuos «de renta fija» cuando el reglamento obliga a invertir todo en títulos de deuda (por ejemplo, pagarés del Banco Central o bonos bancarios).</p>`
      },
      {
        id: 'acciones-fondos', titulo: '5. Acciones y cuotas de fondos',
        html: `
<h3>Consecuencias de que las acciones sean valores</h3>
<ol>
  <li>Para ofrecerlas públicamente hay que <b>inscribir</b> al emisor y las acciones en el <b>Registro de Valores</b> de la CMF (sociedades anónimas abiertas, fiscalizadas).</li>
  <li><b>Deberes de información al público</b>: memorias, balances y estados financieros disponibles para cualquiera, no solo para los accionistas.</li>
  <li>Las tomas de control se someten al régimen de <b>OPA</b> (Unidad 9).</li>
  <li><span class="norma">Art. 12 LMV</span>: <b>directores, gerentes, ejecutivos principales y accionistas relevantes</b> deben informar a la CMF y al mercado cada compra o venta de acciones de la sociedad. Sus operaciones son señales: si un director compra, el mercado lo lee como confianza; si vende, como alerta.</li>
</ol>
<h3>Los fondos: patrimonio de afectación</h3>
<p>El fondo rompe la regla civil de que no hay patrimonio sin persona: es un <b>patrimonio de afectación</b>, sin personalidad jurídica, administrado por una <b>AGF</b> (o una AFP). El patrimonio de la administradora está <b>separado</b> del fondo: los acreedores de una no pueden perseguir los bienes del otro. El aportante recibe <b>cuotas</b> según el valor cuota del día ($100.000 con valor cuota $1.000 = 100 cuotas). Se rige por la <span class="norma">Ley 20.712 (LUF)</span> y el reglamento interno.</p>
<table class="tabla">
<tr><th>Fondos de pensiones (AFP)</th><th>Fondos mutuos</th><th>Fondos de inversión</th></tr>
<tr><td>Patrimonio de afectación administrado por una AFP; sus cuotas son valores, pero es ahorro forzoso: no se rescatan antes de jubilar.</td><td><b>Rescate</b> en cualquier momento al valor cuota; no se exigen asamblea ni comité de vigilancia para esas materias.</td><td>Sin rescate hasta el término del plazo (salvo reglamento); liquidez vendiendo la cuota. Exige <b>asamblea de aportantes</b> y <b>comité de vigilancia</b>. <b>Rescatables</b>: pagan rescates en más de 10 y menos de 180 días. <b>No rescatables</b>: sin rescate o con plazo de 180 días o más; sus cuotas deben inscribirse en bolsa.</td></tr>
</table>
<div class="callout"><p><b>AGF:</b> sociedad anónima especial autorizada por la CMF. Un fondo nuevo se crea <b>depositando el reglamento interno</b> en el registro de la CMF, sin aprobación previa; al día hábil siguiente puede comercializarse. La CMF fiscaliza <b>ex post</b> (auditoría integral a cada AGF cerca de una vez cada 5 años, según una matriz de riesgo). Los <b>FIP</b> (fondos de inversión privados) tienen pocos aportantes y quedan fuera de la oferta pública.</p></div>
<h3>Casos</h3>
<div class="card" style="margin-bottom:12px"><p><span class="etiqueta roja">Pregunta de examen</span> <b>Caso Aurus (2016)</b></p><p>En Aurus AGF (fondos Insignia y Global), el director Mauricio Peña desvió fondos durante casi 5 años y apostó en un casino para tapar el déficit: unos US$30 millones. Falsificaba informes con inversiones inexistentes en Perú, y las auditoras aceptaban sus explicaciones sin verificar con la fuente. Los otros cuatro directores no sabían, pero confiaban ciegamente y no exigían controles. En 2016 la SVS constató que los controles internos no funcionaban; el auditor interno nombrado descubrió el fraude. Peña fue procesado por estafa y entrega de información falsa. Los demás directores indemnizaron cerca de US$20 millones (dos tercios) y cerraron la AGF. En 2018 la CMF los sancionó solo por <b>negligencia</b>, con 1.000 UF por director.</p><p class="small">Lección: el directorio de una AGF maneja dinero ajeno; sus deberes de cuidado y lealtad son más intensos.</p></div>
<div class="card" style="margin-bottom:12px"><p><b>Caso Sartor (2024)</b></p><p>Sartor AGF captaba en el mercado público y derivaba el dinero a FIP, sociedades cerradas o extranjeras, donde no hay deberes de información. Se otorgaban préstamos sin garantías a sociedades de los mismos dueños, que se renovaban sin cobrarse. Pérdidas estimadas de 50% a 70% del valor de las cuotas. Sin compensación a los aportantes, la CMF <b>intervino</b> la AGF a fines de 2024 y formuló cargos por infracción al deber de <b>lealtad</b>; los ejecutivos fueron formalizados.</p></div>
<div class="card"><p><b>Azul Azul y el FIP Tactical Sport</b></p><p>El FIP Tactical Sport, administrado por Sartor, tenía cerca del 63% de Azul Azul S.A., comprado en la OPA de 2021 con créditos de otros fondos de Sartor y sin prenda. Al no pagar, los fondos acreedores embargaron las acciones, que hoy están en manos de un liquidador.</p></div>`
      },
      {
        id: 'deuda', titulo: '6. Deuda: bonos, efectos de comercio y securitización',
        html: `
<table class="tabla">
<tr><th></th><th>Bonos</th><th>Efectos de comercio</th></tr>
<tr><td>Plazo</td><td>Largo plazo (Título XVI LMV; art. 103: la deuda de largo plazo solo mediante bonos). Desde 1 año.</td><td>Corto plazo (Título XVII LMV; art. 131: pagarés u otros títulos; NCG 30/1989). Hasta 36 meses.</td></tr>
<tr><td>Funcionamiento</td><td><b>Colectivo</b>: representante de los tenedores (designado por el emisor en la escritura y reemplazable por la junta) y <b>junta de tenedores</b>, que decide la aceleración y vota en la reorganización (Ley 20.720).</td><td><b>Individual</b>: sin representante ni junta.</td></tr>
</table>
<div class="callout"><p><b>Traslape:</b> entre 1 y 3 años el emisor elige bono o efectos de comercio; sobre 3 años, bono obligatorio; bajo 1 año, pagarés o letras. Ejemplo: las empresas de factoring se financian con efectos de comercio para comprar facturas a 30, 60 o 90 días.</p></div>
<div class="grid dos">
  <div class="card"><b>Emisión por monto fijo</b><p>Se inscribe un monto cerrado; la tramitación toma tiempo y se puede perder la oportunidad de mercado.</p></div>
  <div class="card"><b>Emisión por línea</b><p>Se inscribe un marco (monto máximo y plazo, p. ej. 10 millones de UF a 30 años) y se hacen emisiones sucesivas en unas 48 horas, como una línea de crédito. Permite refinanciar si bajan las tasas.</p></div>
</div>
<h3>Tres especies de bonos</h3>
<table class="tabla">
<tr><th>Bono corporativo</th><th>Project finance</th><th>Bono securitizado</th></tr>
<tr><td>Financia una empresa en marcha (CCU, Cencosud). El riesgo se mide con su historia y sus estados financieros.</td><td>Financia una obra que aún no existe (autopista, metro, hospital). Se paga con los flujos de la explotación; los fondos se liberan por hitos.</td><td>Respaldado por un paquete de flujos que la originadora vende a un patrimonio separado.</td></tr>
</table>
<h3>Securitización</h3>
<figure class="diagrama">
<svg viewBox="0 0 760 200" role="img" aria-label="Esquema de la securitización">
  <defs><marker id="fs1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 z" fill="#637386"/></marker></defs>
  <g font-family="Inter,Segoe UI,Arial" font-size="13" text-anchor="middle">
    <rect x="15" y="60" width="180" height="70" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="105" y="88" font-weight="800">Originadora</text><text x="105" y="108" fill="#637386">UDP, banco hipotecario</text>
    <rect x="290" y="60" width="180" height="70" rx="12" fill="#eaf4fb" stroke="#1479c9" stroke-width="2"/><text x="380" y="85" font-weight="800">Patrimonio separado</text><text x="380" y="105" fill="#637386">administrado por la</text><text x="380" y="121" fill="#637386">securitizadora (S.A.E.)</text>
    <rect x="565" y="60" width="180" height="70" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/><text x="655" y="95" font-weight="800">Inversionistas</text>
    <line x1="197" y1="80" x2="286" y2="80" stroke="#637386" stroke-width="1.6" marker-end="url(#fs1)"/><text x="242" y="70" fill="#172536">① vende flujos</text>
    <line x1="472" y1="80" x2="561" y2="80" stroke="#637386" stroke-width="1.6" marker-end="url(#fs1)"/><text x="517" y="70" fill="#172536">② emite bono</text>
    <line x1="561" y1="112" x2="474" y2="112" stroke="#20845c" stroke-width="1.6" marker-end="url(#fs1)"/><text x="517" y="150" fill="#20845c">③ pagan el bono</text>
    <line x1="286" y1="112" x2="199" y2="112" stroke="#20845c" stroke-width="1.6" marker-end="url(#fs1)"/><text x="242" y="150" fill="#20845c">④ paga el precio</text>
    <text x="380" y="188" fill="#637386">⑤ la originadora sigue cobrando por cuenta del patrimonio separado, que paga cuotas e intereses del bono</text>
  </g>
</svg>
</figure>
<p>La venta se hace por un <b>contrato global</b> (bienes presentes y cosa futura), para evitar ceder y notificar crédito por crédito. <b>Caso UDP</b>: la Universidad Diego Portales vendió sus flujos de matrículas presentes y futuras; con el bono a 10-20 años obtuvo de una vez el dinero para Medicina, la Biblioteca Nicanor Parra y el campus Huechuraba. En la <b>banca hipotecaria</b>, securitizar libera capital inmovilizado por 20 o 30 años para volver a prestar.</p>
<div class="callout red"><p><span class="etiqueta roja">Pregunta de examen</span> <b>Crisis subprime (2008).</b> Para seguir colocando, la banca de EE. UU. prestó a deudores «NINJA» (<i>no income, no job, no assets</i>), confiando en la garantía y no en la solvencia, hasta el 110% del valor de la vivienda, bajo la idea de que los precios seguirían subiendo. Cuando subieron las tasas (2006-2007), cayeron los precios: las garantías no alcanzaron, los deudores dejaron de pagar y los <b>bonos securitizados</b> perdieron su valor. Como estaban repartidos en el mundo, la crisis se propagó. Chile la sorteó usando las reservas acumuladas para inyectar liquidez.</p></div>`
      }
    ],

    interactivos: [
      {
        id: 'esvalor', titulo: '¿Es «valor» según la LMV?', seccion: 'valor',
        descripcion: 'Clasifica cada instrumento según el art. 3° LMV y los criterios de la CMF.',
        montar: function (el) {
          var casos = [
            ['Acción del club deportivo La Vizcacha, que no da dividendos.', true, 'Las acciones son siempre valores por mandato legal, sin importar su finalidad (a diferencia de EE. UU.).'],
            ['Bitcoin.', false, 'No es título de crédito ni de inversión con abstracción, autonomía y transferibilidad. Queda bajo la Ley Fintech como instrumento financiero.'],
            ['Cuota de un fondo mutuo.', true, 'Está nombrada expresamente en el art. 3° LMV.'],
            ['Factura con copia cedible.', false, 'Es título-valor causado, pero la CMF dictaminó que no es valor: carece de autonomía. Se transa vía Ley 19.220.'],
            ['Depósito a plazo bancario.', false, 'Según la CMF, solo se transfiere con las formas de la cesión de créditos.'],
            ['Bono corporativo de una sociedad anónima.', true, 'Los bonos están nombrados en el art. 3° LMV.'],
            ['Parcela de naranjos más contrato de administración (esquema Howey), ofrecido en Chile.', false, 'En EE. UU. es contrato de inversión; en Chile no es valor, porque la LMV exige un título de crédito de inversión.'],
            ['Pagaré de oferta pública emitido por una empresa de factoring.', true, 'Es un efecto de comercio, valor por mandato legal.']
          ];
          var i = 0, ok = 0;
          function pintar() {
            if (i >= casos.length) { el.innerHTML = '<div class="resultado ok"><b>Resultado: ' + ok + ' de ' + casos.length + '.</b> <button class="btn sec" id="re">Repetir</button></div>'; el.querySelector('#re').onclick = function () { i = 0; ok = 0; pintar(); }; return; }
            var c = casos[i];
            el.innerHTML = '<p class="small">Caso ' + (i + 1) + ' de ' + casos.length + '</p><p style="font-size:18px;font-weight:700">' + c[0] + '</p><div class="opciones-chip"><button data-v="1">Es valor</button><button data-v="0">No es valor</button></div><div id="fb"></div>';
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
        id: 'howeytest', titulo: 'Aplica el test de Howey', seccion: 'howey',
        descripcion: 'Elige un caso y marca qué elementos concurren. Recuerda que en Chile el test no basta: la LMV exige un título de crédito de inversión.',
        montar: function (el) {
          var casos = {
            howey: ['Parcelas de naranjos + contrato de administración', [true, true, true]],
            bitcoin: ['Compra de Bitcoin', [true, true, false]],
            endesa: ['Médicos que reciben acciones de Endesa', [true, true, true]],
            teleton: ['Aporte a la Teletón', [true, false, false]]
          };
          var req = ['Entrega de dinero', 'Expectativa de ganancia', 'La ganancia proviene de la actividad de un tercero'];
          el.innerHTML = '<div class="opciones-chip" id="c">' + Object.keys(casos).map(function (k) { return '<button data-k="' + k + '">' + casos[k][0] + '</button>'; }).join('') + '</div><div id="det"></div>';
          function mostrar(k) {
            el.querySelectorAll('#c button').forEach(function (b) { b.classList.toggle('activo', b.dataset.k === k); });
            var d = el.querySelector('#det');
            d.innerHTML = req.map(function (r, j) { return '<label class="check"><input type="checkbox" data-j="' + j + '"> ' + r + '</label>'; }).join('') + '<button class="btn" id="ev">Evaluar</button><div id="o"></div>';
            d.querySelector('#ev').onclick = function () {
              var r = casos[k][1], marc = Array.prototype.map.call(d.querySelectorAll('input'), function (x) { return x.checked; });
              var acierto = marc.every(function (m, j) { return m === r[j]; }), es = r.every(Boolean);
              d.querySelector('#o').innerHTML = '<div class="resultado ' + (acierto ? 'ok' : 'mal') + '">' + (acierto ? '✓ Bien marcado. ' : '✗ Revisa: concurren ' + r.map(function (v, j) { return (j + 1) + (v ? ' ✓' : ' ✗'); }).join(' · ') + '. ') +
                '<b>' + (es ? 'En EE. UU. sería contrato de inversión (security).' : 'No es contrato de inversión según Howey.') + '</b> En Chile, además, se requiere un título de crédito de inversión' + (k === 'endesa' ? '; aquí hay acciones, que son siempre valores.' : '.') + '</div>';
            };
          }
          el.querySelectorAll('#c button').forEach(function (b) { b.onclick = function () { mostrar(b.dataset.k); }; });
          mostrar('howey');
        }
      },
      {
        id: 'plazodeuda', titulo: '¿Bono o efecto de comercio?', seccion: 'deuda',
        descripcion: 'Mueve el plazo de la deuda que quiere emitir la empresa.',
        montar: function (el) {
          el.innerHTML = '<div class="campo" style="max-width:420px"><label>Plazo de la deuda: <b id="m">24</b> meses</label><input type="range" id="pl" min="1" max="120" value="24"></div><div id="out"></div>';
          function calc() {
            var m = +el.querySelector('#pl').value; el.querySelector('#m').textContent = m;
            var txt = m < 12 ? ['Efectos de comercio', 'Bajo 1 año: pagarés o letras (corto plazo, Título XVII LMV).'] : m <= 36 ? ['Bono o efectos de comercio', 'Entre 1 y 3 años los plazos se traslapan: el emisor elige.'] : ['Bono', 'Sobre 3 años, el bono es la vía obligada (Título XVI LMV, art. 103).'];
            el.querySelector('#out').innerHTML = '<div class="resultado"><div class="big">' + txt[0] + '</div><p>' + txt[1] + '</p><p class="small">Bono: actuación colectiva con representante y junta de tenedores. Efecto de comercio: cada acreedor actúa individualmente.</p></div>';
          }
          el.querySelector('#pl').oninput = calc; calc();
        }
      },
      {
        id: 'subprime', titulo: 'Simulador subprime: ¿alcanza la garantía?', seccion: 'deuda',
        descripcion: 'Ejemplo de clase: préstamo de US$110.000 a un deudor NINJA para una casa de US$100.000. Cambia el precio futuro de la casa.',
        montar: function (el) {
          el.innerHTML = '<div class="fila"><div class="campo"><label>Préstamo (US$)</label><input type="number" id="pr" value="110000" step="5000"></div><div class="campo"><label>Precio de compra (US$)</label><input type="number" id="pc" value="100000" step="5000"></div></div>' +
            '<div class="campo" style="max-width:420px"><label>Precio de la casa al remate: US$ <b id="v">130.000</b></label><input type="range" id="pf" min="40000" max="160000" step="5000" value="130000"></div><div id="out"></div>';
          function calc() {
            var pr = +el.querySelector('#pr').value || 0, pc = +el.querySelector('#pc').value || 1, pf = +el.querySelector('#pf').value;
            el.querySelector('#v').textContent = fmt(pf);
            var ok = pf >= pr;
            el.querySelector('#out').innerHTML = '<div class="resultado ' + (ok ? 'ok' : 'mal') + '"><p>Préstamo = <b>' + Math.round(100 * pr / pc) + '%</b> del valor de compra (sin pie).</p>' +
              (ok ? '<b>El remate cubre la deuda.</b> Mientras los precios suban, el modelo «funciona» aunque el deudor no tenga capacidad de pago.' :
                '<b>La garantía no alcanza:</b> faltan US$ ' + fmt(pr - pf) + '. El deudor abandona la casa, los flujos dejan de llegar al patrimonio separado y el <b>bono securitizado</b> pierde valor. Multiplicado por miles de créditos y repartido en el mundo: la crisis de 2008.') + '</div>';
          }
          el.querySelectorAll('input').forEach(function (i) { i.oninput = calc; }); calc();
        }
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'intro', enunciado: '¿Cuáles son los dos grandes ejes regulatorios del mercado de valores según el profesor?', opciones: ['Riesgo de solvencia y riesgo de liquidez', 'Riesgo cambiario y riesgo político', 'Inflación y tipo de cambio', 'Usura y anatocismo'], correcta: 0, explicacion: '¿Me pagarán? y ¿podré recuperar mi dinero cuando lo necesite?' },
      { tipo: 'vf', seccion: 'intro', enunciado: 'El spread bancario es la diferencia entre la tasa de colocación y la tasa de captación.', respuesta: true, explicacion: 'La tasa de colocación siempre es mayor.' },
      { tipo: 'alternativas', seccion: 'valor', enunciado: '¿Qué requisitos exige la CMF para que un instrumento atípico sea «valor»?', opciones: ['Título de crédito o inversión, autónomo y abstracto, y transferible', 'Inscripción en el Registro de Valores y clasificación de riesgo', 'Emisión por una sociedad anónima abierta', 'Que lo transe un corredor de bolsa'], correcta: 0, explicacion: 'Oficios 987/2006, 9.100/2015 y 3.502/2017.' },
      { tipo: 'vf', seccion: 'valor', enunciado: 'En Chile, la acción de un club social que no reparte dividendos no es valor, porque falta la finalidad de inversión.', respuesta: false, explicacion: 'Las acciones son siempre valores por el art. 3° LMV. En EE. UU. sí podría excluirse por el contexto.' },
      { tipo: 'alternativas', seccion: 'valor', enunciado: '¿Cuál de estos NO es valor según la CMF?', opciones: ['Un depósito a plazo', 'Una cuota de fondo mutuo', 'Un bono', 'Un efecto de comercio'], correcta: 0, explicacion: 'Solo se transfiere con las formas de la cesión de créditos.' },
      { tipo: 'alternativas', seccion: 'valor', enunciado: '¿Qué consecuencia tiene que un instrumento sea «valor»?', opciones: ['Queda bajo la fiscalización de la CMF y los delitos del mercado, como el uso de información privilegiada', 'Queda exento de impuestos', 'Pasa a ser garantizado por el Estado', 'Se transforma en un título nominativo'], correcta: 0, explicacion: 'Además, el inversionista accede a la protección administrativa y judicial.' },
      { tipo: 'relacionar', seccion: 'valor', enunciado: 'Relaciona cada instrumento con la razón por la que no es valor.', pares: [['Libreta de ahorro', 'No es libremente cedible'], ['APV', 'Intransferible por su fin previsional'], ['Factura', 'Carece de autonomía'], ['Oro', 'Es un bien corporal']], explicacion: 'Según los criterios de la CMF.' },
      { tipo: 'alternativas', seccion: 'howey', enunciado: '¿Cuáles son los elementos del test de Howey?', opciones: ['Entrega de dinero, expectativa de ganancia y ganancia por la actividad de un tercero', 'Título, modo y causa', 'Abstracción, autonomía y literalidad', 'Oferta pública, inscripción y clasificación'], correcta: 0, explicacion: 'Si concurren, hay un contrato de inversión (security).' },
      { tipo: 'vf', seccion: 'howey', enunciado: 'El esquema de Howey (parcela más contrato de administración) sería un valor en Chile.', respuesta: false, explicacion: 'La LMV exige un título de crédito de inversión; un contrato de inversión no basta.' },
      { tipo: 'alternativas', seccion: 'howey', enunciado: '¿Por qué el Bitcoin no es valor bajo el test de Howey?', opciones: ['Porque la ganancia depende de la especulación y no de la actividad de un tercero', 'Porque no hay entrega de dinero', 'Porque no hay ánimo de lucro', 'Porque es emitido por un Estado'], correcta: 0, explicacion: 'Concurren dinero y lucro, pero falta el tercer elemento.' },
      { tipo: 'alternativas', seccion: 'howey', enunciado: '¿Qué queda fuera de la categoría de «instrumento financiero» de la Ley Fintech?', opciones: ['El dinero y las divisas, y los valores de oferta pública', 'Los criptoactivos', 'Los contratos', 'Los activos electrónicos'], correcta: 0, explicacion: 'Los primeros son del Banco Central; los segundos, de la LMV.' },
      { tipo: 'alternativas', seccion: 'clasificacion', enunciado: 'Una S.A. emite acciones preferentes con un dividendo asegurado aunque tenga pérdidas. ¿Qué ocurre?', opciones: ['La estipulación es nula: desnaturaliza la acción y la convierte en deuda', 'Es válida si la junta la aprueba', 'Transforma la acción en bono', 'Es válida solo en sociedades abiertas'], correcta: 0, explicacion: 'La preferencia solo da prioridad si hay utilidades.' },
      { tipo: 'relacionar', seccion: 'clasificacion', enunciado: 'Relaciona cada valor con su tipo de renta.', pares: [['Acción', 'Renta variable'], ['Cuota de fondo mutuo', 'Renta variable (en general)'], ['Bono', 'Renta fija'], ['Efecto de comercio', 'Renta fija']], explicacion: 'La renta fija tiene riesgo de insolvencia del emisor.' },
      { tipo: 'vf', seccion: 'clasificacion', enunciado: 'Los bonos se emiten en serie; los efectos de comercio responden a declaraciones independientes.', respuesta: true, explicacion: 'Según los apuntes.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', enunciado: 'Según el art. 12 LMV, ¿quiénes deben informar sus compras y ventas de acciones de la sociedad?', opciones: ['Directores, gerentes, ejecutivos principales y accionistas relevantes', 'Todos los accionistas', 'Solo el controlador', 'Solo los corredores de bolsa'], correcta: 0, explicacion: 'Sus operaciones son señales para el mercado.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', enunciado: '¿Qué es jurídicamente un fondo?', opciones: ['Un patrimonio de afectación sin personalidad jurídica, administrado por un tercero', 'Una sociedad anónima', 'Un contrato de mandato', 'Una persona jurídica sin fines de lucro'], correcta: 0, explicacion: 'Rompe la regla civil de que no hay patrimonio sin persona.' },
      { tipo: 'vf', seccion: 'acciones-fondos', enunciado: 'Si una AGF quiebra, sus acreedores pueden embargar los activos de los fondos que administra.', respuesta: false, explicacion: 'Los patrimonios están separados.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', enunciado: 'Un fondo de inversión paga rescates en 200 días. ¿Cómo se clasifica?', opciones: ['No rescatable: sus cuotas deben inscribirse en bolsa', 'Rescatable', 'Fondo mutuo', 'Fondo de inversión privado'], correcta: 0, explicacion: 'Rescatable: más de 10 y menos de 180 días.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', enunciado: '¿Cómo se crea un nuevo fondo de una AGF ya autorizada?', opciones: ['Depositando el reglamento interno en la CMF; al día hábil siguiente puede comercializarse', 'Con aprobación previa de la CMF', 'Por escritura pública inscrita', 'Por decreto del Ministerio de Hacienda'], correcta: 0, explicacion: 'La fiscalización es ex post.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', enunciado: 'En el caso Aurus, ¿por qué sancionó la CMF a los directores que no participaron del fraude?', opciones: ['Por negligencia: confiaron ciegamente y no exigieron controles', 'Por dolo', 'Por uso de información privilegiada', 'No los sancionó'], correcta: 0, explicacion: '1.000 UF por director, considerando que indemnizaron cerca de dos tercios de la pérdida.' },
      { tipo: 'vf', seccion: 'acciones-fondos', enunciado: 'En el caso Sartor, la CMF intervino la AGF y formuló cargos por infracción al deber de lealtad.', respuesta: true, explicacion: 'Préstamos sin garantías a sociedades vinculadas, en conflicto de interés.' },
      { tipo: 'relacionar', seccion: 'acciones-fondos', enunciado: 'Relaciona cada caso con su rasgo.', pares: [['Aurus', 'Desvío de fondos y auditoras sin verificar'], ['Sartor', 'Préstamos sin garantía a empresas vinculadas'], ['Azul Azul', 'FIP con el 63% de las acciones, embargado']], explicacion: 'Casos de fondos vistos en clases.' },
      { tipo: 'alternativas', seccion: 'deuda', enunciado: 'Una empresa quiere endeudarse a 5 años en el mercado de valores. ¿Qué debe emitir?', opciones: ['Bonos', 'Efectos de comercio', 'Letras de cambio', 'Cualquiera de ellos'], correcta: 0, explicacion: 'Sobre 3 años el bono es obligatorio.' },
      { tipo: 'vf', seccion: 'deuda', enunciado: 'En los bonos, la decisión de acelerar la deuda la toma la junta de tenedores.', respuesta: true, explicacion: 'Funcionamiento colectivo, mediante representante y junta.' },
      { tipo: 'alternativas', seccion: 'deuda', enunciado: '¿Qué ventaja tiene la emisión por línea?', opciones: ['Permite emisiones sucesivas rápidas dentro de un monto y plazo inscritos', 'Evita la inscripción en la CMF', 'Elimina el riesgo de solvencia', 'Garantiza la tasa de interés'], correcta: 0, explicacion: 'Funciona como una línea de crédito y permite refinanciar si bajan las tasas.' },
      { tipo: 'relacionar', seccion: 'deuda', enunciado: 'Relaciona cada bono con lo que financia.', pares: [['Corporativo', 'Empresa en marcha'], ['Project finance', 'Obra que aún no existe'], ['Securitizado', 'Paquete de flujos de una originadora']], explicacion: 'Las tres especies de bonos.' },
      { tipo: 'alternativas', seccion: 'deuda', enunciado: '¿Qué vendió la UDP en su securitización?', opciones: ['Sus flujos de matrículas presentes y futuras', 'Sus edificios', 'Acciones de la universidad', 'Bonos del Banco Central'], correcta: 0, explicacion: 'Con el bono obtuvo de una vez los fondos para construir.' },
      { tipo: 'alternativas', seccion: 'deuda', enunciado: '¿Qué detonó la crisis subprime?', opciones: ['Préstamos a deudores sin capacidad de pago confiando en la garantía, y la caída de precios al subir las tasas', 'La quiebra del Banco Central de Chile', 'La prohibición de securitizar', 'La baja de tasas de interés'], correcta: 0, explicacion: 'Los bonos securitizados perdieron su valor y la crisis se propagó.' },

      { tipo: 'oral', seccion: 'valor', enunciado: '¿Qué es un «valor» para la Ley de Mercado de Valores y qué consecuencias tiene?', puntos: ['Art. 3° LMV: títulos transferibles; lista por mandato legal (acciones, bonos, cuotas, efectos de comercio) y cláusula general «todo título de crédito o inversión».', 'Requisitos CMF: título de crédito o inversión; autónomo y abstracto; transferible.', 'Consecuencias: fiscalización de la CMF, delitos del mercado y protección al inversionista.', 'Las acciones siempre son valores (colegios y clubes) vs. «unless the context otherwise requires» en EE. UU.', 'No son valores: libretas, APV, depósitos a plazo, cheques, facturas, criptomonedas, oro.'], norma: 'Art. 3° Ley 18.045' },
      { tipo: 'oral', seccion: 'howey', enunciado: 'Explique el caso Howey y por qué en Chile la solución es distinta.', puntos: ['Hechos: parcelas de naranjos más contrato de administración; contrato de inversión.', 'Test: dinero, expectativa de ganancia, ganancia por actividad de un tercero.', 'Aplicaciones: Bitcoin no; Herbalife caso límite; Endesa sí.', 'Chile: la LMV exige título de crédito de inversión; Howey no sería valor.', 'Por eso la Ley Fintech y el concepto de instrumento financiero (fuera: dinero y divisas, valores de oferta pública).'], norma: 'SEC v. W.J. Howey Co.; art. 3° LMV; Ley Fintech' },
      { tipo: 'oral', seccion: 'acciones-fondos', enunciado: 'Explique los fondos mutuos y de inversión, el rol de la AGF y el caso Aurus.', puntos: ['Fondo: patrimonio de afectación sin personalidad, separado de la AGF.', 'Fondos mutuos: rescate en cualquier momento.', 'Fondos de inversión: sin rescate libre; asamblea y comité de vigilancia; rescatables (10-180 días) y no rescatables (180+, cuotas en bolsa).', 'AGF: S.A.E.; nuevo fondo por depósito del reglamento; fiscalización ex post; FIP fuera de la oferta pública.', 'Aurus: desvío de US$30 millones, auditoras sin verificar, directores negligentes; indemnizaron y fueron multados con 1.000 UF cada uno. Deberes fiduciarios intensificados.'], norma: 'Ley 20.712 (LUF)' },
      { tipo: 'oral', seccion: 'deuda', enunciado: 'Explique la securitización y su relación con la crisis subprime.', puntos: ['Originadora vende flujos presentes y futuros (contrato global) a un patrimonio separado de una securitizadora (S.A.E. fiscalizada).', 'El patrimonio emite un bono securitizado; con lo recaudado paga a la originadora, que sigue cobrando por su cuenta.', 'Caso UDP (matrículas) y carteras hipotecarias (liberar capital).', 'Subprime: préstamos NINJA hasta 110% confiando en la garantía; suben tasas, caen precios, no pago, bonos sin valor, contagio global.', 'Chile la sorteó con sus reservas.'], norma: 'Apuntes (Gaspar); Mardones II' },
      { tipo: 'oral', seccion: 'deuda', enunciado: 'Compare bonos y efectos de comercio.', puntos: ['Bonos: largo plazo (Título XVI, art. 103), en serie, actuación colectiva con representante y junta (aceleración, reorganización).', 'Efectos de comercio: corto plazo (Título XVII, art. 131; NCG 30/1989), hasta 36 meses, actuación individual.', 'Traslape entre 1 y 3 años; sobre 3 años, bono.', 'Emisión por monto fijo o por línea.', 'Especies de bonos: corporativo, project finance, securitizado.'], norma: 'Títulos XVI y XVII LMV' }
    ]
  });
})();
