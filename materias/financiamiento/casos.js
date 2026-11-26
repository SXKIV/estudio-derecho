/* Casos vistos en clases — Financiamiento de la Empresa (DER010C).
   Unidad especial (tipo:'casos'): un caso por sección. La ficha de cada caso enlaza con las
   unidades donde se menciona; el motor agrega en esas secciones el aviso «Caso relacionado».
   Fuentes:
   - «Lo que dice el apunte»: apunte completo de clases del Prof. Goldenberg (Cofisa, 3.3–3.4.2) y del
     Prof. Gaspar (Inverlink, Azul Azul, Cascadas y La Polar). El apunte de Gaspar marca estos cuatro
     casos con la nota «Pregunta de examen».
   - «Contexto (fuente externa)»: solo datos confirmados en las páginas enlazadas en la ficha
     (revisadas en noviembre de 2026).
   Pendientes: Chispas y D&S/Falabella (ver CLAUDE.md). */
(function () {
  Estudio.registrarUnidad({
    id: 'casos', tipo: 'casos', icono: '⚖️', bloque: 'Casos',
    titulo: 'Casos vistos en clases',
    resumen: 'Los casos que se ven en clases, explicados para el oral: hechos, problema jurídico, cómo se resolvió y por qué importan en la materia. Cada uno enlaza con las unidades donde aparece.',
    lecturas: 'Apuntes completos de clases de los Profs. Goldenberg y Gaspar. El contexto externo de cada caso viene de las fuentes enlazadas en su ficha y está separado de lo que dice el apunte. En el oral, el Prof. Gaspar pide explicar el caso y su importancia en la materia.',

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
<h3 data-sub="cofisa-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Muestra el <b>efecto expansivo del interés</b> (art. 2°): el nombre del cobro no decide.</li>
  <li>A raíz de casos como este se incorporó el <span class="norma">art. 19 ter Ley 18.010</span>: se pueden cobrar comisiones que no son interés solo si pagan servicios reales y efectivamente prestados.</li>
  <li>La <b>NCG 484</b> de la CMF exige, entre otros requisitos, que la comisión se calcule según el <b>costo de prestar el servicio</b>. Ese requisito recoge Cofisa: un cobro que depende del plazo o del capital es interés.</li>
</ul>
<h3 data-sub="cofisa-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos del comunicado del Sernac enlazado en la ficha.</p>
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
<h3 data-sub="inverlink-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Según el profesor, la idea del «jarrón» fue un <b>grave error conceptual</b>: aplicaba una regla reivindicatoria civil a títulos de crédito, que son autónomos.</li>
  <li>Muestra para qué sirven la autonomía y la abstracción: quien compra un título no necesita hacer un estudio de títulos de los dueños anteriores.</li>
  <li><b>Reforma posterior (7.6.3.2):</b> la ley exige que las AFP solo inviertan en instrumentos depositados en el depósito central de valores (Ley 18.876), para tener trazabilidad electrónica.</li>
</ul>
<div class="callout"><p><b>Ejemplo del apunte:</b> si en el bus te roban el ticket de la maleta, el chofer le entrega la maleta a quien presente el ticket y queda liberado. No importa el robo ocurrido antes.</p></div>
<h3 data-sub="inverlink-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos de las notas de prensa enlazadas en la ficha.</p>
<ul>
  <li><b>Sede penal:</b> en agosto de 2015, la Corte Suprema (Segunda Sala, fallo unánime) confirmó la condena de siete ejecutivos por delitos de la Ley de Valores. Acogió la demanda civil de la Corfo: los condenados debían pagar en forma solidaria $26.462.295.646 por daño emergente, y BBVA Corredora de Bolsa también, por la responsabilidad de sus funcionarios.</li>
  <li><b>Restitución por terceros:</b> en abril de 2013, la Corte Suprema (Tercera Sala, fallo dividido) ordenó a San Antonio Terminal Internacional (STI) restituir a la Corfo más de $400 millones, recibidos desde la corredora Inverlink. Según la nota, esa acción no busca indemnizar: el tercero solo devuelve el beneficio que recibió producto del dolo.</li>
</ul>
<p class="small">Ojo: estas restituciones recaen sobre dinero que pagó Inverlink, no sobre los depósitos a plazo en manos de adquirentes de buena fe.</p>`
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
<p class="small">Fuera del apunte. Datos del comunicado de la CMF y de la nota de CNN Chile enlazados en la ficha.</p>
<ul>
  <li>Según la CMF, el 13 de diciembre de 2024 Inversiones Antumalal compró a Asesorías e Inversiones Sartor cuotas equivalentes al <b>90,07%</b> del FIP Tactical Sport. El FIP tenía el <b>63,07% de las acciones Serie B</b> de Azul Azul, lo que le daba el control.</li>
  <li>En octubre de 2026, el Consejo de la CMF multó a Michael Clark con <b>UF 20.000</b> por no hacer la OPA que exige el art. 199 LMV.</li>
  <li>Según CNN Chile, la CMF rechazó en enero de 2025 una reposición de Clark contra la OPA. En septiembre de 2025, la Corte de Apelaciones de Santiago rechazó un reclamo de ilegalidad suyo y él apeló a la Corte Suprema. En 2026, el Tribunal Constitucional declaró inadmisibles dos requerimientos de inaplicabilidad.</li>
</ul>
<div class="callout yellow"><p><b>Ojo con las fuentes:</b> el apunte dice que la Corte Suprema confirmó, con fallo ejecutoriado, que había obligación de OPA. La nota de CNN Chile (octubre de 2026) dice que una multa anterior de 65.000 UF «se encuentra en reclamación judicial» y no informa qué resolvió la Corte Suprema. No pudimos confirmar ese fallo en una fuente externa.</p></div>`
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
<p class="small">Fuera del apunte. Datos de las notas enlazadas en la ficha.</p>
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
<p class="small">Fuera del apunte. Datos de las páginas enlazadas en la ficha.</p>
<ul>
  <li>Según CNN Chile, la Corte Suprema confirmó una multa de <b>4.500 UF</b> a PwC por su responsabilidad en la revisión de los estados financieros de Inversiones SCG, la empresa que administraba las tarjetas de crédito de La Polar.</li>
  <li>El 16 de marzo de 2026, el Poder Judicial informó que la Corte Suprema (Primera Sala, rol 25.039-2024) confirmó la condena de siete exejecutivos de La Polar a pagar a <b>AFP Provida</b>, en forma solidaria, el equivalente a <b>2.575.388 UF</b> por responsabilidad extracontractual.</li>
  <li>Esa noticia cita, para calcular el daño, una sentencia de la Corte Suprema de 3 de septiembre de 2021 (rol 8.429-2018, «AFP Provida S.A. con Price Waterhouse Coopers»).</li>
</ul>
<p class="small">El apunte ubica el fallo contra PwC «hacia 2020»; la sentencia que cita el Poder Judicial es de septiembre de 2021.</p>`
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
      { tipo: 'oral', seccion: 'la-polar', enunciado: 'Explique el caso La Polar y su importancia en la materia: información, auditores y responsabilidades.', puntos: ['Incentivo: stock options de los ejecutivos (2005).', 'Mecanismo: repactaciones unilaterales nocturnas de créditos morosos; se evitaba el castigo y se registraban créditos nuevos mayores, con utilidades artificiales.', 'Colapso: junio de 2011, tras el reclamo de un inversionista ante la SVS y la SBIF; la acción cayó más de 99%.', 'Deber infringido: información veraz (arts. 9° y 59 a) LMV); falla de gobierno corporativo.', 'Auditores: PwC sancionada; la Corte Suprema rechazó la excusa del engaño (escepticismo profesional) y acogió las demandas de las AFP; acuerdo con seguros y utilidades futuras.'], norma: 'Arts. 9° y 59 a) LMV (según el apunte)' }
    ],

    glosario: []
  });
})();
