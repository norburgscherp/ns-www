<template>
  <header class="site-header">
    <div class="site-width">

      <div class="menu-toggle" @click="toggleMobileMenu">
        <div class="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nuxt-link :to="localePath('/')" class="logo-link"><logo /></nuxt-link>

      <div class="menu">
        <ul>

          <!-- *** *** EN *** *** -->

          <template v-if="$i18n.locale === 'en'">

            <li v-for="(item,index) in menuEn" :key="item+index" :class="{'-show': index === showSubMenu, '-active': index === activeParentLink}"> 

              <template v-if="item.primary.link.link_type !== 'Any' ">
                <span @click="cleanMenu()">
                  <nuxt-link :to="$prismic.asLink(item.primary.link)">{{item.primary.label[0].text}}</nuxt-link> 
                </span>
              </template>

              <template v-else>

                <div @click.prevent="toggleSubMenu(index)">{{item.primary.label[0].text}}</div> 

                <ul class="sub" v-if="item.items" @click="closeMenu(index)">
                  <li v-for="(item, index) in item.items" :key="'i-' + index" >

                   <template v-if="item.sub_menu_link_label.length > 0">
                      <nuxt-link :to="$prismic.asLink(item.link)">{{item.sub_menu_link_label[0].text}}</nuxt-link>
                    </template>
                  
                  </li>
                </ul>

              </template> 

            </li> 


          </template>


          <!-- *** *** SV *** *** -->

          <template v-if="$i18n.locale === 'sv'">

            <li v-for="(item,index) in menuSv" :key="'sv'+item+index" :class="{'-show': index === showSubMenu, '-active': index === activeParentLink}"> 
              
              <template v-if="item.primary.link.link_type !== 'Any' ">
                <span @click="cleanMenu()">
                  <nuxt-link :to="$prismic.asLink(item.primary.link)">{{item.primary.label[0].text}}</nuxt-link> 
                </span>
              </template>

              <template v-else>
                
                <div @click.prevent="toggleSubMenu(index)">{{item.primary.label[0].text}}</div>

                <ul class="sub" v-if="item.items" @click="closeMenu(index)">
                  <li v-for="(item, index) in item.items" :key="'i-' + index" >

                    <template v-if="item.sub_menu_link_label.length > 0">
                      <nuxt-link :to="$prismic.asLink(item.link)">{{item.sub_menu_link_label[0].text}}</nuxt-link>
                    </template>
                  
                  </li>
                </ul>

              </template> 

            </li>

          </template>

        </ul>
      </div>


      <!-- Language switcher -->

      <div class="langs">

        <template v-if="$i18n.locale !== 'sv'">
          <nuxt-link :to="switchLocalePath('sv')">SV</nuxt-link>
        </template>

        <template v-if="$i18n.locale !== 'en'">
          <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
        </template>

      </div>

    </div>

  
  </header>
</template>

<script>

import Logo  from '~/components/part/Logo.vue'

export default {

  name: 'site-header',
  components: {
    Logo
  },
  data() {
    return {
      showSubMenu: false,
      activeParentLink: false,
      menuEn: this.$store.getters.GET_MENU_EN,
      menuSv: this.$store.getters.GET_MENU_SV,
      isMenuOpen: this.$store.getters.GET_MENU,
    };
  },
  methods: {

    subLinkActive(id){
     // setTimeout(() => {
        this.activeParentLink = id
      //}, 300);
    },
    onResize(event) {
      this.$store.commit("SET_MENU",false)
      this.showSubMenu = false
    },
    toggleMobileMenu: function(){
      if (this.$store.getters.GET_MENU) {
        this.isMenuOpen = false;
      } else {
        this.isMenuOpen = true;
      }
      this.showSubMenu = false
      this.$store.commit("SET_MENU",this.isMenuOpen)
    },
    toggleSubMenu: function(id){
        if (id === this.showSubMenu) {
          this.showSubMenu = false
        } else {
          this.showSubMenu = id
        }
    },
    closeMenu: function(id){
      
      // setTimeout(() => this.$store.commit("SET_MENU",false), 300)
      // setTimeout(() => this.activeParentLink = false, 290)

      this.$store.commit("SET_MENU",false)
      this.activeParentLink = false

      this.showSubMenu = false
      this.subLinkActive(id)
     
    },
    cleanMenu: function(){
      
      this.showSubMenu = false
      this.$store.commit("SET_MENU",false)
      this.subLinkActive(false)
     
    }
  },
  mounted() {
    // console.log(this.$route);
    window.addEventListener('resize', this.onResize)
  },
}
</script>



<style lang="scss">

