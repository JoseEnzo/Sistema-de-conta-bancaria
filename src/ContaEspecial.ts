import { ContaBancaria } from "./ContaBancaria";

export class ContaEspecial extends ContaBancaria {
    private limite: number;

    constructor(numeroConta: string, titular: string, limite: number){
        super(numeroConta, titular);
        this.limite = limite
    }
    sacar(valor: number): boolean {
        let ok: boolean = false
        if(this.saldo >= valor + this.limite){
            this.saldo = this.saldo - valor
            ok = true
        }
        return ok
    }
}