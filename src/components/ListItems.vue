<template>
    <section id="items">
        <div id="mostrar-items">
            <div>
                <img src="../assets/comida.png" alt="Comida">
                <div>
                    <h2>Nome_da_receita</h2>
                    <p>Descrição da receita irá ficar aqui</p>
                </div>
            </div>
            <div>
                <img src="../assets/comida.png" alt="Comida">
                <h2>Nome_da_receita</h2>
                <p>Descrição da receita irá ficar aqui</p>
            </div>
            <div>
                <img src="../assets/comida.png" alt="Comida">
                <h2>Nome_da_receita</h2>
                <p>Descrição da receita irá ficar aqui</p>
            </div>
            <div>
                <img src="../assets/comida.png" alt="Comida">
                <h2>Nome_da_receita</h2>
                <p>Descrição da receita irá ficar aqui</p>
            </div>
            <div>
                <img src="../assets/comida.png" alt="Comida">
                <h2>Nome_da_receita</h2>
                <p>Descrição da receita irá ficar aqui</p>
            </div>
            <div>
                <img src="../assets/comida.png" alt="Comida">
                <h2>Nome_da_receita</h2>
                <p>Descrição da receita irá ficar aqui</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ListItems"
}
</script>

<style>

#items {
    max-width: 1000px;
    margin: 0 auto 60px auto;
    padding: 0px 10px;
}

#mostrar-items {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 30px;
    margin-top: 60px;
}

#mostrar-items div {
    background-color: #F3EDED;
    text-align: center;
    padding-bottom: 20px;
}

#mostrar-items div p{
    color: #878484;
    margin-top: 20px;
}

#mostrar-items div h2{
    color: #000;
    font-weight: bold;
    margin-top: 10px;
}

#mostrar-items img {
    max-width: 100%;
}

</style>