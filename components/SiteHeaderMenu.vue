<template>
  
  <div class="site-header-menu">
    <div class="menu">
      <ul>
        
        <!-- *** *** EN *** *** -->
        <template v-if="$i18n.locale === 'en'">
          <li v-for="(item,index) in menuEn" :key="item+index" :class="{'-active': index === activeParentLink}"> 
            <template v-elseif="item.primary.link.link_type !== 'Any' ">
              <template v-if="item.primary.anchor">
                <prismic-link :field="item.primary.link">{{item.primary.label[0].text}}</prismic-link>
              </template>
              <template v-else>
                <span @click="cleanMenu()">
                  <nuxt-link :to="$prismic.asLink(item.primary.link)">{{item.primary.label[0].text}}</nuxt-link> 
                </span>
              </template>
            </template>
          </li> 
        </template>
        
        <!-- *** *** SV *** *** -->
        <template v-if="$i18n.locale === 'sv'">
          <li v-for="(item,index) in menuSv" :key="'sv'+item+index" :class="{'-active': index === activeParentLink}"> 
            <template v-if="item.primary.anchor">
              <prismic-link :field="item.primary.link">{{item.primary.label[0].text}}</prismic-link>
            </template>
            <template v-else>
              <span @click="cleanMenu()">
                <nuxt-link :to="$prismic.asLink(item.primary.link)">{{item.primary.label[0].text}}</nuxt-link> 
              </span>
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

</template>

<script>

export default {

  name: 'site-header-menu',
  data() {
    return {
      showSubMenu: false,
      activeParentLink: false,
      menuEn: this.$store.getters.GET_MENUHEADERPOPOUT_EN,
      menuSv: this.$store.getters.GET_MENUHEADERPOPOUT_SV,
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

.site-header-menu {
  align-items: center;
  background-color: $red;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: center;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 800;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  transition: transform .4s ease;

  .menu {
    width: 100%;
    height: 100%;
    padding: 128px 128px 128px 80px;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-flow: column wrap;
      align-items: flex-start;
      justify-content: space-between;
      li {
        margin-bottom: 32px;
        a {
          font-family: $font-copper;
          font-weight: 200;
          font-size: 28px;
          color: $white;
          text-transform: uppercase;
          transition: all .275s ease-out;
          letter-spacing: .1em;
          line-height: 1;
          &:hover {
            text-decoration: none;
            color: $grey;
          }
        }
      }
    }
  }

  .langs {
    position: absolute;
    bottom: 32px;
    left: 48px;
    a {
      display: block;
      text-decoration: none;
      font-size: 20px;
      line-height: 1.1;
      font-family: $font-copper;
      text-transform: uppercase;
      transition: all .275s ease-out;
      letter-spacing: .1em;
      font-weight: 200;
      cursor: pointer;
      padding: 12px 0 10px;
      color: $white;
      &:hover {
        color: $grey;
      }
    }
    @media screen and (min-width: $bp-1024)  {
      display: none;
    }
  }

  @include VP1920 {
    .menu {
      width: 30vw;
    }
  }

  .-menu-open & {
    body & {
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
      }
    }
  }

  .header-menu-nav {
    position: absolute;
    top: 60px;
    right: 48px;
    ul {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      flex: 1 1;
      justify-content: flex-end;
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        a {
          font-family: $font-copper;
          font-weight: 200;
          font-size: 28px;
          color: $white;
          text-transform: uppercase;
          transition: all .275s ease-out;
          letter-spacing: .1em;
          line-height: 1;
          &:hover {
            text-decoration: none;
            color: $grey;
          }
        }
      }
    }
  }

  // - - Menu toggle
  .menu-toggle {
    box-sizing: content-box;
    margin-bottom: 8px;

    .burger {
      position: relative;
      width: 34px;
      text-align: center;
      cursor: pointer;

      span {
        height: 2px;
        display: block;
        margin-bottom: 7px;
        background: $white;
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

  .-menu-open & {
    body & {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @media screen and (max-width: $bp-1024)  {
    width: 100%;
    .menu {
      padding: 128px 48px;
    }
  }
  @media screen and (max-width: $bp-480)  {
    .menu {
      padding: 128px 32px;
      ul {
        li {
          margin-bottom: 16px;
          a {
            font-size: 18px;
          }
        }
      }
    }
    .langs {
      left: 32px;
    }
  }
  @media screen and (max-width: $bp-370)  {
    .menu {
      padding: 128px 16px;
    }
    .langs {
      left: 16px;
    }
  }
}
 
</style>


