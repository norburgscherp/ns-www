<template>
  <header v-bind:class="[headerClass, {'-startpage': $nuxt.$route.name === 'index___sv' || $nuxt.$route.name === 'index___en'}]">
    <div class="site-width header-wrapper">

      <nuxt-link :to="localePath('/')" class="logo-link"><logo /></nuxt-link>

      <div class="menu">
        <ul>
          
          <!-- *** *** EN *** *** -->
          <template v-if="$i18n.locale === 'en'">
            <li v-for="(item,index) in menuEn" :key="item+index" :class="{'-activeMenu': isMenuOpen === true,'-show': index === showSubMenu, '-active': index === activeParentLink}"> 
              
              <template v-if="item.primary.link.link_type !== 'Any' ">
                <span @click="cleanMenu()">
                  <nuxt-link :to="$prismic.asLink(item.primary.link)">{{item.primary.label[0].text}}</nuxt-link> 
                </span>
              </template>

            </li>
          </template>

          <!-- *** *** SV *** *** -->
          <template v-if="$i18n.locale === 'sv'">
            <li v-for="(item,index) in menuSv" :key="'sv'+item+index" :class="{'-activeMenu': isMenuOpen === true, '-show': index === showSubMenu, '-active': index === activeParentLink}"> 

              <template v-if="item.primary.link.link_type !== 'Any' ">
                <span @click="cleanMenu()">
                  <nuxt-link :to="$prismic.asLink(item.primary.link)">{{item.primary.label[0].text}}</nuxt-link> 
                </span>
              </template>

            </li>
          </template>

          <!-- Language switcher -->
          <li class="langs">
            <template v-if="$i18n.locale !== 'sv'">
              <nuxt-link :to="switchLocalePath('sv')">SV</nuxt-link>
            </template>
            <template v-if="$i18n.locale !== 'en'">
              <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
            </template>
          </li>

          <!-- Hamburger menu -->
          <li class="menu-toggle" @click="toggleMobileMenu">
            <div class="burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>

        </ul>
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
      headerClass: 'site-header',
      showSubMenu: false,
      activeParentLink: false,
      menuEn: this.$store.getters.GET_MENUHEADER_EN,
      menuSv: this.$store.getters.GET_MENUHEADER_SV,
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
  font-family: $font-copper;
  font-weight: normal;
  position: fixed;
  padding: 48px 0 0 0;
  top: 0;
  width: 100%;
  height: 120px;
  z-index: 1000;
  &.-startpage {
    background-color: transparent;
  }

  .site-width {
    margin: 0 auto;
    padding: 0 48px;
    position: relative;
    max-width: 1920px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
  }

  .logo-link {
    display: flex;
    flex: 1 1 300px;
    max-width: 300px;
    overflow: hidden;
    position: relative;
    z-index: 500;
    .logo {
      display: block;
      svg {
        width: 100%;
        height: auto;
        display: block;
      }
    }
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
    ul {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      flex: 1 1;
      justify-content: flex-end;

      li:not(:last-child) {
        margin-right: 20px;
      }
      .-activeMenu {
        display: none;
      }
    }

    ul a, 
    ul div {
      display: block;
      text-decoration: none;
      font-size: 15px;
      line-height: 1.1;
      font-family: $font-copper;
      text-transform: uppercase;
      transition: all .275s ease-out;
      letter-spacing: .1em;
      font-weight: 200;
      cursor: pointer;
      padding: 12px 0 10px;
      color: $black;
      &:hover {
        color: $grey;
      }
    }
    .langs {
      display: initial;
    }
  }
  
  .-menu-open & {
    body & {
      .langs {
        a {
          color: $white;
          &:hover {
            color: $grey;
          }
        }
      }
      .menu-toggle {
        .burger {
          span {
            background-color: $white;
            &:nth-child(1) {
              width: 100%;
              transform: rotate(135deg);
              top: 9px;
            }
            &:nth-child(2) {
              width: 0;
              opacity: 0;
              transition: all .225s ease-out;
            }
            &:nth-child(3) {
              width: 100%;
              transform: rotate(-135deg);
              bottom: 9px;
            }
          }
          &:hover {
            span {
              background-color: $grey;
            }
          }
        }
      }
      @media screen and (max-width: $bp-1024)  {
        .logo svg path {
          fill: $white;
        }
        .langs {
          display: none;
        }
      }
    }
  }


  // - - Menu toggle
  .menu-toggle {
    z-index: 5;
    box-sizing: content-box;
    margin-bottom: 8px;

    .burger {
      position: relative;
      width: 34px;
      text-align: center;
      cursor: pointer;
      z-index: 5;

      span {
        height: 2px;
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
        span {
          background: $grey;
        }
      }

    }
  }

  @media screen and (max-width: $bp-1024)  {
    .menu {
      li {
        display: none;
        &.menu-toggle {
          display: initial;
        }
      }
    }
    .menu-toggle {
      margin: 0;
    }
  }

  @media screen and (max-width: $bp-480)  {
    padding: 16px 0;
    .site-width {
      padding: 0 32px;
    }
    .logo-link {
      max-width: 240px;
    }
  }

  @media screen and (max-width: $bp-370)  {
    .site-width {
      padding: 0 16px;
    }
    .logo-link {
      max-width: 200px;
    }
  }

}
 
</style>


