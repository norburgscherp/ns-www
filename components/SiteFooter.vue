<template>
  <footer class="site-footer">
    <div class="site-width" v-if="this.$route.params.uid !== 'contact'">

      <!-- *** ENGELSKA *** -->

      <template v-if="$i18n.locale === 'en'">
        
        <div class="text">
          <prismic-rich-text :field="$store.state.footer_en.text"/>
        </div>

        <div class="text -grey">
          <mq-layout :mq="['tablet','desktop','monitor']">
            <prismic-rich-text :field="$store.state.footer_en.grey_text"/>
          </mq-layout>
          <mq-layout :mq="['mobile', 'phablet']">
            <prismic-rich-text :field="$store.state.footer_en.grey_text_short"/>
          </mq-layout>
        </div>

        <!-- LOGOS -->
        <div class="logos" >
          <figure v-for="(logo, index) in $store.state.footer_en.logos" :key="'slice-' + index">
            <template v-if="logo.link.url">
              <prismic-link :field="logo.link"><prismic-image :field="logo.image" /></prismic-link>
            </template>
            <template v-else>
              <div>
                <prismic-image :field="logo.image" />
              </div>
            </template>
          </figure>
        </div>

      </template> 


      <!-- *** SVENSKA *** -->

      <template v-if="$i18n.locale === 'sv'">

        <div class="text">
          <prismic-rich-text :field="$store.state.footer_sv.text"/>
        </div>

        <div class="text -grey">
          <mq-layout :mq="['tablet','desktop','monitor']">
            <prismic-rich-text :field="$store.state.footer_sv.grey_text"/>
          </mq-layout>
          <mq-layout :mq="['mobile', 'phablet']">
            <prismic-rich-text :field="$store.state.footer_sv.grey_text_short"/>
          </mq-layout>
        </div>

        <!-- LOGOS -->
        <div class="logos" >
          <figure v-for="(logo, index) in $store.state.footer_sv.logos" :key="'slice-' + index">
            <template v-if="logo.link.url">
              <prismic-link :field="logo.link"><prismic-image :field="logo.image" /></prismic-link>
            </template>
            <template v-else>
              <div>
                <prismic-image :field="logo.image" />
              </div>
            </template>
          </figure>
        </div>

      </template> 


    </div>
  </footer>
</template>

<script>

export default {
  name: 'site-footer',
  mounted() {
    if (process.client) {
      if (document.querySelector('.nuxt-link-handler')){
        document.querySelector('.nuxt-link-handler').addEventListener('click', event => {
          event.preventDefault()
          this.$router.push(event.target.pathname)
        })
      }
    }
  }
}

</script>

<style lang="scss">
  
.site-footer {
  margin: 20px 0 40px;
  text-align: center;
  font-family: $font-copper;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 15px;
  letter-spacing: .1em;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .text {
    &.-grey {
      color: $grey;
      a {
        color: $grey;
      }
    }
  }

  .logos {
    margin: 20px 0;
    figure {
      display: inline-block;
      width: 90px;
    }
    a,div {
      display: block;
      margin: 10px;
    }

  }

  img {
    max-height: 60px;
    width: auto;
  }


  // - - VP768

    @include VP768 {
      margin: 60px 0 50px;
      .logos {
        display: flex;
        align-items: center;
        justify-content: center;
        figure {
          display: block;
          width: auto;
        }
      }
      img {
        width: auto;
        height: 100%;
        max-height: 140px;
        max-width: 134px;
      }
    }


  // - - VP1024

    @include VP1024 {
      .text{
        margin-bottom: 25px;
      }
    }

}


</style>
