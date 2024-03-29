import { transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { fadeIn, flipInX, rubberBand, slideInLeft, slideInRight } from 'ng-animate';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('flipInState', [
      transition('* => *', useAnimation(flipInX, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ]),
    trigger('slideInLeft', [
      transition('* => *', useAnimation(slideInLeft, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ]),
    trigger('slideInRight', [
      transition('* => *', useAnimation(slideInRight, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ]),
    trigger('fadeInState', [
      transition('* => *', useAnimation(fadeIn, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1 }
      }))
    ])
  ] 
})

export class AboutComponent implements OnInit, AfterViewInit {
  transition:boolean = false;
  fadeIn:string = 'none';
  index:number = 1;

  active1:boolean = false;
  active2:boolean = false;
  active3:boolean = false;
  active4:boolean = false;
  active5:boolean = false;

  aboutMeList: any = [];

  displayText:string = "";
  aboutMeTitle:string = "";
  headingImage:string = "";

  aboutMeImg:string = "../assets/images/homeandabout/holyland.jpg";
  aboutMe:string = "I am a software developer that currently lives on the East Coast of the US. I really enjoy web development. " +
  "I enjoy making website and web applications (which shouldn't be much of a surprise). When I'm " +
  "not banging my head against my desk debugging...I mean coding, I'm usually either at that same desk playing video games, playing piano, bowling, scuba diving, or " +
  "on the occasional adventure.";

  alwaysLearningImg:string = "../assets/images/homeandabout/scuba.PNG";
  alwaysLearning:string = "Apart from being a software developer in an ever changing field, I also enjoy trying out new things. I recently " +
  "started bowling in late 2020. I play piano and take weekly lessons. I learned how to scuba dive in 2022 and plan to continue my " +
  "certifications and experience. I also plan to one day learn how to skydive and how to fly a plane.";

  travelingImg:string = "../assets/images/homeandabout/grandCanyon.jpg";
  traveling:string = "I love to travel. I hope to one day visit: Thailand, Australia, Japan, Italy, and Hawaii. The most exciting place I Have " +
  "been to in the past 5 years was Sedona, Arizona. There are a " +
  "ton of stores you can go to find cool artwork. My favorite things I got to do there were: find and hold a tarantula " +
  "(you read that right), visit the Grand Canyon, go horseback riding, go on a Pink Jeep Tour, and hike." +
  "channel!";

  lifeGoalImg:string = "../assets/images/homeandabout/astronautguy.jpg";
  lifeGoal:string = "If you don't know me, my life goal is to be an Astronaut. I even have a huge astronaut tattooed on my thigh. " +
  "The coolest thing to me would be seeing humans living on Mars. " + 
  "I actually made use of NASA's Open APIs "; 

  videoGamesImg:string = "../assets/images/homeandabout/littlegamer.jpg"
  videoGames:string = "Have been playing them since I was little. " + 
  "Some of my favorite games of all time include: Super Monkey Ball (1 & 2), Mariokart, Super Smash Bros (Melee & Ultimate), " +
  "Call of Duty (from WaW -> BO3), Battlefield (3 & 4), League of legends, Counter Strike Global Offensive, and Minecraft. I also " +
  "used to play a lot of battle royal games and I always enjoy a fun party game.";

  constructor() { }
  ngAfterViewInit(): void {
    this.transition = true;
    this.fadeIn = 'maximum';
  }
  ngOnInit(): void 
  {
    //will display the default about me text;
    this.showText(1);
    AOS.init();
    this.populateAboutMe();
  }

  resetActives()
  {
    this.transition = !this.transition;
    this.active1 = false;
    this.active2 = false;
    this.active3 = false;
    this.active4 = false;
    this.active5 = false;
  }

  populateAboutMe()
  {
    this.aboutMeList = [
      {
        displayText: this.aboutMe, 
        boutMeTitle: "About Me",
        headingImage: this.aboutMeImg,
        astronaut: false
      },
      {
        displayText: this.alwaysLearning, 
        boutMeTitle: "Always Learning",
        headingImage: this.alwaysLearningImg,
        astronaut: false
      },
      {
        displayText: this.traveling, 
        boutMeTitle: "Traveling",
        headingImage: this.travelingImg,
        astronaut: false
      },
      {
        displayText: this.lifeGoal, 
        boutMeTitle: "Life Goal",
        headingImage: this.lifeGoalImg,
        astronaut: true
      },
      {
        displayText: this.videoGames, 
        boutMeTitle: "I Love Video Games",
        headingImage: this.videoGamesImg,
        astronaut: false
      },
    ]
  }

  showText(textNum:number)
  {
    switch(textNum)
    {
      case 1: 
      { 
        this.displayText = this.aboutMe; 
        this.aboutMeTitle = "About Me"; 
        this.headingImage = this.aboutMeImg;
        this.resetActives(); 
        this.active1 = true; 
        break; 
      }
      case 2: 
      { 
        this.displayText = this.alwaysLearning; 
        this.aboutMeTitle = "Always Learning"; 
        this.headingImage = this.alwaysLearningImg;
        this.resetActives(); 
        this.active2 = true; 
        break; 
      }
      case 3: 
      { 
        this.displayText = this.traveling; 
        this.aboutMeTitle = "Traveling"; 
        this.headingImage = this.travelingImg;
        this.resetActives(); 
        this.active3 = true; 
        break; 
      }
      case 4: 
      { 
        this.displayText = this.lifeGoal; 
        this.aboutMeTitle = "Life Goal"; 
        this.headingImage = this.lifeGoalImg;
        this.resetActives();
        this.active4 = true;  
        break; 
      }
      case 5: 
      { 
        this.displayText = this.videoGames; 
        this.aboutMeTitle = "I Love Video Games"; 
        this.headingImage = this.videoGamesImg;
        this.resetActives();
        this.active5 = true;  
        break; 
      }
    }
  }
}
