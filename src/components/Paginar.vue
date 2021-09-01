<template>
    <ul v-if="paginasTotal > 1">
        <li v-for="pagina in paginas" :key="pagina">
            <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    
    props: ['quantidadeDeReceita'],

    computed: {
        paginas() {
            const paginaAtual = this.$route.query.page
            const range = 6
            const total = this.paginasTotal
            const pagesArray = []

            for(let i = 1; i - 1 < total; i++) {
                pagesArray.push(i)
            }

            pagesArray.splice(0, paginaAtual - 3)
            pagesArray.splice(range, total)

            return pagesArray
        },

        paginasTotal() {
            const total = this.quantidadeDeReceita / this.$store.state.receitasPorPagina
            return (total !== Infinity) ? Math.ceil(total) : 0
        }

    },

    methods: {
        query(pagina) {
            return {
                ...this.$route.query,
                page: pagina
            }
        }
    }
}
</script>

<style scoped>

ul {
    text-align: center;
}

li {
    display: inline-block;
}

li a {
    padding: 2px 8px;
    border-radius: 2px;
    margin: 4px;
}

li a.router-link-exact-active {
    background-color: #759F41;
    color: #fff;
}

li a:hover {
    background-color: #759F41;
    color: #fff;
}

</style>