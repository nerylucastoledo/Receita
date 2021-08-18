<template>
    <section class="produto">
        <div v-if="pessoa">
            <div>
                <img class="foto-pessoa" :src="pessoa.foto" alt="">
            </div>
            <div class="info-pessoa">
                <p>Feito por <span>{{pessoa.nome}}</span></p>
                <p>de <span>{{pessoa.cidade}}</span></p>
            </div>
        </div>
        <div class="introducao-produto">
            <img :src="produto[0].imagem" alt="">
            <div>
                <h1>{{produto[0].nome_receita}}</h1>
                <p>{{produto[0].descricao}}</p>
            </div>
        </div>
        <div class="infos-produto">
            <div>
                <h2>Convidados</h2>
                <p>{{produto[0].serve}}</p>
            </div>
            <div>
                <h2>Tempo</h2>
                <p>{{produto[0].tempo}} min</p>
            </div>
            <div>
                <h2>Categoria</h2>
                <p>{{produto[0].categoria}}</p>
            </div>
            <div>
                <h2>Dificuldade</h2>
                <p>{{produto[0].dificuldade}}</p>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: "Produto",
    props: ["id"],
    data() {
        return {
            produto: null,
            pessoa: null
        }
    },
    methods: {
        mostrarProdutoSelecionado() {
            axios({
                method: 'GET',
                url: `http://127.0.0.1:8000/receita/?id=${this.id}`
            })
            .then(res => {
                this.produto = res.data
                this.mostrarPessoaQueCriou(res.data[0].email_criador)
            })
        },
        mostrarPessoaQueCriou(email) {
            axios({
                method: 'GET',
                url: `http://127.0.0.1:8000/usuario/?email=${email}`
            })
            .then(res => {
                this.pessoa = res.data[0]
            })
        }
    },
    created() {
        this.mostrarProdutoSelecionado()
    }
}
</script>

<style scoped>

.produto {
    max-width: 900px;
    margin: 60px auto 0;
    padding: 0 60px;
}

.produto > div {
    display: flex;
    align-items: center;
}

.foto-pessoa {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.info-pessoa {
    margin-left: 10px;
}

.info-pessoa span {
    color: #759F41;
}

.introducao-produto img {
    max-width: 450px;
    max-height: 300px;
}

.introducao-produto p, .introducao-produto h1 {
    margin-left: 20px;
}

.introducao-produto p {
    margin-top: 80px;
}

.infos-produto {
    display: flex;
    margin-top: 40px;
    justify-content: space-around;
    text-align: center;
}

.infos-produto div {
    background-color: #F3F5F6;
    padding: 10px 30px;
}

.infos-produto h2 {
    font-size: 24px;
    color: #759F41;
}

.infos-produto p {
    font-size: 1rem;
    color: #727B7A;
    margin-top: 10px;
}

</style>