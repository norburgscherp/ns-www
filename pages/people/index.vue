<template>
  <section class="site-page-people site-width">
    

    <section class="slice-headers">
      <div class="site-content-width">
        <prismic-rich-text class="header" :field="people.title"/>
      </div>
    </section>


    <section class="slice-persons row" v-match-heights="{el: ['.slice-persons .person'] }">
   
      <div v-for="(person, index) in persons" :key="person.id" class="person col" >
  
          <!-- IMAGE -->
          <figure v-if="person.data.image.url">
            <prismic-image  :field="person.data.image"/>
          </figure>
          <figure v-else>
            <template v-if="person.data.name.length > 0 ">
              <prismic-rich-text class="title" :field="person.data.name"/>
            </template>
            <template v-else>
              <div class="title">
                ({{ $t('ns.no_image') }})
              </div>
            </template>
          </figure>

          <!-- HEADER -->
          <prismic-rich-text v-if="person.data.name.length > 0 "  class="name" :field="person.data.name"/>
          <div v-else class="name">
            <div>
                ({{ $t('ns.no_name') }})
            </div>
          </div>

          <!-- TITLE -->
          <prismic-rich-text v-if="person.data.title.length > 0 "  class="title" :field="person.data.title"/>
          <div v-else class="designation">
            <div>
                ({{ $t('ns.no_title') }})
            </div>
          </div>

          <!-- LINK -->
          <div class="link" >
            <nuxt-link :to="localePath('/people/'+person.uid+'')">
              {{ $t('ns.more_info') }}
            </nuxt-link>
          </div>
      
      </div>   

    </section>
 

  </section>
</template>

<script>


export default {
  name: 'people',
  async asyncData({ $prismic, params, error, app}) {
    try{

      let people, person, personList
      let i,k,l
      let _persons = []

      if (app.i18n.locale === 'sv'){
        people = (await $prismic.api.getSingle('people', { lang : 'sv-se' })).data
      } else {
        people = (await $prismic.api.getSingle('people', { lang : 'en-gb' })).data
      }

      personList = people.lists_persons

      for (i = 0; i < personList.length; i++) {
        
        l = personList[i]
        
        if ( l.link_person.type === 'person'){
          person =  await $prismic.api.getByUID(l.link_person.type, l.link_person.uid, { lang : l.link_person.lang })
          _persons.push(person)
        }
          
      }

      return {
        persons: _persons,
        people: people
      }

    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

}
</script>

<style lang="scss">

.site-page-people {
  
  .slice-persons {
    &.row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      @media screen and (max-width: $bp-768)  {
        margin-right: -8px;
        margin-left: -8px;
      }
    }

    .col {
      flex: 0 0 33.33%;
      max-width: 33.33%;
      position: relative;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
    }

    @media screen and (max-width: $bp-768)  {
      .col {
        flex: 0 0 50%;
        max-width: 50%;
        padding-right: 8px;
        padding-left: 8px;
      }
    }
  }

}
  
</style>
