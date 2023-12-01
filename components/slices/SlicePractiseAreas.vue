<template>
  <section class="slice-practise-areas slice-layout-two-col">
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
        </div>
      </div>
    </div>     
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-practise-areas',
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

  .slice-practise-areas{

    .practise-dropdown {
      background-color: blue;
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style-type: none;
          margin: 0 0 4px 0;
          padding: 0;
          &.-active {
            height: 200px;
          }
          a {
            text-decoration: underline;
            color: $black;
            // display: none;
            &:hover {
              color: $grey;
            }
            &.nuxt-link-active {
              display: block;
              background-color: red;
            }
          }
        }
      }
    }

    p {
      margin: 0;
    }

    .slice-body {
      &.-border-top {
        padding-top: 30px;
      }
    }

    .slice-image{
      margin-bottom: 30px;
    }

    @include MOBILE {
      .slice-image{
        @include aspect-ratio-img(1,1);
      }
    }

    @include VP600 {
      .contact-body .col {
        width: 100%;
        float: left;
        padding: 0 8px;
      }
    }

     @include VP768 {
        .contact-body .col {
          padding: 0 15px;
        }
      }


    .slice-persons {
      margin: 0 -7px; 
      position: relative;

      .person {
        width: 50%;
        float: left;
        padding: 0 7px 25px;
        @include VP768 {
          width: 33.3%;
        }

        &.-active {
          .link{
            color: $black;
          }

          .contact {
            .arrow,
            .info {
              display: block;
              visibility: visible;
              z-index: 1;
            }
            
          }
        }

        .contact {
          visibility: visible;
        }

        &.border {
          .contact {
            border-top: 1px solid $black;  
          }
        }

      }
      .name > * {
        margin: 0;
      }
      .title > *,
      .name > *,
      .contact > *,
      .link {
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        white-space: nowrap;
      }

      .title,
      .name {
        overflow: hidden;
      }

      .link {
        padding-top: 11px;
        color: $grey;
        cursor: pointer;
        a {
          text-decoration: none;
        }
      }

      .contact {
        
        visibility: hidden;
        margin-top: 20px;
        margin-left: -7px;
        margin-right: -7px;

        a {
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
        

        .arrow {
          display: none;
          margin-top: -10px;
          
          &:after {
            content: '';
            display: block;
            border-top: 1px solid $black;
            border-right: 1px solid $black;
            background-color: $white;
            height: 18px;
            width: 18px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            margin-left: 27px;
          }

        }

        .info {
          position: absolute;
          z-index: -1;
          top: 0 ;
          left: 0;
          visibility: hidden;
          padding-top: 10px;
          padding-left: 7px;
          width: 100%;

          > * {
            font-weight: normal;
            font-size: 11px;
            font-family: CopperplateGothicLTPro-30AB, serif;
            text-transform: uppercase;
            line-height: 1.5;
            letter-spacing: .1em;
          }

          span {
            font-weight: bold;
          }

          a {
            color: $black;
          }

        }

      }


      @include VP600 {
        .person {
          width: 33.33%; 
        }
      }

      @include VP768 {

        .contact-body .col {
          padding: 0 15px;
        }
      }

      @include VP1024 {
        .person {
          width: 20%; 
        }
      }

       @include VP1280 {
        .person {
          width: 16.6667%; 
        }
      }


    }

    .contact-header > * {
      font-size: 15px; 
      line-height: 1;
      letter-spacing: 1.1px;
      font-family: $font-copper;
      text-transform: uppercase;
      font-weight: 200;
      margin: 0 0 15px;
    }


    .slice-text {
 
      .text {

      }
      .quote {
        text-align: center;
        margin: 45px 0 45px; 
      }
      .quote-text {
        font-size: 32px;
        font-family: $font-caslon-italic;
        font-style: normal;
        letter-spacing: -1px;
        margin-bottom: 0px;

        &:after,
        &:before{
          content: '';
          display: block;
          width: 180px;
          height: 1px;
          background-color: $black; 
          margin: 14px auto;
        }

      }
      .quote-note {
        padding-top: 6px;
        font-size: 11px;
        font-family: $font-copper;
        text-transform: uppercase;
        letter-spacing: .1em;
      }


      @include VP1024 {
        .text {
         
        }
        .quote {
          margin: 80px 90px 80px; 
          .quote-text {
            font-size: 40px;
            letter-spacing: 0px;

          }
        }
      }


    }




   


  }

</style>
