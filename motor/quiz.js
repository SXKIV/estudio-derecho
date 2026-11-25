/* =========================================================
   quiz.js — modos de práctica: alternativas, verdadero/falso, relacionar,
   repaso espaciado, modo Kahoot y modo oral.
   Tipos de pregunta que entiende (definidos en cada unidad):
     { tipo:'alternativas', enunciado, opciones:[...], correcta:<índice>, explicacion }
     { tipo:'vf', enunciado, respuesta:true|false, explicacion }
     { tipo:'relacionar', enunciado, pares:[[izq, der], ...], explicacion }
     { tipo:'oral', enunciado, puntos:[...], norma }
   ========================================================= */
(function () {
  'use strict';
  var E = window.Estudio, U = E.util, esc = U.esc, $ = U.$, $$ = U.$$;

  function registros() { return E.datos().preguntas; }

  var Quiz = {};

  /* ---------- Selector de modo ---------- */
  Quiz.selector = function (c, preguntas, opts) {
    opts = opts || {};
    var res = SRS.resumen(preguntas, registros());
    var cuenta = function (t) { return preguntas.filter(function (q) { return q.tipo === t; }).length; };
    var modos = [
      ['srs', '🔁', 'Repaso inteligente', res.vencidas + ' pendientes · ' + res.nueva + ' nuevas. Mezcla tipos y prioriza lo que fallas.'],
      ['alternativas', '🅰️', 'Alternativas', cuenta('alternativas') + ' preguntas de selección múltiple.'],
      ['vf', '✔️', 'Verdadero o falso', cuenta('vf') + ' afirmaciones para justificar.'],
      ['relacionar', '🔗', 'Relacionar', cuenta('relacionar') + ' ejercicios de unir conceptos.'],
      ['definicion', '📘', 'Definiciones', cuenta('definicion') + ' conceptos del glosario para definir de memoria.']
    ];
    c.innerHTML = '<div class="modos">' + modos.map(function (m) {
      return '<button class="modo" data-modo="' + m[0] + '"><span class="ico">' + m[1] + '</span><b>' + m[2] + '</b><span>' + m[3] + '</span></button>';
    }).join('') + '</div><div class="fila" style="display:flex;gap:10px;align-items:center;margin-bottom:14px"><label class="small" for="cant">Preguntas por sesión</label><select id="cant" style="border:1px solid var(--line);border-radius:8px;padding:6px"><option>10</option><option selected>15</option><option>25</option><option value="999">Todas</option></select></div><div id="zona-sesion"></div>';
    $$('.modo', c).forEach(function (b) {
      b.onclick = function () {
        var modo = b.dataset.modo, n = +$('#cant', c).value, lista;
        if (modo === 'srs') lista = SRS.seleccionar(preguntas, registros(), n);
        else lista = SRS.seleccionar(preguntas.filter(function (q) { return q.tipo === modo; }), registros(), n);
        if (!lista.length) { U.toast('No hay preguntas de ese tipo todavía'); return; }
        Quiz.sesion($('#zona-sesion', c), lista, { titulo: b.querySelector('b').textContent, alVolver: function () { Quiz.selector(c, preguntas, opts); } });
        $('#zona-sesion', c).scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    });
    if (opts.soloSrs && res.vencidas + res.nueva > 0) { /* el usuario elige; no se inicia solo */ }
  };

  /* ---------- Sesión de práctica ---------- */
  Quiz.sesion = function (c, lista, opts) {
    opts = opts || {};
    var i = 0, resultados = [];
    function siguiente() {
      if (i >= lista.length) return fin();
      var q = lista[i];
      c.innerHTML = '<div class="sesion-top"><span class="etiqueta azul">' + esc(opts.titulo || 'Práctica') + '</span><span class="small">Pregunta ' + (i + 1) + ' de ' + lista.length + '</span></div>' +
        '<div class="barra" style="max-width:860px;height:6px;margin-bottom:14px"><i class="dom" style="width:' + (100 * i / lista.length) + '%;background:var(--acento)"></i></div><div class="pregunta" id="caja-q"></div>';
      var caja = $('#caja-q', c);
      var pintor = { alternativas: pintarAlternativas, vf: pintarVF, relacionar: pintarRelacionar, oral: pintarOralCorto, definicion: pintarDefinicion }[q.tipo];
      pintor(caja, q, function (resultado) {
        E.registrarRespuesta(q.id, resultado);
        resultados.push({ q: q, r: resultado });
        var b = U.el('<div style="margin-top:16px"><button class="btn">' + (i + 1 < lista.length ? 'Siguiente →' : 'Ver resultado') + '</button></div>');
        caja.appendChild(b);
        b.querySelector('button').onclick = function () { i++; siguiente(); };
        b.querySelector('button').focus({ preventScroll: true });
      });
    }
    function fin() {
      var bien = resultados.filter(function (x) { return x.r === 'bien'; }).length;
      var mal = resultados.filter(function (x) { return x.r !== 'bien'; });
      var pct = Math.round(100 * bien / resultados.length);
      c.innerHTML = '<div class="panel" style="max-width:860px"><div class="kicker">Resultado</div><div class="big">' + bien + ' / ' + resultados.length + '</div>' +
        '<p class="lead">' + (pct >= 85 ? '¡Excelente! Esa materia está firme.' : pct >= 60 ? 'Bien. Repasa las que fallaste antes de seguir.' : 'Vuelve a leer las secciones de las preguntas falladas y repite.') + '</p>' +
        (mal.length ? '<h3>Para repasar</h3><ul>' + mal.map(function (x) {
          return '<li>' + esc(x.q.enunciado) + (x.q.seccion ? ' — <a href="#/u/' + x.q.unidad + '/contenido/' + x.q.seccion + (x.q.sub ? '/' + x.q.sub : '') + '">ver sección</a>' : '') + '</li>';
        }).join('') + '</ul>' : '') +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">' + (mal.length ? '<button class="btn" id="rep-mal">Repetir las falladas</button>' : '') + '<button class="btn sec" id="volver">Volver</button></div></div>';
      if ($('#rep-mal', c)) $('#rep-mal', c).onclick = function () { Quiz.sesion(c, mal.map(function (x) { return x.q; }), opts); };
      $('#volver', c).onclick = function () { if (opts.alVolver) opts.alVolver(); else c.innerHTML = ''; };
    }
    siguiente();
  };

  function explicacion(caja, ok, q, extra) {
    caja.appendChild(U.el('<div class="explicacion ' + (ok ? 'ok' : 'mal') + '"><b>' + (ok ? '✓ Correcto.' : '✗ No es correcto.') + '</b> ' + (extra || '') + ' ' + esc(q.explicacion || '') +
      (q.seccion ? ' <a href="#/u/' + q.unidad + '/contenido/' + q.seccion + (q.sub ? '/' + q.sub : '') + '">Ver sección →</a>' : '') + '</div>'));
  }

  function pintarAlternativas(caja, q, listo) {
    var orden = SRS.mezclar(q.opciones.map(function (_, k) { return k; }));
    caja.innerHTML = '<div class="kicker">Alternativas</div><div class="enunciado">' + esc(q.enunciado) + '</div><div class="alternativas">' +
      orden.map(function (k, n) { return '<button class="alt" data-k="' + k + '"><b>' + 'ABCDE'.charAt(n) + ')</b> ' + esc(q.opciones[k]) + '</button>'; }).join('') + '</div>';
    $$('.alt', caja).forEach(function (b) {
      b.onclick = function () {
        var ok = +b.dataset.k === q.correcta;
        $$('.alt', caja).forEach(function (x) { x.disabled = true; if (+x.dataset.k === q.correcta) x.classList.add('correcta'); });
        if (!ok) b.classList.add('incorrecta');
        explicacion(caja, ok, q);
        listo(ok ? 'bien' : 'mal');
      };
    });
  }

  function pintarVF(caja, q, listo) {
    caja.innerHTML = '<div class="kicker">Verdadero o falso</div><div class="enunciado">' + esc(q.enunciado) + '</div><div class="alternativas" style="grid-template-columns:1fr 1fr"><button class="alt" data-v="1"><b>Verdadero</b></button><button class="alt" data-v="0"><b>Falso</b></button></div>';
    $$('.alt', caja).forEach(function (b) {
      b.onclick = function () {
        var eleg = b.dataset.v === '1', ok = eleg === q.respuesta;
        $$('.alt', caja).forEach(function (x) { x.disabled = true; if ((x.dataset.v === '1') === q.respuesta) x.classList.add('correcta'); });
        if (!ok) b.classList.add('incorrecta');
        explicacion(caja, ok, q, 'Es ' + (q.respuesta ? 'verdadero' : 'falso') + '.');
        listo(ok ? 'bien' : 'mal');
      };
    });
  }

  function pintarRelacionar(caja, q, listo) {
    var izq = q.pares.map(function (p, k) { return { t: p[0], k: k }; });
    var der = SRS.mezclar(q.pares.map(function (p, k) { return { t: p[1], k: k }; }));
    caja.innerHTML = '<div class="kicker">Relacionar</div><div class="enunciado">' + esc(q.enunciado) + '</div><p class="small">Toca un elemento de la izquierda y luego su pareja de la derecha.</p><div class="relacionar"><div class="col">' +
      izq.map(function (x) { return '<button class="rel" data-l="' + x.k + '">' + esc(x.t) + '</button>'; }).join('') + '</div><div class="col">' +
      der.map(function (x) { return '<button class="rel" data-r="' + x.k + '">' + esc(x.t) + '</button>'; }).join('') + '</div></div>';
    var sel = null, errores = 0, hechos = 0;
    $$('[data-l]', caja).forEach(function (b) {
      b.onclick = function () { if (b.classList.contains('hecho')) return; $$('[data-l]', caja).forEach(function (x) { x.classList.remove('sel'); }); b.classList.add('sel'); sel = b; };
    });
    $$('[data-r]', caja).forEach(function (b) {
      b.onclick = function () {
        if (!sel || b.classList.contains('hecho')) return;
        if (sel.dataset.l === b.dataset.r) {
          sel.classList.remove('sel'); sel.classList.add('hecho'); b.classList.add('hecho'); sel = null; hechos++;
          if (hechos === q.pares.length) {
            var r = errores === 0 ? 'bien' : errores <= 1 ? 'parcial' : 'mal';
            explicacion(caja, r === 'bien', q, errores ? '(' + errores + ' intento' + (errores > 1 ? 's' : '') + ' errado' + (errores > 1 ? 's' : '') + ')' : '');
            listo(r);
          }
        } else {
          errores++; b.classList.remove('error'); void b.offsetWidth; b.classList.add('error');
        }
      };
    });
  }

  function pintarOralCorto(caja, q, listo) {
    caja.innerHTML = '<div class="kicker">Pregunta oral</div><div class="enunciado">' + esc(q.enunciado) + '</div><p class="muted">Respóndela en voz alta y luego mira la pauta.</p><button class="btn" id="ver">Ver pauta</button>';
    $('#ver', caja).onclick = function () { pautaYAutoeval(caja, q, listo); };
  }
  function pintarDefinicion(caja, q, listo) {
    caja.innerHTML = '<div class="kicker">Glosario · define con tus palabras o de memoria</div><div class="enunciado">' + esc(q.termino) + '</div><p class="muted">Dilo en voz alta y luego compara con la definición del material.</p><button class="btn" id="ver">Ver definición</button>';
    $('#ver', caja).onclick = function () {
      this.remove();
      caja.appendChild(U.el('<div class="explicacion"><b>Definición</b><p style="margin:6px 0">' + (q.literal ? '«' + esc(q.definicion) + '»' : esc(q.definicion)) + '</p>' + (q.fuente ? '<p class="small"><b>Fuente:</b> ' + esc(q.fuente) + '</p>' : '') + '</div>'));
      var ev = U.el('<div><p class="small" style="margin-top:12px"><b>¿La sabías?</b></p><div class="autoeval"><button class="btn" style="background:var(--green)" data-r="bien">Sí, completa</button><button class="btn" style="background:#d79b12" data-r="parcial">A medias</button><button class="btn" style="background:var(--red)" data-r="mal">No</button></div></div>');
      caja.appendChild(ev);
      $$('[data-r]', ev).forEach(function (x) { x.onclick = function () { ev.remove(); listo(x.dataset.r); }; });
    };
  }
  function pautaYAutoeval(caja, q, listo) {
    var b = $('#ver', caja); if (b) b.remove();
    caja.appendChild(U.el('<div class="explicacion"><b>Pauta de respuesta</b><ul class="puntos-clave">' + q.puntos.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
      (q.norma ? '<p class="small"><b>Normas:</b> ' + esc(q.norma) + '</p>' : '') + (q.seccion ? '<p class="small"><a href="#/u/' + q.unidad + '/contenido/' + q.seccion + (q.sub ? '/' + q.sub : '') + '">Ver sección →</a></p>' : '') + '</div>'));
    var ev = U.el('<div><p class="small" style="margin-top:12px"><b>¿Cómo te fue?</b></p><div class="autoeval"><button class="btn" style="background:var(--green)" data-r="bien">Lo dije completo</button><button class="btn" style="background:#d79b12" data-r="parcial">Parcial</button><button class="btn" style="background:var(--red)" data-r="mal">No lo sabía</button></div></div>');
    caja.appendChild(ev);
    $$('[data-r]', ev).forEach(function (x) { x.onclick = function () { ev.remove(); listo(x.dataset.r); }; });
  }

  /* ---------- Modo oral con cronómetro ---------- */
  Quiz.oral = function (c, orales, opts) {
    if (!orales.length) { c.innerHTML = '<p class="muted">Aún no hay preguntas orales aquí.</p>'; return; }
    var lista = opts.simulacro ? orales : SRS.seleccionar(orales, registros(), orales.length);
    var i = 0, intervalo = null;
    E.alSalir(function () { clearInterval(intervalo); });
    function pintar() {
      clearInterval(intervalo);
      if (i >= lista.length) { c.innerHTML = '<div class="panel"><h2>¡Terminaste las preguntas orales!</h2><button class="btn" id="otra">Empezar de nuevo</button></div>'; $('#otra', c).onclick = function () { i = 0; pintar(); }; return; }
      var q = lista[i];
      c.innerHTML = '<div class="sesion-top"><span class="etiqueta azul">Oral</span><span class="small">' + (i + 1) + ' de ' + lista.length + '</span></div><div class="pregunta" id="caja-o">' +
        '<div class="kicker">Explica en voz alta</div><div class="enunciado">' + esc(q.enunciado) + '</div>' +
        '<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap"><div class="oral-reloj" id="reloj">2:00</div>' +
        '<select id="dur" style="border:1px solid var(--line);border-radius:8px;padding:6px"><option value="60">1 min</option><option value="120" selected>2 min</option><option value="180">3 min</option></select>' +
        '<button class="btn" id="go">▶ Comenzar</button><button class="btn sec" id="ver">Ver pauta</button><button class="btn ghost" id="salt">Saltar</button></div>' +
        '<p class="small" style="margin-top:10px">Estructura sugerida: concepto → norma → elementos o requisitos → efectos → ejemplo o caso.</p></div>';
      var caja = $('#caja-o', c), restante = 120;
      function mostrar() { var m = Math.floor(Math.max(restante, 0) / 60), s = Math.max(restante, 0) % 60; $('#reloj', c).textContent = m + ':' + (s < 10 ? '0' : '') + s; $('#reloj', c).style.color = restante <= 10 ? 'var(--red)' : ''; }
      $('#dur', c).onchange = function () { restante = +this.value; mostrar(); };
      $('#go', c).onclick = function () {
        this.disabled = true; $('#dur', c).disabled = true;
        intervalo = setInterval(function () { restante--; mostrar(); if (restante <= 0) { clearInterval(intervalo); U.toast('¡Tiempo!'); } }, 1000);
      };
      $('#salt', c).onclick = function () { i++; pintar(); };
      $('#ver', c).onclick = function () {
        clearInterval(intervalo); $('#go', c).disabled = true; $('#salt', c).remove();
        pautaYAutoeval(caja, q, function (r) {
          E.registrarRespuesta(q.id, r);
          var b = U.el('<div style="margin-top:14px"><button class="btn">Siguiente →</button></div>');
          caja.appendChild(b); b.querySelector('button').onclick = function () { i++; pintar(); };
        });
      };
    }
    pintar();
  };

  /* ---------- Modo Kahoot ---------- */
  Quiz.kahoot = function (c, lista, opts) {
    if (!lista.length) { c.innerHTML = '<p class="muted">No hay preguntas para jugar.</p>'; return; }
    var SEG = 20, i = 0, puntos = 0, racha = 0, mejorRacha = 0, aciertos = 0, timer = null;
    var formas = ['▲', '◆', '●', '■'];
    E.alSalir(function () { clearInterval(timer); });
    function pregunta() {
      clearInterval(timer);
      if (i >= lista.length) return fin();
      var q = lista[i], opciones, correcta;
      if (q.tipo === 'vf') { opciones = [{ t: 'Verdadero', k: 1 }, { t: 'Falso', k: 0 }]; correcta = q.respuesta ? 1 : 0; }
      else { opciones = SRS.mezclar(q.opciones.map(function (t, k) { return { t: t, k: k }; })); correcta = q.correcta; }
      c.innerHTML = '<div class="kahoot"><div class="k-top"><span>' + (i + 1) + ' / ' + lista.length + '</span><span>' + (racha >= 2 ? '<span class="racha">🔥 Racha ' + racha + '</span> ' : '') + puntos + ' pts</span></div>' +
        '<div class="k-tiempo"><i id="kt" style="width:100%"></i></div><div class="k-preg">' + esc(q.enunciado) + '</div><div class="k-grid">' +
        opciones.map(function (o, n) { return '<button class="k-alt k' + (q.tipo === 'vf' ? (o.k ? 1 : 0) : n) + '" data-k="' + o.k + '"><span class="k-forma">' + formas[q.tipo === 'vf' ? (o.k ? 1 : 0) : n] + '</span>' + esc(o.t) + '</button>'; }).join('') +
        '</div><div id="kfb"></div></div>';
      var inicio = Date.now(), respondida = false;
      timer = setInterval(function () {
        var pasado = (Date.now() - inicio) / 1000, resto = Math.max(0, SEG - pasado);
        var barra = $('#kt', c); if (barra) barra.style.width = (100 * resto / SEG) + '%';
        if (resto <= 0) responder(null);
      }, 100);
      $$('.k-alt', c).forEach(function (b) { b.onclick = function () { responder(+b.dataset.k); }; });
      function responder(k) {
        if (respondida) return; respondida = true; clearInterval(timer);
        var resto = Math.max(0, SEG - (Date.now() - inicio) / 1000);
        var ok = k === correcta, gan = 0;
        if (ok) { racha++; aciertos++; mejorRacha = Math.max(mejorRacha, racha); gan = Math.round(500 + 500 * resto / SEG) + (racha >= 2 ? Math.min(racha - 1, 5) * 100 : 0); puntos += gan; }
        else racha = 0;
        E.registrarRespuesta(q.id, ok ? 'bien' : 'mal');
        $$('.k-alt', c).forEach(function (b) { b.disabled = true; if (+b.dataset.k !== correcta) b.classList.add('apagada'); });
        $('#kfb', c).innerHTML = '<div class="k-fb ' + (ok ? 'ok' : 'mal') + '">' + (ok ? '✓ ¡Correcto! +' + gan + ' pts' : k === null ? '⏱ Se acabó el tiempo' : '✗ Incorrecto') +
          '<div style="font-weight:600;margin-top:6px;font-size:14.5px">' + esc(q.explicacion || '') + '</div></div><div style="margin-top:12px;text-align:right"><button class="btn" style="background:#fff;color:#2b1260" id="ksig">Siguiente →</button></div>';
        $('#ksig', c).onclick = function () { i++; pregunta(); };
      }
    }
    function fin() {
      var record = E.guardarRecord('kahoot', puntos);
      c.innerHTML = '<div class="kahoot" style="text-align:center"><div class="k-top" style="justify-content:center">Resultado final</div><div style="font-size:64px;font-weight:900;margin:10px 0">' + puntos + '</div>' +
        '<p style="font-size:18px">' + aciertos + ' de ' + lista.length + ' correctas · mejor racha ' + mejorRacha + '</p>' + (record ? '<p class="racha" style="display:inline-block;font-weight:900">🏆 ¡Nuevo récord!</p>' : '') +
        '<div style="margin-top:16px"><button class="btn" style="background:var(--yellow);color:#2b1260" id="kotra">Jugar otra vez</button></div></div>';
      $('#kotra', c).onclick = function () { Quiz.kahoot(c, SRS.mezclar(lista.slice()), opts); };
    }
    pregunta();
  };

  window.Quiz = Quiz;
})();
