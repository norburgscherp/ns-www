<template>
  <section class="site-width site-page">

    <section class="slice-headers"><div class="site-content-width"><div class="header"><h1>Quality assurance</h1></div></div></section>

    <section class="slice-layout-two-col ">
       <div class="slice-body row">
          <div class="col-1 col">
             <figure class="slice-image"><img src="https://images.prismic.io/norburg-and-scherp/4afa38a0-1d01-4611-98d9-a94e9fd07470_about-us.jpg?auto=compress,format&amp;rect=350,0,500,719&amp;w=500&amp;h=719"></figure>
          </div>
          <div class="col-2 col">
             <div class="slice-text">
                <div class="header">
                   <h2>Two column layout, base html and css structure, a perfect foundaion is key&nbsp;</h2>
                </div>
                <div class="text">
                   <p>Our expert team of solicitors have significant experience in all types of disputes relating to the hospitality and leisure business, including hotels, restaurants, sports, music, events and entertainment companies.&nbsp;</p>
                   <p>We have a broad international network of lawyers and economists that we work with in cross-border matters.</p>
                   <p>
                     <i>This is cusrive text</i>
                   </p>
                   <p>
                     <b>This is bold text, </b><strong>This is bold text</strong>
                   </p>
                </div>

             </div>
          </div>
       </div>

    </section>

    <br><br>

    <section class="slice-practise-areas slice-layout-two-col">
       <div class="slice-body row">
          <div class="col-1 col">
             <figure class="slice-image"><img src="https://images.prismic.io/norburg-and-scherp/4afa38a0-1d01-4611-98d9-a94e9fd07470_about-us.jpg?auto=compress,format&amp;rect=350,0,500,719&amp;w=500&amp;h=719"></figure>
          </div>
          <div class="col-2 col">
             <div class="slice-text">
                <div class="header">
                   <h2>Slice pratcice areas.&nbsp;</h2>
                </div>
                <div class="text">
                   <p>Our expert team of solicitors have significant experience in all types of disputes relating to the hospitality and leisure business, including hotels, restaurants, sports, music, events and entertainment companies.&nbsp;</p>
                   <p>We have a broad international network of lawyers and economists that we work with in cross-border matters.</p>
                </div>

             </div>
          </div>
       </div>

    </section>

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
