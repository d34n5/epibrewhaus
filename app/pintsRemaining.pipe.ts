
import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "PintsRemaining",
  pure: false
})
export class PintsRemainingPipe implements PipeTransform {
  transform(input: Keg[], selectedFullness) {
    var output: Keg[] = [];
    if (selectedFullness === "low") {
      for (var i=0; i<input.length; i++) {
        if (input[i].pintsLeft <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedFullness === "full") {
      for (var i=0; i<input.length; i++) {
        if (input[i].pintsLeft > 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
