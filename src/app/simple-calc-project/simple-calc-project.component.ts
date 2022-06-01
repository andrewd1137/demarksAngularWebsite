import { transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-simple-calc-project',
  templateUrl: './simple-calc-project.component.html',
  styleUrls: ['./simple-calc-project.component.css'],
  animations: [
    trigger('fadeInState', [
      transition('void => *', useAnimation(fadeIn, {
        params: { timing: 1 }
      }))
    ])
  ]
})
export class SimpleCalcProjectComponent implements AfterViewInit {
  transition: string = 'none';
  calculatorScriptElement: HTMLScriptElement; 

  constructor() {
    //append the calcMain.js to the current html page so that the live demo works.
    this.calculatorScriptElement = document.createElement("script");
    this.calculatorScriptElement.src = "../assets/calcprojectjs/calcMain.js";
    document.body.appendChild(this.calculatorScriptElement);
   }


  ngAfterViewInit(): void {
    this.transition = 'none';
  }
}
