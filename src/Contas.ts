import { ContaBancaria } from "./ContaBancaria";

export class Contas {
  private contas: ContaBancaria[];

  constructor() {
    this.contas = [];
  }
  getConta(){
    return this.contas
  }

  localizarConta(numeroConta: string): number | null {
    let i: number = 0;
    let posicao: number | null = null;
    let ok: boolean = false;
    while (i < this.contas.length && ok == false) {
      if (numeroConta == this.contas[i].getNumeroConta()) {
        posicao = i;
        ok = true;
      }
      i++;
    }
    return posicao;
  }

  
  cadastrarConta(numeroConta: string, titular: string): boolean {
    const posicaoVetor = this.localizarConta(numeroConta);
    if (posicaoVetor === null) {
      const novaConta = new ContaBancaria(numeroConta, titular);
      this.contas.push(novaConta);
      console.log(`Cadastro realizado com sucesso!`);
      return true;
    } else {
      console.log(`Conta ja cadastrada! ${this.contas[posicaoVetor]}`);
      return false;
    }
  }
  apresentarContas(): void {
    let i: number = 0;
    while (i < this.contas.length) {
      console.log(`${this.contas[i].apresentarDados()}`);
      i++;
    }
  }
  apresentarContasSaldoMaiorQue(valor: number): void {
    let i: number = 0;
    while (i < this.contas.length) {
      if (this.contas[i].getSaldo() > valor) {
        console.log(
          `Valor maior que o valor digitado: ${this.contas[i].apresentarDados()}`,
        );
      }
    }
  }
  apresentarContasSaldoMenorQue(valor: number): void {
    let i: number = 0;
    while (i < this.contas.length) {
      if (this.contas[i].getSaldo() < valor) {
        console.log(
          `Valor menor que o valor digitado: ${this.contas[i].apresentarDados()}`,
        );
      }
    }
  }
  getQuantidadeContas(): number {
    return this.contas.length;
  }
  apagarConta(numeroConta: string): boolean {
    const contaParaExcluir = this.localizarConta(numeroConta);
    let ok: boolean = false;
    if (contaParaExcluir !== null) {
      this.contas.splice(contaParaExcluir, 1);
      ok = true;
      console.log(`Sua conta foi apagada com sucesso!`);
    } else {
      console.log(`Erro ao apagar sua conta!`);
    }
    return ok;
  }
}
