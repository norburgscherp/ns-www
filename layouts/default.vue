<template>
  <div :class="{'-startpage': $nuxt.$route.name === 'index___sv' || $nuxt.$route.name === 'index___en', '-menu-open': this.$store.getters.GET_MENU, '-portrait': this.orientation === 'p', '-landscape': this.orientation === 'l'}">
    <div class="site-header-plate"></div>
    <site-header/>
    <site-header-menu/>
    <nuxt />
    <site-footer/>
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteHeaderMenu from '~/components/SiteHeaderMenu.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteHeaderMenu,
    SiteFooter
  },
  head () {

    let meta = [] 

    if (this.$i18n.locale === 'en') {
      meta = [
        { name: 'description', content: this.$store.state.footer_en.seo_description[0].text },
        { name: 'keywords', content: this.$store.state.footer_en.seo_keywords[0].text },
      ];
    }

    if (this.$i18n.locale === 'sv') {
      meta = [
        { name: 'description', content: this.$store.state.footer_sv.seo_description[0].text },
        { name: 'keywords', content: this.$store.state.footer_sv.seo_keywords[0].text },
      ];
    }

    return {
      meta: meta,
    }
    
  },
  data () {
    return {
      orientation: null
    }
  },
  methods: {
    onResize(event) {
      this.deviceOrientation()
    },
    deviceOrientation() {
      let winH = window.innerHeight;
      let winW = window.innerWidth;
      if (winH > winW && this.orientation !== 'p') {
        this.orientation = 'p'
        this.$store.commit("setOrientation",'portrait')
      } else if (winW > winH && this.orientation !== 'l'){
        this.orientation = 'l'
        this.$store.commit("setOrientation",'landscape')
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.deviceOrientation();  
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic, app }) {
    await store.dispatch('fetchContent', $prismic)
  }
}
</script>

<style lang="scss">

.-startpage {
  .site-header-plate {
    background-color: transparent;
  }
}

.site-header-plate {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  background-color: $white;
  z-index: 800;
}

</style>