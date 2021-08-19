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

            <div class="button">
                <button @click.prevent="cadastrarUsuario" class="btn btn-form cadastrar">Cadastrar</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            usuario: {
                nome: "",
                email: "",
                senha: "",
                sobrenome: "",
                estado: "",
                cidade: ""
            }
        }
    },
    methods: {
        cadastrarUsuario() {
            fetch("http://127.0.0.1:8000/usuario/?email=", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.usuario)
            })
        }
    }
}
</script>

<style>

    
</style>