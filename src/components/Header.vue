<template>
    <section id="header">
        <nav id="menu">
            <div>
                <router-link to="/"><img id="img" src="../assets/logo.png" alt="Logo da empresa"></router-link>
            </div>
            <ul>
                <li><router-link to="/">Receitas</router-link></li>
                <li><router-link to="/minhas-receitas">Minhas Receitas</router-link></li>
            </ul>
            <div class="entrar-header">
                <img v-if="!$store.state.usuarioLogado" src="../assets/icon-pessoa.png" alt="">
                <button v-if="$store.state.usuarioLogado" @click="deslogarUsuario" class="btn deslogar">Sair</button>
                <router-link v-else to="/login"><button class="btn">Login</button></router-link>
            </div>
        </nav>
    </section>
</template>

<script>

export default {
    name: "Header",
    computed: {
        nomeUsuario() {
            return this.$store.state.dadosUsuario.nome
        }
    },
    methods: {
        deslogarUsuario() {
            this.$store.dispatch("deslogarUsuario")
            this.$router.push('login')
            this.$store.state.dadosUsuario.nome = ""
            this.$store.state.dadosUsuario.email = ""
            localStorage.clear()
        }
    }
}
</script>

<style>

#header {
    background-color: #F3F5F6;
}

#menu {
    padding: 10px 0px;
    margin: 0 auto;
    max-width: 1200px;
    align-items: center;
    display: flex;
    justify-content: space-around;
}

#menu img {
    max-width: 250px;
}

#menu ul {
    display: flex;
    align-items: center;
}

#menu ul li:nth-child(1) {
    margin-right: 20px;
}

#menu ul li:first-child::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    margin-left: 10px;
}

#menu ul li a {
    color: #759F41;
    font-size: 1rem;
}

#menu ul li a:hover {
    color: #FC834B;
}

.entrar-header {
    display: flex;
    align-items: center;
}

.entrar-header img {
    width: 30px;
    margin-right: 10px;
}

.entrar-header button:hover {
    transform: scale(1.2);
}

.deslogar {
    background-color: red!important;
}

.entrar-header span {
    margin-right: 15px;
}

</style>