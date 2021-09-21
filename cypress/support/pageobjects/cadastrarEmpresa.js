/**
 * File: cadastrarEmpresaStep.js
 * Author: Lucas Barros
 * Date: 20/09/2021
 */

/// <reference types="Cypress" />

// Importar Elementos da Pagina
import ElementosCadEmpresa from '../elements/elementosCadEmpresa'
const elementosCadEmpresa = new ElementosCadEmpresa

//Setar URL
const url = Cypress.config("baseUrl")



class CadEmpresaPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    validarFormulario() {
        cy.get(elementosCadEmpresa.subTituloLbl()).should('contain', 'formulário com as informações')
    }
  
    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    inserirDadosEmpresa() {
        cy.get(elementosCadEmpresa.razaoSocialTxt()).type('Lucas Barros LTDA')
        cy.get(elementosCadEmpresa.nomeFantasiaTxt()).type('Cypress New')
        cy.get(elementosCadEmpresa.cnpjTxt()).type('12345678901234')
        cy.get(elementosCadEmpresa.iETxt()).type('123456')
        cy.get(elementosCadEmpresa.proprietarioNomeTxt()).type('Lucas')
        cy.get(elementosCadEmpresa.proprietarioSobrenomeTxt()).type('Barros')
        cy.get(elementosCadEmpresa.telefonePropTxt()).type('0123456789')
    }
    inserirEndEmpresa() {
        cy.get(elementosCadEmpresa.enderecoTxt()).type('Rua das Flores')
        cy.get(elementosCadEmpresa.enderecoContinuacaoTxt()).type('Apto 19')
        cy.get(elementosCadEmpresa.cidadeTxt()).type('Cuiabá')
        cy.get(elementosCadEmpresa.estadoTxt()).type('MT')
        cy.get(elementosCadEmpresa.cepTxt()).type('78048421')
    }
    inserirDtBoleto() {
        cy.get(elementosCadEmpresa.diaPagamentoBoletoTxt()).type('15')
        cy.get(elementosCadEmpresa.proximoBtn()).click()
    }
    inserirDadosForm(){
        cy.get(elementosCadEmpresa.respNomeTxt()).type('Lucas')
        cy.get(elementosCadEmpresa.respSobrenomeTxt()).type('Barros')
        cy.get(elementosCadEmpresa.celularRespTxt()).type('00000000000')
        cy.get(elementosCadEmpresa.cpfRespTxt()).type('00000000000')
        cy.get(elementosCadEmpresa.respFinanNomeTxt()).type('Lucas')
        cy.get(elementosCadEmpresa.respFinanSobrenomeTxt()).type('Barros')
        cy.get(elementosCadEmpresa.telefoneRespFinanTxt()).type('0000000000')
        cy.get(elementosCadEmpresa.nomeContabilidadeTxt()).type('Catabilidade a Todos')
        cy.get(elementosCadEmpresa.contadorNomeTxt()).type('José das Contas')
        cy.get(elementosCadEmpresa.contadorSobrenomeTxt()).type('Brabas')
        cy.get(elementosCadEmpresa.emailContadortxt()).type('contador@contador.com.br')
        cy.get(elementosCadEmpresa.celularContadorTxt()).type('00000000000')
    }
    inserirArquivo(){
        const myfixture = 'comprovativo-situacao-cnpj.jpg'
        cy.get(elementosCadEmpresa.uploadArquivoUp()).attachFile(myfixture);
        cy.get(elementosCadEmpresa.uploadArquivoLbl()).should('contain', 'comprovativo-situacao-cnpj.jpg')
    }
    salvarCadastro(){
        cy.get(elementosCadEmpresa.enviarBtn()).click()
        cy.task('log')
        cy.get(elementosCadEmpresa.sucessoFormTank).find(elementosCadEmpresa.msgSucessoForm)
    }
    msgSucesso(mensagem) {
        cy.get(elementosCadEmpresa.msgSucessoForm()).should('contain', mensagem)
    }
}

export default CadEmpresaPage;