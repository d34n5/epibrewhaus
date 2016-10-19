export class Keg {
  public pintsLeft: number = 20;
  public costPerPint: number;
  public priceColor: string;
  public ABVColor: string;
  constructor(public name: string, public brand: string, public price: number, public abv: number ) {
    this.setCostPerPint();
    this.setPriceColor();
    this.setABVColor();
  }

  setCostPerPint() {
    this.costPerPint = parseFloat((this.price/124).toFixed(2));
  }

  setPriceColor() {
    if (this.costPerPint >= 6) {
      this.priceColor = "green"
    } else {
      this.priceColor = "brown"
    }
  }
  setABVColor() {
    if (this.abv > 7) {
      this.ABVColor = "orange"
    } else {
      this.ABVColor = "hotpink"
    }
  }
}
