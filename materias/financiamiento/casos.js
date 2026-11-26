/* Casos vistos en clases — Financiamiento de la Empresa (DER010C).
   Unidad especial (tipo:'casos'): un caso por sección. La ficha de cada caso enlaza con las
   unidades donde se menciona; el motor agrega en esas secciones el aviso «Caso relacionado».
   Fuentes:
   - «Lo que dice el apunte»: apunte completo de clases del Prof. Goldenberg (Cofisa, 3.3–3.4.2) y del
     Prof. Gaspar (Inverlink, Azul Azul, Cascadas y La Polar). El apunte de Gaspar marca con la nota
     «Pregunta de examen» los casos que pregunta en el oral (lo indica la ficha de cada caso).
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
<p class="small">Fuera del apunte. Datos del comunicado de la CMF y de la nota de La Tercera enlazados en la ficha.</p>
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
<h3 data-sub="sartor-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos de los comunicados de la CMF enlazados en la ficha.</p>
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
<p class="small">Fuera del apunte. Datos del ensayo de Federal Reserve History (escrito al 22 de noviembre de 2013), enlazado en la ficha.</p>
<ul>
  <li>Describe la crisis como un período de turbulencia financiera entre <b>2007 y 2010</b>, causado por la expansión de las hipotecas a deudores de alto riesgo junto con el alza de los precios de las viviendas.</li>
  <li>Los prestamistas agrupaban las hipotecas en carteras que vendían a inversionistas. Los bonos respaldados por hipotecas emitidos por privados financiaban la mayor parte de los créditos <i>subprime</i>.</li>
  <li>Cuando los precios dejaron de subir, aumentó la morosidad. En <b>abril de 2007</b> quebró New Century Financial, uno de los principales prestamistas <i>subprime</i>.</li>
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
<h3 data-sub="videla-importancia">Por qué importa en la materia</h3>
<ul>
  <li>Es el ejemplo del <b>objeto</b> de la información privilegiada (9.2.1): cuando el directorio comunica un hecho esencial como reservado (<span class="norma">art. 10 LMV</span>), la información pasa a ser privilegiada de forma automática.</li>
  <li>Muestra la tensión de los <b>hechos reservados</b>: se protege el interés social al no divulgar, pero quien conoce la reserva queda obligado a no transar.</li>
</ul>
<h3 data-sub="videla-contexto">Contexto (fuente externa)</h3>
<p class="small">Fuera del apunte. Datos del comunicado de la CMF y de la nota de Diario Financiero enlazados en la ficha.</p>
<ul>
  <li>La CMF aplicó a Videla una multa de <b>UF 15.000</b> (Resolución N° 7222, informada el 4 de octubre de 2023) por infringir el art. 165 LMV.</li>
  <li>El hecho reservado era del <b>3 de febrero de 2022</b>. Cencosud, por medio de Cencosud Brasil, había firmado un memorándum de entendimiento para analizar y eventualmente comprar Torre y Cía. Supermercados, una cadena de Río de Janeiro.</li>
  <li>El <b>13 de mayo de 2022</b>, Videla compró 613.026 acciones de Cencosud por unos $800 millones.</li>
  <li>Según Diario Financiero (6 de febrero de 2026), la Corte Suprema ratificó íntegramente la multa y le cobró costas.</li>
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
<p class="small">Fuera del apunte. Datos del comunicado de la CMF y de la nota de La Tercera enlazados en la ficha.</p>
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
      { tipo: 'oral', seccion: 'navarrete', enunciado: 'Explique el caso Navarrete (CAP) y qué conductas prohibidas ilustra.', puntos: ['Hechos: un director sabía que su sociedad aumentaría su participación en CAP; en un almuerzo familiar se lo contó a sus hermanas, que compraron acciones de CAP en ese momento.', 'Conductas: uso (transar para ganar o evitar pérdida), deber de abstención (transar sin fin especulativo) y revelación o inducción.', 'Sanción: la CMF sancionó al director y a sus hermanas, y los tribunales lo ratificaron.', 'Importancia: no solo infringe quien compra; también quien revela o recomienda. Comparar con Blanco y Negro (uso frente a abstención).'], norma: 'Arts. 165 y 166 LMV' }
    ],

    glosario: []
  });
})();
