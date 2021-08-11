<template>
    <section class="minhas-receitas">
        <h1 class="titulo">Suas Receitas</h1>
        <div class="sobre-receita">
            <div>
                <img :src="receita[0].imagem" alt="">
                <span>Nome: {{receita[0].nome_receita}}</span>
                <span>Serve: {{receita[0].serve}} </span>
                <p>Descrição: {{receita[0].descricao}} </p>
            </div>
            <div>
                <img :src="receita[0].imagem" alt="">
                <span>Nome: {{receita[0].nome_receita}}</span>
                <span>Serve: {{receita[0].serve}} </span>
                <p>Descrição: {{receita[0].descricao}} </p>
            </div>
            <div>
                <img :src="receita[0].imagem" alt="">
                <span>Nome: {{receita[0].nome_receita}}</span>
                <span>Serve: {{receita[0].serve}} </span>
                <p>Descrição: {{receita[0].descricao}} </p>
            </div>
            <div>
                <img :src="receita[0].imagem" alt="">
                <span>Nome: {{receita[0].nome_receita}}</span>
                <span>Serve: {{receita[0].serve}} </span>
                <p>Descrição: {{receita[0].descricao}} </p>
            </div>
        </div>
        <button class="btn cadastrar">Cadastrar receita</button>
    </section>
</template>

<script>
import {mapState} from "vuex"

export default {
    name: "MinhasReceitas",
    data() {
        return {
            receita: null
        }
    },
    computed: {
        ...mapState(["dadosUsuario"])
    },
    methods: {
        getMinhasReceitas(email) {
            fetch(`http://127.0.0.1:8000/receita/?email_criador=${email}`)
            .then(response => response.json())
            .then(result => {
                this.receita = result
            })
        }
    },
    created() {
        this.getMinhasReceitas(this.dadosUsuario.email)
    }
}
</script>

<style scoped>

.minhas-receitas {
    max-width: 1000px;
    margin: 0 auto;
}

.minhas-receitas .titulo {
    margin: 60px 0px;
}

.sobre-receita {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 30px;
    margin-bottom: 40px;
}

.sobre-receita img {
    max-width: 100%;
}

.sobre-receita span, p{
    display: block;
    margin-top: 20px;
}

.sobre-receita div {
    background-color: #fff;
    text-align: center;
    padding: 15px;
    box-shadow: 0 4px 8px rgb(30 60 90 / 10%);
    border-radius: 4px;
}

</style>