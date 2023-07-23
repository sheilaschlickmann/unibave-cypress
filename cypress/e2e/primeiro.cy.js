/// <reference types="cypress"/>
describe('Exemplo 1', () => {

    beforeEach(() => cy.visit('https://wcaquino.me/cypress/componentes.html'))

    it('Teste acessar pagina', () => {
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
        cy.get('body').should('contain', 'Campo de Treinamento')
    })

    it('Verificar botão', () => {
        cy.get('#buttonSimple').should('be.visible').should('have.value', 'Clique Me!')
    })

    it('Preencher texto', () => {
        cy.get('#formNome').should('be.visible').type('pudim')
        cy.get('#formNome').should('have.value','pudim')
        cy.get('#formNome').clear().type('pão')
        cy.get('#formNome').should('have.value','pão')
    })

    it('Teste listar', () => {
        cy.get('#buttonList').should('be.visible').click()
        cy.get('#lista > :nth-child(2) > span', { timeout: 10000 }).should('be.visible')
    })

    it('Teste radio masculino', () => {
        cy.get('#formSexoMasc').should('be.visible').check()
        cy.get('#formSexoMasc').should('be.checked')
    })

    it.only('Teste Cadastro', () => {
        cy.get('#formCadastrar').should('be.visible').click()
        cy.get('#formNome').should('be.visible').type('Sheila')
        cy.get('[data-cy="dataSobrenome"]').should('be.visible').type('Schlickmann')
        cy.get('#formSexoFem').should('be.visible').check()
        cy.get('#formComidaPizza').should('be.visible').check()
        cy.get('[data-test="dataEscolaridade"]').select('especializacao')
        cy.get('[data-testid="dataEsportes"]').select('nada')
        cy.get('#elementosForm').type('kkkkkk')
        cy.get('#formCadastrar').click()
        cy.get('#descNome').should('have.text', 'Nome: Sheila')
        cy.get('#descSobrenome').should('have.text', 'Sobrenome: Schlickmann')
        cy.get('#descSexo').should('have.text', 'Sexo: Feminino')
        cy.get('#descComida').should('have.text', 'Comida:  Pizza ')
        cy.get('#descEscolaridade').should('have.text', 'Escolaridade: especializacao')
        cy.get('#descEsportes').should('have.text', 'Esportes:  O que eh esporte? ')
        cy.get('#descSugestoes').should('have.text', 'Sugestoes: kkkkkk')
    })


})