/* Unidad 4 — Garantías mercantiles, agencia de garantías y subordinación de créditos.
   Fuentes: diapositivas «Garantías mercantiles» y apuntes de clases del Prof. Goldenberg. */
(function () {
  var fmt = function (n, d) { return Number(n).toLocaleString('es-CL', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); };

  Estudio.registrarUnidad({
    id: 'u4', numero: 4, bloque: 'Prof. Goldenberg', profesor: 'Goldenberg',
    titulo: 'Garantías y subordinación',
    resumen: 'Garantías personales (fianza mercantil y bancaria) y reales (prenda mercantil, sin desplazamiento, de valores mobiliarios, especial de la LMV y warrants), la agencia de garantías y la subordinación de créditos.',
    lecturas: 'Diapositivas «Garantías mercantiles» (segundo semestre 2026) y apuntes de clases (Prof. Goldenberg). Las diapositivas no incluyen subordinación: esa sección sale de los apuntes.',

    /* ---------------- Glosario (definiciones del material) ---------------- */
    glosario: [
      {"termino": "Caución", "definicion": "Obligación accesoria o coordinada con la principal que crea un derecho subjetivo adicional al derecho de crédito que se quiere asegurar.", "fuente": "Art. 46 CC; diapositivas", "seccion": "garantias", "alias": ["garantia", "garantias"]},
      {"termino": "Garantía personal", "definicion": "La otorgada por una persona distinta del deudor, que compromete todo su patrimonio en seguridad de la obligación; no da preferencia.", "fuente": "Diapositivas, garantías", "seccion": "garantias", "alias": ["garantias personales"]},
      {"termino": "Garantía real", "definicion": "Aquella en que el deudor o un tercero afectan una cosa al pago de la obligación, creando un derecho real con persecución y preferencia.", "fuente": "Diapositivas, garantías", "seccion": "garantias", "alias": ["garantias reales"]},
      {"termino": "Derecho de persecución", "definicion": "Facultad del acreedor de perseguir la cosa gravada en manos de quien la tenga, aunque haya sido enajenada.", "fuente": "Diapositivas, garantías", "seccion": "garantias"},
      {"termino": "Derecho de preferencia", "definicion": "Facultad de pagarse antes que otros acreedores con el producto de la realización (preferencia sustantiva) y de realizar separadamente el bien en el concurso (preferencia procesal).", "fuente": "Diapositivas, garantías", "seccion": "garantias", "alias": ["preferencia"]},
      {"termino": "Fianza", "definicion": "Obligación accesoria en virtud de la cual una o más personas responden de una obligación ajena, comprometiéndose para con el acreedor a cumplirla en todo o parte, si el deudor principal no la cumple.", "fuente": "Art. 2335 CC", "seccion": "fianza", "literal": true, "alias": ["fianza mercantil"]},
      {"termino": "Prenda", "definicion": "Contrato por el cual se constituye una garantía sobre un bien mueble para la seguridad de una obligación propia o ajena, facultando al acreedor a venderlo y pagarse con preferencia. Designa también el bien prendado y el derecho real.", "fuente": "Art. 2384 CC, según las diapositivas", "seccion": "prenda", "alias": ["prenda mercantil", "prenda civil"]},
      {"termino": "Pacto comisorio", "definicion": "Pacto por el que el acreedor prendario podría apropiarse de la prenda o disponer de ella sin las formas legales; está prohibido.", "fuente": "Art. 2397 CC", "seccion": "prenda"},
      {"termino": "Prenda sin desplazamiento", "definicion": "Contrato que tiene por objeto constituir una garantía sobre una o varias cosas corporales o incorporales muebles, para caucionar obligaciones propias o de terceros, conservando el constituyente la tenencia y uso de la prenda.", "fuente": "Art. 1° Ley 20.190", "seccion": "sin-desplazamiento", "literal": true},
      {"termino": "Purga", "definicion": "En la prenda sin desplazamiento, al realizar el bien se notifica a los demás acreedores prendarios, que se pagan con el precio en su orden aunque su crédito no esté devengado.", "fuente": "Art. 37 Ley 20.190", "seccion": "sin-desplazamiento"},
      {"termino": "Almacén general de depósito", "definicion": "Establecimiento destinado a recibir o guardar mercaderías y productos conforme a la Ley 18.690, sean de propiedad del almacenista o de otra persona.", "fuente": "Art. 3° Ley 18.690", "seccion": "especiales", "alias": ["almacenes generales de deposito"]},
      {"termino": "Certificado de depósito", "definicion": "Documento que emite el almacenista y que acredita la propiedad de la mercadería depositada.", "fuente": "Ley 18.690; diapositivas", "seccion": "especiales"},
      {"termino": "Vale de prenda", "definicion": "Documento que emite el almacenista y cuyo endoso constituye la prenda sobre la mercadería depositada (warrant).", "fuente": "Ley 18.690; diapositivas", "seccion": "especiales", "alias": ["warrant", "warrants", "prenda warrants"]},
      {"termino": "Agencia de garantías", "definicion": "Contrato colectivo de mandato en virtud del cual dos o más acreedores designan un agente común que los represente en el otorgamiento y gestión de sus créditos o en la constitución, modificación o extinción de sus garantías, y para el ejercicio mancomunado de los derechos que de ellos emanan.", "fuente": "Art. 18 Ley 20.190 (art. 1°)", "seccion": "agencia", "alias": ["agencia de creditos"]},
      {"termino": "Subordinación de créditos", "definicion": "Acto o contrato en virtud del cual uno o más acreedores de la quinta clase aceptan postergar, en forma total o parcial, el pago de sus acreencias en favor de otro u otros créditos de dicha clase, presentes o futuros.", "fuente": "Art. 2489 inc. 2° CC", "seccion": "subordinacion", "literal": true, "alias": ["subordinacion", "credito subordinado"]},
      {"termino": "Subordinación general", "definicion": "Aquella en que el acreedor se posterga a favor de todos los valistas presentes y futuros; en la liquidación su crédito no se computa.", "fuente": "Apuntes de clases", "seccion": "subordinacion"},
      {"termino": "Subordinación particular", "definicion": "Aquella en que el acreedor se posterga solo a favor de uno o más acreedores determinados, cediéndoles lo necesario de su cuota.", "fuente": "Apuntes de clases", "seccion": "subordinacion"}
    ],

    secciones: [
      {
        id: 'garantias', titulo: '1. Las garantías: concepto y clases',
        html: `
<p>El art. 46 CC habla de <b>caución</b>. Las diapositivas recogen tres formas de definir la garantía:</p>
<ul>
  <li>Obligación accesoria o coordinada con la principal que crea un <b>derecho subjetivo adicional</b> al derecho de crédito que se quiere asegurar.</li>
  <li>Medios de asegurar el cumplimiento mediante un derecho o facultad que <b>se yuxtapone</b> al crédito.</li>
  <li>Creación de <b>derechos personales o reales</b> que satisfacen la necesidad de seguridad en el pago.</li>
</ul>
<div class="callout"><p><b>Finalidad:</b> son seguridades adicionales por las que el deudor o un tercero aportan bienes o patrimonios para <b>reducir el riesgo del acreedor</b> en una operación de crédito.</p></div>
<h3>¿Qué riesgos cubren?</h3>
<table class="tabla">
<tr><th></th><th>Garantías personales</th><th>Garantías reales</th></tr>
<tr><td><b>Riesgo de incumplimiento</b></td><td>Dan un <b>segundo patrimonio</b> sobre el cual cobrar.</td><td>Dan un <b>derecho de venta</b> (generalmente más simple que la ejecución común) para pagarse con el valor obtenido.</td></tr>
<tr><td><b>Riesgo de insolvencia</b></td><td>Permiten dirigirse a un patrimonio (ojalá) no insolvente, <b>desatendiéndose del concurso</b>.</td><td>Dan un <b>derecho de preferencia</b>: sustantiva (cobro preferente con el producto de la venta) y procesal (realización separada del bien en el concurso).</td></tr>
</table>
<div class="grid dos">
  <div class="card"><div class="kicker">Garantías personales</div><p>Las otorga <b>una persona distinta del deudor</b>, que compromete todo su patrimonio. <b>No dan preferencia</b> ni privilegio: son derechos de crédito con efecto relativo. Su utilidad es un segundo patrimonio.</p><p class="small">Se estudian: fianza mercantil y fianzas y avales bancarios.</p></div>
  <div class="card"><div class="kicker">Garantías reales</div><p>El deudor o un tercero <b>afecta una cosa</b> al pago. Dan <b>derecho de persecución</b> (perseguir la cosa en manos de quien esté) y <b>de preferencia</b>. La «cosa» es amplia: corporal o incorporal, presente o futura, determinada o no.</p><p class="small">Se estudian: prenda mercantil, sin desplazamiento (Ley 20.190), de valores mobiliarios (Ley 4.287), especial LMV y warrants (Ley 18.690).</p></div>
</div>`
      },
      {
        id: 'fianza', titulo: '2. Fianza mercantil y fianzas y avales bancarios',
        html: `
<div class="cita">«Una obligación accesoria en virtud de la cual una o más personas responden de una obligación ajena, comprometiéndose para con el acreedor a cumplirla en todo o parte, si el deudor principal no la cumple.»<span class="fuente">Art. 2335 CC, según la diapositiva</span></div>
<p>El Código de Comercio no dice cuándo la fianza es mercantil (no está en el art. 3°): se aplica la <b>teoría de lo accesorio</b>. Es mercantil si el contrato principal es mercantil. Se rige por el CC, salvo los <span class="norma">arts. 820 y 821 CCom</span>.</p>
<table class="tabla">
<tr><th>Característica</th><th>Fianza mercantil</th></tr>
<tr><td>Solemne</td><td>Debe otorgarse <b>por escrito</b> (art. 820). La fianza civil es consensual.</td></tr>
<tr><td>Unilateral</td><td>Solo se obliga el fiador frente al acreedor.</td></tr>
<tr><td>Gratuita</td><td>Por regla general. El <b>art. 821</b> permite pactar una <b>remuneración</b> del deudor al fiador sin desnaturalizarla (es un contrato innominado entre ellos).</td></tr>
<tr><td>Accesoria</td><td>Supone una obligación principal: si esta se extingue, se extingue la fianza.</td></tr>
<tr><td>Por qué importa que sea mercantil</td><td>Se aplica la prescripción general del CCom de <b>4 años</b> (art. 822) y la <b>costumbre mercantil</b> (arts. 4° y 5° CCom).</td></tr>
</table>
<h3>Fianzas y avales bancarios</h3>
<div class="cita">«Los bancos podrán avalar letras de cambio o pagarés y otorgar fianzas simples y solidarias, en moneda nacional, con sujeción a las normas y limitaciones que imparta la Comisión.»<span class="fuente">Art. 69 N°11 LGB, según la diapositiva</span></div>
<ul>
  <li><b>Tipicidad bancaria:</b> hasta 1959 los bancos no podían avalar ni afianzar, por considerarse peligroso para su solvencia. Hoy se permite con las normas de la CMF (<b>RAN capítulo 8-10</b>).</li>
  <li>La obligación garantizada debe ser <b>efectiva y conocida</b> (no garantías en blanco o especulativas), con <b>monto y plazo determinados</b> y riesgo calificado. Si el monto no es determinable, se fija un <b>máximo</b>.</li>
  <li>El banco debe quedar con un <b>título ejecutivo</b> para perseguir al cliente si paga.</li>
  <li>Varios bancos pueden garantizar en conjunto: <b>solidariamente</b> (cada uno por el total) o <b>proporcionalmente</b> (por convenio).</li>
  <li>Se computan como <b>créditos directos</b> para los límites del <span class="norma">art. 84 LGB</span>.</li>
</ul>`
      },
      {
        id: 'prenda', titulo: '3. Prenda mercantil (con desplazamiento)',
        html: `
<p>Según las diapositivas (art. 2384 CC), la prenda es el contrato por el cual se constituye una garantía sobre un <b>bien mueble</b> para la seguridad de una obligación propia o ajena, facultando al acreedor a <b>venderlo y pagarse con preferencia</b>.</p>
<div class="grid">
  <div class="card"><h4 style="margin-top:0">Partes</h4><p><b>Acreedor prendario</b>: tiene derechos de retención, persecución y realización preferente. <b>Constituyente</b>: el deudor o un tercero (si es tercero, el deudor no necesita comparecer).</p></div>
  <div class="card"><h4 style="margin-top:0">Triple acepción</h4><p>La palabra «prenda» designa el <b>contrato</b>, el <b>bien</b> prendado y el <b>derecho real</b> que recae sobre él.</p></div>
  <div class="card"><h4 style="margin-top:0">Fuentes</h4><p>Arts. 2384 y ss. CC (civil); arts. 813 a 819 CCom (mercantil); Ley 20.190 (sin desplazamiento).</p></div>
</div>
<h3>Características</h3>
<ol>
  <li><b>Real:</b> el privilegio nace, subsiste y se extingue con la posesión de la prenda, la tenga el acreedor o un tercero elegido por las partes (art. 817 CCom). El profesor plantea la tensión con los arts. 813 y 815.</li>
  <li><b>Accesoria.</b></li>
  <li><b>Indivisible:</b> para que se restituya el bien hay que pagar toda la deuda (art. 2405 CC).</li>
  <li><b>Preferencia especial de 2ª clase</b> (art. 2474 N°3 CC).</li>
  <li><b>Derecho de persecución.</b></li>
  <li><b>Con o sin desplazamiento</b>, según quién tenga y use el bien.</li>
</ol>
<table class="tabla">
<tr><th></th><th>Prenda civil</th><th>Prenda mercantil</th></tr>
<tr><td>Naturaleza</td><td>Real: se perfecciona con la entrega (art. 2384 CC).</td><td>Real (la doctrina lo sostiene pese al art. 813), pero para la preferencia exige las solemnidades del <b>art. 815</b>.</td></tr>
<tr><td>¿Civil o mercantil?</td><td colspan="2">Depende de la naturaleza de la <b>obligación garantizada</b>, no del art. 3° CCom.</td></tr>
<tr><td>Prueba</td><td>Limitación de la prueba de testigos (2 UTM).</td><td>Se prueba como cualquier contrato mercantil (art. 813).</td></tr>
<tr><td>Preferencia</td><td>2ª clase (art. 2474 N°3 CC).</td><td>2ª clase, pero el privilegio exige el art. 815.</td></tr>
</table>
<div class="callout yellow"><p><b>Art. 815 CCom:</b> para que el acreedor goce del privilegio frente a otros acreedores se requiere (1) que la prenda conste en <b>escritura pública o documento privado protocolizado</b>, con certificación notarial de la fecha, y (2) que el documento declare <b>la suma de la deuda y la especie y naturaleza de las cosas empeñadas</b> (o lleve una descripción anexa). Según los apuntes, no es requisito de validez: sin él la prenda existe, pero <b>sin privilegio</b>.</p></div>
<h3>¿Qué obligaciones y bienes?</h3>
<ul>
  <li><b>Obligaciones futuras:</b> se discute. Somarriva dice que no (el CC calla, a diferencia de la fianza y la hipoteca). La prenda sin desplazamiento lo permite expresamente (art. 4° Ley 20.190).</li>
  <li><b>Propias o ajenas:</b> se puede prendar por la deuda de un tercero sin ser fiador. Si además hay fianza, se responde con todo el patrimonio; si solo hay prenda, solo con el bien.</li>
  <li><b>Obligaciones naturales:</b> las prendas de terceros que las garantizan son válidas (art. 1472 CC).</li>
  <li><b>¿Varios acreedores?</b> La mayoría de la doctrina dice que no en la prenda civil o mercantil (se entrega a uno), aunque en la práctica uno puede custodiar para el otro. En la prenda sin desplazamiento sí, según el orden de inscripción.</li>
  <li><b>Bienes:</b> muebles corporales (no inembargables), propios o ajenos (art. 2390 CC); incorporales como créditos (art. 2389 CC), acciones nominativas y valores. Los derechos sociales son discutidos.</li>
</ul>
<h3>Prenda de créditos</h3>
<p>Hay tres actores: el constituyente (acreedor del crédito prendado), el deudor del crédito prendado y el acreedor prendario. El desplazamiento material se reemplaza por un <b>desplazamiento jurídico</b>: se entrega el título y se <b>notifica al deudor</b> del crédito para que solo pague al acreedor prendario. Si el crédito es en dinero, la realización es principalmente <b>extrajudicial</b> (art. 7° DL 776): el acreedor prendario cobra, imputa a su crédito y restituye el excedente. Los intereses del crédito prendado se imputan a los intereses debidos o, si no hay, a capital (art. 819 CCom).</p>
<h3>Derechos del acreedor prendario</h3>
<div class="grid cuatro">
  <div class="card"><b>Retención</b><p class="small">Hasta el pago total; cuida la cosa como buen padre de familia (art. 2394 CC).</p></div>
  <div class="card"><b>Persecución</b><p class="small">Si pierde la tenencia, puede recobrarla de cualquiera, incluso del deudor (art. 2393 CC).</p></div>
  <div class="card"><b>Realización</b><p class="small">Venta en pública subasta o adjudicación (art. 2397 CC; DL 776). <b>Prohibido el pacto comisorio.</b></p></div>
  <div class="card"><b>Pago preferente</b><p class="small">2ª clase (art. 2474 N°3 CC).</p></div>
</div>
<h3>Extinción</h3>
<p><b>Por vía accesoria:</b> se extingue la obligación principal (salvo la novación con reserva de cauciones, arts. 1642-1645 CC, y el <i>discharge</i> concursal del art. 255 Ley 20.720). <b>Por vía principal:</b> destrucción de la cosa, confusión, resolución del dominio del constituyente (salvo buena fe del acreedor), resolución judicial de la prenda o alzamiento voluntario.</p>`
      },
      {
        id: 'sin-desplazamiento', titulo: '4. Prenda sin desplazamiento (Ley 20.190)',
        html: `
<div class="flow"><div class="node">Prenda con desplazamiento<small>el deudor pierde el uso: inviable para activos productivos</small></div><div class="arrow">→</div><div class="node">Prendas especiales del siglo XX<small>agraria, industrial, etc.; muchos registros</small></div><div class="arrow">→</div><div class="node hot">Ley 20.190 (MK II, 2007)<small>deroga las anteriores; registro único en el Registro Civil</small></div></div>
<div class="cita">«El contrato de prenda sin desplazamiento tiene por objeto constituir una garantía sobre una o varias cosas corporales o incorporales muebles, para caucionar obligaciones propias o de terceros, conservando el constituyente la tenencia y uso de la prenda.»<span class="fuente">Art. 1° Ley 20.190</span></div>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Constitución y registro</h4><ul><li>Escritura pública o instrumento privado autorizado ante notario y protocolizado.</li><li>El notario envía copia al <b>Registro de Prendas sin Desplazamiento</b> (Registro Civil) dentro de <b>3 días hábiles</b> (art. 24).</li><li><b>Art. 25:</b> el derecho real se adquiere, prueba y conserva <b>por la inscripción</b>; es oponible a terceros desde entonces.</li><li>Si el bien tiene otro registro (vehículos), se requiere también anotación en él.</li><li>Supletoriamente rige el Código Civil.</li></ul></div>
  <div class="card"><h4 style="margin-top:0">Menciones</h4><ol><li>Individualización de las partes (y del deudor, si es distinto).</li><li>Obligaciones caucionadas, o que es una garantía general.</li><li>Individualización suficiente de los bienes.</li><li>Monto máximo o proporción, si corresponde.</li></ol></div>
</div>
<h3>El constituyente</h3>
<ul>
  <li>Conserva la tenencia, uso y goce, con los gastos de custodia a su cargo; responde <b>como depositario</b> (art. 18), es decir, por <b>culpa grave</b>.</li>
  <li>El deterioro o la extinción del bien hacen <b>caducar el plazo</b> de la obligación.</li>
  <li><b>Delito (art. 39 N°2):</b> si altera, oculta, sustituye, traslada o dispone del bien defraudando al acreedor, se le aplican las penas de la estafa (art. 473 CP).</li>
  <li>El acreedor tiene <b>derecho de inspección</b> (art. 20).</li>
</ul>
<h3>Obligaciones y bienes</h3>
<ul>
  <li><b>Art. 4°:</b> cualquier obligación, <b>presente o futura</b>, determinada o no, propia o ajena.</li>
  <li><b>Incorporales:</b> créditos nominativos (art. 7°), acciones y valores, incluso desmaterializados (art. 8°), concesiones administrativas (art. 6°), derechos sociales.</li>
  <li><b>Corporales:</b> todo mueble no inembargable; universalidades con subrogación (art. 11); <b>bienes futuros</b> (el derecho nace cuando el bien existe, con efecto retroactivo a la inscripción, art. 9°); inmuebles por adherencia o destinación (art. 14).</li>
  <li><b>Bienes que no han llegado al país</b> (art. 10), si el constituyente tiene el B/L o documento equivalente.</li>
</ul>
<h3>Exigibilidad anticipada</h3>
<table class="tabla">
<tr><th>Causal</th><th>Efecto</th></tr>
<tr><td>Abandono del bien (art. 18)</td><td>El tribunal puede autorizar al acreedor a tomar la tenencia, designar depositario o realizar anticipadamente.</td></tr>
<tr><td>Oposición a la inspección, reiterada tras requerimiento judicial (art. 20)</td><td>Realización inmediata.</td></tr>
<tr><td>Gastos de conservación desproporcionados (art. 21)</td><td>El constituyente puede pedir la enajenación inmediata.</td></tr>
<tr><td>Infracción de la prohibición de gravar o enajenar (art. 17)</td><td>Exigibilidad anticipada. Es una ventaja frente a la prenda civil o mercantil, donde solo hay indemnización.</td></tr>
<tr><td>Traslado o uso prohibido (art. 19)</td><td>Exigibilidad, si fue sin consentimiento del acreedor.</td></tr>
</table>
<div class="callout"><p><b>Varias prendas sobre el mismo bien (art. 16):</b> la ley lo permite y se prefieren por el <b>orden cronológico de inscripción</b>. Al realizar, se notifica a los demás acreedores prendarios, que se pagan con el precio en su orden aunque su crédito no esté devengado (<b>purga</b>, art. 37).</p></div>
<p><b>Prenda de créditos sin desplazamiento:</b> es solemne y nace con la inscripción. La notificación o aceptación del deudor del crédito <b>no es constitutiva</b>, sino de <b>oponibilidad</b>. Por regla general se realiza judicialmente; el acreedor puede pedir que el deudor del crédito consigne en la cuenta del tribunal (art. 31).</p>`
      },
      {
        id: 'especiales', titulo: '5. Prendas especiales: valores mobiliarios, LMV y warrants',
        html: `
<h3>Prenda de valores mobiliarios a favor de bancos (Ley 4.287)</h3>
<p>Los valores al portador que se entregan a un banco en garantía de operaciones presentes o futuras <b>se entienden constituidos en prenda por su sola entrega</b>, salvo que conste que se entregaron con otro objeto (art. 1°).</p>
<table class="tabla">
<tr><th>Al portador</th><th>A la orden</th><th>Nominativos</th></tr>
<tr><td>Por la mera entrega en garantía (presunción de prenda). Típico: bonos al portador.</td><td>Por <b>endoso en garantía</b> (art. 660 CCom); no requiere notificar al deudor.</td><td>Escritura pública o instrumento privado, y <b>notificación por ministro de fe</b> a la sociedad (art. 2389 CC). Típico: acciones nominativas.</td></tr>
</table>
<p><b>Ejecución (art. 6°):</b> vencida una obligación, el banco, tras una <b>simple notificación judicial</b> y <b>7 días</b>, puede vender en bolsa, sin juicio ni las reglas del DL 776 ni del art. 2397 CC, y solo en lo necesario para pagar lo vencido.</p>
<div class="callout red"><p><b>Tribunal Constitucional:</b> ha cuestionado esta ejecución por afectar el debido proceso (el deudor no puede oponer excepciones) y ha declarado inaplicables frases del art. 6°, como la de la «simple notificación judicial» y los siete días, y la de «sin más intervención de la justicia ordinaria».</p></div>
<h3>Prenda especial de la Ley de Mercado de Valores (arts. 173 y ss.)</h3>
<ul>
  <li>Garantías sobre valores de oferta pública, monedas, oro, plata u otros valores o títulos que caucionan obligaciones <b>de corredores de bolsa</b> entre sí, con las bolsas o con sus clientes, por operaciones de corretaje (art. 173). Puede extenderse a otras obligaciones directas (art. 174).</li>
  <li>Constitución según el bien: monedas, oro, plata o valores al portador, por instrumento privado ante un corredor distinto y entrega; a la orden, por endoso en garantía y entrega; nominativos, por instrumento privado, entrega y constancia firmada por el deudor (más inscripción si hay registro).</li>
  <li><b>Ejecución (art. 176):</b> el acreedor pone los bienes a disposición de una bolsa, que los subasta a más tardar el <b>segundo día hábil</b> siguiente.</li>
</ul>
<h3>Prenda warrants (Ley 18.690)</h3>
<p>Los <b>almacenes generales de depósito</b> reciben y guardan mercaderías. Al celebrar el almacenaje, el almacenista emite dos documentos:</p>
<div class="grid dos">
  <div class="card"><b>Certificado de depósito</b><p class="small">Acredita la propiedad de la mercadería.</p></div>
  <div class="card"><b>Vale de prenda</b><p class="small">Sirve para constituir la prenda: se <b>endosa</b> a una persona distinta del tenedor del certificado, indicando cesionario, capital e intereses y vencimiento. La <b>anotación</b> en el registro del almacenista da oponibilidad.</p></div>
</div>
<ul>
  <li>Las mercaderías prendadas son <b>inembargables</b> (art. 10).</li>
  <li><b>Ejecución extrajudicial:</b> vencido el crédito sin pago, se comunica al almacenista; tras <b>8 días</b> se puede pedir la subasta (art. 13); dos avisos públicos; subasta por martillero; el acreedor se paga <b>con preferencia y sin acción judicial</b> (art. 16); el excedente va al tenedor del certificado.</li>
  <li>No se suspende por concurso ni muerte del deudor (art. 14).</li>
</ul>`
      },
      {
        id: 'agencia', titulo: '6. Agencia de garantías (art. 18 Ley 20.190)',
        html: `
<p>Viene del <i>security agent</i> anglosajón y la introdujo la Ley 20.190 (MK II, 2007) para los <b>créditos sindicados</b>.</p>
<div class="cita">«La agencia de créditos o garantías es un contrato colectivo de mandato en virtud del cual dos o más acreedores acuerdan designar un agente común que los represente en el otorgamiento y gestión de sus créditos o en la constitución, modificación o extinción de sus garantías o en ambos y para el ejercicio mancomunado de los derechos que emanan de tales créditos o garantías.»<span class="fuente">Art. 1° inc. 1° del art. 18 Ley 20.190, según los apuntes</span></div>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Naturaleza y forma</h4><ul><li><b>Mandato colectivo y mercantil</b>; supletoriamente, la comisión del CCom (arts. 233 y ss.).</li><li><b>Solemne</b> (art. 4°): escritura pública o instrumento privado autorizado y protocolizado. Si es extranjero, legalización y protocolización en Chile.</li><li><b>Remunerado</b> por naturaleza (art. 3°).</li></ul></div>
  <div class="card"><h4 style="margin-top:0">Estructura triangular</h4><ul><li>Las garantías se constituyen <b>a nombre del agente</b>, por cuenta de acreedores <b>actuales y futuros</b>; no hay que individualizarlos en las inscripciones (arts. 2° y 7°). Si un banco cede su parte, no se tocan los registros.</li><li>El <b>deudor</b> debe <b>aceptarla expresamente</b>; una vez aceptada, es <b>irrevocable</b> por su sola voluntad. No es mandante.</li></ul></div>
</div>
<h3>Facultades (art. 3°)</h3>
<ul>
  <li>Las que diga el contrato; en silencio, <b>mera administración y conservación</b>.</li>
  <li>Por la naturaleza del encargo, siempre: <b>aceptar</b> garantías por cuenta de acreedores actuales y futuros, aceptar sus modificaciones o sustituciones y <b>consentir en su alzamiento</b>.</li>
  <li>Si nada se dice: <b>cobrar y percibir</b> (incluso judicialmente), otorgar carta de pago y alzar.</li>
  <li>En prenda con desplazamiento, la cosa se entrega al agente o a quien designe; las notificaciones a los acreedores se hacen al agente.</li>
</ul>
<h3>Modificación, terminación y reemplazo</h3>
<table class="tabla">
<tr><th>Tema</th><th>Regla</th></tr>
<tr><td>Revocación o modificación (art. 5°)</td><td>En los términos del contrato; en silencio, con acreedores que representen al menos <b>2/3 del saldo</b> de capital. Puede pactarse un sistema de asambleas.</td></tr>
<tr><td>Terminación</td><td>El agente rinde cuentas y, si hay créditos vigentes, transfiere las garantías a los acreedores <b>a prorrata</b>, salvo pacto.</td></tr>
<tr><td>Reemplazo del agente (art. 6°)</td><td><b>Mayoría absoluta</b> del saldo (salvo pacto); debe designarse <b>simultáneamente</b> un reemplazante. Si el agente no dio motivo, tiene derecho a indemnización, salvo pacto.</td></tr>
</table>`
      },
      {
        id: 'subordinacion', titulo: '7. Subordinación de créditos (art. 2489 CC)',
        html: `
<p>La incorporó la <b>Ley 20.190</b> (2007) al art. 2489 CC. Antes se dudaba de su validez: José Joaquín Ugarte la consideraba ilícita porque crearía una «sexta clase» de créditos. La ley la valida, pero <b>no crea una sexta clase</b>: el crédito subordinado sigue siendo <b>valista (5ª clase)</b>; lo que cambia es la regla de reparto a prorrata entre valistas.</p>
<div class="cita">«[…] acto o contrato en virtud del cual uno o más acreedores de la quinta clase aceptan postergar, en forma total o parcial, el pago de sus acreencias en favor de otro u otros créditos de dicha clase, presentes o futuros.»<span class="fuente">Art. 2489 inc. 2° CC, según los apuntes</span></div>
<p class="small">Crítica: más que un «acto o contrato», la subordinación es un <b>efecto jurídico</b> que puede venir de un negocio unilateral o bilateral.</p>
<table class="tabla">
<tr><th>Tema</th><th>Regla</th></tr>
<tr><td>Modalidades</td><td><b>Unilateral</b> (del deudor al emitir títulos, como los bonos subordinados, o declaración del acreedor): irrevocable. <b>Bilateral</b> (convenio entre acreedores): revocable de común acuerdo.</td></tr>
<tr><td>Solemnidad (inc. 4°)</td><td>El pacto y su término anticipado constan en <b>escritura pública</b> o documento privado firmado ante notario y <b>protocolizado</b>.</td></tr>
<tr><td>Alcance (inc. 5°)</td><td>Comprende <b>capital e intereses</b>, salvo pacto.</td></tr>
<tr><td>Oponibilidad al deudor (inc. 6°)</td><td>El deudor queda obligado si concurrió, aceptó por escrito o fue <b>notificado por ministro de fe</b>.</td></tr>
<tr><td>Si el deudor paga igual al subordinado (inc. 7°)</td><td>El acreedor beneficiado tiene acción de <b>indemnización</b> contra el deudor y de <b>reembolso</b> contra el subordinado.</td></tr>
<tr><td>Efectos (inc. 8°)</td><td>Es una cualidad del crédito: obliga a herederos y cesionarios. Mientras rige, se <b>suspende la prescripción</b> de la acción del subordinado.</td></tr>
</table>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Subordinación general</h4><p>El acreedor se posterga a favor de <b>todos</b> los valistas presentes y futuros: en la liquidación su crédito «no se computa» y el activo se reparte entre los demás.</p></div>
  <div class="card"><h4 style="margin-top:0">Subordinación particular</h4><p>Se posterga a favor de <b>uno o más acreedores determinados</b>: cede a ellos lo necesario de su cuota.</p></div>
</div>`
      }
    ],

    interactivos: [
      {
        id: 'subord', titulo: 'Simulador de subordinación (ejemplo de clase)', seccion: 'subordinacion',
        descripcion: 'Cinco acreedores valistas de $100 cada uno. Cambia el activo disponible y el tipo de subordinación de C5.',
        montar: function (el) {
          el.innerHTML = '<div class="fila"><div class="campo" style="min-width:260px"><label>Activo a repartir: $<b id="va">300</b></label><input type="range" id="act" min="0" max="500" step="10" value="300"></div></div>' +
            '<div class="opciones-chip" id="modo"><button data-m="sin" class="activo">Sin subordinación</button><button data-m="part">C5 se subordina a favor de C1</button><button data-m="gen">C5 se subordina a favor de todos</button></div><div id="out"></div>';
          var modo = 'sin';
          function calc() {
            var a = +el.querySelector('#act').value; el.querySelector('#va').textContent = a;
            var r = [0, 0, 0, 0, 0], cuota = Math.min(100, a / 5), expl;
            if (modo === 'sin') { r = r.map(function () { return cuota; }); expl = 'Prorrata pura entre los cinco valistas.'; }
            else if (modo === 'part') {
              r = r.map(function () { return cuota; });
              var falta = 100 - r[0], cede = Math.min(falta, r[4]); r[0] += cede; r[4] -= cede;
              expl = 'Primero se calcula la prorrata; luego C5 cede a C1 lo necesario para completar su crédito (' + fmt(cede) + '). C2, C3 y C4 no se ven afectados.';
            } else {
              var c = Math.min(100, a / 4); r = [c, c, c, c, Math.max(0, Math.min(100, a - 400))];
              expl = 'El crédito de C5 «no se computa»: el activo se reparte entre C1 a C4, y C5 solo cobra si sobra después de pagarles todo.';
            }
            el.querySelector('#out').innerHTML = r.map(function (v, i) {
              return '<div style="margin:8px 0"><div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px"><span>C' + (i + 1) + (i === 4 && modo !== 'sin' ? ' (subordinado)' : '') + '</span><span>$' + fmt(v, v % 1 ? 1 : 0) + ' de $100</span></div><div class="barra"><i style="width:' + v + '%;background:' + (i === 4 && modo !== 'sin' ? '#d79b12' : 'var(--acento)') + '"></i></div></div>';
            }).join('') + '<p class="small">' + expl + ' Con $300 el resultado de los apuntes es: sin subordinación, $60 cada uno; particular, C1 $100, C2-C4 $60 y C5 $20; general, C1-C4 $75 y C5 $0.</p>';
          }
          el.querySelectorAll('#modo button').forEach(function (b) { b.onclick = function () { modo = b.dataset.m; el.querySelectorAll('#modo button').forEach(function (x) { x.classList.toggle('activo', x === b); }); calc(); }; });
          el.querySelector('#act').oninput = calc; calc();
        }
      },
      {
        id: 'privilegio815', titulo: '¿Tiene privilegio esta prenda mercantil?', seccion: 'prenda',
        descripcion: 'Marca lo que se cumplió y revisa si el acreedor puede invocar la preferencia de 2ª clase (arts. 815 y 817 CCom).',
        montar: function (el) {
          var reqs = [
            ['ent', 'Se entregó la cosa (al acreedor o a un tercero elegido por las partes)'],
            ['doc', 'Consta en escritura pública o en documento privado protocolizado con certificación notarial de la fecha'],
            ['dec', 'El documento declara la suma de la deuda y la especie y naturaleza de las cosas (o una descripción anexa)'],
            ['pos', 'El acreedor (o el tercero) conserva la posesión de la prenda']
          ];
          el.innerHTML = reqs.map(function (r) { return '<label class="check"><input type="checkbox" data-k="' + r[0] + '" checked> ' + r[1] + '</label>'; }).join('') + '<div id="out"></div>';
          function calc() {
            var v = {}; el.querySelectorAll('input').forEach(function (i) { v[i.dataset.k] = i.checked; });
            var html;
            if (!v.ent) html = '<div class="resultado mal"><b>No hay prenda.</b> Es un contrato real: sin entrega no nace (la doctrina lo sostiene pese al art. 813).</div>';
            else if (!v.pos) html = '<div class="resultado mal"><b>Sin privilegio.</b> Art. 817: el privilegio nace, subsiste y se extingue con la posesión de la prenda.</div>';
            else if (!v.doc || !v.dec) html = '<div class="resultado mal"><b>Prenda válida, pero sin privilegio.</b> Falta ' + (!v.doc ? 'el documento con fecha cierta' : '') + (!v.doc && !v.dec ? ' y ' : '') + (!v.dec ? 'la declaración de la deuda y de las cosas' : '') + ' que exige el art. 815. Frente a otros acreedores cobra como uno más.</div>';
            else html = '<div class="resultado ok"><b>✓ Prenda con privilegio de 2ª clase</b> (art. 2474 N°3 CC). El acreedor puede retener, perseguir, pedir la realización (sin pacto comisorio) y pagarse con preferencia.</div>';
            el.querySelector('#out').innerHTML = html;
          }
          el.querySelectorAll('input').forEach(function (i) { i.onchange = calc; }); calc();
        }
      },
      {
        id: 'queprenda', titulo: '¿Qué garantía conviene?', seccion: 'especiales',
        descripcion: 'Elige la garantía que mejor calza con cada situación, según el material.',
        montar: function (el) {
          var casos = [
            ['Una fábrica quiere prendar sus máquinas, pero necesita seguir usándolas para producir.', 'Prenda sin desplazamiento (Ley 20.190)', ['Prenda sin desplazamiento (Ley 20.190)', 'Prenda mercantil con desplazamiento', 'Prenda warrants (Ley 18.690)'], 'La Ley 20.190 permite conservar la tenencia y el uso; con desplazamiento perdería las máquinas.'],
            ['Un importador tiene trigo guardado en un almacén general y quiere financiarse con él.', 'Prenda warrants (Ley 18.690)', ['Prenda warrants (Ley 18.690)', 'Prenda de valores mobiliarios (Ley 4.287)', 'Fianza mercantil'], 'El almacenista emite certificado de depósito y vale de prenda; la prenda se constituye endosando el vale.'],
            ['Un cliente entrega bonos al portador a su banco en garantía de un crédito.', 'Prenda de valores mobiliarios (Ley 4.287)', ['Prenda de valores mobiliarios (Ley 4.287)', 'Prenda especial LMV', 'Prenda sin desplazamiento (Ley 20.190)'], 'Por la sola entrega al banco se entienden constituidos en prenda (art. 1° Ley 4.287).'],
            ['Un corredor de bolsa garantiza sus obligaciones con la bolsa por operaciones de corretaje.', 'Prenda especial LMV', ['Prenda especial LMV', 'Prenda warrants (Ley 18.690)', 'Fianza mercantil'], 'Es el ámbito del art. 173 LMV; se realiza en una bolsa a más tardar el segundo día hábil.'],
            ['Cuatro bancos financian una carretera y quieren que un solo sujeto tenga las garantías a nombre de todos.', 'Agencia de garantías', ['Agencia de garantías', 'Subordinación de créditos', 'Fianza mercantil'], 'El agente es mandatario colectivo de acreedores actuales y futuros (art. 18 Ley 20.190).']
          ];
          var i = 0, ok = 0;
          function pintar() {
            if (i >= casos.length) { el.innerHTML = '<div class="resultado ok"><b>Resultado: ' + ok + ' de ' + casos.length + '.</b> <button class="btn sec" id="re">Repetir</button></div>'; el.querySelector('#re').onclick = function () { i = 0; ok = 0; pintar(); }; return; }
            var c = casos[i];
            el.innerHTML = '<p class="small">Situación ' + (i + 1) + ' de ' + casos.length + '</p><p style="font-size:18px;font-weight:700">' + c[0] + '</p><div class="opciones-chip">' +
              c[2].map(function (o, k) { return '<button data-k="' + k + '">' + o + '</button>'; }).join('') + '</div><div id="fb"></div>';
            el.querySelectorAll('[data-k]').forEach(function (b) {
              b.onclick = function () {
                var bien = c[2][+b.dataset.k] === c[1]; if (bien) ok++;
                el.querySelectorAll('[data-k]').forEach(function (x) { x.disabled = true; if (c[2][+x.dataset.k] === c[1]) x.classList.add('activo'); });
                el.querySelector('#fb').innerHTML = '<div class="resultado ' + (bien ? 'ok' : 'mal') + '"><b>' + (bien ? '✓ Correcto.' : '✗ Mejor: ' + c[1] + '.') + '</b> ' + c[3] + '<div style="margin-top:10px"><button class="btn" id="sig">Siguiente</button></div></div>';
                el.querySelector('#sig').onclick = function () { i++; pintar(); };
              };
            });
          }
          pintar();
        }
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'garantias', enunciado: '¿Qué riesgo cubre la garantía real frente a la insolvencia del deudor?', opciones: ['Da un derecho de preferencia sustantiva y procesal sobre el bien', 'Da un segundo patrimonio sobre el cual cobrar', 'Elimina el concurso', 'Transforma el crédito en uno de primera clase'], correcta: 0, explicacion: 'El segundo patrimonio es lo que da la garantía personal.' },
      { tipo: 'vf', seccion: 'garantias', enunciado: 'Las garantías personales otorgan al acreedor un derecho de preferencia.', respuesta: false, explicacion: 'No crean preferencia ni privilegio: agregan un derecho contra otro patrimonio.' },
      { tipo: 'relacionar', seccion: 'garantias', enunciado: 'Relaciona cada efecto con su tipo de garantía.', pares: [['Segundo patrimonio', 'Garantía personal'], ['Derecho de persecución', 'Garantía real'], ['Desatenderse del concurso', 'Garantía personal'], ['Realización separada del bien', 'Garantía real']], explicacion: 'La garantía real da preferencia sustantiva y procesal.' },
      { tipo: 'alternativas', seccion: 'fianza', enunciado: '¿Cuándo es mercantil una fianza?', opciones: ['Cuando el contrato principal al que accede es mercantil', 'Cuando el fiador es comerciante', 'Siempre que conste por escrito', 'Cuando la otorga un banco'], correcta: 0, explicacion: 'Teoría de lo accesorio; la fianza no está en el art. 3° CCom.' },
      { tipo: 'vf', seccion: 'fianza', enunciado: 'La fianza mercantil es consensual, igual que la civil.', respuesta: false, explicacion: 'Art. 820 CCom: debe otorgarse por escrito.' },
      { tipo: 'alternativas', seccion: 'fianza', enunciado: 'Si el deudor paga una remuneración al fiador mercantil, ¿qué ocurre?', opciones: ['Es válido (art. 821) y no desnaturaliza la fianza', 'La fianza se transforma en seguro', 'La fianza es nula', 'El fiador pasa a ser codeudor solidario'], correcta: 0, explicacion: 'Genera un contrato innominado entre deudor y fiador.' },
      { tipo: 'alternativas', seccion: 'fianza', enunciado: '¿Cómo se computan las fianzas y avales bancarios para los límites del art. 84 LGB?', opciones: ['Como si fueran créditos directos', 'No se computan', 'Por la mitad de su monto', 'Solo si son solidarios'], correcta: 0, explicacion: 'Según las diapositivas.' },
      { tipo: 'vf', seccion: 'fianza', enunciado: 'Dos bancos pueden afianzar conjuntamente una obligación respondiendo cada uno solo por una proporción.', respuesta: true, explicacion: 'Puede ser solidaria o proporcional mediante convenio.' },
      { tipo: 'alternativas', seccion: 'prenda', enunciado: '¿Qué exige el art. 815 CCom para que el acreedor prendario goce de privilegio?', opciones: ['Escritura pública o documento privado protocolizado con fecha, que declare la deuda y las cosas empeñadas', 'Inscripción en el Registro Civil', 'Notificación por ministro de fe al deudor', 'Que el acreedor sea un banco'], correcta: 0, explicacion: 'Según los apuntes, sin esto la prenda es válida pero sin privilegio.' },
      { tipo: 'vf', seccion: 'prenda', enunciado: 'La prenda civil o mercantil da una preferencia de segunda clase.', respuesta: true, explicacion: 'Art. 2474 N°3 CC.' },
      { tipo: 'alternativas', seccion: 'prenda', enunciado: '¿Qué es el pacto comisorio?', opciones: ['El pacto que permite al acreedor apropiarse de la prenda o disponer de ella sin las formas legales; está prohibido', 'La comisión que cobra el agente de garantías', 'El pacto de remuneración del fiador', 'La cláusula de aceleración'], correcta: 0, explicacion: 'La prenda se realiza en pública subasta o con adjudicación según el art. 2397 CC y el DL 776.' },
      { tipo: 'vf', seccion: 'prenda', enunciado: 'La prenda es indivisible: para que se restituya el bien debe pagarse toda la deuda.', respuesta: true, explicacion: 'Art. 2405 CC.' },
      { tipo: 'alternativas', seccion: 'prenda', enunciado: 'En la prenda de créditos ordinaria, ¿qué reemplaza la entrega material?', opciones: ['La entrega del título y la notificación al deudor del crédito prendado', 'La inscripción en el Conservador', 'El endoso en blanco', 'La aceptación del acreedor prendario'], correcta: 0, explicacion: 'Es un desplazamiento jurídico: el deudor solo puede pagar al acreedor prendario.' },
      { tipo: 'alternativas', seccion: 'prenda', enunciado: '¿Puede constituirse prenda civil o mercantil para garantizar obligaciones futuras?', opciones: ['Se discute: Somarriva sostiene que no; en la prenda sin desplazamiento sí se permite', 'Sí, el art. 2384 CC lo permite expresamente', 'No, y tampoco en la prenda sin desplazamiento', 'Solo si las garantiza un banco'], correcta: 0, explicacion: 'Art. 4° Ley 20.190.' },
      { tipo: 'relacionar', seccion: 'prenda', enunciado: 'Relaciona cada derecho del acreedor prendario con su regla.', pares: [['Retención', 'Hasta el pago total; cuida como buen padre de familia'], ['Persecución', 'Recobrar la cosa de cualquiera (art. 2393 CC)'], ['Realización', 'Pública subasta o adjudicación (art. 2397 CC)'], ['Pago preferente', 'Segunda clase (art. 2474 N°3 CC)']], explicacion: 'Más la prohibición del pacto comisorio.' },
      { tipo: 'vf', seccion: 'prenda', enunciado: 'La novación siempre extingue la prenda, sin excepción.', respuesta: false, explicacion: 'Extingue las cauciones salvo reserva expresa (arts. 1642-1645 CC).' },
      { tipo: 'alternativas', seccion: 'sin-desplazamiento', enunciado: 'En la prenda sin desplazamiento, ¿cuándo se adquiere el derecho real de prenda?', opciones: ['Con la inscripción en el Registro de Prendas sin Desplazamiento', 'Con la firma de la escritura', 'Con la entrega del bien', 'Con la notificación al deudor'], correcta: 0, explicacion: 'Art. 25 Ley 20.190: se adquiere, prueba y conserva por la inscripción.' },
      { tipo: 'vf', seccion: 'sin-desplazamiento', enunciado: 'Sobre un mismo bien pueden constituirse varias prendas sin desplazamiento, que se prefieren por orden de inscripción.', respuesta: true, explicacion: 'Art. 16 Ley 20.190.' },
      { tipo: 'alternativas', seccion: 'sin-desplazamiento', enunciado: 'El constituyente de una prenda sin desplazamiento responde de la cosa como…', opciones: ['Depositario (culpa grave)', 'Comodatario (culpa levísima)', 'Mandatario (culpa leve)', 'No responde'], correcta: 0, explicacion: 'Art. 18 Ley 20.190.' },
      { tipo: 'alternativas', seccion: 'sin-desplazamiento', enunciado: '¿Qué pasa si el constituyente vende el bien infringiendo la prohibición de enajenar?', opciones: ['Hay exigibilidad anticipada (art. 17), además de responsabilidad penal si defrauda', 'Solo debe una indemnización', 'La prenda se extingue', 'Nada, porque conserva la tenencia'], correcta: 0, explicacion: 'Es una ventaja frente a la prenda civil o mercantil. El art. 39 N°2 sanciona con las penas de la estafa.' },
      { tipo: 'vf', seccion: 'sin-desplazamiento', enunciado: 'En la prenda de créditos sin desplazamiento, la notificación al deudor del crédito es requisito para que nazca la prenda.', respuesta: false, explicacion: 'Es una formalidad de oponibilidad; el derecho nace con la inscripción.' },
      { tipo: 'alternativas', seccion: 'sin-desplazamiento', enunciado: '¿Qué ley unificó las prendas sin desplazamiento y creó un registro único?', opciones: ['La Ley 20.190 (Mercado de Capitales II, 2007)', 'La Ley 18.690', 'La Ley 4.287', 'La Ley 21.314'], correcta: 0, explicacion: 'El registro lo lleva el Registro Civil.' },
      { tipo: 'alternativas', seccion: 'especiales', enunciado: 'Según la Ley 4.287, ¿cómo se constituye prenda sobre valores al portador a favor de un banco?', opciones: ['Por su sola entrega en garantía', 'Por escritura pública inscrita', 'Por endoso en garantía', 'Por notificación a la sociedad emisora'], correcta: 0, explicacion: 'Se presume prenda, salvo que conste otro objeto de la entrega.' },
      { tipo: 'vf', seccion: 'especiales', enunciado: 'El Tribunal Constitucional ha declarado inaplicables frases del art. 6° de la Ley 4.287 por afectar el debido proceso.', respuesta: true, explicacion: 'Porque el deudor no podía oponer excepciones antes de la venta.' },
      { tipo: 'relacionar', seccion: 'especiales', enunciado: 'Relaciona cada prenda especial con su rasgo.', pares: [['Ley 4.287', 'Venta en bolsa tras notificación y 7 días'], ['Prenda especial LMV', 'Subasta en bolsa al segundo día hábil'], ['Warrants (Ley 18.690)', 'Endoso del vale de prenda'], ['Ley 20.190', 'Registro único en el Registro Civil']], explicacion: 'Todas buscan una realización más rápida que la ejecución común.' },
      { tipo: 'alternativas', seccion: 'especiales', enunciado: 'En la prenda warrants, ¿qué documento acredita la propiedad de la mercadería?', opciones: ['El certificado de depósito', 'El vale de prenda', 'El conocimiento de embarque', 'La factura'], correcta: 0, explicacion: 'El vale de prenda sirve para constituir la prenda.' },
      { tipo: 'vf', seccion: 'especiales', enunciado: 'Las mercaderías depositadas en un almacén general y dadas en prenda pueden ser embargadas por otros acreedores.', respuesta: false, explicacion: 'Art. 10 Ley 18.690: son inembargables.' },
      { tipo: 'alternativas', seccion: 'agencia', enunciado: '¿Cuál es la naturaleza jurídica de la agencia de garantías?', opciones: ['Un mandato colectivo y mercantil', 'Una fianza solidaria', 'Un fideicomiso', 'Una sociedad de hecho entre bancos'], correcta: 0, explicacion: 'Supletoriamente se aplican las reglas de la comisión del CCom.' },
      { tipo: 'vf', seccion: 'agencia', enunciado: 'Si un banco del sindicato cede su crédito, hay que modificar las inscripciones de las garantías.', respuesta: false, explicacion: 'Las garantías están a nombre del agente, por cuenta de acreedores actuales y futuros.' },
      { tipo: 'alternativas', seccion: 'agencia', enunciado: 'Si el contrato nada dice, ¿qué quórum se necesita para revocar o modificar la agencia?', opciones: ['Acreedores que representen 2/3 del saldo de capital', 'Mayoría absoluta del saldo', 'Unanimidad', 'Solo el deudor'], correcta: 0, explicacion: 'Para reemplazar al agente basta la mayoría absoluta (art. 6°).' },
      { tipo: 'vf', seccion: 'agencia', enunciado: 'Una vez que el deudor acepta expresamente la agencia, no puede revocarla por su sola voluntad.', respuesta: true, explicacion: 'Art. 1° inc. 2°.' },
      { tipo: 'alternativas', seccion: 'subordinacion', enunciado: '¿En qué clase de créditos queda el crédito subordinado?', opciones: ['Sigue siendo valista (5ª clase); solo se altera la prorrata', 'En una nueva sexta clase', 'En la cuarta clase', 'Se extingue'], correcta: 0, explicacion: 'La ley no creó una sexta clase.' },
      { tipo: 'alternativas', seccion: 'subordinacion', enunciado: 'Activo $300; cinco valistas de $100; C5 se subordina a favor de C1. ¿Cuánto recibe C5?', opciones: ['$20', '$0', '$60', '$75'], correcta: 0, explicacion: 'Cada uno recibe $60 en teoría; C5 cede $40 a C1 para completar sus $100.' },
      { tipo: 'alternativas', seccion: 'subordinacion', enunciado: 'Con los mismos datos, si C5 se subordina a favor de todos, ¿cuánto recibe C1?', opciones: ['$75', '$60', '$100', '$80'], correcta: 0, explicacion: 'El crédito de C5 no se computa: $300 entre cuatro.' },
      { tipo: 'vf', seccion: 'subordinacion', enunciado: 'Mientras rige la subordinación, se suspende la prescripción de la acción del acreedor subordinado.', respuesta: true, explicacion: 'Art. 2489 inc. 8° CC.' },
      { tipo: 'alternativas', seccion: 'subordinacion', enunciado: 'Si el deudor notificado paga al acreedor subordinado infringiendo el pacto, el acreedor beneficiado tiene…', opciones: ['Acción de indemnización contra el deudor y de reembolso contra el subordinado', 'Solo acción de nulidad del pago', 'Acción penal por estafa', 'Ninguna acción'], correcta: 0, explicacion: 'Art. 2489 inc. 7° CC.' },
      { tipo: 'vf', seccion: 'subordinacion', enunciado: 'El pacto de subordinación es consensual.', respuesta: false, explicacion: 'Debe constar en escritura pública o documento privado firmado ante notario y protocolizado (art. 2489 inc. 4°).' },

      { tipo: 'oral', seccion: 'garantias', enunciado: '¿Qué son las garantías y en qué se diferencian las personales de las reales?', puntos: ['Caución (art. 46 CC): derecho adicional que se yuxtapone al crédito; finalidad: reducir el riesgo del acreedor.', 'Riesgo de incumplimiento: la personal da un segundo patrimonio; la real, un derecho de venta.', 'Riesgo de insolvencia: la personal permite desatenderse del concurso; la real da preferencia sustantiva y procesal.', 'Personales: tercero compromete su patrimonio, sin preferencia (fianza mercantil y bancaria).', 'Reales: afectan una cosa; persecución y preferencia; cosa en sentido amplio (prendas).'], norma: 'Art. 46 CC' },
      { tipo: 'oral', seccion: 'fianza', enunciado: 'Explique la fianza mercantil y las fianzas y avales bancarios.', puntos: ['Art. 2335 CC; mercantil por la teoría de lo accesorio.', 'Solemne por escrito (art. 820), unilateral, gratuita salvo remuneración (art. 821), accesoria.', 'Importa que sea mercantil: prescripción de 4 años (art. 822) y costumbre mercantil.', 'Bancarias: art. 69 N°11 LGB y RAN 8-10; obligación efectiva, con monto y plazo, riesgo calificado, monto máximo, título ejecutivo.', 'Garantía conjunta solidaria o proporcional; se computan como créditos directos para el art. 84.'], norma: 'Arts. 2335 CC; 820-822 CCom; 69 N°11 LGB' },
      { tipo: 'oral', seccion: 'prenda', enunciado: 'Explique la prenda mercantil: características, diferencias con la civil y derechos del acreedor.', puntos: ['Concepto (art. 2384 CC) y triple acepción.', 'Real, accesoria, indivisible (art. 2405), 2ª clase (art. 2474 N°3), persecución.', 'Civil o mercantil según la obligación garantizada.', 'Art. 813 (prueba mercantil); art. 815 (documento con fecha y declaración de deuda y cosas, para el privilegio); art. 817 (privilegio ligado a la posesión).', 'Derechos: retención, persecución, realización (sin pacto comisorio), pago preferente.', 'Prenda de créditos: entrega del título y notificación; realización extrajudicial (art. 7° DL 776).'], norma: 'Arts. 2384 y ss. CC; 813-819 CCom' },
      { tipo: 'oral', seccion: 'sin-desplazamiento', enunciado: 'Explique la prenda sin desplazamiento de la Ley 20.190.', puntos: ['Origen: el desplazamiento impide usar activos productivos; el sistema de prendas especiales colapsó; MK II (2007) unificó.', 'Art. 1°: muebles corporales o incorporales, obligaciones propias o ajenas, el constituyente conserva tenencia y uso.', 'Solemne; registro único; el derecho real nace con la inscripción (art. 25).', 'Obligaciones presentes o futuras (art. 4°); bienes futuros, universalidades, bienes en tránsito.', 'Constituyente como depositario; delito del art. 39 N°2; inspección.', 'Exigibilidad anticipada (arts. 17-21); varias prendas por orden de inscripción (art. 16) y purga (art. 37).'], norma: 'Ley 20.190' },
      { tipo: 'oral', seccion: 'especiales', enunciado: 'Compare la prenda de valores mobiliarios a favor de bancos, la prenda especial de la LMV y la prenda warrants.', puntos: ['Ley 4.287: valores al portador entregados al banco se presumen en prenda; a la orden por endoso; nominativos con notificación. Ejecución con notificación y 7 días, venta en bolsa; cuestionada por el TC.', 'LMV (art. 173): obligaciones de corredores con bolsas y clientes; ejecución en bolsa al segundo día hábil (art. 176).', 'Warrants (Ley 18.690): almacén general emite certificado de depósito y vale de prenda; prenda por endoso del vale y anotación; mercadería inembargable; subasta extrajudicial con preferencia (art. 16).'], norma: 'Ley 4.287; arts. 173-176 LMV; Ley 18.690' },
      { tipo: 'oral', seccion: 'agencia', enunciado: '¿Qué es la agencia de garantías y para qué sirve?', puntos: ['Origen: security agent; Ley 20.190; créditos sindicados.', 'Mandato colectivo y mercantil para constituir, modificar o extinguir garantías y ejercer los derechos en forma mancomunada.', 'Solemne y remunerada; el deudor la acepta expresamente y luego es irrevocable para él.', 'Garantías a nombre del agente por acreedores actuales y futuros: las cesiones no tocan los registros.', 'Facultades: las del contrato; en silencio, administración; siempre aceptar, modificar y alzar; supletoriamente cobrar.', 'Revocación con 2/3; reemplazo con mayoría absoluta y designación simultánea.'], norma: 'Art. 18 Ley 20.190' },
      { tipo: 'oral', seccion: 'subordinacion', enunciado: 'Explique la subordinación de créditos y dé un ejemplo de su efecto.', puntos: ['Art. 2489 CC (Ley 20.190): acreedores de 5ª clase postergan su pago a favor de otros de esa clase.', 'No crea una sexta clase (crítica de Ugarte superada).', 'Unilateral (irrevocable) o bilateral (revocable); escritura pública o documento protocolizado; capital e intereses.', 'Oponible al deudor si concurrió, aceptó o fue notificado; si paga igual, indemnización y reembolso.', 'Obliga a herederos y cesionarios; suspende la prescripción.', 'Ejemplo: $300 y cinco acreedores de $100: $60 cada uno; particular C1 $100 y C5 $20; general $75 y C5 $0.'], norma: 'Art. 2489 CC' }
    ]
  });
})();
