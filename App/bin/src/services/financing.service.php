<?php


class FinancingService {

    public function __construct(){
    }

    public function SendMail($data){
        $entity = new Financing($data);
        $email_message = "Dados do Cliente";
        $email_message .= "Nome Cliente: ".$entity->nome."\n";
        $email_message .= "RG : ".$entity->rg."\n";
        $email_message .= "CPF : ".$entity->cpf."\n";
        $email_message .= "Endereço Pessoal : ".$entity->enderecoResidencial."\n";
        $email_message .= "Data Nascimento : ".$entity->dataNascimento."\n";
        $email_message .= "Naturalidade : ".$entity->naturalidade."\n";
        $email_message .= "Orgão Emissor : ".$entity->orgaoEmissor."\n";
        $email_message .= "Data Emissao : ".$entity->dataEmissao."\n";
        $email_message .= "Possui CNH : ".$entity->cnh."\n";
        $email_message .= "Sexo : ".$entity->sexo."\n";
        $email_message .= "Estado Civil : ".$entity->estadoCivil."\n";
        $email_message .= "Nacionalidade : ".$entity->nacionalidade."\n";
        $email_message .= "CEP : ".$entity->cep."\n";
        $email_message .= "Numero Complemento : ".$entity->numeroComplemento."\n";
        $email_message .= "Bairro : ".$entity->bairro."\n";
        $email_message .= "Estado : ".$entity->estado."\n";
        $email_message .= "Cidade : ".$entity->cidade."\n";
        $email_message .= "Reside Desde : ".$entity->resideDesde."\n";
        $email_message .= "E-mail : ".$entity->email."\n";
        $email_message .= "Telefone Residencial : ".$entity->telefoneResidencial."\n";
        $email_message .= "Telefone Celular : ".$entity->telefoneCelular."\n";
        $email_message .= "Nome Pai : ".$entity->nomePai."\n";
        $email_message .= "Nome Mae : ".$entity->nomeMae."\n";
        $email_message .= "Dados Comerciais\n";
        $email_message .= "Empresa : ".$entity->empresa."\n";
        $email_message .= "Tipo de Empresa : ".$entity->tipoEmpresa."\n";
        $email_message .= "Ocupacao : ".$entity->ocupacao."\n";
        $email_message .= "Funcao : ".$entity->funcao."\n";
        $email_message .= "Tempo de Servico : ".$entity->tempoServico."\n";
        $email_message .= "CNPJ : ".$entity->cnpj."\n";
        $email_message .= "CEP : ".$entity->cepEmpresa."\n";
        $email_message .= "Endereco Comercial : ".$entity->enderecoComercial."\n";
        $email_message .= "Numero Complemento : ".$entity->numeroComplementoEmpresa."\n";
        $email_message .= "Bairro Empresa : ".$entity->bairroEmpresa."\n";
        $email_message .= "Estado : ".$entity->estadoEmpresa."\n";
        $email_message .= "Cidade : ".$entity->cidadeEmpresa."\n";
        $email_message .= "Telefone : ".$entity->telefoneEmpresa."\n";
        $email_message .= "Ramal : ".$entity->ramal."\n";
        $email_message .= "Salario/Renda : ".$entity->renda."\n";
        $email_message .= "Outro Rendimentos : ".$entity->rendimento."\n";
        $email_message .= "Origem : ".$entity->origem."\n";
        $email_message .= "Aposentado/ Pensionista numero Beneficio : ".$entity->beneficio."\n";
        $email_message .= "Referencias Bancarias\n";
        $email_message .= "Banco : ".$entity->banco."\n";
        $email_message .= "Agencia : ".$entity->agencia."\n";
        $email_message .= "Conta Corrente : ".$entity->contaCorrente."\n";
        $email_message .= "Cliente Desde : ".$entity->clienteDesde."\n";
        $email_message .= "Referencias Pessoais\n";
        $email_message .= "Nome Completo : ".$entity->nomeReferenciaUm."\n";
        $email_message .= "Grau Parentesco : ".$entity->grauParentescoUm."\n";
        $email_message .= "Telefone Fixo : ".$entity->telefoneFixoUm."\n";
        $email_message .= "Nome Completo : ".$entity->nomeReferenciaDois."\n";
        $email_message .= "Grau Parentesco : ".$entity->grauParentescoDois."\n";
        $email_message .= "Telefone Fixo : ".$entity->telefoneFixoDois."\n";
        $email_message .= "Caso Empresario, Informe\n";
        $email_message .= "Nome Contador : ".$entity->nomeContador."\n";
        $email_message .= "Telefone : ".$entity->telefoneContafor."\n";
        $email_message .= "Especificacao do Financiamento\n";
        $email_message .= "Marca / Modelo : ".$entity->marcaModelo."\n";
        $email_message .= "Ano : ".$entity->ano."\n";
        $email_message .= "Cor : ".$entity->cor."\n";
        $email_message .= "Placa : ".$entity->placa."\n";
        $email_message .= "Valor de Entrada : ".$entity->valorEntrada."\n";
        $email_message .= "Numero de Parcelas : ".$entity->numeroParcela."\n";
        $email_message .= "DATA DE ENVIO DE CONTRATO : ".$entity->dataEntrada."\n";

        // create email headers
        $headers = 'From: '.$entity->email."\r\n".
        'Reply-To: '.$entity->email."\r\n" .
        'X-Mailer: PHP/' . phpversion();

        $email_to = "dnk_vip@hotmail.com";
        $email_subject = "Financiamento cliente ".$entity->nome;

        try { 
            
            @mail($email_to, $email_subject, $email_message, $headers);
            var_dump($email_message);
            return true;            
        
        } catch(Exception $e){
            
            return json_encode($e->getMessage(), 500);
        }
        
        return null;

    }


}