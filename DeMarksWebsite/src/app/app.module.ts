import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NgChartsModule } from 'ng2-charts';
import { AboutMePieComponent } from './about-me-pie/about-me-pie.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { My2centsComponent } from './my2cents/my2cents.component';
import { SimpleCalcProjectComponent } from './simple-calc-project/simple-calc-project.component';
import { MarsApiProjComponent } from './mars-api-proj/mars-api-proj.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    PortfolioComponent,
    FooterComponent,
    AboutMePieComponent,
    My2centsComponent,
    SimpleCalcProjectComponent,
    MarsApiProjComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: "", component:HomeComponent},
      {path: "about", component:AboutComponent},
      {path: "education", component:EducationComponent},
      {path: "portfolio", component:PortfolioComponent},
      {path: "my2cents", component:My2centsComponent},
      {path: "calculator", component:SimpleCalcProjectComponent},
      {path: "marsproj", component:MarsApiProjComponent},
      //TODO: Make the * path direct them to a 404 not found page, rather than an error
      {path: "*", component:NotFoundError},
    ]),
    NgbModule,
    NgChartsModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
