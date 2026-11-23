/* Configuración de la materia Financiamiento de la Empresa (DER010C).
   Las unidades sin "archivo" aparecen como "Próximamente". */
Estudio.registrarMateria({
  id: 'financiamiento',
  nombre: 'Financiamiento de la Empresa',
  nombreCorto: 'Financiamiento',
  curso: 'DER010C · Derecho UC · Profs. Goldenberg y Gaspar',
  descripcion: 'Dinero y operaciones de crédito, contratos bancarios, garantías, títulos de crédito y mercado de valores. Examen oral.',
  color: '#1479c9',
  unidades: [
    { id: 'u1', numero: 1, bloque: 'Prof. Goldenberg', titulo: 'Dinero y Ley 18.010', archivo: 'u1-dinero-ley18010.js' },
    { id: 'u2', numero: 2, bloque: 'Prof. Goldenberg', titulo: 'Contratos sobre dinero o crédito', archivo: 'u2-contratos.js' },
    { id: 'u3', numero: 3, bloque: 'Prof. Goldenberg', titulo: 'Operaciones bancarias' },
    { id: 'u4', numero: 4, bloque: 'Prof. Goldenberg', titulo: 'Garantías y subordinación' },
    { id: 'u5', numero: 5, bloque: 'Prof. Gaspar', titulo: 'Teoría de los títulos de crédito' },
    { id: 'u6', numero: 6, bloque: 'Prof. Gaspar', titulo: 'Letra de cambio' },
    { id: 'u7', numero: 7, bloque: 'Prof. Gaspar', titulo: 'Pagaré, factura, descuento y factoring' },
    { id: 'u8', numero: 8, bloque: 'Prof. Gaspar', titulo: 'Mercado de valores I: los valores' },
    { id: 'u9', numero: 9, bloque: 'Prof. Gaspar', titulo: 'Mercado de valores II: oferta, OPA e intermediarios' },
    { id: 'u10', numero: 10, bloque: 'Prof. Gaspar', titulo: 'Mercado de valores III: información y CMF' }
  ],
  /* El chat suma estas palabras a la búsqueda cuando aparece la clave */
  sinonimos: {
    'tmc': 'tasa maxima convencional interes maximo',
    'tic': 'tasa interes corriente',
    'imc': 'interes maximo convencional tmc',
    'ocd': 'operacion credito dinero',
    'anatocismo': 'capitalizacion intereses sobre intereses',
    'capitalizar': 'anatocismo capitalizacion',
    'usura': 'tmc maximo convencional 472',
    'prepago': 'pago anticipado articulo 10',
    'pago anticipado': 'prepago',
    'mora': 'moratorio retardo articulo 16',
    'comision': 'comisiones 19 ter ncg 484 cofisa',
    'cofisa': 'comision administracion variable avm din',
    'cofiza': 'cofisa comision administracion variable',
    'ncg 484': 'comisiones requisitos cmf',
    'reajuste': 'reajustabilidad uf nominalista',
    'reajustabilidad': 'reajuste uf nominalista',
    'uf': 'unidad fomento reajuste',
    'carta de credito': 'ucp 600 banco emisor beneficiario',
    'covenants': 'covenant obligaciones hacer no hacer eventos incumplimiento',
    'mutuo': 'prestamo consumo 2196',
    'deposito irregular': '2221 dinero arca cerrada',
    'cuenta corriente': 'remesas 602 compensacion saldo',
    'apertura': 'apertura credito disponibilidad',
    'hibridos': 'hibrido bonos subordinados perpetuos convertibles preferentes'
  },
  preguntasChat: ['¿Qué es el anatocismo?', '¿Cómo se calcula la TMC?', '¿Qué resolvió el caso Cofisa?', '¿Diferencia entre mutuo y depósito irregular?']
});
