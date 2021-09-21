/**
 * File: elementosCadEmpresa.js
 * Author: Lucas Barros
 * Date: 20/09/2021
 */


 class ElementosCadEmpresa {
    subTituloLbl = () => { return 'div[id="subHeader_1"]' }  // "Preencha o formulário com as informações da sua empresa"
    //Dados Empresa
    razaoSocialTxt = () => { return 'input[name="q5_razaoSocial"]'}
    nomeFantasiaTxt = () => { return 'input[id="input_7"]'}
    cnpjTxt = () => { return 'input[name="q10_cnpj"]'}
    iETxt = () => { return 'input[name="q11_inscricaoEstadual"]'} // Campo Inscrição Estadual
    proprietarioNomeTxt = () => { return 'input[name="q3_nome3[first]"]'}
    proprietarioSobrenomeTxt = () => { return 'input[id="last_3"]'}
    telefonePropTxt = () => { return '#input_12_full'}
    // Endereço Empresa
    enderecoTxt = () => { return 'input[id="input_13_addr_line1"]'}
    enderecoContinuacaoTxt = () => { return 'input[id="input_13_addr_line2"]'}
    cidadeTxt = () => { return 'input[name="q13_endereco[city]"]'}
    estadoTxt = () => { return 'input[id="input_13_state"]'}
    cepTxt = () => { return 'input[id="input_13_postal"]'}
    // Parametro de Pagamento empresa
    diaPagamentoBoletoTxt = () => { return 'input[id="input_15"]'} // Campo  Melhor Dia do Mês Para Envio do Boleto
    // Botão
    proximoBtn = () => { return 'button[id="form-pagebreak-next_14"]'} // Botão próximo
    // Segundo Formulário Responsável empresa
    respNomeTxt = () => { return 'input[id="first_16"]'} // Campo Nome Responsável empresa
    respSobrenomeTxt = () => { return 'input[id="last_16"]'} // Campo Nome Responsável empresa
    celularRespTxt = () => { return 'input[name="q17_celularDo17[full]"]'}
    cpfRespTxt = () => { return 'input[name="q18_cpfDo"]'}
    // Segundo Formulário Responsável Financeiro empresa
    respFinanNomeTxt = () => { return 'input[id="first_19"]'} // Campo Nome Responsável Financeiro empresa
    respFinanSobrenomeTxt = () => { return 'input[id="last_19"]'} // Campo Nome Responsável Financeiro empresa
    telefoneRespFinanTxt = () => { return 'input[id="input_20_full"]'} // Campo Telefone Responsável Financeiro empresa
    // Segundo Formulário Responsável Contabilidade
    nomeContabilidadeTxt = () => { return 'input[name="q21_nomeDa"]'}
    contadorNomeTxt = () => { return '#first_22'} // Nome Contador Contabilidade
    contadorSobrenomeTxt = () => { return 'input[name="q22_nomeDo22[last]"]'} // Sobrenome Contador Contabilidade
    emailContadortxt = () => { return 'input[name="q23_emailDo"]'}
    celularContadorTxt = () => { return 'input[id="input_24_full"]'}
    //Arquivo
    uploadArquivoUp = () => { return 'input[class="fileupload-input"]'}
    uploadArquivoLbl = () => { return '.qq-upload-file'}
    // Botões voltar e enviar
    voltarBtn = () => { return 'button[id="form-pagebreak-next_14"]'} // Botão de voltar
    enviarBtn = () => { return '#input_2'} // Botão de enviar
    sucessoFormTank = () => { return '.thankyou'}
    msgSucessoForm = () => { return 'h1[class="thankyou-main-text ty-text"]'} 

  }
  
  export default ElementosCadEmpresa;