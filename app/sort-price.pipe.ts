import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "sortPrice",
  pure: false
})

export class SortPricePipe implements PipeTransform {
  transform (input: Keg[], priceRange) {
    var output: Keg[] = [];
    if(priceRange === "cheap"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].costPerPint <= 4) {
          output.push(input[i]);
        }
      }  return output;
    } else if (priceRange === "medium"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].costPerPint > 4 && input[i].costPerPint < 6) {
          output.push(input[i]);
        }
      }  return output;
    } else if (priceRange === "expensive"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].costPerPint >= 6 ) {
          output.push(input[i]);
        }
      } return output;
    } else {
      return input;
    }
  }
}
