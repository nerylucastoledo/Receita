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
    },
    INSERIRDADOS(state, payload) {
      state.dadosUsuario.email = payload.email
      state.dadosUsuario.nome = payload.nome
    }
  },
  actions: {
    logarUsuario(context) {
      context.commit("LOGARDESLOGARUSUARIO", true)
    },
    deslogarUsuario(context) {
      context.commit("LOGARDESLOGARUSUARIO", false)
    },
    informarUsuario(context, payload) {
      context.commit("INSERIRDADOS", payload)
    }
  },
  modules: {
  }
})
