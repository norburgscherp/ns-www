<template>
  <section class="slice-quotes">
    <div class="slice-body">

      <div v-if="slice.items.length > 0" class="text text-general slice-quotes-container">
        <div v-for="(quotes, index) in slice.items" :key="quotes.id" class="quotes">
          <prismic-rich-text class="quote-text" v-if="quotes.quote_text" :field="quotes.quote_text"/>
          <prismic-rich-text class="quote-note" v-if="quotes.quote_label" :field="quotes.quote_label"/>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

export default {
  props: ['slice'],
  name: 'slice-quotes',
}
</script>

<style lang="scss">

.slice-quotes{
  .slice-quotes-container {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    .quotes {
      margin-bottom: 32px;
      width: 48%;
      text-align: center;
      margin: 45px 0 45px; 
      .quote-text {
        font-size: 32px;
        font-family: $font-caslon-italic;
        font-style: normal;
        letter-spacing: -1px;
        margin-bottom: 0px;

        &:after,
        &:before{
          content: '';
          display: block;
          width: 180px;
          height: 1px;
          background-color: $black; 
          margin: 14px auto;
        }

      }
      .quote-note {
        padding-top: 6px;
        font-size: 11px;
        font-family: $font-copper;
        text-transform: uppercase;
        letter-spacing: .1em;
      }
    }
    @include VP1024 {
      .quotes {
        .quote-text {
          font-size: 40px;
          letter-spacing: 0px;
        }
      }
    }
    @media screen and (max-width: $bp-480)  {
      .quotes {
        width: 100%;
      }
    }
  }
}

</style>