async function produtos(){
    const resposta = await fetch('http://localhost:3000/produtos');
    const respostaConvertida = await resposta.json();

    return respostaConvertida;
}

async function buscarProdutos(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
};

export const conectApi = {
    produtos,
    buscarProdutos
}