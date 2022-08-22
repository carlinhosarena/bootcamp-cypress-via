/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('PB2B00003 - Funcionalidade : Criar Perfil', () => {
  
    const nome = 'Carlos A Carvalho';
    const email = faker.internet.email();
    const senha = '133133';

    before(() => {
        cy.cadastrar(nome, email, senha, senha);
    })

    beforeEach(() => {
    })

    it('Deve criar um perfil valido', () => {
        //Arrange
        const empresa = 'Empresa Teste';
        const website = 'http://www.google.com.br';
        const localizacao = 'Lavras';
        const conhecimento = 'C#, SQL, Node, Mongo, JavaScrit';
        const user_git = 'carlinhosarena';
        const biografia = 'Comunicativo, gosto de trabalhar em equipe e minha característica principal é compartilhamento de conhecimento. ';

        const instagram = 'https://www.instagram.com/carlosscarvalhoo/';
        const linkedin = 'https://www.linkedin.com/in/carloscarvalhosis/';
        
        //Act
        cy.criarPerfil(empresa, website, localizacao, conhecimento, user_git, biografia, linkedin, instagram);

        //Assert
        cy.get('.large').should('contain', "Dashboard");
  })

  it('Deve editar um perfil existente', () => {

    //Arrange
    const emprepsa = 'Empresa Teste 2';
    const website = 'https://g1.globo.com/';
    const localizacao = 'São Paulo';
    const conhecimento = 'C#, SQL, Node, Mongo, JavaScrit, Testes Automatizados';
    const user_git = 'carlinhosarena';
    const biografia = 'Comunicativo, gosto de trabalhar em equipe e minha característica principal é compartilhamento de conhecimento. Estou me desenvolvimento em testes automatizados';

    const instagram = 'https://www.instagram.com/carlosscarvalhoo/';
    const linkedin = 'https://www.linkedin.com/in/carloscarvalhosis/';
    
    //Act
    cy.get('[data-test="dashboard-editProfile"]').click();

    cy.get('#mui-component-select-status').click();
    
    cy.get('.MuiMenu-list li').then(($li) => {
        const items = $li.toArray();
        return Cypress._.sample(items);
    }).click();

    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(emprepsa);
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(website);
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(localizacao);
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(conhecimento);
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(user_git);
    cy.get('[rows="1"]').clear().type(biografia);

    cy.get('[data-test="profile-socials"]').click();

    cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(linkedin);
    cy.get('[data-test="profile-instagram"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(instagram);

    cy.get('[data-test="profile-submit"]').click();

    

    //Assert
    cy.get('.large').should('contain', "Dashboard");
})
})
