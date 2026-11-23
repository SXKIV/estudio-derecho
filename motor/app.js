/* =========================================================
   app.js — el motor: carga la materia, dibuja la página y lleva el progreso.
   No hay que tocar este archivo para agregar una materia nueva:
   basta con crear materias/<id>/materia.js y sus unidades (ver CLAUDE.md).
   ========================================================= */
(function () {
  'use strict';

  /* ---------------- utilidades ---------------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(sel, raiz) { return (raiz || document).querySelector(sel); }
  function $$(sel, raiz) { return Array.prototype.slice.call((raiz || document).querySelectorAll(sel)); }
  function el(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function toast(msg) {
    var t = el('<div class="toast">' + esc(msg) + '</div>');
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  }
  function modal(html, alCerrar) {
    var v = el('<div class="velo"><div class="modal" role="dialog" aria-modal="true">' + html + '</div></div>');
    document.body.appendChild(v);
    function cerrar() { v.remove(); if (alCerrar) alCerrar(); }
    v.addEventListener('click', function (e) { if (e.target === v) cerrar(); });
    return { nodo: v, cerrar: cerrar };
  }
  function cargarScript(src) {
    return new Promise(function (ok, mal) {
      var s = document.createElement('script');
      s.src = src; s.onload = ok; s.onerror = function () { mal(new Error('No se pudo cargar ' + src)); };
      document.body.appendChild(s);
    });
  }
  function hoy() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }

  /* ---------------- registro de contenido ---------------- */
  var E = window.Estudio = {
    materia: null,
    unidades: [],
    util: { esc: esc, $: $, $$: $$, el: el, toast: toast, modal: modal },
    registrarMateria: function (cfg) { E.materia = cfg; },
    registrarUnidad: function (u) {
      u.secciones = u.secciones || []; u.interactivos = u.interactivos || []; u.preguntas = u.preguntas || [];
      u.preguntas.forEach(function (q, i) { if (!q.id) q.id = u.id + '-q' + (i + 1); q.unidad = u.id; });
      u.glosario = u.glosario || [];
      generarPreguntasGlosario(u);
      E.unidades.push(u);
    },
    glosario: function () {
      return E.unidades.reduce(function (a, u) { return a.concat(u.glosario.map(function (g) { g.unidad = u; return g; })); }, [])
        .sort(function (x, y) { return x.termino.localeCompare(y.termino, 'es'); });
    },
    unidad: function (id) { return E.unidades.filter(function (u) { return u.id === id; })[0]; },
    todasLasPreguntas: function () { return E.unidades.reduce(function (a, u) { return a.concat(u.preguntas); }, []); },
    datos: function () { return Almacen.datos(E.materia.id); },
    registrarRespuesta: function (qid, resultado) {
      var d = E.datos(); if (!d) return;
      d.preguntas[qid] = SRS.responder(d.preguntas[qid], resultado);
      var k = hoy(); d.actividad[k] = (d.actividad[k] || 0) + 1;
      Almacen.guardar(E.materia.id, d);
      pintarLateral();
    },
    guardarRecord: function (clave, valor) {
      var d = E.datos(); if (!d) return false;
      var nuevo = !d.records[clave] || valor > d.records[clave];
      if (nuevo) { d.records[clave] = valor; Almacen.guardar(E.materia.id, d); }
      return nuevo;
    }
  };

  /* ---------------- glosario: preguntas automáticas ---------------- */
  function slug(t) { return String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  E.slug = slug;
  function generarPreguntasGlosario(u) {
    var g = u.glosario;
    g.forEach(function (t, i) {
      t.id = u.id + '-g-' + slug(t.termino);
      // 1) definición → concepto (alternativas), si hay suficientes términos para distractores
      if (g.length >= 4) {
        var otros = g.filter(function (x) { return x !== t; });
        var distractores = [];
        for (var k = 0; distractores.length < 3 && k < otros.length; k++) distractores.push(otros[(i * 7 + k * 3) % otros.length].termino);
        distractores = distractores.filter(function (d, j, arr) { return arr.indexOf(d) === j; });
        while (distractores.length < 3) { var cand = otros[(distractores.length * 5 + i) % otros.length].termino; if (distractores.indexOf(cand) < 0) distractores.push(cand); else break; }
        u.preguntas.push({ id: t.id + '-a', unidad: u.id, seccion: t.seccion, glosario: true, tipo: 'alternativas',
          enunciado: '¿Qué concepto se define así? «' + t.definicion + '»', opciones: [t.termino].concat(distractores), correcta: 0,
          explicacion: t.termino + (t.fuente ? ' (' + t.fuente + ').' : '.') });
      }
      // 2) concepto → definición (tarjeta: defínelo y autoevalúate)
      u.preguntas.push({ id: t.id + '-d', unidad: u.id, seccion: t.seccion, glosario: true, tipo: 'definicion',
        enunciado: 'Define: ' + t.termino, termino: t.termino, definicion: t.definicion, fuente: t.fuente, literal: t.literal });
    });
  }

  /* ---------------- arranque ---------------- */
  function parametro(n) { var m = new RegExp('[?&]' + n + '=([^&#]+)').exec(location.search); return m ? decodeURIComponent(m[1]) : null; }

  function iniciar() {
    var id = parametro('m');
    var reg = (window.REGISTRO_MATERIAS || []).filter(function (m) { return m.id === id; })[0];
    if (!reg) { location.href = 'index.html'; return; }
    var base = 'materias/' + reg.id + '/';
    cargarScript(base + 'materia.js').then(function () {
      var archivos = E.materia.unidades.filter(function (u) { return u.archivo; }).map(function (u) { return base + u.archivo; });
      return archivos.reduce(function (p, src) { return p.then(function () { return cargarScript(src); }); }, Promise.resolve());
    }).then(function () {
      // ordenar unidades según materia.js
      var orden = E.materia.unidades.map(function (u) { return u.id; });
      E.unidades.sort(function (a, b) { return orden.indexOf(a.id) - orden.indexOf(b.id); });
      if (E.materia.color) document.documentElement.style.setProperty('--acento', E.materia.color);
      document.title = E.materia.nombre + ' · Estudio Derecho';
      $('#nombre-materia').textContent = E.materia.nombre;
      asegurarPerfil(function () {
        pintarPerfil(); pintarLateral();
        window.addEventListener('hashchange', enrutar);
        enrutar();
        if (window.Chat) Chat.iniciar(E);
      });
    }).catch(function (e) {
      $('#vista').innerHTML = '<div class="callout red"><p><b>No se pudo cargar la materia.</b> ' + esc(e.message) + '</p></div>';
    });
  }

  /* ---------------- perfiles ---------------- */
  function asegurarPerfil(listo) {
    if (Almacen.perfilActivo() && Almacen.avisoVisto()) return listo();
    abrirPerfiles(listo, true);
  }
  function textoPrivacidad() {
    return '<div class="aviso-privacidad"><b>🔒 Privacidad:</b> esta página no recopila, no envía y no guarda en internet ningún dato personal. ' +
      'Tu perfil y tu progreso se guardan solo en este navegador y en este dispositivo. ' +
      'Usa un apodo como nombre de perfil. Para pasar tu avance a otro dispositivo, usa <b>Exportar progreso</b> e <b>Importar</b>.</div>';
  }
  function abrirPerfiles(listo, obligatorio) {
    var perfiles = Almacen.perfiles(), act = Almacen.perfilActivo();
    var html = '<div class="kicker">Perfiles</div><h2>' + (perfiles.length ? '¿Quién está estudiando?' : 'Crea tu perfil') + '</h2>' +
      textoPrivacidad() +
      '<div class="lista-perfiles">' + perfiles.map(function (p) {
        return '<button class="perfil-item' + (act && act.id === p.id ? ' activo' : '') + '" data-id="' + p.id + '"><span class="avatar" style="background:' + p.color + '">' + esc(p.nombre.charAt(0).toUpperCase()) + '</span>' + esc(p.nombre) + '</button>';
      }).join('') + '</div>' +
      '<form id="f-perfil" style="display:flex;gap:8px;margin-top:6px"><input id="nuevo-perfil" maxlength="24" placeholder="Apodo para un perfil nuevo" style="flex:1;border:1px solid var(--line);border-radius:9px;padding:10px;font-size:15px;font-family:inherit"><button class="btn">Crear</button></form>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px"><label class="btn ghost" style="display:inline-block">Importar progreso<input type="file" accept=".json,application/json" id="imp" hidden></label>' +
      (act ? '<button class="btn ghost" id="exp">Exportar progreso</button><button class="btn peligro" id="del">Eliminar perfil actual</button>' : '') + '</div>';
    var m = modal(html);
    function elegir(id) { Almacen.activar(id); Almacen.marcarAviso(); m.nodo.remove(); if (listo) listo(); else { pintarPerfil(); pintarLateral(); enrutar(); } }
    $$('.perfil-item', m.nodo).forEach(function (b) { b.onclick = function () { elegir(b.dataset.id); }; });
    $('#f-perfil', m.nodo).onsubmit = function (e) {
      e.preventDefault();
      var p = Almacen.crearPerfil($('#nuevo-perfil', m.nodo).value);
      if (p) elegir(p.id);
    };
    $('#imp', m.nodo).onchange = function (e) {
      if (!e.target.files[0]) return;
      Almacen.importar(e.target.files[0], function (err, p) {
        if (err) { toast('Ese archivo no es un progreso válido'); return; }
        toast('Progreso importado: ' + p.nombre); elegir(p.id);
      });
    };
    if (act) {
      $('#exp', m.nodo).onclick = function () { Almacen.exportar(); toast('Archivo descargado'); };
      $('#del', m.nodo).onclick = function () {
        if (confirm('¿Eliminar el perfil "' + act.nombre + '" y todo su progreso en este navegador? No se puede deshacer.')) {
          Almacen.eliminarPerfil(act.id); m.nodo.remove(); abrirPerfiles(listo, true);
        }
      };
    }
    if (obligatorio && !perfiles.length) setTimeout(function () { $('#nuevo-perfil', m.nodo).focus(); }, 50);
  }
  E.abrirPerfiles = function () { abrirPerfiles(null, false); };

  function pintarPerfil() {
    var p = Almacen.perfilActivo(); if (!p) return;
    $('#chip-perfil').innerHTML = '<span class="avatar" style="background:' + p.color + '">' + esc(p.nombre.charAt(0).toUpperCase()) + '</span>' + esc(p.nombre);
  }

  /* ---------------- barra lateral ---------------- */
  function minibarra(res) {
    if (!res.total) return '';
    return '<div class="minibar"><i class="dom" style="width:' + (100 * res.dominada / res.total) + '%"></i><i class="apr" style="width:' + (100 * (res.bien + res.aprendiendo) / res.total) + '%"></i></div>';
  }
  function pintarLateral() {
    var d = E.datos(); if (!d) return;
    var ruta = location.hash;
    var html = '<a class="lat-link' + (ruta === '' || ruta === '#/inicio' ? ' activo' : '') + '" href="#/inicio">🏠 Inicio</a>' +
      '<a class="lat-link' + (ruta === '#/repaso' ? ' activo' : '') + '" href="#/repaso">🔁 Repaso del día<span class="sub" id="lat-pend"></span></a>' +
      '<a class="lat-link' + (ruta === '#/kahoot' ? ' activo' : '') + '" href="#/kahoot">⚡ Modo Kahoot</a>' +
      '<a class="lat-link' + (ruta === '#/oral' ? ' activo' : '') + '" href="#/oral">🎙️ Simulacro oral</a>' +
      '<a class="lat-link' + (ruta.indexOf('#/glosario') === 0 ? ' activo' : '') + '" href="#/glosario">📘 Glosario<span class="sub">' + E.glosario().length + ' conceptos</span></a>' +
      '<a class="lat-link' + (ruta === '#/progreso' ? ' activo' : '') + '" href="#/progreso">📊 Mi progreso</a>';
    var bloque = null;
    E.materia.unidades.forEach(function (meta) {
      if (meta.bloque !== bloque) { bloque = meta.bloque; html += '<div class="lat-titulo">' + esc(bloque) + '</div>'; }
      var u = E.unidad(meta.id);
      if (!u) { html += '<span class="lat-link pronto">' + esc(meta.numero + '. ' + meta.titulo) + '<span class="sub">Próximamente</span></span>'; return; }
      var res = SRS.resumen(u.preguntas, d.preguntas);
      var activo = ruta === '#/u/' + u.id || ruta.indexOf('#/u/' + u.id + '/') === 0;
      html += '<a class="lat-link' + (activo ? ' activo' : '') + '" href="#/u/' + u.id + '">' + esc(u.numero + '. ' + u.titulo) +
        '<span class="sub">' + res.porcentaje + '% dominio · ' + res.total + ' preguntas</span>' + minibarra(res) + '</a>';
    });
    $('#lateral').innerHTML = html;
    var pend = SRS.resumen(E.todasLasPreguntas(), d.preguntas).vencidas;
    $('#lat-pend').textContent = pend ? pend + ' pendientes para hoy' : 'Al día';
  }

  /* ---------------- enrutador ---------------- */
  var limpieza = null;
  function enrutar() {
    if (limpieza) { limpieza(); limpieza = null; }
    var partes = (location.hash || '#/inicio').slice(2).split('/');
    var vista = $('#vista');
    $('#lateral').classList.remove('abierto');
    pintarLateral();
    window.scrollTo(0, 0);
    if (partes[0] === 'u' && E.unidad(partes[1])) return vistaUnidad(vista, E.unidad(partes[1]), partes[2] || 'contenido', partes[3]);
    if (partes[0] === 'repaso') return vistaRepaso(vista);
    if (partes[0] === 'kahoot') return vistaKahoot(vista);
    if (partes[0] === 'oral') return vistaOral(vista);
    if (partes[0] === 'progreso') return vistaProgreso(vista);
    if (partes[0] === 'glosario') return vistaGlosario(vista, decodeURIComponent(partes[1] || ''));
    return vistaInicio(vista);
  }
  E.alSalir = function (fn) { limpieza = fn; };

  /* ---------------- vistas ---------------- */
  function barraGrande(res) {
    var t = res.total || 1;
    return '<div class="barra"><i class="dom" style="width:' + (100 * res.dominada / t) + '%"></i><i class="apr" style="width:' + (100 * (res.bien + res.aprendiendo) / t) + '%"></i></div>' +
      '<div class="leyenda"><span style="--c:var(--green)">Dominadas ' + res.dominada + '</span><span style="--c:#f2b632">En proceso ' + (res.bien + res.aprendiendo) + '</span><span style="--c:#e8eef4">Sin ver ' + res.nueva + '</span></div>';
  }

  function vistaInicio(v) {
    var d = E.datos(), todas = E.todasLasPreguntas(), res = SRS.resumen(todas, d.preguntas);
    var p = Almacen.perfilActivo();
    var html = '<div class="kicker">' + esc(E.materia.curso || '') + '</div><h1>Hola, ' + esc(p.nombre) + '</h1>' +
      '<p class="lead">' + esc(E.materia.descripcion || '') + '</p>' +
      '<div class="grid dos" style="margin:20px 0"><div class="panel"><div class="kicker">Dominio de la materia</div><div class="big">' + res.porcentaje + '%</div>' + barraGrande(res) + '</div>' +
      '<div class="panel"><div class="kicker">Para hoy</div><div class="big">' + (res.vencidas + Math.min(res.nueva, 15)) + '</div><p class="muted">' + res.vencidas + ' preguntas por repasar y ' + res.nueva + ' sin ver todavía.</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn" href="#/repaso" style="text-decoration:none">Empezar repaso</a><a class="btn sec" href="#/kahoot" style="text-decoration:none">Modo Kahoot</a><a class="btn sec" href="#/oral" style="text-decoration:none">Simulacro oral</a></div></div></div>' +
      '<h2 style="margin-top:28px">Unidades</h2><div class="grid">';
    E.materia.unidades.forEach(function (meta) {
      var u = E.unidad(meta.id);
      if (!u) {
        html += '<div class="card" style="opacity:.6"><div class="kicker">' + esc(meta.bloque) + '</div><h3 style="margin-top:0">' + esc(meta.numero + '. ' + meta.titulo) + '</h3><span class="etiqueta">Próximamente</span></div>';
        return;
      }
      var r = SRS.resumen(u.preguntas, d.preguntas);
      var leidas = u.secciones.filter(function (s) { return d.leidas[u.id + ':' + s.id]; }).length;
      html += '<a class="card materia-card" href="#/u/' + u.id + '"><div class="kicker">' + esc(meta.bloque) + '</div><h3 style="margin-top:0">' + esc(u.numero + '. ' + u.titulo) + '</h3>' +
        '<p class="small">' + leidas + ' de ' + u.secciones.length + ' secciones leídas · ' + r.porcentaje + '% dominio</p>' + minibarra(r) + '</a>';
    });
    html += '</div><div class="callout yellow" style="margin-top:26px"><p><b>Cómo estudiar con esta página:</b> lee la sección, prueba el ejemplo interactivo, practica las preguntas y explica en voz alta en el modo oral. El repaso del día te vuelve a preguntar lo que fallaste, como Anki.</p></div>';
    v.innerHTML = html;
  }

  function vistaUnidad(v, u, pestana, ancla) {
    var d = E.datos();
    var r = SRS.resumen(u.preguntas, d.preguntas);
    var orales = u.preguntas.filter(function (q) { return q.tipo === 'oral'; });
    var html = '<div class="kicker">' + esc(u.bloque || (u.profesor ? 'Prof. ' + u.profesor : '')) + '</div>' +
      '<h1>' + esc(u.numero + '. ' + u.titulo) + '</h1><p class="lead">' + esc(u.resumen || '') + '</p>' +
      '<div style="max-width:520px;margin-top:10px">' + barraGrande(r) + '</div>' +
      '<nav class="tabs">' +
      [['contenido', '📖 Contenido'], ['interactivos', '🧪 Ejemplos interactivos (' + u.interactivos.length + ')'], ['practicar', '✍️ Practicar (' + (u.preguntas.length - orales.length) + ')'], ['oral', '🎙️ Oral (' + orales.length + ')']].map(function (t) {
        return '<a class="tab' + (pestana === t[0] ? ' activo' : '') + '" href="#/u/' + u.id + '/' + t[0] + '">' + t[1] + '</a>';
      }).join('') + '</nav><div id="cuerpo-unidad"></div>';
    v.innerHTML = html;
    var c = $('#cuerpo-unidad');
    if (pestana === 'interactivos') return pintarInteractivos(c, u);
    if (pestana === 'practicar') return Quiz.selector(c, u.preguntas.filter(function (q) { return q.tipo !== 'oral'; }), { titulo: 'Practicar la unidad ' + u.numero });
    if (pestana === 'oral') return Quiz.oral(c, orales, {});
    pintarContenido(c, u, ancla);
  }

  function pintarContenido(c, u, ancla) {
    var d = E.datos();
    var html = '';
    if (u.lecturas) html += '<div class="callout"><p><b>Material base:</b> ' + u.lecturas + '</p></div>';
    html += '<div class="indice">' + u.secciones.map(function (s) {
      return '<a href="#/u/' + u.id + '/contenido/' + s.id + '" class="' + (d.leidas[u.id + ':' + s.id] ? 'leida' : '') + '">' + (d.leidas[u.id + ':' + s.id] ? '✓ ' : '') + esc(s.titulo) + '</a>';
    }).join('') + '</div>';
    u.secciones.forEach(function (s) {
      var leida = d.leidas[u.id + ':' + s.id];
      var inter = u.interactivos.filter(function (i) { return i.seccion === s.id; });
      html += '<section class="seccion" id="sec-' + s.id + '"><h2><span>' + esc(s.titulo) + '</span><button class="marcar-leida' + (leida ? ' si' : '') + '" data-sec="' + s.id + '">' + (leida ? '✓ Leída' : 'Marcar como leída') + '</button></h2>' + s.html +
        (inter.length ? '<div class="callout green"><p>🧪 Ejemplo interactivo: ' + inter.map(function (i) { return '<a href="#/u/' + u.id + '/interactivos/' + i.id + '">' + esc(i.titulo) + '</a>'; }).join(' · ') + '</p></div>' : '') +
        '</section>';
    });
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn" style="text-decoration:none" href="#/u/' + u.id + '/practicar">Practicar esta unidad</a><a class="btn sec" style="text-decoration:none" href="#/u/' + u.id + '/oral">Preguntas orales</a></div>';
    c.innerHTML = html;
    $$('.marcar-leida', c).forEach(function (b) {
      b.onclick = function () {
        var d2 = E.datos(), k = u.id + ':' + b.dataset.sec;
        if (d2.leidas[k]) delete d2.leidas[k]; else d2.leidas[k] = Date.now();
        Almacen.guardar(E.materia.id, d2);
        b.classList.toggle('si', !!d2.leidas[k]); b.textContent = d2.leidas[k] ? '✓ Leída' : 'Marcar como leída';
        var chip = $('.indice a[href$="/' + b.dataset.sec + '"]', c);
        if (chip) { chip.classList.toggle('leida', !!d2.leidas[k]); chip.textContent = (d2.leidas[k] ? '✓ ' : '') + chip.textContent.replace(/^✓ /, ''); }
      };
    });
    if (ancla) { var s = $('#sec-' + ancla); if (s) setTimeout(function () { s.scrollIntoView({ behavior: 'smooth' }); }, 30); }
  }

  function pintarInteractivos(c, u, ancla) {
    ancla = ancla || (location.hash.split('/')[4]);
    if (!u.interactivos.length) { c.innerHTML = '<p class="muted">Esta unidad todavía no tiene ejemplos interactivos.</p>'; return; }
    c.innerHTML = u.interactivos.map(function (i) {
      return '<div class="interactivo" id="int-' + i.id + '"><div class="kicker">Ejemplo interactivo</div><h2>' + esc(i.titulo) + '</h2>' +
        (i.descripcion ? '<p class="muted">' + i.descripcion + '</p>' : '') + '<div class="int-cuerpo"></div>' +
        (i.seccion ? '<p class="small" style="margin-top:14px"><a href="#/u/' + u.id + '/contenido/' + i.seccion + '">← Volver a la sección relacionada</a></p>' : '') + '</div>';
    }).join('');
    u.interactivos.forEach(function (i) {
      try { i.montar($('#int-' + i.id + ' .int-cuerpo'), E.util); }
      catch (e) { $('#int-' + i.id + ' .int-cuerpo').innerHTML = '<p class="small">Error al cargar el ejemplo: ' + esc(e.message) + '</p>'; }
    });
    if (ancla) { var s = $('#int-' + ancla); if (s) setTimeout(function () { s.scrollIntoView({ behavior: 'smooth' }); }, 30); }
  }

  function vistaRepaso(v) {
    var preguntas = E.todasLasPreguntas().filter(function (q) { return q.tipo !== 'oral'; });
    v.innerHTML = '<div class="kicker">Repaso espaciado</div><h1>Repaso del día</h1><p class="lead">Mezcla las preguntas de todas las unidades: primero las que te tocan hoy, después las nuevas. Lo que falles vuelve en unos minutos; lo que aciertes, en unos días.</p><div id="rep"></div>';
    Quiz.selector($('#rep'), preguntas, { titulo: 'Repaso', soloSrs: true });
  }
  function vistaKahoot(v) {
    var preguntas = E.todasLasPreguntas().filter(function (q) { return q.tipo === 'alternativas' || q.tipo === 'vf'; });
    var opciones = E.unidades.map(function (u) { return '<option value="' + u.id + '">' + esc(u.numero + '. ' + u.titulo) + '</option>'; }).join('');
    v.innerHTML = '<div class="kicker">Juego</div><h1>Modo Kahoot</h1><p class="lead">20 segundos por pregunta. Más rápido, más puntos; las rachas suman bonus. Tu récord queda guardado en tu perfil.</p>' +
      '<div class="interactivo"><div class="fila"><div class="campo"><label>Unidades</label><select id="k-uni"><option value="">Todas las unidades</option>' + opciones + '</select></div>' +
      '<div class="campo"><label>Preguntas</label><select id="k-n"><option>10</option><option selected>15</option><option>25</option></select></div><button class="btn" id="k-ir">¡Jugar!</button></div>' +
      '<p class="small" id="k-rec"></p></div><div id="k-juego"></div>';
    var rec = E.datos().records.kahoot;
    $('#k-rec').textContent = rec ? 'Tu récord: ' + rec + ' puntos' : 'Aún no tienes récord.';
    $('#k-ir').onclick = function () {
      var uni = $('#k-uni').value;
      var lista = preguntas.filter(function (q) { return !uni || q.unidad === uni; });
      Quiz.kahoot($('#k-juego'), SRS.mezclar(lista.slice()).slice(0, +$('#k-n').value), {});
      $('#k-juego').scrollIntoView({ behavior: 'smooth' });
    };
  }
  function vistaOral(v) {
    var orales = E.todasLasPreguntas().filter(function (q) { return q.tipo === 'oral'; });
    v.innerHTML = '<div class="kicker">Examen oral</div><h1>Simulacro oral</h1><p class="lead">Preguntas abiertas de todas las unidades, al azar. Responde en voz alta con el cronómetro, después compara con la pauta y evalúate con honestidad.</p><div id="or"></div>';
    Quiz.oral($('#or'), SRS.mezclar(orales.slice()), { simulacro: true });
  }

  function vistaGlosario(v, foco) {
    var d = E.datos(), todos = E.glosario();
    var html = '<div class="kicker">Definiciones</div><h1>Glosario</h1><p class="lead">Los conceptos definidos en los apuntes, las diapositivas y las normas del curso. Las definiciones entre comillas son textuales de la norma o de la fuente citada; las demás son síntesis del material.</p>' +
      '<div class="interactivo" style="padding:16px 18px"><div class="fila" style="margin:0"><div class="campo" style="flex:1;min-width:220px"><label>Buscar concepto</label><input id="g-buscar" placeholder="Ej: anatocismo, prenda, OCD…" autocomplete="off"></div>' +
      '<div class="campo"><label>Unidad</label><select id="g-uni"><option value="">Todas</option>' + E.unidades.filter(function (u) { return u.glosario.length; }).map(function (u) { return '<option value="' + u.id + '">' + esc(u.numero + '. ' + u.titulo) + '</option>'; }).join('') + '</select></div>' +
      '<button class="btn" id="g-def">Practicar definiciones</button><button class="btn sec" id="g-alt">Adivina el concepto</button></div><div class="indice" id="g-letras" style="margin:12px 0 0"></div></div><div id="g-zona"></div><div id="g-lista"></div>';
    v.innerHTML = html;
    function estadoDe(t) {
      var r1 = d.preguntas[t.id + '-d'], r2 = d.preguntas[t.id + '-a'];
      var c = Math.max(r1 && r1.c || 0, r2 && r2.c || 0);
      return c >= 4 ? '<span class="etiqueta verde">Lo manejo</span>' : c >= 1 ? '<span class="etiqueta amarilla">En proceso</span>' : '';
    }
    function pintar() {
      var q = $('#g-buscar').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
      var uni = $('#g-uni').value;
      var lista = todos.filter(function (t) {
        if (uni && t.unidad.id !== uni) return false;
        if (!q) return true;
        var txt = (t.termino + ' ' + (t.alias || []).join(' ') + ' ' + t.definicion).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return txt.indexOf(q) >= 0;
      });
      var letras = {}; lista.forEach(function (t) { letras[t.termino.charAt(0).toUpperCase()] = 1; });
      $('#g-letras').innerHTML = Object.keys(letras).sort().map(function (l) { return '<a href="javascript:void 0" data-l="' + l + '">' + l + '</a>'; }).join('');
      $$('#g-letras a').forEach(function (a) { a.onclick = function () { var x = $('[data-letra="' + a.dataset.l + '"]'); if (x) x.scrollIntoView({ behavior: 'smooth', block: 'start' }); }; });
      var actual = '';
      $('#g-lista').innerHTML = lista.length ? lista.map(function (t) {
        var l = t.termino.charAt(0).toUpperCase(), cab = '';
        if (l !== actual) { actual = l; cab = '<h2 data-letra="' + l + '" style="margin:22px 0 10px;scroll-margin-top:90px">' + l + '</h2>'; }
        return cab + '<div class="card glosa" id="g-' + t.id + '" style="margin-bottom:10px;scroll-margin-top:90px"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap"><h3 style="margin:0">' + esc(t.termino) + '</h3>' + estadoDe(t) + '</div>' +
          '<p style="margin:8px 0">' + (t.literal ? '«' + esc(t.definicion) + '»' : esc(t.definicion)) + '</p>' +
          '<p class="small" style="margin:0">' + (t.fuente ? '<span class="norma">' + esc(t.fuente) + '</span> · ' : '') + '<a href="#/u/' + t.unidad.id + '/contenido/' + t.seccion + '">' + esc(t.unidad.numero + '. ' + t.unidad.titulo) + ' →</a></p></div>';
      }).join('') : '<p class="muted">No hay conceptos que coincidan.</p>';
    }
    function practicar(tipo) {
      var uni = $('#g-uni').value;
      var qs = E.todasLasPreguntas().filter(function (x) { return x.glosario && x.tipo === tipo && (!uni || x.unidad === uni); });
      Quiz.sesion($('#g-zona'), SRS.seleccionar(qs, d.preguntas, 15), { titulo: tipo === 'definicion' ? 'Definiciones' : 'Adivina el concepto', alVolver: function () { $('#g-zona').innerHTML = ''; } });
      $('#g-zona').scrollIntoView({ behavior: 'smooth' });
    }
    $('#g-buscar').oninput = pintar; $('#g-uni').onchange = pintar;
    $('#g-def').onclick = function () { practicar('definicion'); };
    $('#g-alt').onclick = function () { practicar('alternativas'); };
    pintar();
    if (foco) { var x = $('#g-' + foco); if (x) setTimeout(function () { x.scrollIntoView({ behavior: 'smooth', block: 'start' }); x.style.boxShadow = '0 0 0 3px var(--yellow)'; }, 50); }
  }

  function vistaProgreso(v) {
    var d = E.datos(), p = Almacen.perfilActivo();
    var todas = E.todasLasPreguntas(), res = SRS.resumen(todas, d.preguntas);
    var html = '<div class="kicker">Perfil: ' + esc(p.nombre) + '</div><h1>Mi progreso</h1>' +
      '<div class="panel" style="margin-bottom:18px"><div class="big">' + res.porcentaje + '%</div>' + barraGrande(res) + '</div>' +
      '<table class="tabla"><tr><th>Unidad / tema</th><th>Preguntas</th><th>Dominio</th><th>Estado</th></tr>';
    E.unidades.forEach(function (u) {
      var r = SRS.resumen(u.preguntas, d.preguntas);
      html += '<tr><td><b><a href="#/u/' + u.id + '">' + esc(u.numero + '. ' + u.titulo) + '</a></b></td><td>' + r.total + '</td><td>' + r.porcentaje + '%</td><td style="min-width:160px">' + minibarra(r) + '</td></tr>';
      u.secciones.forEach(function (s) {
        var qs = u.preguntas.filter(function (q) { return q.seccion === s.id; });
        if (!qs.length) return;
        var rs = SRS.resumen(qs, d.preguntas);
        var etq = rs.porcentaje >= 75 ? '<span class="etiqueta verde">Lo manejo</span>' : rs.nueva === rs.total ? '<span class="etiqueta">Sin practicar</span>' : rs.porcentaje < 40 ? '<span class="etiqueta roja">Débil</span>' : '<span class="etiqueta amarilla">En proceso</span>';
        html += '<tr><td style="padding-left:26px"><a href="#/u/' + u.id + '/contenido/' + s.id + '">' + esc(s.titulo) + '</a></td><td>' + rs.total + '</td><td>' + rs.porcentaje + '%</td><td>' + etq + '</td></tr>';
      });
    });
    html += '</table>';
    var falladas = todas.filter(function (q) { var r = d.preguntas[q.id]; return r && r.ko > 0 && r.c < 3; })
      .sort(function (a, b) { return d.preguntas[b.id].ko - d.preguntas[a.id].ko; }).slice(0, 12);
    if (falladas.length) {
      html += '<h2 style="margin-top:26px">Preguntas que más te cuestan</h2><div class="card"><ul>' + falladas.map(function (q) {
        return '<li>' + esc(q.enunciado) + ' <span class="small">(' + d.preguntas[q.id].ko + ' errores)</span></li>';
      }).join('') + '</ul><button class="btn" id="rep-fall">Practicar solo estas</button></div>';
    }
    var dias = Object.keys(d.actividad).sort().slice(-14);
    if (dias.length) {
      var max = Math.max.apply(null, dias.map(function (k) { return d.actividad[k]; }));
      html += '<h2 style="margin-top:26px">Respuestas por día</h2><div class="card" style="display:flex;gap:8px;align-items:flex-end;height:150px">' + dias.map(function (k) {
        return '<div style="flex:1;text-align:center"><div style="background:var(--acento);border-radius:6px 6px 0 0;height:' + Math.max(4, 100 * d.actividad[k] / max) + 'px"></div><div class="small">' + k.split('-').slice(1).reverse().join('/') + '</div></div>';
      }).join('') + '</div>';
    }
    html += '<h2 style="margin-top:26px">Respaldo</h2><div class="card">' + textoPrivacidad() +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px"><button class="btn" id="p-exp">Exportar progreso</button><button class="btn ghost" id="p-perf">Cambiar o importar perfil</button><button class="btn peligro" id="p-reset">Reiniciar progreso de esta materia</button></div></div>';
    v.innerHTML = html;
    $('#p-exp').onclick = function () { Almacen.exportar(); toast('Archivo descargado'); };
    $('#p-perf').onclick = E.abrirPerfiles;
    $('#p-reset').onclick = function () {
      if (confirm('¿Borrar todo tu progreso en ' + E.materia.nombre + '? No se puede deshacer.')) {
        Almacen.guardar(E.materia.id, { preguntas: {}, leidas: {}, records: {}, actividad: {} }); enrutar();
      }
    };
    if ($('#rep-fall')) $('#rep-fall').onclick = function () {
      v.innerHTML = '<div class="kicker">Refuerzo</div><h1>Preguntas difíciles</h1><div id="rf"></div>';
      Quiz.sesion($('#rf'), falladas, { titulo: 'Refuerzo' });
    };
  }

  /* ---------------- conexión de la cabecera ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    $('#chip-perfil').onclick = E.abrirPerfiles;
    $('#menu-movil').onclick = function () { $('#lateral').classList.toggle('abierto'); };
    iniciar();
  });
})();
