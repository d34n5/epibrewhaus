import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All Kegs</option>
      <option value="low">Show Low Kegs</option>
      <option value="full">Show Non-Low Kegs </option>
    </select>
    <div *ngFor ="let currentKeg of childKegList | PintsRemaining:selectedFullness">
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
  onChange(optionFromMenu){
    this.selectedFullness = optionFromMenu;
    console.log(this.selectedFullness);
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
