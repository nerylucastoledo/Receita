<template>
  <section>

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
  },
}
</script>

<style>

.btn {
  padding: 10px 30px;
    background: #759F41;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgb(30 60 90 / 20%);
    transition: all .3s;
    border: none;
    font-family: cursive;
    cursor: pointer;
}

.titulo {
  text-align: center;
  font-size: 2rem;
  margin: 60px 0px;
}

</style>
