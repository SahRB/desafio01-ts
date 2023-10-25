import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {
  
    deposit = (amount: number): void => {
      if (this.validateStatus()) {
        this.balance += amount + 10;
        console.log(`Você depositou ${amount} (com bônus de 10)`);
      }
    }
  }
  