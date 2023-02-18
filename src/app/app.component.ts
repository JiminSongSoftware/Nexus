import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Cloud Computing Dashboard</h1>
      <app-dashboard></app-dashboard>
    </div>
  `,
  styles: [`
    .container {
      margin: 20px;
    }
  `]
})
export class AppComponent { }
