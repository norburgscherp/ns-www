<template>
  <section class="site-page-person ">
    <div class="person">
    
      <!-- IMAGE -->
      <div class="col-image">
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
      </div>

      <div class="col-text">

          <!-- NAME -->
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

          <div class="details">

            <!-- EMAIL -->
            <template v-if="doc.email.length > 0">
              {{ $t('ns.email') }}: <a :href="'mailto:' + doc.email[0].text" target="_blank">{{doc.email[0].text}}</a> <br>
            </template>

            <!-- TEL-->
            <template v-if="doc.tel.length > 0">
              {{ $t('ns.phone') }}: <a :href="'tel:' + doc.tel[0].text" target="_blank">{{doc.tel[0].text}}</a> <br>
            </template>

            <!-- MOBILE -->
            <template v-if="doc.mobile.length > 0">
              {{ $t('ns.mobile') }}: <a :href="'tel:' + doc.mobile[0].text" target="_blank">{{doc.mobile[0].text}}</a> <br>
            </template>

            
            <div class="links">
            
              <!-- CV -->
              <template v-if="doc.cv.name">
                  <a :href="doc.cv.url" target="_blank">Ladda ner cv</a> <br>
              </template>

              <!-- VCARD -->
              <template v-if="doc.vcard.name">
                 <a :href="doc.vcard.url" target="_blank">vcard</a> <br>
              </template>

              <!-- LINKEDIN -->
              <template v-if="doc.linkedin">
                  <a :href="doc.linkedin.url" target="_blank">Linkedin</a> <br>
              </template> 

            </div>


          </div>

          <mq-layout :mq="['mobile', 'phablet', 'tablet']" class="person-info">
                            <!-- BIOAGRAPHY -->
              <template v-show="doc.biography.length > 0">
                <div class="info-item" :class="{'-active' : showBio}">
                  <div class="info-item-header" @click="showBio = !showBio">{{ $t('ns.biography') }}</div>
                  <div class="info-item-text">
                    <prismic-rich-text :field="doc.biography"/>
                  </div>
                </div>
              </template>

              <!-- EXPERIENCE -->
              <template v-show="doc.experience.length > 0">
                <div class="info-item" :class="{'-active' : showExp}">
                  <div class="info-item-header" @click="showExp = !showExp">{{ $t('ns.experience') }}</div>
                  <div class="info-item-text">
                    <prismic-rich-text :field="doc.experience"/>
                  </div>
                </div>
              </template>

              <!-- NOTABLE REPRESENTATIONS -->
              <template v-show="doc.notable.length > 0">
                <div class="info-item" :class="{'-active' : showNot}">
                  <div class="info-item-header" @click="showNot = !showNot">{{ $t('ns.notable') }}</div>
                  <div class="info-item-text">
                    <prismic-rich-text :field="doc.notable"/>
                  </div>
                </div>   
              </template>

              <!-- EDUCATION -->
              <template v-show="doc.education.length > 0">
                <div class="info-item" :class="{'-active' : showEdu}">
                  <div class="info-item-header"  @click="showEdu = !showEdu" >{{ $t('ns.education') }}</div>
                  <div class="info-item-text">
                    <prismic-rich-text :field="doc.education"/>
                  </div>
                </div>        
              </template>

              <!-- MEMBERSHIPS -->
              <template v-show="doc.memberships.length > 0">
                <div class="info-item" :class="{'-active' : showMem}">
                  <div class="info-item-header" @click="showMem = !showMem">{{ $t('ns.memberships') }}</div>
                  <div class="info-item-text">
                    <prismic-rich-text :field="doc.memberships"/>
                  </div>
                </div>
              </template>
            </mq-layout>



            <mq-layout mq="desktop+" class="person-info -desktop">
              <div class="info-tab-headers">
                  <div class="info-item" :class="{'-active' : showBio}" v-if="doc.biography.length > 0">
                    <div class="info-item-header" @click="reset(); showBio = !showBio">{{ $t('ns.biography') }}</div>
                  </div>
                  <div class="info-item" :class="{'-active' : showNot}" v-if="doc.notable.length > 0">
                    <div class="info-item-header" @click="reset(); showNot = !showNot">{{ $t('ns.notable') }}</div>
                  </div>
                  <div class="info-item" :class="{'-active' : showExp}" v-if="doc.experience.length > 0">
                    <div class="info-item-header" @click="reset(); showExp = !showExp">{{ $t('ns.experience') }}</div>
                  </div>
                  <div class="info-item" :class="{'-active' : showEdu}" v-if="doc.education.length > 0">
                    <div class="info-item-header" @click="reset(); showEdu = !showEdu">{{ $t('ns.education') }}</div>
                  </div>
                  <div class="info-item" :class="{'-active' : showMem}" v-if="doc.memberships.length > 0">
                    <div class="info-item-header" @click="reset(); showMem = !showMem">{{ $t('ns.memberships') }}</div>
                  </div>
              </div>
              <div class="info-tab-content">
                <div class="info-item-text" :class="{'-show' : showBio}">
                  <prismic-rich-text :field="doc.biography"/>
                </div>
                <div class="info-item-text" :class="{'-show' : showNot}">
                  <prismic-rich-text :field="doc.notable"/>
                </div>
                <div class="info-item-text" :class="{'-show' : showExp}">
                  <prismic-rich-text :field="doc.experience"/>
                </div>
                <div class="info-item-text" :class="{'-show' : showEdu}">
                  <prismic-rich-text :field="doc.education"/>
                </div>
                <div class="info-item-text" :class="{'-show' : showMem}">
                  <prismic-rich-text :field="doc.memberships"/>
                </div>
              </div>  

            </mq-layout>

          <div >
            



          </div>
          


          <!-- OLD -->


         <!-- CONTACT -->
