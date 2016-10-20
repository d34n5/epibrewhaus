import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onFullnessChange($event.target.value)">
      <option value="all" selected="selected">Show All Kegs</option>
      <option value="low">Show Low Kegs</option>
      <option value="full">Show Non-Low Kegs </option>
    </select>
    <select (change)="onPriceChange($event.target.value)">
      <option value="all" selected="selected">Show All Kegs</option>
      <option value="cheap">Show Cheap Kegs</option>
      <option value="medium">Show Medium-Priced Kegs </option>
      <option value="expensive">Show Expensive Kegs </option>
    </select>
    <div *ngFor ="let currentKeg of childKegList | PintsRemaining:selectedFullness | sortPrice:priceRange">
      <div class ="kegDiv">
        <h3>{{ currentKeg.name }} by {{ currentKeg.brand}}</h3>
        <h5 [style.color]="currentKeg.priceColor">Cost: $\{{ currentKeg.price }} per keg. ($\{{ currentKeg.costPerPint }} per pint.)</h5>
        <h5 [style.color]="currentKeg.ABVColor">{{ currentKeg.abv}} percent alcohol.</h5>
        <h4>{{ currentKeg.pintsLeft}} pints remaining in keg.</h4>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
        <button (click)="soldButtonHasBeenClicked(currentKeg)">SOLD A PINT</button>
      </div>
    </div>
    `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() sellClickSender = new EventEmitter();
  public selectedFullness: string = "all";
  public priceRange: string = "all";
  onFullnessChange(optionFromMenu){
    this.selectedFullness = optionFromMenu;
    }
  onPriceChange(optionFromMenu){
    this.priceRange = optionFromMenu;
  }
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit)
  }
  soldButtonHasBeenClicked(pintToSell: Keg) {
    this.sellClickSender.emit(pintToSell)
  }
  // soldButtonHasBeenClicked(pintSold: Keg){
  //   pintSold.pintsLeft--;
  // }
}
