<template>
  <section class="slice-services slice-layout-two-col">
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
          <prismic-rich-text class="text" :field="slice.primary.text"/>
        </div>
      </div>
    </div>
    <section class="slice-headers">
      <div class="site-content-width">
        <prismic-rich-text class="header" :field="slice.primary.service_title"/>
      </div>
    </section>
    <div class="slice-body row">
      <!-- COL-1 -->
      <div class="col-1 col">
        <!-- IMAGE -->
        <figure class="slice-image">
          <prismic-image :field="slice.primary.service_image"/>
        </figure>
      </div>
      <!-- COL-2 -->
      <div class="col-2 col">
        <!-- TEXT -->
        <div id="pa" class="slice-text">
          <PractiseMenu />
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import PractiseMenu  from '~/components/part/PractiseMenu.vue'

export default {
  props: ['slice'],
  name: 'slice-services',
  components: {
    PractiseMenu
  },
}
</script>

<style lang="scss">

.slice-services{

}

</style>
