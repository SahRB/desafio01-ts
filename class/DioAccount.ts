export abstract class DioAccount {
  protected name: string;
  protected readonly accountNumber: number;
  protected balance: number = 0;
  protected status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }
  
  getAccountNumber = (): number => {
    return this.accountNumber;
  }
  

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`Você depositou ${amount}`);
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Você sacou ${amount}`);
    } else {
      console.log("Saldo insuficiente ou conta inválida");
    }
  }

  getBalance = (): number => {
    return this.balance;
  }

validateStatus = (): boolean => {
    if (this.status) {
      return true;
    }
    throw new Error('Conta inválida');
  }
}
