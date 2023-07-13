<h1 align="center">METEORA</h1>
<img src="assets/Desktop/bannerCarrrocel1-1440.png">

# Conheça o projeto!

<p>Seja bem-vindo ao projeto do desafio Front-End da Alura, que recebe o imponente nome: Meteora! Um site fictício criado com o único objetivo de por em prática todos os conceitos aprendidos nos cursos de Front-End da Alura. O projeto ainda está em andamento, pois correções e novas funcionalidades serão adicionadas posteriormente.</p>


## :hammer: Aprendizados, desafios e conhecimentos aplicados

- `Carrocel de fotos`: Nada melhor que apresentar novidades através de um belo carrocel não é verdade? O primeiro desafio para o projeto foi a criação de um slide de imagens simples e funcional. A intenção era reproduzir exatamente o conceito estético produzido no Figma. Nesse momento eu aprendi a criar um carrocel personalizável e com a possibilidade de reutilizar a lógica para outros carroceis mais bonitos e complexos.
- `API Rest`: Na seção de Produtos, fez-se necessário a utilização de uma API, com o fim de tornar possível a realização de pesquisas e filtragem por categorias. Com isso, criei uma API falsa que suprisse essa necessidade e claro, "consumi" essa API dentro do projeto.
- `Funcionalidade "Pesquisar"`: Após a criação e consumo da API, o próximo desafio foi adicionar funcionalidade ao campo de pesquisa. Durante o desenvolvimento eu cheguei em duas soluções. A primeira solução (que não me agradou) era a mais óbvia: escrever o termo desejado no campo de pesquisa, clicar no botão e receber o resultado. Porém, não achei tão intuitivo, então mudei a lógica. Conforme o campo de pesquisa vai sendo atualizado com novos caracteres, a pesquisa vai sendo realizada e o termo pesquisado substitui o título da seção. Neste caso, o botão pesquisar perde utilidade, porém a solução que implementei foi a seguinte: quando o botão "Buscar" é clicado, a página rola automaticamente até a seção de produtos. Mais agradável, não? Essa foi a parte mais desafiadora, pois conforme fui implementando a solução, problemas iam surgindo.
- `Modal`: Entre os problemas citados acima, estava o não carregamento do Modal. Cada produto possui um botão para ver mais detalhes. Quando clicado um modal aparece. Apesar de simples, toda a construção é feita com o JavaScript, já que todos os dados estão dentro de uma API, para isso foi necessário pensar um pouquinho mais para criar uma solução adequada e que resolvesse o bug do modal não carregar quando era feito a pesquisa por um produto específico.
- `Campo e-mail`: Por fim temos um newsletter. Um input email simples, para cadastramento e recebimento das novidades da loja. Para essa parte, foi adicionado uma validação simples utilizando Expressão Regular.


## ✔️ Técnicas e tecnologias utilizadas

- ``HTML``
- ``CSS``
- ``JavaScript - ES6``
