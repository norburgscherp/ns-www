
<template>

  <div class="prismic-all-dynamic-routes" >

    <ul>
      <li v-for="(link, index) in all" :key="'link-' + index" >

        <template v-if="link.type === 'page' ">
          <nuxt-link :to="link.type+'/'+link.uid">{{link.type}}/{{link.uid}}</nuxt-link>
        </template>
        <template v-if="link.type === 'people' && link.uid === false ">
          <nuxt-link :to="link.type+'/'+link.uid">{{link.type}}/{{link.uid}}</nuxt-link>
        </template>
        
      </li>
    </ul>

  </div>

</template>

<script>

export default {
  name: 'prsimic-all-dynamic-routes',
  layout: 'dynamic-routes',

  async asyncData({ params, $prismic, error}) {
   
    const prismicAll = await $prismic.api.query('', { pageSize : 100 })

    if (prismicAll) {
      return { all: prismicAll.results }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
   
  }

}
</script>





