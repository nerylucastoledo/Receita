import store from './store'

export function serialize(objeto) {
    let queryString = ""
    for(let key in objeto) {
        queryString += `?${key}=${objeto[key]}`
    }
    return queryString
}

export function formatarReceita(receita, file) {
    const form = new FormData();

    form.append("nome_receita", receita.nome_receita);
    form.append("serve", receita.serve);
    form.append("tempo", receita.tempo);
    form.append("dificuldade", receita.dificuldade);
    form.append("ingredientes", receita.ingredientes);
    form.append("descricao", receita.descricao);
    form.append("modo_preparo", receita.modo_preparo);
    form.append("nome_criador", store.state.dadosUsuario.nome);
    form.append("email_criador", store.state.dadosUsuario.email);
    form.append("categoria", receita.categoria);
    form.append("imagem", file);

    return form
}