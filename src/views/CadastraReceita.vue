<template>
    <section class="cadastrar-receita">
        <form class="adicionar-produto">
            <label for="nome_receita">Nome da Receita</label>
            <input type="text" name="nome_receita" id="nome_receita" v-model="produto.nome_receita" />

            <label for="serve">Pessoas</label>
            <input type="number" name="serve" id="serve" v-model="produto.serve" />

            <label for="tempo">Tempo</label>
            <input type="number" name="tempo" id="tempo" v-model="produto.tempo" />

            <label for="dificudlade">Dificuldade</label>
            <select name="dificuldade" id="dificuldade" v-model="produto.dificuldade">
                <option value="Fácil">Fácil</option>
                <option value="Médio">Médio</option>
                <option value="Difícil">Difícil</option>
            </select>

            <label for="categoria">Categoria</label>
            <select name="categoria" id="categoria" v-model="produto.categoria">
                <option value="Pao">Pão</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Salgados">Salgados</option>
                <option value="Sopas">Sopas</option>
                <option value="Comida">Comida</option>
                <option value="Massas">Massas</option>
                <option value="Aves">Aves</option>
            </select>

            <label for="descricao">Descrição</label>
            <input name="descricao" id="descricao" v-model="produto.descricao">

            <label for="ingredientes">Ingredientes</label>
            <textarea name="ingredientes" id="ingredientes" v-model="produto.ingredientes"></textarea>
            
            <label for="modo_preparo">Modo de Preparo</label>
            <textarea name="modo_preparo" id="modo_preparo" v-model="produto.modo_preparo"></textarea>

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
                tempo: "",
                dificuldade: "",
                categoria: "",
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
            form.append("tempo", this.produto.tempo)
            form.append("dificuldade", this.produto.dificuldade)
            form.append("ingredientes", this.produto.ingredientes)
            form.append("descricao", this.produto.descricao)
            form.append("modo_preparo", this.produto.modo_preparo)
            form.append("nome_criador", this.$store.state.dadosUsuario.nome)
            form.append("email_criador", this.$store.state.dadosUsuario.email)
            form.append("categoria", this.produto.categoria)
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