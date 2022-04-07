<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero        
        span
          i.fas.fa-info
      h1 Introducción

    h3.mb-5 ¿Sabes la importancia de conocer sobre los pueblos indígenas, su cosmovisión, la comprensión de su cultura, su concepción de salud y enfermedad?
    .intro
      .cajon-b.color-primario.p-3.mb-5
        p.mb-0 En el siguiente recurso introductorio de este componente podrás reconocer algunos aspectos centrales de los pueblos indígenas, donde habitan y cómo se genera el acceso e inequidad, incluso algunas condiciones indignas y con flagrantes violaciones a sus derechos humanos más fundamentales:
    

    figure
      .video            
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/9OJxr0KP4Aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   
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
