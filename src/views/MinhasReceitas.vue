<template>
    <section id="minhas-receitas">
        <h1 class="titulo">Suas Receitas</h1>
        <div class="receitas" v-if="minhasReceitas.length > 0">
                <div v-for="(receita, index) in minhasReceitas" :key="receita + index">
                    <router-link :to="{name: 'atualizar-receita', params: {id: receita.id_receita}}">
                        <img :src="receita.imagem" alt="">
                        <p>{{receita.nome_receita}}</p>
                    </router-link>
                </div>
        </div>
        <p class="nada-encontrado" v-else>Nenhum receita encontrada! :(</p>
        <router-link v-if="this.$store.state.dadosUsuario.email" to="/cadastrar-receita" class="btn cadastrar">Cadastrar Receita</router-link>
    </section>
</template>

<script>
import axios from "axios"

export default {
    name: "MinhasReceitas",
    data() {
        return {
            minhasReceitas: ""
        }
    },
    methods: {
        pegarMeusProdutos() {
            if(this.$store.state.dadosUsuario.email) {
                axios({
                    method: 'GET',
                    url: `http://127.0.0.1:8000/receita/?email_criador=${this.$store.state.dadosUsuario.email}`
                })
                .then(res => {
                    this.minhasReceitas = res.data
                })
            }
        }
    },
    created() {
        this.pegarMeusProdutos()
    }
}
</script>

<style scoped>

#minhas-receitas {
    max-width: 980px;
    margin: 0 auto;
}

.receitas p {
    margin-top: 10px;
}

.nada-encontrado {
    text-align: center;
    margin-top: 40px;
}

.cadastrar {
    max-width: 200px;
}

</style>