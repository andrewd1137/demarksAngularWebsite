import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
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


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "education", component: EducationComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "my2cents", component: My2centsComponent },
  { path: "calculator", component: SimpleCalcProjectComponent },
  { path: "marsproj", component: MarsApiProjComponent },
  { path: "pbstoreproj", component: PaintballStoreProjComponent },
  { path: "tictactoeproj", component: TicTacToeProjComponent },
  { path: "linkedlistqueueproj", component: LinkedListQueueComponent },
  { path: "gcdcalc", component: GcdCalculatorComponent },
  { path: "miniwebpack", component: MiniWebPackComponent },
  { path: "arduinolightswitch", component: ArduinoLightSwitchComponent },
  { path: "**", pathMatch: 'full', component: ErrorComponent }
];

@NgModule({
  // this scrollPositionRestoration doesn't work...it's supposed to, but angular doesn't like me i guess.
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
