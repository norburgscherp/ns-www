<template>
  <section class="slice-contact site-width">

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
  name: 'slice-contact',

}
</script>

<style lang="scss">

  .slice-contact {
    text-align: center;
    padding: 0;
    max-width: 380px;
    width: 100%;
    margin-top: 45px;

    p {
      margin: 0;
    }
    
    .text {
      font-family: $font-copper;
      font-weight: 200;
      font-size: 14px;
      color: $black;
      text-transform: uppercase;
      border-bottom: 1px solid $black;
      border-top: 1px solid $black;
      padding: 1.3em 0 1.4em;
      line-height: 1.55;
      letter-spacing: .1em;
    }

    @include VP768 {
      margin-top: 90px;
      .text {
        display: inline-block;
      }
    }

  }

</style>
