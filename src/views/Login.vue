<template>
    <section class="login">
        <h1>Login</h1>
        <form>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" v-model="email" required placeholder="E-mail">

            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="senha" required placeholder="Senha">

            <button @click.prevent="fazerLogin(email, senha)" class="btn cadastrar">Entrar</button>
        </form>
        <LoginCriar/>
    </section>
</template>

<script>
import LoginCriar from "../components/LoginCriar.vue"
import axios from "axios"

export default {
    data() {
        return {
            email: "",
            senha: ""
        }
    },
    components: {
        LoginCriar
    },
    methods: {
        fazerLogin(email, senha) {
            axios({
                method: 'GET',
                url: `http://127.0.0.1:8000/usuario/?email=${email}`
            })
            .then(res => {
                const senhaApi = res.data[0].senha
                if(senhaApi == senha) {
                    this.$router.push('minhas-receitas')
                } else {
                    console.log('Não pode')
                }
            })
        }
    }
}
</script>

<style>


.login {
    max-width: 960px;
    margin: 0 auto;
}

.login h1 {
    margin: 20px 0px;
    font-size: 2rem;
    text-align: center;
}

form {
    max-width: 400px;
    margin: 20px auto;
}

form label {
    font-size: 22px;
}

.cadastrar {
    display: block;
    margin: 20px auto;
    width: 100%;
}

</style>