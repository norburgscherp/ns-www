<template>
  <section class="slice-practise-area-header">
    <div class="site-content-width">
      <!-- ACCORDION HEADER -->
      <div class="slice-accordion">
        <div class="accordion-item -link">
          <section class="accordion-header" @click="showLinks = !showLinks" :class="{'-active' : showLinks}">
            <prismic-rich-text class="header" :field="slice.primary.header"/><chevron />
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
      </div>
    </div>
  </section>
</template>

<script>

import Chevron from '~/components/part/Chevron.vue'

export default {
  props: ['slice'],
  name: 'slice-practise-area-header',
  components: {
    Chevron
  },
  data() {
    return {
      showLinks: false,
      menuEn: this.$store.getters.GET_MENUPRACTISE_EN,
      menuSv: this.$store.getters.GET_MENUPRACTISE_SV,
    };
  },
}
</script>

<style lang="scss">

.slice-practise-area-header {
  text-align: center;
  margin-top: 128px;

  .accordion-item {
    position: relative;
    .accordion-header {
      display: inline-block;
      margin: 24px 0;
      border-bottom: 1px solid $black;
      border-top: 1px solid $black;
      width: 100%;
      cursor: pointer;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      h1,
      h2,
      h3 {
        line-height: 1;
        letter-spacing: .1em;
        text-transform: uppercase;
        font-family: $font-copper;
        font-weight: 200;
        font-size: 15px;
        color: $black;
        padding: 16px 0 10px 0;
        margin: 0;
      }
      .chevron {
        position: absolute;
        right: 0;
        transition: all .275s ease-out;
      }
      &.-active {
        .chevron {
          transform: rotate(180deg);
        }
      }
    }
    @include VP480 {
      .header {
        h1,
        h2,
        h3 {
          padding: 16px 0 10px 0;
          margin: 0;
          white-space: nowrap;
          width: 100%;
        }
      }
    }
    ul {
      position: absolute;
      top: 16px;
      left: 0;
      background-color: hsla(0,0%,97.3%,.97);
      padding: 16px 0;
      width: 100%;
      z-index: 500;
      list-style-type: none;
      li {
        list-style-type: none;
        margin: 0;
        padding: 0;
        a {
          display: inline-block;
          font-family: $font-copper;
          font-weight: 200;
          font-size: 15px;
          color: $black;
          margin: 0;
          text-transform: uppercase;
          padding: 0;
          letter-spacing: .1em;
          width: 100%;
          line-height: 1
        }
      }
    }
  }
}

</style>


