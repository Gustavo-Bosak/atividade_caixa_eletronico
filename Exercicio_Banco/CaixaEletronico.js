var saldo = 100.50;

function inicio() {
    var escolha = parseInt(prompt('Selecione uma opção\n1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair'));
    switch(escolha) {
        case 1:
            ver_saldo();
            break;
        case 2:
            ver_extrato();
            break;
        case 3:
            fazer_saque();
            break;
        case 4:
            fazer_deposito();
            break;
        case 5:
            fazer_transferencia();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
            break;
    }
}

function ver_saldo() {
    alert('Seu saldo atual é: ' + saldo);
    inicio();
}

function ver_extrato() {
    alert('Seu extrato atual é:' + extrato);
    inicio();
}

function fazer_saque() {
    var senha = Number(prompt('Informe a senha para acessar essa operação'));

    if (senha === 3589) {
        var saque = Number(prompt('Qual o valor para saque?'));
        if (isNaN(saque) || saque === '' || saque <= 0 || saque > saldo) {
            alert('Operação não autorizada');
            fazer_saque();
        } else {
            saldo -= saque;
            alert('Operação concluída.');
            extrato.push('\nSaque: -' + saque);
            ver_saldo();
        }
    } else {
        alert('Senha incorreta. Operação não autorizada');
        inicio();
    }
}

function fazer_deposito() {
    var senha = Number(prompt('Informe a senha para acessar essa operação'));

    if (senha === 3589) {
        var deposito = Number(prompt('Qual o valor para depósito?'));
        if (isNaN(deposito) || deposito === '' || deposito <= 0) {
            alert('Operação não autorizada');
            fazer_deposito();
        } else {
            saldo += deposito;
            alert('Operação concluída.');
            extrato.push('\nDepósito: +' + deposito);
            ver_saldo();
        }
    } else {
        alert('Senha incorreta. Operação não autorizada');
        inicio();
    }
}

function fazer_transferencia() {
    var senha = Number(prompt('Informe a senha para acessar essa operação'));

    if (senha === 3589) {
        var transf = Number(prompt('Qual o valor para transferência?'));
        var conta = parseInt(prompt("Informe o número da conta que receberá esta transferência"));
        
        if (isNaN(transf) || transf === '' || transf <= 0 || transf > saldo) {
            alert('Operação não autorizada');
            fazer_transferencia();
        } else {
            saldo -= transf;
            alert('Operação concluída.');
            extrato.push('\nTransferência para a conta ' + conta + ': -' + transf);
            ver_saldo();
        }
    } else {
        alert('Senha incorreta. Operação não autorizada');
        inicio();
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(nome + ', foi um prazer ter você por aqui!');
        window.close();
    } else {
        inicio();
    }
}

var nome = prompt('Saudações! Qual é o seu nome?');
alert('Olá ' + nome + ', é um prazer te ter como cliente');
var extrato = ['\nLoja Pantufas Microscópicas: -20', '\nDepósito da Conta 29899034880: +80', '\nMercado de frutas vermelhas: -15'];
inicio();