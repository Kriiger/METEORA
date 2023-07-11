import { coletaBotao } from "../modal/modalProdutos.js";
import { conectApi } from "./conectApi.js";

const lista = document.querySelector('.secaoProdutos-box');

export default function constroiCard(imagem, nome, descricao, preco) {
    const produto = document.createElement('li')
    produto.className = "secaoProdutos-cards"
    produto.innerHTML = `
        <img class="secaoProdutos-imagem" src="${imagem}" alt="camiseta conforto">
        <div class="secaoProdutos-cards__boxConteudo">
            <h2 class="secaoProdutos-cards__titulo">${nome}</h2>
            <p class="secaoProdutos-cards__texto">${descricao}</p>
            <p class="secaoProdutos-cards__preco">${preco}</p>
            <button class="secaoProdutos-cards__botao">Ver mais</button>
        </div>
    `;

    return produto;
};

export async function listarProdutos(){
    const listaApi = await conectApi.produtos();
    listaApi.forEach((e) => {
       lista.appendChild(constroiCard(e.imagem, e.nome, e.descricao, e.preco))
    });
    const pegaBotao = document.querySelectorAll('.secaoProdutos-cards__botao')
    coletaBotao(pegaBotao)
};

listarProdutos();