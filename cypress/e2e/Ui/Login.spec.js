/// <reference types="cypress" />

describe('PB2B0001 - Funcionalidade : Login', () => {
    
    beforeEach(() => {
 
    });

    it('Deve fazer login com sucesso', () => {

        //Assert
        const email = 'carlos.carvalho-ext@viavarejo.com.br';
        const password = '133133';

        //Act
        cy.login(email, password);

        //Assert
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo');

    });

    it('Validar erro ao adicionar usuário não existente', () => {
        //Arrange
        const email = 'carlos.carvalho-ext@viavarejo.com.br';
        const password = '1331332';

        //Act
        cy.login(email, password);

        //Assert
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas');
    });

    it('Validar erro ao utilizar email invalido', () => {
        //Arrange
        const email = 'carlos.carvalho-ext';
        const password = '1331332';

        //Act
        cy.login(email, password);

        //Assert
        cy.get('.MuiFormHelperText-root').should('contain', 'Digite um email válido');
    });

});
