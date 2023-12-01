<template>
  <section class="slice-career slice-layout-two-col">

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

            <!-- General text  -->
            <div class="text text-general">
              <prismic-rich-text class="header" v-if="slice.primary.header.text" :field="slice.primary.header"/>
              <prismic-rich-text class="text" v-if="slice.primary.text" :field="slice.primary.text"/>
            </div>

            <div v-if="slice.items.length > 0" class="text text-general">
              <prismic-rich-text class="sub-header" v-if="slice.primary.open" :field="slice.primary.open"/>
              <div v-for="(job, index) in slice.items" :key="job.id" class="job">
                <nuxt-link :to="$prismic.asLink(job.link)">{{job.header[0].text}}</nuxt-link>
              </div>
            </div>
                  
          </div>

      </div>
      
    </div>

  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-career',
}
</script>

<style lang="scss">

  .slice-career{
  
  	.job,
    .text-general {
  		margin-bottom: 30px;

      .header,
      .sub-header {
        font-family: $font-copper;
        text-transform: uppercase;
        font-weight: 200;
        font-size: 15px;
        letter-spacing: .1em;
      }
      .sub-header {
        h2 {
          text-align: left;
        }
      }
      a {
        text-decoration: underline;
        color: $black;
        &:hover {
          color: $grey;
        }
      }
  	}

    figure {
      @include aspect-ratio-img(1,1);
    }

    @include VP1024 {

  		.header > * {
	      font-size: 18px;
	    }
	    .text {
	      font-size: 27px;
	    }

  	}

  }

</style>
