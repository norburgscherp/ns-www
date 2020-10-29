<template>
 
<div class="part-update" :class="[{'-truncate-text' : this.texCount > 192, '-truncate-text-show' : this.textShow}]">

    <figure :style="{ backgroundImage: 'url(' + part.image.url + ')', backgroundPosition: ''+ part.image_focus +'' }"></figure>
    <prismic-rich-text class="header" :field="part.header"/>
    <div class="text">

      <div class="text-part">
        <prismic-rich-text  :field="part.text"/>
        <div class="read-less">
          <a href="#" @click.prevent.stop="showLess()">{{ $t('ns.read_less') }}</a>
        </div>
      </div>
      

      <div class="read-more">
        <a href="#" @click.prevent.stop="showMore()">{{ $t('ns.read_more') }}</a>
      </div>


    </div>
    



</div>

</template>

<script>
export default {
  props: ['part'],
  name: 'part-update',
   data() {
    return {
      texCount:  this.part.text[0].text.length,
      text: this.part.text,
      textShow: false
    };
  },
  methods: {
    showMore() {
     this.textShow = true
    },
    showLess() {
     this.textShow = false
    },

  }
}
</script>

<style lang="scss">

  .part-update {

    .read-more {
      padding-top: 14px;
      visibility: hidden;
    }

    .read-less {
      padding-top: 14px;
      display: none;
      position: relative;
      top: -16px;
    }


    &.-truncate-text {

      .text-part{ 
     
        width: 100%;

        
        /**Major Properties**/
        overflow: hidden;
   
        max-height: 224px;
        -webkit-box-orient: vertical;
        display: block;
        display: -webkit-box;
        overflow: hidden !important;
        text-overflow: ellipsis;
        -webkit-line-clamp: 7;
      }

      .read-more {
        visibility: visible;
      }

    }

    &.-truncate-text-show {
      .text {
        position: relative;
        background-color: $white;
      }
      .text-part{ 
        position: absolute;
        top: 0;
        z-index: 2;
        height: auto;
        max-height: none;
        text-overflow: unset!important;
        -webkit-line-clamp: 1000 !important;
        overflow: visible !important;
        background-color: $white;
        
      }
      .read-less {
        display: block;
      }
      .read-more {
        visibility: hidden;
      }
     }

  }

</style>
