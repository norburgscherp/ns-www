<template>
  <section class="site-page-person site-width">
    <div class="person">
    
      <!-- IMAGE -->
      <figure v-if="doc.image.url">
        <prismic-image  :field="doc.image"/>
      </figure>
      <figure v-else class="-no-image">
        <template v-if="doc.name.length > 0 ">
          <prismic-rich-text class="title" :field="doc.name"/>
        </template>
        <template v-else>
           ({{ $t('ns.no_image') }})
        </template>
      </figure>

      <!-- HEADER -->
      <prismic-rich-text v-if="doc.name.length > 0 "  class="name" :field="doc.name"/>
      <div v-else class="name">
        <div>
            ({{ $t('ns.no_name') }})
        </div>
      </div>

      <!-- TITLE -->
      <prismic-rich-text v-if="doc.title.length > 0 "  class="title" :field="doc.title"/>
      <div v-else class="title">
        <div>
            ({{ $t('ns.no_title') }})
        </div>
      </div>

      <!-- CONTACT -->
      <prismic-rich-text v-if="doc.contact.length > 0 "  class="contact" :field="doc.contact"/>
      <div v-else class="contact">
        <div>
            ({{ $t('ns.no_contact') }})
        </div>
      </div>

      <!-- TEXT -->
      <prismic-rich-text v-if="doc.text.length > 0 "  class="text person-text -hide-mobile" :field="doc.text"/>

      <!-- DETAILS-->
      <prismic-rich-text v-if="doc.details.length > 0 "  class="details text -hide-mobile" :field="doc.details"/>

    </div>   


  </section>
</template>

<script>


export default {
  name: 'person',
  async asyncData({ $prismic, params, error, app}) {
    try{

      let person

      if (app.i18n.locale === 'sv'){
        person = (await $prismic.api.getByUID('person', params.uid, { lang : 'sv-se' })).data
      } else {
        person = (await $prismic.api.getByUID('person', params.uid, { lang : 'en-gb' })).data
      }

      return {
        doc: person
      }

    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

}
</script>

<style lang="scss">

.site-page-person {
  
  .person{
    margin-top: 15px; 
    margin-bottom: 20px;
    text-align: center;
    
    figure {
      &.-no-image {
        height: 400px;
      }
      display: flex;
      background-color: $grey;
      color: $red;
      text-align: center;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 15px;
      letter-spacing: .1em;
      font-family: $font-copper;
      text-transform: uppercase;
      max-width: 300px;
      margin: 0 auto 1.4em;
      
    }

    .name > *,
    .title > *,
    .contact {
      font-weight: bold;
      font-size: 15px;
      font-family: $font-copper;
      line-height: 1.5;
      margin: 0;
      letter-spacing: .1em;
      text-transform: uppercase;
    }
    .contact {
      font-weight: 200;
      margin-bottom: 1.4em;
      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .title > *,{
      font-weight: 200;
      margin: 0 0 1.4em;
    }

    .text {
      font-weight: 200;
      font-size: 20px;
      font-family: $font-caslon;
      line-height: 1.5;
      margin: 0 auto;
      max-width: 500px;
      &.person-text {
        max-width: 500px;
        text-align: left;
        margin: 0 auto;
        font-size: 20px;
        line-height: 1.4;
      }
      b,strong {
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 200;
        font-family: $font-copper;
        letter-spacing: .1em;
      }
    }

    @include VP1280 {
      margin-top: 30px; 
    }

  }
 
}
  
</style>
