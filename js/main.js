import { executaCarrocel } from "../js/carrocel/carrocel.js";
import { coletaBotao, modalProdutos } from "./modal/modalProdutos.js";
import { modalNewsletter } from "./modal/modalNewsletter.js";
import { conectApi } from "./api/conectApi.js";
import { pesquisar } from "./api/buscarProdutos.js";
import { listarProdutos } from "./api/mostrarProdutos.js";
 
// Carrocel
const pegaTamanhoDaTela = document.body.clientWidth;
if(pegaTamanhoDaTela >= 769){
    executaCarrocel('desktop');
    descerPagPesquisa(809);
}else if(pegaTamanhoDaTela >= 376){
    executaCarrocel('tablet');
    descerPagPesquisa(1040);
}else {
    executaCarrocel('mobile');
    descerPagPesquisa(1280);
}

// Funcionalidade pesquisar pelo campo
const inputPesquisar = document.querySelector(".campoDePesquisa");
inputPesquisar.addEventListener('input', (e) => {
    pesquisar(e.target.value);
})

// Adicionando funcionalidade no botão do campo de pesquisa, que com a lógica criada, o botão perdeu sua real utilidade.
function descerPagPesquisa(posicao){
    const botao = document.querySelector(".botaoPesquisa");
    botao.addEventListener('click', () => {
        window.scroll({top: `${posicao}`, left: 0, behavior: "smooth"})
    })
}

// Funcionalidade pesquisar por categorias
const botoesCategoria = document.querySelectorAll('.botaoCategoria');
botoesCategoria.forEach((e) => {
    e.addEventListener('click', (e) => {
        if(e.target.name){
            pesquisar(e.target.name)
        }else{
            pesquisar(e.target.innerText)
        }
    });
});