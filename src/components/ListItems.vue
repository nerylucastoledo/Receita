<template>
    <section class="container" id="pagina-inicial">

        <div>
            <h1 class="titulo">Navegue pelas categorias</h1>
            <Categorias/>
        </div>

        <div>
            <h1 class="titulo">Todas as receitas</h1>
            <ProdutoBuscar/>
        </div>
        
        <div v-if="carregou == 0">
            <PageLoading/>
        </div>

        <div v-else>

            <div class="receitas" v-if="receitas.length > 0">
                <div v-for="(receita, index) in receitas" :key="receita + index">
                    <router-link :to="{name: 'produto', params: {id: receita.id_receita}}">
                        <div>
                            <img :src="receita.imagem" alt="">
                        </div>
                        <span>{{receita.categoria}}</span>
                        <p>{{receita.nome_receita}}</p>
                    </router-link>
                </div>
            </div>

            <p class="nenhum-encontrada" v-else>Nenhum receita encontrada! :(</p>
            
            <div>
                <Paginar :quantidadeDeReceita="quantidadeDeReceita"></Paginar>
            </div>

        </div>

    </section>
</template>

<script>
import { api } from '../service.js'
import {serialize} from "../helpers.js"

import ProdutoBuscar from "../components/ProdutoBuscar.vue"
import Paginar from "../components/Paginar.vue"
import PageLoading from "../components/PageLoading.vue"
import Categorias from "../components/Categorias.vue"

export default {
    name: "ListItems",
    
    components: {
        ProdutoBuscar,
        Paginar,
        PageLoading,
        Categorias
    },

    data() {
        return {
            receitas: null,
            carregou: 0,
            quantidadeDeReceita: 1
        }
    },

    methods: {
        
        async buscarReceitas() {
            api.get(this.url)
            .then(res => {
                this.quantidadeDeReceita = res.data.count
                this.receitas = res.data.results.reverse()
                setTimeout(() => {
                    this.carregou = 1
                }, 500);
            })
        },
    },

    computed: {
        url() {
            const query = serialize(this.$route.query)
            return `https://rest-api-receita.herokuapp.com/receita/${query}`
        }
    },

    watch: {
        url() {
            this.buscarReceitas()
        }
    },

    created() {
        this.buscarReceitas()
    }
}
</script>

<style scoped>

.pesquisar {
    max-width: 300px;
    margin: 0 auto;
}

.pesquisar input {
    border-radius: 40px;
}

.titulo {
    margin-bottom: 40px;
}

.pesquisar img {
    position: relative;
    width: 30px;
    height: 30px;
    left: 250px;
    top: 45px;
}

.nenhum-encontrada {
    text-align: center;
}

@media (max-width: 759px) {
  .categoria-items {
    width: 60px;
    height: 60px;
    padding: 15px 0px;
  }

  .categoria-items img {
    width: 30px;
  }

  .categoria-items p {
    margin-top: 15px;
    font-size: 12px;
  }
}


</style>