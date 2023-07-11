export function coletaBotao(botao){
    const botaoVerMais = botao;
    const modal = document.querySelector('.modal')
    botaoVerMais.forEach((elemento) => {
        elemento.addEventListener("click", (elemento) => {
            const filhos = elemento.target.parentNode;
            const pai = filhos.parentNode;
    
            const img = pai.children[0].getAttribute('src');
            const titulo = filhos.children[0].innerText;
            const descricao = filhos.children[1].innerText;
            const preco = filhos.children[2].innerText;
    
            modalProdutos(img, titulo, descricao, preco);
            modal.showModal()
    
            const botaoCancelar = document.querySelector(".modalCabecalho-iconeCancelar");
            botaoCancelar.addEventListener('click', () => {
                modal.close()
            })
        })
    })
}


export function modalProdutos(img, titulo, descricao, preco){
    const modal = document.querySelector('.modal');

    modal.innerHTML = `
        <div class="modalCabecalho">
            <div class="imgEtitulo">
                <img src="/assets/modal/check-circle.png" class="modalCabecalho-iconeVerifica" alt="Circulo de verifação">
                <h1 class="modalCabecalho-titulo">Confira detalhes sobre o produto</h1>
            </div>
            <div class="iconeCancelar">
                <button class="modalCabecalho-iconeCancelar"><img src="/assets/modal/x Icon.png" alt="Botão cancelar"></button>
            </div>
        </div>
        <div class="modalConteudo">
            <div><img class="modalConteudo-img" src="${img}"></div>
            <div class="modalConteudo-conteudo">
                <div class="conteudoParteCima">
                    <h3 class="modalConteudo-conteudoTitulo">${titulo}</h3>
                    <p class="modalConteudo-conteudoTexto">${descricao}</p>
                    <hr>
                    <h2 class="modalConteudo-conteudoPreco">${preco}</h2>
                </div>
                <p class="modalConteudo-conteudoDono">Vendido e entregue por Riachuelo</p>
                <hr class="hr">
                <h3 class="modalConteudo-secaoTitulo">Cores:</h3>
                <div class="modalConteudo-cores">
                    <div class="inputModal">
                        <input name="cor" type="radio" id="cor1">
                        <label for="cor1" class="label">Azul claro</label>
                    </div>
                    <div class="inputModal">
                        <input name="cor" type="radio" id="cor2">
                        <label for="cor2" class="label">Offwhite</label>
                    </div>
                    <div class="inputModal">
                        <input name="cor" type="radio" id="cor3">
                        <label for="cor3" class="label">Preto</label>
                    </div>
                </div>
                <hr class="hr">
                <h3 class="modalConteudo-secaoTitulo">Tamanho:</h3>
                <div class="modalConteudo-tamanho">
                    <div class="inputModal">
                        <input name="tamanho" type="radio" id="p">
                        <label for="p" class="label">P</label>
                    </div>
                    <div class="inputModal">
                        <input name="tamanho" type="radio" id="pp">
                        <label for="pp" class="label">PP</label>
                    </div>
                    <div class="inputModal">
                        <input name="tamanho" type="radio" id="m">
                        <label for="m" class="label">M</label>
                    </div>
                    <div class="inputModal">
                        <input name="tamanho" type="radio" id="g">
                        <label for="g" class="label">G</label>
                    </div>
                    <div class="inputModal" >
                        <input name="tamanho" type="radio" id="gg">
                        <label for="gg" class="label">GG</label>
                    </div>
                </div>
                <button class="botaoModal btn">Adicionar à sacola</button>
            </div>
        </div>
    `
}