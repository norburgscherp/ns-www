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

          <template v-if="slice.primary.header[0].text">
            <prismic-rich-text class="header" :field="slice.primary.header"/> 
          </template>
          
          <prismic-rich-text class="text" :field="slice.primary.text"/>

          <div class="quote"v-if="slice.primary.quote[0].text">

            <prismic-rich-text class="quote-text" :field="slice.primary.quote"/>
            <prismic-rich-text class="quote-note" :field="slice.primary.quote_note"/>
          </div>
          
        </div>
        
      </div>

    </div>

    <div class="slice-body contact-body -border-top" v-if="persons.length > 0">
      <div class="row">

        <div class="col-1 col">
           
            <!-- HEADER-->
            <prismic-rich-text class="contact-header" v-if="slice.primary.contact_header[0].text" :field="slice.primary.contact_header" />

            <!-- PERSONS -->
            <div class="slice-persons" :class="{'-show-person-contact': showPersonActive}">
              <div v-for="(person, index) in persons" 
                  :data-person-number="index"
                  :key="person.id" class="person" 
                  v-match-heights="{el: ['.person figure', '.person'], disabled: [100] }" 
                  :class="[{'-active': index === showPersonContact}]">
                  
                  <!-- IMAGE -->     
                  <figure v-if="person.data.image.url">
                    <prismic-image  :field="person.data.image"/>
                  </figure>
                  <figure v-else class="-no-image">
                    <template v-if="person.data.name.length > 0 ">
                      <prismic-rich-text class="title" :field="person.data.name"/>
                    </template>
                    <div v-else class="title">
                       ({{ $t('ns.no_image') }})
                    </div>
                  </figure>

                  <!-- NAME -->
                  <div v-if="person.data.name.length > 0 "  class="name">
                      <h3>{{person.data.name[0].text}}</h3>
                  </div>
                  <div v-else class="name">
                    <h3>({{ $t('ns.no_name') }})</h3>
                  </div>

                  <!-- TITLE -->
                  <div v-if="person.data.title.length > 0 "  class="title">
                      <h3>{{person.data.title[0].text}}</h3>
                  </div>
                  <div v-else class="title">
                    <h3>({{ $t('ns.no_title') }})</h3>
                  </div>

                  <!-- LINK -->
                  <div class="link" @click.prevent="toggleContactDetails(index)">
                    {{ $t('ns.contact') }}
                  </div>


                  <!-- CONTACT DEATILS -->
                  <div v-if="person.data.contact.length > 0 "  class="contact">
                    <div class="arrow"></div>
                    <div class="info">
                      <prismic-rich-text :field="person.data.contact"/>
                    </div>
                  </div>
                  <div v-else class="contact">
                    <div class="arrow"></div>
                    <div class="info">
                      <h3>({{ $t('ns.no_contact') }})</h3>  
                    </div>
                  </div>


         
              </div>             
            </div>


        </div>
        <div class="col-2 col"></div>


      </div>
    </div>


  </section>
</template>

