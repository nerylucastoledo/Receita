<template>
    <section>

        <h1 class="titulo">Crie sua conta</h1>

        <div>
            <button v-if="!mostrar" @click="mostrar = true" class="btn cadastrar">Criar conta</button>
        </div>

        <form v-if="mostrar">

            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" v-model="usuario.nome" placeholder="Nome"/>

            <label for="email">E-mail</label>
            <input type="text" id="email" name="email" v-model="usuario.email" placeholder="Digite seu e-mail"/>

            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="usuario.senha" placeholder="Senha"/>

            <label for="sobrenome">Sobrenome</label>
            <input type="text" name="sobrenome" id="sobrenome" v-model="usuario.sobrenome" placeholder="Sobrenome"/>

            <label for="Estado">Estado</label>
            <input type="text" name="estado" id="estado" v-model="usuario.estado" placeholder="Estado"/>

            <label for="cidade">Cidade</label>
            <input type="text" name="cidade" id="cidade" v-model="usuario.cidade" placeholder="Cidade"/>

            <label for="foto">Foto</label>
            <input type="file" name="foto" id="foto" multiple ref="foto" />

            <button @click.prevent="cadastrarUsuario" class="btn btn-form cadastrar">Cadastrar</button>

            <div v-if="modal">
                <ModalSucesso>
                    <p>Usuário criado com sucesso!</p>
                </ModalSucesso>
            </div>

        </form>

    </section>
</template>

<script>
import { api } from "../service.js";
import ModalSucesso from "../components/ModalSucesso.vue"

export default {

    components: {
        ModalSucesso
    },

    data() {
        return {
            usuario: {
                nome: "",
                email: "",
                senha: "",
                sobrenome: "",
                estado: "",
                cidade: "",
                foto: null,
            },
            mostrar: false,
            modal: false,
        };
    },

    methods: {
        cadastrarUsuario() {
        const form = new FormData();
        const file = this.$refs.foto.files[0];

        form.append("nome", this.usuario.nome);
        form.append("email", this.usuario.email);
        form.append("senha", this.usuario.senha);
        form.append("sobrenome", this.usuario.sobrenome);
        form.append("estado", this.usuario.estado);
        form.append("cidade", this.usuario.cidade);
        form.append("foto", file);

        api.post("usuario/", form)
            .then((res) => {
            if (res.status == 201) {
                this.modal = true;
                setTimeout(() => {
                    this.modal = false;
                    this.mostrar = false
                }, 1000);
            }
            })
            .catch((error) => {
            if (error) {
                alert("Não foi possivel se cadastrar. Tente novamente");
            }
            });
        },
    },
};
</script>