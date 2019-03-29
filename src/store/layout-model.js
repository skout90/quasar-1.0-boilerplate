const layoutState = {
  isDrawerOpen: false
}

const layoutGetters = {
  getIsDrawerOpen: state => state.isDrawerOpen
}

const layoutMutations = {
  SET_IS_DRAWER_OPEN: (state, payload) => state.isDrawerOpen = payload
}

export const layout = {
  state: layoutState,
  getters: layoutGetters,
  mutations: layoutMutations,
  actions: {},
  namespaced: true
}
