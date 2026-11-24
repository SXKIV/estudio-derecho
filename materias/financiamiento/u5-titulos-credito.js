/* Unidad 5 — Teoría de los títulos de crédito (clases 1 a 3 del Prof. Gaspar).
   Fuentes: apuntes de clases del Prof. Gaspar (lectura de apoyo: Sandoval, tomo II, pp. 17-64 y 285-296).
   Secciones 6 a 8: Sandoval, Derecho Comercial, tomo II (5ª ed., 2005), cap. I. */
(function () {
  Estudio.registrarUnidad({
    id: 'u5', numero: 5, bloque: 'Prof. Gaspar', profesor: 'Gaspar',
    titulo: 'Teoría de los títulos de crédito',
    resumen: 'Por qué la cesión de créditos civil no sirve al comercio, cómo los títulos de crédito «incorporan» el derecho a un documento para que circule como una cosa mueble, sus características (necesariedad, literalidad, autonomía, abstracción, legitimación) y sus clasificaciones. Con Sandoval: nociones amplia y restringida, aspecto jurídico-real, efectos de comercio, títulos representativos de mercaderías y títulos electrónicos.',
    lecturas: 'Apuntes de clases del Prof. Gaspar (clases 1 a 3 del cronograma). Lectura de apoyo: Sandoval, Derecho Comercial, tomo II, pp. 17-64 y 285-296. Normas: arts. 699, 1901 y ss. CC; arts. 161 y ss., 620 CCom; Ley 18.092. Secciones 6 a 8: Sandoval, tomo II, cap. I (§§ 2-4, 19-22, 31-32 y 42-57); arts. 173-178, 977 y ss. CCom; Leyes 18.690 y 18.876.',

    /* ---------------- Glosario (definiciones del material) ---------------- */
    glosario: [
      { termino: 'Cesión de créditos', definicion: 'Forma de efectuar la tradición de los derechos personales: se verifica por la entrega del título del cedente al cesionario y solo produce efectos contra el deudor y terceros desde que se notifica o acepta.', fuente: 'Arts. 699, 1901 y 1902 CC', seccion: 'cesion', alias: ['cesion de credito', 'cesion'] },
      { termino: 'Título de crédito', definicion: 'Documento que lleva incorporado un derecho literal y autónomo que puede ser ejercido por el portador legítimo contra el deudor a la fecha de su vencimiento.', fuente: 'Apuntes de clases (Gaspar)', seccion: 'nocion', alias: ['titulo valor', 'titulos valores', 'titulos de credito', 'titulo-valor'] },
      { termino: 'Contrato de cambio', definicion: 'Convención por la cual una de las partes se obliga, mediante un valor prometido o entregado, a pagar o hacer pagar a la otra parte o a su cesionario legal cierta cantidad de dinero en un lugar distinto de aquel en que se celebra la convención.', fuente: 'Art. 620 CCom', seccion: 'anhelo', literal: true },
      { termino: 'Incorporación', definicion: 'Fusión del derecho con el documento: el papel no es mera constancia, sino el cuerpo mismo del derecho. No hay derecho sin el papel; si se destruye o pierde, hay que recurrir al procedimiento de extravío.', fuente: 'Apuntes de clases', seccion: 'nocion' },
      { termino: 'Literalidad', definicion: 'El tenor del documento determina la medida, extensión y modalidades del derecho: nadie puede exigir más de lo escrito ni defenderse con menos, y toda modificación debe constar en el mismo título.', fuente: 'Apuntes de clases', seccion: 'caracteristicas', alias: ['literal'] },
      { termino: 'Autonomía', definicion: 'La circulación del título no transmite al nuevo adquirente de buena fe los vicios de la creación ni de las transferencias anteriores: su derecho es originario, nuevo y propio.', fuente: 'Apuntes de clases', seccion: 'caracteristicas', alias: ['autonomia cambiaria'] },
      { termino: 'Abstracción', definicion: 'Desvinculación entre el título y el negocio causal que le dio origen: frente a terceros de buena fe, la existencia, nulidad o vicios de ese negocio son irrelevantes para el cobro.', fuente: 'Apuntes de clases (Sandoval)', seccion: 'caracteristicas', alias: ['abstraccion'] },
      { termino: 'Necesariedad', definicion: 'El documento es indispensable para ejercer y disponer del derecho: no se suple con otros medios de prueba y el deudor puede exigir su presentación para pagar.', fuente: 'Apuntes de clases', seccion: 'caracteristicas' },
      { termino: 'Legitimación', definicion: 'Activa: capacidad del portador legítimo (el que posee el título y cumple sus formas de circulación) para cobrar. Pasiva: el deudor se libera pagando de buena fe a quien se presenta como portador legítimo.', fuente: 'Apuntes de clases', seccion: 'nocion', alias: ['legitimacion activa', 'legitimacion pasiva', 'portador legitimo'] },
      { termino: 'Causa-fuente', definicion: 'La declaración unilateral de voluntad del obligado, manifestada por su firma en el documento. Es de la esencia del título y nunca puede faltar.', fuente: 'Apuntes de clases', seccion: 'caracteristicas', alias: ['causa fuente'] },
      { termino: 'Causa-fin', definicion: 'El negocio subyacente que motivó la emisión del título. En los títulos abstractos se presume y es irrelevante para el cobro frente a terceros de buena fe.', fuente: 'Apuntes de clases', seccion: 'caracteristicas', alias: ['causa fin', 'negocio subyacente', 'relacion fundamental'] },
      { termino: 'Independencia de las firmas', definicion: 'La incapacidad de un firmante, las firmas falsas o de personas imaginarias no invalidan las obligaciones de los demás suscriptores: cada firma genera una obligación independiente.', fuente: 'Art. 7° Ley 18.092', seccion: 'caracteristicas' },
      { termino: 'Inoponibilidad de excepciones personales', definicion: 'El deudor demandado no puede oponer al portador las excepciones fundadas en sus relaciones personales con portadores anteriores; solo las que tenga contra el propio demandante o las que surgen del texto del documento.', fuente: 'Art. 28 Ley 18.092', seccion: 'caracteristicas', alias: ['inoponibilidad de excepciones'] },
      { termino: 'Acción cambiaria', definicion: 'La que emana directamente del título de crédito, con la rapidez y fuerza ejecutiva del rigor cambiario.', fuente: 'Apuntes de clases', seccion: 'caracteristicas' },
      { termino: 'Acción causal', definicion: 'La que emana del negocio subyacente de derecho común. Subsiste aunque la acción cambiaria se extinga, porque el título no nova la relación de origen.', fuente: 'Art. 12 Ley 18.092; apuntes', seccion: 'caracteristicas', alias: ['accion extracambiaria'] },
      { termino: 'Título abstracto', definicion: 'Título que no menciona la relación fundamental, o cuya mención carece de efectos frente a terceros de buena fe; está sujeto a formalidades estrictas. Ejemplos: letra de cambio, pagaré, cheque.', fuente: 'Apuntes de clases (Sandoval)', seccion: 'clasificaciones', alias: ['titulos abstractos'] },
      { termino: 'Título causado', definicion: 'Título que menciona la relación fundamental, que queda unida a él y complementa el alcance del derecho. Ejemplos: acciones, títulos representativos de mercaderías, facturas.', fuente: 'Apuntes de clases (Sandoval)', seccion: 'clasificaciones', alias: ['titulos causados', 'titulo indiscreto'] },
      { termino: 'Título completo', definicion: 'Aquel cuyo contenido y alcance constan íntegramente en el documento, sin necesidad de consultar registros u otros elementos externos. Ejemplo por antonomasia: el pagaré.', fuente: 'Apuntes de clases', seccion: 'clasificaciones', alias: ['titulos completos'] },
      { termino: 'Título incompleto', definicion: 'Aquel en que el documento es necesario pero no suficiente: debe complementarse con un registro, contrato o elemento externo. Ejemplo: la acción de una sociedad anónima.', fuente: 'Apuntes de clases', seccion: 'clasificaciones', alias: ['titulos incompletos'] },
      { termino: 'Título de pago', definicion: 'Aquel que obliga a pagar una suma de dinero determinada o determinable. Ejemplos: letra de cambio, pagaré, cheque, factura.', fuente: 'Apuntes de clases', seccion: 'clasificaciones', alias: ['titulos de pago', 'efectos de comercio'] },
      { termino: 'Título representativo de mercaderías', definicion: 'Aquel que incorpora el derecho de disposición sobre mercaderías en tránsito o guardadas: tener el título equivale a poseerlas. Ejemplos: carta de porte, conocimiento de embarque, warrants.', fuente: 'Apuntes de clases; art. 149 CCom', seccion: 'clasificaciones', alias: ['titulo de mercaderia', 'titulos de mercaderia', 'titulo de tradicion'] },
      { termino: 'Título de participación social', definicion: 'Aquel que incorpora un conjunto de derechos patrimoniales y corporativos propios de la calidad de socio o acreedor de un emisor (acciones, cuotas de fondos, bonos). Sandoval los agrupa como valores mobiliarios.', fuente: 'Apuntes de clases (Sandoval)', seccion: 'clasificaciones', alias: ['titulos de participacion', 'valores mobiliarios'] },
      { termino: 'Título al portador', definicion: 'El que no menciona beneficiario o lleva la cláusula «al portador»; se transfiere por la simple entrega y legitima a quien lo posee y presenta.', fuente: 'Apuntes de clases', seccion: 'clasificaciones', alias: ['titulos al portador', 'al portador'] },
      { termino: 'Título a la orden', definicion: 'El expedido a favor de una persona determinada que puede transmitirlo por endoso, sin intervención ni notificación del deudor.', fuente: 'Apuntes de clases', seccion: 'clasificaciones', alias: ['titulos a la orden', 'a la orden'] },
      { termino: 'Título nominativo', definicion: 'El girado a favor de una persona determinada, cuya emisión y transferencias deben inscribirse en un registro del emisor (transfert).', fuente: 'Apuntes de clases', seccion: 'clasificaciones', alias: ['titulos nominativos', 'nominativo'] },
      { termino: 'Endoso', definicion: 'Declaración escrita al dorso del documento, firmada por el portador legítimo, para transferir su dominio, entregarlo en cobro o constituir prenda. Salvo pacto, tiene efecto traslaticio, legitimante y vinculatorio (el endosante responde solidariamente).', fuente: 'Apuntes de clases', seccion: 'clasificaciones', alias: ['endosos', 'endosar'] },
      { termino: 'Transfert', definicion: 'Inscripción de la transferencia de un título nominativo en el registro de la entidad emisora.', fuente: 'Apuntes de clases', seccion: 'clasificaciones' },
      { termino: 'Equivalencia funcional', definicion: 'Principio de la Ley 19.779 que equipara el soporte de papel al electrónico y la firma manuscrita a la electrónica, permitiendo títulos electrónicos.', fuente: 'Ley 19.779; apuntes', seccion: 'clasificaciones' },
      { termino: 'Títulos impropios', definicion: 'Documentos probatorios sin función circulatoria ni los caracteres esenciales del título-valor: comprobantes de legitimación (pasajes, entradas) y documentos de legitimación en sentido estricto (contraseñas de guardarropía).', fuente: 'Apuntes de clases (Sandoval)', seccion: 'clasificaciones', alias: ['titulos valores impropios', 'documentos de legitimacion'] },
      { termino: 'Delegación', definicion: 'Mecanismo por el que un deudor (delegante) es reemplazado o acompañado por otro (delegado) frente al acreedor (delegatario). Es perfecta si el acreedor libera al deudor primitivo (novación) e imperfecta si no lo libera (en el fondo, cesión de deuda).', fuente: 'Sandoval, tomo II, § 3', seccion: 'sandoval-nocion', alias: ['delegacion perfecta', 'delegacion imperfecta'] },
      { termino: 'Derecho documental', definicion: 'Nombre que da Sandoval al derecho incorporado en el título: va ligado al documento y corre su suerte, de modo que si este se pierde o destruye el derecho desaparece, salvo las medidas legales (extravío).', fuente: 'Sandoval, tomo II, § 4', seccion: 'sandoval-nocion' },
      { termino: 'Derecho sobre el título', definicion: 'Relación real sobre el documento como cosa mueble (compra, prenda, usufructo, embargo), regida por el derecho común; se distingue del derecho del título, que es la relación obligacional incorporada y se rige por el derecho comercial.', fuente: 'Sandoval, tomo II, §§ 19-22', seccion: 'sandoval-nocion', alias: ['aspecto juridico real', 'derecho del titulo', 'res nova'] },
      { termino: 'Efecto de comercio cambiario', definicion: 'Según Sandoval, título negociable que indica un valor en moneda, representa un crédito en dinero pagadero a corto plazo y cumple entre comerciantes un rol análogo a la moneda. En Chile: letra de cambio, pagaré, cheque y carta orden de crédito.', fuente: 'Sandoval, tomo II, §§ 31-32', seccion: 'sandoval-nocion' },
      { termino: 'Carta de porte', definicion: 'El documento que las partes otorgan para acreditar la existencia y condiciones del contrato, y la entrega de las mercaderías al porteador.', fuente: 'Art. 173 CCom', seccion: 'mercaderias', literal: true, alias: ['carta guia'] },
      { termino: 'Conocimiento de embarque', definicion: 'Documento que prueba la existencia de un contrato de transporte marítimo, y acredita que el transportador ha tomado a su cargo o ha cargado las mercancías y se ha obligado a entregarlas contra la presentación de ese documento a una persona determinada, a su orden o al portador.', fuente: 'Art. 977 CCom', seccion: 'mercaderias', literal: true, alias: ['bill of lading', 'bl'] },
      { termino: 'Seawaybill', definicion: 'Carta de porte marítima no negociable: la carga se entrega a quien designa el contrato y su transferencia se rige por la cesión de créditos. No es título de crédito porque carece de función dispositiva.', fuente: 'Sandoval, tomo II, § 49', seccion: 'mercaderias', alias: ['sea waybill', 'carta de porte maritima'] },
      { termino: 'Anotación en cuenta', definicion: 'Registro electrónico o contable que reemplaza al documento de papel: es constitutivo del derecho y su transferencia contable produce los efectos de la entrega del título.', fuente: 'Sandoval, tomo II, § 54', seccion: 'electronicos', alias: ['anotaciones en cuenta', 'representacion tabular', 'titulos desmaterializados'] },
      { termino: 'Truncamiento', definicion: 'Técnica por la que un título emitido en papel (cheque, letra, pagaré) se inmoviliza y circula o se cobra mediante su imagen o datos transmitidos electrónicamente.', fuente: 'Sandoval, tomo II, § 54', seccion: 'electronicos', alias: ['truncamiento de cheques'] }
    ],

    secciones: [
      {
        id: 'cesion', titulo: '1. El problema: la cesión de créditos civil',
        html: `
<p>Desde el deudor hablamos de obligación; desde el acreedor, de <b>crédito</b>. El crédito es una <b>cosa incorporal</b> (un derecho personal), apropiable y avaluable en dinero: un activo. Como es un bien, se puede <b>transferir</b> o dar en garantía. Eso es clave para el comercio: si un comerciante tiene un crédito a plazo y necesita dinero hoy, puede vendérselo a un tercero (por ejemplo, un factoring).</p>
<p>En el derecho común se transfiere con <b>título y modo</b>: el título es normalmente una compraventa; el modo, la <b>tradición</b>, que para los derechos personales se hace por la <b>entrega del título</b> del cedente al cesionario (<span class="norma">art. 699 CC</span>), con las reglas de la cesión de derechos (<span class="norma">arts. 1901 y ss. CC</span>). El Código de Comercio agrega reglas para la cesión de créditos mercantiles (<span class="norma">arts. 161 y ss. CCom</span>).</p>
<p>El comercio necesita <b>rapidez</b> y <b>eficacia</b> («time is money»). La cesión civil falla por tres problemas:</p>
<div class="grid">
  <div class="card"><div class="kicker">Problema 1</div><h4 style="margin-top:0">Responsabilidad del cedente</h4><p><span class="norma">Art. 1907 CC</span>: en la cesión onerosa el cedente responde de la <b>existencia</b> del crédito, no de la <b>solvencia</b> del deudor salvo pacto; si la pacta, solo de la solvencia <b>presente</b>; y solo hasta el <b>precio recibido</b>. Ejemplo: la lechería vende en $500.000 un crédito de $1.000.000 contra la cafetería; si esta no paga, el factoring solo recupera $500.000.</p></div>
  <div class="card"><div class="kicker">Problema 2</div><h4 style="margin-top:0">El rol del deudor</h4><p><span class="norma">Art. 1902 CC</span>: la cesión no produce efectos contra el deudor ni terceros mientras no se <b>notifique</b> o el deudor la <b>acepte</b>. Si acepta sin reserva, pierde la <b>compensación</b> que tenía contra el cedente (<span class="norma">art. 1659 CC</span>); si solo se le notifica, la conserva. Notificar cuesta: en lo civil, gestión judicial (art. 47 CPC); en lo mercantil, ministro de fe (<span class="norma">art. 162 CCom</span>).</p></div>
  <div class="card"><div class="kicker">Problema 3</div><h4 style="margin-top:0">Arrastre de vicios</h4><p>El cesionario adquiere el crédito <b>con todas sus calidades y vicios</b>: nulidad, error, fuerza, dolo u objeto ilícito del contrato de origen. Para protegerse debe hacer un <b>estudio de títulos</b> (due diligence), que cuesta tiempo y dinero. No se arregla con una cláusula.</p></div>
</div>
<div class="callout yellow"><p><b>Conclusión:</b> los costos de transacción (negociar la responsabilidad, notificar y estudiar títulos) impiden que los créditos circulen con la certeza y rapidez que el mercado exige.</p></div>`
      },
      {
        id: 'anhelo', titulo: '2. La solución mercantil y su origen histórico',
        html: `
<p>El derecho mercantil quiere tres cosas que la cesión civil traba:</p>
<table class="tabla">
<tr><th>Objetivo</th><th>Lo que lo traba en la cesión civil</th></tr>
<tr><td><b>Certeza</b> en el derecho</td><td>El arrastre de vicios.</td></tr>
<tr><td><b>Rapidez</b> en la circulación</td><td>La notificación o aceptación del deudor.</td></tr>
<tr><td><b>Seguridad</b> en el cobro</td><td>La responsabilidad limitada del cedente.</td></tr>
</table>
<p>El modelo a imitar son los <b>muebles corporales</b>: se transfieren por la simple entrega y la posesión hace presumir el dominio. Dan certeza (se ven y tocan), rapidez (basta entregarlos) y seguridad (presunción de propiedad). La idea fue <b>llevar el crédito a un papel</b>: al fusionar el derecho con el documento, el derecho adquiere un «cuerpo» y circula como una cosa mueble, igual que un billete.</p>
<h3>Origen: el contrato de cambio y la letra</h3>
<div class="cita">«[…] una convención por la cual una de las partes se obliga, mediante un valor prometido o entregado, a pagar o hacer pagar a la otra parte o a su cesionario legal cierta cantidad de dinero en un lugar distinto de aquel en que se celebra la convención.»<span class="fuente">Art. 620 CCom, según los apuntes</span></div>
<div class="flow"><div class="node">C entrega su oro a A<small>ciudad de origen</small></div><div class="arrow">→</div><div class="node hot">A le da a C un papel<small>orden a B de pagarle</small></div><div class="arrow">→</div><div class="node">C viaja solo con el papel<small>liviano y fácil de ocultar</small></div><div class="arrow">→</div><div class="node">B paga a C<small>ciudad de destino</small></div></div>
<p>En la Edad Media, trasladar oro era pesado, voluminoso y riesgoso por los robos. La instrucción escrita de A para que B pague a C es la <b>letra de cambio</b>. Tenía riesgos (si el papel se pierde, se pierde el derecho; B podía desconocer a A), pero era más seguro. Y si C quería venderle su derecho a Z en el camino, bastaba <b>entregarle el papel</b>. Entre los siglos XVI y XIX los mercantilistas vieron que así un derecho personal funcionaba como una pelota de fútbol.</p>`
      },
      {
        id: 'nocion', titulo: '3. Noción y estructura del título de crédito',
        html: `
<div class="callout"><p><b>Título de crédito:</b> documento que lleva incorporado un derecho <b>literal</b> y <b>autónomo</b> que puede ser ejercido por el <b>portador legítimo</b> contra el deudor a la fecha de su vencimiento.</p></div>
<table class="tabla">
<tr><th>Elemento</th><th>Qué significa</th><th>Ejemplo de clase</th></tr>
<tr><td><b>Documento</b></td><td>Físico o electrónico.</td><td>—</td></tr>
<tr><td><b>Incorporación</b></td><td>El papel es el cuerpo del derecho: «no hay derecho sin el papel». Si se pierde, hay que hacer un procedimiento judicial de extravío.</td><td>El billete; el cheque que el imputado se comía para extinguir la acción penal.</td></tr>
<tr><td><b>Literalidad</b></td><td>Rige lo escrito; las modificaciones deben constar en el título.</td><td>El cheque con un cero de más se paga por lo escrito.</td></tr>
<tr><td><b>Autonomía</b></td><td>Los vicios anteriores no afectan al adquirente de buena fe; cada firma es independiente.</td><td>Caso Inverlink: los depósitos a plazo sustraídos a la Corfo.</td></tr>
<tr><td><b>Legitimación</b></td><td><b>Activa</b>: cobra el portador legítimo (posee el título y cumple sus formas de circulación). <b>Pasiva</b>: el deudor se libera pagando de buena fe a ese portador.</td><td>El chofer entrega la maleta a quien presenta el ticket, aunque lo haya robado.</td></tr>
</table>
<div class="callout red"><p><b>Caso Inverlink (2003), la «teoría del jarrón chino»:</b> depósitos a plazo de la Corfo fueron sustraídos y vendidos a fondos mutuos que los compraron de buena fe. El entonces presidente comparó los papeles con un jarrón robado que se puede perseguir donde esté. Según el profesor, fue un error conceptual: por la <b>autonomía</b>, el derecho de los adquirentes de buena fe nació limpio del vicio original.</p></div>
<h3>Estructura</h3>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Elemento material</h4><p>Soporte físico o digital (equivalencia funcional, incluso blockchain). Cumple tres roles:</p><ul><li><b>Constitutivo:</b> el derecho nace con el documento, como en un contrato solemne.</li><li><b>Probatorio:</b> es la única prueba admisible; ni la confesión del deudor lo reemplaza.</li><li><b>Dispositivo:</b> para transferir o gravar el derecho hay que transferir o modificar el documento.</li></ul></div>
  <div class="card"><h4 style="margin-top:0">Contenido jurídico</h4><p>El derecho con contenido económico plasmado en el documento. Casi siempre es dinero, pero puede ser otra prestación, como la restitución de una cosa: el <b>ticket de equipaje del bus</b> incorpora el derecho a retirar una maleta.</p></div>
</div>`
      },
      {
        id: 'caracteristicas', titulo: '4. Características y actos: necesariedad, literalidad, autonomía y abstracción',
        html: `
<p>Las características se entrelazan para lograr certeza, rapidez y seguridad:</p>
<div class="grid">
  <div class="card"><h4 style="margin-top:0">Necesariedad</h4><p>El documento es indispensable para ejercer y disponer del derecho. Ejemplo: tras la muerte del padre del profesor, el banco no pagó sus depósitos a plazo sin los papeles; hubo que tramitar el extravío.</p></div>
  <div class="card"><h4 style="margin-top:0">Literalidad</h4><p>El texto fija con precisión el derecho. No se cobra más ni se paga menos de lo escrito.</p></div>
  <div class="card"><h4 style="margin-top:0">Autonomía</h4><p>El nuevo portador de buena fe adquiere un derecho originario: no le afectan nulidades, robos ni excepciones personales de la cadena anterior.</p></div>
</div>
<h3>Los actos sobre el título</h3>
<ol>
  <li><b>Actos unilaterales:</b> la fuente de la obligación es la declaración unilateral de voluntad que se manifiesta con la <b>firma</b>.</li>
  <li><b>Independencia de los actos:</b> cada firma (creación, endosos) es independiente.</li>
  <li><b>Abstracción:</b> el título tiene causa, pero el negocio subyacente no afecta su validez una vez que circula. Ejemplo: si se anula el depósito de la maleta, el ticket sigue existiendo.</li>
</ol>
<h3>Autonomía vs. abstracción</h3>
<p>Ambas son formas de «prescindencia» (Sandoval), pero no son lo mismo:</p>
<table class="tabla">
<tr><th></th><th>Autonomía (prescindencia subjetiva)</th><th>Abstracción (prescindencia objetiva)</th></tr>
<tr><td>Mira a</td><td>Los <b>sujetos</b> y los vicios en la cadena de transferencias.</td><td>La relación entre el título y el <b>negocio causal</b>.</td></tr>
<tr><td>Idea</td><td>Cada portador adquiere un derecho <b>originario</b>, no derivado: se deroga la regla de que «nadie transfiere más derechos de los que tiene».</td><td>El título no menciona la causa, o si la menciona no afecta a terceros de buena fe. El acreedor no tiene que probar por qué le deben: basta el título.</td></tr>
<tr><td>Manifestaciones</td><td><b>Independencia de las firmas</b> (<span class="norma">art. 7° Ley 18.092</span>): incapacidad, firmas falsas o personas imaginarias no invalidan las demás firmas.<br><b>Inoponibilidad de excepciones personales</b> (<span class="norma">art. 28 Ley 18.092</span>): solo se oponen las excepciones contra el propio demandante o las que surgen del texto (falsedad, caducidad, prescripción).</td><td><b>No novación</b> (<span class="norma">art. 12 Ley 18.092</span>): girar, aceptar o transferir una letra o pagaré no extingue ni nova la relación de origen, salvo pacto.<br>Por eso coexisten la <b>acción cambiaria</b> (del título) y la <b>acción causal</b> (del contrato). Si el título se perjudica, subsiste la causal.</td></tr>
</table>
<div class="grid dos">
  <div class="card"><h4 style="margin-top:0">Causa-fuente</h4><p>La declaración unilateral de voluntad, expresada en la <b>firma</b>. Es de la esencia: sin ella hay nulidad cambiaria.</p></div>
  <div class="card"><h4 style="margin-top:0">Causa-fin</h4><p>El <b>negocio subyacente</b> que motivó el título. En los abstractos se presume y es irrelevante frente a terceros de buena fe.</p></div>
</div>
<div class="callout yellow"><p><b>Límite importante:</b> la abstracción <b>no opera entre las partes directas</b>. Si el título no ha circulado y sigue en manos del primer beneficiario, el deudor sí puede oponerle las excepciones del contrato original (incumplimiento, dolo, nulidad). Es un escudo solo para terceros de buena fe.</p></div>`
      },
      {
        id: 'clasificaciones', titulo: '5. Clasificaciones de los títulos de crédito',
        html: `
<h3>I. Completos e incompletos</h3>
<div class="grid dos">
  <div class="card"><b>Completos</b><p>Todo el derecho consta en el documento. Ejemplo por antonomasia: el <b>pagaré</b> (también el ticket de equipaje).</p></div>
  <div class="card"><b>Incompletos</b><p>El documento es necesario pero no suficiente: requiere un registro o elemento externo. Ejemplos: la <b>acción</b> de una S.A. (registro de accionistas), los títulos nominativos y los causados.</p></div>
</div>
<h3>II. Según los efectos de la causa</h3>
<table class="tabla">
<tr><th>Abstractos (o de causa discreta)</th><th>Causados (o indiscretos)</th></tr>
<tr><td>No mencionan la relación fundamental, o su mención no tiene efectos frente a terceros. Son <b>completos</b> y sujetos a <b>formalidades estrictas</b>; si faltan, pierden su carácter cambiario (conversión del negocio). Ejemplos: <b>letra de cambio, pagaré, cheque</b>.</td>
<td>Mencionan la relación fundamental, que queda unida al título y complementa su alcance. Ejemplos: <b>acciones</b>, <b>títulos representativos de mercaderías</b> (carta de porte, conocimiento de embarque, warrant) y <b>facturas</b> (Ley 19.983; se discute si son títulos de crédito puros: Prado y Parra).</td></tr>
</table>
<h3>III. Según el contenido</h3>
<table class="tabla">
<tr><th>Tipo</th><th>Contenido</th><th>Ejemplos</th></tr>
<tr><td><b>De pago</b></td><td>Pagar una suma de dinero.</td><td>Letra, pagaré, cheque, factura.</td></tr>
<tr><td><b>De mercaderías</b> (representativos)</td><td>Disposición de mercaderías en tránsito o guardadas: tener el título equivale a poseerlas. El art. 149 CCom admite la cesión de los documentos de transporte como forma de tradición.</td><td>Carta de porte, carta de porte aéreo, conocimiento de embarque, warrants.</td></tr>
<tr><td><b>De participación social</b></td><td>Derechos patrimoniales y corporativos de socio o acreedor. Sandoval los llama <b>valores mobiliarios</b>.</td><td>Acciones, cuotas de fondos, bonos.</td></tr>
</table>
<div class="callout"><p><b>Títulos de pago y moneda.</b> Se parecen, pero se diferencian en cuatro puntos: los títulos (1) no tienen <b>curso forzoso</b> (un comercio puede rechazar un cheque, no un billete); (2) tienen <b>vencimiento y prescripción</b>; (3) tienen <b>valores irregulares</b>, no cortes fijos; y (4) se aceptan por la <b>confianza en las firmas</b>, no por el respaldo estatal.</p></div>
<h3>IV. Según su ley de circulación (cómo cambia el acreedor)</h3>
<table class="tabla">
<tr><th></th><th>Al portador</th><th>A la orden</th><th>Nominativos</th></tr>
<tr><td>Concepto</td><td>No menciona beneficiario o dice «al portador». Es la forma más perfecta de propiedad mobiliaria.</td><td>A favor de una persona determinada, que puede transmitirlo por <b>endoso</b> sin intervención del deudor («a la orden de», «endosable»).</td><td>A favor de una persona determinada; emisión y transferencias se inscriben en un <b>registro del emisor</b> (<b>transfert</b>).</td></tr>
<tr><td>Transferencia</td><td>Simple entrega.</td><td>Endoso más entrega.</td><td>Inscripción en el registro (o formas de la cesión mercantil).</td></tr>
<tr><td>Legitimación activa</td><td>Posesión y presentación.</td><td>Posesión, exhibición, cadena regular de endosos e identificación.</td><td>Posesión, presentación, cadena inscrita e identificación.</td></tr>
<tr><td>Notas</td><td>Perderlo es perder el derecho. En general no se reivindica (se protege al adquirente de buena fe), salvo avisos de extravío antes de la primera negociación. Para los títulos de dinero al portador, la <span class="norma">Ley 18.552</span> (art. 2°) pone el riesgo en el último tenedor y prohíbe la reivindicación.</td><td>El endoso tiene <b>triple efecto</b>: traslaticio, legitimante y vinculatorio (el endosante responde <b>solidariamente</b>, al revés del art. 1907 CC). El control de la cadena es formal (art. 31 Ley 18.092).</td><td>Bolaffio negaba que fueran títulos-valores (dependen del registro); Vivante lo refutó: el emisor está obligado a registrar. Las acciones de S.A. en Chile son siempre nominativas.</td></tr>
</table>
<h3>V. Según el soporte</h3>
<div class="grid dos">
  <div class="card"><b>Cartáceos (papel)</b><p>La forma clásica. En Chile el <b>pagaré</b> solo puede emitirse en papel; la factura, en cambio, tiene versión electrónica en el SII.</p></div>
  <div class="card"><b>Electrónicos</b><p>Anotaciones en cuenta. La <span class="norma">Ley 19.779</span> (2002) consagró la <b>equivalencia funcional</b> entre papel y soporte electrónico. Registro <b>centralizado</b> (Depósito Central de Valores) o <b>descentralizado</b> (blockchain).</p></div>
</div>
<h3>Otras clasificaciones (Sandoval)</h3>
<ul>
  <li>Por el emisor: <b>públicos</b> y <b>privados</b>.</li>
  <li>Por la relación de origen: <b>comerciales</b> (letra, pagaré y cheque son mercantiles por su forma) y <b>civiles</b> (excepcionales).</li>
  <li>Por su fraccionamiento: <b>unitarios</b> y <b>múltiples</b>.</li>
  <li>Por su masividad: <b>en serie</b> (acciones, bonos) e <b>individuales</b> (cheque).</li>
  <li><b>Impropios:</b> documentos sin función circulatoria. Comprobantes de legitimación (pasajes, entradas, billetes de lotería) y documentos de legitimación en sentido estricto (contraseña de guardarropía).</li>
</ul>`
      },
      {
        id: 'sandoval-nocion', titulo: '6. Profundización (Sandoval): noción, origen y aspecto real del título',
        html: `
<div class="callout green"><p><b>Fuente de esta sección:</b> Sandoval, <i>Derecho Comercial</i>, tomo II (5ª ed., 2005), §§ 2-4, 19-22 y 31-32. Complementa lo visto con el apunte de Gaspar.</p></div>
<h3>Dos nociones de título de crédito</h3>
<div class="grid dos">
  <div class="card"><b>Noción restringida (doctrina italiana)</b><p>Documento transferible cuya posesión es necesaria para ejercer el derecho <b>literal y autónomo</b> que representa. La afirmó Vivante y la acogió el Código Civil italiano de 1942.</p></div>
  <div class="card"><b>Noción amplia (doctrina alemana)</b><p>Documento cuya tenencia es necesaria para <b>ejercer</b> el derecho, sea o no necesario también para <b>transferirlo</b>. La recogió el art. 965 del Código suizo de las obligaciones (1936).</p></div>
</div>
<p>Como en Chile no hay una definición legal, Sandoval sostiene que usar una u otra depende de la función que se quiera dar al instrumento. Su definición coincide con la del apunte: documento que lleva incorporado un derecho literal y autónomo que el portador legítimo puede ejercer contra el deudor al vencimiento. Al derecho incorporado lo llama <b>derecho documental</b>: corre la suerte del papel, y si este se pierde o destruye el derecho desaparece, salvo que el dueño tome las medidas legales (el procedimiento de extravío).</p>
<h3>Antes de los títulos: cesión y delegación</h3>
<p>Además de la cesión de créditos (Unidad 5, sección 1), se usó la <b>delegación</b>: el deudor (delegante) es reemplazado por otro (delegado) frente al acreedor (delegatario).</p>
<table class="tabla">
<tr><th>Delegación perfecta</th><th>Delegación imperfecta</th></tr>
<tr><td>El acreedor acepta expresamente el cambio y libera al deudor primitivo. Es una <b>novación</b>.</td><td>El acreedor no libera al deudor primitivo: el delegado se suma como nuevo deudor. En el fondo es una <b>cesión de deuda</b>.</td></tr>
</table>
<p>Ninguna de las dos satisfacía la <b>certeza</b> (que el crédito exista al adquirirlo), la <b>rapidez</b> (negociaciones ágiles) ni la <b>seguridad</b> (que el crédito siga inalterable tras las transferencias). Según Sandoval, el creador de la teoría general fue <b>Vivante</b> (Tratado, 1896): extrajo de la letra de cambio los caracteres comunes a todos los títulos, separó lo propio de la letra como papel de comercio, excluyó los documentos meramente probatorios y describió la circulación de los títulos nominativos, a la orden y al portador.</p>
<h3>El aspecto jurídico-real: el título como cosa mueble</h3>
<p>Al incorporarse el derecho, el papel adquiere un valor que no tenía y se vuelve una <b>cosa nueva</b> (<i>res nova</i>). Por eso el título puede comprarse, venderse, transarse en bolsa, heredarse, donarse, depositarse, darse en prenda o usufructo y embargarse. En todos esos casos la relación recae directamente sobre el documento y solo indirectamente sobre el derecho, aunque es el derecho el que le da valor.</p>
<div class="grid dos">
  <div class="card"><b>Derecho sobre el título</b><p>Relación real sobre el papel como cosa mueble. Se rige por el <b>derecho común</b>. Se adquiere en forma originaria (por ejemplo, apropiación) o derivada (cesión, endoso).</p><p>Se extingue en forma <b>absoluta</b> (destrucción del título) o <b>relativa</b> (pérdida, robo o extravío: un decreto judicial «desincorpora» la prestación; también al fraccionar un título en varios o fundir varios en uno).</p></div>
  <div class="card"><b>Derecho del título</b><p>La relación obligacional incorporada. Se rige por el <b>derecho comercial</b>, con un régimen de circulación propio: puede quedar legitimado incluso el portador de un título robado.</p><p>Los derechos emergentes nacen <b>nuevos</b> en cada portador (adquisición originaria): por eso no se le oponen excepciones personales. Se extinguen por pago, novación, confusión, remisión o prescripción, acompañados de la destrucción del documento.</p></div>
</div>
<h3>Los efectos de comercio según Sandoval</h3>
<p>Efecto de comercio es el título que puede jugar entre comerciantes un rol <b>análogo a la moneda</b>. Rasgos: (1) es <b>negociable</b> por procedimientos rápidos del derecho comercial; (2) indica su <b>valor en moneda</b>; (3) esa indicación es normativa: representa un <b>crédito en dinero</b>; y (4) es pagadero a <b>corto plazo</b>. Un cheque de $20.000 vale $20.000; un conocimiento de embarque no tiene un valor tan determinado.</p>
<p>Aun así no es moneda (valores irregulares, sin curso forzoso, valor limitado en el tiempo). Para Sandoval la diferencia de fondo es <b>psicológica</b>: recibir un efecto de comercio no da la misma seguridad que recibir dinero. En Chile, los más conocidos son la <b>letra de cambio, el pagaré, el cheque y la carta orden de crédito</b> (Unidad 7).</p>
<div class="callout yellow"><p><b>Ojo con dos diferencias entre fuentes:</b></p>
<ul>
  <li>Sandoval (ed. 2005) dice que en Chile «no existe la factura protestable». El apunte de Gaspar enseña que la <b>Ley 19.983</b> convirtió la copia cedible de la factura en un título con mérito ejecutivo (Unidad 7). Para el examen, sigue el apunte.</li>
  <li>«Efecto de comercio» en Sandoval es una categoría cambiaria. En la LMV (Unidad 8) se llama así a un <b>título de deuda de corto plazo de oferta pública</b>. Son usos distintos de la misma expresión.</li>
</ul></div>`
      },
      {
        id: 'mercaderias', titulo: '7. Títulos representativos de mercaderías (Sandoval)',
        html: `
<p>Estos títulos dan al portador legítimo el derecho a exigir la <b>entrega de ciertas mercaderías</b>. Su gran función es movilizarlas: al circular el documento, circulan las mercaderías <b>sin necesidad de título y modo</b> del derecho común. Según Sandoval (§§ 42-53), los principales son la carta de porte, el conocimiento de embarque y el certificado de depósito (warrant). Todos son <b>causados</b>: mencionan el contrato del que nacen.</p>
<h3>Carta de porte (transporte terrestre)</h3>
<div class="cita">«Llámase carta de porte el documento que las partes otorgan para acreditar la existencia y condiciones del contrato, y la entrega de las mercaderías al porteador.»<span class="fuente">Art. 173 CCom, citado por Sandoval</span></div>
<ul>
  <li>Nace del <b>acuerdo</b> de las partes; convenido su otorgamiento, se extiende y firma <b>por duplicado</b> (art. 174).</li>
  <li>Es título de crédito (necesariedad, literalidad, autonomía), pero <b>sin abstracción ni formalidad</b>: si omite menciones del art. 175, no pierde su mérito probatorio y lo omitido se prueba por cualquier medio (art. 177).</li>
  <li>Circula según cómo se extienda: <b>nominativa, a la orden o al portador</b> (art. 176). El cesionario, endosatario o portador se subroga en los derechos y obligaciones del cargador.</li>
  <li>Reconocida la firma, contra su tenor solo caben las excepciones de <b>falsedad, omisión o error involuntario</b> (art. 178).</li>
  <li>Cumple funciones <b>probatoria</b> (prueba el contrato y la entrega), <b>constitutiva</b> (el derecho a reclamar la carga nace con el título) y <b>dispositiva</b> (solo se dispone de la carga transfiriendo el título).</li>
</ul>
<h3>Conocimiento de embarque (bill of lading)</h3>
<div class="cita">«El conocimiento de embarque es un documento que prueba la existencia de un contrato de transporte marítimo, y acredita que el transportador ha tomado a su cargo o ha cargado las mercancías y se ha obligado a entregarlas contra la presentación de ese documento a una persona determinada, a su orden o al portador.»<span class="fuente">Art. 977 CCom, citado por Sandoval</span></div>
<ul>
  <li>Origen en el <i>common law</i>. El Libro III del CCom se inspiró en las <b>Reglas de Hamburgo</b> (1978), obra de la CNUDMI.</li>
  <li>«Por escrito» incluye télex y otros medios (art. 978). La firma puede ser manuscrita, en facsímil, perforada, estampada en símbolos o <b>electrónica</b> (art. 1014 inc. 3°); la del capitán se entiende hecha por el transportador.</li>
  <li>Sus menciones están en el art. 1015, pero no es formal: omitir algunas no lo invalida si se ajusta al art. 977.</li>
  <li>Funciones: probar el contrato; acreditar que se recibió o cargó la mercancía (si dice «embarcado»); obligar al transportador a entregar contra presentación del título.</li>
  <li><b>Autonomía:</b> si se transfirió a un tercero de buena fe que confió en la descripción de las mercancías, el transportador no puede probar en contrario (art. 1020 N° 2).</li>
</ul>
<div class="grid dos">
  <div class="card"><b>Seawaybill: no es título de crédito</b><p>Carta de porte marítima no negociable. La carga se entrega a quien el contrato designa, no a cualquier portador. Si se transfiere, es por <b>cesión de créditos</b>, con todas las excepciones del contrato de transporte. Le falta la función dispositiva.</p></div>
  <div class="card"><b>Documento de transporte multimodal</b><p>Porteo por al menos dos modos de transporte (art. 1041 N° 1 CCom). El cargador decide si el documento es <b>negociable</b> o no. Si lo es, Sandoval lo considera un auténtico título de crédito.</p></div>
</div>
<h3>Certificado de depósito (warrant) como título</h3>
<p>La prenda warrant se estudia como garantía en la <b>Unidad 4</b>. Como título, Sandoval destaca que:</p>
<ul>
  <li>El almacenista emite el <b>certificado de depósito</b> y el <b>vale de prenda</b> (Ley 18.690), con las mismas menciones (art. 5°), y los inscribe en su registro.</li>
  <li>Es <b>causado</b>: queda ligado al contrato de almacenaje. El dominio de las especies se transfiere por <b>endoso</b> del certificado (art. 6°).</li>
  <li>Es un híbrido: se emite <b>nominativo</b> e inscrito, pero circula por endoso. No puede ser al portador ni endosarse en blanco; el endoso debe identificar al endosatario y llevar firma y fecha. Un autor citado por Sandoval (Sfeir) los llama «nominativos y también a la orden».</li>
</ul>`
      },
      {
        id: 'electronicos', titulo: '8. Títulos electrónicos o desincorporados (Sandoval)',
        html: `
<p>Los títulos de crédito son «víctimas de su propio éxito»: emitir y manejar millones de papeles (acciones, bonos, pero también letras y cheques) es lento y caro. Según Sandoval (§§ 54-57), más que una «desmaterialización» hay un <b>cambio de soporte</b>: el derecho se registra en una anotación electrónica.</p>
<div class="grid dos">
  <div class="card"><b>Anotación en cuenta</b><p>Antes, un asiento contable solo hacía presumir la entrega de una cosa. Ahora la anotación tiene <b>valor propio</b>: es el registro constitutivo del derecho y produce los efectos de la tradición, sin papel.</p></div>
  <div class="card"><b>Equivalencia funcional</b><p>La transferencia contable produce el mismo efecto que la entrega del título de papel. Pero para Sandoval no se aplica íntegro el régimen cartular: surge un <b>nuevo régimen de circulación de bienes inmateriales</b>.</p></div>
</div>
<h3>Cómo se llegó ahí</h3>
<table class="tabla">
<tr><th>Lugar</th><th>Hito</th></tr>
<tr><td>Alemania</td><td><i>Depotgesetz</i> (1937): depósito colectivo de títulos fungibles; el depositante pasa a ser copropietario por cuotas y los bancos transfieren con anotaciones contables. Luego, el «derecho valor» (<i>Wertrechte</i>), sin documento.</td></tr>
<tr><td>Francia</td><td>SICOVAM (1949): depósito facultativo de valores, obligatorio desde 1984. Para títulos individuales, la <i>lettre de change relevé</i> (letra en soporte magnético).</td></tr>
<tr><td>España</td><td>Ley del Mercado de Valores de 1988: anotaciones en cuenta, irreversibles y necesarias para negociar en bolsa.</td></tr>
<tr><td>Chile</td><td><span class="norma">Ley 18.876</span> (1989), sobre depósito y custodia de valores: permite transferir y constituir derechos reales sobre títulos depositados por comunicación escrita o electrónica.</td></tr>
</table>
<ul>
  <li><b>Truncamiento:</b> el cheque (y otros efectos de comercio) se emite en papel, pero se <b>inmoviliza</b> y circula o se cobra con su imagen transmitida electrónicamente.</li>
  <li><b>Transporte:</b> sistemas que reemplazan el conocimiento de embarque por avisos electrónicos. El desafío es asegurar la <b>autenticidad e inalterabilidad</b> de los registros; en Chile el art. 1014 inc. 3° CCom ya admite la firma electrónica del conocimiento.</li>
  <li><b>Ley Modelo de la CNUDMI sobre Comercio Electrónico</b> (1996): un mensaje de datos satisface la exigencia de escrito si la información es accesible para su consulta posterior (art. 6°), y la de firma si se usa un método fiable para identificar al iniciador y su aprobación (art. 7°).</li>
</ul>
<div class="callout yellow"><p><b>Conecta con el apunte:</b> la Ley 19.779 consagró la equivalencia funcional (sección 5), pero según el apunte de Gaspar en materia cambiaria la firma sigue siendo física y el pagaré solo se emite en papel (Unidades 6 y 7). Sandoval describe la tendencia general; el apunte, la regla actual de la letra y el pagaré.</p></div>`
      }
    ],

    interactivos: [
      {
        id: 'cesionvsendoso', titulo: 'Cesión civil vs. título de crédito: el caso de la lechería', seccion: 'cesion',
        descripcion: 'La lechería tiene un crédito de $1.000.000 contra la cafetería y se lo transfiere a un factoring por $500.000. Elige cómo se transfiere y mira qué pasa en cada problema.',
        montar: function (el) {
          var escenarios = [
            ['La cafetería no paga porque está insolvente.',
              'Art. 1907 CC: el cedente no responde de la solvencia salvo pacto, y aun pactada solo de la presente y hasta el precio recibido. El factoring recupera como máximo $500.000, y solo si lo pactó.',
              'El endosante responde solidariamente del pago, salvo cláusula en contrario. El factoring puede cobrar el total también a la lechería.'],
            ['La cafetería alega que el contrato de compraventa de leche es nulo por error.',
              'El cesionario adquiere el crédito con todos sus vicios: la cafetería puede oponerle la nulidad. Por eso habría que estudiar títulos antes.',
              'Si el título circuló y el factoring es tercero de buena fe, por la abstracción y la inoponibilidad de excepciones personales (art. 28 Ley 18.092) la cafetería no puede oponerle la nulidad del negocio de origen.'],
            ['La lechería también le debía $300.000 a la cafetería.',
              'Si la cafetería fue solo notificada, puede compensar con el cesionario (art. 1659 CC). Si aceptó sin reserva, pierde la compensación.',
              'Es una excepción personal contra la lechería, no contra el factoring: no puede oponérsela al portador legítimo de buena fe.'],
            ['¿Qué hay que hacer para que el cambio de acreedor sea oponible a la cafetería?',
              'Notificar a la cafetería o que esta acepte (art. 1902 CC). En lo civil, gestión judicial (art. 47 CPC); en lo mercantil, ministro de fe (art. 162 CCom). Cuesta tiempo y dinero.',
              'Nada frente al deudor: basta endosar y entregar el título (a la orden) o solo entregarlo (al portador).']
          ];
          var modo = 'civil';
          el.innerHTML = '<div class="opciones-chip" id="m"><button data-m="civil" class="activo">Cesión de créditos (CC)</button><button data-m="titulo">Pagaré a la orden endosado</button></div><div id="out"></div>';
          function pintar() {
            el.querySelector('#out').innerHTML = escenarios.map(function (e) {
              return '<div class="resultado ' + (modo === 'civil' ? 'mal' : 'ok') + '" style="margin-top:10px"><b>' + e[0] + '</b><p style="margin:6px 0 0">' + (modo === 'civil' ? e[1] : e[2]) + '</p></div>';
            }).join('') + '<p class="small">' + (modo === 'civil' ? 'Los tres problemas de la cesión civil: responsabilidad del cedente, rol del deudor y arrastre de vicios.' : 'El título de crédito da certeza, rapidez y seguridad: lo que buscaba el anhelo mercantilista.') + '</p>';
          }
          el.querySelectorAll('#m button').forEach(function (b) { b.onclick = function () { modo = b.dataset.m; el.querySelectorAll('#m button').forEach(function (x) { x.classList.toggle('activo', x === b); }); pintar(); }; });
          pintar();
        }
      },
      {
        id: 'excepciones', titulo: '¿Puede el deudor oponer esta excepción?', seccion: 'caracteristicas',
        descripcion: 'Aplica la autonomía, la abstracción y su límite entre partes directas.',
        montar: function (el) {
          var casos = [
            ['A firmó un pagaré a favor de B por una compraventa. B nunca entregó la mercadería y es el propio B quien cobra.', true, 'Entre partes directas no opera la abstracción: A puede oponer a B el incumplimiento del contrato de origen.'],
            ['Mismo caso, pero B endosó el pagaré a C, tercero de buena fe, y C cobra.', false, 'Es una excepción personal contra B. Por el art. 28 Ley 18.092 no puede oponerse a C.'],
            ['C cobra un pagaré que ya prescribió.', true, 'La prescripción es una excepción real, que surge del propio título: se puede oponer a cualquier portador.'],
            ['En la cadena de endosos hay una firma falsificada. El deudor dice que por eso no debe nada.', false, 'Independencia de las firmas (art. 7° Ley 18.092): la firma falsa no invalida las obligaciones de los demás firmantes.'],
            ['El portador cobra un monto mayor al escrito en el título, alegando que eso acordaron verbalmente.', true, 'Por la literalidad, el deudor puede defenderse con lo que dice el documento: no se cobra más de lo escrito.']
          ];
          var i = 0, ok = 0;
          function pintar() {
            if (i >= casos.length) { el.innerHTML = '<div class="resultado ok"><b>Resultado: ' + ok + ' de ' + casos.length + '.</b> <button class="btn sec" id="re">Repetir</button></div>'; el.querySelector('#re').onclick = function () { i = 0; ok = 0; pintar(); }; return; }
            var c = casos[i];
            el.innerHTML = '<p class="small">Caso ' + (i + 1) + ' de ' + casos.length + '</p><p style="font-size:17px;font-weight:700">' + c[0] + '</p><div class="opciones-chip"><button data-v="1">Sí puede oponerla</button><button data-v="0">No puede oponerla</button></div><div id="fb"></div>';
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
        id: 'circulacion', titulo: '¿Qué necesito para cobrar? Ley de circulación', seccion: 'clasificaciones',
        descripcion: 'Elige el tipo de título y marca lo que tienes. Revisa si estás legitimado para cobrar.',
        montar: function (el) {
          var req = {
            portador: ['pos', 'pres'],
            orden: ['pos', 'pres', 'cad', 'id'],
            nominativo: ['pos', 'pres', 'reg', 'id']
          };
          var nombres = { pos: 'Tengo la posesión del documento', pres: 'Lo presento físicamente al deudor', cad: 'Hay una cadena regular de endosos hasta mí', reg: 'La transferencia está inscrita en el registro del emisor (transfert)', id: 'Acredito mi identidad' };
          el.innerHTML = '<div class="opciones-chip" id="t"><button data-t="portador" class="activo">Al portador</button><button data-t="orden">A la orden</button><button data-t="nominativo">Nominativo</button></div>' +
            Object.keys(nombres).map(function (k) { return '<label class="check"><input type="checkbox" data-k="' + k + '"> ' + nombres[k] + '</label>'; }).join('') + '<div id="out"></div>';
          var tipo = 'portador';
          function calc() {
            var marc = {}; el.querySelectorAll('input').forEach(function (i) { marc[i.dataset.k] = i.checked; });
            var faltan = req[tipo].filter(function (k) { return !marc[k]; });
            el.querySelector('#out').innerHTML = faltan.length
              ? '<div class="resultado mal"><b>Aún no estás legitimado.</b> Falta: ' + faltan.map(function (k) { return nombres[k].toLowerCase(); }).join('; ') + '.</div>'
              : '<div class="resultado ok"><b>✓ Portador legítimo.</b> ' + (tipo === 'portador' ? 'En el título al portador basta poseerlo y presentarlo; el deudor que paga de buena fe se libera.' : tipo === 'orden' ? 'El deudor solo revisa formalmente la cadena de endosos y tu identidad (art. 31 Ley 18.092).' : 'El emisor debe reconocerte según su registro.') + '</div>';
          }
          el.querySelectorAll('#t button').forEach(function (b) { b.onclick = function () { tipo = b.dataset.t; el.querySelectorAll('#t button').forEach(function (x) { x.classList.toggle('activo', x === b); }); calc(); }; });
          el.querySelectorAll('input').forEach(function (i) { i.onchange = calc; }); calc();
        }
      },
      {
        id: 'estitulo', titulo: '¿Es título de crédito y cómo circula?', seccion: 'mercaderias',
        descripcion: 'Para cada documento del transporte o del depósito, decide si es título de crédito según Sandoval y cómo se transfiere.',
        montar: function (el) {
          var casos = [
            ['Carta de porte extendida «a la orden» del consignatario.', 'o', 'Es título de crédito causado; al extenderse a la orden, circula por endoso (art. 176 CCom).'],
            ['Conocimiento de embarque emitido al portador.', 'p', 'Es título de crédito; al portador circula por simple entrega y el portador puede exigir la carga.'],
            ['Seawaybill que designa a una empresa determinada como destinataria.', 'c', 'No es título de crédito: no es negociable y, si se transfiere, es por cesión de créditos, con todas las excepciones del contrato.'],
            ['Certificado de depósito emitido por un almacén general de depósito.', 'w', 'Es título causado, nominativo e inscrito, que se transfiere por endoso con firma, fecha e identificación del endosatario (nunca en blanco).'],
            ['Contraseña que entrega el guardarropía de un teatro.', 'i', 'Es un documento de legitimación (título impropio): no tiene función circulatoria.']
          ];
          var et = { o: 'Título: circula por endoso', p: 'Título: circula por entrega', w: 'Título: nominativo que se endosa', c: 'No es título: cesión de créditos', i: 'Título impropio' };
          var i = 0, ok = 0;
          function pintar() {
            if (i >= casos.length) { el.innerHTML = '<div class="resultado ok"><b>Resultado: ' + ok + ' de ' + casos.length + '.</b> <button class="btn sec" id="re">Repetir</button></div>'; el.querySelector('#re').onclick = function () { i = 0; ok = 0; pintar(); }; return; }
            var c = casos[i];
            el.innerHTML = '<p class="small">Caso ' + (i + 1) + ' de ' + casos.length + '</p><p style="font-size:18px;font-weight:700">' + c[0] + '</p><div class="opciones-chip">' + Object.keys(et).map(function (k) { return '<button data-v="' + k + '">' + et[k] + '</button>'; }).join('') + '</div><div id="fb"></div>';
            el.querySelectorAll('[data-v]').forEach(function (b) {
              b.onclick = function () {
                var bien = b.dataset.v === c[1]; if (bien) ok++;
                el.querySelectorAll('[data-v]').forEach(function (x) { x.disabled = true; if (x.dataset.v === c[1]) x.classList.add('activo'); });
                el.querySelector('#fb').innerHTML = '<div class="resultado ' + (bien ? 'ok' : 'mal') + '"><b>' + (bien ? '✓ Correcto.' : '✗ Era: ' + et[c[1]] + '.') + '</b> ' + c[2] + '<div style="margin-top:10px"><button class="btn" id="sig">Siguiente</button></div></div>';
                el.querySelector('#sig').onclick = function () { i++; pintar(); };
              };
            });
          }
          pintar();
        }
      }
    ],

    preguntas: [
      { tipo: 'alternativas', seccion: 'cesion', enunciado: 'Según el art. 1907 CC, en una cesión onerosa el cedente responde…', opciones: ['De la existencia del crédito al tiempo de la cesión, no de la solvencia del deudor salvo pacto', 'De la existencia y de la solvencia futura del deudor', 'Del pago total del crédito', 'De nada, salvo pacto'], correcta: 0, explicacion: 'Si pacta la solvencia, es solo la presente y hasta el precio recibido, salvo estipulación distinta.' },
      { tipo: 'vf', seccion: 'cesion', enunciado: 'La cesión de créditos produce efectos contra el deudor desde que cedente y cesionario se ponen de acuerdo.', respuesta: false, explicacion: 'Art. 1902 CC: requiere notificación al deudor o su aceptación.' },
      { tipo: 'alternativas', seccion: 'cesion', enunciado: 'El deudor acepta sin reserva la cesión. ¿Qué pierde?', opciones: ['La posibilidad de oponer al cesionario la compensación que tenía contra el cedente', 'El plazo para pagar', 'La acción causal', 'Nada'], correcta: 0, explicacion: 'Art. 1659 CC. Si solo es notificado, conserva la compensación.' },
      { tipo: 'alternativas', seccion: 'cesion', enunciado: '¿Cuál de los tres problemas de la cesión civil NO se puede solucionar con una cláusula?', opciones: ['El arrastre de los vicios del crédito', 'La responsabilidad limitada del cedente', 'La necesidad de notificar', 'Ninguno se puede solucionar'], correcta: 0, explicacion: 'El cesionario adquiere el crédito con todos sus vicios; para protegerse debe estudiar títulos.' },
      { tipo: 'vf', seccion: 'cesion', enunciado: 'En materia mercantil, la notificación de la cesión puede hacerla un ministro de fe sin ir al tribunal.', respuesta: true, explicacion: 'Art. 162 CCom. En lo civil se aplica el art. 47 CPC.' },
      { tipo: 'alternativas', seccion: 'anhelo', enunciado: '¿Qué bienes sirvieron de modelo a los mercantilistas para diseñar los títulos de crédito?', opciones: ['Los muebles corporales, que se transfieren por la simple entrega', 'Los inmuebles inscritos', 'Los derechos reales', 'Las universalidades'], correcta: 0, explicacion: 'Dan certeza, rapidez y seguridad; la idea fue darle «cuerpo» al crédito en un papel.' },
      { tipo: 'relacionar', seccion: 'anhelo', enunciado: 'Relaciona cada objetivo mercantil con lo que lo traba en la cesión civil.', pares: [['Certeza en el derecho', 'Arrastre de vicios'], ['Rapidez en la circulación', 'Notificación o aceptación del deudor'], ['Seguridad en el cobro', 'Responsabilidad limitada del cedente']], explicacion: 'Es el «anhelo mercantilista».' },
      { tipo: 'alternativas', seccion: 'anhelo', enunciado: 'Según el art. 620 CCom, el contrato de cambio es aquel por el cual…', opciones: ['Una parte se obliga, mediante un valor prometido o entregado, a pagar o hacer pagar a la otra cierta cantidad de dinero en un lugar distinto del de celebración', 'Se cambian monedas extranjeras', 'Se permuta una mercadería por otra', 'Un banco acepta una letra'], correcta: 0, explicacion: 'De ahí nace la letra de cambio.' },
      { tipo: 'alternativas', seccion: 'nocion', enunciado: '¿Cuál es la definición de título de crédito que se usa en clases?', opciones: ['Documento que lleva incorporado un derecho literal y autónomo que puede ejercer el portador legítimo contra el deudor a su vencimiento', 'Cualquier documento que prueba una deuda', 'Contrato bilateral por el que se cede un crédito', 'Documento que acredita un depósito bancario'], correcta: 0, explicacion: 'Sus elementos: documento, incorporación, literalidad, autonomía y legitimación.' },
      { tipo: 'vf', seccion: 'nocion', enunciado: 'Por el rol probatorio del documento, la confesión judicial del deudor basta para cobrar aunque falte el título.', respuesta: false, explicacion: 'El documento es el único medio de prueba admisible del derecho incorporado.' },
      { tipo: 'relacionar', seccion: 'nocion', enunciado: 'Relaciona cada rol del elemento material con su contenido.', pares: [['Constitutivo', 'El derecho nace con el documento'], ['Probatorio', 'El documento es la única prueba'], ['Dispositivo', 'Para transferir hay que transferir el documento']], explicacion: 'El sustrato puede ser papel o electrónico.' },
      { tipo: 'alternativas', seccion: 'nocion', enunciado: 'Según el profesor, ¿qué error se cometió en el caso Inverlink?', opciones: ['Tratar los títulos robados como un «jarrón chino» reivindicable, desconociendo la autonomía', 'Aplicar la literalidad a los depósitos a plazo', 'No notificar la cesión a la Corfo', 'Considerar nominativos los depósitos'], correcta: 0, explicacion: 'Los adquirentes de buena fe tenían un derecho autónomo, limpio del vicio original.' },
      { tipo: 'vf', seccion: 'nocion', enunciado: 'El chofer que entrega la maleta a quien presenta el ticket robado queda liberado de su obligación.', respuesta: true, explicacion: 'Legitimación pasiva: el deudor se libera pagando de buena fe al portador legítimo.' },
      { tipo: 'alternativas', seccion: 'caracteristicas', enunciado: '¿Qué diferencia a la autonomía de la abstracción?', opciones: ['La autonomía mira a los sujetos y los vicios de la cadena; la abstracción, a la relación entre el título y el negocio causal', 'Son sinónimos', 'La autonomía solo existe en los títulos causados', 'La abstracción mira a los vicios de los endosantes'], correcta: 0, explicacion: 'Prescindencia subjetiva vs. prescindencia objetiva.' },
      { tipo: 'vf', seccion: 'caracteristicas', enunciado: 'La abstracción permite al deudor rechazar las excepciones del contrato de origen incluso frente al primer beneficiario que no ha hecho circular el título.', respuesta: false, explicacion: 'Al revés: entre partes directas sí se oponen las excepciones causales. La abstracción protege solo a terceros de buena fe.' },
      { tipo: 'alternativas', seccion: 'caracteristicas', enunciado: '¿Qué establece el art. 7° de la Ley 18.092?', opciones: ['La independencia de las firmas', 'La no novación', 'La inoponibilidad de excepciones', 'El procedimiento de extravío'], correcta: 0, explicacion: 'Firmas falsas, incapaces o personas imaginarias no invalidan las demás obligaciones.' },
      { tipo: 'alternativas', seccion: 'caracteristicas', enunciado: 'Según el art. 12 de la Ley 18.092, girar una letra para pagar una compraventa…', opciones: ['No nova la obligación de origen, salvo pacto: coexisten la acción cambiaria y la causal', 'Extingue por novación el precio de la compraventa', 'Convierte la compraventa en mutuo', 'Obliga a notificar al deudor'], correcta: 0, explicacion: 'Si el título se perjudica, subsiste la acción causal.' },
      { tipo: 'relacionar', seccion: 'caracteristicas', enunciado: 'Relaciona cada concepto con su descripción.', pares: [['Causa-fuente', 'La firma del obligado'], ['Causa-fin', 'El negocio subyacente'], ['Acción cambiaria', 'Emana del título'], ['Acción causal', 'Emana del contrato de origen']], explicacion: 'La causa-fuente nunca puede faltar.' },
      { tipo: 'vf', seccion: 'caracteristicas', enunciado: 'La fuente de la obligación en el título de crédito es una declaración unilateral de voluntad expresada con la firma.', respuesta: true, explicacion: 'No un contrato bilateral.' },
      { tipo: 'alternativas', seccion: 'caracteristicas', enunciado: '¿Qué excepción puede oponer el deudor a un tercero portador de buena fe?', opciones: ['La prescripción de la acción', 'El incumplimiento del vendedor original', 'La compensación con un endosante anterior', 'El dolo del primer beneficiario'], correcta: 0, explicacion: 'Las excepciones reales que surgen del texto (falsedad, caducidad, prescripción) sí son oponibles.' },
      { tipo: 'alternativas', seccion: 'clasificaciones', enunciado: '¿Cuál es un título causado?', opciones: ['La factura', 'La letra de cambio', 'El pagaré', 'El cheque'], correcta: 0, explicacion: 'Debe referirse a una compraventa o servicio real (Ley 19.983).' },
      { tipo: 'alternativas', seccion: 'clasificaciones', enunciado: '¿Por qué la acción de una sociedad anónima es un título incompleto?', opciones: ['Porque requiere la inscripción en el registro de accionistas', 'Porque no tiene valor nominal', 'Porque es al portador', 'Porque es abstracta'], correcta: 0, explicacion: 'El título es necesario pero no suficiente.' },
      { tipo: 'vf', seccion: 'clasificaciones', enunciado: 'En el endoso, a diferencia de la cesión civil, el endosante responde solidariamente del pago salvo cláusula en contrario.', respuesta: true, explicacion: 'Triple efecto: traslaticio, legitimante y vinculatorio.' },
      { tipo: 'relacionar', seccion: 'clasificaciones', enunciado: 'Relaciona cada título con su forma de transferencia.', pares: [['Al portador', 'Simple entrega'], ['A la orden', 'Endoso y entrega'], ['Nominativo', 'Inscripción en el registro (transfert)']], explicacion: 'Es la ley de circulación.' },
      { tipo: 'alternativas', seccion: 'clasificaciones', enunciado: '¿Qué dispone la Ley 18.552 sobre los títulos de dinero al portador?', opciones: ['Su pérdida o robo corre por cuenta del último tenedor y no son reivindicables', 'Pueden reivindicarse siempre', 'Deben inscribirse en un registro', 'Solo pueden emitirlos los bancos'], correcta: 0, explicacion: 'Art. 2°: cualquier pacto en contrario se tiene por no escrito.' },
      { tipo: 'relacionar', seccion: 'clasificaciones', enunciado: 'Relaciona cada título con su contenido.', pares: [['Pagaré', 'Título de pago'], ['Conocimiento de embarque', 'Título de mercaderías'], ['Acción de S.A.', 'Título de participación'], ['Pasaje de bus', 'Título impropio']], explicacion: 'Sandoval llama valores mobiliarios a los de participación.' },
      { tipo: 'alternativas', seccion: 'clasificaciones', enunciado: '¿Cuál NO es una diferencia entre los títulos de pago y la moneda?', opciones: ['Los títulos de pago tienen poder liberatorio absoluto como los billetes', 'Los títulos no tienen curso forzoso', 'Los títulos tienen vencimiento y prescripción', 'Los títulos se aceptan por la confianza en las firmas'], correcta: 0, explicacion: 'Un comercio puede rechazar un cheque, pero no un billete.' },
      { tipo: 'vf', seccion: 'clasificaciones', enunciado: 'En Chile el pagaré puede emitirse en soporte electrónico, igual que la factura.', respuesta: false, explicacion: 'Según los apuntes, el pagaré solo puede emitirse en papel; la factura sí tiene versión electrónica.' },
      { tipo: 'alternativas', seccion: 'clasificaciones', enunciado: '¿Quién sostenía que los títulos nominativos no eran verdaderos títulos-valores?', opciones: ['Bolaffio', 'Vivante', 'Sandoval', 'Somarriva'], correcta: 0, explicacion: 'Vivante lo refutó: el emisor está obligado a registrar los traspasos.' },
      { tipo: 'vf', seccion: 'clasificaciones', enunciado: 'La Ley 19.779 consagró la equivalencia funcional entre el papel y el soporte electrónico.', respuesta: true, explicacion: 'Permite títulos electrónicos con firma electrónica.' },

      { tipo: 'oral', seccion: 'cesion', enunciado: '¿Por qué la cesión de créditos del Código Civil no satisface las necesidades del comercio?', puntos: ['El crédito es un bien incorporal transferible; el comercio necesita convertirlo en liquidez.', 'Tradición por entrega del título (art. 699) y cesión (arts. 1901 y ss.); reglas mercantiles en los arts. 161 y ss. CCom.', 'Problema 1: responsabilidad del cedente (art. 1907): existencia, solvencia solo pactada y presente, hasta el precio.', 'Problema 2: rol del deudor (art. 1902): notificación o aceptación; compensación (art. 1659); costos (art. 47 CPC, art. 162 CCom).', 'Problema 3: arrastre de vicios; obliga a estudiar títulos.', 'Ejemplo de la lechería y el factoring.'], norma: 'Arts. 699, 1659, 1901-1907 CC; arts. 161-162 CCom' },
      { tipo: 'oral', seccion: 'anhelo', enunciado: 'Explique el «anhelo mercantilista» y el origen histórico de los títulos de crédito.', puntos: ['Objetivos: certeza, rapidez y seguridad.', 'Modelo: muebles corporales (entrega, presunción de dominio).', 'Solución: incorporar el derecho a un papel para que circule como cosa mueble.', 'Origen: el contrato de cambio (art. 620 CCom) y la letra en la Edad Media (oro pesado y riesgoso).', 'La transferencia del derecho por la simple entrega del papel.'], norma: 'Art. 620 CCom' },
      { tipo: 'oral', seccion: 'nocion', enunciado: 'Defina título de crédito y explique sus elementos.', puntos: ['Documento que incorpora un derecho literal y autónomo ejercible por el portador legítimo a su vencimiento.', 'Incorporación: no hay derecho sin papel (extravío).', 'Literalidad: rige lo escrito.', 'Autonomía: derecho originario del adquirente de buena fe (caso Inverlink).', 'Legitimación activa y pasiva (ticket de equipaje).', 'Estructura: elemento material (constitutivo, probatorio, dispositivo) y contenido jurídico.'], norma: 'Apuntes (Gaspar); Sandoval' },
      { tipo: 'oral', seccion: 'caracteristicas', enunciado: 'Distinga autonomía y abstracción, y explique sus manifestaciones en la Ley 18.092.', puntos: ['Autonomía: prescindencia subjetiva; derecho originario; vicios de la cadena no afectan al tercero de buena fe.', 'Manifestaciones: independencia de las firmas (art. 7°) e inoponibilidad de excepciones personales (art. 28).', 'Abstracción: prescindencia objetiva del negocio causal; causa-fuente (firma) vs. causa-fin (negocio).', 'No novación (art. 12): coexisten acción cambiaria y causal.', 'Límite: la abstracción no opera entre partes directas.', 'Títulos abstractos (letra, pagaré, cheque) vs. causados (acciones, títulos de mercaderías, facturas).'], norma: 'Arts. 7°, 12 y 28 Ley 18.092' },
      { tipo: 'oral', seccion: 'clasificaciones', enunciado: 'Clasifique los títulos de crédito según su ley de circulación y explique cómo se legitima el portador en cada caso.', puntos: ['Al portador: entrega; posesión y presentación; no reivindicables en general; Ley 18.552 para títulos de dinero.', 'A la orden: endoso con triple efecto (traslaticio, legitimante, vinculatorio); cadena regular; control formal (art. 31 Ley 18.092).', 'Nominativos: registro del emisor (transfert); debate Bolaffio y Vivante; acciones de S.A.', 'El endosante responde solidariamente, al revés del art. 1907 CC.'], norma: 'Ley 18.092; Ley 18.552' },
      { tipo: 'oral', seccion: 'clasificaciones', enunciado: 'Explique las demás clasificaciones de los títulos de crédito.', puntos: ['Completos (pagaré) e incompletos (acciones, nominativos, causados).', 'Abstractos y causados.', 'Por contenido: de pago, de mercaderías (art. 149 CCom) y de participación (valores mobiliarios).', 'Diferencias entre títulos de pago y moneda: curso forzoso, vencimiento, valores irregulares, confianza en las firmas.', 'Por soporte: cartáceos y electrónicos (Ley 19.779; registro centralizado o blockchain).', 'Otras: públicos y privados, comerciales y civiles, unitarios y múltiples, en serie e individuales, impropios.'], norma: 'Apuntes (Gaspar); Sandoval' },

      { tipo: 'alternativas', seccion: 'sandoval-nocion', enunciado: 'Según Sandoval, ¿qué distingue la noción amplia de título de crédito de la restringida?', opciones: ['En la amplia basta que el documento sea necesario para ejercer el derecho, aunque no lo sea para transferirlo', 'La amplia exige que el derecho sea abstracto', 'La amplia solo comprende la letra de cambio', 'La amplia excluye los títulos nominativos'], correcta: 0, explicacion: 'La restringida (italiana) exige un documento transferible necesario para ejercer un derecho literal y autónomo.' },
      { tipo: 'relacionar', seccion: 'sandoval-nocion', enunciado: 'Relaciona cada noción con su origen según Sandoval.', pares: [['Noción restringida', 'Doctrina italiana y Código Civil italiano de 1942'], ['Noción amplia', 'Doctrina alemana y Código suizo de las obligaciones de 1936']], explicacion: 'En Chile no hay definición legal.' },
      { tipo: 'alternativas', seccion: 'sandoval-nocion', enunciado: '¿Qué es la delegación imperfecta?', opciones: ['Aquella en que el acreedor no libera al deudor primitivo y el delegado se suma como nuevo deudor', 'Aquella en que el acreedor libera al deudor primitivo', 'Una forma de endoso en garantía', 'La cesión de un crédito sin notificación'], correcta: 0, explicacion: 'En el fondo es una cesión de deuda. La perfecta es novación.' },
      { tipo: 'alternativas', seccion: 'sandoval-nocion', enunciado: 'Según Sandoval, ¿quién creó la teoría general de los títulos de crédito?', opciones: ['Vivante, en su Tratado de 1896', 'Einert', 'Bolaffio', 'Ascarelli'], correcta: 0, explicacion: 'Extrajo de la letra de cambio los caracteres comunes a todos los títulos.' },
      { tipo: 'vf', seccion: 'sandoval-nocion', enunciado: 'Para Sandoval, el título de crédito puede ser objeto de prenda, usufructo y embargo porque funciona como cosa mueble.', respuesta: true, explicacion: 'Es el aspecto jurídico-real: el papel se vuelve una res nova.' },
      { tipo: 'alternativas', seccion: 'sandoval-nocion', enunciado: 'Según Sandoval, ¿qué derecho rige al documento como cosa y cuál a la relación obligacional incorporada?', opciones: ['El documento, el derecho común; la relación incorporada, el derecho comercial', 'Ambos, el derecho comercial', 'Ambos, el derecho común', 'El documento, el derecho comercial; la relación, el derecho civil'], correcta: 0, explicacion: 'El régimen comercial de circulación puede legitimar incluso al portador de un título robado.' },
      { tipo: 'vf', seccion: 'sandoval-nocion', enunciado: 'La pérdida o el robo del título producen una extinción relativa del derecho sobre el título, porque un decreto judicial puede «desincorporar» la prestación.', respuesta: true, explicacion: 'La destrucción, en cambio, produce extinción absoluta.' },
      { tipo: 'alternativas', seccion: 'sandoval-nocion', enunciado: '¿Cuál NO es un rasgo del efecto de comercio según Sandoval?', opciones: ['Tener curso forzoso', 'Ser negociable por procedimientos rápidos', 'Representar un crédito en dinero', 'Ser pagadero a corto plazo'], correcta: 0, explicacion: 'El curso forzoso es de la moneda, no del efecto de comercio.' },
      { tipo: 'alternativas', seccion: 'mercaderias', enunciado: '¿Qué permite un título representativo de mercaderías?', opciones: ['Transferir las mercaderías transfiriendo el documento, sin título y modo del derecho común', 'Cobrar una suma de dinero al porteador', 'Asegurar las mercaderías contra robo', 'Eximir del pago de aranceles'], correcta: 0, explicacion: 'Poseer el título equivale a poseer las mercaderías.' },
      { tipo: 'vf', seccion: 'mercaderias', enunciado: 'Si a la carta de porte le falta una mención del art. 175 CCom, deja de producir efectos.', respuesta: false, explicacion: 'No es un título formal: lo omitido puede probarse por cualquier medio (art. 177).' },
      { tipo: 'alternativas', seccion: 'mercaderias', enunciado: '¿Qué excepciones admite el art. 178 CCom contra el tenor de la carta de porte, una vez reconocida la firma?', opciones: ['Falsedad, omisión o error involuntario', 'Cualquier excepción del contrato de transporte', 'Solo la prescripción', 'Ninguna'], correcta: 0, explicacion: 'Según Sandoval.' },
      { tipo: 'alternativas', seccion: 'mercaderias', enunciado: 'Por el art. 1020 N° 2 CCom, si el conocimiento de embarque se transfirió a un tercero de buena fe que confió en la descripción de la carga…', opciones: ['El transportador no puede probar en contrario', 'El transportador puede probar que recibió otra carga', 'El tercero debe probar la carga', 'El conocimiento se convierte en seawaybill'], correcta: 0, explicacion: 'Muestra su carácter de título de crédito (autonomía).' },
      { tipo: 'vf', seccion: 'mercaderias', enunciado: 'El seawaybill es un título de crédito representativo de mercaderías que circula por endoso.', respuesta: false, explicacion: 'No es negociable: se transfiere por cesión de créditos y carece de función dispositiva.' },
      { tipo: 'alternativas', seccion: 'mercaderias', enunciado: '¿Cómo se transfiere el certificado de depósito (warrant) según Sandoval?', opciones: ['Se emite nominativo e inscrito, pero se transfiere por endoso con firma, fecha e identificación del endosatario', 'Por simple entrega, como un título al portador', 'Por endoso en blanco', 'Solo por escritura pública'], correcta: 0, explicacion: 'Por eso se dice que son «nominativos y también a la orden».' },
      { tipo: 'alternativas', seccion: 'electronicos', enunciado: 'Para Sandoval, ¿qué ocurre realmente con los títulos electrónicos?', opciones: ['Cambia el soporte: el derecho se registra en una anotación con valor constitutivo', 'El derecho desaparece y queda solo la obligación civil', 'Se vuelven títulos impropios', 'Pierden toda protección legal'], correcta: 0, explicacion: 'Más que desmaterialización, cambio de soporte.' },
      { tipo: 'alternativas', seccion: 'electronicos', enunciado: '¿Qué ley chilena es, según Sandoval, el primer atisbo de la representación electrónica de valores?', opciones: ['Ley 18.876 (1989), sobre depósito y custodia de valores', 'Ley 18.092', 'Ley 19.983', 'Ley 18.010'], correcta: 0, explicacion: 'Permite transferir títulos depositados por comunicación escrita o electrónica.' },
      { tipo: 'vf', seccion: 'electronicos', enunciado: 'El truncamiento consiste en emitir el título en papel pero inmovilizarlo, de modo que circule o se cobre con su imagen o datos electrónicos.', respuesta: true, explicacion: 'Se aplica al cheque y a otros efectos de comercio.' },
      { tipo: 'oral', seccion: 'mercaderias', enunciado: 'Explique los títulos representativos de mercaderías.', puntos: ['Función: movilizar mercaderías sin título y modo; poseer el título equivale a poseerlas.', 'Carta de porte (arts. 173 a 178 CCom): causada, no formal, nominativa, a la orden o al portador; funciones probatoria, constitutiva y dispositiva.', 'Conocimiento de embarque (art. 977): Reglas de Hamburgo; firma electrónica admitida; art. 1020 N° 2 protege al tercero de buena fe.', 'Seawaybill: no es título; multimodal: título si es negociable.', 'Warrant (Ley 18.690): causado, nominativo que se endosa; ver Unidad 4.'], norma: 'Arts. 173-178, 977 y 1020 CCom; Ley 18.690' },
      { tipo: 'oral', seccion: 'sandoval-nocion', enunciado: 'Explique el aspecto jurídico-real del título de crédito según Sandoval.', puntos: ['El papel se vuelve una cosa nueva (res nova) con el valor del derecho incorporado.', 'Puede venderse, darse en prenda o usufructo, heredarse, depositarse y embargarse.', 'Derecho sobre el título (derecho común) vs. derecho del título (derecho comercial).', 'Extinción absoluta (destrucción) y relativa (pérdida, robo, extravío con decreto judicial).', 'Los derechos emergentes nacen nuevos en cada portador: no hay excepciones personales.'], norma: 'Sandoval, tomo II, §§ 19-22' }
    ]
  });
})();
