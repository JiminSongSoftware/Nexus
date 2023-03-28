import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ThreeViewerComponent } from 'src/app/three-viewer/three-viewer.component';
import { Chart, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.sass']
})
export class AnalyticsComponent {
  @ViewChild('chart') chartRef!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.createDoughnutChart();
  }

  createDoughnutChart() {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Google Drive', 'OneDrive'],
        datasets: [
          {
            data: [25.32, 6.64], // Update these values based on your data
            backgroundColor: ['#FFD04B', '#28A8EA'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });
  }
}