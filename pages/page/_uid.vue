<template>
  <section class="site-page site-width">

    <slices :slices="slices" :persons="persons"/>

  </section>
</template>

<script>
// Imports for Prismic Slice components
import Slices from '~/components/SiteSlices.vue'

export default {
  name: 'page',
  components: {
    Slices
  },
  async asyncData({ $prismic, params, error, app}) {
    try{

      let page, person, pagebody
      let i,k,l
      let _persons = []

      if (app.i18n.locale === 'sv'){
        page = (await $prismic.api.getByUID('page', params.uid, { lang : 'sv-se' })).data
      } else {
        page = (await $prismic.api.getByUID('page', params.uid, { lang : 'en-gb' })).data
      }

      pagebody = page.body

      for (i = 0; i < pagebody.length; i++) {
        if(pagebody[i].slice_type === "practice_areas") {
          l = pagebody[i].items
          for (k = 0; k < l.length; k++) {
            if ( l[k].person_link.type === 'person'){
              person =  await $prismic.api.getByUID(l[k].person_link.type, l[k].person_link.uid, { lang : l[k].person_link.lang })
              _persons.push(person)
            }
          }
        }
      }

      return {
        slices: pagebody,
        persons: _persons
      }

    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

}
</script>

<style lang="scss">

.site-page {}
  
</style>
