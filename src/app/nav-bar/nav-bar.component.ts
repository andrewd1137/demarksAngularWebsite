import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeInDown } from 'ng-animate';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('navBarTrigger', [
      transition('* => *', useAnimation(fadeInDown, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ])
  ] 
})

export class NavBarComponent {
  state:boolean = false;
  btnStyle:boolean = false;

  constructor() { }

  buttonOn()
  {
    this.btnStyle = true;
  }

  buttonOff()
  {
    this.btnStyle = false;
  }

  toggle()
  {
    this.state = !this.state;
  }

}
