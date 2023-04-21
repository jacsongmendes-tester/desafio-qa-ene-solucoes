import { When, Then, Given} from "@badeball/cypress-cucumber-preprocessor"
import blogPage from "../pageobjects/blogPage"
const BlogPage = new blogPage

Given("que eu acesso a página da Ene Soluções", () => {
	BlogPage.acessarPaginaEneSolucoes();
})

Then("clico no botão Blog", () => {
	BlogPage.acessarPaginaBlogEne();
})

Then("devo visualizar a página do blog da Ene", () => {
	BlogPage.visualizarPaginaBlog();
})

Then("pesquiso pela tecnologia {string}", (tecnologia) => {
	BlogPage.pesquisarTecnologia(tecnologia);
})

When("clico no botão Pesquisar", () => {
	BlogPage.clicarBotaoPesquisar();
})

Then("devo visualizar as tecnologias relacionadas no blog da Ene", () => {
	BlogPage.visualizarTecnologias();
})

Then("Então devo visualizar a lista vazia e a mensagem {string}", (mensagemNenhumResultado) => {
	BlogPage.visualizarListaVazia(mensagemNenhumResultado);
})

Then("inserir o endereço de email válido", () => {
	BlogPage.inserirEmail("automacao-ene-solucoes@gmail.com")
})

Then("clicar no botão Enviar", () => {
	BlogPage.clicarBotaoEnviar()
})

Then("devo visualizar uma caixa de diálogo com a mensagem de sucesso", () => {
	BlogPage.validarSucessoEnvioEmail()
})

Then("inserir um endereço de email inválido", () => {
	BlogPage.inserirEmail("automacao-ene-solucoes")
})

Then("devo visualizar uma mensagem de erro {string}", (mensagemErroEmail) => {
	BlogPage.validarMensagemErro(mensagemErroEmail)
})

When("clico no label termos de uso", () => {
	BlogPage.clicarBotaoTermoUso()
})

Then("devo ser redirecionado para seção termos de uso", () => {
	BlogPage.validarPaginaTermoUso()
})






