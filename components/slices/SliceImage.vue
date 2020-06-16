<template>
  <section class="slice-image">
    <figure class="image">
      <picture>
        <source media="(min-width: 769px)" :srcset="slice.primary.image.url">
        <source media="(min-width: 479px)" :srcset="slice.primary.image.tablet.url">
        <img :src="slice.primary.image.mobile.url" :alt="slice.primary.image.alt">
      </picture>
    </figure>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-image',
}
</script>

<style lang="scss">
  .slice-image {
    .image {
      margin: 0 0 30px;
    }
  }
</style>

<!-- Prismic cusyom type - JSON -->

<!-- 

   "image" : {
            "type" : "Slice",
            "fieldset" : "Image",
            "description" : "Full width image (Can be a schema) ",
            "icon" : "image",
            "display" : "list",
            "non-repeat" : {
              "image" : {
                "type" : "Image",
                "config" : {
                  "constraint" : {
                    "width" : 1080
                  },
                  "thumbnails" : [ {
                    "name" : "tablet",
                    "width" : 740,
                    "height" : null
                  }, {
                    "name" : "mobile",
                    "width" : 452,
                    "height" : null
                  } ],
                  "label" : "Image"
                }
              }
            },
            "repeat" : { }
          },
--> 

