<template>
    <section id="items">
        <div class="mostrar-items">

            <div v-for="(receita, index) in receitas" :key="receita+index">
                <div>
                    <router-link :to="{name: 'produto', params: {id: receita.id_receita}}">

                        <img :src="receita.imagem" alt="Comida">

                        <div>
                            <h2>{{receita.nome_receita}}</h2>
                            <p>{{receita.descricao}}</p>
                        </div>

                        <button class="btn">Confira</button>

                    </router-link>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: "ListItems",
    data() {
        return {
            receitas: null
        }
    },
    methods: {
        getAllProdutos() {
            fetch("http://127.0.0.1:8000/receita/")
            .then(response => response.json())
            .then(result => {
                this.receitas = result
            })
        }
    },
    created() {
        this.getAllProdutos()
    }
}
</script>

<style>

#items {
    max-width: 1000px;
    margin: 0 auto 60px auto;
    padding: 0px 15px;
}

.mostrar-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 60px;
    text-align: center;
}

.mostrar-items div {
    background-color: #F3EDED;
    padding: 0px 0px 15px;
}

.mostrar-items div p{
    color: #878484;
    margin-top: 20px;
}

.mostrar-items div h2{
    color: #000;
    font-weight: bold;
    margin-top: 10px;
}

.mostrar-items img {
    width: 300px;
    height: 200px;
    padding: 15px;
}

</style>