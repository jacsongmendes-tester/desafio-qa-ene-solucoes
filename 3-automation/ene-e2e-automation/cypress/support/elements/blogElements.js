class blogElements {
    textoPrincipalBlog = () => { 
        return 'div > h2' 
    }

    inputPesquisar = () => { 
        return 'input[type="search"]' 
    }

    botaoPesquisar = () => { 
        return 'form[class="searchForm"] span[class="ant-input-suffix"]' 
    }
    
    resultadoPesquisa = () => { 
        return 'section[class="pt-16"] > article' 
    }

    resultadoPesquisaVazio = () => {
        return 'section[class="pt-16"] h1'
    }
    
    campoEmail = () => {
        return 'span[class="ant-input-affix-wrapper"] input[type="email"]'
    }

    botaoEnviarEmail = () => {
        return 'button >img[alt="Enviar"]'
    }

    dialogoSucessoEmail = () => {
        return 'div[class="font-barlow flex flex-col items-center sm:w-[244px] lg:w-[480px] mt-7 lg:mb-7 styles-module--text--1xJW1"] > h1'
    } 
    
    mensagemSucessoEmail = () => {
        return 'div[class="font-barlow flex flex-col items-center sm:w-[244px] lg:w-[480px] mt-7 lg:mb-7 styles-module--text--1xJW1"] > p'
    }

    mensagemErroEmail = () => {
        return 'div[role="alert"]'
    }

    botaoTermoUso = () => {
        return 'div a[href="/termos-de-uso"]'
    }

    tituloTermosUso = () => {
        return 'div > h1'
    }
    
}
  
export default blogElements;
