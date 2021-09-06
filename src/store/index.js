import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    receitasPorPagina: 9,
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

    logarUsuario(context, payload) {
      context.commit("LOGARDESLOGARUSUARIO", true)
      localStorage.setItem("email", payload.email)
      localStorage.setItem("senha", payload.senha)
    },

    deslogarUsuario(context) {
      context.commit("LOGARDESLOGARUSUARIO", false)
    },

    informarUsuario(context, payload) {
      context.commit("INSERIRDADOS", payload)
    },

    pegarUsuario(context, payload) {
      fetch(`https://rest-api-receita.herokuapp.com/usuario/?email=${payload}`)
      .then(req => req.json())
      .then(res => {
        context.commit('INSERIRDADOS', res[0])
        context.commit('LOGARDESLOGARUSUARIO', true)
      })
    }
    
  },
  modules: {
  }
})
