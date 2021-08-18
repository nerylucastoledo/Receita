<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

label, textarea {
  margin-bottom: 5px;
}

input, textarea {
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all .3s;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}

input:hover, input:focus, textarea:focus, textarea:hover {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #6F9A37;
}

* {
  box-sizing: border-box;
  font-family: cursive;
}

body,ul, li, h1, h2, p {
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
  background: url('./assets/background.jpg');
}

</style>
