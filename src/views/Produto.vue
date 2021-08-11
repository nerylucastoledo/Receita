<template>
    <section class="produto">
        <h1 class="titulo">{{produto[0].nome_receita}}</h1>
        <div>
            <img :src="produto[0].imagem" alt="">
        </div>
        <h2 class="titulo">Como fazer?</h2>
        <div class="produto-info">
            <div>
                <h3>Ingredientes</h3>
                <p>{{produto[0].ingredientes}}</p>
            </div>
            <div>
                <h3>Serve</h3>
                <p>{{produto[0].serve}} pessoas</p>
            </div>
            <div>
                <h3>Criador</h3>
                <p>{{produto[0].nome_criador}}</p>
            </div>
        </div>
        <div>
            <h3>Modo de preparo</h3>
            <p>{{produto[0].modo_preparo}}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "Produto",
    props: ["id"],
    data() {
        return {
            produto: null,
        }
    },
    methods: {
        pegarProduto() {
            fetch(`http://127.0.0.1:8000/receita/?id=${this.id}`)
            .then(response => response.json())
            .then(result => {
                this.produto = result
            })
        }
    },
    created() {
        this.pegarProduto()
    }
}
</script>

<style scoped>

.titulo {
    margin: 60px 0px 40px 0px;
}

h3 {
    text-align: center;
}

.produto img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
}

.produto {
    max-width: 1000px;
    margin: 0 auto;
}

.produto-info {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.produto-info div, .produto > div:last-child {
    background-color: #F3EDED;
    text-align: center;
    padding: 15px;
    box-shadow: 0 4px 8px rgb(30 60 90 / 10%);
    border-radius: 4px;
    margin: 20px;
}

.produto-info div {
    width: 100%;
}

.produto > div:last-child {
    max-width: 100%;
}

.produto {
    margin-bottom: 60px;
}

</style>