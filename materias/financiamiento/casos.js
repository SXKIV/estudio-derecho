/* Casos vistos en clases — Financiamiento de la Empresa (DER010C).
   Unidad especial (tipo:'casos'): un caso por sección. La ficha de cada caso enlaza con las
   unidades donde se menciona; el motor agrega en esas secciones el aviso «Caso relacionado».
   Fuentes:
   - «Lo que dice el apunte»: apunte completo de clases del Prof. Goldenberg (Cofisa, 3.3–3.4.2) y del
     Prof. Gaspar (Inverlink, Azul Azul, Cascadas y La Polar). El apunte de Gaspar marca con la nota
     «Pregunta de examen» los casos que pregunta en el oral (lo indica la ficha de cada caso).
   - «Contexto (fuente externa)»: solo datos confirmados en las páginas enlazadas al final del caso
     (revisadas en noviembre de 2026).
   Pendientes: Chispas y D&S/Falabella (ver CLAUDE.md). */
(function () {
  Estudio.registrarUnidad({
    id: 'casos', tipo: 'casos', icono: '⚖️', bloque: 'Casos',
    titulo: 'Casos vistos en clases',
    resumen: 'Los casos que se ven en clases, explicados para el oral: hechos, problema jurídico, cómo se resolvió y por qué importan en la materia. Cada uno enlaza con las unidades donde aparece.',
    lecturas: 'Apuntes completos de clases de los Profs. Goldenberg y Gaspar. El contexto externo de cada caso viene de las fuentes enlazadas al final de cada caso y está separado de lo que dice el apunte. En el oral, el Prof. Gaspar pide explicar el caso y su importancia en la materia.',

    secciones: [
      {
        id: 'cofisa', grupo: 'Prof. Goldenberg', titulo: 'Caso Cofisa (2015)',
        ficha: {
          datos: [['Año', '2015'], ['Tribunal', 'Corte Suprema'], ['Partes', 'Sernac con Cofisa'], ['Normas', 'Arts. 2°, 8° y 19 ter Ley 18.010; NCG 484'], ['Apunte', 'Goldenberg, 3.3–3.4.2']],
          enLaMateria: [
            { u: 'u1', seccion: 'interes', nota: 'concepto expansivo de interés y ficha del fallo' },
            { u: 'u1', seccion: 'interes-comision', sub: 'com-19ter', nota: 'el caso que llevó al art. 19 ter' },
            { u: 'u1', seccion: 'interes-comision', sub: 'com-ncg', nota: 'requisito del costo del servicio' }
          ],
          fuentes: [
            { titulo: 'Sernac: comunicado sobre el fallo de la Corte Suprema contra Cofisa (9 de octubre de 2015)', url: 'https://www.sernac.cl/portal/604/w3-article-4402.html' },
            { titulo: 'Sentencia de reemplazo de la Corte Suprema (PDF publicado por El Mostrador)', url: 'https://media.elmostrador.cl/2015/10/Sentencia-reemplazo-Cofisa.pdf' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> un cobro llamado «comisión» que crece con el número de cuotas es <b>interés</b>; sumado a la tasa, superaba la máxima convencional.</p></div>
<p class="small">En el apunte aparece escrito «Cofiza»; la sentencia dice «Cofisa».</p>
<h3 data-sub="cofisa-hechos">Hechos</h3>
<ul>
  <li>Créditos, Organización y Finanzas S.A. (Cofisa) emitía y operaba la tarjeta de crédito de las tiendas DIN (hoy ABCDIN).</li>
  <li>Cobraba el interés por el crédito y, en paralelo, una «comisión de administración variable».</li>
  <li>Esa comisión era un <b>monto fijo en pesos multiplicado por el número de cuotas</b> que elegía el cliente. Se cobraba en cada cuota.</li>
</ul>
<h3 data-sub="cofisa-problema">Problema jurídico</h3>
<p>¿Ese cobro era una comisión por un servicio o un <b>interés encubierto</b>? Es un problema de calificación. El art. 2° de la Ley 18.010 define el interés de forma expansiva: todo lo que el acreedor recibe por sobre el capital, a cualquier título, sin importar el nombre.</p>
<h3 data-sub="cofisa-decision">Cómo se resolvió</h3>
<ul>
  <li>La Corte Suprema dijo que el cobro tenía todas las características de un interés: era una suma <b>accesoria</b>, se devengaba de forma <b>periódica</b> y dependía del capital y de las cuotas.</li>
  <li>Sumado a la tasa pactada, Cofisa cobraba <b>por sobre la tasa máxima convencional</b>.</li>
  <li>El pacto de ese cobro se tuvo <b>por no escrito</b>.</li>
</ul>
<figure class="diagrama" style="max-width:440px;margin:16px auto">
<svg viewBox="0 0 320 300" role="img" aria-label="Caso Cofisa: el interés informado estaba bajo la tasa máxima convencional; sumado a la AVM, la superaba">
<g font-family="Inter,Segoe UI,Arial" font-size="12" text-anchor="middle">
<line x1="20" y1="200" x2="300" y2="200" stroke="#b9c7d4" stroke-width="1.5"/>
<rect x="40" y="140" width="90" height="60" rx="6" fill="#eaf4fb" stroke="#1479c9" stroke-width="2"/>
<text x="85" y="175" font-weight="700">Interés</text>
<rect x="190" y="140" width="90" height="60" fill="#eaf4fb" stroke="#1479c9" stroke-width="2"/>
<text x="235" y="175" font-weight="700">Interés</text>
<rect x="190" y="70" width="90" height="70" fill="#fff7f7" stroke="#c62828" stroke-width="2"/>
<text x="235" y="92" font-weight="800" fill="#c62828">AVM</text>
<text x="235" y="128" font-size="10.5" fill="#637386">monto × cuotas</text>
<line x1="20" y1="110" x2="300" y2="110" stroke="#c9a400" stroke-width="2" stroke-dasharray="6 4"/>
<text x="22" y="103" text-anchor="start" font-size="11.5" font-weight="700" fill="#637386">Tasa máxima convencional</text>
<text x="85" y="220" font-weight="700">Lo informado</text>
<text x="85" y="236" font-size="11" fill="#637386">bajo la máxima</text>
<text x="235" y="220" font-weight="700">Lo cobrado</text>
<text x="235" y="236" font-size="11" fill="#c62828">sobre la máxima</text>
<rect x="20" y="252" width="280" height="42" rx="10" fill="#eaf7f0" stroke="#20845c" stroke-width="2"/>
<text x="160" y="269" font-size="11.5" font-weight="700">La AVM es interés (art. 2° Ley 18.010):</text>
<text x="160" y="286" font-size="11.5">la cláusula se tiene por no escrita</text>
</g>
</svg>
<figcaption>La «comisión» crecía con el número de cuotas: era interés. Esquema ilustrativo, sin cifras reales.</figcaption>
</figure>
<h3 data-sub="cofisa-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Muestra el <b>efecto expansivo del interés</b> (art. 2°): el nombre del cobro no decide.</li>
  <li>A raíz de casos como este se incorporó el <span class="norma">art. 19 ter Ley 18.010</span>: se pueden cobrar comisiones que no son interés solo si pagan servicios reales y efectivamente prestados.</li>
  <li>La <b>NCG 484</b> de la CMF exige, entre otros requisitos, que la comisión se calcule según el <b>costo de prestar el servicio</b>. Ese requisito recoge Cofisa: un cobro que depende del plazo o del capital es interés.</li>
</ul>
<h3 data-sub="cofisa-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos del comunicado del Sernac enlazado al final del caso.</p>
<ul>
  <li>El Sernac informó el fallo el 9 de octubre de 2015. Dijo que la Corte Suprema estableció que Cofisa cobró intereses sobre la tasa máxima convencional mediante una «comisión variable mensual (AVM)».</li>
  <li>La cláusula que permitía el cobro se tuvo por no escrita y quedó prohibido cobrar esa comisión.</li>
  <li>La multa total fue de 100 UTM: 50 UTM por falta de información sobre la tasa y 50 UTM por los cobros sobre la máxima convencional.</li>
</ul>`
      },
      {
        id: 'inverlink', grupo: 'Prof. Gaspar · títulos de crédito', titulo: 'Caso Inverlink (2003)',
        ficha: {
          datos: [['Año', '2003'], ['Afectado', 'Corfo'], ['Normas', 'Art. 28 Ley 18.092 (inoponibilidad de excepciones)'], ['Apunte', 'Gaspar, 5, 7–8, 10.5.2.6 y 7.6.3.2 · «Pregunta de examen»']],
          enLaMateria: [
            { u: 'u5', seccion: 'nocion', sub: 'tc-nocion', nota: 'la «teoría del jarrón chino»' },
            { u: 'u5', seccion: 'caracteristicas', sub: 'tc-abstraccion', nota: 'autonomía y abstracción frente a terceros de buena fe' },
            { u: 'u6', seccion: 'endoso', sub: 'end-inverlink', nota: 'endoso traslaticio y art. 28' },
            { u: 'u9', seccion: 'intermediarios', sub: 'im-custodia', nota: 'regla posterior para las AFP' }
          ],
          fuentes: [
            { titulo: 'Diario Financiero: la Corte Suprema ratifica condenas contra siete ejecutivos por infracción a la Ley de Valores (12 de agosto de 2015)', url: 'https://www.df.cl/empresas/banca-instituciones-financieras/caso-inverlink-suprema-ratifica-condenas-contra-siete-ejecutivos-por' },
            { titulo: '24 Horas: la Corte Suprema ordena restituir más de $400 millones a Corfo (18 de abril de 2013)', url: 'https://www.24horas.cl/economia/caso-inverlink-suprema-ordena-restituir-400-millones-a-corfo-609764' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> los depósitos a plazo sacados a la Corfo circularon por endoso y llegaron a terceros de buena fe. Por la <b>autonomía</b> del título, la Corfo no pudo recuperarlos de ellos.</p></div>
<h3 data-sub="inverlink-hechos">Hechos</h3>
<ul>
  <li>Inverlink era un grupo económico chileno que administraba AFP, isapres y fondos mutuos.</li>
  <li><b>Arista inicial:</b> un ejecutivo obtenía información confidencial del Banco Central sobre tasas y divisas. Se la filtraba la secretaria del presidente del Banco (Carlos Massad). Se descubrió porque un correo electrónico rebotó por error.</li>
  <li><b>Arista Corfo:</b> la Tesorería de la Corfo guardaba depósitos a plazo físicos, en papel. Funcionarios de la Corfo, coludidos con ejecutivos de Inverlink, se los entregaban por <b>endoso traslaticio</b> para darle liquidez al grupo.</li>
  <li>Cuando estalló el escándalo, los ahorristas retiraron sus fondos en masa. Inverlink hizo circular los depósitos en el mercado con endosos sucesivos. Los compraron, entre otros, fondos mutuos <b>de buena fe</b>.</li>
</ul>
<h3 data-sub="inverlink-problema">Problema jurídico</h3>
<p>¿Podía la Corfo perseguir los depósitos en manos de cualquiera, como una cosa robada? El entonces Presidente Ricardo Lagos dijo en televisión que sí: se podían incautar «en manos de quien estuvieran», como el «<b>jarrón de la abuela</b>». Eso desató pánico y una corrida en fondos mutuos. El ministro de Hacienda, Nicolás Eyzaguirre, tuvo que salir a aclararlo.</p>
<h3 data-sub="inverlink-decision">Cómo se resolvió</h3>
<ul>
  <li>Primó la <b>autonomía</b>: el derecho de cada adquirente de buena fe nace propio e independiente, limpio del vicio anterior (el robo).</li>
  <li>El <span class="norma">art. 28 Ley 18.092</span> (inoponibilidad de excepciones en el endoso traslaticio) protegió a los terceros. Los fraudes entre la Corfo e Inverlink les eran inoponibles.</li>
  <li>La Corfo y el Fisco no pudieron requisar los títulos en manos de tenedores de buena fe. Tuvieron que demandar <b>indemnización de perjuicios</b> a los primeros adquirentes y a las corredoras en que se probó mala fe.</li>
</ul>
<figure class="diagrama" style="max-width:440px;margin:16px auto">
<svg viewBox="0 0 320 330" role="img" aria-label="Caso Inverlink: los depósitos de la Corfo pasaron por endoso a fondos mutuos de buena fe; la Corfo no pudo reivindicarlos">
<defs><marker id="m-inv" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 z" fill="#637386"/></marker></defs>
<g font-family="Inter,Segoe UI,Arial" font-size="12" text-anchor="middle">
<rect x="40" y="8" width="240" height="46" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/>
<text x="160" y="28" font-weight="800">Corfo</text>
<text x="160" y="45" font-size="11.5" fill="#637386">depósitos a plazo en papel</text>
<line x1="160" y1="55" x2="160" y2="86" stroke="#637386" stroke-width="1.6" marker-end="url(#m-inv)"/>
<text x="170" y="75" text-anchor="start" font-size="11" fill="#c62828">endoso con fraude</text>
<rect x="40" y="88" width="240" height="46" rx="12" fill="#fff7f7" stroke="#c62828" stroke-width="2"/>
<text x="160" y="108" font-weight="800">Inverlink</text>
<text x="160" y="125" font-size="11.5" fill="#637386">los recibe con un vicio de origen</text>
<line x1="160" y1="135" x2="160" y2="166" stroke="#637386" stroke-width="1.6" marker-end="url(#m-inv)"/>
<text x="170" y="155" text-anchor="start" font-size="11" font-weight="700" fill="#20845c">endosos: art. 28</text>
<rect x="40" y="168" width="240" height="46" rx="12" fill="#eaf7f0" stroke="#20845c" stroke-width="2"/>
<text x="160" y="188" font-weight="800">Fondos mutuos de buena fe</text>
<text x="160" y="205" font-size="11.5" fill="#637386">derecho propio, limpio del vicio</text>
<text x="160" y="240" font-weight="800">¿Qué podía hacer la Corfo?</text>
<rect x="10" y="250" width="145" height="70" rx="10" fill="#fff7f7" stroke="#c62828" stroke-width="2"/>
<text x="82.5" y="270" font-weight="800" fill="#c62828">✗ Reivindicar</text>
<text x="82.5" y="287" font-size="11">«jarrón de la abuela»</text>
<text x="82.5" y="303" font-size="11" fill="#637386">no procede</text>
<rect x="165" y="250" width="145" height="70" rx="10" fill="#eaf7f0" stroke="#20845c" stroke-width="2"/>
<text x="237.5" y="270" font-weight="800" fill="#20845c">✓ Indemnización</text>
<text x="237.5" y="287" font-size="11">contra quienes</text>
<text x="237.5" y="303" font-size="11">actuaron de mala fe</text>
</g>
</svg>
<figcaption>Autonomía e inoponibilidad de excepciones (art. 28 Ley 18.092): el vicio no pasa al adquirente de buena fe.</figcaption>
</figure>
<h3 data-sub="inverlink-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Según el profesor, la idea del «jarrón» fue un <b>grave error conceptual</b>: aplicaba una regla reivindicatoria civil a títulos de crédito, que son autónomos.</li>
  <li>Muestra para qué sirven la autonomía y la abstracción: quien compra un título no necesita hacer un estudio de títulos de los dueños anteriores.</li>
  <li><b>Reforma posterior (7.6.3.2):</b> la ley exige que las AFP solo inviertan en instrumentos depositados en el depósito central de valores (Ley 18.876), para tener trazabilidad electrónica.</li>
</ul>
<div class="callout"><p><b>Ejemplo del apunte:</b> si en el bus te roban el ticket de la maleta, el chofer le entrega la maleta a quien presente el ticket y queda liberado. No importa el robo ocurrido antes.</p></div>
<h3 data-sub="inverlink-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos de las notas de prensa enlazadas al final del caso.</p>
<ul>
  <li><b>Sede penal:</b> en agosto de 2015, la Corte Suprema (Segunda Sala, fallo unánime) confirmó la condena de siete ejecutivos por delitos de la Ley de Valores. Acogió la demanda civil de la Corfo: los condenados debían pagar en forma solidaria $26.462.295.646 por daño emergente, y BBVA Corredora de Bolsa también, por la responsabilidad de sus funcionarios.</li>
  <li><b>Restitución por terceros:</b> en abril de 2013, la Corte Suprema (Tercera Sala, fallo dividido) ordenó a San Antonio Terminal Internacional (STI) restituir a la Corfo más de $400 millones, recibidos desde la corredora Inverlink. Según la nota, esa acción no busca indemnizar: el tercero solo devuelve el beneficio que recibió producto del dolo.</li>
</ul>
<p class="small">Ojo: estas restituciones recaen sobre dinero que pagó Inverlink, no sobre los depósitos a plazo en manos de adquirentes de buena fe.</p>`
      },
      {
        id: 'howey', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Howey (EE. UU., 1946)',
        ficha: {
          datos: [['Año', '1946'], ['Tribunal', 'Corte Suprema de EE. UU.'], ['Norma', 'Securities Act de 1933'], ['Apunte', 'Gaspar, «Mercado de valores», punto 3']],
          enLaMateria: [
            { u: 'u8', seccion: 'howey', sub: 'h-caso', nota: 'los hechos' },
            { u: 'u8', seccion: 'howey', sub: 'h-test', nota: 'el test de Howey' },
            { u: 'u8', seccion: 'howey', sub: 'h-aplicaciones', nota: 'Bitcoin, Herbalife y Endesa' },
            { u: 'u8', seccion: 'howey', sub: 'h-chile', nota: 'por qué en Chile no sería valor' }
          ],
          fuentes: [
            { titulo: 'SEC v. W. J. Howey Co., 328 U.S. 293 (1946): texto de la sentencia (Cornell LII, en inglés)', url: 'https://www.law.cornell.edu/supremecourt/text/328/293' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> vender una parcela junto con un contrato para que otro la explote es un <b>contrato de inversión</b>. De ahí sale el test para saber cuándo algo atípico es un valor.</p></div>
<p class="small">La unidad 8 lo trata en detalle; aquí está el resumen para el oral.</p>
<h3 data-sub="howey-hechos">Hechos</h3>
<ul>
  <li>W. J. Howey Co. era dueña de grandes plantaciones de naranjas en Florida.</li>
  <li>Vendía <b>parcelas pequeñas</b> a compradores de edad avanzada que vivían en el noreste de EE. UU. (Nueva York y Boston).</li>
  <li>Junto con la parcela ofrecía un <b>contrato de administración</b>: Howey cultivaba, cosechaba y vendía las naranjas, y entregaba las utilidades netas a los compradores.</li>
</ul>
<h3 data-sub="howey-problema">Problema jurídico</h3>
<p>¿Era una simple venta de terrenos o un <b>valor</b> (<i>security</i>) sujeto a las leyes bursátiles? La Securities Act de 1933 enumera instrumentos, pero con la salvedad «a menos que el contexto requiera lo contrario». Por eso, en EE. UU., la categoría de valor funciona como un «bolsillo de payaso».</p>
<h3 data-sub="howey-decision">Cómo se resolvió</h3>
<p>La Corte Suprema de EE. UU. resolvió que el esquema conjunto (terreno más contrato de servicio) era un <b>contrato de inversión</b> sujeto a las leyes bursátiles. De ahí surge el <b>test de Howey</b>:</p>
<div class="flow">
  <div class="node">1. Entrega de dinero<small>un aporte a cambio de un activo o derecho</small></div><div class="arrow">+</div>
  <div class="node">2. Expectativa de ganancia<small>no es una donación</small></div><div class="arrow">+</div>
  <div class="node hot">3. Ganancia por la actividad de un tercero<small>no por el esfuerzo propio</small></div>
</div>
<h3 data-sub="howey-importancia">Por qué importa en la materia</h3>
<ul>
  <li><b>Bitcoin:</b> hay dinero y ánimo de lucro, pero la ganancia depende de la especulación y no de la actividad de un tercero. No es valor bajo Howey.</li>
  <li><b>Herbalife:</b> es un caso límite, porque mezcla la inversión con el trabajo de venta propio y de la red.</li>
  <li><b>Endesa (capitalismo popular):</b> funcionarios públicos renunciaron a su indemnización por años de servicio a cambio de acciones. Ahí se cumplen los tres elementos.</li>
  <li><b>En Chile</b> el esquema de Howey <b>no sería valor</b>: el art. 3° de la Ley 18.045 exige un título de crédito de inversión, con abstracción, autonomía y transferibilidad.</li>
</ul>
<h3 data-sub="howey-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos del texto de la sentencia enlazado al final del caso.</p>
<ul>
  <li>La Corte Suprema de EE. UU. decidió el caso el <b>27 de mayo de 1946</b>. Revocó la decisión de los tribunales inferiores, que habían rechazado la acción de la SEC.</li>
  <li>La sentencia define el contrato de inversión como un contrato, transacción o esquema en que una persona invierte su dinero en una empresa común y espera ganancias <b>solo del esfuerzo del promotor o de un tercero</b>.</li>
</ul>`
      },
      {
        id: 'azul-azul', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Azul Azul (2024)',
        ficha: {
          datos: [['Años', '2021 (OPA del FIP) · 2024 (compra de cuotas)'], ['Órganos', 'CMF · Corte Suprema'], ['Normas', 'Arts. 54, 199 y 61 A LMV'], ['Apunte', 'Gaspar, 5.2.4–5.2.5 y 7.5.3 · «Pregunta de examen»']],
          enLaMateria: [
            { u: 'u8', seccion: 'acciones-fondos', sub: 'f-agf', nota: 'el FIP Tactical Sport y su deuda' },
            { u: 'u8', seccion: 'acciones-fondos', sub: 'f-casos', nota: 'caso Sartor' },
            { u: 'u9', seccion: 'control', sub: 'ct-tomas', nota: 'deber de informar la toma de control' },
            { u: 'u9', seccion: 'control', sub: 'ct-opa', nota: 'adquisición indirecta y OPA' }
          ],
          fuentes: [
            { titulo: 'CMF: sanción por infracción a las normas sobre OPA (comunicado de octubre de 2026)', url: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-114334.html' },
            { titulo: 'CNN Chile: la CMF multa a Michael Clark por tomar el control de Azul Azul sin OPA', url: 'https://www.cnnchile.com/negocios/azul-azul-cmf-multa-michael-clark-820-millones-control-sin-opa/' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> quien compra el vehículo que controla una sociedad anónima abierta «compra al accionista». Es una <b>adquisición indirecta</b> y obliga a hacer OPA.</p></div>
<h3 data-sub="azul-hechos">Hechos</h3>
<ul>
  <li>Azul Azul S.A., concesionaria del club Universidad de Chile, es una sociedad anónima abierta que cotiza en bolsa.</li>
  <li>Cerca del 63% de sus acciones era del <b>FIP Tactical Sport</b>. El FIP es un patrimonio de afectación sin personalidad jurídica, administrado por Asesorías Sartor.</li>
  <li>Las cuotas del FIP eran en un 90% de Asesorías Sartor y en un 10% de Michael Clark (por medio de Inversiones Antumalal).</li>
  <li>Para comprar el control de Azul Azul en la OPA de 2021, el FIP se endeudó con otros fondos públicos que administraba la propia Sartor.</li>
  <li>Clark compró <b>a plazo</b> el 90% de las cuotas a Sartor. Así concentró el 100% del FIP y, con él, el <b>control indirecto</b> de Azul Azul.</li>
</ul>
<div class="flow">
  <div class="node">Michael Clark<small>Inversiones Antumalal</small></div><div class="arrow">→</div>
  <div class="node">FIP Tactical Sport<small>10% propio + 90% comprado a Sartor</small></div><div class="arrow">→</div>
  <div class="node hot">Azul Azul S.A.<small>≈63% de las acciones: el control</small></div>
</div>
<h3 data-sub="azul-problema">Problema jurídico</h3>
<p>Clark no hizo OPA ni cumplió formalmente el deber de informar la toma de control. Argumentó que <b>no compró acciones</b> de la sociedad abierta, sino <b>cuotas de un FIP</b>.</p>
<h3 data-sub="azul-decision">Cómo se resolvió</h3>
<p>Según el apunte, la CMF y la Corte Suprema, con fallo confirmado y ejecutoriado, resolvieron que hubo una <b>adquisición indirecta</b> de acciones: se «compró al accionista». Por eso era obligatorio hacer una OPA.</p>
<h3 data-sub="azul-aristas">Otras aristas</h3>
<ul>
  <li><b>Civil y concursal:</b> Clark no pagó la compraventa a plazo y esta se rescindió. El liquidador concursal de Sartor asumió el control del FIP y ordenó revocar al directorio de Azul Azul para citar a junta.</li>
  <li><b>Penal:</b> Clark fue formalizado por el <span class="norma">art. 61 A LMV</span>, que castiga defraudar a otro adquiriendo el control de una sociedad anónima abierta sin hacer la OPA que exige la ley.</li>
  <li><b>Nulidad:</b> el accionista Schapira demandó la nulidad absoluta de la toma de control por falta de OPA. Después se desistió tras un acuerdo.</li>
  <li><b>La deuda del FIP:</b> el FIP no pagó los créditos con que compró las acciones, y esos préstamos no tenían prenda. Los fondos acreedores lo demandaron en juicio ejecutivo y se embargó el 63% de Azul Azul. Un liquidador gestiona su venta forzosa.</li>
</ul>
<h3 data-sub="azul-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Muestra que la OPA del <span class="norma">art. 199 LMV</span> se aplica también a la toma de control <b>indirecta</b>: no se evita comprando el vehículo en vez de las acciones.</li>
  <li>Une dos temas del curso: los <b>FIP</b> (fuera de la fiscalización directa, pero conectados con el mercado público) y las <b>tomas de control</b>.</li>
  <li>Se relaciona con el <b>caso Sartor</b> (U8, 5.2.5): la CMF intervino Sartor AGF a fines de 2024 por préstamos sin garantías a empresas vinculadas a sus administradores.</li>
</ul>
<h3 data-sub="azul-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos del comunicado de la CMF y de la nota de CNN Chile enlazados al final del caso.</p>
<ul>
  <li>Según la CMF, el 13 de diciembre de 2024 Inversiones Antumalal compró a Asesorías e Inversiones Sartor cuotas equivalentes al <b>90,07%</b> del FIP Tactical Sport. El FIP tenía el <b>63,07% de las acciones Serie B</b> de Azul Azul, lo que le daba el control.</li>
  <li>En octubre de 2026, el Consejo de la CMF multó a Michael Clark con <b>UF 20.000</b> por no hacer la OPA que exige el art. 199 LMV.</li>
  <li>Según CNN Chile, la CMF rechazó en enero de 2025 una reposición de Clark contra la OPA. En septiembre de 2025, la Corte de Apelaciones de Santiago rechazó un reclamo de ilegalidad suyo y él apeló a la Corte Suprema. En 2026, el Tribunal Constitucional declaró inadmisibles dos requerimientos de inaplicabilidad.</li>
  <li>La misma nota menciona una multa anterior de 65.000 UF a Clark: es la que le aplicó la CMF como ex director de Sartor AGF (ver <b>caso Sartor</b>).</li>
</ul>
<div class="callout yellow"><p><b>Ojo con las fuentes:</b> el apunte dice que la Corte Suprema confirmó, con fallo ejecutoriado, que había obligación de OPA. Según CNN Chile (octubre de 2026), Clark apeló a la Corte Suprema después de perder ante la Corte de Apelaciones en septiembre de 2025, pero la nota no informa qué resolvió. No pudimos confirmar ese fallo en una fuente externa.</p></div>`
      },
      {
        id: 'aurus', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Aurus (2016)',
        ficha: {
          datos: [['Año', '2016 (descubrimiento) · 2018 (sanción)'], ['Órgano', 'SVS (hoy CMF)'], ['Deber', 'Diligencia de la AGF (Ley Única de Fondos)'], ['Apunte', 'Gaspar, 5.2.5 · «Pregunta de examen (salvavidas)»']],
          enLaMateria: [
            { u: 'u8', seccion: 'acciones-fondos', sub: 'f-agf', nota: 'la AGF administra dinero ajeno' },
            { u: 'u8', seccion: 'acciones-fondos', sub: 'f-casos', nota: 'caso I del apunte' }
          ],
          fuentes: [
            { titulo: 'CMF: sanción a Aurus Capital AGF y sus ex ejecutivos y ex directores (3 de mayo de 2018)', url: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-24878.html' },
            { titulo: 'La Tercera: la Corte rechaza el recurso de Peña y confirma la multa de la CMF (14 de noviembre de 2018)', url: 'https://www.latercera.com/pulso/noticia/aurus-corte-rechaza-recurso-pena-confirma-multa-cmf/400826/' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> un director desvió por años el dinero de dos fondos y el resto del directorio confió en él sin controlar. Es el caso del <b>deber de diligencia</b> de quien administra dinero ajeno.</p></div>
<h3 data-sub="aurus-hechos">Hechos</h3>
<ul>
  <li>Ocurrió en Aurus AGF y afectó sobre todo a los fondos de inversión <b>Insignia</b> y <b>Global</b>.</li>
  <li>El director Mauricio Peña desvió fondos tras aducir graves problemas médicos familiares. Para tapar los retiros fue a apostar al casino Monticello, y las pérdidas crecieron.</li>
  <li>La pérdida acumulada llegó a unos <b>US$30 millones</b>. No ocurrió de un día para otro: se fue armando durante casi 5 años.</li>
  <li>La AGF no tenía controles de gestión eficaces. Peña hacía informes falsos con grandes inversiones en acciones de empresas de Perú.</li>
  <li>Cuando las auditoras consultaban y las empresas peruanas no reconocían esas acciones, las auditoras le preguntaban a Peña. Él entregaba cartas falsas que hablaban de «errores de registro», y las auditoras las aceptaban <b>sin verificar con la fuente directa</b>.</li>
  <li>Los otros cuatro directores no participaron ni sabían. Confiaban en Peña, no exigían arqueos e ignoraban las alarmas.</li>
</ul>
<h3 data-sub="aurus-descubrimiento">Cómo se descubrió</h3>
<ul>
  <li>En mayo de 2016, la SVS fiscalizó Aurus en terreno. No detectó el déficit, porque las auditoras lo habían certificado, pero sí vio que los controles internos no funcionaban y formuló observaciones.</li>
  <li>Para cumplirlas, Aurus nombró a un encargado de control interno. En septiembre de 2016, esa persona descubrió que los activos eran falsos, y en octubre lo informó a la autoridad.</li>
</ul>
<h3 data-sub="aurus-problema">Problema jurídico</h3>
<p>¿Responden los directores que no participaron del fraude? En una AGF, el directorio maneja <b>dinero ajeno</b>, no bienes de la propia compañía. Por eso la Ley Única de Fondos intensifica los deberes fiduciarios de diligencia y lealtad.</p>
<h3 data-sub="aurus-decision">Cómo se resolvió</h3>
<ul>
  <li>Peña fue procesado por estafa y por entrega de información falsa al mercado. Llegó a un acuerdo condenatorio en el proceso penal.</li>
  <li>En 2017, los demás directores acordaron una transacción con las víctimas. Vendieron patrimonio personal e indemnizaron unos <b>US$20 millones</b>, cerca de dos tercios de la pérdida. Además disolvieron o vendieron la administración de los fondos y cerraron la AGF.</li>
  <li>En 2018, la CMF sancionó al directorio <b>solo por negligencia</b>, no por dolo. La multa se acotó a <b>1.000 UF por director</b>, porque habían compensado con su propio patrimonio y dejado el mercado voluntariamente.</li>
</ul>
<h3 data-sub="aurus-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Muestra el <b>deber de diligencia</b> intensificado de los directores de una AGF: confiar a ciegas no basta.</li>
  <li>Muestra la falla de los <b>auditores</b>, que no verificaron con la fuente directa, y el valor del <b>control interno</b>: fue el auditor interno quien descubrió el fraude.</li>
  <li>Se estudia junto al <b>caso Sartor</b>: en Aurus hubo negligencia e indemnización voluntaria; en Sartor, cargos por deslealtad y sin compensación.</li>
</ul>
<h3 data-sub="aurus-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos del comunicado de la CMF y de la nota de La Tercera enlazados al final del caso.</p>
<ul>
  <li>La CMF informó la sanción el 3 de mayo de 2018 (Resolución Exenta N° 1653, de 27 de abril de 2018). El procedimiento se inició en 2016 por la errónea valorización, contabilización, custodia y registro de las inversiones de los fondos Insignia y Global.</li>
  <li>Peña, director de la AGF y gerente de inversiones de ambos fondos, recibió <b>UF 10.000</b> por conductas que el Consejo calificó de «gravísimas». Cuatro directores recibieron UF 1.000 cada uno; otro, UF 200; el gerente general, UF 900; y la propia AGF, UF 1.000.</li>
  <li>Al 3 de octubre de 2016, los fondos tenían un patrimonio de US$110,9 millones. El detrimento fue de 32% en Insignia y de 26% en Global.</li>
  <li>En noviembre de 2018, la Corte de Apelaciones de Santiago rechazó el recurso de Peña. Él alegaba que ya había sido condenado penalmente por lo mismo; la Corte dijo que la sanción administrativa no guarda relación con los hechos sancionados penalmente.</li>
</ul>`
      },
      {
        id: 'sartor', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Sartor (2024)',
        ficha: {
          datos: [['Años', '2024 (intervención) · 2025 (sanción)'], ['Órganos', 'CMF · Ministerio Público'], ['Deber', 'Lealtad de la AGF (según el apunte)'], ['Apunte', 'Gaspar, 5.2.5 y 8.3 · «Pregunta de examen (salvavidas)»']],
          enLaMateria: [
            { u: 'u8', seccion: 'acciones-fondos', sub: 'f-casos', nota: 'caso II del apunte' },
            { u: 'u8', seccion: 'acciones-fondos', sub: 'f-agf', nota: 'el FIP Tactical Sport y los créditos de Sartor' },
            { u: 'u10', seccion: 'infracciones', sub: 'in-penal', nota: 'información falsa: doble persecución' }
          ],
          fuentes: [
            { titulo: 'CMF: inicio del procedimiento sancionatorio contra Sartor AGF y sus ex directores (15 de abril de 2025)', url: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-93467.html' },
            { titulo: 'CMF: sanciones por 367.500 UF a ex directores de Sartor AGF y a su ex gerente general (18 de noviembre de 2025)', url: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-100710.html' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> la AGF sacaba el dinero del mercado público hacia vehículos opacos y lo prestaba sin garantías a empresas de sus propios dueños. Es el caso del <b>deber de lealtad</b>.</p></div>
<h3 data-sub="sartor-hechos">Hechos</h3>
<ul>
  <li>Sartor AGF captaba dinero del mercado público de valores y lo derivaba a <b>fondos de inversión privados (FIP)</b>, a sociedades anónimas cerradas o a entidades extranjeras.</li>
  <li>Al salir de la oferta pública, <b>desaparecían los deberes de información</b> transparente.</li>
  <li>Los FIP y otros vehículos daban préstamos cruzados <b>sin garantías</b> a sociedades de los mismos dueños de la AGF.</li>
  <li>Con préstamos del fondo se financiaron proyectos inmobiliarios privados, como One River Point en Miami. El fondo no era dueño del activo, sino un acreedor sin resguardo.</li>
  <li>El FIP Tactical Sport compró el 63% de Azul Azul con créditos de un fondo público de Sartor que no tenían prenda. Ante el no pago, el fondo tuvo que pedir un embargo de esas acciones (ver <b>caso Azul Azul</b>).</li>
</ul>
<h3 data-sub="sartor-descubrimiento">Cómo se descubrió</h3>
<p>En 2024, la CMF detectó una grave opacidad en la cadena de financiamiento. Los deudores del fondo eran empresas vinculadas a los administradores, y los préstamos no se cobraban: se renovaban una y otra vez sin garantías reales. La pérdida estimada fue de entre el <b>50% y el 70%</b> del valor de las cuotas.</p>
<h3 data-sub="sartor-problema">Problema jurídico</h3>
<p>Una AGF debe gestionar los fondos en interés de los aportantes. ¿Qué pasa cuando los administradores los usan en beneficio propio y en abierto conflicto de interés?</p>
<h3 data-sub="sartor-decision">Cómo se resolvió</h3>
<ul>
  <li>A diferencia de Aurus, los dueños y administradores <b>no indemnizaron</b> a los aportantes.</li>
  <li>A fines de 2024, la CMF <b>intervino</b> Sartor AGF: removió a la administración privada y asumió la gestión directa de los fondos para cobrar las acreencias.</li>
  <li>La CMF formuló cargos severos por vulneración del <b>deber de lealtad</b>: la gestión se hizo deliberadamente en beneficio propio de los administradores.</li>
  <li>El Ministerio Público levantó el secreto bancario para seguir el dinero. Los principales ejecutivos (los hermanos Larraín y Michael Clark, entre otros) fueron formalizados, con prisión preventiva y arresto domiciliario como medidas cautelares.</li>
</ul>
<h3 data-sub="sartor-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Es el contrapunto de Aurus: <b>lealtad</b> (beneficio propio) frente a <b>diligencia</b> (falta de control).</li>
  <li>Muestra cómo los <b>FIP</b> y las sociedades cerradas pueden usarse para salir de la fiscalización del mercado público.</li>
  <li>El apunte lo cita como ejemplo de <b>información falsa</b> perseguida a la vez en sede administrativa y penal (8.3).</li>
  <li>Conecta con <b>Azul Azul</b>: el mismo grupo financió la toma de control del club.</li>
</ul>
<div class="grid dos">
<div class="card"><div class="kicker">Aurus (2016)</div><h4 style="margin:4px 0 8px">Deber de diligencia</h4><ul style="margin:0;padding-left:18px"><li>Un director defraudó; el resto <b>no controló</b>.</li><li>Los directores <b>indemnizaron</b> unos US$20 millones y cerraron la AGF.</li><li>Multa por negligencia: <b>1.000 UF</b> por director.</li></ul></div>
<div class="card"><div class="kicker">Sartor (2024)</div><h4 style="margin:4px 0 8px">Deber de lealtad</h4><ul style="margin:0;padding-left:18px"><li>Préstamos sin garantías a empresas de <b>los propios dueños</b>.</li><li><b>Sin indemnización</b>: pérdida del 50% al 70% de las cuotas.</li><li>Intervención de la CMF y <b>formalizaciones</b> penales.</li></ul></div>
</div>
<h3 data-sub="sartor-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos de los comunicados de la CMF enlazados al final del caso.</p>
<ul>
  <li>El 15 de abril de 2025, la CMF inició un procedimiento sancionatorio y formuló cargos contra Sartor AGF, en liquidación, y sus ex directores y ejecutivos, por hechos anteriores a la intervención de fines de 2024.</li>
  <li>El 18 de noviembre de 2025 (Resolución N° 11.869), la CMF aplicó multas por un total de <b>367.500 UF</b> a ex directores y al ex gerente general, en su mayoría con <b>inhabilidad de 5 años</b>, y <b>revocó la autorización de existencia</b> de Sartor AGF.</li>
  <li>Las infracciones fueron a la Ley Única de Fondos y a la Ley de Mercado de Valores. Entre ellas: invertir en entidades relacionadas con los directores, privilegiando el interés de esas empresas, e información falsa en los estados financieros de dos fondos. La CMF remitió los antecedentes al Ministerio Público.</li>
  <li>Entre los sancionados está Michael Clark, como ex director, con <b>UF 65.000</b>: es la misma persona del caso Azul Azul.</li>
</ul>`
      },
      {
        id: 'subprime', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Crisis subprime (2008)',
        ficha: {
          datos: [['Años', '2006–2008'], ['Lugar', 'Estados Unidos, con efectos globales'], ['Tema', 'Bonos securitizados y riesgo de solvencia'], ['Apunte', 'Gaspar, 6.4 · «Pregunta de examen»']],
          enLaMateria: [
            { u: 'u8', seccion: 'deuda', sub: 'd-securitizacion', nota: 'cómo funciona la securitización hipotecaria' },
            { u: 'u8', seccion: 'deuda', sub: 'd-subprime', nota: 'la crisis en el apunte' },
            { u: 'u8', seccion: 'intro', sub: 'mv-solvencia', nota: 'riesgo de solvencia' },
            { u: 'u10', seccion: 'suficiencia', sub: 'su-clasificadoras', nota: 'errores de las clasificadoras' }
          ],
          fuentes: [
            { titulo: 'Federal Reserve History: «Subprime Mortgage Crisis», 2007–2010 (en inglés)', url: 'https://www.federalreservehistory.org/essays/subprime-mortgage-crisis' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> los bancos prestaron a deudores sin capacidad de pago confiando solo en la hipoteca, y vendieron esos créditos como bonos. Cuando cayeron los precios de las casas, los bonos perdieron su valor y la crisis se volvió mundial.</p></div>
<p class="small">No es un juicio: es un caso de mercado que el apunte usa para explicar la securitización y el riesgo de solvencia.</p>
<h3 data-sub="subprime-mecanismo">Antes: la securitización hipotecaria</h3>
<div class="flow">
  <div class="node">Banco<small>cede su cartera de créditos hipotecarios</small></div><div class="arrow">→</div>
  <div class="node hot">Patrimonio separado<small>lo administra una securitizadora; emite bonos</small></div><div class="arrow">→</div>
  <div class="node">Inversionistas<small>compran los bonos; con eso se paga al banco</small></div>
</div>
<p>Un crédito hipotecario inmoviliza el capital del banco por 20 o 30 años. Al securitizar la cartera, el banco recupera dinero de inmediato y vuelve a prestar. El ciclo se repite.</p>
<h3 data-sub="subprime-hechos">Hechos</h3>
<ul>
  <li>Para mantener la máquina de préstamos, la banca de EE. UU. agotó a los clientes solventes (<i>prime</i>). Entonces bajó sus exigencias y prestó a deudores de alto riesgo: los <b>NINJA</b> (<i>No Income, No Job, No Assets</i>: sin ingresos, sin empleo y sin activos).</li>
  <li>En vez de evaluar la solvencia del deudor, la banca confió a ciegas en la <b>garantía hipotecaria</b>. Había un boom inmobiliario y los precios no paraban de subir.</li>
  <li>Se llegó a prestar hasta el <b>110%</b> del valor de la vivienda, sin pie.</li>
</ul>
<div class="callout"><p><b>Ejemplo del apunte:</b> el banco presta US$110.000 a un deudor NINJA para una casa de US$100.000. Supone que en un año la casa valdrá US$130.000 y que su remate cubrirá la deuda. Pero la casa cae a US$60.000: el remate no alcanza, el deudor abandona la casa y el bono respaldado por esa hipoteca pierde todo su valor.</p></div>
<figure class="diagrama" style="max-width:440px;margin:16px auto">
<svg viewBox="0 0 320 232" role="img" aria-label="Ejemplo del apunte: préstamo de 110.000 dólares por una casa de 100.000 que se esperaba valiera 130.000 y terminó valiendo 60.000">
<g font-family="Inter,Segoe UI,Arial" font-size="12" text-anchor="middle">
<text x="10" y="16" text-anchor="start" font-weight="800">Ejemplo del apunte (en US$)</text>
<text x="86" y="46" text-anchor="end">Préstamo</text>
<rect x="92" y="28" width="160" height="26" rx="4" fill="#fff7f7" stroke="#c62828" stroke-width="1.5"/>
<text x="98" y="46" text-anchor="start" font-weight="700">110.000</text>
<text x="86" y="80" text-anchor="end">Casa hoy</text>
<rect x="92" y="62" width="145" height="26" rx="4" fill="#eaf4fb" stroke="#1479c9" stroke-width="1.5"/>
<text x="98" y="80" text-anchor="start" font-weight="700">100.000</text>
<text x="86" y="114" text-anchor="end">Esperado</text>
<rect x="92" y="96" width="189" height="26" rx="4" fill="#eaf7f0" stroke="#20845c" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="98" y="114" text-anchor="start" font-weight="700">130.000</text>
<text x="86" y="148" text-anchor="end">Real</text>
<rect x="92" y="130" width="87" height="26" rx="4" fill="#fff8cc" stroke="#c9a400" stroke-width="1.5"/>
<text x="98" y="148" text-anchor="start" font-weight="700">60.000</text>
<line x1="252" y1="24" x2="252" y2="162" stroke="#c62828" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="252" y="174" font-size="10.5" fill="#c62828">deuda</text>
<rect x="8" y="184" width="304" height="42" rx="10" fill="#fff7f7" stroke="#c62828" stroke-width="2"/>
<text x="160" y="201" font-size="11.5" font-weight="700">El remate no cubre la deuda:</text>
<text x="160" y="218" font-size="11">el bono respaldado por esa hipoteca pierde valor</text>
</g>
</svg>
<figcaption>La banca confió en que el precio de la casa seguiría subiendo, no en la capacidad de pago del deudor.</figcaption>
</figure>
<h3 data-sub="subprime-problema">Qué falló</h3>
<ul>
  <li>Hacia 2006-2007, las autoridades monetarias <b>subieron las tasas</b> para controlar la inflación. El crédito se encareció, bajó la demanda de viviendas y sus precios se desplomaron.</li>
  <li>Las garantías ya no cubrían las deudas, y los deudores <i>subprime</i> dejaron de pagar en masa.</li>
  <li>Sin ese flujo de pagos, los <b>bonos securitizados</b> perdieron su valor y cayeron en cesación de pagos. Como se habían vendido en todo el mundo, la crisis se propagó a la banca internacional: «si EE. UU. se resfría, al mundo le da una pulmonía».</li>
</ul>
<h3 data-sub="subprime-chile">Cómo lo enfrentó Chile</h3>
<p>Chile evitó un colapso sistémico, a diferencia de Grecia o Islandia. Lo logró gracias a la gestión de las <b>reservas internacionales</b> del Fisco (bajo el ministro Andrés Velasco), que se usaron para inyectar liquidez al mercado interno cuando se paralizó el crédito externo.</p>
<h3 data-sub="subprime-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Muestra el <b>riesgo de solvencia</b> en los instrumentos de deuda: un bono vale lo que valen los flujos que lo respaldan.</li>
  <li>Explica la <b>securitización</b>: es útil para dar liquidez, pero puede trasladar el riesgo al mercado.</li>
  <li>Las <b>clasificadoras de riesgo</b> tuvieron errores de evaluación cuestionados en esta crisis (7.8.3).</li>
</ul>
<h3 data-sub="subprime-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos del ensayo de Federal Reserve History (escrito al 22 de noviembre de 2013), enlazado al final del caso.</p>
<ul>
  <li>Describe la crisis como un período de turbulencia financiera entre <b>2007 y 2010</b>, causado por la expansión de las hipotecas a deudores de alto riesgo junto con el alza de los precios de las viviendas.</li>
  <li>Los prestamistas agrupaban las hipotecas en carteras que vendían a inversionistas. Los bonos respaldados por hipotecas emitidos por privados financiaban la mayor parte de los créditos <i>subprime</i>.</li>
  <li>Cuando los precios dejaron de subir, aumentó la morosidad. En <b>abril de 2007</b> quebró New Century Financial, uno de los principales prestamistas <i>subprime</i>.</li>
</ul>`
      },
      {
        id: 'chang', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Alberto Chang',
        ficha: {
          datos: [['Ilícito', 'Oferta pública de valores sin inscripción'], ['Norma', 'Art. 62 a) LMV (antes art. 59 A, según el apunte)'], ['Títulos', 'Pagarés'], ['Apunte', 'Gaspar, 7.4.1–7.4.2']],
          enLaMateria: [
            { u: 'u9', seccion: 'oferta', sub: 'of-inscripcion', nota: 'inscripción previa y control ex ante' },
            { u: 'u9', seccion: 'oferta', sub: 'of-delito', nota: 'el delito de ofrecer sin inscripción' },
            { u: 'u9', seccion: 'oferta', sub: 'of-nopublicas', nota: 'por qué no era oferta privada' }
          ],
          fuentes: [
            { titulo: 'Emol: un tribunal de Malta rechaza la extradición de Alberto Chang (7 de abril de 2017)', url: 'https://www.emol.com/noticias/Nacional/2017/04/07/853132/Tribunal-de-Malta-rechazo-solicitud-de-extradicion-de-Alberto-Chang-y-quedo-en-libertad.html' },
            { titulo: 'El Dínamo: la Corte de Malta confirma el rechazo de la extradición (6 de noviembre de 2018)', url: 'https://www.eldinamo.cl/pais/2018/11/06/corte-de-malta-rechaza-la-extradicion-de-alberto-chang/' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> ofrecer pagarés al público en general sin inscribirse en el Registro de Valores es un <b>delito</b>, no una simple infracción reglamentaria.</p></div>
<h3 data-sub="chang-hechos">Hechos</h3>
<ul>
  <li>Alberto Chang captaba dinero del público emitiendo <b>pagarés</b>, títulos de deuda del mercado de valores, con altas rentabilidades prometidas.</li>
  <li>Proyectaba solvencia con fotos junto a figuras internacionales, como Richard Branson, y decía que invertía en grandes empresas tecnológicas.</li>
  <li>No estaba inscrito en el Registro de Valores de la CMF y no sometió sus estados financieros a la revisión previa.</li>
  <li>El esquema era piramidal. Cuando colapsó, Chang huyó a Malta.</li>
</ul>
<h3 data-sub="chang-problema">Problema jurídico</h3>
<p>¿Era una oferta pública o una oferta privada exenta? La oferta privada (<i>safe harbor</i>) de la NCG 336, modificada por la NCG 452/2021, se limita a cuatro hipótesis: solo inversionistas calificados; hasta 250 calificados y 50 no calificados en 12 meses; hasta 50 no calificados; o instrumentos de 3.000 UF o más por unidad. La captación de Chang se dirigía al <b>público en general</b> y no calzaba en ninguna.</p>
<h3 data-sub="chang-decision">Cómo se resolvió</h3>
<ul>
  <li>Era una <b>oferta pública masiva sin inscripción</b>. Según el apunte, el <span class="norma">art. 62 a) LMV</span>, que reubicó al antiguo art. 59 A, la tipifica como delito.</li>
  <li>Chile pidió su extradición por delitos de la LMV y estafa. Según el apunte, Malta la denegó por falta de tratado de extradición y de reciprocidad.</li>
  <li>En Chile, el proceso penal siguió contra quienes figuraban formalmente en sus sociedades. Es el caso emblemático de sanción penal por ofertas públicas no autorizadas.</li>
</ul>
<figure class="diagrama" style="max-width:440px;margin:16px auto">
<svg viewBox="0 0 320 300" role="img" aria-label="Árbol de decisión: si la oferta calza en una hipótesis de oferta privada no se inscribe; si no, es oferta pública y exige inscripción previa; ofrecer sin inscribirse es delito">
<defs><marker id="m-cha" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 z" fill="#637386"/></marker></defs>
<g font-family="Inter,Segoe UI,Arial" font-size="12" text-anchor="middle">
<rect x="10" y="8" width="300" height="96" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/>
<text x="160" y="28" font-weight="800">¿Es oferta privada (NCG 336/452)?</text>
<g text-anchor="start" font-size="10.5" fill="#637386">
<text x="24" y="46">• solo a inversionistas calificados</text>
<text x="24" y="60">• hasta 250 calificados y 50 no calificados</text>
<text x="24" y="74">• hasta 50 no calificados</text>
<text x="24" y="88">• instrumentos de 3.000 UF o más por unidad</text>
</g>
<line x1="110" y1="104" x2="82" y2="134" stroke="#637386" stroke-width="1.6" marker-end="url(#m-cha)"/>
<text x="84" y="122" font-weight="800" fill="#20845c">Sí</text>
<line x1="210" y1="104" x2="238" y2="134" stroke="#637386" stroke-width="1.6" marker-end="url(#m-cha)"/>
<text x="238" y="122" font-weight="800" fill="#c62828">No</text>
<rect x="10" y="136" width="140" height="52" rx="10" fill="#eaf7f0" stroke="#20845c" stroke-width="2"/>
<text x="80" y="157" font-weight="800">Oferta privada</text>
<text x="80" y="175" font-size="11" fill="#637386">sin inscripción</text>
<rect x="170" y="136" width="140" height="52" rx="10" fill="#fff8cc" stroke="#c9a400" stroke-width="2"/>
<text x="240" y="157" font-weight="800">Oferta pública</text>
<text x="240" y="175" font-size="11" fill="#637386">inscripción previa</text>
<text x="80" y="208" font-size="11" fill="#637386">Ej.: bonos de 3.500 UF</text>
<text x="80" y="223" font-size="11" fill="#637386">o solo AFP y bancos</text>
<line x1="240" y1="188" x2="240" y2="218" stroke="#637386" stroke-width="1.6" marker-end="url(#m-cha)"/>
<text x="232" y="207" text-anchor="end" font-size="10.5" fill="#c62828">sin inscribirse</text>
<rect x="170" y="220" width="140" height="74" rx="10" fill="#fff7f7" stroke="#c62828" stroke-width="2"/>
<text x="240" y="240" font-weight="800" fill="#c62828">Delito</text>
<text x="240" y="256" font-size="11">art. 62 a) LMV</text>
<text x="240" y="272" font-size="11" fill="#637386">Chang: pagarés al</text>
<text x="240" y="287" font-size="11" fill="#637386">público en general</text>
</g>
</svg>
<figcaption>Hipótesis de la NCG 336, modificada por la NCG 452/2021 (apunte, 7.4.2). Número del artículo según el apunte.</figcaption>
</figure>
<h3 data-sub="chang-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Explica el sentido de la <b>inscripción previa</b> (control <i>ex ante</i>): no es una garantía estatal de solvencia, sino un resguardo contra el engaño y el ocultamiento de información.</li>
  <li>Muestra por qué la oferta privada se reserva a quienes pueden defenderse solos, como los <b>inversionistas calificados</b>, y no al público <i>retail</i>.</li>
</ul>
<h3 data-sub="chang-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos de las notas de prensa enlazadas al final del caso.</p>
<ul>
  <li>En abril de 2017, un tribunal de Malta rechazó la extradición y Chang quedó en libertad. Según Emol, Chile lo acusaba de presunta estafa e infracciones a la Ley General de Bancos y a la Ley de Mercado de Valores.</li>
  <li>En noviembre de 2018, la Corte de Apelaciones de Malta confirmó el rechazo. Según El Dínamo, se basó en la falta de rigurosidad de la documentación presentada, porque las traducciones no se hicieron bajo juramento.</li>
</ul>
<div class="callout yellow"><p><b>Ojo con las fuentes:</b> el apunte dice que Malta denegó la extradición por falta de tratado y de reciprocidad. La nota de El Dínamo sobre la apelación de 2018 atribuye el rechazo a defectos de la documentación (traducciones sin juramento).</p></div>`
      },
      {
        id: 'clinica-las-condes', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Clínica Las Condes (2025)',
        ficha: {
          datos: [['Año', '2025'], ['Tema', 'OPA y concepto de controlador'], ['Normas', 'Arts. 97 y 199 LMV'], ['Apunte', 'Gaspar, 7.5.3 y 7.5.4']],
          enLaMateria: [
            { u: 'u9', seccion: 'control', sub: 'ct-ejemplos', nota: 'venta sin OPA' },
            { u: 'u9', seccion: 'controlador', sub: 'cr-hipotesis', nota: 'la sub-hipótesis del 25% al 40%' },
            { u: 'u9', seccion: 'controlador', sub: 'cr-ejemplos', nota: 'Euroamérica pasa a ser controladora' }
          ],
          fuentes: [
            { titulo: 'CNN Chile: Clínica Indisa y EuroAmerica son los nuevos dueños de Clínica Las Condes', url: 'https://www.cnnchile.com/pais/las-millonarias-cifras-tras-la-venta-de-clinica-las-condes-clinica-indisa-y-euroamerica-son-los-nuevos-duenos/' },
            { titulo: 'Diario Financiero: EuroAmerica se convierte en la controladora de Clínica Las Condes tras el aumento de capital (8 de julio de 2025)', url: 'https://www.df.cl/empresas/salud/euroamerica-se-convierte-en-la-controladora-de-clinica-las-condes-tras' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> dos compradores que, cada uno por separado y sin pacto, adquieren la mitad del control no tienen que hacer OPA. Más tarde, uno pasó a ser controlador por un aumento de capital, y tampoco hubo OPA.</p></div>
<h3 data-sub="clc-hechos">Hechos</h3>
<ul>
  <li>Cecilia Karlezi controlaba Clínica Las Condes S.A., una sociedad anónima abierta, con cerca del <b>51%</b>. Había adquirido ese control haciendo una OPA.</li>
  <li>Al decidir salir, vendió su paquete. Lo compraron, al mismo tiempo pero <b>por separado</b>, Euroamérica (cerca del 26,5%) e Indisa (cerca del 25,5%).</li>
  <li>Entre ellos <b>no había pacto</b> de accionistas ni acuerdo de actuación conjunta.</li>
</ul>
<h3 data-sub="clc-problema">Problema jurídico</h3>
<p>¿La venta del control a dos compradores obligaba a hacer OPA? Y luego: ¿qué pasa si uno de ellos se convierte en controlador sin comprar más acciones?</p>
<h3 data-sub="clc-decision">Cómo se resolvió</h3>
<ul>
  <li><b>La venta no exigió OPA.</b> Ninguno de los dos compradores obtuvo el control por sí solo (50% + 1 o influencia decisiva) y no había pacto de control conjunto.</li>
  <li><b>Después, Euroamérica pasó a ser controladora.</b> Por la sub-hipótesis del art. 97 LMV, es controlador quien tiene entre el 25% y el 40% de los votos si supera la suma de quienes tienen individualmente 5% o más.
    <ul>
      <li>Antes: Euroamérica 26,5% frente a Indisa 25,5% más un tercero con 6% (31,5%). No era controlador.</li>
      <li>Hubo un aumento de capital. El tercero no suscribió y quedó con 4,5%. Bajo el 5%, sale de la comparación.</li>
      <li>Después: Euroamérica 26,5% frente a Indisa 25,5%. Pasó a tener la influencia decisiva.</li>
    </ul>
  </li>
  <li>Esa toma de control <b>tampoco exigió OPA</b>: se originó en la suscripción de un aumento de capital, que es una excepción legal.</li>
</ul>
<figure class="diagrama" style="max-width:440px;margin:16px auto">
<svg viewBox="0 0 320 272" role="img" aria-label="Clínica Las Condes: antes del aumento de capital Euroamérica (26,5%) no superaba a Indisa más el tercero (31,5%); después, el tercero quedó bajo el 5% y Euroamérica pasó a ser controladora">
<g font-family="Inter,Segoe UI,Arial" font-size="12" text-anchor="middle">
<text x="10" y="16" text-anchor="start" font-weight="800">Antes del aumento de capital</text>
<text x="94" y="40" text-anchor="end">Euroamérica</text>
<rect x="100" y="26" width="146" height="20" rx="3" fill="#eaf4fb" stroke="#1479c9" stroke-width="1.5"/>
<text x="252" y="40" text-anchor="start" font-weight="700">26,5%</text>
<text x="94" y="66" text-anchor="end">Indisa</text>
<rect x="100" y="52" width="140" height="20" rx="3" fill="#fff8cc" stroke="#c9a400" stroke-width="1.5"/>
<rect x="240" y="52" width="33" height="20" rx="3" fill="#fffdf0" stroke="#c9a400" stroke-width="1.5" stroke-dasharray="4 2"/>
<text x="256.5" y="66" font-size="10">6%</text>
<text x="279" y="66" text-anchor="start" font-weight="700">31,5%</text>
<text x="256.5" y="84" font-size="9.5" fill="#637386">tercero</text>
<text x="160" y="104" font-weight="800" fill="#c62828">26,5% &lt; 31,5%: no es controlador</text>
<text x="10" y="134" text-anchor="start" font-weight="800">Después: el tercero no suscribe</text>
<text x="94" y="158" text-anchor="end">Euroamérica</text>
<rect x="100" y="144" width="146" height="20" rx="3" fill="#eaf4fb" stroke="#1479c9" stroke-width="1.5"/>
<text x="252" y="158" text-anchor="start" font-weight="700">26,5%</text>
<text x="94" y="184" text-anchor="end">Indisa</text>
<rect x="100" y="170" width="140" height="20" rx="3" fill="#fff8cc" stroke="#c9a400" stroke-width="1.5"/>
<text x="246" y="184" text-anchor="start" font-weight="700">25,5%</text>
<text x="94" y="210" text-anchor="end">Tercero</text>
<rect x="100" y="196" width="25" height="20" rx="3" fill="#fff" stroke="#b9c7d4" stroke-width="1.5" stroke-dasharray="4 2"/>
<text x="131" y="210" text-anchor="start" font-size="11" fill="#637386">4,5%: bajo el 5%, no cuenta</text>
<text x="160" y="240" font-weight="800" fill="#20845c">26,5% &gt; 25,5%: es controlador (art. 97)</text>
<text x="160" y="260" font-size="11" fill="#637386">Sin OPA: vino de un aumento de capital</text>
</g>
</svg>
<figcaption>Cifras aproximadas del apunte (7.5.4). Sub-hipótesis del art. 97: entre 25% y 40%, frente a quienes tienen 5% o más.</figcaption>
</figure>
<h3 data-sub="clc-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Muestra que la OPA nace de <b>tomar el control</b>, no del tamaño de la compra (7.5.3).</li>
  <li>Aplica el <b>concepto legal de controlador</b> del art. 97 y la regla de excluir a quienes tienen menos del 5% (7.5.4).</li>
  <li>Sirve para contrastar con <b>Azul Azul</b> (control indirecto, sí exigía OPA) y con <b>LAN</b> (control por pacto, sin OPA).</li>
</ul>
<h3 data-sub="clc-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos de las notas enlazadas al final del caso. El apunte usa cifras aproximadas («~»).</p>
<ul>
  <li>Según CNN Chile, Indisa y EuroAmerica se quedaron cada una con una mitad del paquete que controlaba el grupo de Karlezi (55,75%). Declararon a la CMF que son grupos empresariales separados y que no han suscrito acuerdo alguno sobre la gestión ni el control de la clínica.</li>
  <li>Según Diario Financiero (8 de julio de 2025), antes del aumento de capital EuroAmerica tenía 28,66%, Indisa 27,87% y un tercer accionista 6,45%. El tercero bajó a 4,45%. Quedaron sobre el 5% solo EuroAmerica (29,6%) e Indisa (28,78%), y EuroAmerica pasó a ser la controladora.</li>
</ul>`
      },
      {
        id: 'pinera-lan', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Piñera con LAN (2007)',
        ficha: {
          datos: [['Año', '2007 (sanción de la SVS)'], ['Órganos', 'SVS (hoy CMF) · Corte Suprema'], ['Normas', 'Arts. 54, 164 y 199 LMV'], ['Apunte', 'Gaspar, 7.5.3 y 9.2.1']],
          enLaMateria: [
            { u: 'u9', seccion: 'control', sub: 'ct-ejemplos', nota: 'control por pacto, sin OPA' },
            { u: 'u10', seccion: 'privilegiada', sub: 'pr-objeto', nota: 'los estados financieros como información privilegiada' }
          ],
          fuentes: [
            { titulo: 'Cooperativa: Piñera pagará la multa de la SVS (6 de julio de 2007)', url: 'https://www.cooperativa.cl/noticias/site/artic/20070706/pags-amp/20070706181357.html' },
            { titulo: 'Cooperativa: la Corte Suprema ratifica la multa contra Juan José Cueto (28 de noviembre de 2012)', url: 'https://www.cooperativa.cl/noticias/site/artic/20121128/pags-amp/20121128154834.html' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> LAN aparece dos veces en el apunte. El control nacido de un <b>pacto</b> no exige OPA, y los <b>estados financieros aprobados</b> por el directorio son información privilegiada mientras no se entregan al mercado.</p></div>
<h3 data-sub="lan-control">1. La toma de control sin OPA (7.5.3)</h3>
<ul>
  <li>Antes de la fusión que dio origen a LATAM, Sebastián Piñera y la familia Cueto asumieron el control de LAN mediante un <b>pacto de accionistas de actuación conjunta</b>.</li>
  <li>Como el control nació de la firma de un pacto y no de una compra de acciones en ese momento, la operación quedó <b>exenta de OPA</b>.</li>
  <li>Eso no la libera del <b>deber de informar</b> la toma de control (<span class="norma">art. 54 LMV</span>).</li>
</ul>
<h3 data-sub="lan-privilegiada">2. Los estados financieros como información privilegiada (9.2.1)</h3>
<p>Según el apunte, el caso <b>Piñera con LAN (2007)</b> sentó la doctrina de que los estados financieros aprobados por el directorio son <b>información privilegiada</b> antes de entregarse al mercado. Quien los conoce no puede transar hasta que se divulguen.</p>
<h3 data-sub="lan-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Completa el cuadro de la OPA: compra directa o indirecta del control (Azul Azul, sí); dos compradores sin pacto (Clínica Las Condes, no); pacto entre accionistas (LAN, no, pero se informa).</li>
  <li>Es el antecedente del <b>caso Blanco y Negro</b>: directores que transan tras aprobar estados financieros aún no publicados.</li>
</ul>
<table class="tabla">
<tr><th>Caso</th><th>Cómo se obtuvo el control</th><th>¿OPA?</th></tr>
<tr><td><b>Azul Azul</b></td><td>Compra indirecta: las cuotas del FIP que tenía cerca del 63%</td><td><span class="etiqueta roja">Sí</span></td></tr>
<tr><td><b>Clínica Las Condes</b> (venta)</td><td>Dos compradores por separado y sin pacto: ninguno toma el control</td><td><span class="etiqueta verde">No</span></td></tr>
<tr><td><b>Clínica Las Condes</b> (después)</td><td>Euroamérica pasa a controlar al suscribir un aumento de capital</td><td><span class="etiqueta verde">No</span> excepción legal</td></tr>
<tr><td><b>LAN</b></td><td>Pacto de actuación conjunta, sin compra de acciones</td><td><span class="etiqueta verde">No</span> pero se informa (art. 54)</td></tr>
</table>
<h3 data-sub="lan-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos de las notas de Cooperativa enlazadas al final del caso.</p>
<ul>
  <li>En julio de 2007, la SVS sancionó a Piñera porque no se abstuvo de operar con información privilegiada sobre los resultados de LAN. Había comprado, por medio de una sociedad, tres millones de acciones de LAN un día antes de que se publicaran resultados trimestrales favorables. La multa fue de <b>19.470 UF</b> (más de $363 millones), y él anunció que la pagaría.</li>
  <li>Juan José Cueto sí reclamó. En noviembre de 2012, la Corte Suprema rechazó su casación y confirmó una multa de <b>1.620 UF</b> por no abstenerse de comprar acciones conociendo los estados financieros.</li>
</ul>`
      },
      {
        id: 'cascadas', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Cascadas (2014)',
        ficha: {
          datos: [['Año', '2014 (sanción de la SVS)'], ['Órganos', 'SVS (hoy CMF) · Corte Suprema'], ['Ilícito', 'Operaciones ficticias y esquema fraudulento'], ['Apunte', 'Gaspar, 7.7.3 y 8.3 · «Pregunta de examen»']],
          enLaMateria: [
            { u: 'u9', seccion: 'bursatiles', sub: 'bu-cascada', nota: 'ejes regulatorios de las operaciones en bolsa' },
            { u: 'u10', seccion: 'infracciones', sub: 'in-penal', nota: 'doble persecución: manipulación y transacciones ficticias' }
          ],
          fuentes: [
            { titulo: 'Diario Constitucional: la Corte Suprema confirma multas de 75.000 UF en el caso Cascadas (3 de octubre de 2020)', url: 'https://www.diarioconstitucional.cl/judicial/caso-cascadas-cs-confirma-multas-a-controlador-de-sqm-y-administrador-de-inversiones-a-pagar-cada-uno-75-000-uf-como-multa-por-infringir-la-ley-del-mercado-de-valores' },
            { titulo: 'La Tercera: reacción al fallo de la Corte Suprema sobre la multa a Julio Ponce (5 de octubre de 2020)', url: 'https://www.latercera.com/pulso/noticia/es-una-burla-para-el-pais-ps-critica-fallo-de-la-suprema-que-rebaja-a-menos-de-us-3-millones-la-multa-a-julio-ponce/PPHL34BDNNAZJN5EULGEL6DYLA/' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> el controlador usó la bolsa como <b>pantalla</b>: vendía barato y recompraba caro entre sociedades propias. Se quedaba con la diferencia y el perjuicio lo pagaban los minoritarios.</p></div>
<h3 data-sub="cascadas-hechos">Hechos</h3>
<ul>
  <li>Julio Ponce Lerou controlaba Soquimich (SQM) mediante una serie de sociedades anónimas abiertas ordenadas <b>en cascada</b>: Norte Grande, Oro Blanco, Potasios y Nitratos.</li>
  <li>Oro Blanco aprobó un aumento de capital. Para ofrecer acciones a terceros a un precio <b>más favorable</b> que el de la opción preferente de los accionistas (ejemplo: $90 en vez de $100), la ley exige pasarlas por la <b>bolsa</b>.</li>
  <li>Las acciones se vendían en bolsa a $90 y las compraban sociedades instrumentales vinculadas a Ponce. Después, otra sociedad de la cascada las <b>recompraba</b> en bolsa a un precio inflado (ejemplo: $110).</li>
</ul>
<div class="flow">
  <div class="node">Oro Blanco<small>vende en bolsa a $90</small></div><div class="arrow">→</div>
  <div class="node y">Sociedad vinculada al controlador<small>compra a $90 y vende a $110</small></div><div class="arrow">→</div>
  <div class="node">Otra sociedad de la cascada<small>recompra a $110</small></div>
</div>
<p class="small">Esquema con los precios de ejemplo del apunte. La «pasadita» ($20 por acción) queda en la sociedad personal del controlador.</p>
<h3 data-sub="cascadas-problema">Problema jurídico</h3>
<p>¿Hubo operaciones bursátiles reales? El control final de las acciones seguía en la estructura, pero el <b>margen económico salía</b> de las sociedades abiertas. La que vendió a $90 dejó de recibir $100 y la que recompró a $110 pagó de más. Ponce perdía en una punta como accionista, pero recuperaba con creces la diferencia en su sociedad personal. Los <b>accionistas minoritarios</b> de la cascada sufrían el perjuicio directo.</p>
<h3 data-sub="cascadas-decision">Cómo se resolvió</h3>
<ul>
  <li>En 2014, la SVS (hoy CMF) sancionó estas operaciones como <b>operaciones ficticias</b> y <b>esquema fraudulento</b>. El paso por bolsa no buscaba un comprador independiente, sino usar la bolsa como pantalla para extraer la diferencia de precio.</li>
  <li>La sanción contra Ponce Lerou y sus ejecutivos tiene sentencia firme y ejecutoriada.</li>
  <li>Según el apunte, la responsabilidad de las <b>corredoras</b> que ejecutaron el esquema, como autoras o cómplices, estaba por resolverse en la Corte Suprema.</li>
</ul>
<h3 data-sub="cascadas-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Es el ejemplo del apunte de <b>manipulación de precios y transacciones ficticias</b>. Son ilícitos de doble persecución: administrativa y penal (8.3).</li>
  <li>Muestra el conflicto entre el <b>controlador</b> y los <b>minoritarios</b> en grupos de sociedades abiertas.</li>
  <li>Explica por qué la regulación de las operaciones en bolsa exige que el precio se forme con una contraparte real (7.7.3).</li>
</ul>
<h3 data-sub="cascadas-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos de las notas enlazadas al final del caso.</p>
<ul>
  <li>En octubre de 2020, la Corte Suprema (Tercera Sala) rechazó la casación de Julio Ponce Lerou. La sentencia de la Corte de Apelaciones de Santiago, aplicando lo resuelto por el Tribunal Constitucional, había rebajado su multa de <b>1.700.000 UF a 75.000 UF</b>. Otro ejecutivo también quedó con una multa de 75.000 UF.</li>
  <li>Según La Tercera, la Corte Suprema ratificó la conclusión de la SVS de que Ponce cometió una serie de infracciones a las leyes de valores y de sociedades anónimas.</li>
</ul>`
      },
      {
        id: 'la-polar', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso La Polar (2011)',
        ficha: {
          datos: [['Año', '2011 (colapso)'], ['Órganos', 'SVS (hoy CMF) · tribunales'], ['Normas', 'Arts. 9° y 59 a) LMV (según el apunte)'], ['Apunte', 'Gaspar, 7.8.2, 7.8.3, 8.1 y 8.3 · «Pregunta de examen»']],
          enLaMateria: [
            { u: 'u10', seccion: 'auditores', sub: 'au-polar', nota: 'información veraz y auditores externos' },
            { u: 'u10', seccion: 'suficiencia', sub: 'su-clasificadoras', nota: 'falla de las clasificadoras de riesgo' },
            { u: 'u10', seccion: 'infracciones', sub: 'in-civil', nota: 'demandas de las AFP contra PwC' },
            { u: 'u10', seccion: 'infracciones', sub: 'in-penal', nota: 'información falsa: doble persecución' }
          ],
          fuentes: [
            { titulo: 'Poder Judicial: la Corte Suprema confirma la indemnización a AFP Provida contra exejecutivos de La Polar (16 de marzo de 2026)', url: 'https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/143312' },
            { titulo: 'CNN Chile: la Corte Suprema confirma la multa a PwC por el caso La Polar', url: 'https://www.cnnchile.com/economia/caso-la-polar-corte-suprema-multa-a-pwc_20131122/' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> La Polar infló sus utilidades con <b>repactaciones unilaterales</b> de créditos morosos. Es el ejemplo clásico de infracción al deber de <b>información veraz</b> y de falla de los auditores externos.</p></div>
<h3 data-sub="polar-hechos">Hechos</h3>
<ul>
  <li><b>Incentivo:</b> en 2005, la junta aprobó un plan de <i>stock options</i> para los ejecutivos: opciones para suscribir acciones a 5 años a un precio fijo. Para ganar con ellas, necesitaban que la acción subiera.</li>
  <li><b>El mecanismo:</b> en una empresa de retail, los créditos morosos deben castigarse, lo que baja los activos y las utilidades. De noche, ejecutivos de La Polar alteraban los sistemas de forma automatizada para <b>repactar créditos morosos sin el consentimiento</b> de los clientes.</li>
  <li><b>Efecto contable:</b> (1) la morosidad desaparecía y se evitaba castigar el crédito; (2) se registraba un crédito nuevo, al día y por un monto mayor. Así se mostraban utilidades artificiales.</li>
  <li><b>La señal:</b> en la crisis de 2007-2008, el resto del retail (Falabella, Ripley, Cencosud) cayó. La Polar, en cambio, reportaba resultados «espectaculares». Su acción superó los $2.400.</li>
  <li><b>El colapso:</b> un inversionista, asesorado por abogados recién titulados de la UDP, cuestionó los números ante la SVS y la SBIF. La fiscalización hizo colapsar la burbuja en <b>junio de 2011</b>. La acción cayó a $20–30, una pérdida de más del 99%.</li>
</ul>
<figure class="diagrama" style="max-width:440px;margin:16px auto">
<svg viewBox="0 0 320 305" role="img" aria-label="Ciclo de La Polar: cliente moroso, repactación unilateral, crédito nuevo al día y utilidades infladas que suben la acción">
<defs><marker id="m-pol" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 z" fill="#637386"/></marker></defs>
<g font-family="Inter,Segoe UI,Arial" font-size="12" text-anchor="middle">
<rect x="8" y="10" width="138" height="70" rx="10" fill="#fff" stroke="#1479c9" stroke-width="2"/>
<text x="77" y="32" font-weight="800">1. Cliente moroso</text>
<text x="77" y="50" font-size="11" fill="#637386">el crédito debía</text>
<text x="77" y="65" font-size="11" fill="#637386">castigarse</text>
<rect x="174" y="10" width="138" height="70" rx="10" fill="#fff7f7" stroke="#c62828" stroke-width="2"/>
<text x="243" y="32" font-weight="800" fill="#c62828">2. Repactación</text>
<text x="243" y="50" font-size="11">unilateral, de noche,</text>
<text x="243" y="65" font-size="11">sin consentimiento</text>
<rect x="174" y="118" width="138" height="70" rx="10" fill="#fff" stroke="#1479c9" stroke-width="2"/>
<text x="243" y="140" font-weight="800">3. Crédito nuevo</text>
<text x="243" y="158" font-size="11" fill="#637386">mayor y «al día»</text>
<text x="243" y="173" font-size="11" fill="#637386">sin castigo</text>
<rect x="8" y="118" width="138" height="70" rx="10" fill="#fff8cc" stroke="#c9a400" stroke-width="2"/>
<text x="77" y="140" font-weight="800">4. Utilidades</text>
<text x="77" y="158" font-size="11">infladas: la acción</text>
<text x="77" y="173" font-size="11">supera los $2.400</text>
<line x1="146" y1="45" x2="172" y2="45" stroke="#637386" stroke-width="1.6" marker-end="url(#m-pol)"/>
<line x1="243" y1="80" x2="243" y2="116" stroke="#637386" stroke-width="1.6" marker-end="url(#m-pol)"/>
<line x1="174" y1="153" x2="148" y2="153" stroke="#637386" stroke-width="1.6" marker-end="url(#m-pol)"/>
<line x1="77" y1="118" x2="77" y2="82" stroke="#637386" stroke-width="1.6" marker-end="url(#m-pol)"/>
<rect x="8" y="208" width="304" height="90" rx="10" fill="#fffdf0" stroke="#c9a400" stroke-width="1.5"/>
<text x="160" y="228" font-size="11.5" font-weight="800">Incentivo: stock options (2005)</text>
<text x="160" y="246" font-size="11">Colapso: junio de 2011, tras la fiscalización</text>
<text x="160" y="262" font-size="11">de la SVS; la acción cae más de 99%</text>
<text x="160" y="280" font-size="11" fill="#637386">Auditora (PwC): faltó escepticismo profesional</text>
</g>
</svg>
<figcaption>El mecanismo que describe el apunte (7.8.2): sin castigo de los morosos, las utilidades eran artificiales.</figcaption>
</figure>
<h3 data-sub="polar-problema">Problema jurídico</h3>
<p>¿Quién responde cuando un emisor entrega información falsa al mercado? Además de los ejecutivos, ¿responden los <b>auditores externos</b> que certificaron esos estados financieros, aunque digan que también fueron engañados?</p>
<h3 data-sub="polar-decision">Cómo se resolvió</h3>
<ul>
  <li>Fue el ejemplo paradigmático de infracción al deber de información veraz (<span class="norma">arts. 9° y 59 a) LMV</span>, como los cita el apunte) y de falla de gobierno corporativo: el directorio no supervisó.</li>
  <li>La SVS/CMF y los tribunales sancionaron a la auditora externa, <b>PwC</b>. La Corte Suprema rechazó su excusa de que «fueron engañados y no estaban para detectar fraudes». El auditor debe aplicar el <b>escepticismo profesional</b>.</li>
  <li><b>Responsabilidad civil (8.1):</b> las AFP y Moneda AGF demandaron a PwC. En primera instancia se rechazaron las demandas. Tras 9 a 10 años de juicio, la Corte Suprema dio vuelta el criterio y las acogió.</li>
  <li>El monto para dos AFP ponía a PwC en riesgo de quiebra. Las partes llegaron a un acuerdo: seguros internacionales más un porcentaje de las utilidades futuras de los socios.</li>
</ul>
<h3 data-sub="polar-importancia">Por qué importa en la materia</h3>
<ul>
  <li><b>Veracidad (7.8.2):</b> la información falsa al mercado es infracción administrativa y además delito.</li>
  <li><b>Suficiencia (7.8.3):</b> las clasificadoras de riesgo mantuvieron clasificaciones óptimas pese al fraude.</li>
  <li><b>Responsabilidades (8.1 y 8.3):</b> civil contra los <i>gatekeepers</i> y doble persecución, administrativa y penal, por la información falsa.</li>
</ul>
<h3 data-sub="polar-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos de las páginas enlazadas al final del caso.</p>
<ul>
  <li>Según CNN Chile, la Corte Suprema confirmó una multa de <b>4.500 UF</b> a PwC por su responsabilidad en la revisión de los estados financieros de Inversiones SCG, la empresa que administraba las tarjetas de crédito de La Polar.</li>
  <li>El 16 de marzo de 2026, el Poder Judicial informó que la Corte Suprema (Primera Sala, rol 25.039-2024) confirmó la condena de siete exejecutivos de La Polar a pagar a <b>AFP Provida</b>, en forma solidaria, el equivalente a <b>2.575.388 UF</b> por responsabilidad extracontractual.</li>
  <li>Esa noticia cita, para calcular el daño, una sentencia de la Corte Suprema de 3 de septiembre de 2021 (rol 8.429-2018, «AFP Provida S.A. con Price Waterhouse Coopers»).</li>
</ul>
<p class="small">El apunte ubica el fallo contra PwC «hacia 2020»; la sentencia que cita el Poder Judicial es de septiembre de 2021.</p>`
      },
      {
        id: 'videla', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Matías Videla / Cencosud (2023)',
        ficha: {
          datos: [['Años', '2022 (compra) · 2023 (sanción)'], ['Órganos', 'CMF · Corte de Apelaciones · Corte Suprema'], ['Normas', 'Arts. 10, 164 y 165 LMV'], ['Apunte', 'Gaspar, 9.2.1 · «Pregunta de examen»']],
          enLaMateria: [
            { u: 'u10', seccion: 'privilegiada', sub: 'pr-objeto', nota: 'el objeto: información privilegiada per se' },
            { u: 'u10', seccion: 'oportunidad', sub: 'opo-reservado', nota: 'hecho esencial reservado' }
          ],
          fuentes: [
            { titulo: 'CMF: sanción de UF 15.000 a Matías Videla por uso de información privilegiada (4 de octubre de 2023)', url: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-73907.html' },
            { titulo: 'Diario Financiero: la Corte Suprema ratifica íntegramente la multa (6 de febrero de 2026)', url: 'https://www.df.cl/mercados/bolsa-monedas/corte-suprema-ratifica-integramente-la-multa-que-aplico-la-cmf-a-matias' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> un hecho reservado es <b>información privilegiada por definición legal</b>. Quien lo conoce no puede transar, aunque la operación después no se concrete.</p></div>
<h3 data-sub="videla-hechos">Hechos</h3>
<ul>
  <li>Cencosud negociaba la compra de una cadena de supermercados en <b>Brasil</b>.</li>
  <li>Comunicó el proceso a la CMF como <b>hecho reservado</b>, en una comunicación firmada por Matías Videla, su gerente general.</li>
  <li>Mientras la reserva estaba vigente, Videla <b>compró acciones de Cencosud</b>.</li>
  <li>Después la operación se cayó.</li>
</ul>
<h3 data-sub="videla-problema">Problema jurídico</h3>
<p>¿Hay uso de información privilegiada si el negocio nunca se concretó? La aptitud de la información para influir en un inversionista se juzga <b>ex ante</b>, al momento del hecho, igual que la tentativa penal. No se exige que el precio cambie después.</p>
<h3 data-sub="videla-decision">Cómo se resolvió</h3>
<ul>
  <li>La CMF lo sancionó por <b>uso de información privilegiada</b>.</li>
  <li>La Corte de Apelaciones y la Corte Suprema confirmaron la multa, con una severa <b>condena en costas</b>.</li>
  <li>La razón: Videla no tenía ningún motivo plausible para litigar. Un hecho reservado es información privilegiada <b>per se</b> por mandato del <span class="norma">art. 164 LMV</span>.</li>
</ul>
<figure class="diagrama" style="max-width:440px;margin:16px auto">
<svg viewBox="0 0 320 268" role="img" aria-label="Línea de tiempo del caso Videla: negociación en Brasil, hecho reservado, compra de acciones durante la reserva y negocio caído">
<g font-family="Inter,Segoe UI,Arial" font-size="12" text-anchor="middle">
<line x1="24" y1="18" x2="24" y2="190" stroke="#b9c7d4" stroke-width="3"/>
<rect x="16" y="68" width="16" height="112" rx="8" fill="#fff8cc" stroke="#c9a400" stroke-width="1.5"/>
<circle cx="24" cy="20" r="7" fill="#fff" stroke="#1479c9" stroke-width="2"/>
<circle cx="24" cy="74" r="7" fill="#fff8cc" stroke="#c9a400" stroke-width="2"/>
<circle cx="24" cy="124" r="7" fill="#c62828"/>
<circle cx="24" cy="174" r="7" fill="#fff" stroke="#637386" stroke-width="2"/>
<g text-anchor="start">
<text x="44" y="22" font-weight="800">Cencosud negocia comprar</text>
<text x="44" y="37" font-size="11" fill="#637386">una cadena de supermercados en Brasil</text>
<text x="44" y="76" font-weight="800">Hecho reservado ante la CMF</text>
<text x="44" y="91" font-size="11" fill="#637386">lo firma Videla, el gerente general</text>
<text x="44" y="126" font-weight="800" fill="#c62828">Videla compra acciones</text>
<text x="44" y="141" font-size="11">durante la reserva: privilegiada per se</text>
<text x="44" y="176" font-weight="800">El negocio se cae</text>
<text x="44" y="191" font-size="11" fill="#637386">no cambia nada: se juzga ex ante</text>
</g>
<rect x="8" y="208" width="304" height="52" rx="10" fill="#eaf7f0" stroke="#20845c" stroke-width="2"/>
<text x="160" y="229" font-weight="800">Multa de la CMF, confirmada</text>
<text x="160" y="246" font-size="11">por las Cortes, con condena en costas</text>
</g>
</svg>
<figcaption>La franja amarilla es el período de reserva: información privilegiada per se (arts. 10 y 164 LMV).</figcaption>
</figure>
<h3 data-sub="videla-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Es el ejemplo del <b>objeto</b> de la información privilegiada (9.2.1): cuando el directorio comunica un hecho esencial como reservado (<span class="norma">art. 10 LMV</span>), la información pasa a ser privilegiada de forma automática.</li>
  <li>Muestra la tensión de los <b>hechos reservados</b>: se protege el interés social al no divulgar, pero quien conoce la reserva queda obligado a no transar.</li>
</ul>
<h3 data-sub="videla-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos del comunicado de la CMF y de la nota de Diario Financiero enlazados al final del caso.</p>
<ul>
  <li>La CMF aplicó a Videla una multa de <b>UF 15.000</b> (Resolución N° 7222, informada el 4 de octubre de 2023) por infringir el art. 165 LMV.</li>
  <li>El hecho reservado era del <b>3 de febrero de 2022</b>. Cencosud, por medio de Cencosud Brasil, había firmado un memorándum de entendimiento para analizar y eventualmente comprar Torre y Cía. Supermercados, una cadena de Río de Janeiro.</li>
  <li>El <b>13 de mayo de 2022</b>, Videla compró 613.026 acciones de Cencosud por unos $800 millones.</li>
  <li>Según Diario Financiero (6 de febrero de 2026), la Corte Suprema ratificó íntegramente la multa y le cobró costas.</li>
</ul>`
      },
      {
        id: 'blanco-y-negro', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Blanco y Negro (2018–2019)',
        ficha: {
          datos: [['Años', '2018 (operaciones) · 2019 (sanción de la CMF)'], ['Órganos', 'CMF · Corte de Apelaciones de Santiago'], ['Normas', 'Arts. 164 y 165 LMV'], ['Apunte', 'Gaspar, 9.2.1 y 9.2.3']],
          enLaMateria: [
            { u: 'u10', seccion: 'privilegiada', sub: 'pr-objeto', nota: 'estados financieros aprobados y no publicados' },
            { u: 'u10', seccion: 'privilegiada', sub: 'pr-conductas', nota: 'uso frente a deber de abstención' }
          ],
          fuentes: [
            { titulo: 'CMF: sanciones por uso de información privilegiada e infracción al deber de abstención a directores de Blanco y Negro S.A. (12 de noviembre de 2019)', url: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-27810.html' },
            { titulo: 'Poder Judicial: la Corte de Apelaciones de Santiago confirma la multa a un director de una sociedad anónima deportiva (28 de octubre de 2022)', url: 'https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/81420' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> dos directores transaron el mismo día con el mismo balance negativo aún no publicado. Uno vendió para evitar una pérdida (<b>uso</b>); el otro compró para aumentar su control (<b>deber de abstención</b>).</p></div>
<h3 data-sub="byn-hechos">Hechos</h3>
<ul>
  <li>El directorio de Blanco y Negro S.A. (concesionaria de Colo-Colo) aprobó estados financieros con <b>resultados deficitarios</b>.</li>
  <li>Al día siguiente, antes de que se difundieran, un director <b>vendió</b> acciones y otro, Aníbal Mosa, <b>compró</b>.</li>
</ul>
<figure class="diagrama" style="max-width:440px;margin:16px auto">
<svg viewBox="0 0 320 268" role="img" aria-label="Caso Blanco y Negro: tras aprobar un balance deficitario, un director vendió (uso) y Mosa compró (deber de abstención) antes de que se publicara">
<defs><marker id="m-byn" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 z" fill="#637386"/></marker></defs>
<g font-family="Inter,Segoe UI,Arial" font-size="12" text-anchor="middle">
<rect x="30" y="8" width="260" height="46" rx="12" fill="#fff" stroke="#1479c9" stroke-width="2"/>
<text x="160" y="27" font-weight="800">Directorio aprueba balance</text>
<text x="160" y="44" font-size="11" fill="#637386">con resultados deficitarios</text>
<text x="160" y="74" font-size="11" fill="#637386">Al día siguiente, antes de difundirlo:</text>
<line x1="110" y1="82" x2="88" y2="100" stroke="#637386" stroke-width="1.6" marker-end="url(#m-byn)"/>
<line x1="210" y1="82" x2="232" y2="100" stroke="#637386" stroke-width="1.6" marker-end="url(#m-byn)"/>
<rect x="10" y="102" width="145" height="96" rx="10" fill="#fff7f7" stroke="#c62828" stroke-width="2"/>
<text x="82.5" y="122" font-weight="800">Un director vende</text>
<text x="82.5" y="139" font-size="11">para evitar la pérdida</text>
<text x="82.5" y="162" font-weight="800" fill="#c62828">USO</text>
<text x="82.5" y="180" font-size="11" fill="#637386">CMF + delito</text>
<rect x="165" y="102" width="145" height="96" rx="10" fill="#fff8cc" stroke="#c9a400" stroke-width="2"/>
<text x="237.5" y="122" font-weight="800">Mosa compra</text>
<text x="237.5" y="139" font-size="10.5">para aumentar su control</text>
<text x="237.5" y="162" font-weight="800">ABSTENCIÓN</text>
<text x="237.5" y="180" font-size="11" fill="#637386">solo CMF, no delito</text>
<line x1="82" y1="198" x2="138" y2="224" stroke="#637386" stroke-width="1.6" marker-end="url(#m-byn)"/>
<line x1="238" y1="198" x2="182" y2="224" stroke="#637386" stroke-width="1.6" marker-end="url(#m-byn)"/>
<rect x="30" y="226" width="260" height="36" rx="10" fill="#fff" stroke="#637386" stroke-width="1.5"/>
<text x="160" y="249" font-size="11.5" font-weight="700">Recién entonces se publica el balance</text>
</g>
</svg>
<figcaption>Misma información, conductas distintas: lo que cambia es la finalidad de la operación (apunte, 9.2.3).</figcaption>
</figure>
<h3 data-sub="byn-problema">Problema jurídico</h3>
<p>Los estados financieros aprobados y aún no enviados a la CMF son información privilegiada (doctrina del caso Piñera con LAN). ¿Qué conducta prohibida cometió cada director, si uno vendió y el otro compró?</p>
<h3 data-sub="byn-decision">Cómo se resolvió (según el apunte)</h3>
<ul>
  <li><b>El director que vendió:</b> lo hizo para evitar una pérdida patrimonial. Es <b>uso de información privilegiada</b>: sanción de la CMF y delito penal.</li>
  <li><b>Mosa, que compró:</b> no buscaba especular ni evitar una pérdida, sino aumentar su participación en Colo-Colo para hacer una OPA y tomar el control. Es <b>infracción al deber de abstención</b>: sanción de la CMF, pero no delito.</li>
</ul>
<div class="callout yellow"><p><b>Ojo con las fuentes:</b> el apunte llama «Gabriel Restle» al director que vendió y fecha el caso en 2020. El comunicado de la CMF (noviembre de 2019) nombra a Gabriel Ruiz-Tagle, ex presidente del directorio, y se refiere a estados financieros al 31 de marzo de 2018.</p></div>
<h3 data-sub="byn-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Es el ejemplo del apunte para distinguir <b>uso</b> y <b>deber de abstención</b> (9.2.3). La diferencia está en la finalidad de la operación, no en si se compra o se vende.</li>
  <li>Aplica la doctrina de <b>Piñera con LAN</b>: los estados financieros aprobados son información privilegiada hasta que se divulgan (9.2.1).</li>
</ul>
<h3 data-sub="byn-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos del comunicado de la CMF y de la noticia del Poder Judicial enlazados al final del caso.</p>
<ul>
  <li>La información eran los estados financieros de Blanco y Negro <b>al 31 de marzo de 2018</b>, aprobados por el directorio el día anterior y no publicados. Las operaciones fueron el 29 de mayo de 2018.</li>
  <li><b>Ruiz-Tagle:</b> la CMF lo sancionó por infringir el deber de abstención y, por las ventas del mismo día, la prohibición de usar información privilegiada. Su multa de 15.000 UF se rebajó a <b>7.500 UF</b> por colaboración, con inhabilidad de cinco años, y la CMF remitió los antecedentes al Ministerio Público.</li>
  <li><b>Mosa:</b> multa de <b>10.000 UF</b> por infringir el deber de abstención. La CMF descartó la hipótesis agravada de uso.</li>
  <li>En octubre de 2022, la Corte de Apelaciones de Santiago rechazó por unanimidad el reclamo de Mosa. Dijo que la infracción al deber de abstención se configura solo por adquirir o enajenar valores con la información.</li>
</ul>`
      },
      {
        id: 'navarrete', grupo: 'Prof. Gaspar · mercado de valores', titulo: 'Caso Navarrete / CAP (2020)',
        ficha: {
          datos: [['Años', '2020 (compras) · 2022 (sanción)'], ['Órganos', 'CMF · Corte de Apelaciones · Corte Suprema'], ['Normas', 'Arts. 165 y 166 LMV'], ['Apunte', 'Gaspar, 9.2.3 · «Pregunta de examen»']],
          enLaMateria: [
            { u: 'u10', seccion: 'privilegiada', sub: 'pr-conductas', nota: 'las tres conductas prohibidas' }
          ],
          fuentes: [
            { titulo: 'CMF: sanciones por uso de información privilegiada e infracciones al deber de abstención (18 de julio de 2022)', url: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-51678.html' },
            { titulo: 'La Tercera: la Corte Suprema ratifica la multa a los hermanos Navarrete (23 de julio de 2024)', url: 'https://www.latercera.com/pulso/noticia/corte-suprema-ratifica-multa-a-hermanos-navarrete-por-uso-de-informacion-privilegiada/V3IO5HWISNCOZARWTRETZOZGTM/' }
          ]
        },
        html: `
<div class="callout green"><p><b>En una frase:</b> un director contó en un almuerzo familiar lo que sabía por su cargo, y sus hermanas compraron acciones ahí mismo. Sirve para distinguir <b>uso</b>, <b>revelación</b> y <b>deber de abstención</b>.</p></div>
<p class="small">En el apunte aparece como «Ibercap»; la CMF dice «Invercap».</p>
<h3 data-sub="navarrete-hechos">Hechos</h3>
<ul>
  <li>Felipe Navarrete era director en Invercap. Por su cargo sabía que Invercap haría una reestructuración para <b>aumentar su participación en CAP</b> y obtener un director adicional.</li>
  <li><b>El almuerzo en el Tiramisú:</b> en un almuerzo familiar en esa pizzería de El Golf, con sus hermanas, para coordinar trámites de una herencia, les reveló la información o les recomendó comprar.</li>
  <li>Durante el mismo almuerzo, las hermanas dieron instrucciones por teléfono a sus corredores para <b>comprar acciones de CAP</b>.</li>
</ul>
<div class="flow"><div class="node">Director de la sociedad<small>conoce el plan sobre CAP por su cargo</small></div><div class="arrow">→</div><div class="node y">Almuerzo familiar<small>revela la información o recomienda comprar</small></div><div class="arrow">→</div><div class="node hot">Las hermanas compran CAP<small>durante el mismo almuerzo</small></div></div>
<h3 data-sub="navarrete-problema">Problema jurídico</h3>
<p>¿Qué conducta prohibida comete cada uno? El apunte distingue tres:</p>
<table class="tabla">
<tr><th>Conducta</th><th>Qué es</th><th>Sanción</th></tr>
<tr><td>Uso de información privilegiada</td><td>Comprar o vender valores para ganar o evitar una pérdida</td><td>CMF y delito penal</td></tr>
<tr><td>Infracción al deber de abstención</td><td>Transar teniendo la información, sin fin especulativo</td><td>CMF; no es delito</td></tr>
<tr><td>Revelación o comunicación</td><td>Transmitir la información o recomendar o inducir a comprar o vender</td><td>CMF y delito penal</td></tr>
</table>
<h3 data-sub="navarrete-decision">Cómo se resolvió</h3>
<p>Según el apunte, se sancionó a Felipe y a sus hermanas por infringir las prohibiciones de <b>revelación e inducción</b>, y los tribunales ratificaron la sanción.</p>
<div class="callout yellow"><p><b>Ojo con las fuentes:</b> según el comunicado de la CMF, Felipe Navarrete fue sancionado por <b>uso</b> de información privilegiada y por infringir su deber de reserva al contarla. Sus hermanas fueron sancionadas por <b>no abstenerse</b> de operar teniendo la información. El apunte dice que a los tres se los sancionó por revelación e inducción.</p></div>
<h3 data-sub="navarrete-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Es el ejemplo de las <b>conductas prohibidas</b> (9.2.3): no solo infringe quien compra, sino también quien revela o recomienda.</li>
  <li>Se estudia junto al <b>caso Blanco y Negro</b> (2020), que el apunte usa para distinguir el uso (Restle vendió para evitar una pérdida) de la infracción al deber de abstención (Mosa compró para aumentar su control, sin fin especulativo).</li>
</ul>
<h3 data-sub="navarrete-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos del comunicado de la CMF y de la nota de La Tercera enlazados al final del caso.</p>
<ul>
  <li>La información era un acuerdo del directorio de Invercap del <b>4 de diciembre de 2020</b>: comprar el <b>6,77% de las acciones de CAP</b>. Esa compra podía darle a Invercap la elección de cuatro de los siete directores de CAP.</li>
  <li>Según la CMF, Felipe Navarrete compró acciones de CAP el 7 de diciembre de 2020. Sus hermanas dieron la orden de compra el 4 de enero de 2021, en un almuerzo.</li>
  <li>Multas de la CMF (18 de julio de 2022): <b>UF 10.000</b> a Felipe Navarrete y <b>UF 2.000</b> a cada una de sus hermanas. La CMF además lo denunció al Ministerio Público por posibles delitos del art. 60 LMV.</li>
  <li>Según La Tercera (23 de julio de 2024), la Corte Suprema confirmó la sentencia de la Corte de Apelaciones de Santiago (27 de diciembre de 2023) que mantuvo las multas.</li>
</ul>`
      }
    ],

    interactivos: [],

    preguntas: [
      // Cofisa
      { tipo: 'alternativas', seccion: 'cofisa', sub: 'cofisa-importancia', enunciado: 'Según el apunte, ¿qué reforma se introdujo a raíz de casos como Cofisa?', opciones: ['El art. 19 ter de la Ley 18.010, que permite cobrar comisiones por servicios reales sin que sean interés', 'La creación de la tasa de interés corriente', 'La prohibición del anatocismo', 'La obligación de pactar los intereses por escrito'], correcta: 0, explicacion: 'Apunte de Goldenberg, 3.4.1: a raíz de casos como Cofisa se incorporó el art. 19 ter. La CMF lo desarrolló en la NCG 484, cuyo primer requisito (cobro según el costo del servicio) recoge el caso.' },
      { tipo: 'vf', seccion: 'cofisa', sub: 'cofisa-decision', enunciado: 'En Cofisa, el cobro se trató como comisión porque el contrato lo llamaba «comisión de administración variable».', respuesta: false, explicacion: 'El nombre no decide. Por el art. 2° Ley 18.010, todo lo que se cobra por sobre el capital, a cualquier título, es interés. Era accesorio, periódico y dependía de las cuotas: era interés.' },
      { tipo: 'oral', seccion: 'cofisa', enunciado: 'Explique el caso Cofisa y su importancia en la materia.', puntos: ['Hechos: Cofisa (tarjeta DIN) cobraba, además del interés, una comisión de administración variable: monto fijo en pesos por el número de cuotas, cobrado en cada cuota.', 'Problema: ¿comisión por un servicio o interés encubierto? Concepto expansivo de interés (art. 2° Ley 18.010).', 'Decisión de la Corte Suprema: el cobro era accesorio, periódico y dependía del capital y de las cuotas. Era interés; sumado a la tasa, superaba la máxima convencional. El pacto se tuvo por no escrito.', 'Importancia: origen del art. 19 ter y de la NCG 484 (comisión calculada según el costo del servicio).'], norma: 'Arts. 2°, 8° y 19 ter Ley 18.010; NCG 484 CMF' },
      // Inverlink
      { tipo: 'alternativas', seccion: 'inverlink', sub: 'inverlink-decision', enunciado: 'Un fondo mutuo compró de buena fe uno de los depósitos a plazo de la Corfo, recibido por endoso. Según el apunte, ¿podía la Corfo recuperarlo de ese fondo?', opciones: ['No: por la inoponibilidad de excepciones del art. 28 Ley 18.092, solo podía demandar indemnización a quienes actuaron de mala fe', 'Sí, con la acción reivindicatoria, como cualquier cosa hurtada', 'Sí, porque los bienes de una entidad pública no pueden transferirse', 'Sí, pero debía devolverle al fondo el precio que pagó'], correcta: 0, explicacion: 'Primó la autonomía: el adquirente de buena fe tiene un derecho propio, limpio del robo anterior. La Corfo debió demandar indemnización a los primeros adquirentes y a las corredoras en que se probó mala fe.' },
      { tipo: 'relacionar', seccion: 'inverlink', sub: 'inverlink-hechos', enunciado: 'Relaciona cada parte del caso Inverlink con lo que pasó.', pares: [['Arista inicial', 'Información confidencial del Banco Central, descubierta por un correo que rebotó'], ['Arista Corfo', 'Depósitos a plazo físicos entregados por endoso traslaticio'], ['Corrida financiera', 'La declaración del «jarrón de la abuela»'], ['Reforma posterior', 'Las AFP solo invierten en instrumentos del depósito central de valores']], explicacion: 'Apunte de Gaspar, 10.5.2.6 (nota «Pregunta de examen») y 7.6.3.2.' },
      { tipo: 'oral', seccion: 'inverlink', enunciado: 'Explique el caso Inverlink y su importancia para la teoría de los títulos de crédito.', puntos: ['Hechos: funcionarios de la Corfo, coludidos con Inverlink, le entregaban depósitos a plazo por endoso traslaticio; tras el escándalo, Inverlink los hizo circular y los compraron terceros de buena fe.', 'Problema: ¿podían perseguirse «en manos de quien estuvieran», como el jarrón de la abuela? Eso causó una corrida en fondos mutuos.', 'Solución: autonomía e inoponibilidad de excepciones (art. 28 Ley 18.092). La Corfo no pudo recuperarlos de los adquirentes de buena fe; solo demandó indemnización a quienes actuaron de mala fe.', 'Importancia: el profesor lo llama un grave error conceptual (regla reivindicatoria civil aplicada a títulos autónomos). Después, las AFP solo pueden invertir en instrumentos del depósito central de valores.'], norma: 'Art. 28 Ley 18.092' },
      // Azul Azul
      { tipo: 'alternativas', seccion: 'azul-azul', sub: 'azul-decision', enunciado: '¿Con qué concepto resolvieron la CMF y la Corte Suprema que Clark debía hacer una OPA por Azul Azul?', opciones: ['Adquisición indirecta: al comprar el FIP, «compró al accionista» que tenía el control', 'Oferta pública de valores sin inscripción', 'Uso de información privilegiada', 'Pacto de actuación conjunta con los demás accionistas'], correcta: 0, explicacion: 'Apunte de Gaspar, 7.5.3: comprar las cuotas del FIP que tenía cerca del 63% de Azul Azul fue una adquisición indirecta de acciones, que obliga a hacer OPA (art. 199 LMV).' },
      { tipo: 'vf', seccion: 'azul-azul', sub: 'azul-aristas', enunciado: 'Según el apunte, Michael Clark fue formalizado penalmente por el art. 61 A LMV.', respuesta: true, explicacion: 'El art. 61 A LMV tipifica como delito defraudar a otro adquiriendo el control de una sociedad anónima abierta sin hacer la OPA que exige la ley.' },
      { tipo: 'alternativas', seccion: 'azul-azul', sub: 'azul-hechos', enunciado: 'Antes de la compra de Clark, ¿de quién eran las cuotas del FIP Tactical Sport según el apunte?', opciones: ['90% de Asesorías Sartor y 10% de Clark (Inversiones Antumalal)', '100% de Azul Azul S.A.', '63% de Sartor y 37% de Clark', 'De las AFP que participaron en la OPA de 2021'], correcta: 0, explicacion: 'Clark compró a plazo el 90% de Sartor y quedó con el 100% del FIP, que a su vez tenía cerca del 63% de Azul Azul.' },
      { tipo: 'oral', seccion: 'azul-azul', enunciado: 'Explique el caso Azul Azul y su importancia en la materia.', puntos: ['Hechos: el FIP Tactical Sport (administrado por Sartor) tenía cerca del 63% de Azul Azul S.A. Clark tenía el 10% de las cuotas y compró a plazo el otro 90% a Sartor.', 'Problema: Clark no hizo OPA ni informó; dijo que compró cuotas de un FIP, no acciones.', 'Decisión: la CMF y la Corte Suprema vieron una adquisición indirecta («se compró al accionista»); había obligación de OPA (art. 199 LMV).', 'Aristas: rescisión por no pago y control del liquidador de Sartor; formalización por art. 61 A LMV; demanda de nulidad de Schapira (desistida); embargo del 63% por la deuda del FIP.', 'Importancia: control indirecto, OPA y uso de FIP como vehículos.'], norma: 'Arts. 54, 199 y 61 A LMV' },
      // Cascadas
      { tipo: 'alternativas', seccion: 'cascadas', sub: 'cascadas-hechos', enunciado: 'En el caso Cascadas, ¿por qué las acciones del aumento de capital de Oro Blanco pasaban por la bolsa?', opciones: ['Porque la ley exige pasar por bolsa para ofrecerlas a terceros a un precio más favorable que el de la opción preferente', 'Porque las acciones de SQM solo pueden transarse en el extranjero', 'Porque la SVS lo ordenó como medida preventiva', 'Porque así no había que inscribir la emisión'], correcta: 0, explicacion: 'Apunte de Gaspar, 7.7.3: para vender a $90 en vez de los $100 de la opción preferente había que ir a bolsa. El esquema usó la bolsa como pantalla.' },
      { tipo: 'vf', seccion: 'cascadas', sub: 'cascadas-problema', enunciado: 'En el caso Cascadas, el perjuicio directo lo sufrieron los accionistas minoritarios de las sociedades de la cascada.', respuesta: true, explicacion: 'El control seguía en la estructura, pero el margen salía de las sociedades abiertas. El controlador recuperaba la diferencia en su sociedad personal; los minoritarios cargaban con la pérdida.' },
      { tipo: 'oral', seccion: 'cascadas', enunciado: 'Explique el caso Cascadas y su importancia en la materia.', puntos: ['Estructura: Ponce Lerou controlaba SQM mediante sociedades abiertas en cascada (Norte Grande, Oro Blanco, Potasios, Nitratos).', 'Esquema: acciones del aumento de capital de Oro Blanco vendidas en bolsa a $90 a sociedades vinculadas al controlador y recompradas por otra sociedad de la cascada a $110.', 'Perjuicio: el margen salía de las sociedades abiertas; lo pagaban los minoritarios.', 'Decisión: la SVS (2014) lo sancionó como operaciones ficticias y esquema fraudulento; la sanción está firme. Las corredoras, pendientes en la Corte Suprema según el apunte.', 'Importancia: manipulación de precios y transacciones ficticias, con doble persecución administrativa y penal.'], norma: 'Ley 18.045 (LMV), operaciones en bolsa' },
      // La Polar
      { tipo: 'alternativas', seccion: 'la-polar', sub: 'polar-hechos', enunciado: 'Según el apunte, ¿qué hacía sospechosos los resultados de La Polar durante la crisis de 2007-2008?', opciones: ['Reportaba utilidades espectaculares mientras el resto del retail caía', 'Había dejado de pagar dividendos', 'Su acción cayó antes que la de sus competidores', 'Cambiaba de auditora cada año'], correcta: 0, explicacion: 'Falabella, Ripley y Cencosud cayeron con la crisis; La Polar mostraba resultados «espectaculares» y su acción superó los $2.400.' },
      { tipo: 'relacionar', seccion: 'la-polar', sub: 'polar-importancia', enunciado: 'Relaciona cada punto del apunte con lo que muestra el caso La Polar.', pares: [['7.8.2 Veracidad', 'Repactaciones unilaterales que inflaban las utilidades'], ['7.8.3 Suficiencia', 'Clasificadoras que mantuvieron clasificaciones óptimas'], ['8.1 Responsabilidad civil', 'Demandas de las AFP y Moneda AGF contra PwC'], ['8.3 Responsabilidad penal', 'Información falsa perseguida en sede administrativa y penal']], explicacion: 'El apunte de Gaspar usa La Polar en 7.8.2, 7.8.3, 8.1 y 8.3.' },
      { tipo: 'oral', seccion: 'la-polar', enunciado: 'Explique el caso La Polar y su importancia en la materia: información, auditores y responsabilidades.', puntos: ['Incentivo: stock options de los ejecutivos (2005).', 'Mecanismo: repactaciones unilaterales nocturnas de créditos morosos; se evitaba el castigo y se registraban créditos nuevos mayores, con utilidades artificiales.', 'Colapso: junio de 2011, tras el reclamo de un inversionista ante la SVS y la SBIF; la acción cayó más de 99%.', 'Deber infringido: información veraz (arts. 9° y 59 a) LMV); falla de gobierno corporativo.', 'Auditores: PwC sancionada; la Corte Suprema rechazó la excusa del engaño (escepticismo profesional) y acogió las demandas de las AFP; acuerdo con seguros y utilidades futuras.'], norma: 'Arts. 9° y 59 a) LMV (según el apunte)' },
      // Aurus
      { tipo: 'alternativas', seccion: 'aurus', sub: 'aurus-descubrimiento', enunciado: 'Según el apunte, ¿quién descubrió finalmente que los activos de los fondos de Aurus eran falsos?', opciones: ['El encargado de control interno que Aurus nombró para cumplir las observaciones de la SVS', 'Las auditoras externas, al consultar a las empresas peruanas', 'La SVS, en su fiscalización en terreno de mayo de 2016', 'Los aportantes del fondo Insignia'], correcta: 0, explicacion: 'La SVS no detectó el déficit, pero sí vio que no había control interno. Aurus nombró a un encargado, que en septiembre de 2016 descubrió la falsedad y la informó en octubre.' },
      { tipo: 'vf', seccion: 'aurus', sub: 'aurus-decision', enunciado: 'En Aurus, la CMF tomó en cuenta que los demás directores indemnizaron con su patrimonio y dejaron el mercado, y acotó su multa a 1.000 UF por director.', respuesta: true, explicacion: 'Apunte de Gaspar, 5.2.5: en 2018 la CMF los sancionó solo por negligencia, ponderando la indemnización de unos US$20 millones y su salida voluntaria.' },
      { tipo: 'oral', seccion: 'aurus', enunciado: 'Explique el caso Aurus y su importancia en la materia.', puntos: ['Hechos: un director (Peña) desvió dinero de los fondos Insignia y Global durante casi 5 años y lo tapó con informes falsos de inversiones en Perú; pérdida de unos US$30 millones.', 'Fallas: no había control interno; las auditoras aceptaron cartas falsas sin verificar con la fuente; los demás directores confiaron a ciegas.', 'Descubrimiento: tras la fiscalización de la SVS (2016), el nuevo encargado de control interno detectó la falsedad.', 'Resultado: Peña con acuerdo condenatorio; los demás directores indemnizaron unos US$20 millones y cerraron la AGF; la CMF los multó solo por negligencia (1.000 UF cada uno).', 'Importancia: deber de diligencia intensificado de la AGF, que administra dinero ajeno; contraste con Sartor (lealtad).'], norma: 'Ley Única de Fondos (deberes de la AGF)' },
      // Sartor
      { tipo: 'alternativas', seccion: 'sartor', sub: 'sartor-decision', enunciado: 'Según el apunte, ¿qué diferencia la respuesta en el caso Sartor de la del caso Aurus?', opciones: ['En Sartor no se indemnizó a los aportantes; la CMF intervino la AGF y formuló cargos por deber de lealtad', 'En Sartor la CMF solo sancionó negligencia, igual que en Aurus', 'En Sartor los directores vendieron su patrimonio para indemnizar', 'En Sartor no hubo pérdida para los aportantes'], correcta: 0, explicacion: 'Aurus: negligencia, indemnización voluntaria y multas acotadas. Sartor: gestión en beneficio propio, sin compensación, intervención de la CMF y formalizaciones penales.' },
      { tipo: 'vf', seccion: 'sartor', sub: 'sartor-hechos', enunciado: 'En Sartor, al derivar el dinero a FIP, sociedades cerradas o entidades extranjeras, los recursos salían de la oferta pública y desaparecían los deberes de información transparente.', respuesta: true, explicacion: 'Apunte de Gaspar, 5.2.5: por eso la CMF detectó opacidad en la cadena de financiamiento.' },
      { tipo: 'oral', seccion: 'sartor', enunciado: 'Explique el caso Sartor, compárelo con Aurus y relaciónelo con Azul Azul.', puntos: ['Hechos: Sartor AGF llevaba dinero del mercado público a FIP y sociedades cerradas, que prestaban sin garantías a empresas de sus propios dueños; préstamos renovados sin cobrar; pérdida del 50% al 70% de las cuotas.', 'Deber infringido: lealtad (gestión en beneficio propio y en conflicto de interés).', 'Resultado: sin indemnización; intervención de la CMF a fines de 2024; cargos; formalizaciones con prisión preventiva y arresto domiciliario.', 'Contraste con Aurus: diligencia frente a lealtad; indemnización voluntaria frente a ninguna.', 'Relación con Azul Azul: el FIP Tactical Sport compró el control con créditos sin prenda de un fondo de Sartor.'], norma: 'Ley Única de Fondos; LMV' },
      // Crisis subprime
      { tipo: 'alternativas', seccion: 'subprime', sub: 'subprime-chile', enunciado: 'Según el apunte, ¿cómo evitó Chile un colapso sistémico en la crisis subprime?', opciones: ['Usó las reservas internacionales del Fisco para inyectar liquidez al mercado interno', 'Prohibió la securitización de créditos hipotecarios', 'Subió la tasa máxima convencional', 'Nacionalizó la banca'], correcta: 0, explicacion: 'Con la gestión de las reservas internacionales (ministro Andrés Velasco) se suplió la paralización del crédito externo.' },
      { tipo: 'alternativas', seccion: 'subprime', sub: 'subprime-hechos', enunciado: 'En el ejemplo del apunte, un banco presta US$110.000 a un deudor NINJA para comprar una casa de US$100.000. ¿En qué confiaba el banco?', opciones: ['En que la casa subiría de valor y su remate cubriría la deuda', 'En los ingresos futuros del deudor', 'En un seguro estatal de depósitos', 'En la garantía personal de un aval'], correcta: 0, explicacion: 'La banca reemplazó la evaluación de solvencia por la confianza en la garantía hipotecaria. Al caer la casa a US$60.000, el remate no alcanzó.' },
      { tipo: 'oral', seccion: 'subprime', enunciado: 'Explique la crisis subprime y por qué importa para el mercado de valores.', puntos: ['Securitización: el banco cede su cartera hipotecaria a un patrimonio separado que emite bonos; recupera liquidez y vuelve a prestar.', 'Causa: préstamos a deudores NINJA, confianza ciega en la garantía, créditos de hasta el 110% del valor en pleno boom inmobiliario.', 'Detonante: alza de tasas (2006-2007), caída de precios, no pago masivo; los bonos securitizados perdieron valor y la crisis se volvió global.', 'Chile: evitó el colapso con las reservas internacionales del Fisco.', 'Importancia: riesgo de solvencia de los instrumentos de deuda y errores de las clasificadoras.'], norma: 'Apunte de Gaspar, 6.4 (bonos securitizados)' },
      // Videla / Cencosud
      { tipo: 'vf', seccion: 'videla', sub: 'videla-problema', enunciado: 'Como la compra de la cadena de supermercados en Brasil no se concretó, la información que tenía Videla no era privilegiada.', respuesta: false, explicacion: 'La aptitud se juzga ex ante, al momento del hecho; no se exige que el precio cambie después. Además, un hecho reservado es información privilegiada per se (art. 164 LMV).' },
      { tipo: 'alternativas', seccion: 'videla', sub: 'videla-decision', enunciado: '¿Por qué un hecho esencial reservado es información privilegiada «per se»?', opciones: ['Porque el art. 164 LMV lo califica así por mandato legal', 'Porque la CMF lo publica en su sitio web', 'Porque el precio de la acción siempre sube después', 'Porque lo aprueba la junta de accionistas'], correcta: 0, explicacion: 'Apunte de Gaspar, 9.2.1: cuando el directorio comunica reservadamente un hecho esencial a la CMF (art. 10 LMV), la materia se transforma automáticamente en información privilegiada.' },
      { tipo: 'oral', seccion: 'videla', enunciado: 'Explique el caso Matías Videla (Cencosud) y su importancia en la materia.', puntos: ['Hechos: Cencosud negociaba comprar una cadena de supermercados en Brasil y lo comunicó a la CMF como hecho reservado, firmado por Videla; durante la reserva, él compró acciones de Cencosud; la operación se cayó.', 'Problema: ¿era información privilegiada si no se concretó? La aptitud se juzga ex ante.', 'Decisión: la CMF lo multó por uso de información privilegiada; la Corte de Apelaciones y la Corte Suprema confirmaron, con condena en costas, porque no había motivo plausible para litigar.', 'Importancia: el hecho reservado es información privilegiada per se (arts. 10 y 164 LMV).'], norma: 'Arts. 10, 164 y 165 LMV' },
      // Navarrete / CAP
      { tipo: 'relacionar', seccion: 'navarrete', sub: 'navarrete-problema', enunciado: 'Relaciona cada conducta prohibida con su descripción y su sanción, según el apunte.', pares: [['Uso de información privilegiada', 'Transar para ganar o evitar una pérdida: sanción de la CMF y delito'], ['Infracción al deber de abstención', 'Transar con la información sin fin especulativo: solo sanción de la CMF'], ['Revelación o comunicación', 'Transmitir la información o inducir a comprar: sanción de la CMF y delito']], explicacion: 'Apunte de Gaspar, 9.2.3 (arts. 165 y 166 LMV).' },
      { tipo: 'alternativas', seccion: 'navarrete', sub: 'navarrete-hechos', enunciado: 'En el caso Navarrete, ¿qué información conocía Felipe Navarrete por su cargo?', opciones: ['Que su sociedad aumentaría su participación en CAP y obtendría un director adicional', 'Que CAP haría una OPA por Azul Azul', 'Los estados financieros deficitarios de Blanco y Negro', 'Que la CMF sancionaría a CAP'], correcta: 0, explicacion: 'Lo reveló en un almuerzo familiar, y sus hermanas compraron acciones de CAP durante ese mismo almuerzo.' },
      { tipo: 'oral', seccion: 'navarrete', enunciado: 'Explique el caso Navarrete (CAP) y qué conductas prohibidas ilustra.', puntos: ['Hechos: un director sabía que su sociedad aumentaría su participación en CAP; en un almuerzo familiar se lo contó a sus hermanas, que compraron acciones de CAP en ese momento.', 'Conductas: uso (transar para ganar o evitar pérdida), deber de abstención (transar sin fin especulativo) y revelación o inducción.', 'Sanción: la CMF sancionó al director y a sus hermanas, y los tribunales lo ratificaron.', 'Importancia: no solo infringe quien compra; también quien revela o recomienda. Comparar con Blanco y Negro (uso frente a abstención).'], norma: 'Arts. 165 y 166 LMV' },
      /* ---- Preguntas de razonamiento (borrador de NotebookLM, revisadas contra el apunte de Gaspar) ---- */
      { tipo: 'alternativas', seccion: 'cascadas', sub: 'cascadas-decision', enunciado: 'Las ventas de Oro Blanco a $90 y las recompras a $110 quedaron registradas en la bolsa. ¿Por qué igual se calificaron como operaciones ficticias?', opciones: ['Porque no buscaban un cambio real de dueño: la bolsa se usó como ropaje para extraer la diferencia de precio a favor del controlador', 'Porque nunca se ingresaron a los sistemas de la bolsa', 'Porque se pagaron con pagarés y no con dinero', 'Porque se hicieron fuera del horario de la bolsa'], correcta: 0, explicacion: 'Apunte de Gaspar, 7.7.3: una operación es ficticia aunque se ejecute en la bolsa si carece de la intención real de transferir el dominio. El art. 53 LMV las prohíbe.' },
      { tipo: 'alternativas', seccion: 'navarrete', sub: 'navarrete-importancia', enunciado: 'En el caso Blanco y Negro, Aníbal Mosa compró acciones conociendo el balance negativo aún no publicado. ¿Por qué el apunte lo califica como infracción al deber de abstención y no como uso de información privilegiada?', opciones: ['Porque compró para aumentar su control en la sociedad, no para ganar o evitar una pérdida en bolsa', 'Porque la información ya era pública cuando compró', 'Porque los directores de clubes de fútbol no son insiders', 'Porque compró a través de un FIP y no a su nombre'], correcta: 0, explicacion: 'Apunte de Gaspar, 9.2.3: el uso exige transar para ganar o evitar una pérdida (sanción de la CMF y delito). Transar con la información sin ese fin es infracción al deber de abstención: solo sanción de la CMF. Restle, en cambio, vendió para evitar una pérdida: uso.' },
      { tipo: 'alternativas', seccion: 'azul-azul', sub: 'azul-importancia', enunciado: 'Según el apunte, ¿cuál de estas operaciones obligaba a hacer una OPA?', opciones: ['Comprar el 90% restante de las cuotas del FIP que tenía el 63% de Azul Azul', 'Que Euroamérica e Indisa compraran por separado, sin pacto, el 51% de Clínica Las Condes', 'Que Piñera y la familia Cueto tomaran el control de LAN mediante un pacto de actuación conjunta', 'Ninguna de las tres: la OPA solo se exige al comprar acciones directamente en bolsa'], correcta: 0, explicacion: 'Azul Azul: adquisición indirecta del control (se «compró al accionista»). Clínica Las Condes: ningún comprador obtuvo el control por sí solo ni había pacto. LAN: el control nació de un pacto, no de una compra de acciones; bastaba informar (art. 54 LMV).' },
      { tipo: 'alternativas', seccion: 'subprime', sub: 'subprime-importancia', enunciado: 'Según el apunte, ¿qué diferencia el activo que respaldaba el bono securitizado de la UDP del que respaldaba los bonos subprime?', opciones: ['La UDP cedió un flujo constante y predecible de pagos de matrículas; los subprime dependían de hipotecas de deudores sin capacidad de pago, respaldadas solo por el valor de la casa', 'El bono de la UDP tenía garantía del Banco Central; los subprime no', 'La UDP securitizó su infraestructura; los subprime, flujos de matrículas', 'No hay diferencia: ambos se respaldaban en bienes raíces'], correcta: 0, explicacion: 'Apunte de Gaspar, 6.4: el principal activo de la UDP era el flujo de pagos de matrículas. En la crisis subprime, la banca reemplazó la evaluación de solvencia por la confianza en la garantía hipotecaria.' },
      { tipo: 'relacionar', seccion: 'la-polar', sub: 'polar-importancia', enunciado: 'Relaciona cada caso con el ilícito de mercado que ilustra, según el apunte.', pares: [['La Polar', 'Entrega de información falsa al mercado'], ['Cascadas', 'Manipulación de precios y transacciones ficticias'], ['Videla / Cencosud', 'Uso de información privilegiada (hecho reservado)'], ['Azul Azul', 'Tomar el control de una sociedad abierta sin OPA (art. 61 A LMV)']], explicacion: 'Apunte de Gaspar, 8.3, 9.2.1 y 7.5.3. La información falsa y la manipulación son ilícitos de doble persecución, administrativa y penal.' },
      { tipo: 'alternativas', seccion: 'videla', sub: 'videla-decision', enunciado: 'Para sancionar a Videla por uso de información privilegiada, ¿cuál de estos elementos NO era necesario acreditar?', opciones: ['Que el precio de la acción de Cencosud subiera después de su compra', 'Que conociera un hecho reservado por su cargo de gerente general', 'Que comprara mientras la reserva estaba vigente', 'Que la información no estuviera divulgada al mercado'], correcta: 0, explicacion: 'La aptitud de la información se juzga ex ante: no se exige que el precio cambie después (apunte, 9.2.1). Además, el hecho reservado es información privilegiada per se (art. 164 LMV).' },
      // Tercera tanda: Howey, Chang, Clínica Las Condes, Piñera con LAN, Blanco y Negro
      { tipo: 'relacionar', seccion: 'howey', sub: 'howey-importancia', enunciado: 'Aplica el test de Howey a las acciones de Endesa que recibieron funcionarios públicos en el capitalismo popular: relaciona cada elemento con el hecho que lo cumple.', pares: [['Entrega de dinero', 'Renuncia a la indemnización por años de servicio'], ['Expectativa de ganancia', 'Utilidades y dividendos en el tiempo'], ['Ganancia por la actividad de un tercero', 'Gestión de las centrales hidroeléctricas por Endesa']], explicacion: 'Apunte de Gaspar, punto 3: el ejemplo del padre del profesor, médico en Talca. Los retornos no dependían de su esfuerzo, sino de la gestión de la empresa.' },
      { tipo: 'alternativas', seccion: 'howey', sub: 'howey-importancia', enunciado: 'Según el apunte, ¿por qué Herbalife es un «caso límite» bajo el test de Howey?', opciones: ['Porque combina la inversión y la búsqueda de ganancia con el trabajo de venta propio y de la red', 'Porque no hay entrega de dinero', 'Porque sus productos son bienes corporales, como el oro', 'Porque es una sociedad anónima abierta chilena'], correcta: 0, explicacion: 'El tercer elemento exige que la ganancia venga de la actividad de un tercero. En una estructura multinivel, parte de la ganancia depende del esfuerzo propio.' },
      { tipo: 'alternativas', seccion: 'chang', sub: 'chang-problema', enunciado: 'Alberto Chang ofrecía pagarés a cualquier interesado. ¿Por qué no podía ampararse en la oferta privada (safe harbor) de la NCG 336?', opciones: ['Porque se dirigía al público en general y no calzaba en ninguna de las cuatro hipótesis, como ofrecer solo a inversionistas calificados', 'Porque los pagarés nunca pueden ofrecerse en el mercado de valores', 'Porque la NCG 336 solo se aplica a acciones', 'Porque Chang no era chileno'], correcta: 0, explicacion: 'Apunte de Gaspar, 7.4.2: la oferta privada se reserva a quienes pueden evaluar riesgos y defenderse solos. Chang captaba del público retail: era oferta pública sin inscripción (art. 62 a) LMV, según el apunte).' },
      { tipo: 'oral', seccion: 'chang', enunciado: 'Explique el caso Alberto Chang y su importancia en la materia.', puntos: ['Hechos: captaba dinero del público con pagarés y rentabilidades altas, sin inscribirse en el Registro de Valores; esquema piramidal; huyó a Malta.', 'Problema: ¿oferta pública u oferta privada? No calzaba en ninguna hipótesis de la NCG 336 (modificada por la NCG 452/2021).', 'Consecuencia: delito de oferta pública sin inscripción (art. 62 a) LMV, antes art. 59 A, según el apunte); extradición denegada por Malta.', 'Importancia: la inscripción previa (control ex ante) no garantiza la solvencia; protege al inversionista retail del engaño.'], norma: 'Art. 4° LMV; NCG 336 y 452; art. 62 a) LMV (según el apunte)' },
      { tipo: 'vf', seccion: 'clinica-las-condes', sub: 'clc-decision', enunciado: 'Cuando Euroamérica pasó a ser controladora de Clínica Las Condes por el aumento de capital, quedó obligada a hacer una OPA.', respuesta: false, explicacion: 'Apunte de Gaspar, 7.5.4: la toma de control se originó en la suscripción de un aumento de capital, que es una excepción legal a la OPA.' },
      { tipo: 'oral', seccion: 'clinica-las-condes', enunciado: 'Explique el caso Clínica Las Condes: por qué no hubo OPA en la venta del control ni cuando Euroamérica pasó a ser controladora.', puntos: ['Venta: Karlezi (cerca del 51%) vendió por separado a Euroamérica (26,5%) e Indisa (25,5%), sin pacto; ninguno tomó el control solo, así que no hubo OPA.', 'Controlador (art. 97): entre 25% y 40%, si se supera la suma de quienes tienen 5% o más; los de menos de 5% se excluyen.', 'Aumento de capital: el tercero bajó de 6% a 4,5% y salió de la comparación; Euroamérica pasó a tener la influencia decisiva frente a Indisa.', 'Sin OPA: la toma de control vino de suscribir un aumento de capital (excepción legal).', 'Contraste: Azul Azul (control indirecto, con OPA) y LAN (pacto, sin OPA).'], norma: 'Arts. 97 y 199 LMV' },
      { tipo: 'alternativas', seccion: 'pinera-lan', sub: 'lan-privilegiada', enunciado: 'Un director compra acciones de su sociedad el día después de que el directorio aprobó estados financieros que aún no se entregan al mercado. Según la doctrina del caso Piñera con LAN, ¿qué ocurre?', opciones: ['Transa con información privilegiada: los estados financieros aprobados lo son hasta que se entregan al mercado', 'Nada, porque los estados financieros son información periódica y no un hecho esencial', 'Solo infringe si el precio de la acción sube después', 'Solo infringe si es gerente general'], correcta: 0, explicacion: 'Apunte de Gaspar, 9.2.1. Es la misma situación del caso Blanco y Negro.' },
      { tipo: 'oral', seccion: 'pinera-lan', enunciado: 'Explique las dos enseñanzas del caso LAN en el apunte: la toma de control sin OPA y los estados financieros como información privilegiada.', puntos: ['Control: Piñera y la familia Cueto tomaron el control de LAN con un pacto de actuación conjunta; no hubo OPA porque el control nació de un pacto y no de una compra de acciones; sí debían informar (art. 54 LMV).', 'Información privilegiada: el caso Piñera con LAN (2007) sentó que los estados financieros aprobados por el directorio son información privilegiada antes de su entrega al mercado.', 'Conexión: es el antecedente de Blanco y Negro; contrasta con Azul Azul y Clínica Las Condes en materia de OPA.'], norma: 'Arts. 54, 164 y 199 LMV' },
      { tipo: 'alternativas', seccion: 'blanco-y-negro', sub: 'byn-problema', enunciado: 'En Blanco y Negro, ¿qué información privilegiada tenían los directores cuando transaron?', opciones: ['Estados financieros con resultados deficitarios, aprobados por el directorio y aún no difundidos', 'Un hecho esencial reservado sobre la compra de otro club', 'La decisión de la CMF de sancionar a la sociedad', 'Una OPA lanzada por un tercero sobre Blanco y Negro'], correcta: 0, explicacion: 'Apunte de Gaspar, 9.2.1: transaron al día siguiente de la aprobación, antes de la difusión pública. Aplica la doctrina de Piñera con LAN.' },
      { tipo: 'oral', seccion: 'blanco-y-negro', enunciado: 'Explique el caso Blanco y Negro y la diferencia entre uso de información privilegiada e infracción al deber de abstención.', puntos: ['Hechos: el directorio aprobó estados financieros deficitarios; al día siguiente, antes de difundirlos, un director vendió y otro (Mosa) compró.', 'Uso: vender para evitar una pérdida; sanción de la CMF y delito penal.', 'Deber de abstención: Mosa compró para aumentar su control (OPA), sin fin especulativo; solo sanción de la CMF.', 'Base: los estados financieros aprobados y no publicados son información privilegiada (Piñera con LAN).'], norma: 'Arts. 164, 165 y 166 LMV' },
      /* ---- Preguntas de razonamiento (borrador de NotebookLM, revisadas contra el apunte de Gaspar), segunda tanda ---- */
      { tipo: 'alternativas', seccion: 'howey', sub: 'howey-importancia', enunciado: 'Una empresa emergente vende tokens digitales. No dan derecho a cobrar una deuda ni son acciones, pero lo recaudado se usa para desarrollar una plataforma cuyas utilidades se reparten entre los tenedores. ¿Cómo se calificaría el token en EE. UU. y en Chile, según el apunte?', opciones: ['En EE. UU. sería un valor (contrato de inversión bajo Howey); en Chile no, porque no es formalmente un título de crédito de inversión', 'En ambos países sería un valor, porque hay expectativa de ganancia por el trabajo de un tercero', 'En EE. UU. no sería valor por ser un activo digital; en Chile sí, por el art. 3° LMV', 'En ninguno sería valor, porque falta la entrega de dinero'], correcta: 0, explicacion: 'Apunte de Gaspar, punto 3: Howey mira la sustancia (dinero, expectativa de ganancia, esfuerzo de un tercero). La LMV chilena exige un título de crédito de inversión con abstracción, autonomía y transferibilidad; por eso los criptoactivos quedaron fuera y se dictó la Ley Fintech.' },
      { tipo: 'alternativas', seccion: 'chang', sub: 'chang-problema', enunciado: 'Un emisor coloca, sin inscribirlos, bonos de 3.500 UF cada uno. Alberto Chang ofrecía, sin inscribirlos, pagarés de bajo valor a cualquier interesado. ¿Cuál de las dos operaciones requería inscripción previa en el Registro de Valores?', opciones: ['Solo la de Chang: los bonos de 3.500 UF caben en la hipótesis de instrumentos de valor unitario igual o superior a 3.000 UF', 'Ambas, porque toda emisión de deuda debe inscribirse', 'Solo la de los bonos, porque superan las 3.000 UF', 'Ninguna, porque los pagarés y bonos privados nunca se inscriben'], correcta: 0, explicacion: 'Apunte de Gaspar, 7.4.2: la NCG 336 (modificada por la NCG 452/2021) no reputa pública la oferta de instrumentos de 3.000 UF o más por unidad. Chang se dirigía al público en general sin calzar en ninguna hipótesis: oferta pública sin inscripción.' },
      { tipo: 'alternativas', seccion: 'pinera-lan', sub: 'lan-privilegiada', enunciado: 'Videla (Cencosud) y Piñera (LAN) fueron sancionados por transar con información privilegiada. ¿Qué hacía privilegiada la información en cada caso, según el apunte?', opciones: ['Videla: un hecho reservado comunicado a la CMF, privilegiado per se (art. 164 LMV). LAN: estados financieros aprobados por el directorio y aún no entregados al mercado', 'En ambos, que el precio de la acción subiera después de la compra', 'Videla: estados financieros aprobados. LAN: un hecho reservado sobre una fusión', 'En ambos, que la información se publicara en la prensa antes de la compra'], correcta: 0, explicacion: 'Apunte de Gaspar, 9.2.1. En ninguno de los dos casos importa que el precio cambie después: la aptitud de la información se juzga ex ante.' }
    ],

    glosario: []
  });
})();
