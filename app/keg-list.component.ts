import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div *ngFor ="let currentKeg of childKegList">
      <div class ="kegDiv">
        <h3>{{ currentKeg.name }} by {{ currentKeg.brand}}</h3>
        <h5>Cost: $\{{ currentKeg.price }} per keg. ($\{{ currentKeg.costPerPint }} per pint.)</h5>
        <h5>{{ currentKeg.abv}} percent alcohol.</h5>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
      </div>
    </div>

  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit)
  }
}
