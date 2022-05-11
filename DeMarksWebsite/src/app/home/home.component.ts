import { AfterViewInit, Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('popOverState', [
        state('none, void', style({
          color: '#fff',
        })),
        state('maximum', style({
          color: "#000"
        })),
        transition('maximum => none', animate('1500ms'))
    ]),
    trigger('transitionLeftState', [
        transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate('1000ms')
        ])      
    ]),
    trigger('transitionRightState', [
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate('1000ms')
      ])      
  ])
  ] 
})
export class HomeComponent implements AfterViewInit{
  transition:string = 'none';

  changeAdventureText:boolean = false;
  changeDeveloperText:boolean = false;

  constructor() { }
  
  ngAfterViewInit(): void {
    //TODO: make this cause the boxes to animate onto the screen
    this.transition = 'none';
  }

  get adventureState()
  {
    return this.changeAdventureText ? 'none' : 'maximum';
  }

  get developerState()
  {
    return this.changeDeveloperText ? 'none' : 'maximum';
  }

  toggleAdventure()
  {
    this.changeAdventureText = !this.changeAdventureText;
  }

}
