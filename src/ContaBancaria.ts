export class ContaBancaria {
  private numeroConta: string;
  private titular: string;
  protected saldo: number;
  constructor(numeroConta: string, titular: string) {
    ((this.numeroConta = numeroConta),
      (this.titular = titular),
      (this.saldo = 0));
  }
  getNumeroConta(): string {
    return this.numeroConta;
  }
  getTitular(): string {
    return this.titular;
  }
  setTitular(novoNome: string): void {
    this.titular = novoNome;
  }
  getSaldo(): number {
    return this.saldo;
  }
  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }
  sacar(valor: number): boolean {
    let ok: boolean = false;
    if (this.saldo >= valor) {
      this.saldo = this.saldo - valor;
      ok = true;
    }
    return ok;
  }
  apresentarDados(): void {
    console.log(
      `Numero conta: ${this.numeroConta} \n Nome titular: ${this.titular} \n Saldo atual: ${this.saldo}`,
    );
  }
}
