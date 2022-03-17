<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-puzzle-piece" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-segundo.color-secundario
      h2 Emparejamiento de conceptos
    
    .row
      .col-lg-3
        figure
            img(src="@/assets/curso/activ.svg", alt="Texto que describa la imagen")
      
      .col-lg-9.d-flex
        div(style="position: relative")
          .row
            .col-lg-7
              p.mb-0 Objetivo de la actividad	Conocer las bases conceptuales de los pueblos indígenas. 

          .tarjeta.tarjeta--azul.p-3(style="background-color: #F7724A; width: 100%; position: absolute; top: 65%")
            .row.justify-content-around.align-items-center            
              .col-sm.mb-3.mb-sm-0
                h4.mb-0.fw-bold.mb-0 Cuestionario
              .col-auto                
                  a.acti.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                    span Realizar
                    i.fas.fa-puzzle-piece    

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
