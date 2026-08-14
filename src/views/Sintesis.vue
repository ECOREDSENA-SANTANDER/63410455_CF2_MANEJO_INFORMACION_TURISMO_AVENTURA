<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda el servicio al cliente en turismo de aventura mediante técnicas de atención, protocolos organizados y criterios de calidad que fortalecen la seguridad y la experiencia de las personas visitantes. Asimismo, desarrolla la comunicación asertiva, la orientación antes, durante y después de la actividad, la adaptación del mensaje a diferentes perfiles y el uso de lenguaje técnico claro en la interacción y en la documentación operativa. También integra la consulta de fuentes digitales, el uso responsable de la inteligencia artificial, las aplicaciones móviles, los portales turísticos, las redes sociales y la gestión de la reputación digital como herramientas para acceder, validar y divulgar información. Finalmente, presenta materiales, herramientas y medios de promoción que permiten comunicar la oferta turística de manera veraz, accesible y coherente con la identidad del territorio, considerando el público objetivo, los canales disponibles y la evaluación de los resultados para contribuir a experiencias de turismo de aventura seguras, sostenibles y de calidad.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema de síntesis sobre servicio al cliente, comunicación turística, tecnologías de información y promoción de la oferta turística.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
