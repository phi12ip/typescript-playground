export abstract class Person {
    constructor(
      public firstName: string,
      public lastName: string,
      private age: number,
    ) {
    }
  
    sellStock(symbol: string, numberOfShares: number) {
      console.log(`Selling ${numberOfShares} of ${symbol}`);
    }
  }