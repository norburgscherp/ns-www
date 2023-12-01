<template>
  <section class="slice-open-positions slice-layout-two-col">
    <div class="slice-body">
      <div v-if="slice.items.length > 0" class="text text-general slice-text row">
        <div v-for="(job, index) in slice.items" :key="job.id" class="job col">
          <prismic-rich-text class="header" v-if="job.job_title" :field="job.job_title"/>
          <prismic-rich-text class="text" v-if="job.job_text" :field="job.job_text"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'slice-open-positions', 
}
</script>

<style lang="scss">

.slice-open-positions{
  .text {
    .job {
      .header {
        h3 {
          font-size: 28px;
        }
      }
    }
  }
}

</style>
