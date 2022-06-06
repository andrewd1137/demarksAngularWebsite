import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopOfPageService {

  constructor() { }

  toTopOfPage()
  {
    var scrollElem = document.querySelector('#moveTop');
    scrollElem?.scrollIntoView();
  }

}
