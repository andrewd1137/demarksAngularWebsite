import { transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-paintball-store-proj',
  templateUrl: './paintball-store-proj.component.html',
  styleUrls: ['./paintball-store-proj.component.css'],
  animations: [
    trigger('fadeInState', [
      transition('void => *', useAnimation(fadeIn, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ])
  ]
})
export class PaintballStoreProjComponent implements AfterViewInit {
  transition:string = 'none';

  constructor() { }

  ngAfterViewInit(): void {
    this.transition = 'none';  
  }

}
