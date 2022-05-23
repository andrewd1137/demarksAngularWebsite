import { AfterViewInit, Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounceInLeft, bounceInRight, fadeIn, flash, jackInTheBox, jello, pulse, rubberBand, shake, tada } from 'ng-animate';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  animations: [
    trigger('jelloState', [
      transition('* => *', useAnimation(jello, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ]),
    trigger('shakeState', [
      transition('* => *', useAnimation(shake, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ]),
    trigger('jackInTheBoxState', [
      transition('* => *', useAnimation(jackInTheBox, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ]),
    trigger('flashState', [
      transition('* => *', useAnimation(flash, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
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
export class ErrorComponent implements AfterViewInit {
  transition:string = 'none';
  fadeIn:string = 'none';

  //Booleans for Error sate
  changeErrorText4:boolean = false; //4
  changeErrorText0:boolean = false; //0
  changeErrorText41:boolean = false; //4
  changeErrorTextP:boolean = false; //P
  changeErrorTextA:boolean = false; //a
  changeErrorTextG:boolean = false; //g
  changeErrorTextE:boolean = false;//e
  changeErrorTextN:boolean = false; //N
  changeErrorTextO:boolean = false; //o
  changeErrorTextT:boolean = false;//t
  changeErrorTextF:boolean = false; //F
  changeErrorTextO1:boolean = false; //o
  changeErrorTextU:boolean = false; //u
  changeErrorTextN1:boolean = false; //n2
  changeErrorTextD:boolean = false; //d
  changeErrorTextExclamation:boolean = false; //!


  constructor() { }
  
  ngAfterViewInit(): void {
    this.transition = 'none';
  }

  //All the states for '404 Page Not Found' word on home page
  get ErrorState4()
  {
    return this.changeErrorText4 ? 'none' : 'maximum';
  }

  get ErrorState0()
  {
    return this.changeErrorText0 ? 'none' : 'maximum';
  }

  get ErrorState41()
  {
    return this.changeErrorText41 ? 'none' : 'maximum';
  }

  get ErrorStateP()
  {
    return this.changeErrorTextP ? 'none' : 'maximum';
  }

  get ErrorStateA()
  {
    return this.changeErrorTextA ? 'none' : 'maximum';
  }

  get ErrorStateG()
  {
    return this.changeErrorTextG ? 'none' : 'maximum';
  }

  get ErrorStateE()
  {
    return this.changeErrorTextE ? 'none' : 'maximum';
  }

  get ErrorStateN()
  {
    return this.changeErrorTextN ? 'none' : 'maximum';
  }
  
  get ErrorStateO()
  {
    return this.changeErrorTextO ? 'none' : 'maximum';
  }

  get ErrorStateT()
  {
    return this.changeErrorTextT ? 'none' : 'maximum';
  }

  get ErrorStateF()
  {
    return this.changeErrorTextF ? 'none' : 'maximum';
  }

  get ErrorStateO1()
  {
    return this.changeErrorTextO1 ? 'none' : 'maximum';
  }

  get ErrorStateU()
  {
    return this.changeErrorTextU ? 'none' : 'maximum';
  }

  get ErrorStateN1()
  {
    return this.changeErrorTextN1 ? 'none' : 'maximum';
  }

  get ErrorStateD()
  {
    return this.changeErrorTextD ? 'none' : 'maximum';
  }

  get ErrorStateExclamation()
  {
    return this.changeErrorTextExclamation ? 'none' : 'maximum';
  }

}
