<?php

header("Content-type: text/plain");

class Financing {
    
private $agencia;
private $ano;
private $bairro;
private $bairroEmpresa;
private $banco;
private $beneficio;
private $cep;
private $cepEmpresa;
private $cidade;
private $cidadeEmpresa;
private $clienteDesde;
private $cnh;
private $cnpj;
private $contaCorrente;
private $cor;
private $cpf;
private $dataEmissao;
private $dataNascimento;
private $email;
private $empresa;
private $enderecoComercial;
private $enderecoResidencial;
private $estado;
private $estadoCivil;
private $estadoEmpresa;
private $funcao;
private $grauParentescoDois;
private $grauParentescoUm;
private $marcaModelo;
private $nacionalidade;
private $nome;
private $naturalidade;
private $nomeContador;
private $nomeMae;
private $nomePai;
private $nomeReferenciaDois;
private $nomeReferenciaUm;
private $numeroComplemento;
private $numeroComplementoEmpresa;
private $numeroParcela;
private $ocupacao;
private $orgaoEmissor;
private $origem;
private $placa;
private $ramalEmpresa;
private $renda;
private $rendimento;
private $resideDesde;
private $rg;
private $sexo;
private $telefoneCelular;
private $telefoneContador;
private $telefoneEmpresa;
private $telefoneFixoDois;
private $telefoneFixoUm;
private $telefoneResidencial;
private $tempoServico;
private $tipoEmpresa;
private $valorEntrada;

//Data e contato

private $dataEntrada;

    public function __construct($data){
        $this->agencia = $data->{'agencia'};
        $this->ano = $data->{'ano'};
        $this->bairro = $data->{'bairro'};
        $this->bairroEmpresa = $data->{'bairroEmpresa'};
        $this->banco = $data->{'banco'};
        $this->beneficio = $data->{'beneficio'};
        $this->cep  = $data->{'cep'};
        $this->cepEmpresa = $data->{'cepEmpresa'};
        $this->cidade = $data->{'cidade'};
        $this->cidadeEmpresa = $data->{'cidadeEmpresa'};
        $this->clienteDesde = $data->{'clienteDesde'};
        $this->cnh = $data->{'cnh'};
        $this->cnpj = $data->{'cnpj'};
        $this->contaCorrente = $data->{'contaCorrente'};
        $this->cor = $data->{'cor'};
        $this->cpf = $data->{'cpf'};
        $this->dataEmissao = $data->{'dataEmissao'};
        $this->dataNascimento = $data->{'dataNascimento'};
        $this->email = $data->{'email'};
        $this->empresa = $data->{'empresa'};
        $this->enderecoComercial = $data->{'enderecoComercial'};
        $this->enderecoResidencial = $data->{'enderecoResidencial'};
        $this->estado = $data->{'estado'};
        $this->estadoCivil = $data->{'estadoCivil'};
        $this->estadoEmpresa = $data->{'estadoEmpresa'};
        $this->funcao = $data-> {'funcao'};
        $this->grauParentescoDois = $data->{'grauParentescoDois'};
        $this->grauParentescoUm = $data->{'grauParentescoUm'};
        $this->marcaModelo = $data->{'marcaModelo'};
        $this->nacionalidade = $data->{'nacionalidade'};
        $this->nome = $data->{'name'};
        $this->naturalidade = $data->{'naturalidade'};
        $this->nomeContador = $data->{'nomeContador'};
        $this->nomeMae = $data->{'nomeMae'};
        $this->nomePai = $data-> {'nomePai'};
        $this->nomeReferenciaDois = $data->{'nomeRefenrenciaDois'};
        $this->nomeReferenciaUm = $data->{'nomeReferenciaUm'};
        $this->numeroComplemento = $data->{'numeroComplemento'};
        $this->numeroComplementoEmpresa = $data->{'numeroComplementoEmpresa'};
        $this->numeroParcela = $data->{'numeroParcela'};
        $this->ocupacao = $data->{'ocupacao'};
        $this->orgaoEmissor = $data->{'orgaoEmissor'};
        $this->origem = $data->{'origem'};
        $this->placa = $data->{'placa'};
        $this->ramalEmpresa = $data->{'ramalEmpresa'};
        $this->renda = $data->{'renda'};
        $this->rendimento = $data->{'rendimento'};
        $this->resideDesde = $data->{'resideDesde'};
        $this->rg = $data->{'rg'};
        $this->sexo = $data->{'sexo'};
        $this->telefoneCelular = $data->{'telefoneCelular'};
        $this->telefoneContador = $data->{'telefoneContador'};
        $this->telefoneEmpresa = $data->{'telefoneEmpresa'};
        $this->telefoneFixoDois = $data->{'telefoneFixoDois'};
        $this->telefoneFixoUm = $data-> {'telefoneFixoUm'};
        $this->telefoneResidencial = $data->{'telefoneResidencial'};
        $this->tempoServico = $data->{'tempoServico'};
        $this->tipoEmpresa = $data->{'tipoEmpresa'};
        $this->valorEntrada = $data->{'valorEntrada'};
        $this->dataEntrada = new DateTime();

    }


}