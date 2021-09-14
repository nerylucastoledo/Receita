<template>
    <section class="container" id="pagina-inicial">

        <div class="categoria">
            <h1 class="titulo">Navegue pelas categorias</h1>
            <Categorias/>
        </div>

        <div>
            <h1 class="titulo">Todas as receitas</h1>
            <ProdutoBuscar/>
        </div>
        
        <div v-if="!carregou">
            <PageLoading/>
        </div>

        <div v-else>

            <div v-if="filtroPorCategoria || filtroPorPesquisa" class="sobremesa-selecionada">

                <div>
                    <span v-if="filtroPorCategoria">{{filtroPorCategoria}}</span>
                    <span v-else>{{filtroPorPesquisa}}</span>
                    
                    <button @click="tirarFiltroDasReceita" class="fechar-sobremesa">X</button>
                </div>

            </div>

            <div class="receitas" v-if="receitas.length > 0">

                <div v-for="(receita, index) in receitas" :key="receita + index">

                    <router-link :to="{name: 'produto', params: {id: receita.id_receita}}">

                        <div>
                            <img :src="receita.imagem" alt="">
                        </div>

                        <div>
                            <span>{{receita.categoria}}</span>
                            <p>{{receita.nome_receita}}</p>
                        </div>

                    </router-link>

                </div>

            </div>

            <div v-else>
                <p class="nenhuma-encontrada">Nenhum receita encontrada! :(</p>
            </div>
            
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
            carregou: null,
            quantidadeDeReceita: 1,
        }
    },

    methods: {
        
        buscarReceitas() {
            api.get(this.url)
            .then(res => {
                this.quantidadeDeReceita = res.data.count
                this.receitas = res.data.results.reverse()
                setTimeout(() => {
                    this.carregou = true
                }, 500);
            })
        },

        tirarFiltroDasReceita() {
            this.$router.push({query: {}})
        }
    },

    computed: {
        url() {
            const query = serialize(this.$route.query)
            return `https://rest-api-receita.herokuapp.com/receita/${query}`
        },

        filtroPorCategoria() {
            return this.$route.query.categoria
        },

        filtroPorPesquisa() {
            return this.$route.query.nome_receita
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

.nenhuma-encontrada {
    text-align: center;
    clear: both;
}

.sobremesa-selecionada {
    position: relative;
    color: #fff;
    float: right;
    top: -40px;
    margin-right: 30px;
}

.sobremesa-selecionada span {
    background-color: #ffa982;
    padding: 6px;
    border-radius: 10px;
}

.fechar-sobremesa {
    position: absolute;
    top: -14px;
    right: -6px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    font-size: 12px;
    background-color: rgb(243, 223, 223);
}

</style>