export default {
  global: {
    componenteFormativo: 'Contexto general de pueblos indígenas',
    descripcionCurso:
      'Se presenta el marco jurídico y de política nacional e internacional, reconociendo los derechos de los pueblos indígenas, su territorio, cultura, tradiciones y autodeterminación; así mismo, los conceptos básicos para la comprensión de su cultura, la concepción de la salud y enfermedad en la cosmovisión indígena que permite establecer el diálogo de saberes entre médicos tradicionales y comunidades indígenas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco conceptual',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marco normativo y políticas de derecho nacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Marco internacional',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Marco de política y de derecho nacional',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Organización, estructuras propias y territorio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Salud en pueblos indígenas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tradiciones',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Salud intercultural en pueblos indígenas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Análisis de determinantes sociales de salud',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Medicina tradicional y equipos de salud indígena',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cabildo Resguardo UWA. (2006). Lineamientos para una educación propia intercultural bilingue UWA. Yopal ',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2009). Auto 004 de 2009. Bogotá D.C: Imprenta Nacional.',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística - DANE. (2019). Población Indígena de Colombia - CNPV 2018. Bogotá D.C: Imprenta Nacional.',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2010). Aspectos Básicos Grupo Etnico Indígena. Bogotá D.C: Imprenta Nacional.',
    },
    {
      referencia:
        'Dirección Nacional de Planeación. (2012). Guía para la incorporación de la variable etnica y el enfoque diferencial en la formulación e implementación de planes y políticas. Bogotá D.C: Imprenta Nacional.',
    },
    {
      referencia:
        'Gobierno Nacional de Colombia. (1991). Ley 691 de 2001. Bogotá D.C: Imprenta Nacional.',
    },
    {
      referencia:
        'Gobierno Nacional de Colombia. (2005). Decreto 4127 de 2005. Bogotá D.C: Imprenta Nacional.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (1992). Resolución 5078 de 1992. Bogotá D.C: Imprenta Nacional de Colombia.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2006). Perfil de Salud de la Población Indígena y medición de desigualdades en salud. Bogotá D.C: Imprenta nacional.',
    },
    {
      referencia:
        'Ministerio del Interior de Colombia. (2011). Decreto 4633 de 2011. Bogotá D.C: Imprenta Nacional.',
    },
    {
      referencia:
        'Ministerio del Interior-Presidencia de la República de Colombia. (2014). Decreto 1953 del 7 octubre de 2014. Bogotá D.C: Imprenta Nacional.',
    },
    {
      referencia:
        'Organización de las Naciones Unidas - ONU. (2007). Declaración de las Naciones Unidas sobre los derechos de los pueblos indígenas (pág. 19). Ginebra: Naciones Unidas.',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (1957). C107 - Convenio sobre poblaciones indígenas y tribales.',
      link:
        'https://www.ilo.org/dyn/normlex/es/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C107 ',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (1989). C169 - Convenio sobre pueblos indígenas y tribales, 1989. ',
      link:
        'https://www.ilo.org/dyn/normlex/es/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C169',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (1997). Organización y provisión de Servicios de Salud en poblaciones Multiculturales. Washington: Organización Panamericana de la Salud.',
    },
    {
      referencia:
        'Organización Panamericana de la Salud (1999). Sistemas de salud tradicionales en América Latina y el Caribe: Información Base. Informe técnico. Washington: Organización Panamericana de la Salud, 1999.',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2006). La salud de los pueblos indígenas de las Américas, conceptos, prácticas y estrategias. Washington D.C: Organización panamericana de la Salud.',
    },
    {
      referencia:
        'Organización Regional Indígena del Casanare - ORIC. (2006). Modelo de Atención en Salud para Comunidades Indígenas Casanare. Yopal: Gobernación de Casanare.',
    },
    {
      referencia:
        'Osorio, L. L. (2019). Ruamaska: Lineamientos para una política pública en salud indígena. Bogotá D.C: Universidad Nacional de Colombia.',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1994). Ley 60 de 1994. Bogotá D,C: Imprenta Nacional.',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1995). Decreto 2164 de 1995. Bogotá D.C: Imprenta Nacional.',
    },
    {
      referencia:
        'Semper, F. (2006). Los derechos de los pueblos indígenas en Colombia en la Jurisprudencia de la corte constitucional. Hamburgo: Sebra.',
    },
    {
      referencia:
        'Téllez, J. C. (2010). Reconfiguración de la Etnicidad como despliegue de poder antiestatal a partir de las experiencias, no violencia y resistencia indígena en Colombia. Repositorio Universidad Javeriana.',
      link:
        'https://repository.javeriana.edu.co/bitstream/handle/10554/861/pol141.pdf?sequence=1&isAllowed=y ',
    },
    {
      referencia:
        'UNESCO. (2005). Convención sobre la Promoción y Protección de la diversidad cultural. Paris: Naciones Unidas.',
    },
    {
      referencia:
        'Whitehead, M. (1992). The concepts and principles of equity and health. Academic oup.',
    },
    {
      referencia:
        'Zambrano, C. (1989). Identidad, indios y etnias. Silvia, Cauca: Aluna.',
    },
  ],
  glosario: [
    {
      termino: 'Adecuación etnocultural',
      significado:
        'Establecimiento de programas de salud con enfoque diferencial, atendiendo las particularidades de cada pueblo indígena.',
    },
    {
      termino: 'Autonomía',
      significado:
        'Es la autodeterminación de los pueblos indígenas para decidir sus propias normas y tomar decisiones en defensa de las tradiciones culturales y organizativas.',
    },
    {
      termino: 'Desarrollo armónico',
      significado:
        'Para los fines de este texto, se utiliza la palabra armonización como sinónimo de conciliación, concertación o mediación entre la cosmovisión de los pueblos indígenas y el sistema de salud convencional.',
    },
    {
      termino: 'Determinantes Sociales en Salud (DSS)',
      significado:
        'Se definen como las condiciones sociales en las que las personas viven y trabajan, así como las características sociales dentro de las cuales la vida tiene lugar. Los dss apuntan a rasgos específicos del contexto social que afecta la salud y los mecanismos por los cuales las condiciones sociales se traducen en impactos en la salud, como, el ingreso, el empleo, la educación, la vivienda y el medio ambiente.',
    },
    {
      termino: 'Expresiones culturales',
      significado:
        'Las expresiones culturales son las expresiones resultantes de la creatividad de personas, grupos y sociedades, que poseen un contenido cultural. (UNESCO, 2005).',
    },
    {
      termino: 'Interculturalidad',
      significado:
        'En el marco de la salud propia indígena es la comunicación recíproca para armonizar los diferentes saberes indígenas y occidentales',
    },
    {
      termino: 'Medicina tradicional',
      significado:
        'Comprende el conjunto de ideas, conceptos, creencias, mitos y procedimientos, sean explicables o no, relativos a las enfermedades físicas, mentales o desequilibrios sociales en un pueblo determinado. Estos conjuntos de conocimientos explican la etiología, la nosología y los procedimientos de diagnóstico, pronóstico, curación y prevención de las enfermedades.',
    },
    {
      termino: 'Multiculturalismo',
      significado:
        'Es la acción de reconocimiento pleno del carácter multilingüe, multiétnico y pluricultural de un país o nación. El multiculturalismo se apoya en valores como la equidad y la justicia, la igualdad con derecho a la diferencia étnica y cultural, y se manifiesta a través del ejercicio de reconocimiento, respeto y promoción de la identidad cultural y lingüística.',
    },
    {
      termino: 'Régimen subsidiado',
      significado:
        'Es el mecanismo mediante el cual la población más pobre del país, sin capacidad de pago, tiene acceso a los servicios de salud a través de un subsidio que ofrece el Estado.',
    },
    {
      termino: 'Sabiduría ancestral',
      significado:
        'Es la herencia en conocimiento propio que se transmite de generación en generación para la pervivencia física y cultural de los Pueblos Indígenas.',
    },
    {
      termino: 'Salud propia',
      significado: 'Armonía y equilibrio de cuerpo, mente y espíritu.',
    },
  ],
  complementario: [
    {
      texto:
        'Minsalud (2016). Perfil de Salud de la Población Indígena, y medición de desigualdades en salud.',
      tipo: 'Guía',
      descarga: '/downloads/Perfil-salud-pueblos-indigenas-colombia-2016.pdf',
    },
    {
      texto:
        'Defensoría del Pueblo. (2014). Derecho fundamental a la salud de los pueblos indígenas.',
      tipo: 'Boletín',
      descarga: '/downloads/boletinNr7Derechoalasaluddelospueblosindigenas.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social. (2016). Guía metodológica para la construcción de Contenidos de los componentes e Implementación del SISPI.',
      tipo: 'Guía',
      descarga: '/downloads/guia-metodologica-sispri.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Cesar Jaramillo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Salud y Protección Social - Distrito Capital',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Andrés Giovanni Machado Cerquera',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varon Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
