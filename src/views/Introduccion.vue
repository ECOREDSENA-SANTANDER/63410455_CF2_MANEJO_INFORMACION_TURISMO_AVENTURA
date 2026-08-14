<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    img.mb-5.d-none.d-lg-block(src="@/assets/curso/temas/intro/1.png", alt="Introducción")
    p.mb-3 Comunicar una experiencia de turismo de aventura implica mucho más que promocionar un destino o describir una actividad. La atención brindada, la claridad de la información y la capacidad para orientar a las personas visitantes influyen en su confianza, preparación y percepción del servicio. Por esta razón, la comunicación se convierte en un elemento fundamental para ofrecer experiencias organizadas, seguras y acordes con las características del territorio.
    p.mb-5 En este componente formativo se abordarán los principios del servicio al cliente, la comunicación asertiva, la orientación al visitante y el uso del lenguaje técnico aplicado al 
    
    .row.justify-content-center.mb-0.align-items-end
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='') 
      .col-sm-12.col-lg-7
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/intro/3.svg', alt='') 
            .col-sm-12.col-lg-10
                p.mb-0 En este componente formativo se abordarán los principios del servicio al cliente, la comunicación asertiva, la orientación al visitante y el uso del lenguaje técnico aplicado al turismo de aventura. Estos contenidos permitirán reconocer cómo una atención respetuosa, oportuna y adaptada a las necesidades de cada público contribuye a mejorar la calidad del servicio y a fortalecer la relación entre las organizaciones turísticas y las personas visitantes.
          p.mb-0 También se estudiará el uso de tecnologías digitales y medios de promoción para consultar, organizar y divulgar información sobre la oferta turística. Mediante ejemplos relacionados con aplicaciones, portales, redes sociales, inteligencia artificial y materiales promocionales, el aprendiz identificará herramientas que apoyan la comunicación de experiencias de turismo de aventura de manera clara, responsable, accesible y coherente con los principios de calidad, sostenibilidad y seguridad.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
