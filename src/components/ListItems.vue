<template>
    <section id="pagina-inicial">
        <h1 class="titulo">Navegue pelas categorias</h1>
        <div class="categoria">
            <div class="categoria-items">
                <img src="../assets/paes.png" alt="">
                <p>Pães</p>
            </div>

            <div class="categoria-items">
                <img src="../assets/sobremesa.png" alt="">
                <p>Sobremesa</p>
            </div>
        
            <div class="categoria-items">
                <img src="../assets/salgados.png" alt="">
                <p>Salgados</p>
            </div>
        
            <div class="categoria-items">
                <img src="../assets/sopas.png" alt="">
                <p>Sopas</p>
            </div>

            <div class="categoria-items">
                <img src="../assets/comida.png" alt="">
                <p>Comida</p>
            </div>
        
            <div class="categoria-items">
                <img src="../assets/massa.png" alt="">
                <p>Massas</p>
            </div>

            <div class="categoria-items">
                <img src="../assets/aves.png" alt="">
                <p>Aves</p>
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
            <p v-else>Nenhum receita encontrada!</p>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import ProdutoBuscar from "../components/ProdutoBuscar.vue"
import {serialize} from "../helpers.js"

export default {
    name: "ListItems",
    components: {
        ProdutoBuscar
    },
    data() {
        return {
            receitas: null,
            carregou: 0 
        }
    },
    methods: {
        async buscarReceitas() {
            axios({
                method: 'GET',
                url: this.url
            })
            .then(res => {
                this.receitas = res.data
                this.carregou = 1
            })
        },
        ola() {
            console.log("opa")
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

#pagina-inicial {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

.categoria {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.categoria-items {
    width: 100px;
    height: 100px;
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

</style>