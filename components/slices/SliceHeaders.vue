<template>
  <section class="slice-headers">
    <div class="site-content-width">
      <prismic-rich-text class="header" :field="slice.primary.header"/>
    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-headers',
}
</script>

