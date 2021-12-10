import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: { dummyMenu: [] },
  mutations: {
    addMenu(state, menu) {
      this.state.dummyMenu.push(menu)
      axios
        .post("http://localhost:3000/menus", menu)
        .then((res) => console.log(res.data))
    },
  },
  actions: {},
  modules: {},
})
