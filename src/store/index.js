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
    LOGAREDESLOGAR(state, payload) {
      if(payload == false) {
        state.dadosUsuario.nome = ""
        state.dadosUsuario.sobrenome = ""
        state.dadosUsuario.email = ""
        state.dadosUsuario.estado = ""
        state.dadosUsuario.cidade = ""
      }
      state.usuarioLogado = payload
    },
    INSERIROSDADOS(state, payload) {
      state.dadosUsuario.nome = payload.nome
      state.dadosUsuario.sobrenome = payload.sobrenome
      state.dadosUsuario.email = payload.email
      state.dadosUsuario.estado = payload.estado
      state.dadosUsuario.cidade = payload.cidade
      console.log()
    }
  },
  actions: {
    deslogarUsuario(context) {
      context.commit("LOGAREDESLOGAR", false)
    },
    logar(context) {
      context.commit("LOGAREDESLOGAR", true)
    },
    pegarDados(context, payload) {
      fetch(`http://127.0.0.1:8000/usuario/?email=${payload}`)
      .then(response => response.json())
      .then(result => {
        context.commit("INSERIROSDADOS", result[0])
      })
    }
  },
  modules: {
  }
})
