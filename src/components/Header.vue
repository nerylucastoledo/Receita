<template>
    <section id="header">
        <nav id="menu">
            <div>
                <img id="img" src="../assets/logo.png" alt="Logo da empresa">
            </div>
            <ul>
                <li><router-link to="/">RECEITAS</router-link></li>
                <li><router-link to="/minhas-receitas">MINHAS RECEITAS</router-link></li>
            </ul>
            <div>
                <router-link to="/login"><button class="btn">Login</button></router-link>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>

#header {
    background-color: #20252B;
}

#menu {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#menu ul li {
    display: inline-block;
    margin-right: 20px;
}

#menu ul li a {
    color: #fff;
}

#menu ul li:first-child::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    margin-left: 10px;
}

#menu ul li a:hover {
    color: #FC834B;
}

#img {
    width: 150px;
}

.btn {
    background-color: #6F9A37;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    text-align: center;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
}


</style>