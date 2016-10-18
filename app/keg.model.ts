export class Keg {
  public pintsLeft: number = 124;
  public costPerPint: number = this.price/124;
  constructor(public name: string, public brand: string, public price: number, public abv: number ) { }
}
