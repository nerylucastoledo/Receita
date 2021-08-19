Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@nerylucastoledo 
nerylucastoledo
/
Ranek
1
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Ranek/src/components/ProdutosBuscar.vue
@nerylucastoledo
nerylucastoledo estilo dos inputs e produto
Latest commit dbe999a on Jul 13
 History
 1 contributor
58 lines (50 sloc)  986 Bytes
  
<template>
  <div class="produtosbuscar">
    <form>
      <input type="text" name="busca" id="busca" v-model="busca" placeholder="Buscar..."/>
      <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarProdutos"/>
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
    max-width: 600px;
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