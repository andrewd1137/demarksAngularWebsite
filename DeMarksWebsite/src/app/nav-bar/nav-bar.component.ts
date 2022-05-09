import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('navBarTrigger', [
        state('none, void', style({
          opacity: 0,
        })),
        state('maximum', style({
          opacity: 1
        })),
        transition('none => maximum', animate('2000ms'))
    ]),
  ] 
})

export class NavBarComponent implements AfterViewInit {
  state:string = 'none';

  constructor() { }

  ngAfterViewInit(): void {
    this.state = 'maximum';
  }

}
