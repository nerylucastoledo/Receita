<template>
  <section class="container">

    <h1 class="titulo">Suas Receitas</h1>

    <div class="receitas" v-if="minhasReceitas.length > 0">

      <div v-for="(receita, index) in minhasReceitas" :key="receita + index">
        <router-link :to="{name: 'atualizar-receita', params: { id: receita.id_receita }}">
          <img :src="receita.imagem" alt="" />
          <p>{{ receita.nome_receita }}</p>
        </router-link>
      </div>
      
    </div>

    <p class="nada-encontrado" v-else>Nenhum receita encontrada! :(</p>

    <Paginar :quantidadeDeReceita="quantidadeDeReceita"></Paginar>
    
    <router-link v-if="this.$store.state.dadosUsuario.email" to="/cadastrar-receita" class="btn cadastrar">Cadastrar Receita</router-link>
  
  </section>
</template>

<script>
import { api } from "../service.js";
import {serialize} from "../helpers.js"

import Paginar from "../components/Paginar.vue"

export default {
  name: "MinhasReceitas",

  components: {
    Paginar
  },

  data() {
    return {
      minhasReceitas: "",
      quantidadeDeReceita: 1,
    };
  },

  methods: {
    pegarMinhasReceitas() {
      if (this.$store.state.dadosUsuario.email) {
        api.get(this.url)
          .then((res) => {
            this.quantidadeDeReceita = res.data.count
            this.minhasReceitas = res.data.results;
          });
      }
    },
  },

  computed: {
    url() {
      const query = serialize(this.$route.query)
      const formatQuery = query.replace('?', '&')

      if(this.$route.query.page > 0) {
        return `receita/?email_criador=${this.$store.state.dadosUsuario.email}&page=${formatQuery}`
      } else {
        return `receita/?email_criador=${this.$store.state.dadosUsuario.email}`
      }
    }
  },

    watch: {
      url() {
        this.pegarMinhasReceitas()
      }
    },

  created() {
    this.pegarMinhasReceitas();
  },
};
</script>

<style scoped>

.receitas p {
  margin-top: 0px;
}

.nada-encontrado {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.cadastrar {
  max-width: 200px;
}
</style>