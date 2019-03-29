import { stateHelper, mutationHelper, getterHelper } from './helper/model-helper'

const state = {
  ...stateHelper,
  isDrawerOpen: false,
}

const getters = {
  ...getterHelper,
  getIsDrawerOpen: state => state.isDrawerOpen
}

const mutations = {
  ...mutationHelper,
  SET_IS_DRAWER_OPEN: (state, payload) => state.isDrawerOpen = payload
}

const actions = {}

export const layout = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
