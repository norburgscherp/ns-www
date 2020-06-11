<template>
  <section class="site-page-startpage site-width">

    <!-- Banner - Part -->
    <banner :banner="banner"/>

  </section>
</template>

<script>

import Banner from '~/components/part/StartpageBanner.vue'
import Slices from '~/components/SiteSlices.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Slices
  },
  async asyncData({ $prismic, error, app}) {
 
    try {

      let startpage

      if (app.i18n.locale === 'sv'){
        startpage = (await $prismic.api.getSingle('startpage', { lang : 'sv-se' })).data
      } else {
        startpage = (await $prismic.api.getSingle('startpage', { lang : 'en-gb' })).data
      }
    
      return {
        banner: startpage.startpage_banner[0],
        slices: startpage.page_content
      }

    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }

  }
}
</script>


<style lang="scss">



</style>
