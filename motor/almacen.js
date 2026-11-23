/* =========================================================
   almacen.js — perfiles y guardado del progreso.
   Todo se guarda SOLO en el navegador (localStorage). Nada se envía a internet.
   Si más adelante se quiere sincronizar (Supabase/Firebase), basta con
   reemplazar las funciones leer/escribir de este archivo.
   ========================================================= */
(function () {
  var CLAVE_PERFILES = 'ed:perfiles';
  var CLAVE_ACTIVO = 'ed:perfil-activo';
  var CLAVE_AVISO = 'ed:aviso-visto';
  var memoria = {}; // respaldo si el navegador bloquea localStorage

  function leer(clave, porDefecto) {
    try {
      var v = window.localStorage.getItem(clave);
      return v ? JSON.parse(v) : porDefecto;
    } catch (e) {
      return memoria.hasOwnProperty(clave) ? memoria[clave] : porDefecto;
    }
  }
  function escribir(clave, valor) {
    memoria[clave] = valor;
    try { window.localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) { /* sin almacenamiento */ }
  }
  function borrar(clave) {
    delete memoria[clave];
    try { window.localStorage.removeItem(clave); } catch (e) {}
  }

  var COLORES = ['#1479c9', '#20845c', '#b64747', '#7a4fb3', '#d07a12', '#0f8a8a', '#c2417a', '#4a5d74'];

  function nuevoId() { return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  var Almacen = {
    perfiles: function () { return leer(CLAVE_PERFILES, []); },
    perfilActivo: function () {
      var id = leer(CLAVE_ACTIVO, null);
      var lista = this.perfiles();
      for (var i = 0; i < lista.length; i++) if (lista[i].id === id) return lista[i];
      return null;
    },
    crearPerfil: function (nombre) {
      nombre = String(nombre || '').trim().slice(0, 24);
      if (!nombre) return null;
      var lista = this.perfiles();
      var p = { id: nuevoId(), nombre: nombre, color: COLORES[lista.length % COLORES.length], creado: Date.now() };
      lista.push(p);
      escribir(CLAVE_PERFILES, lista);
      this.activar(p.id);
      return p;
    },
    activar: function (id) { escribir(CLAVE_ACTIVO, id); },
    renombrar: function (id, nombre) {
      var lista = this.perfiles();
      lista.forEach(function (p) { if (p.id === id) p.nombre = String(nombre).trim().slice(0, 24) || p.nombre; });
      escribir(CLAVE_PERFILES, lista);
    },
    eliminarPerfil: function (id) {
      escribir(CLAVE_PERFILES, this.perfiles().filter(function (p) { return p.id !== id; }));
      borrar('ed:datos:' + id);
      if (leer(CLAVE_ACTIVO, null) === id) borrar(CLAVE_ACTIVO);
    },

    /* Datos de estudio del perfil activo, por materia */
    datos: function (materiaId) {
      var p = this.perfilActivo();
      if (!p) return null;
      var todo = leer('ed:datos:' + p.id, {});
      if (!todo[materiaId]) todo[materiaId] = { preguntas: {}, leidas: {}, records: {}, actividad: {} };
      var d = todo[materiaId];
      d.preguntas = d.preguntas || {}; d.leidas = d.leidas || {}; d.records = d.records || {}; d.actividad = d.actividad || {};
      return d;
    },
    guardar: function (materiaId, datosMateria) {
      var p = this.perfilActivo();
      if (!p) return;
      var todo = leer('ed:datos:' + p.id, {});
      todo[materiaId] = datosMateria;
      escribir('ed:datos:' + p.id, todo);
    },

    /* Exportar / importar el progreso de un perfil (archivo .json) */
    exportar: function () {
      var p = this.perfilActivo();
      if (!p) return;
      var paquete = { formato: 'estudio-derecho', version: 1, exportado: new Date().toISOString(), perfil: { nombre: p.nombre, color: p.color }, datos: leer('ed:datos:' + p.id, {}) };
      var blob = new Blob([JSON.stringify(paquete)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'progreso-' + p.nombre.replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '.json';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    },
    importar: function (archivo, alTerminar) {
      var self = this;
      var lector = new FileReader();
      lector.onload = function () {
        try {
          var paquete = JSON.parse(lector.result);
          if (paquete.formato !== 'estudio-derecho' || typeof paquete.datos !== 'object') throw new Error('formato');
          var nombre = (paquete.perfil && paquete.perfil.nombre) || 'Perfil importado';
          var existente = self.perfiles().filter(function (p) { return p.nombre === nombre; })[0];
          var perfil = existente || self.crearPerfil(nombre);
          self.activar(perfil.id);
          escribir('ed:datos:' + perfil.id, paquete.datos);
          alTerminar(null, perfil);
        } catch (e) { alTerminar(e); }
      };
      lector.readAsText(archivo);
    },

    avisoVisto: function () { return !!leer(CLAVE_AVISO, false); },
    marcarAviso: function () { escribir(CLAVE_AVISO, true); }
  };

  window.Almacen = Almacen;
})();