.site-header {
  background-color: $white;
  height: 80px;
  font-family: $font-copper;
  font-weight: normal;
  position: fixed;
  width: 100%;
  z-index: 10;

  .site-width {
    position: relative;
  }

  .logo {
    text-align: center;
    margin-top: 20px;
    svg {
      margin-top: 4px;
      height: 36px;
      width: 200px;
      @include VP370 {
        width: 240px;
      }
    }
  }

  .logo-link {
    display: block;
    position: relative;
    z-index: 2;
  }

  li, ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  .menu {
    position: absolute;
    z-index: 1;
    top: 0;
    height: 52px;
    width: 100%;
    overflow: scroll;
    padding: 10px 0 24px;
    margin: 0 -15px;
    text-align: center;
    ul {
      display: none;
    }

    ul a, 
    ul div {
      display: block;
      text-decoration: none;
      font-size: 15px;
      line-height: 1.1;
      font-family: $font-copper;
      text-transform: uppercase;
      letter-spacing: .1em;
      font-weight: 200;
      cursor: pointer;

      border-bottom: 1px solid $grey;
      padding: 11px 0 12px;
      color: $grey;

      &:hover {
        color: $black;
      }

    }
    > ul > li:first-child {
      a {
        border-top: 1px solid $grey;
      }
    }


    > ul {
      padding: 50px 15px 30px;
    }

    li.-show {
      div {
        border-bottom: none;
      }
      ul.sub {
        display: block;
      }
    }

    li.-active{
      > div {
        color: $black;
        font-weight: 600;
        &:hover {
          color: $black;
          font-weight: 600;
        }
      }
    }

    li,
    li li {
       a.nuxt-link-active {
        color: $black;
        font-weight: 200;
        &:hover {
          color: $black;
          font-weight: 200;
        }
      }
    }

    ul.sub {
      display: none;
      padding: 6px 0;
      border-bottom: 1px solid $grey;
      a {
        color: $grey;
        border-bottom: none;
        padding-top: 0;
      }
      li.-active {
        > a{
          color: $black;
          &:hover {
            color: $black;
          }
        }
      }
    }
  }

  
  .-menu-open &{
    // body & { 


    .menu-toggle {
      .burger {
        span {
          color: $black;
          &:nth-child(1) {
            width: 100%;
            transform: rotate(135deg);
            top: 8px;
          }
          &:nth-child(2) {
            width: 0;
            opacity: 0;
            transition: all .225s ease-out;
          }
          &:nth-child(3) {
            width: 100%;
            transform: rotate(-135deg);
            bottom: 8px;
          }
        }
      }
     }




    .menu {
      opacity: 1;
      overflow: visible;
      > ul {
        display: block;
         background-color: $white;
      }
    }

  }

  .langs {
    font-size: 21px;
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -14px;
    z-index: 2;
  }


  // - - Menu toggle

  .menu-toggle {
    position: absolute;
    z-index: 5;
    left: 0;
    top: 0;
    box-sizing: content-box;
    margin-top: -6px;

    .burger {
      position: relative;
      margin: 15px;
      width: 34px;
      text-align: center;
      cursor: pointer;
      z-index: 5;

      span {
        height: 1px;
        display: block;
        margin-bottom: 7px;
        background: $black;
        transition: all .275s ease-out;
        position: relative;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        
        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(3) {
         bottom: 0;
         top: auto;
        }
      }

      &:hover {
        cursor: pointer;
      }

    }


  }

  @include VP768 {
    .langs {
      right: 25px;
    }
    .menu-toggle {
      left: 10px;
    }
  }



  @include VP1280 {
    
    height: 133px;
    .logo {
      margin-top: 26px;
      svg {
        height: 58px;
        width: 450px;
        margin-top: 0;
      }
    }

    .langs {
      right: 40px;
      top: 78px;
      a {
        font-size: 15px;
        letter-spacing: .1em;
        text-transform: uppercase;
      }
    }

    .menu {
      background-color: $white; 
      overflow: visible;
      height: auto;
      display: block;
      visibility: visible;
      opacity: 1;
      // padding: 14px 28px 28px
      padding: 0;
      height: auto;
      top: 58px;

      > ul {
        display: block;
        padding-top: 0;
        padding-bottom: 0;
        > li >  span a, 
        > li > div {
          border-left: 1px solid $grey;
          padding: 0 12px;
        }
        > li {
          &:first-child {
            > span a,
            > div {
              border: none;
            } 
          }
        }
      }

      ul a,
      ul div  {
        border: none;
      }
      > ul {
        margin: 0;
       border-top: none;
      }

      li {
        display: inline-block;
        padding: 14px 0;
        li {
          padding: 6px 0;
          display: block;
        }
      }
      

      li.-show {
        display: inline-block!important;
        position: relative;

        li {
          padding: 0px 14px;
        }

        ul.sub {
          position: absolute;
          top: 48px;
          left: 0px;
          text-align: left;
          padding: 8px 0 12px;
          &:before {
            content: '';
            position: absolute;
            background-color: rgba(248,248,248, .97);
            top: 0;
            left: -80vw;
            height: 100%;
            width: 200vw;
            z-index: -1;
          }
          a {
            white-space: nowrap;
            padding: 5px 0;
            &:hover {
              color: $black;
            }
          }
        }
      }

      li.-active{
      > div {
        font-weight: 200;
        &:hover {
          font-weight: 200;
        }
      }
    }
      
      

    }

    .menu-toggle {
      display: none;
    }
  }

}
 
</style>


