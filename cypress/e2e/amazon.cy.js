/// <reference types="cypress"/>
describe('Exemplo 2', () => {

    beforeEach(() => cy.visit('https://amazon.com.br'))

    it('Teste pesquisar livro', () => {
        
        cy.get('#nav-xshop').contains('Livros').click()
        cy.get(':nth-child(8) > .a-list-item > .a-color-base > span').contains('Computação, Informática e Mídias Digitais').click()
        cy.get(':nth-child(9) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click()
        cy.contains('Código limpo').should('be.visible').click()
        cy.get('#buy-now-button').click()
    })

    it('Teste pesquisar livro', () => {
        cy.get('#twotabsearchtextbox').should('be.visible').type('Mouse sem fio')
        cy.get('#nav-search-submit-button').click()
        cy.get('#high-price').type(200)
        cy.get('.a-button-input').click()
    })

    it('Teste pesquisar cafeteira', () => {
        cy.get('#twotabsearchtextbox').should('be.visible').type('cafeteira elétrica')
        cy.get('#nav-search-submit-button').click()
        cy.get('#priceRefinements').contains( 'Ofertas do Dia').click()
        cy.get('#reviewsRefinements').contains('Quatro estrelas e acima').click()
    })
})