import { Component, OnInit } from '@angular/core';
import { TopOfPageService } from '../services/top-of-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private topService: TopOfPageService) { }

  toggle()
  {
    this.topService.toTopOfPage();
  }

  ngOnInit(): void {
  }

}
