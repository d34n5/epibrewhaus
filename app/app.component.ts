import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>EPIBREWHAUS</h1>
    <div *ngFor ="let currentKeg of kegs">
      <h3>{{ currentKeg.name }}</h3>
      <button (click)="showDetails(currentKeg)">Edit</button>
    </div>
    <div *ngIf="selectedKeg">
      <h2>Edit Keg</h2>
      <div>
        <label>Enter Keg Name</label>
        <input [(ngModel)] = "selectedKeg.description">
      </div>
      <div>
        <label>Enter Keg Brand</label>
        <input [(ngModel)] = "selectedKeg.brand">
      </div>
      <div>
        <label>Enter Keg Price</label>
        <input [(ngModel)] = "'$' + selectedKeg.price">
      </div>
      <div>
        <label>Enter Keg ABV</label>
        <input [(ngModel)] = "selectedKeg.abv">
        <button (click)="done()">Done</button>
      </div>
    </div>
  </div>
  `
})



export class AppComponent {
  public kegs: Keg[] = [
      new Keg("Dean's DIPA", "Epibrewus", 744, 9),
      new Keg("Faux PBR", "Blake's Brews", 496, 5),
      new Keg("Lorem Ipsum Lager", "Epibrewus", 620, 7.5),
      new Keg("Pliny the Coder", "Epibrewus", 868, 8)
  ];
  selectedKeg: Keg = this.kegs[0];
  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }
  done() {
    this.selectedKeg = null;
  }
}


export class Keg {
  public pintsLeft: number = 124;
  public costPerPint: number = this.price/124;
  constructor(public name: string, public brand: string, public price: number, public abv: number ) { }
}
