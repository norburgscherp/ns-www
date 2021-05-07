<template>
  <section class="site-page-error site-content-width">
      
      <section class="slice-headers"><div class="header"><h1>Page not found</h1></div></section>

      <p>Sorry we were unable to find the page you are looking for.</p>
      <p><nuxt-link :to="localePath('/')" style="text-decoration: underline;">Back to home</nuxt-link></p>

  </section>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style lang="scss">

.site-page-error {
	text-align: center;
}
  
</style>

