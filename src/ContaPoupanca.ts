import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    aplicarRendimento(percentualRendimento: number): void {
        this.saldo = this.saldo + (this.saldo * percentualRendimento)
    }
}
