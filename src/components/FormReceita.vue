<template>
    <section class="">

        <form class="adicionar-produto">

            <label for="nome_receita">Nome da Receita</label>
            <input type="text" name="nome_receita" placeholder='Nome da sua receita' id="nome_receita" v-model="receita.nome_receita" />

            <label for="serve">Pessoas</label>
            <input type="number" name="serve" placeholder='Quantidade de pessoas' id="serve" v-model="receita.serve" />

            <label for="tempo">Tempo</label>
            <input type="number" name="tempo" placeholder='Insira o tempo em minutos' id="tempo" v-model="receita.tempo" />

            <label for="dificudlade">Dificuldade</label>
            <select name="dificuldade" id="dificuldade" v-model="receita.dificuldade">
                <option value="Fácil">Fácil</option>
                <option value="Médio">Médio</option>
                <option value="Difícil">Difícil</option>
            </select>

            <label for="categoria">Categoria</label>
            <select name="categoria" id="categoria" v-model="receita.categoria">
                <option value="Pao">Pão</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Salgados">Salgados</option>
                <option value="Sopas">Sopas</option>
                <option value="Comida">Comida</option>
                <option value="Massas">Massas</option>
                <option value="Aves">Aves</option>
            </select>

            <label for="descricao">Descrição</label>
            <input name="descricao" id="descricao" placeholder='Insira a descrição' v-model="receita.descricao">

            <label for="ingredientes">Ingredientes</label>
            <textarea name="ingredientes" id="ingredientes" placeholder='Separe os ingredientes por ","' v-model="receita.ingredientes"></textarea>
            
            <label for="modo_preparo">Modo de Preparo</label>
            <textarea name="modo_preparo" id="modo_preparo" placeholder='Separe os passos por ";"' v-model="receita.modo_preparo"></textarea>

            <label for="imagem">Imagem</label>
            <input type="file" name="imagem" id="imagem" multiple ref="imagem" />

            <input class="btn cadastrar" type="submit" value="Adicionar Receita" @click.prevent="cadastrarReceita" />
        
        </form>

    </section>
</template>

<script>
export default {
    data() {
        return {
            receita: {
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
            modal: false,
        }
    },
}
</script>

<style>

.cadastrar-receita {
  padding: 0px 30px;
}

.cadastrar-receita p {
  text-align: center;
}

.cadastrar-receita .btn {
  display: block;
  margin: 20px auto;
  width: 300px;
}

</style>