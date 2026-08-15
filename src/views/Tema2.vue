<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Comunicación turística
      
      img.mb-5.d-none.d-lg-block(src="@/assets/curso/temas/t2/1.png")
      p.mb-5 La comunicación representa uno de los procesos estratégicos que sustentan la gestión de los servicios turísticos, al facilitar el intercambio de información entre las organizaciones, las personas visitantes, las comunidades receptoras y los diferentes actores que intervienen en la operación de los destinos. En el turismo de aventura, donde las actividades se desarrollan en escenarios naturales y con distintos niveles de complejidad, la comunicación adquiere un papel determinante para orientar la experiencia, promover comportamientos responsables y contribuir a la seguridad durante todas las etapas del servicio.
      
      .row.justify-content-center.mb-5.align-items-end
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

      p.mb-0 A continuación, se presentan algunas barreras que pueden afectar el intercambio de información durante la prestación de servicios turísticos.


      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Comunicación asertiva y orientación al visitante
      
      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Barreras frecuentes en la comunicación turística

      .row.justify-content-center.mb-5
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

      p.mb-5 La identificación de estas barreras permite ajustar los mensajes, seleccionar medios apropiados y verificar la comprensión de la información antes de continuar con la actividad.

      .row.justify-content-center.mb-5.align-items-end
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

      p.mb-5 La comunicación y la orientación se complementan durante la prestación del servicio turístico. Mientras la comunicación asertiva permite transmitir información de manera clara, respetuosa y oportuna, la orientación facilita que las personas visitantes comprendan las condiciones de la actividad, se preparen adecuadamente y participen de forma segura durante las diferentes etapas de la experiencia.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comunicación asertiva

      .row.justify-content-center.mb-5.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t2/8.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t2/9.svg')
          p.mb-4.text-white La comunicación asertiva corresponde a la capacidad de expresar información, ideas, recomendaciones y orientaciones de manera clara, respetuosa y oportuna, promoviendo relaciones basadas en la confianza y el entendimiento mutuo. En el ámbito del turismo de aventura, esta habilidad adquiere una importancia estratégica debido a que gran parte de la seguridad y de la calidad del servicio depende de la correcta comprensión de las instrucciones suministradas antes, durante y después de cada actividad.
          p.mb-0.text-white  La comunicación asertiva no se limita a transmitir información. También implica escuchar activamente, interpretar las necesidades de las personas visitantes, responder con precisión a sus inquietudes y adaptar el mensaje según las características del grupo. Este proceso favorece una interacción más cercana, reduce la incertidumbre y facilita la construcción de experiencias positivas.

      p.mb-4 En escenarios de turismo de aventura es frecuente que los grupos estén conformados por personas con diferentes edades, nacionalidades, niveles de experiencia o expectativas frente a la actividad. Estas diferencias hacen necesario ajustar el lenguaje, la profundidad de las explicaciones y la forma de presentar la información, procurando que todas las personas comprendan los procedimientos y recomendaciones establecidos para el desarrollo seguro de la experiencia.

      p.mb-5 La comunicación asertiva también fortalece el trabajo colaborativo entre quienes participan en la operación turística. Guías, coordinadores, personal administrativo, conductores, organismos de apoyo y comunidades locales requieren intercambiar información de manera permanente para coordinar actividades, resolver situaciones imprevistas y garantizar la continuidad del servicio. La claridad en la comunicación favorece la coordinación operativa y disminuye la posibilidad de errores derivados de interpretaciones incorrectas.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comunicación verbal y no verbal
      
      p.mb-5 La comunicación con las personas visitantes se desarrolla mediante palabras, gestos, posturas, expresiones y otras señales que se complementan durante la interacción. 

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

      p.mb-5 Además del lenguaje verbal y no verbal, la interacción requiere escucha activa, retroalimentación y adaptación del mensaje. La retroalimentación permite verificar que la información haya sido comprendida, mientras que la adaptación facilita responder a las características y necesidades del grupo.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Escucha activa como herramienta de atención

      .row.justify-content-center.mb-5.align-items-end
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

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/FdDqDQ8i2Gk?si=9xaQwZ_HmB3lpOug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p.mb-5 Las siguientes prácticas permiten fortalecer la comunicación y responder de manera adecuada durante la atención.`

      .titulo-tercer-nivel.mb-5
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

      p.mb-5 La aplicación conjunta de estas prácticas contribuye a una comunicación más efectiva y fortalece el desarrollo seguro de las actividades.

      .cajon.color-primario.p-4.mb-5
        h4 Comunicación asertiva y calidad del servicio
        p.mb-0 La comunicación asertiva fortalece la calidad del servicio cuando integra claridad, escucha activa, respeto y capacidad de adaptación. Estas habilidades favorecen una interacción efectiva con las personas visitantes y contribuyen al desarrollo seguro de las actividades de turismo de aventura.

      p.mb-5 Para reconocer cómo la comunicación clara, la escucha activa y la adaptación del mensaje favorecen la orientación y la seguridad de las personas visitantes, se invita a explorar el siguiente pódcast.

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t2/26.svg')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Pódcast: vender textiles con argumentos: del dato técnico al beneficio del cliente"
              :audio="require_src('@/assets/curso/temas/t2/podcast.mp3')"
          )
      p.mb-5 Estas habilidades comunicativas constituyen la base para brindar información pertinente y orientar a las personas visitantes antes, durante y después de la experiencia turística.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Orientación al visitante

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/27.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La orientación al visitante comprende el conjunto de acciones encaminadas a suministrar información clara, pertinente y oportuna que facilite la participación en las actividades turísticas y contribuya al desarrollo de experiencias seguras, organizadas y satisfactorias. Este proceso inicia antes del desplazamiento hacia el destino, continúa durante la ejecución de la actividad y finaliza con la entrega de información posterior a la experiencia, fortaleciendo la relación entre las organizaciones turísticas y las personas visitantes.
          p.mb-0 En el turismo de aventura, la orientación adquiere un carácter preventivo y educativo. Además de informar sobre horarios, servicios o características del recorrido, proporciona recomendaciones relacionadas con la preparación física, el uso adecuado de los equipos, las condiciones ambientales, el comportamiento esperado durante la actividad y las medidas de seguridad establecidas para reducir los riesgos asociados con la práctica de actividades en escenarios naturales.

      .row.justify-content-center.mb-5.align-items-end
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/28.png') 
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/29.svg') 
              .col-sm-12.col-lg-10
                  p.mb-0 La calidad de la orientación influye directamente en la percepción del servicio. Una información organizada, coherente y fácilmente comprensible reduce la incertidumbre, fortalece la confianza y facilita la toma de decisiones por parte de las personas visitantes. De igual manera, favorece el cumplimiento de los protocolos operativos y mejora la coordinación entre quienes participan en la actividad.
            p.mb-0 La orientación también representa una oportunidad para promover el conocimiento del patrimonio natural y cultural del territorio. Cada interacción con las personas visitantes permite divulgar información sobre la biodiversidad, la historia local, las manifestaciones culturales, las tradiciones comunitarias y los principios de sostenibilidad que orientan el desarrollo del turismo de aventura. De esta manera, la comunicación trasciende el carácter informativo y se convierte en una herramienta para fortalecer la interpretación del territorio y promover comportamientos responsables.

      p.mb-5 La información debe acompañar a la persona visitante antes, durante y después de la experiencia. A continuación, se presentan las particularidades de cada momento.

      .titulo-tercer-nivel-2.mb-5
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

        
      .titulo-tercer-nivel-2.mb-5
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Orientación para diferentes perfiles de visitantes
      
      p.mb-3 Las organizaciones turísticas atienden grupos con características diversas. La orientación debe adaptarse al nivel de experiencia, la edad, el idioma, las condiciones físicas y las necesidades particulares de quienes participan en las actividades. Esta adaptación facilita la comprensión de la información y promueve condiciones de participación más equitativas.

      p.mb-5 La siguiente información presenta algunas orientaciones que pueden aplicarse de acuerdo con las características de las personas participantes.

      .titulo-tercer-nivel-2.mb-5
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Adaptación de la orientación según el perfil del visitante

      
      .row.justify-content-center.mb-5
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
      .row.justify-content-center.mb-5
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





      p.mb-5 Cuando participan niñas, niños, personas mayores o personas con discapacidad, la comunicación debe ajustarse mediante lenguaje sencillo, apoyos accesibles y tiempos suficientes para resolver inquietudes.
      
      .titulo-tercer-nivel-2.mb-5
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2  Orientación e interpretación del patrimonio

      .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/40.png')
        .col-sm-12.col-lg-7
          p.mb-4 La orientación al visitante también incorpora procesos de interpretación del patrimonio, entendidos como estrategias de comunicación que facilitan la comprensión del significado de los recursos naturales y culturales presentes en el territorio. Más que transmitir información descriptiva, la interpretación busca establecer conexiones entre las personas visitantes y el entorno, promoviendo una experiencia significativa y fortaleciendo el compromiso con la conservación.
          p.mb-0 Durante las actividades de turismo de aventura, la interpretación puede desarrollarse mediante relatos, demostraciones, preguntas orientadoras y explicaciones relacionadas con la biodiversidad, la geología, la cultura local y las prácticas tradicionales de las comunidades. Estas estrategias enriquecen la experiencia turística y contribuyen a valorar el patrimonio desde una perspectiva ambiental, social y cultural.

      .cajon.color-primario.p-4.mb-5
        h4 Orientación integral al visitante
        p.mb-0 Una orientación efectiva combina información operativa, interpretación del patrimonio y comunicación preventiva. La articulación de estos elementos fortalece la experiencia turística, favorece la seguridad y promueve el respeto por el entorno natural y cultural.

      p.mb-0 La orientación al visitante requiere una terminología precisa que facilite la comprensión de las actividades y mantenga criterios uniformes entre los diferentes actores del sector.
      
      
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Lenguaje técnico aplicado al turismo de aventura
      
        

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
