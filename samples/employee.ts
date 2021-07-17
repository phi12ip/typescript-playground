import { Person } from "./person.ts";

export class Employee extends Person {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    public department: string,
  ) {
    super(firstName, lastName, age);
  }

  sellStock(symbol: string, shares: number) {
    super.sellStock(symbol, shares);

    this.reportToCompliance(symbol, shares);
  }

  private reportToCompliance(symbol: string, shares: number) {
    console.log(
      `${this.lastName} from ${this.department} sold ${shares} of ${symbol}`,
    );
  }
}