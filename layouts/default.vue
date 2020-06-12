<template>
  <div :class="{'-menu-open': this.$store.getters.GET_MENU}">
    <site-header/>
    <nuxt />
    <site-footer/>
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  },
 data() {
    return {
      seo_desc_en: this.$store.state.footer_en.seo_description[0].text,
      seo_keys_en: this.$store.state.footer_en.seo_keywords[0].text,
      seo_desc_sv: this.$store.state.footer_sv.seo_description[0].text,
      seo_keys_sv: this.$store.state.footer_sv.seo_keywords[0].text,
      seo_lang: this.$i18n.locale,
    };
  },
  head () {

    let meta = [] 

    if (this.seo_lang === 'en') {
      meta = [
        { name: 'description', content: this.seo_desc_en },
        { name: 'keywords', content: this.seo_keys_en },
      ];
    }

    if (this.seo_lang === 'sv') {
      meta = [
        { name: 'description', content: this.seo_desc_sv },
        { name: 'keywords', content: this.seo_keys_sv },
      ];
    }

    return {
      meta: meta,
    }
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic, app }) {
    // console.log('middleware-> ' , app)
    await store.dispatch('fetchContent', $prismic)
  }
}
</script>
