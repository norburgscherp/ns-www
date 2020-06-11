<template>
 
<div class="slice-persons" v-match-heights="{el: ['.person'] }">

	<div v-for="(person, index) in slice.items" :key="person.id" class="person" v-match-heights="{el: ['figure'] }">
		
		<!-- IMAGE -->
		<figure v-if="person.image.url">
			<prismic-image  :field="person.image"/>
		</figure>
		<figure v-else>
			({{ $t('ns.no_image') }})
		</figure>

		<!-- HEADER -->
  	<prismic-rich-text v-if="person.header[0].text !== '' "  class="name" :field="person.header"/>
    <div v-else class="name">
    	<div>
    			({{ $t('ns.no_name') }})
    	</div>
  	</div>

  	<!-- TITLE -->
  	<prismic-rich-text v-if="person.text[0].text !== '' "  class="designation" :field="person.text"/>
    <div v-else class="designation">
    	<div>
    			({{ $t('ns.no_title') }})
    	</div>
  	</div>



		<div class="link" >
			<prismic-link v-if="person.link.id" :field="person.link">{{ $t('ns.more_info') }}</prismic-link>
		</div>

	</div>

</div>

</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-persons'
}
</script>

<style lang="scss">



</style>
