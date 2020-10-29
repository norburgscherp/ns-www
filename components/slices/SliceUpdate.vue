<template>
 
<div class="slice-update">
  <div class="updates" v-match-heights="{el: ['.slice-update h3', '.slice-update h4', '.slice-update h5', '.slice-update .text'] }">

		<div v-for="(update, index) in reverseUpdates" :key="update.id" class="update">

			<template v-if="index <= updatesToShow -1">
				
<!--         <figure :style="{ backgroundImage: 'url(' + update.image.url + ')', backgroundPosition: ''+ update.image_focus +'' }"></figure>
        <prismic-rich-text class="header" :field="update.header"/>
        <prismic-rich-text class="text"  :field="update.text"/> -->
        <update :part="update" />
			</template>
			
		</div>



		<div class="load-more" v-if="updatesToShow < totalUpdates">
			<a href="#" @click.prevent.stop="showMore()">{{ $t('ns.load_more') }}</a>
		</div>
		
  </div>	

</div>

</template>

<script>

import update from '~/components/part/partUpdate.vue'

export default {
  props: ['slice'],
  components: {
    update
  },
  name: 'slice-update',
   data() {
    return {
      updatesToShow: 12,
      totalUpdates: 0,
      trigger: 0
    };
  },
  computed: {
    reverseUpdates() {
      return this.slice.items.slice().reverse();
    }     
  },
  methods: {
  	showMore() {
  		this.updatesToShow += 2

  		// Trigger vue-match-heights
  		setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      },10);

  	}
  },
  mounted() {
  	this.totalUpdates = this.slice.items.length
  }
}
</script>

<style lang="scss">

 .slice-update{


 	// - - - UPDATES

  .updates {

  	@include clearfix();

  	.load-more {
  		text-align: center;
  		margin: -20px 0 20px;
  		float: left;
  		width: 100%;
  		a {
        font-family: CopperplateGothicLTPro-30AB, serif;
        text-transform: uppercase;
        font-weight: 200;
        font-size: 15px;
        letter-spacing: .1em;
        color: $grey;
        text-decoration: none;
        &:hover {
          text-decoration: none;
        }
      }
  	}



		@include VP480 {
      margin: 0 -15px; 
    }

   }
  
  
  // - - - UPDATE

  .update {
    margin-bottom: 45px;

    a {
      //font-family: CopperplateGothicLTPro-30AB, serif;
      //text-transform: uppercase;
      //font-weight: 200;
      //font-size: 15px;
      //letter-spacing: .1em;
      color: $grey;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    
    figure {
      @include aspect-ratio-img(1,1);
      background-size: cover;
      background-position: center center;
    }

    .header > * {
      font-weight: 200;
      font-size: 15px;
      font-family: $font-copper;
      line-height: 1.4;
      letter-spacing: .1em;
      margin: 18px 0;
      text-transform: uppercase;
    }

    .text {
      font-size: 21px;  
      font-family: $font-caslon;
    }
    
    @include VP480 {
      width: 50%;
      float: left;
      padding: 0 15px 0;

      .header > * {
       // font-size: 18px;
      }
      .text {
        //font-size: 16px;
      }

    }
    @include VP768 {
      width: 33.33%;

      .header > * {
        // font-size: 15px;
      }
      .text {
        // font-size: 14px;
      }

    }


    @include VP1280 {
      width: 25%;

      .header > * {
        // font-size: 15px;
      }
      .text {
        // font-size: 14px;
      }

    }

  }

 }

</style>
