<template>
    <section>
        <form>

            <div class="usuario">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" placeholder="Nome">

                <label for="email">E-mail</label>
                <input type="text" id="email" name="email" placeholder="Digite seu e-mail">

                <label for="senha">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Senha">
            </div>

            <label for="sobrenome">Sobrenome</label>
            <input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome">

            <label for="cep">Cep</label>
            <input type="number" name="cep" id="cep" placeholder="Cep">

            <label for="Estado">Estado</label>
            <input type="text" name="estado" id="estado" placeholder="Estado">

            <label for="cidade">Cidade</label>
            <input type="text" name="cidade" id="cidade" placeholder="Cidade">

            <div class="button">
                <slot></slot>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    
}
</script>

<style>

.usuario {
    margin-top: 40px;
}
    
</style>