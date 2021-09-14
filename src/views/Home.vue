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

  created() {
    document.title = 'Receitas'
  }
}
</script>

<style>

</style>
