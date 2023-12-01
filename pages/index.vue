<template>
  <section class="site-page-startpage">

    <!-- Banner - Part -->
    <banner :banner="banner"/>

  </section>
</template>

<script>

import Banner from '~/components/part/StartpageBannerNew.vue'

export default {
  name: 'Home',
  components: {
    Banner
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
        banner: startpage.startpage_banner_2[0]
      }

    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }

  }
}
</script>


