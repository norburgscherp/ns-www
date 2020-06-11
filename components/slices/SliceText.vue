<template>
  <section class="slice-text site-width">

        <div class="text site-content-width">
          
          <prismic-rich-text :field="slice.primary.text"/>
          
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-text',
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

  .slice-text {
    p {
      margin: 0;
      + p {
        text-indent: 30px;
      } 
    }
  }

</style>
