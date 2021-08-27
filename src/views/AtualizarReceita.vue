<template>
  <section class="cadastrar-receita">

    <form class="adicionar-produto">
      <label for="nome_receita">Nome da Receita</label>
      <input
        type="text"
        name="nome_receita"
        placeholder="Nome da sua receita"
        id="nome_receita"
        v-model="produto.nome_receita"/>

      <label for="serve">Pessoas</label>
      <input
        type="number"
        name="serve"
        placeholder="Quantidade de pessoas"
        id="serve"
        v-model="produto.serve"
      />

      <label for="tempo">Tempo</label>
      <input
        type="number"
        name="tempo"
        placeholder="Insira o tempo em minutos"
        id="tempo"
        v-model="produto.tempo"
      />

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
      <input
        name="descricao"
        id="descricao"
        placeholder="Insira a descrição"
        v-model="produto.descricao"
      />

      <label for="ingredientes">Ingredientes</label>
      <textarea
        name="ingredientes"
        id="ingredientes"
        placeholder='Separe os ingredientes por ","'
        v-model="produto.ingredientes"
      ></textarea>

      <label for="modo_preparo">Modo de Preparo</label>
      <textarea
        name="modo_preparo"
        id="modo_preparo"
        placeholder='Separe os passos por ";"'
        v-model="produto.modo_preparo"
      ></textarea>

      <label for="imagem">Imagem</label>
      <input type="file" name="imagem" id="imagem" multiple ref="imagem" />

      <input
        class="btn cadastrar"
        type="submit"
        value="Atualizar Receita"
        @click.prevent="atualizarReceita(produto)"
      />
    </form>

    <div v-if="modal">
      <ModalSucesso>
        <p>Receita atualizada com sucesso!</p>
      </ModalSucesso>
    </div>

    <p>Ou</p>

    <button @click="deletarReceita" class="btn deslogar">
      Deletar Receita
    </button>

  </section>
</template>

<script>
import { api } from "../service.js";
import ModalSucesso from "../components/ModalSucesso.vue"

export default {
  props: ["id"],

  components: {
    ModalSucesso
  },

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
        imagem: null,
        id_receita: "",
      },
      modal: false,
    };
  },

  methods: {
    editarReceita() {
      api.get(`receita/${this.id}`).then((res) => {
        this.produto = res.data;
      });
    },

    atualizarReceita() {
      const form = new FormData();
      const file = this.$refs.imagem.files[0];

      form.append("id_receita", this.produto.id_receita);
      form.append("nome_receita", this.produto.nome_receita);
      form.append("serve", this.produto.serve);
      form.append("tempo", this.produto.tempo);
      form.append("dificuldade", this.produto.dificuldade);
      form.append("ingredientes", this.produto.ingredientes);
      form.append("descricao", this.produto.descricao);
      form.append("modo_preparo", this.produto.modo_preparo);
      form.append("nome_criador", this.$store.state.dadosUsuario.nome);
      form.append("email_criador", this.$store.state.dadosUsuario.email);
      form.append("categoria", this.produto.categoria);
      form.append("imagem", file);

      api
        .put(`receita/${this.id}/`, form)
        .then((res) => {
          if (res.status === 200) {
            this.modal = true;
            setTimeout(() => {
              this.modal == false;
              this.$router.push("minhas-receitas");
            }, 1000);
          }
        })
        .catch((error) => {
          if (error) {
            alert(
              "Não foi possível atualizar. Verifique se você adicionou a foto novamente."
            );
          }
        });
    },

    deletarReceita() {
      if (confirm("Deletar " + this.produto.nome_receita + "?")) {
        api.delete(`receita/${this.id}/`);
        this.$router.push("minhas-receitas");
      }
    },
  },

  created() {
    this.editarReceita();
  },
};
</script>

<style scoped>
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