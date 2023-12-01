
//
// VUEX - STORE
//


// STATE

export const state = () => ({
  menu: false,
  menu_en: {},
  menu_sv: {},
  menu2_en: {},
  menu2_sv: {},
  menuheader_en: {},
  menuheader_sv: {},
  menuheaderpopout_en: {},
  menuheaderpopout_sv: {},
  menupractise_en: {},
  menupractise_sv: {},
  footer_en: {},
  footer_sv: {},
})


// MUTATIONS

export const mutations = {
  SET_MENU_EN(state, menu) {
    state.menu_en = menu
  },
  SET_MENU_SV(state, menu) {
    state.menu_sv = menu
  },
  SET_MENU2_EN(state, menu2) {
    state.menu2_en = menu2
  },
  SET_MENU2_SV(state, menu2) {
    state.menu2_sv = menu2
  },
  SET_MENUHEADER_EN(state, menuheader) {
    state.menuheader_en = menuheader
  },
  SET_MENUHEADER_SV(state, menuheader) {
    state.menuheader_sv = menuheader
  },
  SET_MENUHEADERPOPOUT_EN(state, menuheaderpopout) {
    state.menuheaderpopout_en = menuheaderpopout
  },
  SET_MENUHEADERPOPOUT_SV(state, menuheaderpopout) {
    state.menuheaderpopout_sv = menuheaderpopout
  },
  SET_MENUPRACTISE_EN(state, menupractise) {
    state.menupractise_en = menupractise
  },
  SET_MENUPRACTISE_SV(state, menupractise) {
    state.menupractise_sv = menupractise
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


// ACTIONS

export const actions = {
  async fetchContent({ commit }, $prismic) {

    try {
      
      let menu_en,menu_sv,menu2_en,menu2_sv,menuheader_en,menuheader_sv,menuheaderpopout_en,menuheaderpopout_sv,menupractise_en,menupractise_sv,footer_sv,footer_en
      
      menu_sv = (await $prismic.api.getSingle('menu', { lang : 'sv-se' })).data.body
      menu_en = (await $prismic.api.getSingle('menu', { lang : 'en-gb' })).data.body

      menu2_sv = (await $prismic.api.getSingle('menu2', { lang : 'sv-se' })).data.body
      menu2_en = (await $prismic.api.getSingle('menu2', { lang : 'en-gb' })).data.body

      menuheader_sv = (await $prismic.api.getSingle('menuheader', { lang : 'sv-se' })).data.body
      menuheader_en = (await $prismic.api.getSingle('menuheader', { lang : 'en-gb' })).data.body

      menuheaderpopout_sv = (await $prismic.api.getSingle('menuheaderpopout', { lang : 'sv-se' })).data.body
      menuheaderpopout_en = (await $prismic.api.getSingle('menuheaderpopout', { lang : 'en-gb' })).data.body

      menupractise_sv = (await $prismic.api.getSingle('menupractise', { lang : 'sv-se' })).data.body
      menupractise_en = (await $prismic.api.getSingle('menupractise', { lang : 'en-gb' })).data.body

      footer_sv = (await $prismic.api.getSingle('footer', { lang : 'sv-se' })).data
      footer_en = (await $prismic.api.getSingle('footer', { lang : 'en-gb' })).data
      
      commit('SET_MENU_EN', menu_en)
      commit('SET_MENU_SV', menu_sv)

      commit('SET_MENU2_EN', menu2_en)
      commit('SET_MENU2_SV', menu2_sv)

      commit('SET_MENUHEADER_EN', menuheader_en)
      commit('SET_MENUHEADER_SV', menuheader_sv)

      commit('SET_MENUHEADERPOPOUT_EN', menuheaderpopout_en)
      commit('SET_MENUHEADERPOPOUT_SV', menuheaderpopout_sv)

      commit('SET_MENUPRACTISE_EN', menupractise_en)
      commit('SET_MENUPRACTISE_SV', menupractise_sv)

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


// GETTERS

export const getters = {
  GET_MENU_EN(state) {
    return state.menu_en
  },
  GET_MENU_SV(state) {
    return state.menu_sv
  },
  GET_MENU2_EN(state) {
    return state.menu2_en
  },
  GET_MENU2_SV(state) {
    return state.menu2_sv
  },
  GET_MENUHEADER_EN(state) {
    return state.menuheader_en
  },
  GET_MENUHEADER_SV(state) {
    return state.menuheader_sv
  },
  GET_MENUHEADERPOPOUT_EN(state) {
    return state.menuheaderpopout_en
  },
  GET_MENUHEADERPOPOUT_SV(state) {
    return state.menuheaderpopout_sv
  },
  GET_MENUPRACTISE_EN(state) {
    return state.menupractise_en
  },
  GET_MENUPRACTISE_SV(state) {
    return state.menupractise_sv
  },
  GET_MENU(state) {
    return state.menu
  }
}
