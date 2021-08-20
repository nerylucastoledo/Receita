<template>
    <section id="minhas-receitas">
        <div class="receitas" v-if="minhasReceitas.length > 0">
            <div v-for="(receita, index) in minhasReceitas" :key="receita + index">
                <img :src="receita.imagem" alt="">
                <p>{{receita.nome_receita}}</p>
            </div>
        </div>
        <p v-else>Nenhum receita encontrada!</p>
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
            axios({
                method: 'GET',
                url: `http://127.0.0.1:8000/receita/?email_criador=${this.$store.state.dadosUsuario.email}`
            })
            .then(res => {
                console.log(res.data)
                this.minhasReceitas = res.data
            })
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

</style>