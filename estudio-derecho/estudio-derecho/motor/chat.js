/* =========================================================
   chat.js — asistente de la materia. NO usa inteligencia artificial ni internet:
   busca en el texto de la propia página (secciones, pautas orales y explicaciones)
   y devuelve los fragmentos más pertinentes con un enlace a su sección.
   ========================================================= */
(function () {
  'use strict';
  var VACIAS = ('a al algo algun alguna como con cual cuales cuando de del desde donde el ella ellas ellos en entre era es esa ese eso esta este esto estos fue ha hay la las le les lo los mas me mi muy no nos o para pero por porque que quien se ser si sin sobre son su sus tambien te tiene tu un una uno unos y ya yo cual explica explicame dime defina define concepto significa diferencia entre favor puedes podrias hola quiero saber pasa ocurre sirve').split(' ');
  var setVacias = {}; VACIAS.forEach(function (w) { setVacias[w] = 1; });

  function normalizar(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9ñ°\s]/g, ' '); }
  function raiz(w) {
    // reducción muy simple: plurales y género
    if (w.length > 5) w = w.replace(/(es|s)$/, '');
    if (w.length > 6) w = w.replace(/(a|o)$/, '');
    return w;
  }
  function tokens(s) {
    return normalizar(s).split(/\s+/).filter(function (w) { return w && !setVacias[w] && (w.length > 1 || /\d/.test(w)); }).map(raiz);
  }

  var indice = [], df = {}, promedio = 0, E = null, sinonimos = {};

  function textoPlano(html) {
    var d = document.createElement('div');
    d.innerHTML = html.replace(/<\/(td|th)>/g, ' · </$1>').replace(/<\/(li|p|h3|h4|div)>/g, ' </$1>');
    return d;
  }

  function construir() {
    indice = [];
    E.unidades.forEach(function (u) {
      u.secciones.forEach(function (s) {
        var raizDom = textoPlano(s.html);
        var bloques = raizDom.querySelectorAll('p, li, tr, .callout, .cita, h3, h4, figcaption');
        var vistos = [];
        Array.prototype.forEach.call(bloques, function (b) {
          if (b.closest('.callout') && b.tagName !== 'DIV' && !b.classList.contains('callout')) return; // el callout se indexa completo
          var t = b.textContent.replace(/\s+/g, ' ').trim();
          if (t.length < 25 || vistos.indexOf(t) >= 0) return;
          vistos.push(t);
          indice.push({ texto: t, u: u, s: s, tipo: 'seccion' });
        });
      });
      u.preguntas.forEach(function (q) {
        if (q.tipo === 'oral') indice.push({ texto: q.enunciado + ' — ' + q.puntos.join(' · ') + (q.norma ? ' (' + q.norma + ')' : ''), u: u, s: seccionDe(u, q.seccion), tipo: 'oral' });
        else if (q.explicacion) indice.push({ texto: q.explicacion, u: u, s: seccionDe(u, q.seccion), tipo: 'expl' });
      });
    });
    df = {}; var suma = 0;
    indice.forEach(function (d) {
      d.tk = tokens(d.texto + ' ' + d.s.titulo + ' ' + d.s.titulo);
      suma += d.tk.length;
      var unicos = {}; d.tk.forEach(function (t) { unicos[t] = 1; });
      Object.keys(unicos).forEach(function (t) { df[t] = (df[t] || 0) + 1; });
    });
    promedio = suma / Math.max(1, indice.length);
  }
  function seccionDe(u, id) { return u.secciones.filter(function (s) { return s.id === id; })[0] || { id: '', titulo: u.titulo }; }

  function expandir(q) {
    var t = normalizar(q);
    Object.keys(sinonimos).forEach(function (k) { if ((' ' + t + ' ').indexOf(' ' + normalizar(k).trim() + ' ') >= 0) t += ' ' + sinonimos[k]; });
    return tokens(t);
  }

  function buscar(q) {
    var qt = expandir(q); if (!qt.length) return [];
    var N = indice.length, k1 = 1.4, b = 0.7;
    var res = indice.map(function (d) {
      var tf = {}; d.tk.forEach(function (t) { tf[t] = (tf[t] || 0) + 1; });
      var score = 0, cubiertos = 0;
      qt.forEach(function (t) {
        var f = tf[t] || 0;
        if (!f) { // coincidencia por prefijo (p. ej. "capitaliz" ~ "capitalizacion")
          if (t.length >= 5) Object.keys(tf).forEach(function (w) { if (w.indexOf(t.slice(0, 6)) === 0) f += tf[w] * 0.6; });
        }
        if (f) {
          cubiertos++;
          var idf = Math.log(1 + (N - (df[t] || 0) + 0.5) / ((df[t] || 0) + 0.5));
          score += idf * (f * (k1 + 1)) / (f + k1 * (1 - b + b * d.tk.length / promedio));
        }
      });
      score *= (0.5 + cubiertos / qt.length);
      if (d.tipo === 'oral') score *= 1.15;
      return { d: d, score: score };
    }).filter(function (x) { return x.score > 0; }).sort(function (a, b) { return b.score - a.score; });
    // máximo 3 resultados de secciones distintas
    var salida = [], usadas = {};
    for (var i = 0; i < res.length && salida.length < 3; i++) {
      var clave = res[i].d.u.id + ':' + res[i].d.s.id + ':' + res[i].d.tipo;
      if (usadas[clave]) continue;
      usadas[clave] = 1; salida.push(res[i]);
    }
    return salida;
  }

  function resaltar(texto, q) {
    var esc = E.util.esc, t = esc(texto);
    var palabras = normalizar(q).split(/\s+/).filter(function (w) { return w.length > 3 && !setVacias[w]; });
    palabras.forEach(function (w) {
      var base = w.slice(0, Math.max(4, w.length - 2)).replace(/[.*+?^${}()|[\]\\]/g, '');
      var patron = base.split('').map(function (ch) { return '[' + ch + ({ a: 'á', e: 'é', i: 'í', o: 'ó', u: 'úü', n: 'ñ' }[ch] || '') + ch.toUpperCase() + ']'; }).join('');
      t = t.replace(new RegExp('(' + patron + '[a-záéíóúñ]*)', 'g'), '<mark>$1</mark>');
    });
    return t;
  }
  function recortar(t, max) { return t.length > max ? t.slice(0, max).replace(/\s\S*$/, '') + '…' : t; }

  var Chat = {
    iniciar: function (estudio) {
      E = estudio; sinonimos = (E.materia.sinonimos || {});
      construir();
      var esc = E.util.esc;
      var burbuja = E.util.el('<button class="chat-burbuja" title="Pregúntale a la materia" aria-label="Abrir asistente">💬</button>');
      var panel = E.util.el('<div class="chat-panel oculto"><div class="chat-cab"><div><b>Asistente de ' + esc(E.materia.nombreCorto || E.materia.nombre) + '</b><small>Responde solo con el contenido de esta página · sin IA</small></div><button class="iconbtn" id="chat-x">✕</button></div>' +
        '<div class="chat-msgs" id="chat-msgs"></div><form class="chat-form" id="chat-f"><input id="chat-in" placeholder="Ej: ¿qué es el anatocismo?" autocomplete="off"><button class="btn">Enviar</button></form></div>');
      document.body.appendChild(burbuja); document.body.appendChild(panel);
      var msgs = panel.querySelector('#chat-msgs');
      function agregar(html, quien) { var m = E.util.el('<div class="msg ' + quien + '">' + html + '</div>'); msgs.appendChild(m); msgs.scrollTop = msgs.scrollHeight; return m; }
      var sugeridas = E.materia.preguntasChat || [];
      agregar('Hola 👋 Busco en el contenido de esta página y te muestro lo que dice, con el enlace a su sección. No invento respuestas: si algo no está en la página, te lo digo.' +
        (sugeridas.length ? '<div class="sugerencias" style="margin-top:8px">' + sugeridas.map(function (s) { return '<button type="button">' + esc(s) + '</button>'; }).join('') + '</div>' : ''), 'bot');
      msgs.addEventListener('click', function (e) {
        if (e.target.matches('.sugerencias button')) { preguntar(e.target.textContent); }
        if (e.target.matches('.frag a')) { if (window.innerWidth < 700) panel.classList.add('oculto'); }
      });
      function preguntar(q) {
        q = q.trim(); if (!q) return;
        agregar(esc(q), 'yo');
        var r = buscar(q);
        if (!r.length || r[0].score < 1.2) {
          agregar('No encontré eso en el contenido de la página. Prueba con otras palabras (por ejemplo, el nombre de la institución o el número del artículo) o revisa el índice de la unidad.', 'bot');
          return;
        }
        agregar('Esto es lo que dice la página:' + r.map(function (x) {
          var d = x.d, etiqueta = d.tipo === 'oral' ? 'Pauta oral' : d.tipo === 'expl' ? 'Explicación de pregunta' : 'Contenido';
          return '<div class="frag"><div class="small"><b>' + esc(d.u.numero + '. ' + d.u.titulo) + '</b> › ' + esc(d.s.titulo) + ' · ' + etiqueta + '</div>' + resaltar(recortar(d.texto, 520), q) +
            (d.s.id ? '<div><a href="#/u/' + d.u.id + '/contenido/' + d.s.id + '">Ir a la sección →</a></div>' : '') + '</div>';
        }).join(''), 'bot');
      }
      burbuja.onclick = function () { panel.classList.toggle('oculto'); if (!panel.classList.contains('oculto')) panel.querySelector('#chat-in').focus(); };
      panel.querySelector('#chat-x').onclick = function () { panel.classList.add('oculto'); };
      panel.querySelector('#chat-f').onsubmit = function (e) { e.preventDefault(); var i = panel.querySelector('#chat-in'); preguntar(i.value); i.value = ''; };
    },
    buscar: function (q) { return buscar(q); }
  };
  window.Chat = Chat;
})();
