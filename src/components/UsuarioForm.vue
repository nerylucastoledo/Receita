<template>
    <section>
        <form>
            <div class="usuario">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" v-model="usuario.nome" placeholder="Nome">

                <label for="email">E-mail</label>
                <input type="text" id="email" name="email" v-model="usuario.email"  placeholder="Digite seu e-mail">

                <label for="senha">Senha</label>
                <input type="password" name="senha" id="senha" v-model="usuario.senha"  placeholder="Senha">
            </div>

            <label for="sobrenome">Sobrenome</label>
            <input type="text" name="sobrenome" id="sobrenome" v-model="usuario.sobrenome"  placeholder="Sobrenome">

            <label for="Estado">Estado</label>
            <input type="text" name="estado" id="estado" v-model="usuario.estado"  placeholder="Estado">

            <label for="cidade">Cidade</label>
            <input type="text" name="cidade" id="cidade" v-model="usuario.cidade"  placeholder="Cidade">

            <label for="foto">Foto</label>
            <input type="file" name="foto" id="foto" multiple ref="foto" />

            <div class="button">
                <button @click.prevent="cadastrarUsuario" class="btn btn-form cadastrar">Cadastrar</button>
            </div>
        </form>
    </section>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            usuario: {
                nome: "",
                email: "",
                senha: "",
                sobrenome: "",
                estado: "",
                cidade: "",
                foto: null
            }
        }
    },
    methods: {
        cadastrarUsuario() {
            const form = new FormData();
            const file = this.$refs.foto.files[0]

            form.append("nome", this.usuario.nome)
            form.append("email", this.usuario.email)
            form.append("senha", this.usuario.senha)
            form.append("sobrenome", this.usuario.sobrenome)
            form.append("estado", this.usuario.estado)
            form.append("cidade", this.usuario.cidade)
            form.append("foto", file)

            axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/usuario/',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: form
            })
        }
    }
}
</script>

<style scoped>
    
</style>