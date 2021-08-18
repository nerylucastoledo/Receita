import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioLogado: false,
    dadosUsuario: {
      nome: "",
      sobrenome: "",
      email: "",
      estado: "",
      cidade: ""
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
