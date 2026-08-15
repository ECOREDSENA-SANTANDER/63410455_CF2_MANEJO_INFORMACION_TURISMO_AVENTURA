<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 2
        h1 Comunicación turística
      
      img.mb-5.d-none.d-lg-block(src="@/assets/curso/temas/t2/1.png" data-aos='fade-right')
      p.mb-5(data-aos='fade-right') La comunicación representa uno de los procesos estratégicos que sustentan la gestión de los servicios turísticos, al facilitar el intercambio de información entre las organizaciones, las personas visitantes, las comunidades receptoras y los diferentes actores que intervienen en la operación de los destinos. En el turismo de aventura, donde las actividades se desarrollan en escenarios naturales y con distintos niveles de complejidad, la comunicación adquiere un papel determinante para orientar la experiencia, promover comportamientos responsables y contribuir a la seguridad durante todas las etapas del servicio.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.png') 
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/3.svg') 
              .col-sm-12.col-lg-10
                  p.mb-0 Desde la planificación del viaje hasta la finalización de la experiencia, las personas visitantes requieren información clara, suficiente y confiable que les permita tomar decisiones informadas. La calidad de esta comunicación influye directamente en la percepción del destino, en la preparación para participar en las actividades y en el nivel de satisfacción alcanzado al finalizar el recorrido. En consecuencia, comunicar no implica únicamente transmitir datos, sino facilitar la comprensión de la información necesaria para que la experiencia turística se desarrolle en condiciones adecuadas.
            p.mb-3 La comunicación turística también fortalece la relación entre las organizaciones y sus diferentes grupos de interés. Prestadores de servicios, entidades públicas, comunidades locales, operadores turísticos y visitantes intercambian información de manera permanente para coordinar actividades, resolver inquietudes, gestionar reservas, divulgar recomendaciones y promover el patrimonio natural y cultural del territorio. Esta interacción favorece una gestión más eficiente de la oferta turística y contribuye a consolidar relaciones de confianza entre quienes participan en la actividad.

            p.mb-0 Otro aspecto relevante corresponde al carácter multidireccional de la comunicación. Tradicionalmente, las organizaciones difundían información de forma unidireccional mediante folletos, anuncios o campañas publicitarias. Actualmente, los medios digitales permiten una comunicación permanente, en la cual las personas visitantes también producen contenidos, formulan preguntas, publican opiniones, califican los servicios y comparten experiencias que influyen en la imagen de los destinos. Esta dinámica exige una gestión activa de los canales de comunicación y una respuesta oportuna frente a las necesidades de información del público.

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/4.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 En el turismo de aventura, la comunicación cumple funciones que trascienden la promoción de los servicios. Antes del viaje facilita la entrega de información relacionada con requisitos físicos, condiciones de participación, itinerarios, equipos necesarios y recomendaciones para la actividad. Durante el recorrido orienta el comportamiento del grupo, fortalece la interpretación del patrimonio natural y cultural y apoya la aplicación de protocolos de seguridad. Después de la experiencia, permite mantener el contacto con las personas visitantes, conocer su nivel de satisfacción, gestionar sugerencias y fortalecer los procesos de fidelización.

          p.mb-0 La efectividad de la comunicación depende de la claridad del mensaje, la selección del canal adecuado, el conocimiento del público objetivo y la capacidad para verificar que la información haya sido comprendida. Cuando alguno de estos elementos presenta deficiencias, pueden generarse interpretaciones equivocadas que afectan la calidad del servicio, dificultan la coordinación de las actividades o incrementan los riesgos durante la operación.

      p.mb-5(data-aos='fade-right') A continuación, se presentan algunas barreras que pueden afectar el intercambio de información durante la prestación de servicios turísticos.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Barreras frecuentes en la comunicación turística

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
           AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green")
            .row.justify-content-center(titulo="Información incompleta")
              .col-lg-12
                p.mb-0 Genera incertidumbre y aumenta la posibilidad de errores.

            .row.justify-content-center(titulo="Lenguaje técnico sin explicación")
              .col-lg-12
                p.mb-0 Dificulta la comprensión de las instrucciones.

            .row.justify-content-center(titulo="Diferencias culturales o idiomáticas")
              .col-lg-12
                p.mb-0 Pueden dificultar la comprensión de los mensajes entre las personas visitantes y el personal que presta el servicio.

            .row.justify-content-center(titulo="Fallas en los canales de comunicación")
              .col-lg-12
                p.mb-0 Retrasan la entrega de información relevante.

            .row.justify-content-center(titulo="Distracciones del entorno")
              .col-lg-12
                p.mb-0 Reducen la atención durante la comunicación de instrucciones y recomendaciones de seguridad.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.png')  

      p.mb-5(data-aos='fade-right') La identificación de estas barreras permite ajustar los mensajes, seleccionar medios apropiados y verificar la comprensión de la información antes de continuar con la actividad.

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/6.png')
        .col-sm-12.col-lg-9
          .bg-color-2.p-4.br-1.mb-4
            .row.justify-content-center.my-5
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/7.svg')
              .col-sm-12.col-lg-8
                  .bg-secundario.py-2.mb-4
                    h4.mb-0.text-white.px-3 Propósito de la comunicación turística
                  p.mb-0 La comunicación turística no se limita a informar sobre un destino o una actividad. Su propósito consiste en orientar, generar confianza, promover comportamientos responsables y facilitar experiencias seguras y satisfactorias para las personas visitantes.
          p.mb-0 El desarrollo de estas competencias requiere técnicas que favorezcan la interacción respetuosa, la comprensión de los mensajes y la resolución de situaciones propias de la atención al público.

      p.mb-5(data-aos='fade-right') La comunicación y la orientación se complementan durante la prestación del servicio turístico. Mientras la comunicación asertiva permite transmitir información de manera clara, respetuosa y oportuna, la orientación facilita que las personas visitantes comprendan las condiciones de la actividad, se preparen adecuadamente y participen de forma segura durante las diferentes etapas de la experiencia.

      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Comunicación asertiva y orientación al visitante

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comunicación asertiva

      .row.justify-content-center.mb-5.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t2/8.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t2/9.svg')
          p.mb-4.text-white La comunicación asertiva corresponde a la capacidad de expresar información, ideas, recomendaciones y orientaciones de manera clara, respetuosa y oportuna, promoviendo relaciones basadas en la confianza y el entendimiento mutuo. En el ámbito del turismo de aventura, esta habilidad adquiere una importancia estratégica debido a que gran parte de la seguridad y de la calidad del servicio depende de la correcta comprensión de las instrucciones suministradas antes, durante y después de cada actividad.
          p.mb-0.text-white  La comunicación asertiva no se limita a transmitir información. También implica escuchar activamente, interpretar las necesidades de las personas visitantes, responder con precisión a sus inquietudes y adaptar el mensaje según las características del grupo. Este proceso favorece una interacción más cercana, reduce la incertidumbre y facilita la construcción de experiencias positivas.

      p.mb-4(data-aos='fade-right') En escenarios de turismo de aventura es frecuente que los grupos estén conformados por personas con diferentes edades, nacionalidades, niveles de experiencia o expectativas frente a la actividad. Estas diferencias hacen necesario ajustar el lenguaje, la profundidad de las explicaciones y la forma de presentar la información, procurando que todas las personas comprendan los procedimientos y recomendaciones establecidos para el desarrollo seguro de la experiencia.

      p.mb-5(data-aos='fade-right') La comunicación asertiva también fortalece el trabajo colaborativo entre quienes participan en la operación turística. Guías, coordinadores, personal administrativo, conductores, organismos de apoyo y comunidades locales requieren intercambiar información de manera permanente para coordinar actividades, resolver situaciones imprevistas y garantizar la continuidad del servicio. La claridad en la comunicación favorece la coordinación operativa y disminuye la posibilidad de errores derivados de interpretaciones incorrectas.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comunicación verbal y no verbal
      
      p.mb-5(data-aos='fade-right') La comunicación con las personas visitantes se desarrolla mediante palabras, gestos, posturas, expresiones y otras señales que se complementan durante la interacción.

      TabsC.color-primario.mb-5(data-aos='fade-right')
        .py-3.py-md-4(titulo="Comunicación verbal")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/10.png')
            .col-sm-12.col-lg-7
              p.mb-0 Comprende la información transmitida mediante el lenguaje oral o escrito. Se utiliza para explicar itinerarios, informar condiciones de participación, describir las características del recorrido, presentar recomendaciones de seguridad y resolver inquietudes.

        .py-3.py-md-4(titulo="Claridad del mensaje verbal")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/11.png')
            .col-sm-12.col-lg-7
              p.mb-0 La efectividad del mensaje depende de la claridad del vocabulario, el orden de las ideas, la precisión de las instrucciones y la adaptación del lenguaje al nivel de conocimiento del grupo. Las explicaciones excesivamente técnicas o ambiguas pueden generar confusión.

        .py-3.py-md-4(titulo="Tono de voz")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/12.png')
            .col-sm-12.col-lg-7
              p.mb-0 Una comunicación pausada, segura y cordial transmite confianza, facilita la comprensión de las instrucciones y contribuye a mantener un ambiente de tranquilidad durante la actividad.

        .py-3.py-md-4(titulo="Comunicación no verbal")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/13.png')
            .col-sm-12.col-lg-7
              p.mb-0 Incluye gestos, expresiones faciales, postura corporal, contacto visual y movimientos que complementan el significado de las palabras e influyen en la percepción de la atención recibida.

        .py-3.py-md-4(titulo="Aplicación en escenarios naturales")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/14.png')
            .col-sm-12.col-lg-7
              p.mb-0 Cuando las condiciones ambientales dificultan la comunicación oral, los gestos previamente acordados permiten mantener la coordinación del grupo y transmitir instrucciones de manera rápida.

        .py-3.py-md-4(titulo="Coherencia del mensaje")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/15.png')
            .col-sm-12.col-lg-7
              p.mb-0 La correspondencia entre el lenguaje verbal y no verbal fortalece la credibilidad y permite que las instrucciones sean interpretadas con mayor confianza y seguridad.

      p.mb-5(data-aos='fade-right') Además del lenguaje verbal y no verbal, la interacción requiere escucha activa, retroalimentación y adaptación del mensaje. La retroalimentación permite verificar que la información haya sido comprendida, mientras que la adaptación facilita responder a las características y necesidades del grupo.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Escucha activa como herramienta de atención

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/16.png') 
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/17.svg') 
              .col-sm-12.col-lg-10
                  p.mb-0 La escucha activa representa una de las principales competencias comunicativas en la prestación de servicios turísticos. Consiste en prestar atención consciente a las personas interlocutoras, interpretar adecuadamente sus necesidades y responder de forma pertinente. Este proceso requiere concentración, disposición para comprender diferentes puntos de vista y capacidad para formular preguntas que aclaren la información cuando sea necesario.
            p.mb-0 Durante la atención a las personas visitantes, la escucha activa facilita la identificación de inquietudes relacionadas con el estado de salud, la experiencia previa, las expectativas frente a la actividad o las condiciones particulares que puedan requerir ajustes durante la operación. La información obtenida mediante este proceso aporta elementos para personalizar la atención y fortalecer la gestión preventiva del riesgo.

      .bg-full-width.bg-color-2.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-8
              .titulo-tercer-nivel.mb-5
                img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
                h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo de situaciones difíciles
              .row.justify-content-center.mb-3
                .col-sm-12.col-lg-1.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t2/19.svg') 
                .col-sm-12.col-lg-11
                    p.mb-0 La prestación de servicios turísticos puede dar lugar a situaciones que requieren una comunicación cuidadosa, especialmente cuando se presentan retrasos, cambios en los itinerarios, condiciones climáticas adversas o inconformidades relacionadas con el servicio. En estos escenarios, la comunicación asertiva facilita la búsqueda de soluciones mediante un diálogo respetuoso y orientado a la resolución de la situación planteada.

              p.mb-3 La respuesta institucional debe caracterizarse por la claridad, la objetividad y el respeto hacia las personas visitantes. Explicar las razones de una decisión, ofrecer alternativas cuando sea posible y mantener una actitud serena favorece la confianza y contribuye a preservar una relación positiva, incluso en circunstancias imprevistas.
              p.mb-0 Para reconocer algunas técnicas aplicables frente a diferentes conductas de las personas usuarias, consulte el siguiente video.
            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/18.svg') 

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/FdDqDQ8i2Gk?si=9xaQwZ_HmB3lpOug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p.mb-5(data-aos='fade-right') Las siguientes prácticas permiten fortalecer la comunicación y responder de manera adecuada durante la atención.`

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Buenas prácticas para la comunicación asertiva

      SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos='fade-right')
        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/20.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Utilizar lenguaje claro
          p.mb-0.text-center.text-white Facilita la comprensión de la información.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/21.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Escuchar antes de responder
          p.mb-0.text-center.text-white Favorece respuestas acordes con las necesidades de la persona visitante.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/22.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Confirmar la comprensión
          p.mb-0.text-center.text-white Reduce errores durante la operación.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/23.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Mantener una actitud respetuosa
          p.mb-0.text-center.text-white Fortalece la confianza y la calidad del servicio.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/24.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Adaptar el mensaje al público
          p.mb-0.text-center.text-white Mejora la efectividad de la comunicación.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/25.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Explicar decisiones con objetividad
          p.mb-0.text-center.text-white Favorece la resolución de situaciones difíciles.

      p.mb-5(data-aos='fade-right') La aplicación conjunta de estas prácticas contribuye a una comunicación más efectiva y fortalece el desarrollo seguro de las actividades.

      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        h4 Comunicación asertiva y calidad del servicio
        p.mb-0 La comunicación asertiva fortalece la calidad del servicio cuando integra claridad, escucha activa, respeto y capacidad de adaptación. Estas habilidades favorecen una interacción efectiva con las personas visitantes y contribuyen al desarrollo seguro de las actividades de turismo de aventura.

      p.mb-5(data-aos='fade-right') Para reconocer cómo la comunicación clara, la escucha activa y la adaptación del mensaje favorecen la orientación y la seguridad de las personas visitantes, se invita a explorar el siguiente pódcast.

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t2/26.svg')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Pódcast: vender textiles con argumentos: del dato técnico al beneficio del cliente"
              :audio="require_src('@/assets/curso/temas/t2/podcast.mp3')"
          )
      p.mb-5(data-aos='fade-right') Estas habilidades comunicativas constituyen la base para brindar información pertinente y orientar a las personas visitantes antes, durante y después de la experiencia turística.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Orientación al visitante

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/27.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La orientación al visitante comprende el conjunto de acciones encaminadas a suministrar información clara, pertinente y oportuna que facilite la participación en las actividades turísticas y contribuya al desarrollo de experiencias seguras, organizadas y satisfactorias. Este proceso inicia antes del desplazamiento hacia el destino, continúa durante la ejecución de la actividad y finaliza con la entrega de información posterior a la experiencia, fortaleciendo la relación entre las organizaciones turísticas y las personas visitantes.
          p.mb-0 En el turismo de aventura, la orientación adquiere un carácter preventivo y educativo. Además de informar sobre horarios, servicios o características del recorrido, proporciona recomendaciones relacionadas con la preparación física, el uso adecuado de los equipos, las condiciones ambientales, el comportamiento esperado durante la actividad y las medidas de seguridad establecidas para reducir los riesgos asociados con la práctica de actividades en escenarios naturales.

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/28.png') 
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/29.svg') 
              .col-sm-12.col-lg-10
                  p.mb-0 La calidad de la orientación influye directamente en la percepción del servicio. Una información organizada, coherente y fácilmente comprensible reduce la incertidumbre, fortalece la confianza y facilita la toma de decisiones por parte de las personas visitantes. De igual manera, favorece el cumplimiento de los protocolos operativos y mejora la coordinación entre quienes participan en la actividad.
            p.mb-0 La orientación también representa una oportunidad para promover el conocimiento del patrimonio natural y cultural del territorio. Cada interacción con las personas visitantes permite divulgar información sobre la biodiversidad, la historia local, las manifestaciones culturales, las tradiciones comunitarias y los principios de sostenibilidad que orientan el desarrollo del turismo de aventura. De esta manera, la comunicación trasciende el carácter informativo y se convierte en una herramienta para fortalecer la interpretación del territorio y promover comportamientos responsables.

      p.mb-5(data-aos='fade-right') La información debe acompañar a la persona visitante antes, durante y después de la experiencia. A continuación, se presentan las particularidades de cada momento.

      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Orientación durante la experiencia turística
      
      .bg-full-width.bg-fondo-1.mb-5(data-aos='fade-right')
        .p-full-width
            .tarjeta.bg-color-4.p-4
              PasosB.color-acento-botones
                .row.justify-content-center.mb-4(titulo="")
                  .col-sm-12.col-lg-6
                    h4 Información previa a la actividad
                    p.mb-0 La preparación comienza antes de la llegada al destino. Deben comunicarse las características generales de la actividad, la duración del recorrido, el nivel de dificultad, los requisitos físicos, las condiciones climáticas esperadas, los elementos que deben portar las personas participantes y las restricciones existentes.

                    p.mb-0 También deben incluirse horarios, puntos de encuentro, medios de transporte, formas de pago, documentación requerida y canales de contacto. Una comunicación completa disminuye la posibilidad de cancelaciones, retrasos o inconvenientes derivados de información incompleta.
                  .col-sm-12.col-lg-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/30.png', alt='')

                .row.justify-content-center.mb-4(titulo="")
                  .col-sm-12.col-lg-6
                    h4 Orientación durante la actividad
                    p.mb-0 El personal responsable suministra información sobre el recorrido, recuerda las medidas de seguridad, explica las características del entorno y responde las inquietudes que puedan surgir. La comunicación debe adaptarse a las condiciones del grupo, las características del terreno y los cambios del entorno natural.
                  .col-sm-12.col-lg-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/31.png', alt='')

                .row.justify-content-center.mb-4(titulo="")
                  .col-sm-12.col-lg-6
                    h4 Interpretación durante el recorrido
                    p.mb-0 La identificación de especies, la descripción de ecosistemas, la historia del territorio y la explicación de fenómenos geológicos enriquecen la experiencia y favorecen una mayor valoración del patrimonio natural y cultural.
                  .col-sm-12.col-lg-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/32.png', alt='')

                .row.justify-content-center.mb-4(titulo="")
                  .col-sm-12.col-lg-6
                    h4 Orientación posterior a la experiencia
                    p.mb-0 Al finalizar pueden proporcionarse recomendaciones para futuras visitas, información sobre otros productos turísticos, canales para presentar sugerencias y medios para compartir fotografías o material audiovisual del recorrido.
                  .col-sm-12.col-lg-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/33.png', alt='')

                .row.justify-content-center.mb-4(titulo="")
                  .col-sm-12.col-lg-6
                    h4 Retroalimentación
                    p.mb-0 Las encuestas de satisfacción, las entrevistas breves y los formularios digitales permiten conocer la percepción de las personas visitantes e identificar oportunidades para actualizar los procesos operativos.
                  .col-sm-12.col-lg-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/34.png', alt='')

        
      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Orientación para diferentes perfiles de visitantes
      
      p.mb-3(data-aos='fade-right') Las organizaciones turísticas atienden grupos con características diversas. La orientación debe adaptarse al nivel de experiencia, la edad, el idioma, las condiciones físicas y las necesidades particulares de quienes participan en las actividades. Esta adaptación facilita la comprensión de la información y promueve condiciones de participación más equitativas.

      p.mb-5(data-aos='fade-right') La siguiente información presenta algunas orientaciones que pueden aplicarse de acuerdo con las características de las personas participantes.

      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Adaptación de la orientación según el perfil del visitante

      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/35.svg', alt='')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center Personas con poca experiencia
                p.mb-0 Requieren explicaciones detalladas y demostraciones prácticas.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/36.svg', alt='')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center Visitantes internacionales
                p.mb-0 Pueden requerir información bilingüe o apoyos visuales que faciliten la comprensión.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/37.svg', alt='')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center Personas mayores
                p.mb-0 Requieren un ritmo de comunicación adecuado y la verificación permanente de la comprensión.
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/38.svg', alt='')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center Grupos familiares
                p.mb-0 Necesitan recomendaciones específicas para facilitar la participación conjunta.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/39.svg', alt='')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center Personas con discapacidad
                p.mb-0 Requieren ajustes en la comunicación de acuerdo con sus necesidades de accesibilidad.





      p.mb-5(data-aos='fade-right') Cuando participan niñas, niños, personas mayores o personas con discapacidad, la comunicación debe ajustarse mediante lenguaje sencillo, apoyos accesibles y tiempos suficientes para resolver inquietudes.
      
      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2  Orientación e interpretación del patrimonio

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/40.png')
        .col-sm-12.col-lg-7
          p.mb-4 La orientación al visitante también incorpora procesos de interpretación del patrimonio, entendidos como estrategias de comunicación que facilitan la comprensión del significado de los recursos naturales y culturales presentes en el territorio. Más que transmitir información descriptiva, la interpretación busca establecer conexiones entre las personas visitantes y el entorno, promoviendo una experiencia significativa y fortaleciendo el compromiso con la conservación.
          p.mb-0 Durante las actividades de turismo de aventura, la interpretación puede desarrollarse mediante relatos, demostraciones, preguntas orientadoras y explicaciones relacionadas con la biodiversidad, la geología, la cultura local y las prácticas tradicionales de las comunidades. Estas estrategias enriquecen la experiencia turística y contribuyen a valorar el patrimonio desde una perspectiva ambiental, social y cultural.

      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        h4 Orientación integral al visitante
        p.mb-0 Una orientación efectiva combina información operativa, interpretación del patrimonio y comunicación preventiva. La articulación de estos elementos fortalece la experiencia turística, favorece la seguridad y promueve el respeto por el entorno natural y cultural.

      p.mb-0(data-aos='fade-right') La orientación al visitante requiere una terminología precisa que facilite la comprensión de las actividades y mantenga criterios uniformes entre los diferentes actores del sector.
      
      
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Lenguaje técnico aplicado al turismo de aventura
      
      .row.justify-content-center.mb-5.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t2/42.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t2/41.svg')
          p.mb-4.text-white El uso del lenguaje técnico permite comunicar información especializada de manera uniforme durante la planificación, la orientación y la operación de actividades de turismo de aventura. Para que esta comunicación sea efectiva, la precisión conceptual debe combinarse con explicaciones accesibles, coherencia documental y adaptación a las características del público.
          p.mb-0.text-white El lenguaje técnico corresponde al conjunto de términos, expresiones y conceptos especializados utilizados por las personas y organizaciones que participan en un determinado campo del conocimiento. En el turismo de aventura, facilita la comunicación entre los actores del sector, fortalece la coordinación de las actividades operativas y favorece la comprensión de procedimientos relacionados con la seguridad, la interpretación del patrimonio, la atención al visitante y la gestión de la información.
      
      p.mb-3(data-aos='fade-right') La utilización de una terminología uniforme contribuye a reducir interpretaciones equivocadas durante la planificación y ejecución de las actividades. Expresiones como itinerario, capacidad de carga, nivel de dificultad, gestión del riesgo, punto de encuentro, briefing de seguridad o plan de emergencia poseen significados específicos dentro del turismo de aventura y permiten establecer criterios comunes entre prestadores de servicios, guías, autoridades y organizaciones de apoyo.
      p.mb-5(data-aos='fade-right') El uso adecuado del lenguaje técnico también fortalece la calidad de la información suministrada a las personas visitantes. La precisión en las explicaciones facilita la comprensión de las actividades, disminuye la incertidumbre y contribuye a generar confianza antes del inicio del recorrido. No obstante, los términos especializados deben acompañarse de explicaciones claras cuando el público no esté familiarizado con este tipo de vocabulario.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Terminología técnica en la operación turística

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/43.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La operación de actividades de turismo de aventura incorpora conceptos técnicos relacionados con la planificación, la logística, la seguridad y la interpretación del territorio. Estos términos permiten documentar procedimientos, elaborar protocolos, diseñar itinerarios y comunicar información de manera homogénea entre las personas responsables de la actividad.

          p.mb-0 La estandarización de la terminología también facilita los procesos de capacitación, la actualización de documentos institucionales y la aplicación de normas técnicas relacionadas con la calidad y la seguridad. Cuando las personas utilizan el mismo vocabulario técnico, disminuye la posibilidad de errores derivados de interpretaciones diferentes sobre una instrucción.
      p.mb-5(data-aos='fade-right') La siguiente información reúne algunos términos empleados durante la operación turística.
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Terminología técnica utilizada en turismo de aventura
  
      .bg-full-width.bg-fondo-2.mb-5.br-2(data-aos='fade-right')
        .p-full-width
          .row.justify-content-end.mb-0
            .col-sm-12.col-lg-8
              SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos='fade-right')
                .tarjeta.bg-color-4.p-4.hcard-2
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t2/45.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Itinerario
                  p.mb-0.text-center Organiza cronológicamente las actividades del recorrido.

                .tarjeta.bg-color-4.p-4.hcard-2
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t2/46.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Capacidad de carga
                  p.mb-0.text-center Determina el número máximo de personas que puede recibir un sitio bajo criterios de sostenibilidad y manejo.

                .tarjeta.bg-color-4.p-4.hcard-2
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t2/47.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold #[i Briefing]
                  p.mb-0.text-center Reunión informativa realizada antes del inicio de la actividad para comunicar instrucciones y recomendaciones.

                .tarjeta.bg-color-4.p-4.hcard-2
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t2/48.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Gestión del riesgo
                  p.mb-0.text-center Proceso para identificar, evaluar, mitigar y controlar riesgos durante la operación.

                .tarjeta.bg-color-4.p-4.hcard-2
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t2/49.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Punto de encuentro
                  p.mb-0.text-center Lugar definido para la reunión y organización del grupo.

                .tarjeta.bg-color-4.p-4.hcard-2
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t2/50.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Ruta interpretativa
                  p.mb-0.text-center Recorrido diseñado para facilitar el conocimiento del patrimonio natural y cultural.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comunicación técnica con las personas visitantes
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/51.png') 
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-4
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/52.svg') 
              .col-sm-12.col-lg-10
                  p.mb-0 El personal encargado de la atención debe traducir la información técnica a un lenguaje accesible sin perder precisión conceptual. Este proceso resulta especialmente importante durante la explicación de protocolos de seguridad, el uso de equipos especializados o las recomendaciones relacionadas con el comportamiento esperado durante las actividades.
            p.mb-4 La adaptación del lenguaje implica reconocer el nivel de experiencia de las personas participantes y evitar el uso innecesario de tecnicismos cuando puedan dificultar la comprensión. Las explicaciones pueden complementarse mediante ejemplos, demostraciones prácticas, apoyos gráficos o verificaciones que permitan confirmar que la información ha sido interpretada correctamente.
            p.mb-0 La comunicación técnica también debe mantener coherencia entre el lenguaje oral, los documentos escritos y la señalización presente en el destino. Esta consistencia facilita la orientación de las personas visitantes y fortalece la percepción de organización y profesionalismo durante la prestación del servicio.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Lenguaje técnico en la documentación operativa
  
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/53.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La gestión de la información en turismo de aventura requiere administrar diferentes documentos técnicos que apoyan la planificación y la operación de las actividades. Entre ellos se encuentran protocolos, fichas técnicas, guiones de interpretación, listas de verificación, registros de inspección, formatos de consentimiento informado y planes de emergencia. 
  
      p.mb-5(data-aos='fade-right') Estos documentos emplean terminología especializada y criterios uniformes que permiten describir con precisión las condiciones de la actividad, los procedimientos y las medidas de seguridad. Expresiones como peligro, riesgo, incidente, medida de control, requisito, participante, inspección y procedimiento tienen un significado específico dentro de la operación turística; por ello, deben emplearse de manera clara, consistente y acorde con su definición técnica.
  
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 1.] Uso del lenguaje técnico en la documentación
      .tabla-b.color-acento-contenido.fill-acento-contenido.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.text-center.h4.mb-0.text-white Expresión general
              th.text-center.h4.mb-0.text-white Expresión técnica
          tbody
            tr
              td Hay algo que puede causar daño.
              td Se identifica un peligro asociado con la actividad.
            tr
              td Se revisaron los equipos.
              td Se realizó la inspección de los equipos antes de la actividad.
            tr
              td Se tomaron medidas para evitar problemas.
              td Se implementaron medidas de control para reducir el riesgo identificado.
            tr
              td Ocurrió un problema durante el recorrido.
              td Se registró un incidente durante el desarrollo de la actividad.
  
      p.mb-3(data-aos='fade-right') La precisión de los términos empleados contribuye a la calidad de estos documentos. Un vocabulario técnico uniforme reduce ambigüedades, facilita la interpretación de la información y favorece la trazabilidad de los procesos organizacionales. Asimismo, una documentación clara y estructurada facilita su actualización cuando se presentan cambios en la normatividad, las condiciones de operación o los procedimientos establecidos.
      p.mb-5(data-aos='fade-right') A continuación, se presentan algunos documentos técnicos utilizados en turismo de aventura y su finalidad.

  
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Documentos técnicos utilizados en turismo de aventura
  
      SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos='fade-right')
        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/54.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Ficha técnica
          p.mb-0.text-center.text-white Registra las características y condiciones relevantes de la actividad turística.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/55.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Guion de interpretación
          p.mb-0.text-center.text-white Organiza la información utilizada para comunicar e interpretar el patrimonio natural y cultural.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/56.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Protocolo operativo
          p.mb-0.text-center.text-white Establece procedimientos y orientaciones para el desarrollo organizado y seguro de la actividad.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/57.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Plan de emergencias
          p.mb-0.text-center.text-white Define las acciones y responsabilidades para responder ante situaciones de emergencia.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/58.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Lista de verificación
          p.mb-0.text-center.text-white Permite comprobar el cumplimiento de requisitos, condiciones o medidas establecidas para la actividad.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/59.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Consentimiento informado
          p.mb-0.text-center.text-white Documenta que la persona participante ha recibido información relevante sobre la actividad y manifiesta su consentimiento para participar.

  
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2  Comunicación técnica entre organizaciones
  
  
      .row.justify-content-center.mb-5(data-aos='fade-right')
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/60.png')
            .col-sm-12.col-lg-7
                p.mb-4 La comunicación especializada no solo se establece con las personas visitantes. También resulta indispensable para coordinar acciones entre operadores turísticos, autoridades ambientales, organismos de socorro, entidades territoriales y demás organizaciones que participan en la gestión del destino.
                p.mb-4 Durante la planeación de eventos, el desarrollo de recorridos o la atención de situaciones de emergencia, la utilización de términos técnicos comunes facilita el intercambio de información, mejora la coordinación interinstitucional y contribuye a una respuesta más eficiente frente a las situaciones que pueden presentarse durante la operación.
                p.mb-0 Esta articulación favorece los procesos de reporte, seguimiento y evaluación, ya que la información registrada mantiene criterios homogéneos que facilitan su análisis y comparación.
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comunicación escrita y comunicación digital

      p.mb-5(data-aos='fade-right') La aplicación del lenguaje técnico también se extiende a los medios escritos y digitales. Para introducir este tema, se propone consultar el siguiente recurso audiovisual.
  
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/X3Cv9sKaYo0?si=VMJ0oTZfK6z2Z8n7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/61.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La transformación digital ha ampliado los escenarios donde se utiliza el lenguaje técnico. Actualmente, gran parte de la comunicación con las personas visitantes se realiza mediante correos electrónicos, aplicaciones móviles, plataformas de reservas, redes sociales y sitios web institucionales. Estos canales requieren mensajes estructurados, precisos y adaptados a diferentes formatos de comunicación.

          p.mb-0 En documentos digitales resulta conveniente emplear títulos descriptivos, párrafos breves, vocabulario consistente y elementos visuales que faciliten la comprensión de la información. Cuando el contenido incorpora términos especializados, es recomendable acompañarlos con explicaciones sencillas o accesos a información complementaria.
    
      p.mb-3(data-aos='fade-right') La comunicación escrita también debe considerar criterios de accesibilidad, procurando que la información pueda ser comprendida por personas con diferentes niveles de conocimiento, habilidades comunicativas o necesidades de acceso. El uso de lenguaje claro favorece una comunicación más inclusiva y mejora la experiencia de las personas usuarias.
      p.mb-5(data-aos='fade-right') Las siguientes prácticas permiten conservar la precisión del lenguaje técnico sin dificultar la comprensión.
  
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Buenas prácticas para el uso del lenguaje técnico
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/62.png', alt='')
        .col-sm-12.col-lg-6
            LineaTiempoD.color-acento-botones
              .row(numero="1" titulo="Utilizar terminología normalizada")
                .col-sm-12.col-lg-12
                  p.mb-0 Favorece una comunicación uniforme.

              .row(numero="2" titulo="Explicar términos especializados")
                .col-sm-12.col-lg-12
                  p.mb-0 Facilita la comprensión de las personas visitantes.

              .row(numero="3" titulo="Mantener coherencia documental")
                .col-sm-12.col-lg-12
                  p.mb-0 Fortalece la calidad de la información institucional.

              .row(numero="4" titulo="Adaptar el lenguaje al público")
                .col-sm-12.col-lg-12
                  p.mb-0 Mejora la efectividad de la comunicación.

              .row(numero="5" titulo="Revisar periódicamente los documentos")
                .col-sm-12.col-lg-12
                  p.mb-0 Mantiene actualizada la terminología utilizada.
  
      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        h4 Precisión y claridad en el lenguaje técnico
        p.mb-0 El lenguaje técnico fortalece la calidad de la comunicación cuando mantiene precisión conceptual, coherencia documental y adaptación al público destinatario. La combinación de estos elementos facilita la gestión de la información, mejora la coordinación operativa y contribuye a la prestación de servicios turísticos seguros y de calidad.
      
      p.mb-3(data-aos='fade-right') El dominio del lenguaje técnico complementa las competencias relacionadas con la atención al visitante y la comunicación de la oferta turística. Su aplicación favorece la elaboración de documentos institucionales, fortalece la interacción entre los diferentes actores del sector y respalda la gestión operativa de las actividades de turismo de aventura.

      p.mb-0(data-aos='fade-right') Sobre esta base se incorporan las herramientas tecnológicas que amplían las posibilidades para gestionar, difundir y actualizar la información turística.

  
  
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
