import { transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-gcd-calculator',
  templateUrl: './gcd-calculator.component.html',
  styleUrls: ['./gcd-calculator.component.css'],
  animations: [
    trigger('fadeInState', [
      transition('void => *', useAnimation(fadeIn, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ])
  ]
})
export class GcdCalculatorComponent implements AfterViewInit {
  transition:string = 'none';

  constructor() { }

  ngAfterViewInit(): void {
    this.transition = 'none';
  }

}
