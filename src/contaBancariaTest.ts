import { Contas } from "./Contas";

const Conta = new Contas();

let opc: string | null;
do {
  opc = prompt(`
       Menu de opções
O programa deverá apresentar o seguinte menu:
1. Cadastrar conta.
2. Depositar.
3. Sacar.
4. Exibir saldo.
5. Alterar titular.
6. Exibir dados da conta.
7. Apresentar todas as contas.
8. Apresentar contas com saldo maior que um valor.
9. Apresentar contas com saldo menor que um valor.
10. Apagar conta.
11. Finalizar.
`);
  switch (opc) {
    case "1":
      const numeroConta1 = prompt("Digite o numero da conta: ")!;
      const verificar1 = Conta.localizarConta(numeroConta1);
      if (verificar1 != null) {
        console.log("Não é possivel realizar o cadastro! ");
      } else {
        const titular = prompt("Digite o nome do titular: ")!;
        Conta.cadastrarConta(numeroConta1, titular);
        console.log(`Conta ${numeroConta1} criada com sucesso`);
      }
      break;
    case "2":
      Conta.apresentarContas();
      const numeroConta2 = prompt("Digite o numero da conta: ")!;
      const verificar2 = Conta.localizarConta(numeroConta2);
      if (verificar2 == null) {
        console.log(`Conta não encontrada!`);
      } else {
        const valorDeposito = parseFloat(
          prompt("Digite o valor a ser depositado")!,
        );
        if (valorDeposito > 0) {
          Conta.getConta()[verificar2].depositar(valorDeposito);
          //topissomemo
          console.log(`Valor depositado com sucesso!`);
        }
      }
      break;
    case "3":
      Conta.apresentarContas();
      const numeroConta3 = prompt("Digite o numero da conta: ")!;
      const verificar3 = Conta.localizarConta(numeroConta3);
      if (verificar3 == null) {
        console.log(`Conta não encontrada!`);
      } else {
        const valorSaque = parseFloat(prompt("Digite o valor a ser sacado!")!);
        if (valorSaque > 0 && Conta.getConta()[verificar3].getSaldo() >= valorSaque) {
          Conta.getConta()[verificar3].sacar(valorSaque);
          console.log("Valor retirado com sucesso!");
        } else {
          console.log('Não foi possível realizar a retirada! ')
        }
      }
      break;
    case "4":
      const numeroConta4 = prompt("Digite o numero da conta: ")!;
      const verificar4 = Conta.localizarConta(numeroConta4);
      if (verificar4 == null) {
        console.log("Conta não encontrada! ");
      } else {
        let valorSaldo = Conta.getConta()[verificar4].getSaldo();
        console.log("Valor total: " + valorSaldo);
      }
      break;
    case "5":
      const numeroConta5 = prompt("Digite o numero da conta: ")!;
      const verificar5 = Conta.localizarConta(numeroConta5);
      if (verificar5 == null) {
        console.log("Conta não encontrada");
      } else {
        const novoNome = prompt("Digite o novo nome do titular! ")!;
        Conta.getConta()[verificar5].setTitular(novoNome);
        console.log(`Nome ${novoNome} alterado com sucesso! `);
      }
      break;
    case "6":
      const numeroConta6 = prompt("Digite o numero da conta: ")!;
      const verificar6 = Conta.localizarConta(numeroConta6);
      if (verificar6 == null) {
        console.log("Conta não encontrada!");
      } else {
        Conta.getConta()[verificar6].apresentarDados();
      }
      break;
    case "7":
      Conta.apresentarContas();
      break;
    case "8":
      const valorMaior = parseFloat(
        prompt("Digite o valor para saber as contas maiores: ")!,
      );
      Conta.apresentarContasSaldoMaiorQue(valorMaior);
      break;
    case "9":
      const valorMenor = parseFloat(
        prompt("Digite o valor para saber as contas menores: ")!,
      );
      Conta.apresentarContasSaldoMenorQue(valorMenor);
      break;
    case "10":
      const numeroContaApagar = prompt(
        "Digite o numero da conta que você deseja apagar: ",
      )!;
      let contaApagada = Conta.apagarConta(numeroContaApagar);
      if (contaApagada == true) {
        console.log("Conta apagada com sucesso!");
      } else {
        console.log("Conta não encontrada");
      }
      break;
    default:
      console.log('Digite um prompt válido!');
  }
} while (opc !== "11");
