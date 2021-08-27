<template>
    <section class="login">
        <h1>Login</h1>
        <form>
            <label for="emailLogar">E-mail</label>
            <input type="email" name="emailLogar" id="emailLogar" v-model="emailLogar" placeholder="E-mail" required>

            <label for="senha">Senha</label>
            <input type="password" autocomplete="on" name="senha" id="senha" v-model="senha" placeholder="Senha" required>
            <p class="login_incorreto" v-if="senhaIncorreta">E-mail ou senha incorretos!</p>
            <p class="pedirParaCadastrar" v-if="pedirParaCadastrar">E-mail não encontrado! Crie uma conta</p>
            <input type="submit" @click.prevent="fazerLogin(emailLogar, senha)" class="btn cadastrar" value="Entrar">
        </form>
        <LoginCriar/>
    </section>
</template>

<script>
import LoginCriar from "../components/LoginCriar.vue"
import { api } from "../service.js"
import { mapState } from 'vuex'

export default {
    
    data() {
        return {
            emailLogar: "",
            senha: "",
            senhaIncorreta: null,
            pedirParaCadastrar: null
        }
    },

    components: {
        LoginCriar
    },

    computed: {
        ...mapState(["dadosUsuario"])
    },

    methods: {
        fazerLogin(email, senha) {
            api.get(`usuario/?email=${email}`)
            .then(res => {
                if (res.data.length == 0) {
                    this.pedirParaCadastrar = true
                } else if(res.data[0].senha == senha) {

                    this.dadosUsuario.nome = res.data[0].nome
                    this.dadosUsuario.email = res.data[0].email

                    localStorage.setItem("email", res.data[0].email)
                    localStorage.setItem("senha", res.data[0].senha)

                    this.$router.push('minhas-receitas')
                    this.$store.dispatch("logarUsuario")
                } else {
                    this.senhaIncorreta = true
                    this.pedirParaCadastrar = null
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

.login p {
    max-width: 400px;
    text-align: center;
    margin: 0 auto;
    padding: 5px;
}

.login_incorreto {
    background-color: red;
}

.pedirParaCadastrar {
    background-color: yellow;
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
}

</style>