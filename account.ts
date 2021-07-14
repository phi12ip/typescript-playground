export class Account {
  private balance: number;

  constructor(
    private userId: string,
    initialBalance: number,
  ) {
    this.balance = 0;
    if (initialBalance < 0) {
      throw new Error("Can not start with negative balance");
    }
  }

  withdraw(amount: number) {
    let currentBalance = this.balance;
    if (amount > currentBalance) {
      throw new Error("You can not withdraw more than you have");
    }

    this.balance -= amount;
  }

  deposit(amount: number) {
    if (amount < 0) {
      throw new Error("You can not deposit a negative amount");
    }
  }
}
