<template>
    <section id="items">
        <h1 class="titulo">Suas Receitas</h1>
        <div v-if="receita.length > 0" class="mostrar-items">
            <div v-for="(item, index) in receita" :key="item+index">
                
                <div class="items-receita">
                    <router-link :to="{name: 'produto', params: {id: item.id_receita}}">
                    <img :src="item.imagem" alt="">
                    <h2>{{item.nome_receita}}</h2>
                    <p>Serve: {{item.serve}} </p>
                    <p>Descrição: {{item.descricao}} </p>
                    </router-link>
                </div>

            </div>

        </div>

        <div v-if="!usuarioLogado">
            <p>Faça o login para cadastrar uma receita!</p>
        </div>

        <router-link to="/cadastrar-receita"><button v-if="usuarioLogado" class="btn cadastrar">Cadastrar receita</button></router-link>
    </section>
</template>

<script>
import {mapState} from "vuex"

export default {
    name: "MinhasReceitas",
    data() {
        return {
            receita: ""
        }
    },
    computed: {
        ...mapState(["dadosUsuario", "usuarioLogado"])
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

#items .titulo {
    margin-top: 60px;
}

#items p {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
}


</style>