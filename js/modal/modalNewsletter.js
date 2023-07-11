const botaoEnviar = document.querySelector(".novidades-botaoEnviar");
const modal = document.querySelector('.modalNewsletter');
botaoEnviar.addEventListener('click', () => {
    const input = document.getElementById('inputEmail');
    const compara = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(compara.test(input.value)){
        modalNewsletter()
        modal.showModal()
        const botaoCancelar = document.querySelector(".modalCabecalho-iconeCancelarNew");
        botaoCancelar.addEventListener('click', () => {
            modal.close()
        })
        input.value = '';
    }else{
        alert('Email inválido.')
    }
});

export function modalNewsletter(){
    const modal = document.querySelector('.modalNewsletter');

    modal.innerHTML = `
        <div class="modalCabecalho">
            <div class="imgEtitulo">
                <img src="/assets/modal/check-circle.png" class="modalCabecalho-iconeVerifica" alt="Circulo de verifação">
                <h1 class="modalCabecalho-titulo">E-mail cadastrado com sucesso!</h1>
            </div>
            <div class="iconeCancelar">
                <button class="modalCabecalho-iconeCancelarNew"><img src="/assets/modal/x Icon.png" alt="Botão cancelar"></button>
            </div>
        </div>
        <div class="modalConteudo">
            <p class="modalConteudo-conteudoTexto modalTextoNew">Em breve você receberá novidades exclusivas da Meteora.</p>
        </div>
    `
}