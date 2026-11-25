/* Unidad 8 — Mercado de valores I: los valores (clases 12 a 15 del Prof. Gaspar).
   Fuentes: apuntes de clases del Prof. Gaspar (lecturas: Mardones II; Guzmán y Guerrero).
   Orden y numeración de las secciones (1 … 6.4.1): los del apunte completo de clases del Prof. Gaspar
   (parte «Mercado de valores», puntos 1 a 6). */
(function () {
  var fmt = function (n) { return Number(n).toLocaleString('es-CL'); };

  Estudio.registrarUnidad({
    id: 'u8', numero: 8, bloque: 'Prof. Gaspar', profesor: 'Gaspar',
    titulo: 'Mercado de valores I: los valores',
    resumen: 'Para qué sirve el mercado de valores (riesgos de solvencia y de liquidez), qué es un «valor» en la LMV y el test de Howey, renta fija y variable, acciones y cuotas de fondos (casos Aurus y Sartor), bonos y efectos de comercio, securitización y crisis subprime.',
    lecturas: 'Apuntes de clases del Prof. Gaspar (clases 12 a 15 del cronograma). Lecturas: Mardones, tomo II, pp. 319-329, 223-232, 104-123, 232-246 y 202-210; Guzmán y Guerrero, pp. 3-21. Norma principal: Ley 18.045 de Mercado de Valores (LMV) y Ley 20.712 (LUF). El orden y la numeración de las secciones siguen el apunte completo de clases (parte «Mercado de valores», puntos 1 a 6).',

    glosario: [
      { termino: 'Valor', definicion: 'Cualesquiera títulos transferibles incluyendo acciones, opciones a la compra y venta de acciones, bonos, debentures, cuotas de fondos mutuos, planes de ahorro, efectos de comercio y, en general, todo título de crédito o inversión.', fuente: 'Art. 3° inc. 1° LMV', seccion: 'valor', sub: 'v-estructura', literal: true, alias: ['valores', 'valores de oferta publica'] },
      { termino: 'Riesgo de solvencia', definicion: 'Probabilidad de que el deudor no devuelva el capital y los intereses al vencimiento; se evalúa obteniendo y procesando información.', fuente: 'Apuntes de clases', seccion: 'intro', sub: 'mv-solvencia', alias: ['riesgo de no pago'] },
      { termino: 'Riesgo de liquidez', definicion: 'Expectativa del inversionista de poder convertir su inversión en dinero cuando lo necesite; el mercado de capitales busca instrumentos que permitan vender rápido.', fuente: 'Apuntes de clases', seccion: 'intro', sub: 'mv-liquidez' },
      { termino: 'Spread bancario', definicion: 'Diferencia entre la tasa de colocación (lo que el banco cobra por prestar) y la tasa de captación (lo que paga a los depositantes).', fuente: 'Apuntes de clases', seccion: 'intro', sub: 'mv-banco' },
      { termino: 'Test de Howey', definicion: 'Criterio estadounidense para saber si hay un contrato de inversión (security): (1) entrega de dinero, (2) expectativa de ganancia y (3) ganancia que proviene de la actividad de un tercero.', fuente: 'SEC v. W.J. Howey Co.; apuntes', seccion: 'howey', sub: 'h-test', alias: ['howey', 'caso howey', 'contrato de inversion'] },
      { termino: 'Instrumento financiero', definicion: 'Categoría amplia de la Ley Fintech que abarca bienes corporales e incorporales, contratos, activos electrónicos y criptoactivos; quedan fuera el dinero y las divisas y los valores de oferta pública.', fuente: 'Ley Fintech, art. 3°; apuntes', seccion: 'howey', sub: 'h-chile', alias: ['instrumentos financieros', 'ley fintech'] },
      { termino: 'Renta variable', definicion: 'Valores cuya rentabilidad es aleatoria y contingente, sin obligación de devolver una suma determinada (acciones, cuotas de fondos).', fuente: 'Apuntes de clases', seccion: 'clasificacion', sub: 'c-variable', alias: ['titulos de renta variable'] },
      { termino: 'Renta fija', definicion: 'Títulos de deuda en que el emisor se compromete a devolver el capital más intereses o reajustes en un plazo prefijado (bonos, efectos de comercio); el riesgo es la insolvencia del emisor.', fuente: 'Apuntes de clases', seccion: 'clasificacion', sub: 'c-fija', alias: ['titulos de renta fija'] },
      { termino: 'Patrimonio de afectación', definicion: 'Conjunto de activos y pasivos afectos a un fin, sin personalidad jurídica, administrado por un tercero y separado de su patrimonio (por ejemplo, un fondo).', fuente: 'Apuntes de clases', seccion: 'acciones-fondos', sub: 'f-intro', alias: ['patrimonio separado'] },
      { termino: 'Fondo mutuo', definicion: 'Fondo en que el aportante puede pedir en cualquier momento el rescate de sus cuotas al valor cuota vigente; la administradora debe liquidar activos y pagar.', fuente: 'Ley 20.712; apuntes', seccion: 'acciones-fondos', sub: 'f-tipos', alias: ['fondos mutuos'] },
      { termino: 'Fondo de inversión', definicion: 'Fondo en que el aportante no puede exigir el rescate hasta el término del plazo (salvo que el reglamento lo permita); obtiene liquidez vendiendo la cuota. Tiene asamblea de aportantes y comité de vigilancia.', fuente: 'Ley 20.712; apuntes', seccion: 'acciones-fondos', sub: 'f-tipos', alias: ['fondos de inversion'] },
      { termino: 'Administradora General de Fondos', definicion: 'Sociedad anónima especial, autorizada y fiscalizada por la CMF, que administra fondos mutuos y de inversión; crea un fondo depositando su reglamento interno en la CMF.', fuente: 'Ley 20.712; apuntes', seccion: 'acciones-fondos', sub: 'f-agf', alias: ['agf'] },
      { termino: 'Fondo de inversión privado', definicion: 'Fondo con un número acotado de aportantes, fuera de la oferta pública y de la fiscalización directa de la LMV y la LUF.', fuente: 'Apuntes de clases', seccion: 'acciones-fondos', sub: 'f-agf', alias: ['fip'] },
      { termino: 'Bono', definicion: 'Título de deuda de largo plazo emitido en serie; los tenedores actúan colectivamente por un representante y una junta de tenedores.', fuente: 'Título XVI LMV (art. 103); apuntes', seccion: 'deuda', sub: 'd-funcionamiento', alias: ['bonos', 'debentures'] },
      { termino: 'Efecto de comercio', definicion: 'Título de deuda de corto plazo (pagarés u otros títulos de crédito) de oferta pública; cada acreedor ejerce sus derechos individualmente.', fuente: 'Título XVII LMV (art. 131); NCG 30/1989; apuntes', seccion: 'deuda', sub: 'd-funcionamiento', alias: ['efectos de comercio'] },
      { termino: 'Línea de bonos', definicion: 'Inscripción en la CMF de un marco con monto máximo y plazo de vigencia, que permite hacer emisiones sucesivas en forma rápida.', fuente: 'Apuntes de clases', seccion: 'deuda', sub: 'd-emision', alias: ['emision por linea', 'linea de efectos de comercio'] },
      { termino: 'Project finance', definicion: 'Bono que financia una obra que aún no existe (autopista, hospital, aeropuerto) y se paga con los flujos futuros de su explotación; los fondos se liberan por hitos.', fuente: 'Apuntes de clases', seccion: 'deuda', sub: 'd-especies', alias: ['bono de financiamiento de proyectos'] },
      { termino: 'Securitización', definicion: 'Operación en que una originadora vende un paquete de flujos presentes y futuros a un patrimonio separado administrado por una securitizadora, que emite bonos respaldados por esos activos y con su producto paga el precio.', fuente: 'Apuntes de clases', seccion: 'deuda', sub: 'd-securitizacion', alias: ['bono securitizado', 'securitizadora'] }
    ],

    secciones: [
      {
        id: 'intro', grupo: 'Mercado de valores', titulo: '1. Introducción, estructura y regulación',
        html: `
<h3 data-sub="mv-unidades">Unidades superavitarias y deficitarias</h3>
<p>El mercado conecta a las <b>unidades superavitarias</b> (tienen ahorro) con las <b>deficitarias</b> (tienen un proyecto y necesitan capital). Primero se recurre a amigos y familia; luego, al <b>banco</b>. El mercado de capitales se relaciona con la Ley 18.092: muchas herramientas de financiamiento vienen de los títulos de crédito y de la circulación de créditos (como el factoring). Hoy abarca además los criptoactivos.</p>
<h3 data-sub="mv-banco">El banco: captación, colocación y spread</h3>
<p>El banco tiene liquidez porque la gente prefiere guardar ahí su dinero antes que «debajo del colchón». Hace dos cosas: <b>capta</b> (recibe depósitos) y <b>coloca</b> (presta). Presta con ánimo de lucro y gana con el <b>spread</b>:</p>
<div class="flow"><div class="node">Tasa de colocación</div><div class="arrow">&gt;</div><div class="node">Tasa de captación</div><div class="arrow">=</div><div class="node y">Spread<small>cubre costos (sucursales, ciberseguridad), utilidades y riesgo</small></div></div>
<p>Se podría pensar en saltarse al banco y repartir el spread entre ahorrantes y deudores. Pero el banco cumple una función de <b>intermediación financiera</b> (art. 3° CCom): evalúa, procesa la información y gestiona los riesgos. Cuando se prescinde del banco, la ley debe asegurar información y transparencia. Hay dos grandes ejes regulatorios:</p>
<h3 data-sub="mv-solvencia">I. Riesgo de solvencia (de no pago)</h3>
<p>¿Me devolverán el capital y los intereses? Nadie tiene una «bolita de cristal» y el banco no está obligado a prestar: evalúa el riesgo con información.</p>
<ul>
  <li><b>Historial crediticio:</b> informe de deudas de la CMF, con clave única.</li>
  <li><b>Registro de Deuda Consolidada:</b> reúne 5 años de deudas con bancos, aseguradoras, mutuarias y tarjetas de retail, con resguardo de datos personales.</li>
  <li><b>Nivel de ingresos:</b> capacidad real de pago.</li>
</ul>
<p>La <b>hipoteca</b> respalda créditos de 20 a 30 años, pero prestar mirando la garantía más que los ingresos es muy riesgoso: ejecutarla es caro e incierto, y el banco prefiere el pago voluntario (crisis subprime: préstamos hasta el 110% del inmueble). Para el riesgo de muerte del deudor se exige <b>seguro de desgravamen</b> (un «gasto hormiga» anual) y a veces exámenes médicos.</p>
<p class="small">Ejemplo de clase: el padre del profesor, médico en Talca, recibía en papel la memoria anual de Endesa (capitalismo popular, años 80). Recibir información no garantiza que un inversionista común pueda entenderla.</p>
<h3 data-sub="mv-liquidez">II. Riesgo de liquidez</h3>
<p>¿Podré recuperar mi dinero cuando lo necesite? El dinero en cuenta corriente o en depósitos es líquido; un <b>inmueble</b> o una <b>obra de arte</b> son ilíquidos: venderlos toma tiempo y trámites. Pueden ser buenas inversiones a largo plazo, pero no sirven ante una emergencia. El mercado de capitales busca instrumentos que se puedan vender rápido, aunque con alguna fluctuación de precio.</p>`
      },
      {
        id: 'valor', grupo: 'Mercado de valores', titulo: '2. Concepto de valor (art. 3° LMV)',
        html: `
<h3 data-sub="v-concepto">Cosificar el derecho: por qué solo se transan valores</h3>
<p>En el mercado de valores solo se transan <b>valores</b>. La ley usa la técnica de los títulos de crédito: «cosificar» el derecho para que circule como una cosa mueble (como un computador o una pelota). Quien entrega dinero para que se lo devuelvan tiene un crédito; la teoría de los títulos y el mercado de valores sirven para superar las trabas de la cesión de créditos. La regulación de la oferta pública de valores protege la fe pública y evita asimetrías de información y esquemas fraudulentos.</p>
<p>Para competir con el banco como alternativa de ahorro, el mercado debe dar <b>liquidez</b>: que el inversionista pueda vender y recuperar su dinero rápido.</p>
<div class="card"><h4 style="margin-top:0">¿Y el Bitcoin?</h4><p>Es un código o mensaje digital que existe en computadores o en la nube, con resguardos como los <i>smart contracts</i>. Intenta funcionar como dinero, pero no tiene el respaldo de un Estado (salvo El Salvador, que lo aceptó como moneda oficial). Como una acción, para convertirlo en dinero hay que venderlo al precio de la oferta y la demanda, que depende de la información disponible. Al Bitcoin le falta información sobre la gestión o el respaldo de una empresa: su precio depende esencialmente de la <b>especulación</b>.</p></div>
<h3 data-sub="v-estructura">El art. 3° LMV: lista legal y cláusula general</h3>
<div class="cita">«Para los efectos de esta ley, se entenderá por valores cualesquiera títulos transferibles incluyendo acciones, opciones a la compra y venta de acciones, bonos, debentures, cuotas de fondos mutuos, planes de ahorro, efectos de comercio y, en general, todo título de crédito o inversión.»<span class="fuente">Art. 3° inc. 1° Ley 18.045</span></div>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Valores por mandato legal</h4><p>Siempre son valores: acciones, cuotas de fondos mutuos, efectos de comercio (letras, pagarés y pagarés del Banco Central), bonos.</p></div>
  <div class="card"><h4 style="margin-top:0">Cláusula general («bolsillo de payaso»)</h4><p>«Todo título de crédito o inversión». Para que un instrumento atípico califique, debe ser formalmente un título de crédito y además de inversión.</p></div>
</div>
<p class="small">Según Mardones (citado en los apuntes): antes de la LMV regía la Ley 16.394 de 1965; la LMV de 1981 trajo la primera definición de valores, amplia e innominada para acoger instrumentos nuevos; la Ley 20.345 incorporó la noción amplia de «instrumentos financieros». Parte de la doctrina critica vincular los valores con la teoría clásica de los títulos-valores: esta mira relaciones privadas, mientras el mercado de valores exige oferta pública (art. 1° LMV) y opera con títulos desmaterializados.</p>
<h3 data-sub="v-requisitos">Requisitos de la SVS/CMF para un valor atípico</h3>
<p>Oficios 987/2006, 9.100/2015 y 3.502/2017. Son <b>acumulativos</b>:</p>
<ol>
  <li><b>Título de crédito o de inversión:</b> relación acreedor-deudor con rendimientos fijados de antemano (crédito), o participación en rendimientos que no dependen del trabajo del titular (inversión).</li>
  <li><b>Autónomo y abstracto:</b> el adquirente tiene un derecho propio, independiente de los poseedores anteriores; no depende de la causa, sino del tenor literal del título.</li>
  <li><b>Transferible:</b> circula libremente, sin trámites engorrosos ni autorizaciones de terceros.</li>
</ol>
<h3 data-sub="v-efectos">Efectos de ser «valor»</h3>
<p>Da competencia de fiscalización a la <b>CMF</b>, somete la actividad a los <b>delitos del mercado</b> (como el uso de información privilegiada) y abre la protección administrativa y judicial al inversionista. Quien es estafado con Bitcoin no puede reclamar a la CMF.</p>
<h3 data-sub="v-acciones">Las acciones son siempre valores</h3>
<p>Una acción da derechos económicos (dividendos), políticos (voto en la junta) y la facultad de venderla. En Chile es valor por mandato legal, sin importar su finalidad: también las de colegios (se compran para obtener la matrícula) o clubes (La Vizcacha, Club de Golf, Club Manquehue), que no dan dividendos ni control. La CMF tuvo que dictar normas especiales para liberarlos de los deberes de las sociedades abiertas. En EE. UU., la Securities Act de 1933 define <i>security</i> «a menos que el contexto requiera lo contrario», lo que permite a los tribunales excluir esos casos. La LMV de 1981 no tiene esa flexibilidad.</p>
<h3 data-sub="v-novalores">No son valores, según la CMF</h3>
<table class="tabla">
<tr><th>Instrumento</th><th>Razón</th></tr>
<tr><td>Cuentas y libretas de ahorro</td><td>No son libremente cedibles ni títulos de crédito.</td></tr>
<tr><td>APV, APVC y depósitos convenidos</td><td>Intransferibles por su fin previsional (salvo cuotas de fondos mutuos).</td></tr>
<tr><td>Depósitos a plazo</td><td>Solo se transfieren con las formas de la cesión de créditos.</td></tr>
<tr><td>Saldos en cuenta corriente, cheques y facturas</td><td>No son títulos de inversión y carecen de autonomía.</td></tr>
<tr><td>Seguros con ahorro, criptomonedas, divisas, oro</td><td>Contratos, medios de pago o bienes corporales.</td></tr>
</table>`
      },
      {
        id: 'howey', grupo: 'Mercado de valores', titulo: '3. Caso Howey',
        html: `
<p>En EE. UU., la Securities Act de 1933 tiene una categoría general para decidir qué acuerdos atípicos son valores (<i>securities</i>). Su estándar viene del caso Howey.</p>
<h3 data-sub="h-caso">Los hechos</h3>
<div class="card"><p><span class="etiqueta azul">SEC v. W.J. Howey Co. (EE. UU.)</span></p>
<p>Howey tenía plantaciones de naranjas en Florida. Vendía pequeñas parcelas a compradores de edad de Nueva York y Boston y, junto con la venta, ofrecía un <b>contrato de administración</b>: Howey cultivaba, cosechaba y vendía, y entregaba las utilidades netas. La Corte Suprema de EE. UU. resolvió que el esquema conjunto (terreno más servicio) era un <b>contrato de inversión</b> sujeto a las leyes bursátiles.</p></div>
<h3 data-sub="h-test">El test de Howey</h3>
<div class="flow"><div class="node">1. Entrega de dinero</div><div class="arrow">+</div><div class="node">2. Expectativa de ganancia</div><div class="arrow">+</div><div class="node hot">3. Ganancia por la actividad de un tercero</div><div class="arrow">=</div><div class="node y">Contrato de inversión<small>(security)</small></div></div>
<p class="small">El segundo elemento distingue la inversión de una donación gratuita, como un aporte a la Teletón.</p>
<h3 data-sub="h-aplicaciones">Aplicaciones: Bitcoin, Herbalife y Endesa</h3>
<ul>
  <li><b>Bitcoin:</b> hay dinero y ánimo de lucro, pero la ganancia depende de la especulación, no de la actividad de un tercero: no es valor bajo Howey.</li>
  <li><b>Herbalife:</b> caso límite, porque mezcla inversión con el trabajo propio de la red.</li>
  <li><b>Endesa (capitalismo popular, años 80):</b> en la privatización de empresas como Endesa, LAN y CTC, los funcionarios públicos podían renunciar a su indemnización por años de servicio a cambio de acciones. Se cumplen los tres elementos: hubo desembolso (la renuncia), se buscaban dividendos, y las ganancias dependían de la gestión de Endesa, no del médico.</li>
</ul>
<h3 data-sub="h-chile">En Chile: la LMV y la Ley Fintech</h3>
<div class="callout yellow"><p><b>En Chile el esquema Howey no sería valor:</b> el art. 3° LMV exige un <b>título de crédito de inversión</b> (abstracto, autónomo y transferible), no basta un contrato de inversión. Por eso los criptoactivos y las plataformas de financiamiento colaborativo quedaron fuera de la LMV y se dictó la <b>Ley Fintech</b>, con la categoría amplia de <b>«instrumento financiero»</b> (art. 3°), que excluye solo el dinero y las divisas (Banco Central) y los valores de oferta pública (LMV).</p><p class="small">Nota: el apunte cita la Ley Fintech como Ley 21.521 y, en otro pasaje, como Ley 21.236. Conviene confirmar el número con la lectura.</p></div>
<p class="small">Según una nota del apunte, en EE. UU. las administraciones de Biden y Trump fueron cambiando de criterio sobre si ciertos criptoactivos son <i>securities</i>; en Chile, el Bitcoin no es valor ni producto bursátil, sino instrumento financiero de la Ley Fintech.</p>
<h3 data-sub="h-facturas">Las facturas y la bolsa de productos</h3>
<p>Había interés en transar facturas en bolsa, como una acción o un bono, pero no estaban en la lista del art. 3° LMV y se discutía si eran títulos de crédito de inversión. La SVS (hoy CMF) resolvió que <b>no son valor</b>. Para transarlas en bolsa sin desnaturalizar la LMV, se usó la <b>Ley 19.220</b> de bolsas de productos (creada para productos agropecuarios), ampliando el concepto de «producto». Así se transan por corredores de productos, con custodia institucional, junto al factoring privado (ver Unidad 7).</p>`
      },
      {
        id: 'clasificacion', grupo: 'Mercado de valores', titulo: '4. Clasificación de valores: renta variable y renta fija',
        html: `
<h3 data-sub="c-distincion">Inversión patrimonial y mutuo</h3>
<p>Es la clasificación madre: atiende al derecho que da el valor y a lo pactado sobre la rentabilidad.</p>
<table class="tabla">
<tr><th></th><th>Renta variable</th><th>Renta fija</th></tr>
<tr><td>Idea</td><td>Inversión patrimonial: se asume el riesgo del negocio, sin devolución garantizada.</td><td>Acreencia de deuda: se pacta devolver capital más intereses o reajustes en un plazo.</td></tr>
<tr><td>Ejemplos</td><td><b>Acciones</b> (dividendos y ganancia de capital); <b>cuotas de fondos</b> (valor cuota diario).</td><td><b>Bonos</b> (largo plazo, en serie) y <b>efectos de comercio</b> (corto plazo, declaraciones individuales).</td></tr>
<tr><td>Riesgo</td><td>Rentabilidad aleatoria y contingente.</td><td>Rentabilidad conocida, pero con riesgo de insolvencia del emisor.</td></tr>
</table>
<h3 data-sub="c-variable">4.1. Valores o títulos de renta variable</h3>
<p>La rentabilidad es incierta: nadie se obliga a devolver una suma ni a garantizar ganancias.</p>
<ul>
  <li><b>Acciones:</b> el ejemplo típico. El accionista gana con los <b>dividendos</b> (si hay utilidades) y con la <b>ganancia de capital</b> al vender más caro.</li>
  <li><b>Cuotas de fondos mutuos y de inversión:</b> en general, igual; el valor cuota varía cada día según los activos del fondo.</li>
</ul>
<div class="callout red"><p><b>Acciones preferentes:</b> la preferencia solo da prioridad en el reparto <b>si hay utilidades</b> («te pago primero a ti hasta cierto monto»). Prometer un dividendo fijo e incondicional aunque haya pérdidas desnaturaliza la acción y la convierte en deuda: esa estipulación es nula.</p></div>
<h3 data-sub="c-fija">4.2. Valores o títulos de renta fija</h3>
<p>Son títulos de <b>deuda</b>: el emisor se obliga a devolver el capital más intereses o reajustes (UF) en un plazo prefijado. El inversionista conoce de antemano la regla de cálculo, pero siempre corre el riesgo de que el emisor caiga en <b>insolvencia</b>.</p>
<ul>
  <li><b>Bonos:</b> deuda de largo plazo de sociedades anónimas, bancos o el Estado. Ejemplo: capital más 5% anual a 24 meses; si el emisor quiebra antes, el inversionista pierde.</li>
  <li><b>Efectos de comercio:</b> deuda de corto plazo (como los pagarés de oferta pública).</li>
</ul>
<p>Diferencia: los bonos se emiten <b>masivamente y en serie</b>; los efectos de comercio son declaraciones independientes sobre operaciones concretas.</p>
<p class="small">Hay fondos mutuos «de renta fija» cuando el reglamento interno garantiza que el 100% se invertirá en títulos de deuda (por ejemplo, pagarés del Banco Central o bonos bancarios).</p>`
      },
      {
        id: 'acciones-fondos', grupo: 'Mercado de valores', titulo: '5. Acciones y cuotas de fondo',
        html: `
<h3 data-sub="ac-acciones">5.1. Acciones: consecuencias de que sean valores</h3>
<p>En Chile la acción es <b>siempre</b> valor (art. 3° LMV), sin mirar para qué se emitió o compró; en EE. UU. depende del contexto.</p>
<ol>
  <li>Para ofrecerlas públicamente hay que <b>inscribir</b> al emisor y las acciones en el <b>Registro de Valores</b> de la CMF (sociedades anónimas abiertas, fiscalizadas).</li>
  <li><b>Deberes de información al público</b>: en la S.A. cerrada la contabilidad es para los accionistas; en la abierta, memorias, balances y estados financieros están disponibles para cualquiera (sitio web y portal de la CMF).</li>
  <li>Las tomas de control se someten al régimen de <b>OPA</b> (Unidad 9), para proteger a los minoritarios.</li>
  <li><span class="norma">Art. 12 LMV</span>: <b>directores, gerentes, ejecutivos principales y accionistas relevantes</b> deben informar a la CMF y al mercado cada compra o venta de acciones de la sociedad. Manejan información interna y sus operaciones son señales: si un director compra, el mercado lo lee como confianza; si vende, como alerta.</li>
</ol>
<h3 data-sub="f-cuotas">5.2. Cuotas de fondo</h3>
<h4 data-sub="f-intro">5.2.1. El fondo como patrimonio de afectación</h4>
<p>El fondo rompe la regla civil de que no hay patrimonio sin persona: es un <b>patrimonio de afectación</b> (universalidad jurídica), sin personalidad jurídica, administrado por una <b>AGF</b> (o una AFP). El patrimonio de la administradora está <b>separado</b> del fondo: los acreedores de una no pueden perseguir los bienes del otro. Ejemplo: si una AFP quiebra, el fondo de pensiones queda blindado.</p>
<h4 data-sub="f-opera">5.2.2. ¿Cómo opera el fondo?</h4>
<ul>
  <li><b>Activo:</b> los aportes de los aportantes, invertidos según la ley y el reglamento interno. A cambio, el aportante recibe <b>cuotas</b> según el valor cuota del día ($100.000 con valor cuota $1.000 = 100 cuotas).</li>
  <li><b>Pasivo:</b> las cuotas emitidas y las deudas que contraiga el fondo.</li>
</ul>
<p>Ambos están regulados por la <span class="norma">Ley 20.712 (LUF)</span> y el reglamento interno. Ejemplo: en los retiros del 10% de la pandemia, las AFP no tenían el dinero en caja, sino invertido; tuvieron que vender activos para pagar, cancelando cuotas.</p>
<h4 data-sub="f-tipos">5.2.3. Tipología de fondos (LUF)</h4>
<table class="tabla">
<tr><th>Fondos de pensiones (AFP)</th><th>Fondos mutuos</th><th>Fondos de inversión</th></tr>
<tr><td>Patrimonio de afectación administrado por una AFP; sus cuotas son valores, pero es ahorro forzoso: no se rescatan antes de jubilar.</td><td><b>Rescate</b> en cualquier momento al valor cuota; no se exigen asamblea ni comité de vigilancia para esas materias.</td><td>Sin rescate hasta el término del plazo (salvo reglamento); liquidez vendiendo la cuota. Exige <b>asamblea de aportantes</b> y <b>comité de vigilancia</b>. <b>Rescatables</b>: pagan rescates en más de 10 y menos de 180 días. <b>No rescatables</b>: sin rescate o con plazo de 180 días o más; sus cuotas deben inscribirse en bolsa.</td></tr>
</table>
<ul>
  <li><b>Fondo mutuo:</b> sus cuotas también pueden transferirse, aunque la salida habitual es el rescate. Ejemplo de clase: en una partición, los herederos se adjudicaron las cuotas por partes iguales; la AGF quería rescatar y reinvertir (con impuesto por ganancia de capital), pero se aceptó transferirlas conservando el valor cuota histórico.</li>
  <li><b>Fondo de inversión:</b> un fondo para construir un edificio no puede funcionar con rescate inmediato: la obra quedaría a medias. El <b>comité de vigilancia</b> no juzga si la inversión es buena (p. ej., acciones de empresas en Ucrania): vigila que la AGF invierta en lo que dice el reglamento y respete los límites.</li>
</ul>
<p class="small">Según Mardones (citado en el apunte), los órganos obligatorios de los fondos no rescatables son la asamblea de aportantes (arts. 72 a 74 LUF) y el comité de vigilancia (arts. 68 a 70 LUF).</p>
<h4 data-sub="f-agf">5.2.4. Administradora General de Fondos (AGF)</h4>
<p>Sociedad anónima especial, autorizada y supervisada por la CMF. Administra los fondos y modifica su reglamento interno.</p>
<div class="flow"><div class="node">1. Redacta el reglamento interno<small>política de inversión, plazo, comisiones</small></div><div class="arrow">→</div><div class="node">2. Lo deposita en el registro de la CMF<small>sin aprobación previa</small></div><div class="arrow">→</div><div class="node y">3. Al día hábil siguiente<small>puede comercializar el fondo</small></div></div>
<p>Por eso la CMF fiscaliza <b>ex post</b>: puede exigir correcciones o suspender la comercialización. Con recursos limitados, audita integralmente a cada AGF cerca de una vez cada 5 años, según una matriz de riesgo (primero las más grandes o con inconsistencias), y revisa si se cumplen las políticas de inversión.</p>
<p>Los <b>FIP</b> (fondos de inversión privados) tienen pocos aportantes y quedan fuera de la oferta pública y de la fiscalización directa de la LMV y la LUF. Se conectan con el mercado público si invierten en acciones de sociedades abiertas o reciben financiamiento de fondos públicos.</p>
<div class="card"><p><b>Azul Azul y el FIP Tactical Sport</b></p><p>Azul Azul S.A. es una sociedad abierta. Cerca del 63% de sus acciones era del FIP Tactical Sport, administrado por Asesorías Sartor. Su activo eran esas acciones; sus cuotas eran 90% de Sartor y 10% de Inversiones Antumalal (Michael Clark); y tenía deudas con otros fondos públicos de Sartor, que le prestaron para comprar en la OPA de 2021 sin prenda. Al no pagar, los fondos acreedores demandaron y se embargaron las acciones, que hoy maneja un liquidador para rematarlas.</p></div>
<h4 data-sub="f-casos">5.2.5. Casos</h4>
<p>La AGF administra dinero ajeno: por eso la LUF intensifica sus deberes de <b>diligencia</b> y <b>lealtad</b>, más que los de un directorio que administra bienes de la propia sociedad.</p>
<div class="card" style="margin-bottom:12px"><p><span class="etiqueta roja">Pregunta de examen</span> <b>Caso Aurus (2016)</b></p><p>En Aurus AGF (fondos Insignia y Global), el director Mauricio Peña desvió fondos durante casi 5 años y apostó en el casino Monticello para tapar el déficit: unos US$30 millones. Falsificaba informes con inversiones inexistentes en acciones de empresas de Perú; cuando las auditoras no lograban confirmarlas, él entregaba cartas falsas sobre «errores de registro», y ellas las aceptaban sin verificar con la fuente. Los otros cuatro directores no sabían, pero confiaban ciegamente en él y no exigían arqueos. En mayo de 2016 la SVS constató que los controles internos no funcionaban; el auditor interno nombrado por eso descubrió el fraude en septiembre y lo informó en octubre. Peña fue procesado por estafa y entrega de información falsa. Los demás directores indemnizaron cerca de US$20 millones (dos tercios) y cerraron la AGF. En 2018 la CMF los sancionó solo por <b>negligencia</b>, con 1.000 UF por director.</p><p class="small">Lección: el directorio de una AGF maneja dinero ajeno; sus deberes de cuidado y lealtad son más intensos.</p></div>
<div class="card" style="margin-bottom:12px"><p><b>Caso Sartor (2024)</b></p><p>Sartor AGF captaba en el mercado público y derivaba el dinero a FIP, sociedades cerradas o extranjeras, donde no hay deberes de información. Se otorgaban préstamos sin garantías a sociedades de los mismos dueños, que se renovaban sin cobrarse; así se financiaron, por ejemplo, proyectos inmobiliarios en Miami, sin que el fondo fuera dueño del activo. Pérdidas estimadas de 50% a 70% del valor de las cuotas. A diferencia de Aurus, nadie compensó a los aportantes: la CMF <b>intervino</b> la AGF a fines de 2024, asumió la gestión de los fondos y formuló cargos por infracción al deber de <b>lealtad</b> (conflicto de interés). El Ministerio Público levantó el secreto bancario y los principales ejecutivos fueron formalizados con prisión preventiva o arresto domiciliario.</p></div>`
      },
      {
        id: 'deuda', grupo: 'Mercado de valores', titulo: '6. Instrumentos del mercado de renta fija (deuda)',
        html: `
<h3 data-sub="d-intro">6.1. Introducción: bono o efecto de comercio según el plazo</h3>
<p>La renta fija son títulos de deuda: el deudor se obliga a devolver el capital más intereses o reajustes. El criterio tradicional es el plazo, con eje en 1 año:</p>
<table class="tabla">
<tr><th></th><th>Bonos</th><th>Efectos de comercio</th></tr>
<tr><td>Plazo</td><td>Largo plazo (Título XVI LMV; art. 103: la deuda de largo plazo solo mediante bonos). Desde 1 año.</td><td>Corto plazo (Título XVII LMV; art. 131: pagarés u otros títulos; NCG 30/1989). Hasta 36 meses.</td></tr>
</table>
<div class="callout"><p><b>Traslape:</b> entre 1 y 3 años el emisor elige bono o efectos de comercio; sobre 3 años, bono obligatorio; bajo 1 año, pagarés o letras. Ejemplo: las empresas de factoring se financian con efectos de comercio para comprar facturas a 30, 60 o 90 días.</p></div>
<p class="small">En el apunte, el Título XVII aparece a la vez como deuda «menor a 1 año» y «no superior a 36 meses»; el traslape explica ambas cifras.</p>
<h3 data-sub="d-funcionamiento">6.2. Funcionamiento: colectivo o individual</h3>
<table class="tabla">
<tr><th>Bonos: funcionamiento colectivo</th><th>Efectos de comercio: funcionamiento individual</th></tr>
<tr><td>Los tenedores actúan por un <b>representante</b> único (habitualmente un banco), que el emisor elige en la escritura de emisión, cuando aún no hay compradores, y que la <b>junta de tenedores</b> puede cambiar. El representante fiscaliza el contrato y ahorra a cada acreedor el costo de vigilar. La junta decide lo más importante: la <b>aceleración</b> de la deuda y el voto en la reorganización concursal (Ley 20.720).</td><td>Sin representante ni junta: cada acreedor ejerce sus derechos por separado.</td></tr>
</table>
<h3 data-sub="d-emision">6.3. Modalidades de emisión</h3>
<div class="grid dos">
  <div class="card"><b>Emisión por monto fijo</b><p>Se redacta por escritura pública y se inscribe en la CMF un monto cerrado. La tramitación toma tiempo: si mientras tanto el Banco Central sube las tasas, se pierde la oportunidad de financiarse más barato.</p></div>
  <div class="card"><b>Emisión por línea</b><p>Se inscribe un marco (monto máximo y plazo, p. ej. 10 millones de UF a 30 años) y se hacen emisiones sucesivas en unas 48 horas, como una línea de sobregiro o una tarjeta de crédito. Permite refinanciar o prepagar emisiones caras si bajan las tasas.</p></div>
</div>
<p><b>Impuesto de timbres:</b> las líneas de corto plazo o de hasta 10 años tienen beneficios en este impuesto (tasa máxima cercana al 0,8%). Tras la crisis subprime se eximió temporalmente, y las empresas lo aprovecharon para refinanciar.</p>
<h3 data-sub="d-especies">6.4–6.4.1. Bonos: especies tipo</h3>
<table class="tabla">
<tr><th>Bono corporativo</th><th>Project finance</th><th>Bono securitizado</th></tr>
<tr><td>Financia una empresa en marcha (CCU, Cencosud). El riesgo se mide con su historia y sus estados financieros.</td><td>Financia una obra que aún no existe (autopista, metro, hospital, puerto). Se paga con los flujos de la explotación (peajes, tasas aeroportuarias); los fondos se liberan por hitos auditados.</td><td>Respaldado por un paquete de flujos que la originadora vende a un patrimonio separado.</td></tr>
</table>
<p><b>Garantía del project finance:</b> se exige prenda sobre la concesión o sobre los ingresos futuros. Si el deudor abandona la obra (caso de la Autopista del Aconcagua, sector Las Chilcas), los tenedores, por medio del banco representante, ejecutan la prenda, toman la concesión y siguen construyendo.</p>
<h4 data-sub="d-securitizacion">Bono de securitización</h4>
<p>Convierte flujos <b>ilíquidos</b> (créditos que no se pueden vender fácilmente) en un valor líquido que se transa en el mercado (de <i>security</i>). La entidad obtiene de una vez el dinero que, si no, recibiría en cobros parciales durante años. La <b>securitizadora</b> es una sociedad anónima especial fiscalizada por la CMF y administra un <b>patrimonio separado</b> del suyo.</p>
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
<p>La venta se hace por un <b>contrato global</b> (bienes presentes y cosa futura), para evitar ceder y notificar crédito por crédito. <b>Caso UDP</b> (años 2000): la Universidad Diego Portales necesitaba mucho capital rápido y un crédito o un bono corporativo no bastaban. Su principal activo era el flujo predecible de matrículas. Vendió sus flujos de matrículas presentes y futuras; con el bono a 10-20 años obtuvo de una vez el dinero para Medicina, la Biblioteca Nicanor Parra y el campus Huechuraba, y siguió cobrando las matrículas por cuenta del patrimonio separado. En la <b>banca hipotecaria</b>, securitizar libera capital inmovilizado por 20 o 30 años para volver a prestar: el banco no es un inversionista pasivo de largo plazo.</p>
<h4 data-sub="d-subprime">Crisis subprime (2008)</h4>
<div class="callout red"><p><span class="etiqueta roja">Pregunta de examen</span> <b>Crisis subprime (2008).</b> Para seguir colocando, la banca de EE. UU. prestó a deudores «NINJA» (<i>no income, no job, no assets</i>), confiando en la garantía y no en la solvencia, hasta el 110% del valor de la vivienda, bajo la idea de que los precios seguirían subiendo. Cuando subieron las tasas (2006-2007), cayeron los precios: las garantías no alcanzaron, los deudores dejaron de pagar y los <b>bonos securitizados</b> perdieron su valor. Como estaban repartidos en el mundo, la crisis se propagó («si EE. UU. se resfría, al mundo le da una pulmonía»). Chile la sorteó, a diferencia de Grecia o Islandia, usando las reservas acumuladas por el Fisco (ministro Andrés Velasco) para inyectar liquidez.</p></div>
<p><b>Ejemplo de clase:</b> un banco presta US$110.000 a un deudor NINJA para una casa de US$100.000, suponiendo que en un año valdrá US$130.000. Suben las tasas, la casa cae a US$60.000, el remate no alcanza, el deudor abandona la casa y el bono securitizado pierde su valor.</p>`
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
      { tipo: 'alternativas', seccion: 'intro', sub: 'mv-solvencia', enunciado: '¿Cuáles son los dos grandes ejes regulatorios del mercado de valores según el profesor?', opciones: ['Riesgo de solvencia y riesgo de liquidez', 'Riesgo cambiario y riesgo político', 'Inflación y tipo de cambio', 'Usura y anatocismo'], correcta: 0, explicacion: '¿Me pagarán? y ¿podré recuperar mi dinero cuando lo necesite?' },
      { tipo: 'vf', seccion: 'intro', sub: 'mv-banco', enunciado: 'El spread bancario es la diferencia entre la tasa de colocación y la tasa de captación.', respuesta: true, explicacion: 'La tasa de colocación siempre es mayor.' },
      { tipo: 'alternativas', seccion: 'valor', sub: 'v-requisitos', enunciado: '¿Qué requisitos exige la CMF para que un instrumento atípico sea «valor»?', opciones: ['Título de crédito o inversión, autónomo y abstracto, y transferible', 'Inscripción en el Registro de Valores y clasificación de riesgo', 'Emisión por una sociedad anónima abierta', 'Que lo transe un corredor de bolsa'], correcta: 0, explicacion: 'Oficios 987/2006, 9.100/2015 y 3.502/2017.' },
      { tipo: 'vf', seccion: 'valor', sub: 'v-acciones', enunciado: 'En Chile, la acción de un club social que no reparte dividendos no es valor, porque falta la finalidad de inversión.', respuesta: false, explicacion: 'Las acciones son siempre valores por el art. 3° LMV. En EE. UU. sí podría excluirse por el contexto.' },
      { tipo: 'alternativas', seccion: 'valor', sub: 'v-novalores', enunciado: '¿Cuál de estos NO es valor según la CMF?', opciones: ['Un depósito a plazo', 'Una cuota de fondo mutuo', 'Un bono', 'Un efecto de comercio'], correcta: 0, explicacion: 'Solo se transfiere con las formas de la cesión de créditos.' },
      { tipo: 'alternativas', seccion: 'valor', sub: 'v-efectos', enunciado: '¿Qué consecuencia tiene que un instrumento sea «valor»?', opciones: ['Queda bajo la fiscalización de la CMF y los delitos del mercado, como el uso de información privilegiada', 'Queda exento de impuestos', 'Pasa a ser garantizado por el Estado', 'Se transforma en un título nominativo'], correcta: 0, explicacion: 'Además, el inversionista accede a la protección administrativa y judicial.' },
      { tipo: 'relacionar', seccion: 'valor', sub: 'v-novalores', enunciado: 'Relaciona cada instrumento con la razón por la que no es valor.', pares: [['Libreta de ahorro', 'No es libremente cedible'], ['APV', 'Intransferible por su fin previsional'], ['Factura', 'Carece de autonomía'], ['Oro', 'Es un bien corporal']], explicacion: 'Según los criterios de la CMF.' },
      { tipo: 'alternativas', seccion: 'howey', sub: 'h-test', enunciado: '¿Cuáles son los elementos del test de Howey?', opciones: ['Entrega de dinero, expectativa de ganancia y ganancia por la actividad de un tercero', 'Título, modo y causa', 'Abstracción, autonomía y literalidad', 'Oferta pública, inscripción y clasificación'], correcta: 0, explicacion: 'Si concurren, hay un contrato de inversión (security).' },
      { tipo: 'vf', seccion: 'howey', sub: 'h-chile', enunciado: 'El esquema de Howey (parcela más contrato de administración) sería un valor en Chile.', respuesta: false, explicacion: 'La LMV exige un título de crédito de inversión; un contrato de inversión no basta.' },
      { tipo: 'alternativas', seccion: 'howey', sub: 'h-aplicaciones', enunciado: '¿Por qué el Bitcoin no es valor bajo el test de Howey?', opciones: ['Porque la ganancia depende de la especulación y no de la actividad de un tercero', 'Porque no hay entrega de dinero', 'Porque no hay ánimo de lucro', 'Porque es emitido por un Estado'], correcta: 0, explicacion: 'Concurren dinero y lucro, pero falta el tercer elemento.' },
      { tipo: 'alternativas', seccion: 'howey', sub: 'h-chile', enunciado: '¿Qué queda fuera de la categoría de «instrumento financiero» de la Ley Fintech?', opciones: ['El dinero y las divisas, y los valores de oferta pública', 'Los criptoactivos', 'Los contratos', 'Los activos electrónicos'], correcta: 0, explicacion: 'Los primeros son del Banco Central; los segundos, de la LMV.' },
      { tipo: 'alternativas', seccion: 'clasificacion', sub: 'c-variable', enunciado: 'Una S.A. emite acciones preferentes con un dividendo asegurado aunque tenga pérdidas. ¿Qué ocurre?', opciones: ['La estipulación es nula: desnaturaliza la acción y la convierte en deuda', 'Es válida si la junta la aprueba', 'Transforma la acción en bono', 'Es válida solo en sociedades abiertas'], correcta: 0, explicacion: 'La preferencia solo da prioridad si hay utilidades.' },
      { tipo: 'relacionar', seccion: 'clasificacion', sub: 'c-distincion', enunciado: 'Relaciona cada valor con su tipo de renta.', pares: [['Acción', 'Renta variable'], ['Cuota de fondo mutuo', 'Renta variable (en general)'], ['Bono', 'Renta fija'], ['Efecto de comercio', 'Renta fija']], explicacion: 'La renta fija tiene riesgo de insolvencia del emisor.' },
      { tipo: 'vf', seccion: 'clasificacion', sub: 'c-fija', enunciado: 'Los bonos se emiten en serie; los efectos de comercio responden a declaraciones independientes.', respuesta: true, explicacion: 'Según los apuntes.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', sub: 'ac-acciones', enunciado: 'Según el art. 12 LMV, ¿quiénes deben informar sus compras y ventas de acciones de la sociedad?', opciones: ['Directores, gerentes, ejecutivos principales y accionistas relevantes', 'Todos los accionistas', 'Solo el controlador', 'Solo los corredores de bolsa'], correcta: 0, explicacion: 'Sus operaciones son señales para el mercado.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', sub: 'f-intro', enunciado: '¿Qué es jurídicamente un fondo?', opciones: ['Un patrimonio de afectación sin personalidad jurídica, administrado por un tercero', 'Una sociedad anónima', 'Un contrato de mandato', 'Una persona jurídica sin fines de lucro'], correcta: 0, explicacion: 'Rompe la regla civil de que no hay patrimonio sin persona.' },
      { tipo: 'vf', seccion: 'acciones-fondos', sub: 'f-intro', enunciado: 'Si una AGF quiebra, sus acreedores pueden embargar los activos de los fondos que administra.', respuesta: false, explicacion: 'Los patrimonios están separados.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', sub: 'f-tipos', enunciado: 'Un fondo de inversión paga rescates en 200 días. ¿Cómo se clasifica?', opciones: ['No rescatable: sus cuotas deben inscribirse en bolsa', 'Rescatable', 'Fondo mutuo', 'Fondo de inversión privado'], correcta: 0, explicacion: 'Rescatable: más de 10 y menos de 180 días.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', sub: 'f-agf', enunciado: '¿Cómo se crea un nuevo fondo de una AGF ya autorizada?', opciones: ['Depositando el reglamento interno en la CMF; al día hábil siguiente puede comercializarse', 'Con aprobación previa de la CMF', 'Por escritura pública inscrita', 'Por decreto del Ministerio de Hacienda'], correcta: 0, explicacion: 'La fiscalización es ex post.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', sub: 'f-casos', enunciado: 'En el caso Aurus, ¿por qué sancionó la CMF a los directores que no participaron del fraude?', opciones: ['Por negligencia: confiaron ciegamente y no exigieron controles', 'Por dolo', 'Por uso de información privilegiada', 'No los sancionó'], correcta: 0, explicacion: '1.000 UF por director, considerando que indemnizaron cerca de dos tercios de la pérdida.' },
      { tipo: 'vf', seccion: 'acciones-fondos', sub: 'f-casos', enunciado: 'En el caso Sartor, la CMF intervino la AGF y formuló cargos por infracción al deber de lealtad.', respuesta: true, explicacion: 'Préstamos sin garantías a sociedades vinculadas, en conflicto de interés.' },
      { tipo: 'relacionar', seccion: 'acciones-fondos', sub: 'f-casos', enunciado: 'Relaciona cada caso con su rasgo.', pares: [['Aurus', 'Desvío de fondos y auditoras sin verificar'], ['Sartor', 'Préstamos sin garantía a empresas vinculadas'], ['Azul Azul', 'FIP con el 63% de las acciones, embargado']], explicacion: 'Casos de fondos vistos en clases.' },
      { tipo: 'alternativas', seccion: 'deuda', sub: 'd-intro', enunciado: 'Una empresa quiere endeudarse a 5 años en el mercado de valores. ¿Qué debe emitir?', opciones: ['Bonos', 'Efectos de comercio', 'Letras de cambio', 'Cualquiera de ellos'], correcta: 0, explicacion: 'Sobre 3 años el bono es obligatorio.' },
      { tipo: 'vf', seccion: 'deuda', sub: 'd-funcionamiento', enunciado: 'En los bonos, la decisión de acelerar la deuda la toma la junta de tenedores.', respuesta: true, explicacion: 'Funcionamiento colectivo, mediante representante y junta.' },
      { tipo: 'alternativas', seccion: 'deuda', sub: 'd-emision', enunciado: '¿Qué ventaja tiene la emisión por línea?', opciones: ['Permite emisiones sucesivas rápidas dentro de un monto y plazo inscritos', 'Evita la inscripción en la CMF', 'Elimina el riesgo de solvencia', 'Garantiza la tasa de interés'], correcta: 0, explicacion: 'Funciona como una línea de crédito y permite refinanciar si bajan las tasas.' },
      { tipo: 'relacionar', seccion: 'deuda', sub: 'd-especies', enunciado: 'Relaciona cada bono con lo que financia.', pares: [['Corporativo', 'Empresa en marcha'], ['Project finance', 'Obra que aún no existe'], ['Securitizado', 'Paquete de flujos de una originadora']], explicacion: 'Las tres especies de bonos.' },
      { tipo: 'alternativas', seccion: 'deuda', sub: 'd-securitizacion', enunciado: '¿Qué vendió la UDP en su securitización?', opciones: ['Sus flujos de matrículas presentes y futuras', 'Sus edificios', 'Acciones de la universidad', 'Bonos del Banco Central'], correcta: 0, explicacion: 'Con el bono obtuvo de una vez los fondos para construir.' },
      { tipo: 'alternativas', seccion: 'deuda', sub: 'd-subprime', enunciado: '¿Qué detonó la crisis subprime?', opciones: ['Préstamos a deudores sin capacidad de pago confiando en la garantía, y la caída de precios al subir las tasas', 'La quiebra del Banco Central de Chile', 'La prohibición de securitizar', 'La baja de tasas de interés'], correcta: 0, explicacion: 'Los bonos securitizados perdieron su valor y la crisis se propagó.' },

      { tipo: 'oral', seccion: 'valor', sub: 'v-estructura', enunciado: '¿Qué es un «valor» para la Ley de Mercado de Valores y qué consecuencias tiene?', puntos: ['Art. 3° LMV: títulos transferibles; lista por mandato legal (acciones, bonos, cuotas, efectos de comercio) y cláusula general «todo título de crédito o inversión».', 'Requisitos CMF: título de crédito o inversión; autónomo y abstracto; transferible.', 'Consecuencias: fiscalización de la CMF, delitos del mercado y protección al inversionista.', 'Las acciones siempre son valores (colegios y clubes) vs. «unless the context otherwise requires» en EE. UU.', 'No son valores: libretas, APV, depósitos a plazo, cheques, facturas, criptomonedas, oro.'], norma: 'Art. 3° Ley 18.045' },
      { tipo: 'oral', seccion: 'howey', sub: 'h-caso', enunciado: 'Explique el caso Howey y por qué en Chile la solución es distinta.', puntos: ['Hechos: parcelas de naranjos más contrato de administración; contrato de inversión.', 'Test: dinero, expectativa de ganancia, ganancia por actividad de un tercero.', 'Aplicaciones: Bitcoin no; Herbalife caso límite; Endesa sí.', 'Chile: la LMV exige título de crédito de inversión; Howey no sería valor.', 'Por eso la Ley Fintech y el concepto de instrumento financiero (fuera: dinero y divisas, valores de oferta pública).'], norma: 'SEC v. W.J. Howey Co.; art. 3° LMV; Ley Fintech' },
      { tipo: 'oral', seccion: 'acciones-fondos', sub: 'f-tipos', enunciado: 'Explique los fondos mutuos y de inversión, el rol de la AGF y el caso Aurus.', puntos: ['Fondo: patrimonio de afectación sin personalidad, separado de la AGF.', 'Fondos mutuos: rescate en cualquier momento.', 'Fondos de inversión: sin rescate libre; asamblea y comité de vigilancia; rescatables (10-180 días) y no rescatables (180+, cuotas en bolsa).', 'AGF: S.A.E.; nuevo fondo por depósito del reglamento; fiscalización ex post; FIP fuera de la oferta pública.', 'Aurus: desvío de US$30 millones, auditoras sin verificar, directores negligentes; indemnizaron y fueron multados con 1.000 UF cada uno. Deberes fiduciarios intensificados.'], norma: 'Ley 20.712 (LUF)' },
      { tipo: 'oral', seccion: 'deuda', sub: 'd-securitizacion', enunciado: 'Explique la securitización y su relación con la crisis subprime.', puntos: ['Originadora vende flujos presentes y futuros (contrato global) a un patrimonio separado de una securitizadora (S.A.E. fiscalizada).', 'El patrimonio emite un bono securitizado; con lo recaudado paga a la originadora, que sigue cobrando por su cuenta.', 'Caso UDP (matrículas) y carteras hipotecarias (liberar capital).', 'Subprime: préstamos NINJA hasta 110% confiando en la garantía; suben tasas, caen precios, no pago, bonos sin valor, contagio global.', 'Chile la sorteó con sus reservas.'], norma: 'Apuntes (Gaspar); Mardones II' },
      { tipo: 'oral', seccion: 'deuda', sub: 'd-funcionamiento', enunciado: 'Compare bonos y efectos de comercio.', puntos: ['Bonos: largo plazo (Título XVI, art. 103), en serie, actuación colectiva con representante y junta (aceleración, reorganización).', 'Efectos de comercio: corto plazo (Título XVII, art. 131; NCG 30/1989), hasta 36 meses, actuación individual.', 'Traslape entre 1 y 3 años; sobre 3 años, bono.', 'Emisión por monto fijo o por línea.', 'Especies de bonos: corporativo, project finance, securitizado.'], norma: 'Títulos XVI y XVII LMV' },

      { tipo: 'alternativas', seccion: 'intro', sub: 'mv-unidades', enunciado: 'Según el apunte, ¿a quiénes conecta el mercado de valores?', opciones: ['A las unidades superavitarias (con ahorro) con las deficitarias (con un proyecto que necesita capital)', 'Al Banco Central con los bancos comerciales', 'A los deudores morosos con sus acreedores', 'A los exportadores con los importadores'], correcta: 0, explicacion: 'Antes de llegar al mercado se recurre a amigos, familia y bancos.' },
      { tipo: 'alternativas', seccion: 'intro', sub: 'mv-solvencia', enunciado: '¿Qué exige el banco para cubrir el riesgo de que el deudor muera antes de pagar un crédito de largo plazo?', opciones: ['Un seguro de desgravamen y, a veces, exámenes médicos', 'Una segunda hipoteca', 'Un aval del Banco Central', 'Una cláusula de aceleración'], correcta: 0, explicacion: 'Se cobra como una pequeña cuota anual («gasto hormiga»).' },
      { tipo: 'vf', seccion: 'intro', sub: 'mv-liquidez', enunciado: 'Una obra de arte es una inversión líquida, porque puede ser rentable a largo plazo.', respuesta: false, explicacion: 'Puede ser rentable, pero venderla toma tiempo y trámites: es ilíquida.' },
      { tipo: 'alternativas', seccion: 'valor', sub: 'v-concepto', enunciado: 'Según el apunte, ¿por qué el precio del Bitcoin depende esencialmente de la especulación?', opciones: ['Porque no hay información sobre la gestión o el respaldo de una empresa detrás', 'Porque lo fija el Banco Central', 'Porque está prohibido venderlo', 'Porque su emisión es ilimitada por ley'], correcta: 0, explicacion: 'El precio de una acción también depende de la oferta y la demanda, pero hay información de la empresa.' },
      { tipo: 'alternativas', seccion: 'valor', sub: 'v-estructura', enunciado: '¿Qué es el «bolsillo de payaso» del art. 3° LMV?', opciones: ['La cláusula general: «todo título de crédito o inversión»', 'La lista de instrumentos que nunca son valores', 'El registro de valores de la CMF', 'La excepción de las acciones de clubes'], correcta: 0, explicacion: 'Para entrar por ella, el instrumento debe ser título de crédito y además de inversión.' },
      { tipo: 'alternativas', seccion: 'howey', sub: 'h-caso', enunciado: 'En el caso Howey, ¿qué ofrecía la empresa junto con la venta de las parcelas de naranjos?', opciones: ['Un contrato de administración: cultivaba, cosechaba, vendía y entregaba las utilidades', 'Un seguro contra heladas', 'Acciones de la empresa', 'Un crédito hipotecario'], correcta: 0, explicacion: 'El esquema conjunto fue calificado como contrato de inversión.' },
      { tipo: 'vf', seccion: 'howey', sub: 'h-test', enunciado: 'Un aporte a la Teletón cumple el requisito de expectativa de ganancia del test de Howey.', respuesta: false, explicacion: 'Es una donación gratuita: hay entrega de dinero, pero no ánimo de lucro.' },
      { tipo: 'alternativas', seccion: 'howey', sub: 'h-facturas', enunciado: '¿Por qué las facturas se transan en la bolsa de productos y no en la de valores?', opciones: ['Porque la SVS (hoy CMF) resolvió que no son valor, y se amplió el concepto de «producto» de la Ley 19.220', 'Porque son títulos al portador', 'Porque la LMV prohíbe transar títulos causados', 'Porque solo los bancos pueden comprarlas'], correcta: 0, explicacion: 'Así se creó un mercado público de facturas que convive con el factoring privado.' },
      { tipo: 'vf', seccion: 'clasificacion', sub: 'c-fija', enunciado: 'Como en un bono la rentabilidad está fijada por contrato, el inversionista no corre ningún riesgo.', respuesta: false, explicacion: 'Si el emisor cae en insolvencia antes del vencimiento, el inversionista pierde.' },
      { tipo: 'vf', seccion: 'acciones-fondos', sub: 'ac-acciones', enunciado: 'En una sociedad anónima abierta, las memorias y estados financieros solo están disponibles para los accionistas.', respuesta: false, explicacion: 'Deben estar a disposición del público; en la S.A. cerrada se reservan a los accionistas.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', sub: 'f-opera', enunciado: 'Un aportante entrega $100.000 a un fondo cuyo valor cuota es $1.000. ¿Qué recibe?', opciones: ['100 cuotas', '1.000 cuotas', '$100.000 en acciones', 'Un pagaré por $100.000'], correcta: 0, explicacion: 'Las cuotas se calculan según el valor cuota del día del aporte.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', sub: 'f-tipos', enunciado: '¿Qué hace el comité de vigilancia de un fondo de inversión?', opciones: ['Vigila que la AGF invierta según el reglamento interno y respete los límites, sin juzgar si la inversión es buena', 'Decide en qué invertir', 'Aprueba el reglamento interno antes de su depósito', 'Paga los rescates'], correcta: 0, explicacion: 'Ejemplo de clase: un fondo para invertir en empresas de Ucrania.' },
      { tipo: 'vf', seccion: 'acciones-fondos', sub: 'f-agf', enunciado: 'Un fondo de inversión privado (FIP) queda fuera de la oferta pública y de la fiscalización directa de la LMV y la LUF.', respuesta: true, explicacion: 'Pero se conecta con el mercado si invierte en sociedades abiertas o recibe financiamiento de fondos públicos (Azul Azul).' },
      { tipo: 'vf', seccion: 'deuda', sub: 'd-intro', enunciado: 'Para endeudarse a 2 años, una empresa puede elegir entre emitir bonos o efectos de comercio.', respuesta: true, explicacion: 'Entre 1 y 3 años los plazos se traslapan.' },
      { tipo: 'alternativas', seccion: 'deuda', sub: 'd-emision', enunciado: '¿Qué desventaja tiene la emisión de bonos por monto fijo?', opciones: ['Su tramitación toma tiempo y se puede perder la oportunidad de tasas bajas', 'No requiere escritura pública', 'No se inscribe en la CMF', 'No permite pagar intereses'], correcta: 0, explicacion: 'La emisión por línea resuelve esto con emisiones en unas 48 horas.' },
      { tipo: 'vf', seccion: 'deuda', sub: 'd-especies', enunciado: 'En el project finance, los fondos se entregan al emisor apenas se coloca el bono.', respuesta: false, explicacion: 'Se liberan por hitos de construcción auditados, y se exige prenda sobre la concesión o sus ingresos.' },
      { tipo: 'alternativas', seccion: 'deuda', sub: 'd-subprime', enunciado: '¿Qué significa «NINJA» en la crisis subprime?', opciones: ['No income, no job, no assets: deudores sin ingresos, empleo ni activos', 'Un tipo de bono securitizado', 'Un fondo de inversión de alto riesgo', 'Un banco de inversión japonés'], correcta: 0, explicacion: 'La banca reemplazó la evaluación de solvencia por la confianza en la garantía.' },
      { tipo: 'oral', seccion: 'intro', sub: 'mv-solvencia', enunciado: 'Explique para qué existe el mercado de valores y sus dos ejes regulatorios.', puntos: ['Conecta unidades superavitarias y deficitarias; primero amigos, familia y banco.', 'El banco: captación, colocación y spread; intermediación financiera.', 'Riesgo de solvencia: información (historial, deuda consolidada, ingresos); hipotecas y desgravamen; subprime.', 'Riesgo de liquidez: poder vender la inversión cuando se necesita (inmuebles y arte son ilíquidos).', 'Sin banco, la ley debe asegurar información y transparencia.'], norma: 'Apuntes (Gaspar), mercado de valores, punto 1' },

      /* ---- Preguntas de razonamiento (borrador de NotebookLM, revisadas contra el apunte de Gaspar) ---- */
      { tipo: 'alternativas', seccion: 'intro', sub: 'mv-banco', enunciado: 'Una empresa no pide crédito al banco: emite pagarés de oferta pública y los coloca directo entre inversionistas. Sin el banco, ¿qué tarea suya debe suplir la ley?', opciones: ['Evaluar el riesgo del deudor: la ley debe exigir transparencia e información pública para que el inversionista lo evalúe', 'Garantizar el pago: la CMF responde si el emisor no paga', 'Ninguna: sin intermediario desaparece el riesgo de no pago', 'Fijar el spread que la empresa debe pagar a los inversionistas'], correcta: 0, explicacion: 'El banco evalúa y procesa la información del riesgo. Cuando se prescinde de él, la ley debe fijar un marco estricto de transparencia e información. La CMF no garantiza el pago.' },
      { tipo: 'alternativas', seccion: 'valor', sub: 'v-concepto', enunciado: 'Un inversionista tiene un local comercial y unos bonos. Ante una emergencia necesita dinero. ¿Por qué le será más fácil vender los bonos?', opciones: ['Porque el bono «cosifica» el crédito: circula como una cosa mueble, sin las trabas de la cesión de créditos', 'Porque el bono tiene curso forzoso y cualquiera debe recibirlo como dinero', 'Porque el Estado garantiza el precio de los bonos', 'Porque el bono es de renta fija y no tiene riesgo'], correcta: 0, explicacion: 'Los inmuebles son ilíquidos: venderlos toma trámites y tiempo. El mercado de valores usa la técnica de los títulos de crédito para dar liquidez. Solo el dinero tiene curso forzoso.' },
      { tipo: 'vf', seccion: 'valor', sub: 'v-novalores', enunciado: 'Si los fondos de un APV se invierten en cuotas de fondos mutuos, esas cuotas son valores.', respuesta: true, explicacion: 'El APV no es valor porque es intransferible por su fin previsional, pero las cuotas de fondos mutuos sí lo son (art. 3° LMV).' },
      { tipo: 'alternativas', seccion: 'valor', sub: 'v-acciones', enunciado: 'Se compran acciones de una sociedad dueña de un club deportivo solo para usar sus instalaciones. ¿Cómo se resuelve en Chile y en EE. UU.?', opciones: ['En Chile es valor por mandato del art. 3° LMV; en EE. UU., «unless the context otherwise requires» permite excluirla por no ser inversión', 'En los dos países es valor, sin excepción', 'En Chile el test de Howey la excluye; en EE. UU. siempre es valor', 'En ninguno es valor, porque no reparte dividendos'], correcta: 0, explicacion: 'La LMV de 1981 se basó rígidamente en la teoría del título de crédito. Por eso la CMF tuvo que dictar normas especiales para liberar a clubes y colegios de los deberes de las sociedades abiertas.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', sub: 'f-tipos', enunciado: 'Una AGF administra un fondo mutuo con rescate diario y un fondo de inversión a 8 años sin rescate. ¿Por qué la ley exige asamblea de aportantes y comité de vigilancia solo en el segundo?', opciones: ['Porque su aportante queda «amarrado» al plazo, sin la salida del rescate, y necesita órganos que controlen la gestión', 'Porque el fondo mutuo no es fiscalizado por la CMF', 'Porque el comité de vigilancia decide las inversiones del fondo de inversión', 'Porque las cuotas de fondos mutuos no son valores'], correcta: 0, explicacion: 'En el fondo mutuo, el aportante disconforme rescata. Si un fondo de inversión permite rescates en su reglamento, no se exigen esos órganos para tales materias.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', sub: 'f-agf', enunciado: 'El FIP Tactical Sport compró el 63% de Azul Azul con préstamos de fondos públicos de Sartor y no pagó. ¿Por qué esos fondos tuvieron que demandar y embargar las acciones?', opciones: ['Porque prestaron sin prenda: no tenían una garantía sobre las acciones', 'Porque los FIP no pueden ser dueños de acciones de sociedades abiertas', 'Porque la CMF no puede fiscalizar a los fondos públicos', 'Porque Azul Azul era la deudora directa de los préstamos'], correcta: 0, explicacion: 'Las acciones eran el único activo relevante del FIP. Hoy están embargadas y un liquidador gestiona su remate.' },
      { tipo: 'alternativas', seccion: 'acciones-fondos', sub: 'f-casos', enunciado: '¿Cuál de estos hechos NO ocurrió en el caso Sartor?', opciones: ['Los dueños vendieron patrimonio personal e indemnizaron a los aportantes', 'Los fondos prestaban sin garantías a sociedades de los propios dueños de la AGF', 'Los préstamos no se cobraban: se renovaban una y otra vez', 'La CMF intervino la AGF y formuló cargos por infracción al deber de lealtad'], correcta: 0, explicacion: 'Eso pasó en Aurus: sus directores indemnizaron cerca de US$20 millones. En Sartor no hubo indemnización, y por eso la CMF intervino la AGF.' },
      { tipo: 'alternativas', seccion: 'deuda', sub: 'd-especies', enunciado: 'Una concesionaria emite un bono para construir una cárcel; CCU emite otro para ampliar sus plantas. ¿Sobre qué se evalúa el riesgo de cada uno?', opciones: ['El de CCU, sobre la historia y los flujos de un negocio en marcha; el de la cárcel, sobre los flujos futuros de una obra que aún no existe', 'Los dos, sobre la garantía del Fisco', 'Los dos, sobre los estados financieros históricos del emisor', 'El de la cárcel, sobre los dividendos de la concesionaria'], correcta: 0, explicacion: 'El project finance se paga con lo que genere la explotación de la obra. Por eso los fondos se entregan por hitos y se exige prenda sobre la concesión o los ingresos futuros.' }
    ]
  });
})();
