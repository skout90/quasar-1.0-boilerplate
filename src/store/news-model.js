import { axios } from 'boot/axios'
import { stateHelper, mutationHelper, getterHelper } from './helper/model-helper'

const state = {
  ...stateHelper,
  news: [],
}

const getters = {
  ...getterHelper,
  getNews: state => state.news,
}

const mutations = {
  ...mutationHelper,
  SET_NEWS: (state, payload) => state.news = payload
}

const actions = {
  selectNews: async ({ commit }) => {
    commit('SET_IS_LOADING', true)
    const res = await axios.get('/news/1.json')

    if (res.status < 400) {
      commit('SET_NEWS', res.data)
      commit('SET_RES_SUCCESS', res)
    } else {
      commit('SET_RES_FAIL', res)
    }
  },
  // selectNewsItem = async ({commit}, itemId) => {
  //   const res = await axios.get('/')
  //   commit('SET_SHOP_BENEFIT_TYPES', res.data.shopBenefitTypes)
  // }
}

export const news = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
