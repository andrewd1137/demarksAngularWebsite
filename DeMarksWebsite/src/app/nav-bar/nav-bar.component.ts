import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
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

  constructor() { }

  toggle()
  {
    this.state = !this.state;
  }

}
