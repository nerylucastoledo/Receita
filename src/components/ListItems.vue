<template>
    <section id="pagina-inicial">
        <h1 class="titulo">Navegue pelas categorias</h1>
        <div class="categoria">
            <router-link to="/">
                <div class="categoria-items">
                    <img src="../assets/paes.png" alt="">
                    <p>Pães</p>
                </div>
            </router-link>

            <router-link to="/">
                <div class="categoria-items">
                    <img src="../assets/sobremesa.png" alt="">
                    <p>Sobremesa</p>
                </div>
            </router-link>

            <router-link to="/">
                <div class="categoria-items">
                    <img src="../assets/salgados.png" alt="">
                    <p>Salgados</p>
                </div>
            </router-link>

            <router-link to="/">
            <div class="categoria-items">
                <img src="../assets/sopas.png" alt="">
                <p>Sopas</p>
            </div>
            </router-link>

            <router-link to="/">
                <div class="categoria-items">
                    <img src="../assets/comida.png" alt="">
                    <p>Comida</p>
                </div>
            </router-link>

            <router-link to="/">
                <div class="categoria-items">
                    <img src="../assets/massa.png" alt="">
                    <p>Massas</p>
                </div>
            </router-link>

            <router-link to="/">
                <div class="categoria-items">
                    <img src="../assets/aves.png" alt="">
                    <p>Aves</p>
                </div>
            </router-link>
            
        </div>
        <div>
            <h1 class="titulo">Todas as receitas</h1>
            <div class="pesquisar">
                <img src="../assets/pesquisar.png" alt="">
                <input type="text" id="pesquisar" name="pesquisar" placeholder="Faça uma busca...">
            </div>
        </div>
        <div class="receitas" v-if="receitas">
            <div v-for="(receita, index) in receitas" :key="receita + index">
                <router-link :to="{name: 'produto', params: {id: receita.id_receita}}">
                    <img :src="receita.imagem" alt="">
                    <span>{{receita.categoria}}</span>
                    <p>{{receita.nome_receita}}</p>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: "ListItems",
    data() {
        return {
            receitas: null
        }
    },
    methods: {
        buscarReceitas() {
            axios({
                method: 'GET',
                url: 'http://127.0.0.1:8000/receita/'
            })
            .then(res => {
                this.receitas = res.data
            })
        }
    },
    created() {
        this.buscarReceitas()
    }
}
</script>

<style scoped>

#pagina-inicial {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

.categoria {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.categoria-items {
    width: 100px;
    height: 100px;
    background-color: #ffc800;
    border-radius: 50%;
    padding: 20px 0px;
}

.categoria-items img {
    width: 40px;
    display: block;
    margin: 0 auto;
}

.categoria-items p {
    text-align: center;
    font-size: 14px;
}

.categoria a:hover {
    transform: scale(1.2);
}

.pesquisar {
    max-width: 300px;
    margin: 0 auto;
}

.pesquisar input {
    border-radius: 40px;
}

.titulo {
    margin-bottom: 40px;
}

.pesquisar img {
    position: relative;
    width: 30px;
    height: 30px;
    left: 250px;
    top: 45px;
}

.receitas {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 30px;
    margin: 30px;
}

.receitas div {
    flex: 1;
}

.receitas img{
    max-width: 100%;
    height: 220px;
    display: block;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgb(30 60 90 / 10%);
}

.receitas span {
    position: relative;
    bottom: 28px;
    background-color: #fff;
    padding: 5px;
    display: block;
    text-align: center;
    max-width: 100px;
    margin: 0 auto;
    border-radius: 4px;
    color: #727B7A;
}

.receitas p {
    text-align: center;
    margin-top: -10px;
    color: #000;
}

</style>