/* =========================================================
   tema.js — modo claro / oscuro.
   Se carga en el <head> (antes de los estilos se apliquen) para que la página
   no parpadee en blanco. La elección se guarda solo en este navegador
   (localStorage, clave "estudio-tema"); si nunca se eligió, sigue al sistema.
   El botón es cualquier elemento con id="btn-tema".
   ========================================================= */
(function () {
  'use strict';
  var CLAVE = 'estudio-tema';
  var raiz = document.documentElement;
  var sistema = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function guardado() { try { return localStorage.getItem(CLAVE); } catch (e) { return null; } }
  function actual() { return raiz.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }

  // Íconos: luna = «pasar a oscuro»; sol = «pasar a claro».
  var LUNA = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  var SOL = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><path d="M12 1.5v2.5M12 20v2.5M1.5 12H4M20 12h2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/></svg>';

  function pintarBoton() {
    var b = document.getElementById('btn-tema'); if (!b) return;
    var oscuro = actual() === 'dark';
    b.innerHTML = oscuro ? SOL : LUNA;
    var txt = oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    b.setAttribute('aria-label', txt); b.title = txt;
    b.setAttribute('aria-pressed', oscuro ? 'true' : 'false');
  }
  function aplicar(tema) { raiz.setAttribute('data-theme', tema); pintarBoton(); }

  // 1) Aplicar de inmediato (todavía no existe el <body>).
  aplicar(guardado() || (sistema && sistema.matches ? 'dark' : 'light'));

  // 2) Si la persona no ha elegido, seguir los cambios del sistema.
  if (sistema) {
    var alCambiar = function (e) { if (!guardado()) aplicar(e.matches ? 'dark' : 'light'); };
    if (sistema.addEventListener) sistema.addEventListener('change', alCambiar); else if (sistema.addListener) sistema.addListener(alCambiar);
  }

  // 3) Conectar el botón cuando exista.
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.getElementById('btn-tema'); if (!b) return;
    pintarBoton();
    b.addEventListener('click', function () {
      var nuevo = actual() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(CLAVE, nuevo); } catch (e) { /* sin almacenamiento: dura hasta recargar */ }
      aplicar(nuevo);
    });
  });
})();
