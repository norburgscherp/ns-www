<template>
	<div class="practise-menu">
		<ul>
			<!-- *** *** EN *** *** -->
  		<template v-if="$i18n.locale === 'en'">
  		  <li v-for="(item,index) in menuEn" :key="item+index"> 
  		    <template v-if="item.primary.link.link_type !== 'Any' ">
						<nuxt-link :to="$prismic.asLink(item.primary.link)">{{item.primary.label[0].text}}</nuxt-link> 
  		    </template>
  		  </li>
  		</template>
  		<!-- *** *** SV *** *** -->
  		<template v-if="$i18n.locale === 'sv'">
  		  <li v-for="(item,index) in menuSv" :key="'sv'+item+index"> 
  		    <template v-if="item.primary.link.link_type !== 'Any' ">
  		    	<nuxt-link :to="$prismic.asLink(item.primary.link)">{{item.primary.label[0].text}}</nuxt-link> 
  		    </template>
  		  </li>
  		</template>
  	</ul>
	</div>	
</template>

<script>

export default {

  name: 'practisemenu',
  data() {
    return {
      menuEn: this.$store.getters.GET_MENUPRACTISE_EN,
      menuSv: this.$store.getters.GET_MENUPRACTISE_SV,
    };
  },
}
</script>

<style lang="scss">

.practise-menu {
	ul {
		margin: 0;
		padding: 0;
		li {
			list-style-type: none;
      margin: 0 0 4px 0;
			padding: 0;
			a {
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
      	padding: 8px 0;
      	color: $black;
      	&:hover {
        	color: $grey;
      	}
			}
		}
	}
}

</style>