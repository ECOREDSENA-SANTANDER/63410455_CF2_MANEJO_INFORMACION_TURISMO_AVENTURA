<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 1
        h1 Servicio al cliente en turismo de aventura
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.png') 
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-4
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/2.svg') 
              .col-sm-12.col-lg-10
                  p.mb-0 El servicio al cliente representa uno de los factores que mayor incidencia tiene sobre la percepción de calidad en el turismo de aventura. La atención brindada antes, durante y después de la actividad influye en la satisfacción de las personas visitantes, fortalece la confianza en los prestadores de servicios y favorece la construcción de relaciones duraderas con el destino.
            p.mb-4 Más allá de responder solicitudes o resolver inquietudes, el servicio comprende un conjunto de acciones orientadas a generar experiencias positivas mediante una atención organizada, respetuosa y acorde con las expectativas del mercado.

            p.mb-0 Las actividades de turismo de aventura presentan características particulares que exigen una atención especializada. La interacción con las personas visitantes involucra procesos de orientación, suministro de información técnica, verificación de condiciones de participación, explicación de protocolos de seguridad y acompañamiento permanente durante el desarrollo de la experiencia. Cada uno de estos momentos requiere habilidades comunicativas, conocimiento del producto turístico y capacidad para ofrecer respuestas oportunas frente a las necesidades del grupo.
      p.mb-5(data-aos='fade-right') La calidad del servicio también depende de la articulación entre los diferentes actores que participan en la operación turística. El personal administrativo, los guías, los conductores, el personal de apoyo y demás colaboradores intervienen de manera coordinada para garantizar una experiencia segura y organizada. Esta integración favorece la continuidad del servicio y fortalece la imagen de la organización frente a las personas visitantes.
      
      
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          h5.mb-4 Servicio al cliente en turismo de aventura
          p.mb-3 acompañamiento, con el propósito de ofrecer experiencias satisfactorias acordes con las características del destino y las necesidades de las personas visitantes.
          p.mb-0 El desarrollo de un servicio de calidad comienza con la aplicación de técnicas que orientan la interacción entre el personal operativo y las personas usuarias. También requiere protocolos organizados y mecanismos de evaluación que permitan fortalecer continuamente la experiencia turística.
      
      
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Técnicas, protocolos y calidad del servicio turístico
      
      p.mb-5(data-aos='fade-right') La prestación de un servicio turístico de calidad requiere integrar técnicas de atención, protocolos organizados y mecanismos de evaluación que orienten la relación con las personas visitantes. Estos elementos permiten brindar una atención coherente, fortalecer la seguridad durante las actividades y responder de manera oportuna a las necesidades del grupo.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnicas de atención al cliente

      .row.justify-content-center.mb-5.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t1/4.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t1/5.svg')
          p.mb-4.text-white La atención al cliente corresponde al conjunto de acciones orientadas a establecer una comunicación efectiva con las personas visitantes durante las diferentes etapas del servicio turístico.
          p.mb-4.text-white En el turismo de aventura, esta atención debe caracterizarse por la claridad de la información, el respeto, la empatía y la capacidad para orientar a los grupos antes del inicio de las actividades, durante su desarrollo y al finalizar la experiencia.
          p.mb-0.text-white Una atención adecuada inicia con la identificación de las necesidades de cada visitante. Aspectos como la experiencia previa, la condición física, las expectativas frente a la actividad o los requerimientos particulares permiten adaptar la comunicación y ofrecer orientaciones acordes con las características del grupo. Esta información contribuye a fortalecer la seguridad y mejora la calidad del servicio prestado.

      p.mb-5(data-aos='fade-right') Las técnicas de atención reúnen habilidades que permiten comprender las necesidades de las personas visitantes, transmitir información y responder oportunamente a las situaciones que pueden presentarse durante la prestación del servicio. A continuación, se presentan algunas de ellas.


      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Técnicas de atención aplicadas al turismo de aventura

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-green" data-aos='fade-right')
        .row.justify-content-center.mb-0(titulo="Escucha activa")
          .col-sm-12.col-lg-5
            p.mb-0 Permite identificar las necesidades, dudas y expectativas de las personas visitantes antes y durante el desarrollo de la actividad.
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/6.png', *alt*='')

        .row.justify-content-center.mb-0(titulo="Comunicación clara")
          .col-sm-12.col-lg-5
            p.mb-0 Facilita la transmisión de información precisa y comprensible sobre la actividad, las recomendaciones y las medidas de seguridad.
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/7.png', *alt*='')

        .row.justify-content-center.mb-0(titulo="Empatía")
          .col-sm-12.col-lg-5
            p.mb-0 Favorece una atención respetuosa y adecuada a las características, necesidades y condiciones de las personas visitantes.
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/8.png', *alt*='')

        .row.justify-content-center.mb-0(titulo="Orientación oportuna")
          .col-sm-12.col-lg-5
            p.mb-0 Proporciona indicaciones claras y oportunas sobre procedimientos, rutas, recomendaciones y condiciones para el desarrollo de la actividad.
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/9.png', *alt*='')

        .row.justify-content-center.mb-0(titulo="Manejo de situaciones")
          .col-sm-12.col-lg-5
            p.mb-0 Permite atender novedades o dificultades que se presentan durante el servicio y orientar su solución de acuerdo con los procedimientos establecidos.
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/10.png', *alt*='')
      p.mb-5(data-aos='fade-right') La aplicación de estas técnicas fortalece la experiencia turística y genera condiciones favorables para el desarrollo de las actividades de aventura. Una comunicación adecuada reduce la incertidumbre, mejora la comprensión de las instrucciones y contribuye al cumplimiento de los protocolos establecidos.

      .bg-full-width.bg-color-2.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-8
              .titulo-tercer-nivel-2.mb-5
                img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
                h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Protocolos de atención en turismo de aventura
              .row.justify-content-center.mb-3
                .col-sm-12.col-lg-1.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/12.svg') 
                .col-sm-12.col-lg-11
                    p.mb-0 La prestación de servicios en turismo de aventura requiere procedimientos previamente definidos que orienten la atención de las personas visitantes desde el primer contacto hasta el cierre de la experiencia.
              p.mb-3 Estos protocolos establecen una secuencia organizada de acciones que contribuye a mantener la calidad del servicio, fortalecer la seguridad y aplicar criterios consistentes durante la operación de las actividades.

              p.mb-3 La aplicación de protocolos favorece la coordinación entre el personal administrativo, los guías y el equipo de apoyo, procurando que la información suministrada sea consistente durante cada etapa del servicio. Además, contribuye al cumplimiento de la normatividad vigente, reduce la posibilidad de errores operativos y favorece una experiencia adecuada mediante orientaciones claras y oportunas.

              p.mb-0 En turismo de aventura, los protocolos deben adaptarse a las características de cada actividad y contemplar aspectos relacionados con el registro de participantes, la verificación de requisitos, la información sobre la experiencia, las recomendaciones de seguridad, el acompañamiento durante el recorrido y el seguimiento posterior a la actividad.
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/11.svg')


      p.mb-5(data-aos='fade-right') La atención se desarrolla mediante una secuencia que inicia con la recepción de las personas participantes y finaliza con la recopilación de información sobre la experiencia. A continuación, se presentan las etapas de atención.

      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Etapas de la atención en turismo de aventura

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/13.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-2.p-4(titulo="Recepción")
              p.mb-0 Dar la bienvenida y verificar la información necesaria de las personas participantes.

            .tarjeta.bg-color-2.p-4(titulo="Inducción")
              p.mb-0 Socializar el itinerario, las condiciones de participación, las recomendaciones y las medidas de seguridad.

            .tarjeta.bg-color-2.p-4(titulo="Desarrollo de la actividad")
              p.mb-0 Brindar acompañamiento, orientación y seguimiento permanente durante el desarrollo de la actividad.

            .tarjeta.bg-color-2.p-4(titulo="Cierre")
              p.mb-0 Verificar las condiciones de las personas participantes, atender inquietudes finales y proporcionar las orientaciones correspondientes al cierre de la actividad.

            .tarjeta.bg-color-2.p-4(titulo="Retroalimentación")
              p.mb-0 Recopilar información sobre la satisfacción de las personas y las oportunidades de mejora del servicio.

      p.mb-3(data-aos='fade-right') La estandarización de estos procedimientos facilita la prestación de un servicio coherente y fortalece la confianza de las personas visitantes. Al mismo tiempo, proporciona información útil para evaluar la calidad de la atención, identificar oportunidades de mejora y optimizar los procesos operativos de la organización.
      p.mb-5(data-aos='fade-right') Los protocolos no deben considerarse documentos estáticos. Su revisión permite mantenerlos acordes con las condiciones en las que se desarrolla el servicio.


      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Actualización de los protocolos de atención
      img.mb-5.d-none.d-lg-block(src="@/assets/curso/temas/t1/14.png" data-aos='fade-right')
      p.mb-3(data-aos='fade-right') Los protocolos de atención deben revisarse periódicamente para incorporar cambios derivados de la normatividad, las condiciones del destino, la gestión del riesgo o las necesidades identificadas mediante los procesos de evaluación del servicio.
      p.mb-5(data-aos='fade-right') La implementación de protocolos constituye una herramienta de apoyo para la gestión de la calidad, considerada uno de los pilares de la competitividad en el turismo de aventura.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Calidad del servicio turístico
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/15.png') 
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-4
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/16.svg') 
              .col-sm-12.col-lg-10
                  p.mb-3 La calidad del servicio representa la capacidad de una organización para satisfacer las expectativas de las personas visitantes mediante la prestación de servicios confiables, oportunos y seguros.
                  p.mb-0 En el turismo de aventura, este concepto integra aspectos relacionados con la atención al cliente, la organización de las actividades, la comunicación, la gestión del riesgo y el desempeño del personal responsable de la operación.
            p.mb-4 La percepción de calidad se construye a partir de cada interacción entre la organización y las personas visitantes. Factores como la puntualidad, la claridad de la información, el estado de los equipos, el conocimiento del personal, el cumplimiento de los itinerarios y la capacidad para resolver situaciones imprevistas influyen directamente en la experiencia y en la imagen del destino.
            p.mb-0 La evaluación permanente del servicio proporciona información valiosa para identificar fortalezas, reconocer oportunidades de mejora y fortalecer la competitividad de la organización. Para ello, es común utilizar herramientas como encuestas de satisfacción, análisis de quejas y sugerencias, seguimiento a indicadores de servicio y evaluación de los procesos operativos.


      p.mb-5(data-aos='fade-right') Además de estos mecanismos de evaluación, existen factores que contribuyen directamente a la calidad de la experiencia turística.
      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/2.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Factores asociados con la calidad del servicio turístico

      SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos='fade-right')
        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/17.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Atención al cliente
          p.mb-0.text-center.text-white Genera confianza y mejora la experiencia

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/18.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Información clara
          p.mb-0.text-center.text-white Reduce la incertidumbre y facilita la participación en las actividades.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/19.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Seguridad
          p.mb-0.text-center.text-white Disminuye los riesgos durante la operación turística.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/20.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Personal competente
          p.mb-0.text-center.text-white Incrementa la confianza y la calidad de la atención.

        .tarjeta.bg-color-3.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/21.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.text-white.mb-0.text-center.fw-bold Mejora continua
          p.mb-0.text-center.text-white Favorece la actualización permanente de los procesos y servicios.

      p.mb-3(data-aos='fade-right') La calidad debe entenderse como un proceso dinámico que requiere seguimiento permanente. La información obtenida mediante los mecanismos de evaluación constituye un insumo para ajustar procedimientos, fortalecer las competencias del personal y responder a las expectativas del mercado.

      p.mb-0(data-aos='fade-right') Esta cultura de mejora continua contribuye al posicionamiento de los destinos de turismo de aventura y al desarrollo de experiencias más seguras, sostenibles y satisfactorias.






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
