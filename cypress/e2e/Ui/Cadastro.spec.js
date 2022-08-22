/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('PB200002 - Funcionalidade : Cadastros', () => {

    beforeEach(() => {
    });

    it('Deve fazer uma cadastro com sucesso', () => {
        
        //Arrange
        const nome = faker.name.fullName();
        const email = faker.internet.email();
        const senha = '133133';
        const confirm = '133133';

        //Act
        cy.cadastrar(nome, email, senha, confirm);

        //Assert
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo');
    });

    it('Deve mostrar erro ao fazer um cadastro com email invalido', () => {
        
        //Arrange
        const nome = faker.name.fullName();
        const email = 'teste@';
        const senha = '133133';
        const confirm = '133133';

        //Act
        cy.cadastrar(nome, email, senha, confirm);

        //Assert
        cy.get('.MuiFormHelperText-root').should('contain', 'Digite um email válido');
    });

    it('Deve mostrar erro ao fazer um cadastro com senhas diferentes', () => {
        
        //Arrange
        const nome = faker.name.fullName();
        const email = faker.internet.email();
        const senha = '1331332';
        const confirm = '133133';

        //Act
        cy.cadastrar(nome, email, senha, confirm);

        //Assert
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

});