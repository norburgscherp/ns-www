<template>
  <section class="slice-about slice-layout-two-col">
    <div class="slice-body row">
      <!-- COL-1 -->
      <div class="col-1 col">
        <!-- IMAGE -->
        <figure class="slice-image">
          <prismic-image :field="slice.primary.image"/>
        </figure>
      </div>
      <!-- COL-2 -->
      <div class="col-2 col">
        <!-- TEXT -->
        <div class="slice-text">
          <prismic-rich-text class="text" :field="slice.primary.text"/>
          
          <!-- ACCORDION - SAID -->
<!--           <div class="slice-accordion">
            <div class="acoordion-item -said">
              <section class="accordion-header" @click="showSaid = !showSaid" :class="{'-active' : showSaid}">
                <prismic-rich-text class="header" :field="slice.primary.accordions_1_header"/>
              </section>
              <template v-if="showSaid === true">
                <div class="text-general">
                  <prismic-rich-text :field="slice.primary.general"/>
                </div>
                <div class="text-said" v-for="(item,index) in slice.items" :key="item+index" >
                  <prismic-rich-text :field="item.said"/>
                  <div class="who"><prismic-rich-text :field="item.who"/></div> 
                </div>
              </template>
            </div>
            <div class="acoordion-item -link">
              <section class="accordion-header" @click="showLinks = !showLinks" :class="{'-active' : showLinks}">
                <prismic-rich-text class="header" :field="slice.primary.accordion_2_header"/>
              </section>
                <template v-if="showLinks === true && $i18n.locale === 'en'">
                  <ul>
                    <li v-for="(link,index) in this.$store.getters.GET_MENU_EN[1].items" :key="link+index">
                      <nuxt-link :to="$prismic.asLink(link.link)">{{link.sub_menu_link_label[0].text}}</nuxt-link>
                    </li>
                  </ul>
                </template>
                <template v-if="showLinks === true && $i18n.locale === 'sv'">
                  <ul>
                    <li v-for="(link,index) in this.$store.getters.GET_MENU_SV[1].items" :key="link+index">
                      <nuxt-link :to="$prismic.asLink(link.link)">{{link.sub_menu_link_label[0].text}}</nuxt-link>
                    </li>
                  </ul>
                </template>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-about',
  data() {
    return {
      showSaid: false,
      showLinks: false,
      menuEn: this.$store.getters.GET_MENU_EN,
      menuSv: this.$store.getters.GET_MENU_SV
    }
  }
  
}
</script>

<style lang="scss">

  .slice-about{

    .slice-accordion {
      padding: 30px 0;
    }

    .accordion-header {
      text-align: center;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      width: 100%;
      max-width: 380px;
      margin: 0 auto;
      cursor: pointer;
      letter-spacing: .1em;
      .header > * {
        margin: 0;
        padding: 8px 30px 6px;
        line-height: 1;
        display: block;
        color: $grey;
      } 
      &.-active,
      &:hover {
        .header > * {
          color: $black;
        }
      }
    }

    .text-said,
    .text-general {
      padding: 15px 0 0;
      font-size: 20px;
    }

    .text-said {
      font-family: $font-caslon;
      font-style: italic;
      &.-no {
        margin-top: 15px;
      }

      p {
        margin-bottom: 15px;
      }

      .who {
        padding-bottom: 15px;   
        font-size: 11px;
        font-family: $font-copper;
        text-transform: uppercase;
        letter-spacing: .1em;
      }
    }


    .acoordion-item {
      display: block;

      + .acoordion-item {
        margin-top: -1px;
      }


      &.-link {
        ul,
        li {
          list-style-type: none;
          margin: 0;
          padding: 0;
          text-align: center;
        }

        a {
          display: block;
          text-decoration: none;
          font-size: 15px;
          line-height: 1.1;
          font-family: $font-copper;
          text-transform: uppercase;
          letter-spacing: .1em;
          font-weight: 200;
          cursor: pointer;
          padding: 11px 0 0;
          color: $grey;
          &:hover {
            color: $black;
          }
        }
      }      
    }



    @include VP1024 {

      .slice-accordion {
        padding: 45px 0;
      }

      .slice-text {
        .header > * {
          font-size: 15px;
          line-height: 1;
        }
      }

      .text-said,
      .text-general {
        padding: 30px 0 0;
        font-size: 22px;
      }

      .text-said {
     

        p {
          margin-bottom: 30px;
        }

        .who {
          padding-bottom: 30px;

        }
      }


  	}

  }

</style>
