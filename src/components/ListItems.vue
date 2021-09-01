<template>
    <section class="container" id="pagina-inicial">

        <div class="categoria">

            <h1 class="titulo">Navegue pelas categorias</h1>

            <div>

                <div class="categoria-items" @click="filtroCategoria('Pao')">
                    <img src="../assets/paes.png" alt="">
                    <p>Pães</p>
                </div>

                <div class="categoria-items" @click="filtroCategoria('Sobremesa')">
                    <img src="../assets/sobremesa.png" alt="">
                    <p>Sobremesa</p>
                </div>
            
                <div class="categoria-items" @click="filtroCategoria('Salgados')">
                    <img src="../assets/salgados.png" alt="">
                    <p>Salgados</p>
                </div>
            
                <div class="categoria-items" @click="filtroCategoria('Sopas')">
                    <img src="../assets/sopas.png" alt="">
                    <p>Sopas</p>
                </div>

                <div class="categoria-items" @click="filtroCategoria('Comida')">
                    <img src="../assets/comida.png" alt="">
                    <p>Comida</p>
                </div>
            
                <div class="categoria-items" @click="filtroCategoria('Massas')">
                    <img src="../assets/massa.png" alt="">
                    <p>Massas</p>
                </div>

                <div class="categoria-items" @click="filtroCategoria('Aves')">
                    <img src="../assets/aves.png" alt="">
                    <p>Aves</p>
                </div>
                
            </div>
            
        </div>

        <div>
            <h1 class="titulo">Todas as receitas</h1>
            <ProdutoBuscar/>
        </div>
        
        <div v-if="carregou == 0">
            <p>Carregando...</p>
        </div>
        <div v-else>

            <div class="receitas" v-if="receitas.length > 0">
                <div v-for="(receita, index) in receitas" :key="receita + index">
                    <router-link :to="{name: 'produto', params: {id: receita.id_receita}}">
                        <img :src="receita.imagem" alt="">
                        <span>{{receita.categoria}}</span>
                        <p>{{receita.nome_receita}}</p>
                    </router-link>
                </div>
            </div>

            <p class="nenhum-encontrada" v-else>Nenhum receita encontrada! :(</p>
            
        </div>

        <Paginar :quantidadeDeReceita="quantidadeDeReceita"></Paginar>

    </section>
</template>

<script>
import { api } from '../service.js'
import {serialize} from "../helpers.js"

import ProdutoBuscar from "../components/ProdutoBuscar.vue"
import Paginar from "../components/Paginar.vue"

export default {
    name: "ListItems",
    
    components: {
        ProdutoBuscar,
        Paginar
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
                this.receitas = res.data.results
                this.carregou = 1
            })
        },

        filtroCategoria(recebido) {
            this.$router.push({query: {categoria: recebido}})
            api.get(this.url)
            .then(res => {
                this.receitas = res.data
            })
        }
    },

    computed: {
        url() {
            const query = serialize(this.$route.query)
            return `http://127.0.0.1:8000/receita/${query}`
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

.categoria > div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.categoria-items {
    width: 95px;
    height: 95px;
    background-color: #ffc800;
    border-radius: 50%;
    padding: 20px 0px;
}

.categoria-items img {
    width: 40px;
    display: block;
    margin: 0 auto;
}

.categoria-items p {
    text-align: center;
    font-size: 14px;
}

.categoria-items:hover {
    transform: scale(1.2);
    cursor: pointer;
}

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