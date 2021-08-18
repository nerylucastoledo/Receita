<template>
    <footer>
        <div>
            <div class="receber-novidades">
                <h3>Receba nossas novidades</h3>
                <div class="email">
                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail">
                 <button class="btn">Enviar</button>
                </div>
            </div>
            <div class="redes-sociais">
                <h3>Redes Sociais</h3>
                <div>
                    <img src="../assets/facebook.png" alt="Logo Facebook">
                    <img src="../assets/instagram.png" alt="Logo Instragam">
                    <img src="../assets/twitter.png" alt="Logo Twitter">
                </div>
            </div>
            <div>
                <img src="../assets/logo.png" alt="">
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style>

footer {
    background-color: #F3F5F6;
    padding: 20px 0px 40px;
    margin-top: 60px;
    position: relative;
}

footer h3 {
    color: #759F41;
    text-align: center;
}

footer > div {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

footer img {
    max-width: 250px;
}

.redes-sociais img {
    width: 30px;
    margin: 0px 10px;
}

.receber-novidades input {
    max-width: 250px;
    display: block;
    margin: 0px;
    border-radius: 50px;
}

.receber-novidades input::-webkit-input-placeholder {
    font-size: 16px;
}

.email {
    display: flex;
    align-items: center;
}

.email .btn {
    margin-left: 10px;
}
</style>