<script>
export default {
  props: ['slice', 'persons'],
  name: 'slice-practise-areas',
  data () {
    return {
      showPersonContact: false,
      showPersonActive: false
    }
  },
  methods: {
    toggleContactDetails: function(id){


      let i
      let _per = document.querySelectorAll("[data-person-number]"); 
      let per = document.querySelectorAll("[data-person-number='"+id+"']")[0]; 
      let perH = per.clientHeight; 
      let perY = per.offsetTop; 

      let con = per.querySelectorAll(".info")[0]
      let conH = con.clientHeight;

      if (id === this.showPersonContact) {
        this.showPersonContact = false
        this.showPersonActive = false
      } else {
        this.showPersonContact = id
        this.showPersonActive = true
      }

      // Clean loop. 
      for ( i = 0; i < _per.length; i++ ) {
        console.log(i)
        _per[i].classList.remove("border");
        _per[i].style.marginBottom = "20px"; 
      }

      if (this.showPersonActive) {

          if (this.$mq === "mobile"){

            console.log('mobile test')

              if (id === 0 || id === 1){
  
                    if (_per[0]) {
                      _per[0].style.marginBottom = conH+15+"px"; 
                      setTimeout(() => {
                        _per[0].classList.add("border");
                      },5);
                    }

                    if (_per[1]) {
                      _per[1].style.marginBottom = conH+15+"px"; 
                      setTimeout(() => {
                        _per[1].classList.add("border");
                      },5);
                    }

               } else if (id === 2 || id === 3){

                    if (_per[2]) {
                      _per[2].style.marginBottom = conH+15+"px"; 
                      setTimeout(() => {
                        _per[2].classList.add("border");
                      },5);
                    }

                    if (_per[3]) {
                      _per[3].style.marginBottom = conH+15+"px"; 
                      setTimeout(() => {
                        _per[3].classList.add("border");
                      },5);
                    }

               } else if (id === 4 || id === 5){
                    
                    if (_per[4]) {
                      _per[4].style.marginBottom = conH+15+"px"; 
                      setTimeout(() => {
                        _per[4].classList.add("border");
                      },5);
                    }

                    if (_per[5]) {
                      _per[5].style.marginBottom = conH+15+"px"; 
                      setTimeout(() => {
                        _per[5].classList.add("border");
                      },5);
                    }

                    if (_per[3]) {
                      _per[3].style.marginBottom = conH+15+"px"; 
                      setTimeout(() => {
                        _per[3].classList.add("border");
                      },5);
                    }

               } else if (id === 6 || id === 7){

                    if (_per[6]) {
                      _per[6].style.marginBottom = conH+15+"px"; 
                      setTimeout(() => {
                        _per[6].classList.add("border");
                      },5);
                    }

                    if (_per[7]) {
                      _per[7].style.marginBottom = conH+15+"px"; 
                      setTimeout(() => {
                        _per[7].classList.add("border");
                      },5);
                    }

               }

          } else if (this.$mq === "phablet"){
         
             if (id === 0 || id === 1 || id === 2){
               
               if (_per[0]) {
                  _per[0].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[0].classList.add("border");
                  },5);
                }

                if (_per[1]) {
                  _per[1].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[1].classList.add("border");
                  },5);
                }

                if (_per[2]) {
                  _per[2].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[2].classList.add("border");
                  },5);
                }

             } else if (id === 3 || id === 4 || id === 5){

               if (_per[3]) {
                  _per[3].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[3].classList.add("border");
                  },5);
                }

                if (_per[4]) {
                  _per[4].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[4].classList.add("border");
                  },5);
                }

                if (_per[5]) {
                  _per[5].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[5].classList.add("border");
                  },5);
                }

             } else if (id === 6 || id === 7 ){

                if (_per[6]) {
                  _per[6].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[6].classList.add("border");
                  },5);
                }

                if (_per[7]) {
                  _per[7].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[7].classList.add("border");
                  },5);
                }

             }

          } else if (this.$mq === "tablet"){
         
             if (id === 0 || id === 1 || id === 2 || id === 3){
               
                if (_per[0]) {
                  _per[0].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[0].classList.add("border");
                  },5);
                }

                if (_per[1]) {
                  _per[1].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[1].classList.add("border");
                  },5);
                }

                if (_per[2]) {
                  _per[2].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[2].classList.add("border");
                  },5);
                }

                if (_per[3]) {
                  _per[3].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[3].classList.add("border");
                  },5);
                }

             } else if (id === 4 || id === 5 || id === 6 || id === 7){

                if (_per[4]) {
                  _per[4].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[4].classList.add("border");
                  },5);
                }

                if (_per[5]) {
                  _per[5].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[5].classList.add("border");
                  },5);
                }

                if (_per[6]) {
                  _per[6].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[6].classList.add("border");
                  },5);
                }

                if (_per[7]) {
                  _per[7].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[7].classList.add("border");
                  },5);
                }

             } 

          } else if (this.$mq === "desktop"){
            
            if (id === 0 || id === 1 || id === 2 || id === 3 || id === 4){
              
               if (_per[0]) {
                  _per[0].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[0].classList.add("border");
                  },5);
                }

                if (_per[1]) {
                  _per[1].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[1].classList.add("border");
                  },5);
                }

                if (_per[2]) {
                  _per[2].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[2].classList.add("border");
                  },5);
                }

                if (_per[3]) {
                  _per[3].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[3].classList.add("border");
                  },5);
                }

                if (_per[4]) {
                  _per[4].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[4].classList.add("border");
                  },5);
                }

            } else if (id === 5 || id === 6 || id === 7){
              
                if (_per[5]) {
                  _per[5].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[5].classList.add("border");
                  },5);
                }

                if (_per[6]) {
                  _per[6].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[6].classList.add("border");
                  },5);
                }

                if (_per[7]) {
                  _per[7].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[7].classList.add("border");
                  },5);
                }

            } 

          } else if (this.$mq === "monitor"){

            if (id === 0 || id === 1 || id === 2 || id === 3 || id === 4 || id === 5){

               if (_per[0]) {
                  _per[0].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[0].classList.add("border");
                  },5);
                }

                if (_per[1]) {
                  _per[1].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[1].classList.add("border");
                  },5);
                }

                if (_per[2]) {
                  _per[2].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[2].classList.add("border");
                  },5);
                }

                if (_per[3]) {
                  _per[3].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[3].classList.add("border");
                  },5);
                }

                if (_per[4]) {
                  _per[4].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[4].classList.add("border");
                  },5);
                }

                if (_per[5]) {
                  _per[5].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[5].classList.add("border");
                  },5);
                }

            } else if (id === 6 || id === 7){

                if (_per[6]) {
                  _per[6].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[6].classList.add("border");
                  },5);
                }

                if (_per[7]) {
                  _per[7].style.marginBottom = conH+15+"px"; 
                  setTimeout(() => {
                    _per[7].classList.add("border");
                  },5);
                }
            } 
          
          }

          perY = per.offsetTop; 
          _per[id].querySelectorAll(".info")[0].style.top = perH + perY - 15 + "px"

      } 

    }
  },
  mounted() {
      if (process.client) {
        if (document.querySelector('.nuxt-link-handler')){
          document.querySelector('.nuxt-link-handler').addEventListener('click', event => {
            event.preventDefault()
            this.$router.push(event.target.pathname)
          })
        }
      }
    },
}
</script>

<style lang="scss">

  .slice-practise-areas{

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
        font-family: $font-caslon;
        font-style: italic;
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
