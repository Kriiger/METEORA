import { coletaBotao } from "../modal/modalProdutos.js";
import { conectApi } from "./conectApi.js";
import constroiCard from "./mostrarProdutos.js";

export async function pesquisar(event){
    if(event.length >= 1){
        const busca = await conectApi.buscarProdutos(event);
        const lista = document.querySelector(".secaoProdutos-box");
        const titulo = document.querySelector('.tituloDaSecaoProdutos');
        
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        };
        
        busca.forEach((e) => {
            lista.appendChild(constroiCard(e.imagem, e.nome, e.descricao, e.preco));
        });
        
        const pegaBotao = document.querySelectorAll('.secaoProdutos-cards__botao')
        coletaBotao(pegaBotao)

        titulo.innerHTML = `Resultados para: "${event}"`       
        
    }else{
        const busca = await conectApi.produtos();
        const titulo = document.querySelector('.tituloDaSecaoProdutos')
        const lista = document.querySelector(".secaoProdutos-box");
        lista.innerHTML = '';
        
        busca.forEach((e) => {
            lista.appendChild(constroiCard(e.imagem, e.nome, e.descricao, e.preco));
        });
        
        const pegaBotao = document.querySelectorAll('.secaoProdutos-cards__botao')
        coletaBotao(pegaBotao)

        titulo.innerHTML = `Produtos que estão bombando!`       
    }
};

