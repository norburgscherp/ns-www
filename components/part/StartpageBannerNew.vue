<template>
  <section class="startpage-banner"">

    <div class="container ">
      
      <div class="banner-wrapper">
        <h3 class="title">{{ $prismic.asText(banner.title) }}</h3>
        <template v-if="banner.page_link">
          <prismic-link class="link" :field="banner.page_link">{{ $prismic.asText(banner.page_link_text) }}</prismic-link>
        </template>
      </div>

    </div>

    <video loop="" muted="" playsinline="" autoplay="">
      <source :src="banner.banner_video.url" type="video/mp4">
      <p>Your browser does not support video.</p>
    </video>
    
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
  overflow: hidden;
  position: relative;
  width: 100%;

  video {
    height: 100%;
    left: 0;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: 0;
    width: 100%;
  }


  .container {
    position: relative;
    height: 100%;
    z-index: 3;
    margin: 0 auto;
    max-width: 1920px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 128px 48px;
  }

  .banner-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 300px;
    h3 {
      text-align: center;
    }
    .link {
      font-family: $font-copper;
      font-weight: 200;
      font-size: 24px;
      color: $black;
      margin: 0;
      text-transform: uppercase;
      transition: all .275s ease-out;
      border-bottom: 1px solid $black;
      border-top: 1px solid $black;
      padding: 12px 40px 8px 40px;
      letter-spacing: .1em;
      line-height: 1;
      &:hover {
        text-decoration: none;
        border-color: $grey;
        color: $grey;
      }
    }
  }

  @media screen and (max-width: $bp-1920)  {
    .banner-wrapper {
      h3 {
        font-size: 38px;
      }
    }
  }

  @media screen and (max-width: $bp-768)  {
    .banner-wrapper {
      margin-bottom: 240px;
      h3 {
        font-size: 28px;
      }
      .link {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: $bp-480)  {
    .container {
      padding: 128px 32px;
    }
    .banner-wrapper {
      h3 {
        font-size: 23px;
      }
    }
  }

  @media screen and (max-width: $bp-370)  {
    .container {
      padding: 128px 16px;
    }
  }

}

</style>
