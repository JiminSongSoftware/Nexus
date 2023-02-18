import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Resource Usage</h2>
    <div *ngIf="!resources">Loading...</div>
    <ng-container *ngIf="resources">
      <canvas id="resource-usage-chart"></canvas>
    </ng-container>

    <h2>Create Resource</h2>
    <app-resource-create-form (submitted)="createResource($event)"></app-resource-create-form>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {
  resources: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/resources').subscribe(resources => {
      this.resources = resources;
      this.renderResourceUsageChart();
    });
  }

  renderResourceUsageChart() {
    // Code to render resource usage chart using a library such as Chart.js
  }

  createResource(resource) {
    // Code to make a POST request to the backend to create a new resource
  }
}
