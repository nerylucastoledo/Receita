<template>
    <section class="container login">

        <div>
            <h1>Login</h1>
        </div>

        <div class="formulario">
            <div>
                <p class="login_incorreto" v-if="senhaIncorreta">E-mail ou senha incorretos!</p>
                <p class="nao_encontrado" v-if="pedirParaCadastrar">E-mail não encontrado! Crie uma conta</p>
            </div>
            <form>

                <label for="emailLogar">E-mail</label>
                <input type="email" name="emailLogar" id="emailLogar" v-model="emailLogar" placeholder="E-mail" required>

                <label for="senha">Senha</label>
                <input type="password" autocomplete="on" name="senha" id="senha" v-model="senha" placeholder="Senha" required>
                
                <input type="submit" @click.prevent="fazerLogin(emailLogar, senha)" class="btn cadastrar" value="Entrar">
            
            </form>

        </div>

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
                var quantidadeDeUsuarioEncontrado = res.data.length

                if (quantidadeDeUsuarioEncontrado == 0) {

                    this.pedirParaCadastrar = true
                    this.senhaIncorreta = false

                } else if(res.data[0].senha == senha) {

                    const nomeDoUsuario  = res.data[0].nome
                    const emailDoUsuario = res.data[0].email

                    this.dadosUsuario.nome = nomeDoUsuario
                    this.dadosUsuario.email = emailDoUsuario

                    this.$router.push('minhas-receitas')
                    this.$store.dispatch("logarUsuario", res.data[0])

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

.login_incorreto, .nao_encontrado {
    width: 340px;
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
}

.login_incorreto {
    background-color: red;
    color: #fff;
}

.nao_encontrado {
    background-color: yellow;
}

.formulario {
    box-shadow: 0 4px 8px rgb(30 60 90 / 10%);
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    max-width: 400px;
    margin: 0 auto;
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