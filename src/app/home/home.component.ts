import { AfterViewInit, Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounceInLeft, bounceInRight, fadeIn, rubberBand, tada } from 'ng-animate';
import * as AOS from "aos"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('rubberBandState', [
      transition('* => *', useAnimation(rubberBand, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ]),
    trigger('tadaState', [
      transition('* => *', useAnimation(tada, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ]),
    trigger('transitionLeftState', [
      transition('void => *', useAnimation(bounceInLeft, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 5 }
      }))
    ]),
    trigger('transitionRightState', [
      transition('void => *', useAnimation(bounceInRight, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 5 }
      }))
    ]),
    trigger('fadeInState', [
      transition('void => *', useAnimation(fadeIn, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ])
  ] 
})
export class HomeComponent implements AfterViewInit, OnInit{
  alertMessage: boolean = true;
  
  transition:string = 'none';
  fadeIn:string = 'none';

  //Booleans for Adventure sate
  changeAdventureTextA:boolean = false; //A
  changeAdventureTextD:boolean = false; //d
  changeAdventureTextV:boolean = false; //v
  changeAdventureTextE:boolean = false; //e
  changeAdventureTextN:boolean = false; //n
  changeAdventureTextT:boolean = false; //t
  changeAdventureTextU1:boolean = false;//u1
  changeAdventureTextR:boolean = false; //r
  changeAdventureTextO:boolean = false; //o
  changeAdventureTextU2:boolean = false;//u2
  changeAdventureTextS:boolean = false; //s

  //Booleans for Developer state
  changeDeveloperTextD:boolean = false; //D
  changeDeveloperTextE1:boolean = false; //e1
  changeDeveloperTextV:boolean = false; //v
  changeDeveloperTextE2:boolean = false; //e2
  changeDeveloperTextL:boolean = false; //l
  changeDeveloperTextO:boolean = false; //o
  changeDeveloperTextP:boolean = false; //p
  changeDeveloperTextE3:boolean = false; //e3
  changeDeveloperTextR:boolean = false; //r


  constructor() { }
  
  ngOnInit(): void {
    AOS.init();
    alert("I am Currently adding new and onscroll animations to the page. Site might be a little buggy especially on a phone/tablet. Don't hate on me :)");
  }

  ngAfterViewInit(): void {
    this.transition = 'none';
    this.alertMessage = true;
  }

  showHideAlert() {
    this.alertMessage = false;
  }
  
  //All the states for 'Adventuruous' word on home page
  get adventureStateA()
  {
    return this.changeAdventureTextA ? 'none' : 'maximum';
  }

  get adventureStateD()
  {
    return this.changeAdventureTextD ? 'none' : 'maximum';
  }

  get adventureStateV()
  {
    return this.changeAdventureTextV ? 'none' : 'maximum';
  }

  get adventureStateE()
  {
    return this.changeAdventureTextE ? 'none' : 'maximum';
  }

  get adventureStateN()
  {
    return this.changeAdventureTextN ? 'none' : 'maximum';
  }

  get adventureStateT()
  {
    return this.changeAdventureTextT ? 'none' : 'maximum';
  }

  get adventureStateU1()
  {
    return this.changeAdventureTextU1 ? 'none' : 'maximum';
  }

  get adventureStateR()
  {
    return this.changeAdventureTextR ? 'none' : 'maximum';
  }
  
  get adventureStateO()
  {
    return this.changeAdventureTextO ? 'none' : 'maximum';
  }

  get adventureStateU2()
  {
    return this.changeAdventureTextU2 ? 'none' : 'maximum';
  }

  get adventureStateS()
  {
    return this.changeAdventureTextS ? 'none' : 'maximum';
  }

  // All the states for the 'developer' word on home page
  get developerStateD()
  {
    return this.changeDeveloperTextD ? 'none' : 'maximum';
  }

  get developerStateE1()
  {
    return this.changeDeveloperTextE1 ? 'none' : 'maximum';
  }

  get developerStateV()
  {
    return this.changeDeveloperTextV ? 'none' : 'maximum';
  }

  get developerStateE2()
  {
    return this.changeDeveloperTextE2 ? 'none' : 'maximum';
  }

  get developerStateL()
  {
    return this.changeDeveloperTextL ? 'none' : 'maximum';
  }

  get developerStateO()
  {
    return this.changeDeveloperTextO ? 'none' : 'maximum';
  }

  get developerStateP()
  {
    return this.changeDeveloperTextP ? 'none' : 'maximum';
  }

  get developerStateE3()
  {
    return this.changeDeveloperTextE3 ? 'none' : 'maximum';
  }

  get developerStateR()
  {
    return this.changeDeveloperTextR ? 'none' : 'maximum';
  }

}