<!--          <prismic-rich-text v-if="doc.contact.length > 0 "  class="contact" :field="doc.contact"/>
          <div v-else class="contact">
            <div>
                ({{ $t('ns.no_contact') }})
            </div>
          </div>
 -->
          <!-- Downloads -->
          <!-- <prismic-rich-text v-if="doc.downloads.length > 0 "  class="downloads" :field="doc.downloads"/> -->

          <!-- TEXT -->
          <!-- <prismic-rich-text v-if="doc.text.length > 0 && !doc.text.length === '(text)' "  class="text person-text -hide-mobile" :field="doc.text"/> -->

          <!-- DETAILS-->
          <!-- <prismic-rich-text v-if="doc.details.length > 0 "  class="details text -hide-mobile" :field="doc.details"/>  -->

      </div>  
     
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
  },
  data() {
    return {
      showBio: this.$mq === 'desktop' || this.$mq === 'monitor' ? true : false,
      showExp: false,
      showNot: false,
      showEdu: false,
      showMem: false
    }
  },
  methods: {

    reset() {
      this.showBio = false;
      this.showEdu = false;
      this.showNot = false;
      this.showExp = false;
      this.showMem = false;
    }
  },
   mounted() {

    let onceMob = false;
    let onceDesk = false;

    if (this.$mq === 'desktop' || this.$mq === 'monitor'){
      if (!onceDesk){
          onceDesk = true;
          onceMob = false;
          this.reset();
          this.showBio = true;
        }
       
    } else {
        if (!onceMob){
          onceDesk = false;
          onceMob = true;
          this.reset();
        }
    }
   window.addEventListener('resize', () => {
    if (this.$mq === 'desktop' || this.$mq === 'monitor'){
        if (!onceDesk){
          onceDesk = true;
          onceMob = false;
          this.reset();
          this.showBio = true;
        }
    } else {
        if (!onceMob){
          onceDesk = false;
          onceMob = true;
          this.reset();
        }
    }
   })
 },

}
</script>

<style lang="scss">

.site-page-person {

  ul {
    padding-left: 12px;
  }

  .person-info {
    padding: 12px 0 32px;
  }


    .info-item {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      width: 100%;
      margin: 0 auto;
      cursor: pointer;
      
      @include VP1024 {
        max-width: none;
      }
      letter-spacing: .1em;
      + .info-item {
        margin-top: -1px;
      }
      .info-item-header {
        margin: 0;
        padding: 8px 0 6px;
        font-weight: 200;
        font-size: 13px;
        letter-spacing: .1em;
        font-family: CopperplateGothicLTPro-30AB, serif;
        display: block;
        color: $grey;
        line-height: 1;
        text-transform: uppercase;
      } 

      &.-active {
        .info-item-header {
          color: $black;
          border-bottom: 1px solid black;
        }
        .info-item-text {
          display: block;
          letter-spacing: 0;
          font-size: 15px;
          padding: 16px 0 8px;
        }
      }



      .info-item-text {
        display: none;
      }

    }

  
  .person {
    margin-top: 15px; 
    margin-bottom: 20px;
    text-align: left;
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;

    a {
      color: $black;
    }

    .details {

      a {
        font-weight: normal;
      }
    }

    .links {
      margin: 24px 0;
      text-decoration: underline;
      a {
        font-weight: bold;
      }
    }

    figure {
      &.-no-image {
        height: 400px;
      }
      display: flex;
      color: $red;
      text-align: center;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 15px;
      letter-spacing: .1em;
      font-family: $font-copper;
      text-transform: uppercase;
      max-width: 400px;
      margin: 0 auto 1.4em;
      padding: 0 14px;
    }

    .col-text {
      padding: 0 14px;
      max-width: 400px;
      margin: 0 auto;
    }

    .name > *,
    .title > *,
    .contact,
    .details {
      font-weight: bold;
      font-size: 13px;
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

    @include VP1024 {
      display: flex;

        .person-info {
          padding: 0px 0 12px;
        }

        .info-item {
          &.-active {
            .info-item-header {
              border: none;
              position: relative;
              padding-bottom: 15px;
              &:after {
                position: absolute;
                left: 46%;
                bottom: -9px;
                content: '';
                display: block;
                border-top: 1px solid #000000;
                border-right: 1px solid #000000;
                background-color: #fcfcf9;
                height: 18px;
                width: 18px;
                transform: rotate(-45deg);
                -webkit-transform: rotate(-45deg);
                margin-left: -14px;
             
              }
            }
          }
        }

      .info-tab-content {

        .info-item-text {
          display: none;
          padding: 16px 0;
          &.-show {
            display: block;
          }
        } 
      }

      .info-tab-headers {
        border-bottom: 1px solid black;
      }

      .info-item {
        border: none;
        display: inline-block;
        width: auto;
      }

      .info-item-header {
        border: none;
        font-size: 12px;
        padding-right: 2px;
        &:hover { 
          color: $black;
        }
      } 

      .info-item-text {
        font-size: 15px;
      }

      .col-image {
        width: 260px;
        img {
          width: 260px;
        }
      }

      .col-text {
        text-align: left;
        flex-grow: 1;
        padding: 0 0 0 24px;
        max-width: none;
        margin: 0;

        .text {
          margin: 0;
          max-width: none;
        }
        
      }
    }

    @include VP1280 {
      margin-top: 30px; 
    }

  }
 
}
  
</style>
