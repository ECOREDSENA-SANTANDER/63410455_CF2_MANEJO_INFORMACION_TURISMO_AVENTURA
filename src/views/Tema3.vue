<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 3
        h1 Tecnologías para la información turística
      
      .bg-full-width.bg-color-2.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-8
              .row.justify-content-center.mb-3
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/2.svg') 
                .col-sm-12.col-lg-10
                    p.mb-0 La transformación digital ha modificado la manera en que se produce, consulta y comparte la información en el sector turístico. Actualmente, las organizaciones disponen de herramientas tecnológicas que facilitan el acceso a datos sobre destinos, servicios, condiciones de viaje y tendencias del mercado, permitiendo responder con mayor agilidad a las necesidades de las personas visitantes y optimizar los procesos de planificación y promoción.


              p.mb-3 En turismo de aventura, las tecnologías apoyan actividades relacionadas con la búsqueda de información, la orientación al visitante, la comercialización de productos, la gestión de reservas y la difusión de contenidos especializados. Además, favorecen la interacción entre organizaciones, comunidades y turistas mediante plataformas que ofrecen información actualizada sobre rutas, atractivos, recomendaciones de seguridad y experiencias de viaje.
              p.mb-0 La incorporación de herramientas digitales también fortalece la competitividad de los destinos. La disponibilidad de información confiable en medios electrónicos incrementa la visibilidad de la oferta turística, mejora la comunicación con diferentes públicos y facilita la toma de decisiones durante la planificación del viaje.

            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/1.svg') 
      
      .cajon.color-primario.p-4.mb-0(data-aos='fade-right')
        h4 Tecnología al servicio de la información turística
        p.mb-0 Las tecnologías para la información turística fortalecen la comunicación, optimizan la gestión de los servicios y amplían las posibilidades de promoción de los destinos de turismo de aventura.
      
      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Fuentes digitales e inteligencia artificial aplicada al turismo
      
      img.mb-5.d-none.d-lg-block(src="@/assets/curso/temas/t3/3.png" data-aos='fade-right')
      p.mb-5(data-aos='fade-right') La gestión de la información turística requiere herramientas que permitan localizar contenidos confiables, contrastar fuentes y procesar datos de manera eficiente. En este contexto, los motores de búsqueda y la inteligencia artificial complementan los procesos de consulta, análisis y generación de información, siempre que sus resultados sean verificados antes de utilizarlos en la planificación, la promoción o la atención al visitante.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/4.png') 
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-4
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/5.svg') 
              .col-sm-12.col-lg-10
                  p.mb-0 Los motores de búsqueda representan una de las principales herramientas para acceder a información relacionada con destinos, servicios turísticos, normatividad, tendencias del mercado y recursos especializados. Su utilización facilita la localización de contenidos provenientes de entidades oficiales, organizaciones internacionales, empresas del sector y centros de investigación, contribuyendo a la actualización permanente de la información utilizada durante la planificación y la operación de actividades turísticas.
            p.mb-4 La calidad de la información obtenida depende de la selección adecuada de las fuentes consultadas. Las publicaciones emitidas por entidades gubernamentales, organismos internacionales, instituciones académicas y organizaciones reconocidas ofrecen mayor respaldo técnico que aquellas provenientes de fuentes sin verificación. Por esta razón, es recomendable contrastar la información antes de incorporarla a procesos de planificación, promoción o atención al visitante.
            p.mb-0 Las fuentes digitales incluyen portales institucionales, observatorios turísticos, bibliotecas virtuales, repositorios científicos, sistemas de información geográfica y plataformas especializadas que reúnen datos sobre destinos, estadísticas, normatividad y buenas prácticas del sector. La consulta permanente de estos recursos favorece la actualización profesional y fortalece la calidad de la información suministrada a las personas visitantes.

      p.mb-5(data-aos='fade-right') La siguientes son algunas fuentes digitales y tipos de información que se ofrecen para la gestión del turismo de aventura.
      
      .row.justify-content-center.mb-5#info(data-aos='fade-right')
        .col-sm-12.col-lg-10
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
                img(src='@/assets/curso/temas/t3/29.svg')
            .tarjeta.color-secundario.p-3(x="16.5%" y="35%" numero="+")
              .h5.mb-2 Ministerio de Comercio, Industria y Turismo
              p.mb-0 Ofrece información oficial sobre normativa, políticas, programas y lineamientos del sector turístico colombiano.

            .tarjeta.color-secundario.p-3(x="7%" y="85%" numero="+")
              .h5.mb-2 ONU Turismo
              p.mb-0 Publica estadísticas, estudios, tendencias, recomendaciones y documentos técnicos relacionados con el sector turístico.

            .tarjeta.color-secundario.p-3(x="93%" y="85%" numero="+")
              .h5.mb-2 Adventure Travel Trade Association (ATTA)
              p.mb-0 Publica estudios, tendencias e información especializada sobre turismo de aventura y comportamiento del mercado.

            .tarjeta.color-secundario.p-3(x="83%" y="35%" numero="+")
              .h5.mb-2 FONTUR
              p.mb-0 Ofrece información sobre proyectos e iniciativas orientados al desarrollo, la competitividad y la promoción del turismo en Colombia.

            .tarjeta.color-secundario.p-3(x="50%" y="15%" numero="+")
              .h5.mb-2 Institutos de investigación y universidades
              p.mb-0 Producen estudios, investigaciones y publicaciones académicas que aportan información especializada sobre turismo, territorio, sostenibilidad y temas relacionados.

      p.mb-3(data-aos='fade-right') La selección de la fuente depende del tipo de información requerida. Las fuentes oficiales son prioritarias para consultar normativa, requisitos y datos institucionales; las organizaciones especializadas aportan información sectorial y tendencias del mercado; y las fuentes académicas permiten ampliar y contrastar información mediante estudios e investigaciones.
      p.mb-5(data-aos='fade-right') En todos los casos, se debe verificar la autoría, la fecha de publicación, la vigencia y la pertinencia de la información antes de utilizarla. El uso responsable de estas herramientas fortalece la gestión de la información y contribuye a ofrecer contenidos actualizados, verificables y pertinentes para la planificación de actividades de turismo de aventura.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inteligencia artificial aplicada al turismo

      .row.justify-content-center.mb-5.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t3/6.png')
        .col-sm-12.col-lg-7.p-4
          p.mb-4.text-white.mcus-2 La transformación digital ha incorporado nuevas herramientas que apoyan la gestión de los destinos turísticos y optimizan la comunicación entre las organizaciones y las personas visitantes. Entre estas tecnologías, la inteligencia artificial (IA) ocupa un lugar relevante debido a su capacidad para analizar grandes volúmenes de información, automatizar procesos, generar contenidos y ofrecer respuestas personalizadas en diferentes etapas de la experiencia turística.

          p.mb-4.text-white Su incorporación ha impulsado cambios en la promoción de destinos, la atención al cliente, la gestión de reservas y el análisis del comportamiento del mercado.

          p.mb-4.text-white La inteligencia artificial comprende un conjunto de tecnologías diseñadas para ejecutar tareas que tradicionalmente requieren capacidades humanas, como interpretar información, reconocer patrones, procesar lenguaje natural o generar recomendaciones. En el sector turístico, estas capacidades permiten mejorar la eficiencia de los procesos operativos, fortalecer la interacción con las personas usuarias y facilitar el acceso a información confiable en tiempos reducidos.

      p.mb-3(data-aos='fade-right') En el turismo de aventura, la IA ofrece herramientas que apoyan la planificación de actividades, la personalización de experiencias y la divulgación de la oferta turística. A partir del análisis de datos relacionados con preferencias de viaje, comportamiento del mercado, condiciones climáticas o disponibilidad de servicios, las organizaciones pueden diseñar productos más ajustados a las expectativas de diferentes segmentos de visitantes. Esta información también contribuye a optimizar la comunicación antes del viaje y durante la permanencia en el destino.

      p.mb-5(data-aos='fade-right') Uno de los avances más representativos corresponde a la inteligencia artificial generativa, capaz de producir textos, imágenes, traducciones, resúmenes y otros contenidos a partir de instrucciones formuladas por las personas usuarias. En turismo, estas herramientas facilitan la elaboración de descripciones de destinos, fichas técnicas, publicaciones para redes sociales, respuestas automáticas a consultas frecuentes y materiales promocionales.


      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/7.png') 
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-4
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/8.svg') 
              .col-sm-12.col-lg-10
                  p.mb-0 No obstante, los contenidos generados mediante inteligencia artificial deben verificarse antes de su publicación, contrastándolos con fuentes confiables y actualizadas para comprobar su exactitud, vigencia y coherencia con la información oficial del destino.

            p.mb-3 Otra aplicación importante se relaciona con los asistentes virtuales y los chatbots, herramientas que responden consultas de manera automática durante las veinticuatro horas del día. Estos sistemas proporcionan información sobre horarios, tarifas, ubicación de atractivos, recomendaciones de viaje y condiciones de participación en actividades de turismo de aventura. Su implementación contribuye a mejorar la oportunidad de la atención y optimiza el tiempo del personal encargado del servicio al cliente.
            p.mb-0 La inteligencia artificial también fortalece el análisis de información proveniente de comentarios, reseñas y valoraciones publicadas por las personas visitantes en plataformas digitales. El procesamiento de estos datos facilita la identificación de fortalezas, oportunidades de mejora y tendencias del mercado, proporcionando información útil para ajustar los productos turísticos y fortalecer la competitividad de las organizaciones.

      p.mb-5(data-aos='fade-right') Las aplicaciones de la inteligencia artificial pueden apoyar diferentes procesos de la gestión turística. La siguiente información presenta algunos de sus usos.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Otras aplicaciones de la inteligencia artificial en turismo de aventura

      

      .tarjeta--container.row.mb-5.justify-content-center(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.tarjeta.bg-color-6.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t3/9.svg')          
          h2.text-center Sistemas de recomendación
          p.mb-0 Sugieren actividades de acuerdo con los intereses y las preferencias de las personas usuarias.

        
        .col-sm-12.col-md-6.col-lg-4.tarjeta.bg-color-7.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t3/10.svg')          
          h2.text-center.mt-5 Traducción automática
          p.mb-0 Facilita la comunicación con visitantes internacionales.


        
        .col-sm-12.col-md-6.col-lg-4.tarjeta.color-primario.text-white.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t3/11.svg')          
          h2.text-center Análisis predictivo
          p.mb-0 Apoya la planificación mediante el estudio de tendencias y del comportamiento de la demanda.

      p.mb-3(data-aos='fade-right') El uso de estas herramientas exige criterios éticos relacionados con la transparencia. Las decisiones relacionadas con la seguridad, la gestión del riesgo o el cumplimiento de la normatividad no deben depender exclusivamente de sistemas automatizados.

      p.mb-5(data-aos='fade-right') La incorporación de la inteligencia artificial genera beneficios, pero también exige precauciones durante su utilización. A continuación, se relacionan ambos aspectos.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Beneficios y consideraciones en el uso de inteligencia artificial


      .row.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton-cus.bg-color-8.p-4.hcard-2
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t3/12.svg')
            h3.text-center Automatización
            p.text-small.mb-0 Automatiza procesos repetitivos. La información producida debe verificarse antes de utilizarla o publicarla.


        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton-cus.bg-color-8.p-4.hcard-2
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t3/13.svg')
            h3.text-center Tiempo de respuesta
            p.text-small.mb-0 Mejora los tiempos de respuesta. Su uso debe proteger los datos personales de las personas usuarias.


        .col-sm-6.col-lg-3.mb-4.mb-sm-0
          .tarjeta--boton-cus.bg-color-8.p-4.hcard-2
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t3/14.svg')
            h3.text-center Personalización
            p.text-small.mb-0 Facilita la personalización de la atención. Es necesario identificar posibles sesgos o información desactualizada.


        .col-sm-6.col-lg-3
          .tarjeta--boton-cus.bg-color-8.p-4.hcard-2
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t3/15.svg')
            h3.text-center Análisis de datos
            p.text-small.mb-0 Apoya la toma de decisiones mediante el análisis de información. Sus resultados deben complementarse siempre con el criterio profesional.

      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        h4 Inteligencia artificial y criterio profesional
        p.mb-0 La inteligencia artificial complementa el trabajo de las organizaciones turísticas, pero no reemplaza el criterio técnico, la experiencia profesional ni la responsabilidad en la toma de decisiones. La calidad de los resultados depende de la información utilizada y de la validación realizada por las personas responsables de la gestión.

      p.mb-0(data-aos='fade-right') La incorporación de herramientas de inteligencia artificial continuará transformando la manera en que se comunica la oferta turística y se gestionan los servicios. Sin embargo, su potencial depende de la integración con otras tecnologías digitales que faciliten el acceso a la información, la interacción con las personas visitantes y la promoción de los destinos.

      
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Aplicaciones móviles, portales turísticos y redes sociales
      
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/16.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las aplicaciones móviles, los portales turísticos y las redes sociales intervienen en diferentes momentos de la experiencia de viaje. Estas herramientas facilitan la consulta de información, la orientación en el territorio, la promoción de servicios y la interacción con las personas visitantes, por lo que su gestión requiere contenidos actualizados, verificables y coherentes con la oferta real del destino.  


      .bg-full-width.bg-color-2.mb-5(data-aos='fade-right')
        .p-full-width
          .titulo-tercer-nivel.mb-5
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicaciones móviles
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-8
              .row.justify-content-center.mb-3
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/18.svg') 
                .col-sm-12.col-lg-10
                    p.mb-0 La transformación digital ha diversificado los canales mediante los cuales las personas buscan información, comparan alternativas, planifican sus viajes y comparten sus experiencias. En la actualidad, gran parte del proceso de decisión ocurre antes de llegar al destino, apoyándose en plataformas digitales que ofrecen información sobre atractivos, rutas, servicios, recomendaciones, disponibilidad y opiniones de otras personas viajeras.


              p.mb-3 En consecuencia, la presencia digital se ha convertido en un componente estratégico para las organizaciones dedicadas al turismo de aventura.

              p.mb-3 Las aplicaciones móviles constituyen herramientas que facilitan el acceso inmediato a información útil durante todas las etapas del viaje. Su funcionalidad va más allá de la consulta de mapas o direcciones, ya que incorporan recursos para la navegación, el registro de recorridos, la identificación de especies, la consulta de condiciones meteorológicas y la comunicación en tiempo real. Estas aplicaciones contribuyen a mejorar la experiencia de las personas visitantes y apoyan la planificación de actividades en escenarios naturales.

              p.mb-0 En el turismo de aventura, algunas aplicaciones permiten descargar mapas para utilizarlos sin conexión a internet, registrar rutas mediante sistemas de posicionamiento global (GPS, por sus siglas en inglés), identificar puntos de interés o documentar recorridos. Otras herramientas apoyan la interpretación ambiental mediante el reconocimiento de flora, fauna o elementos geológicos, enriqueciendo el componente educativo de la experiencia turística.

            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/17.svg') 

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicaciones digitales de apoyo para el turismo de aventura

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/19.png')
        .col-sm-12.col-lg-6
            LineaTiempoD.color-acento-botones
              .row(numero="1" titulo="Google Maps")
                .col-sm-12.col-lg-12
                  p.mb-0 Permite localizar rutas, atractivos y servicios turísticos.

              .row(numero="2" titulo="Maps.me")
                .col-sm-12.col-lg-12
                  p.mb-0 Facilita la navegación mediante mapas disponibles sin conexión a internet.

              .row(numero="3" titulo="Wikiloc")
                .col-sm-12.col-lg-12
                  p.mb-0 Permite consultar y registrar rutas para actividades al aire libre.

              .row(numero="4" titulo="AllTrails")
                .col-sm-12.col-lg-12
                  p.mb-0 Ofrece información sobre senderos, niveles de dificultad y recorridos.

              .row(numero="5" titulo="Merlin Bird ID")
                .col-sm-12.col-lg-12
                  p.mb-0 Apoya la identificación de aves mediante imágenes y sonidos.

              .row(numero="6" titulo="iNaturalist")
                .col-sm-12.col-lg-12
                  p.mb-0 Permite registrar e identificar colaborativamente especies de flora y fauna.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Portales turísticos
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/20.png')
        .col-sm-12.col-lg-7
            p.mb-3 Los portales turísticos representan otra fuente de información ampliamente utilizada por las personas viajeras. Estos espacios reúnen contenidos relacionados con destinos, productos, atractivos, prestadores de servicios, recomendaciones y eventos, facilitando su consulta desde diferentes lugares. Su principal fortaleza radica en ofrecer información estructurada y actualizada que respalda la planificación del viaje.
            p.mb-0 En Colombia, entidades como el Ministerio de Comercio, Industria y Turismo, FONTUR, Parques Nacionales Naturales y el Registro Nacional de Turismo disponen de plataformas digitales que suministran información oficial sobre destinos, normatividad, prestadores de servicios y programas institucionales. La consulta de estas fuentes fortalece la confiabilidad de la información utilizada por las organizaciones turísticas y las personas visitantes.


      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Portales digitales para consultar información turística


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green")
            .row.justify-content-center(titulo="Colombia Travel")
              .col-lg-12
                p.mb-0 Presenta información para la promoción de destinos, productos y experiencias turísticas de Colombia.

            .row.justify-content-center(titulo="Registro Nacional de Turismo")
              .col-lg-12
                p.mb-0 Permite consultar prestadores de servicios turísticos formalmente inscritos.

            .row.justify-content-center(titulo="Parques Nacionales Naturales de Colombia")
              .col-lg-12
                p.mb-0 Suministra información sobre áreas protegidas, servicios y condiciones de acceso.

            .row.justify-content-center(titulo="FONTUR")
              .col-lg-12
                p.mb-0 Ofrece información sobre programas, proyectos y promoción del turismo nacional.

            .row.justify-content-center(titulo="ONU Turismo")
              .col-lg-12
                p.mb-0 Publica estudios, estadísticas y tendencias del turismo internacional.

        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.png')  



      .bg-full-width.bg-color-2.mb-5(data-aos='fade-right')
        .p-full-width
          .titulo-tercer-nivel.mb-3
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Redes sociales
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-9
              p.mb-3 Las redes sociales también han transformado la manera en que los destinos turísticos se comunican con sus diferentes públicos. Plataformas como Facebook, Instagram, YouTube, TikTok o LinkedIn permiten divulgar información de forma inmediata, promover experiencias, fortalecer la identidad del destino y establecer canales permanentes de interacción con las personas usuarias.

              p.mb-3 El contenido publicado en estos medios influye significativamente en la decisión de viaje. Fotografías, videos, relatos de experiencias y recomendaciones compartidas por visitantes generan confianza y contribuyen al posicionamiento de los destinos.

              p.mb-3 Este fenómeno, conocido como contenido generado por usuarios o User Generated Content (UGC, por sus siglas en inglés), se ha convertido en una fuente de consulta para quienes buscan experiencias auténticas antes de realizar una reserva.

              p.mb-0 La gestión de redes sociales requiere planificación y coherencia con la identidad del destino. La información divulgada debe ser verificable, actualizada y consistente con los servicios realmente ofrecidos. Además, la interacción con las personas usuarias exige respuestas oportunas, un lenguaje respetuoso y el seguimiento permanente de comentarios, consultas y opiniones que aporten información para el mejoramiento del servicio.



            .col-sm-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/21.svg') 

      p.mb-5(data-aos='fade-right') Cada red social aporta posibilidades distintas para comunicar la oferta turística. La siguiente información presenta algunas de sus aplicaciones.

      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Función de las redes sociales en la comunicación turística
      
      SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos='fade-right')
        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t3/22.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Facebook
          p.mb-0.text-center.text-white Facilita la difusión de información, eventos y la atención a la comunidad digital.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t3/23.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Instagram
          p.mb-0.text-center.text-white Apoya la promoción visual de experiencias, paisajes y actividades.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t3/24.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold TikTok
          p.mb-0.text-center.text-white Permite divulgar contenidos breves con enfoque experiencial.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t3/25.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold YouTube
          p.mb-0.text-center.text-white Facilita la publicación de videos interpretativos, recorridos y recomendaciones.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t3/26.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold WhatsApp Business
          p.mb-0.text-center.text-white Apoya la atención personalizada, el envío de información y la confirmación de reservas.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Reputación digital

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/27.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Otro aspecto de creciente importancia corresponde a la reputación digital, entendida como la percepción que construyen las personas usuarias a partir de las opiniones, valoraciones y experiencias compartidas en internet. Plataformas como Google, TripAdvisor o Booking permiten calificar los servicios recibidos, convirtiéndose en una fuente de información para futuros visitantes y en un mecanismo de retroalimentación para las organizaciones.

          p.mb-0 El análisis sistemático de estas valoraciones proporciona información útil para identificar fortalezas, reconocer oportunidades de mejora y orientar decisiones relacionadas con la calidad del servicio. La respuesta respetuosa a comentarios positivos y negativos también fortalece la imagen institucional y demuestra compromiso con la mejora continua.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Calidad de la comunicación digital

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/28.png')
        .col-sm-12.col-lg-7
            p.mb-1 La comunicación digital no depende únicamente de la presencia en internet. Su efectividad está asociada con la calidad de la información publicada, la actualización permanente de los contenidos y la capacidad de interacción con las personas usuarias.
            p.mb-1 La incorporación de aplicaciones móviles, portales especializados y redes sociales ha transformado la manera en que se comunica la oferta turística. Estas herramientas amplían el alcance de los destinos, fortalecen la relación con las personas visitantes y generan información valiosa para mejorar los procesos de promoción y atención.
            p.mb-0 Sobre esta base se desarrolla la elaboración de material promocional como estrategia para divulgar la oferta turística de manera organizada, coherente y alineada con la identidad del territorio.







  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
