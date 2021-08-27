 
<template>
  <div class="produtosbuscar">
    <form>
      <input type="text" name="busca" id="busca" v-model="busca" @keyup="buscarProdutos" placeholder="Buscar..."/>
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
    max-width: 400px;
    margin: 30px auto 60px auto;
    position: relative;
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

  #lupa {
    width: 62px;
    height: 62px;
    background: url("../assets/pesquisar.png") no-repeat center center;
    text-indent: -150px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
    box-shadow: none;
  }
</style>