<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  created() {
    const logado = localStorage.getItem("email");
    if (logado) {
      this.$store.dispatch("pegarUsuario", logado);
    }
  },
};
</script>

<style>
label,
textarea {
  margin-bottom: 5px;
}

input,
textarea,
select {
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}

input:hover,
input:focus,
textarea:focus,
textarea:hover {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #6f9a37;
}

* {
  box-sizing: border-box;
  font-family: cursive;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  font-family: cursive;
}

.receitas {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.receitas div {
  flex: 1;
}

.receitas img {
  max-width: 100%;
  height: 70%;
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgb(30 60 90 / 10%);
}

.receitas span {
  position: relative;
  bottom: 28px;
  background-color: #fff;
  padding: 5px;
  display: block;
  text-align: center;
  max-width: 100px;
  margin: 0 auto;
  border-radius: 4px;
  color: #727b7a;
}

.receitas p {
  text-align: center;
  margin-top: -20px;
  color: #000;
}

@media (max-width: 759px) {
  .logo-footer {
    margin-top: 40px;
  }
}

@media (max-width: 620px) {
  .categoria {
    display: none;
  }

  .titulo {
    margin-top: 40px;
  }

  .receitas {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin: 30px;
  }

  .receitas span {
    font-size: 14px;
  }
}
</style>
