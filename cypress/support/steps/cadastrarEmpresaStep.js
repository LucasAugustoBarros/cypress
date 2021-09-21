/**
 * File: cadastrarEmpresaStep.js
 * Author: Lucas Barros
 * Date: 20/09/2021
 */

import CadastrarEmpresa from '../pageobjects/cadastrarEmpresa'
//import SucessoForm from '../pageobjects/sucessoForm'
const cadastrarEmpresa = new CadastrarEmpresa
//const sucessoForm = new SucessoForm

Given(/^eu estou na página de cadastro de empresa$/, () => {
    cadastrarEmpresa.acessarSite();
})

When(/^eu preencho todos os campos solicitados$/, () => {
    cadastrarEmpresa.validarFormulario();
    cadastrarEmpresa.inserirDadosEmpresa();
    cadastrarEmpresa.inserirEndEmpresa();
    cadastrarEmpresa.inserirDtBoleto();
    cadastrarEmpresa.inserirDadosForm();
    cadastrarEmpresa.inserirArquivo();
    cadastrarEmpresa.salvarCadastro();
})

Then(/^eu visualizo a mensagem de "([^"]*)"$/, (mensagem) => {
    cadastrarEmpresa.msgSucesso(mensagem);
})