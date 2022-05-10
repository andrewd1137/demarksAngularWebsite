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
  ] 
})
export class HomeComponent implements AfterViewInit{

  changeAdventureText:boolean = false;
  changeDeveloperText:boolean = false;

  constructor() { }
  
  ngAfterViewInit(): void {
    //TODO: make this cause the boxes to animate onto the screen
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
