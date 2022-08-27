import { AfterViewInit, Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-about-me-phone-pie',
  templateUrl: './about-me-phone-pie.component.html',
  styleUrls: ['./about-me-phone-pie.component.css'],
    animations: [
      trigger('fadeIn', [
        transition('void => *', useAnimation(fadeIn, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1 }
        }))
      ]),
      trigger('flipState', [
        transition('void => *', useAnimation(fadeIn, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 2 }
        }))
      ]),
    ]
  })
  export class AboutMePhonePieComponent implements AfterViewInit{
    transition:string = 'none';
    showGamer:boolean = false;
    showDeveloper:boolean = false;
    showAdventurer:boolean = true;

    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    //For Rest of page

    //For the chart
    public pieChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top',
        },
        datalabels: {
          formatter: (value, ctx) => {
            if (ctx.chart.data.labels) {
              return ctx.chart.data.labels[ctx.dataIndex];
            }
          },
        },
      }
    };

    public pieChartData: ChartData<'pie', number[], string | string[]> = {
      labels: [ ['Developer'], ['Adventurer'], ['Gamer'] ],
      datasets: [ {
        data: [ 3, 3, 3 ],
        backgroundColor: [ 'lightgray', 'darkgray', 'black' ],
        hoverBackgroundColor: [ 'white' ],
        hoverBorderColor: [ 'white' ],
        borderColor: [ 'black' ],
      } ]
    };
    public pieChartType: ChartType = 'pie';
    public pieChartPlugins = [ DatalabelsPlugin ];
    
    // events
    public chartClicked(event:any): void {
      switch(event.active[0].index)
      {
        case 0:
        {
          this.showGamer = false;
          this.showDeveloper = true;
          this.showAdventurer = false;
          break;
        }
        case 1:
        {
          this.showGamer = false;
          this.showDeveloper = false;
          this.showAdventurer = true;
          break;
        }
        case 2:
        {
          this.showGamer = true;
          this.showDeveloper = false;
          this.showAdventurer = false;
          break;
        }
      }
    }

    ngAfterViewInit(): void {
      this.transition = 'none';
    }

}