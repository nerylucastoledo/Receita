<template>
  <section class="container">

    <h1 class="titulo">Suas Receitas</h1>

    <div v-if="!carregou">
      <PageLoading/>
    </div>

    <div v-else>

      <div class="receitas" v-if="minhasReceitas.length > 0">

        <div v-for="(receita, index) in minhasReceitas" :key="receita + index">

          <router-link :to="{name: 'atualizar-receita', params: { id: receita.id_receita }}">
            <img :src="receita.imagem" alt="" />
            <p>{{ receita.nome_receita }}</p>
          </router-link>

        </div>
        
      </div>

      <div v-else>
        <p class="nada-encontrado" v-if="!this.$store.state.dadosUsuario.email">Faça login para ver suas receitas</p>
        <p class="nada-encontrado" v-else>Nenhum receita encontrada! :(</p>
      </div>

    </div>


    <div>
      <Paginar :quantidadeDeReceita="quantidadeDeReceita"></Paginar>
    </div>
    
    <div>
      <router-link v-if="this.$store.state.dadosUsuario.email" to="/cadastrar-receita" class="btn cadastrar">Cadastrar Receita</router-link>
    </div>
  
  </section>
</template>

<script>
import { api } from "../service.js";
import {serialize} from "../helpers.js"

import Paginar from "../components/Paginar.vue"
import PageLoading from "../components/PageLoading.vue"

export default {
  name: "MinhasReceitas",

  components: {
    Paginar,
    PageLoading
  },

  data() {
    return {
      minhasReceitas: "",
      carregou: false,
      quantidadeDeReceita: 1,
      emailDoUsuario: this.$store.state.dadosUsuario.email
    };
  },

  methods: {
    pegarMinhasReceitas() {
      if (this.emailDoUsuario) {
        api.get(this.url)
          .then((res) => {
            this.quantidadeDeReceita = res.data.count
            this.minhasReceitas = res.data.results;

            setTimeout(() => {
              this.carregou = true
            }, 500);

          });
      } else {
          this.carregou = true
      }
    },
  },

  computed: {
    url() {
      const query = serialize(this.$route.query)
      const formatQuery = query.replace('?', '&')

      if(this.$route.query.page > 0) {
        return `receita/?email_criador=${this.emailDoUsuario}&page=${formatQuery}`
      } else {
        return `receita/?email_criador=${this.emailDoUsuario}`
      }
    }
  },

  created() {
    this.pegarMinhasReceitas();
    document.title = 'Minhas Receita'
  },

};
</script>

<style scoped>

.receitas p {
  margin-top: 5px;
}

.nada-encontrado {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 22px;
}

.cadastrar {
  max-width: 200px;
}
</style>