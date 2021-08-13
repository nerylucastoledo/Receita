<template>
    <section class="login">
        <h1 class="titulo">Login</h1>
        <span v-if="logado == 'incorreto'">E-mail ou senha incorreto</span>
        <form>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" v-model="data.email" required placeholder="E-mail">

            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="data.senha" required placeholder="Senha">

            <button @click.prevent="entrar(data.email, data.senha)" class="btn cadastrar">Entrar</button>
        </form>
        <LoginCriar/>
    </section>
</template>

<script>
import LoginCriar from "../components/LoginCriar.vue"
import {mapActions} from "vuex"

export default {
    components: {
        LoginCriar
    },
    data() {
        return {
            data: {
                email: "",
                senha: ""
            },
            logado: null
        }
    },
    methods: {
        ...mapActions(["logar", "pegarDados"]),
        entrar(email) {
            fetch(`http://127.0.0.1:8000/usuario/?email=${email}`)
            .then(result => result.json())
            .then(response => {
                if (this.data.email == undefined || this.data.senha == undefined) {
                    this.logado = "incorreto"
                } else if(response[0].senha === this.data.senha) {
                    this.logado = "correto"
                    this.logar()
                    this.pegarDados(this.data.email)
                    localStorage.setItem("email", this.data.email)
                    localStorage.setItem("senha", this.data.senha)
                    this.$router.push({name: "Home"})
                } else {
                    this.logado = "incorreto"
                }
            })
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

.login span {
    background-color: red;
    display: block;
    margin: 20px 0px;
    padding: 10px;
    text-align: center;
}

</style>