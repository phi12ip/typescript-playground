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
}

class Seller extends Employee {

  sellStock(symbol: string, shares: number) {
    console.log(`Selling ${shares} of ${symbol}`);
    this.reportToCompliance(symbol, shares);
  }

  private reportToCompliance(symbol: string, shares: number) {
    console.log(
      `${this.lastName} from ${this.department} sold ${shares} of ${symbol}`,
    );
  }
  
}
