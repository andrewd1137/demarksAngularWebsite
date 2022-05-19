import { transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-mars-api-proj',
  templateUrl: './mars-api-proj.component.html',
  styleUrls: ['./mars-api-proj.component.css'],
  animations: [
    trigger('fadeInState', [
      transition('void => *', useAnimation(fadeIn, {
        params: { timing: 1 }
      }))
    ])
  ]
})
export class MarsApiProjComponent implements AfterViewInit {
  transition:string = 'none';

  constructor() { }

  ngAfterViewInit(): void {
    this.transition = 'none';
  }

}
