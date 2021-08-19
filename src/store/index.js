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
    LOGARDESLOGARUSUARIO(state, payload) {
      state.usuarioLogado = payload
      console.log(payload)
    }
  },
  actions: {
    logarUsuario(context) {
      context.commit("LOGARDESLOGARUSUARIO", true)
    },
    deslogarUsuario(context) {
      context.commit("LOGARDESLOGARUSUARIO", false)
    }
  },
  modules: {
  }
})
