import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ThreeViewerComponent } from 'src/app/three-viewer/three-viewer.component';

declare var Chart: any; // Add this line to access the Chart.js library

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit, AfterViewInit {
  @ViewChild(ThreeViewerComponent, { static: false }) threeViewer!: ThreeViewerComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createDoughnutChart();
  }

  createDoughnutChart() {
    const ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
    const doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Google Drive', 'One Drive'],
        datasets: [
          {
            data: [15, 15],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
