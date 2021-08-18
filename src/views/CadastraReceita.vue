<template>
    <section class="cadastrar-receita">
        <form class="adicionar-produto">
            <label for="nome_receita">Nome da Receita</label>
            <input type="text" name="nome_receita" id="nome_receita" v-model="produto.nome_receita" />

            <label for="serve">Serve</label>
            <input type="number" name="serve" id="serve" v-model="produto.serve" />

            <label for="ingredientes">Ingredientes</label>
            <input name="ingredientes" id="ingredientes" v-model="produto.ingredientes">

            <label for="descricao">Descrição</label>
            <input name="descricao" id="descricao" v-model="produto.descricao">
            
            <label for="modo_preparo">Modo de Preparo</label>
            <input name="modo_preparo" id="modo_preparo" v-model="produto.modo_preparo">

            <label for="imagem">Imagem</label>
            <input type="file" name="imagem" id="imagem" multiple ref="imagem" />

            <input class="btn cadastrar" type="submit" value="Adicionar Receita" @click.prevent="cadastrarReceita" />
        </form>
    </section>    
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            produto: {
                nome_receita: "",
                serve: "",
                ingredientes: "",
                descricao: "",
                modo_preparo: "",
                imagem: null
            },
        }
    },
    methods: {
        cadastrarReceita() {
            const form = new FormData();
            const file = this.$refs.imagem.files[0]

            form.append("nome_receita", this.produto.nome_receita)
            form.append("serve", this.produto.serve)
            form.append("ingredientes", this.produto.ingredientes)
            form.append("descricao", this.produto.descricao)
            form.append("modo_preparo", this.produto.modo_preparo)
            form.append("nome_criador", this.$store.state.dadosUsuario.nome)
            form.append("email_criador", this.$store.state.dadosUsuario.email)
            form.append("imagem", file)

            axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/receita/',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: form
            })
        }
    }
}
</script>

<style scoped>

</style>