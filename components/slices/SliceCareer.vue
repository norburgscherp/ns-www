<template>
  <section class="slice-career slice-layout-two-col">

    <div class="slice-body row">

       <!-- COL-1 -->
      <div class="col-1 col">

          <!-- IMAGE -->
          <figure class="slice-image">
            <mq-layout mq="mobile">
              <prismic-image :field="slice.primary.image"/>
            </mq-layout>
            <mq-layout mq="phablet+">
              <prismic-image :field="slice.primary.image_2"/>
            </mq-layout>
          </figure>
        
      </div>

      <!-- COL-2 -->
      <div class="col-2 col">

          <!-- TEXT -->
          <div class="slice-text">

            <!-- Job openings -->
<!--              <div class="text text-general">
              <div class="job">
                 <div class="header">BITRÄDANDE JURIST SÖKES</div>
                  <div class="text">Vi söker nu ytterligare en biträdande jurist till vår verksamhet. Vi söker dig som är nyutexaminerad från juristutbildningen eller har avslutat din tingstjänstgöring. Vi tror att du gillar juridik och att du är en engagerad, analytisk, noggrann och ambitiös person som är bra på att uttrycka dig på svenska och engelska. Du är självständig, framåt och har en positiv och lösningsorienterad attityd.</div>
              </div>
            </div> -->

            <div v-if="slice.items.length > 0" class="text text-general">
              <div v-for="(job, index) in slice.items" :key="job.id" class="job">
                 <prismic-rich-text class="header" v-if="job.header" :field="job.header"/>
               <prismic-rich-text class="text" v-if="job.job_opening" :field="job.job_opening"/>
              </div>
            </div>

            
            <!-- General text  -->
            <div class="text text-general">
              <prismic-rich-text class="header" v-if="slice.primary.header.text" :field="slice.primary.header"/>
              <prismic-rich-text class="text" v-if="slice.primary.text" :field="slice.primary.text"/>
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

      .header {
        font-family: $font-copper;
        text-transform: uppercase;
        font-weight: 200;
        font-size: 15px;
        letter-spacing: .1em;
      }
  	}

    figure {
      @include aspect-ratio-img(1,1);
    }

		.header > * {
      font-weight: 200;
      font-size: 19px;
      font-family: $font-copper;
      line-height: 1.1;
      margin: 18px 0;
      text-transform: uppercase;
    }

    .text {
      font-size: 21px;
      font-family: $font-caslon;
       p {
	      margin: 0;
	      + p {
	        text-indent: 30px;
	      } 
	    }
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
