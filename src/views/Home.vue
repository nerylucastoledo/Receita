<template>
  <section>
    <div class="home">
      <h1 class="titulo">VEJA AS MELHORES RECEITAS AQUI</h1>
    </div>
    <div>
      <ListItems/>
    </div>
  </section>
</template>

<script>
import ListItems from "../components/ListItems.vue"

export default {
  name: 'Home',
  components: {
    ListItems
  }
}
</script>

<style>
.home {
  background: url("../assets/background-principal.jpg") no-repeat center;
  background-size: cover;
  height: 300px;
  filter: brightness(70%);
}

.cadastrar {
  width: 200px;
  display: block;
  margin: 40px auto 60px;
}

.titulo{
  color: #FC834B;
  text-align: center;
}

.home .titulo {
  padding-top: 150px;
}
</style>
