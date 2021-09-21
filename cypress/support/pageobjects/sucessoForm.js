/**
 * File: sucessoForm.js
 * Author: Lucas Barros
 * Date: 20/09/2021


/// <reference types="Cypress" />

// Importar Elementos da Pagina
import ElementoFormSucesso from '../elements/elementoFormSucesso'
const elementoFormSucesso = new ElementoFormSucesso

class SucessoForm {
    // Mensagem sucesso
    msgSucesso(mensagem) {
        cy.get(elementoFormSucesso.msgSucessoForm()).should('contain', mensagem)
    }
}
export default SucessoForm;
 */