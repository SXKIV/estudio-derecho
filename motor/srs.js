/* =========================================================
   srs.js — repetición espaciada (sistema de cajas de Leitner, como Anki simplificado).
   Cada pregunta tiene una "caja" de 0 a 5:
     0 = nueva · 1-2 = aprendiendo · 3 = bien · 4-5 = dominada
   Si aciertas sube una caja y vuelve a aparecer más tarde; si fallas vuelve a la caja 1.
   Intervalos pensados para preparar un examen en pocas semanas.
   ========================================================= */
(function () {
  var MIN = 60 * 1000, HORA = 60 * MIN, DIA = 24 * HORA;
  var INTERVALOS = [0, 10 * MIN, 1 * DIA, 2 * DIA, 4 * DIA, 7 * DIA];

  var SRS = {
    estado: function (reg) {
      if (!reg || !reg.c) return 'nueva';
      if (reg.c >= 4) return 'dominada';
      if (reg.c === 3) return 'bien';
      return 'aprendiendo';
    },
    responder: function (reg, resultado) {
      // resultado: 'bien' | 'parcial' | 'mal'
      reg = reg || { c: 0, ok: 0, ko: 0 };
      var ahora = Date.now();
      if (resultado === 'bien') {
        reg.c = Math.min((reg.c || 0) + 1, 5);
        if (reg.ko === 0 && reg.ok === 0) reg.c = Math.max(reg.c, 2); // acierto a la primera: salta "aprendiendo"
        reg.ok = (reg.ok || 0) + 1;
      } else if (resultado === 'parcial') {
        reg.c = Math.max(1, Math.min(reg.c || 1, 2));
        reg.ok = reg.ok || 0;
      } else {
        reg.c = 1;
        reg.ko = (reg.ko || 0) + 1;
      }
      reg.p = ahora + INTERVALOS[reg.c];
      reg.u = ahora;
      return reg;
    },
    vencida: function (reg) { return reg && reg.c && reg.p <= Date.now(); },

    /* Ordena preguntas para una sesión: primero las vencidas, luego nuevas, luego el resto (más débiles primero) */
    seleccionar: function (preguntas, registros, cantidad, soloPendientes) {
      var vencidas = [], nuevas = [], resto = [];
      preguntas.forEach(function (q) {
        var r = registros[q.id];
        if (!r || !r.c) nuevas.push(q);
        else if (r.p <= Date.now()) vencidas.push(q);
        else resto.push(q);
      });
      vencidas.sort(function (a, b) { return registros[a.id].c - registros[b.id].c; });
      mezclar(nuevas);
      resto.sort(function (a, b) { return (registros[a.id].c - registros[b.id].c) || (registros[a.id].p - registros[b.id].p); });
      var lista = vencidas.concat(nuevas);
      if (!soloPendientes) lista = lista.concat(resto);
      return lista.slice(0, cantidad);
    },

    /* Resumen de dominio de un conjunto de preguntas */
    resumen: function (preguntas, registros) {
      var r = { total: preguntas.length, nueva: 0, aprendiendo: 0, bien: 0, dominada: 0, vencidas: 0, puntaje: 0 };
      preguntas.forEach(function (q) {
        var reg = registros[q.id];
        var e = SRS.estado(reg);
        r[e]++;
        if (SRS.vencida(reg)) r.vencidas++;
        r.puntaje += reg && reg.c ? Math.min(reg.c, 4) / 4 : 0;
      });
      r.porcentaje = r.total ? Math.round(100 * r.puntaje / r.total) : 0;
      return r;
    }
  };

  function mezclar(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  SRS.mezclar = mezclar;
  window.SRS = SRS;
})();
