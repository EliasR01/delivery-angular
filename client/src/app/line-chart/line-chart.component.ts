import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { DateArray } from '../interfaces';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() allOrders: DateArray;
  @Input() pendingOrders: DateArray;
  @Input() completedOrders: DateArray;
  @Input() chartLabels: string[] = [];
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'All Orders' },
    { data: [], label: 'Pending Orders' },
    {
      data: [],
      label: 'Completed Orders',
    },
  ];
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
    },
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {}

  ngOnInit(): void {
    this.lineChartLabels = this.chartLabels;
    this.chartLabels.forEach((month) => {
      this.lineChartData[0].data.push(this.allOrders[month]);
      this.lineChartData[1].data.push(this.pendingOrders[month]);
      this.lineChartData[2].data.push(this.completedOrders[month]);
    });
  }
}
