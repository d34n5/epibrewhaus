import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>EPIBREWHAUS</h1>
    <keg-list
        [childKegList]="masterKegList"
        (clickSender)="showDetails($event)"
      ></keg-list>
    <edit-keg
      [childSelectedKeg]="selectedKeg"
      (doneClickedSender)="finishedEditing()"
    ></edit-keg>
    <new-keg
      (newKegSender)="addKeg($event)"
    ></new-keg>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
      new Keg("Dean's DIPA", "Epibrewus", 744, 9),
      new Keg("Faux PBR", "Blake's Brews", 496, 5),
      new Keg("Lorem Ipsum Lager", "Epibrewus", 620, 7.5),
      new Keg("Pliny the Coder", "Epibrewus", 868, 8)
  ];
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }
  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
