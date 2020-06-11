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
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic, app }) {
    // console.log('middleware-> ' , app)
    await store.dispatch('fetchContent', $prismic)
  }
}
</script>
