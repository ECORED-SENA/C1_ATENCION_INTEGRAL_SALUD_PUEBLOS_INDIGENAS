<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Salud en pueblos indígenas

    .cajon-b.color-primario.p-3.mb-5
      p.mb-0 De acuerdo con la OPS, los pueblos indígenas de las Américas han desarrollado un conjunto de prácticas y conocimientos sobre el cuerpo humano, la convivencia con los demás seres humanos, con la naturaleza y con los seres espirituales, muy complejo y bien estructurado en sus contenidos y en su lógica interna. Continua la OPS, afirmando que la sobrevivencia de los pueblos indígenas se debe a la eficacia de sus sistemas de salud tradicionales, su cosmovisión, se basa en el equilibrio, la armonía y la integralidad… Los sistemas de salud tradicionales indígenas comprende el conjunto de ideas, conceptos, creencias, mitos, ritos y procedimientos, sean explicables o no, relativos a las enfermedades físicas, mentales o desequilibrios sociales en un pueblo determinado. (Organización Panamericana de la Salud, 2006)

    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5
        figure.mb-0
          img(src="@/assets/curso/tema3/img01.png")  
      .col-lg-7
        .cajon-b.color-secundario.p-3.mb-5
          p.mb-0 Un aspecto esencial y de valor universal es el conocimiento ancestral de los pueblos indígenas sobre el uso de las plantas y de los minerales en estado natural, para su protección en medidas preventivas, en el uso de la medicitradicional y para su seguridad alimentaria; como por ejemplo el uso del achiote utilizado como repelente natural frente las enfermedades transmitidas por vectores, el uso de abrazaderas y adornos en los pies tejidos de bejucos y con pinturas naturales que algunas comunidades como los Nukak Makú han usado para evitar la mordedura por serpientes y arácnidos; el conocimiento sobre las frutas, los vegetales comestibles, la caza y la pesca en su territorio para garantizar su seguridad alimentaria. 

    p.mb-5 De acuerdo con lo anterior, el territorio encierra todo el pensamiento y la cultura, es allí donde se considera que se ha gestado la existencia y todo lo que implica ser Indígena, desde el momento de origen del mundo y la creación. 

    .tema-2.mb-5
      .cajon.color-secundario.p-5
        p.mb-0 Para definir el significado de salud nosotros partimos de la herencia ancestral, desde la cultura y del concepto básico del equilibrio- armonía, el cual implica las relaciones adecuadas de todos los elementos vivos y muertos en la naturaleza del universo. (Encuentro de organización indígena de Casanare, 2006.)

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
