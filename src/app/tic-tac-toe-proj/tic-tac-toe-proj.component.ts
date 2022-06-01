import { transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-tic-tac-toe-proj',
  templateUrl: './tic-tac-toe-proj.component.html',
  styleUrls: ['./tic-tac-toe-proj.component.css'],
  animations: [
    trigger('fadeInState', [
      transition('void => *', useAnimation(fadeIn, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ])
  ]
})
export class TicTacToeProjComponent implements AfterViewInit {
  transition:string = 'none';

  constructor() { }

  ngAfterViewInit(): void {
    this.transition = 'none';
  }

}
