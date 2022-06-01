import { AfterViewInit, Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeInLeft, fadeInRight, fadeInUp, flipInX, zoomIn } from 'ng-animate';

@Component({
    selector: 'app-about-me-pie',
    templateUrl: './about-me-pie.component.html',
    styleUrls: ['./about-me-pie.component.css'],
    animations: [
      trigger('fadeInLeft', [
        transition('void => *', useAnimation(fadeInLeft, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1 }
        }))
      ]),
      trigger('fadeInRight', [
        transition('void => *', useAnimation(fadeInRight, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1 }
        }))
      ]),
      trigger('fadeInUp', [
        transition('void => *', useAnimation(fadeInUp, {
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
  export class AboutMePieComponent implements AfterViewInit{
    transition:string = 'none';

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
      labels: [ ['Developer'], ['Gamer'], ['Adventurer'] ],
      datasets: [ {
        data: [ 3, 3, 3 ],
        backgroundColor: [ 'lightgray', 'darkgray', 'black' ],
        hoverBackgroundColor: [ 'white' ],
        hoverBorderColor: [ 'lightgray', 'darkgray', 'black' ],
      } ]
    };
    public pieChartType: ChartType = 'pie';
    public pieChartPlugins = [ DatalabelsPlugin ];

    ngAfterViewInit(): void {
      this.transition = 'none';
    }

}