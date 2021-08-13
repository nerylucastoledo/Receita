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

            <label for="fotos">Fotos</label>
            <input type="file" name="fotos" id="fotos" multiple ref="fotos" />

            <input class="btn cadastrar" type="submit" value="Adicionar Receita" @click.prevent="cadastrarReceita" />
        </form>
    </section>    
</template>

<script>

export default {
    data() {
        return {
            produto: {
                nome_receita: "",
                serve: "",
                ingredientes: "",
                descricao: "",
                modo_preparo: "",
                fotos: null
            },
        }
    },
    methods: {
        cadastrarReceita() {
            const form = new FormData();
            //const file = this.$refs.fotos.files

            form.append("nome_receita", this.produto.nome_receita)
            form.append("serve", this.produto.serve)
            form.append("ingredientes", this.produto.ingredientes)
            form.append("descricao", this.produto.descricao)
            form.append("modo_preparo", this.produto.modo_preparo)
            form.append("nome_criador", this.$store.state.dadosUsuario.nome)
            form.append("email_criador", this.$store.state.dadosUsuario.email)
            form.append("imagem", null)

            console.log(...form)

            fetch("http://127.0.0.1:8000/receita/", {
                method: "POST",
                body: form
            })
            .then(res => {
                console.log(res)
            })
            .catch(erro => console.log(erro))
        }
    }
}
</script>

<style scoped>

.cadastrar-receita {
    max-width: 1000px;
    margin: 60px auto 0px;
}

.cadastrar-receita form {
    max-width: 400px;
    margin: 0 auto;
}

.cadastrar {
    margin-bottom: 0px;
}

</style>