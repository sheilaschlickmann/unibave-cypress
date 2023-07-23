# Projeto de Testes com Cypress na Amazon Brasil

Este projeto contém testes automatizados para o website da Amazon Brasil, usando a ferramenta de testes de ponta a ponta, Cypress.

## Estrutura do Projeto

O projeto contém um único arquivo de teste (por simplicidade, assumiremos que o arquivo é `amazon.cy.js`) que inclui vários cenários de testes para realizar pesquisas de produtos na Amazon Brasil.

Aqui está uma visão geral rápida dos cenários de testes incluídos:

- `Teste pesquisar livro`: Este teste procura por um livro chamado "Código limpo" na categoria "Computação, Informática e Mídias Digitais" e tenta comprar o livro.
- `Teste pesquisar mouse`: Este teste pesquisa um "Mouse sem fio", restringindo a faixa de preço para produtos abaixo de 200.
- `Teste pesquisar cafeteira`: Este teste procura por uma "cafeteira elétrica", filtra os resultados para mostrar apenas ofertas do dia e produtos com classificação de "quatro estrelas e acima".

## Pré-requisitos

Para rodar esses testes, você precisa ter os seguintes softwares instalados:

- Node.js e npm
- Cypress

## Como rodar os testes

1. Clone este repositório para a sua máquina local.
2. Navegue até o diretório do projeto e instale as dependências usando npm:

    ```
    npm install
    ```

3. Inicie o Cypress:

    ```
    npx cypress open
    ```

4. No Cypress Test Runner, clique no arquivo de teste `amazon.cy.js` para iniciar os testes.
