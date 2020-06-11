import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 600,
    phablet: 768,
    tablet: 1024,
    desktop: 1280,
    monitor: Infinity,
  },
  defaultBreakpoint: 'mobile' // customize this for SSR
})
