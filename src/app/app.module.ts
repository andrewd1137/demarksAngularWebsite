import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NgChartsModule } from 'ng2-charts';
import { AboutMePieComponent } from './about-me-pie/about-me-pie.component';
import { My2centsComponent } from './my2cents/my2cents.component';
import { SimpleCalcProjectComponent } from './simple-calc-project/simple-calc-project.component';
import { MarsApiProjComponent } from './mars-api-proj/mars-api-proj.component';
import { PaintballStoreProjComponent } from './paintball-store-proj/paintball-store-proj.component';
import { TicTacToeProjComponent } from './tic-tac-toe-proj/tic-tac-toe-proj.component';
import { LinkedListQueueComponent } from './linked-list-queue/linked-list-queue.component';
import { GcdCalculatorComponent } from './gcd-calculator/gcd-calculator.component';
import { MiniWebPackComponent } from './mini-web-pack/mini-web-pack.component';
import { ArduinoLightSwitchComponent } from './arduino-light-switch/arduino-light-switch.component';
import { ErrorComponent } from './error/error.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutMePhonePieComponent } from './about-me-phone-pie/about-me-phone-pie.component';

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
    PaintballStoreProjComponent,
    TicTacToeProjComponent,
    LinkedListQueueComponent,
    GcdCalculatorComponent,
    MiniWebPackComponent,
    ArduinoLightSwitchComponent,
    ErrorComponent,
    AboutMePhonePieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule,
    NgbModule,
    NgChartsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
