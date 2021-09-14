<template>
    <section class="categoria">

        <div class="categoria-items" @click="filtroCategoria('Pao')">
            <picture>
                <img src="../assets/paes.png" alt="">
            </picture>
            <p>Pães</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Sobremesa')">
            <picture>
                <img src="../assets/sobremesa.png" alt="">
            </picture>
            <p>Sobremesa</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Salgados')">
            <picture>
                <img src="../assets/salgados.png" alt="">
            </picture>
            <p>Salgados</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Sopas')">
            <picture>
                <img src="../assets/sopas.png" alt="">
            </picture>
            <p>Sopas</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Comida')">
            <picture>
                <img src="../assets/comida.png" alt="">
            </picture>
            <p>Comida</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Massas')">
            <picture>
                <img src="../assets/massa.png" alt="">
            </picture>
            <p>Massas</p>
        </div>

        <div class="categoria-items" @click="filtroCategoria('Aves')">
            <picture>
                <img src="../assets/aves.png" alt="">
            </picture>
            <p>Aves</p>
        </div>

    </section>
</template>

<script>

import { api } from '../service.js'

export default {
    methods: {
        filtroCategoria(recebido) {
            this.$router.push({query: {categoria: recebido}})
            
            api.get(this.url)
            .then(res => {
                setTimeout(() => {
                    this.receitas = res.data
                }, 1000)
            })
        }
    }
}
</script>

<style scoped>

.categoria {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.categoria-items {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    padding: 20px 0px;
    background-color: #ffa982;
    border: 1px solid rgb(151, 151, 151);
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

.categoria-items:hover {
    transform: scale(1.2);
    transition: all 0.5s ease;
    cursor: pointer;
}

@media (max-width: 759px) {
  .categoria-items {
    width: 60px;
    height: 60px;
    padding: 15px 0px;
  }

  .categoria-items img {
    width: 30px;
  }

  .categoria-items p {
    margin-top: 15px;
    font-size: 12px;
  }
}
</style>