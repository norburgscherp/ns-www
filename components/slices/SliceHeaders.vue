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

<!-- Prismic cusyom type - JSON -->

<!-- 

   "header" : {
            "type" : "Slice",
            "fieldset" : "Header",
            "description" : "Page top and and content headers",
            "icon" : "font_download",
            "display" : "list",
            "non-repeat" : {
              "header" : {
                "type" : "StructuredText",
                "config" : {
                  "single" : "heading1, heading2, heading3",
                  "label" : "Header"
                }
              }
            },
            "repeat" : { }
          },

--> 

