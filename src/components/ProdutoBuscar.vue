<template>
  <div class="container produtosbuscar">
    <form>
      <input type="text" name="busca" id="busca" v-model="busca" @keyup="buscarProdutos" placeholder="Buscar...">
      <input class="btn" type="submit" value="Enviar" @click.prevent="buscarProdutos">
    </form>
  </div>
</template>

<script>

export default {
  name: 'ProdutosBuscar',
  
  data() {
    return {
      busca: ""
    }
  },

  methods: {
    buscarProdutos() {
      this.$router.push({query: {nome_receita: this.busca}})
    }
  }
}
</script>

<style scoped>
  form {
    max-width: 50%;
    margin: 30px auto 60px auto;
    position: relative;
    display: flex;
  }

  #busca {
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 50px;
  }

  #busca:focus, #busca:hover {
    transform: scale(1.1);
  }

  .btn {
    width: 62px;
    height: 62px;
    background: url('../assets/lupa.svg') no-repeat 50%;
    text-indent: -150px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
  }


</style>
