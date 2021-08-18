<template>
    <section class="login">
        <h1>Login</h1>
        <span>E-mail ou senha incorreto</span>
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

export default {
    components: {
        LoginCriar
    },
}
</script>

<style scoped>
</style>