<template>
    <section class="startpage-banner" :style="{ backgroundImage: 'url(' + banner.image.url + ')' }">

      <div class="container ">
        <h2 class="title">
          {{ $prismic.asText(banner.title) }}
          
        </h2>

        <p class="description">
          {{ $prismic.asText(banner.text) }}
        </p>
      </div>
    </section>
</template>

<script>
export default {
  props: ['banner'],
  name: 'startpage-banner',
}
</script>

<style lang="scss">

.startpage-banner {
  
  height: 100vh;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center center; 
  border-bottom: 15px solid $white;
  color: $white;
  text-align: center;
  overflow: hidden;
  max-height: 860px;


  .title {
    font-family: $font-copper;
    font-weight: 200;
    font-size: 15px;
    color: $white;
    margin: 24px 15px;
    text-transform: uppercase;
    border-bottom: 1px solid $white;
    border-top: 1px solid $white;
    padding: 8px 0 6px;
    letter-spacing: .1em;
    line-height: 1;
  }

  .description {
    font-family: $font-caslon;
    font-size: 20px;
    margin: 0 auto ;
    padding: 0 20px 20px;
    max-width: 760px;
  }


  @include VP768 {

    .title {
      display: inline-block;
      padding-left: 25px;
      padding-right: 25px;
    }
    .description {
      margin: 0 auto;
      padding: 0 30px 30px;
    }

  }


  @include VP1280 {

    .description {
      padding: 0 40px 40px;
    }

  }


}

</style>
