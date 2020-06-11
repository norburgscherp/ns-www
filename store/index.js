export const state = () => ({
  menu: false,
  menu_en: {},
  menu_sv: {},
  footer_en: {},
  footer_sv: {},
})

export const mutations = {
  SET_MENU_EN(state, menu) {
    state.menu_en = menu
  },
  SET_MENU_SV(state, menu) {
    state.menu_sv = menu
  },
  SET_FOOTER_EN(state, data) {
    state.footer_en = data
  },
  SET_FOOTER_SV(state, data) {
    state.footer_sv = data
  },
  SET_ERROR(state, error) {
    state.menu_en = error
  },
  SET_MENU(state, res) {
    state.menu = res
  }
}

export const actions = {
  async fetchContent({ commit }, $prismic) {

    try {
      
      let menu_en,menu_sv,footer_sv,footer_en
      
      menu_sv = (await $prismic.api.getSingle('menu', { lang : 'sv-se' })).data.body
      menu_en = (await $prismic.api.getSingle('menu', { lang : 'en-gb' })).data.body

      footer_sv = (await $prismic.api.getSingle('footer', { lang : 'sv-se' })).data
      footer_en = (await $prismic.api.getSingle('footer', { lang : 'en-gb' })).data
      
      commit('SET_MENU_EN', menu_en)
      commit('SET_MENU_SV', menu_sv)

      commit('SET_FOOTER_EN', footer_en)
      commit('SET_FOOTER_SV', footer_sv)

    } catch (e) {
      
      commit('SET_ERROR', e);

    }
  },
  SET_MENU(vuexContext, res) {
    vuexContext.commit('SET_MENU', res)
  }
}

export const getters = {
  
  GET_MENU_EN(state) {
    return state.menu_en
  },
  GET_MENU_SV(state) {
    return state.menu_sv
  },
  GET_MENU(state) {
    return state.menu
  }
}
