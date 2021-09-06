<template>
    <section class="startpage-banner" 
      :class="{'-show-mobile-text' : showMobileText}"
      :style="{ backgroundImage: 'url(' + banner.image.url + ')' }">

      <div class="container ">
        
        <h2 class="title">
          {{ $prismic.asText(banner.title) }}
        </h2>
        
        <mq-layout mq="mobile">
          <figure v-on:click="showMobileText = !showMobileText">
            <svg-icon name="plus" />
          </figure>
        </mq-layout>

        <div class="description">
          <prismic-rich-text :field="banner.text"/>
        </div>

      </div>

      <mq-layout mq="mobile" class="banner-overlay"></mq-layout>

    </section>
</template>

<script>
export default {
  props: ['banner'],
  name: 'startpage-banner',
   data() {
    return {
      showMobileText: false
    };
  },
 mounted() {
   window.addEventListener('resize', () => {
    if (this.$mq === 'mobile'){
       this.showMobileText = false;
    }
   })
 },
 beforeDestroy() {
  window.removeEventListener('resize' ,null);
 },
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
  position: relative;

  figure {
    padding: 24px;
    margin: -24px 0 -12px;
    display: inline-block;
    
  }
  svg {
    fill: $white;
    height: 24px;
    width: 24px;
    transition: all .275s ease-in-out;
    transform-origin: center;
    transform: rotate(0deg);
    &:hover {
      cursor: pointer;
    }
  }


  .container {
    position: relative;
    z-index: 3;
  }

  .banner-overlay {
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(71,30,40,.9);
    opacity: 0;
    transition: all .275s ease-in-out;
  }


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
    font-size: 18px;
    line-height: 1.3;
    margin: 0 auto ;
    padding: 0 20px 20px;
    max-width: 760px;
    transition: all .275s ease-in-out;
    opacity: 0;
    // text-shadow: 0px 0px 3px black,  0 0 6px black, 0px 0px 9px black,  0 0 12px black;

    em, i {
      font-family: $font-caslon-fine;
    }
  }

  &.-show-mobile-text {
    .banner-overlay,
    .description {
      opacity: 1;
    }
    figure svg{
      transform: rotate(45deg);
    }
  }

  @include VP600 {

    .description {
      transition: all 0s ease-in-out;
      opacity: 1;
    }

    figure svg {
      transition: all 0s ease-in-out;
    }

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
