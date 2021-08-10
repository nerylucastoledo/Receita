<template>
    <section>
        <h1 class="titulo">Crie sua conta</h1>
        <button v-if="!mostrar" @click="mostrar = true" class="btn cadastrar">Criar conta</button>
        <UsuarioForm v-else>
            <button class="btn btn-form cadastrar">Cadastrar</button>
        </UsuarioForm>
    </section>
</template>

<script>
import UsuarioForm from "./UsuarioForm.vue"

export default {
    components: {
        UsuarioForm
    },
    data() {
        return {
            mostrar: false
        }
    }
}
</script>

<style>

</style>