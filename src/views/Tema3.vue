<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Salud en pueblos indígenas
    Separador

    #t3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Tradiciones
    Separador

    #t3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Salud intercultural en pueblos indígenas
    Separador

    #t3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Análisis de determinantes sociales de salud
    Separador

    #t3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Medicina tradicional y equipos de salud indígena
    Separador
   
</template>

<script>
export default {
  name: 'Tema3',
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
