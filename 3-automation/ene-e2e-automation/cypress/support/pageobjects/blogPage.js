import blogElements from '../elements/blogElements';
const BlogElements = new blogElements
import eneSolucoesElements from '../elements/eneSolucoesElements';
const EneSolucoesElements = new eneSolucoesElements
class blogPage {
    acessarPaginaEneSolucoes (){ 
        cy.visit("/")
    }   

    acessarPaginaBlogEne(){
        cy.get(EneSolucoesElements.buttonBlog())
            .click()
                .first()
    }

    visualizarPaginaBlog(){
        cy.url()
            .should('eq', Cypress.config("baseUrl")+"/blog")
        
        cy.get(BlogElements.textoPrincipalBlog())
            .contains('As principais novidades do mundo da tecnologia você encontra aqui.')
    }

    pesquisarTecnologia(tecnologia){
        cy.get(BlogElements.inputPesquisar())
            .type(tecnologia)
    }

    clicarBotaoPesquisar(){
        cy.get(BlogElements.botaoPesquisar())
            .click()
    }

    visualizarTecnologias(){
        cy.get(BlogElements.resultadoPesquisa())
            .should('not.be.empty')
    }

    visualizarListaVazia(mensagemNenhumResultado){
        cy.get(BlogElements.resultadoPesquisaVazio())
            .contains(mensagemNenhumResultado )
    }

    inserirEmail (email){
        cy.get(BlogElements.campoEmail())
            .type(email)
    }

    clicarBotaoEnviar(){
        cy.get(BlogElements.botaoEnviarEmail())
            .click()
    }
    
    validarSucessoEnvioEmail (){
        cy.get(BlogElements.dialogoSucessoEmail())
            .contains('PARABÉNS!')
    }

    validarMensagemErro(mensagemErroEmail){
        cy.get(BlogElements.mensagemErroEmail())
            .contains(mensagemErroEmail)
    }

    clicarBotaoTermoUso(){
        cy.get(BlogElements.botaoTermoUso())
            .click()
    }

    validarPaginaTermoUso(){
        cy.get(BlogElements.tituloTermosUso())
            .contains('Termos de uso')
    }
}

export default blogPage;