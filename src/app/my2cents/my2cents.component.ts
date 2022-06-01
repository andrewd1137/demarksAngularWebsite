import { transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fadeIn, zoomIn } from 'ng-animate';

@Component({
  selector: 'app-my2cents',
  templateUrl: './my2cents.component.html',
  styleUrls: ['./my2cents.component.css'],
  animations: [
    trigger('fadeInState', [
      transition('void => *', useAnimation(fadeIn, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ])
  ]
})
export class My2centsComponent implements AfterViewInit {
  transition:string = 'none';

  constructor() { }

  ngAfterViewInit(): void {
    this.transition = 'none';
  }

}
