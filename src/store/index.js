import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

import { layout } from './layout-model'

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      layout
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
