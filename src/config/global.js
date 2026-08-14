export default {
  global: {
    Name: 'Comunicación de la oferta turística de aventura.',
    Description: 'Este componente formativo desarrolla fundamentos de atención al visitante, comunicación turística y promoción de la oferta de turismo de aventura. Integra protocolos de servicio, comunicación asertiva, orientación al visitante y uso de tecnologías digitales para divulgar información confiable, fortalecer la gestión operativa y promover experiencias seguras, sostenibles y de calidad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
    menuPrincipal: {
  "menu": [
    {
      "nombreRuta": "inicio",
      "icono": "fas fa-home",
      "titulo": "Volver al inicio"
    },
    {
      "nombreRuta": "introduccion",
      "icono": "fas fa-info-circle",
      "titulo": "Introducción",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "tema1",
      "numero": "1",
      "titulo": "Servicio al cliente en turismo de aventura",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "1.1",
          "titulo": "Técnicas, protocolos y calidad del servicio turístico",
          "hash": "t_1_1"
        }
      ]
    },
    {
      "nombreRuta": "tema2",
      "numero": "2",
      "titulo": "Comunicación turística",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "2.1",
          "titulo": "Comunicación asertiva y orientación al visitante",
          "hash": "t_2_1"
        },
        {
          "numero": "2.2",
          "titulo": "Lenguaje técnico aplicado al turismo de aventura",
          "hash": "t_2_2"
        }
      ]
    },
    {
      "nombreRuta": "tema3",
      "numero": "3",
      "titulo": "Tecnologías para la información turística",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "3.1",
          "titulo": "Fuentes digitales e inteligencia artificial aplicada al turismo",
          "hash": "t_3_1"
        },
        {
          "numero": "3.2",
          "titulo": "Aplicaciones móviles, portales turísticos y redes sociales",
          "hash": "t_3_2"
        }
      ]
    },
    {
      "nombreRuta": "tema4",
      "numero": "4",
      "titulo": "Promoción de la oferta turística",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "4.1",
          "titulo": "Material promocional y herramientas de divulgación",
          "hash": "t_4_1"
        },
        {
          "numero": "4.2",
          "titulo": "Medios de promoción y comunicación turística",
          "hash": "t_4_2"
        }
      ]
    }
  ],
  "subMenu": [
    {
      "icono": "fas fa-sitemap",
      "titulo": "Síntesis",
      "nombreRuta": "sintesis",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "actividad",
      "icono": "far fa-question-circle",
      "titulo": "Actividad didáctica",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "glosario",
      "icono": "fas fa-sort-alpha-down",
      "titulo": "Glosario"
    },
    {
      "icono": "fas fa-book",
      "titulo": "Referencias bibliográficas",
      "nombreRuta": "referencias"
    },
    {
      "icono": "fas fa-file-pdf",
      "titulo": "Descargar PDF",
      "download": "downloads/dist.pdf"
    },
    {
      "icono": "fas fa-download",
      "titulo": "Descargar material",
      "download": "downloads/material.zip"
    },
    {
      "icono": "far fa-registered",
      "titulo": "Créditos",
      "nombreRuta": "creditos"
    }
  ]
},
  glosario: [
    {
      termino: 'Aplicación móvil',
      significado: 'programa informático diseñado para dispositivos móviles que facilita el acceso a información, servicios y herramientas relacionadas con la planificación, la operación y la promoción de actividades turísticas.',
    },
    {
      termino: 'Briefing',
      significado: 'reunión informativa realizada antes del inicio de una actividad para comunicar instrucciones y recomendaciones a las personas participantes.',
    },
    {
      termino: 'Calidad del servicio',
      significado: 'grado en que la prestación de un servicio satisface las necesidades y expectativas de las personas visitantes mediante procesos organizados, seguros y orientados a la mejora continua.',
    },
    {
      termino: 'Comunicación asertiva',
      significado: 'habilidad para transmitir información de manera clara, respetuosa y oportuna, favoreciendo la comprensión, la interacción y la resolución adecuada de situaciones durante la prestación del servicio turístico.',
    },
    {
      termino: 'Comunicación multicanal',
      significado: 'estrategia que integra diferentes medios de comunicación para mantener mensajes consistentes y facilitar el acceso a la información mediante diversos canales.',
    },
    {
      termino: 'Comunicación turística',
      significado: 'proceso mediante el cual se intercambia información entre las organizaciones turísticas, las personas visitantes y los demás actores del sector para orientar, informar y promover la oferta turística.',
    },
    {
      termino: 'Inteligencia artificial',
      significado: 'conjunto de tecnologías capaces de procesar información, reconocer patrones y generar respuestas o contenidos que apoyan la gestión de la información, la atención al visitante y la promoción turística.',
    },
    {
      termino: 'Interpretación del patrimonio',
      significado: 'proceso de comunicación que facilita la comprensión y valoración del patrimonio natural y cultural mediante mensajes significativos dirigidos a las personas visitantes.',
    },
    {
      termino: 'Lenguaje técnico',
      significado: 'conjunto de términos especializados utilizados para comunicar información de manera precisa durante la planificación, la operación y la gestión de actividades de turismo de aventura.',
    },
    {
      termino: 'Lista de verificación',
      significado: 'instrumento que permite comprobar de manera sistemática el cumplimiento de requisitos, condiciones o medidas previamente establecidas para una actividad.',
    },
    {
      termino: 'Material promocional',
      significado: 'conjunto de recursos impresos o digitales utilizados para divulgar información sobre productos, servicios y experiencias turísticas.',
    },
    {
      termino: 'Medios de promoción',
      significado: 'canales de comunicación empleados para difundir la oferta turística, fortalecer el posicionamiento del destino y facilitar el acceso de diferentes públicos a la información.',
    },
    {
      termino: 'Orientación al visitante',
      significado: 'proceso de atención mediante el cual se proporciona información clara, pertinente y oportuna sobre el destino, las actividades, los servicios, las recomendaciones y las condiciones de participación antes, durante y después de la experiencia turística.',
    },
    {
      termino: 'Portales turísticos',
      significado: 'plataformas digitales que reúnen información sobre destinos, atractivos, prestadores de servicios, productos turísticos y recursos de apoyo para la planificación de viajes.',
    },
    {
      termino: 'Protocolo de atención',
      significado: 'procedimiento estandarizado que orienta las acciones del personal durante la prestación del servicio y contribuye a brindar una atención organizada, segura y coherente.',
    },
    {
      termino: 'Redes sociales',
      significado: 'plataformas digitales que permiten compartir información, interactuar con diferentes públicos y divulgar contenidos relacionados con la oferta turística.',
    },
    {
      termino: 'Reputación digital',
      significado: 'percepción que las personas usuarias construyen sobre una organización o destino a partir de opiniones, valoraciones y experiencias compartidas en medios digitales.',
    },
    {
      termino: 'Servicio al cliente',
      significado: 'conjunto de actividades orientadas a atender las necesidades de las personas visitantes antes, durante y después de la prestación del servicio turístico.',
    },
    {
      termino: 'Tecnologías para la información turística',
      significado: 'herramientas digitales utilizadas para buscar, gestionar, procesar, comunicar y divulgar información relacionada con destinos, productos y servicios turísticos.',
    },
  ],
  referencias: [
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
