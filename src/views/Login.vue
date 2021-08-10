<template>
    <section class="login">
        <h1 class="titulo">Login</h1>
        <form>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" v-model="login.email" placeholder="E-mail">

            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="login.senha" placeholder="Senha">

            <button class="btn cadastrar">Entrar</button>
        </form>
        <LoginCriar/>
    </section>
</template>

<script>
import LoginCriar from "../components/LoginCriar.vue"

export default {
    components: {
        LoginCriar
    },
    data(){
        return{
            login: {
                email: "",
                senha: ""
            }
        }
    },
}
</script>

<style scoped>

.login {
    max-width: 500px;
    margin: 0 auto;
    pad: 0 10px;
}

form {
    display: grid;
}

.titulo {
    margin-top: 60px;
}

</style>