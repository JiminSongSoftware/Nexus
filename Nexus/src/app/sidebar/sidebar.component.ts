import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faUsers,
  faChartBar,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  faHome = faHome;
  faUsers = faUsers;
  faChartBar = faChartBar;
  faCog = faCog;

  constructor() {}

  ngOnInit(): void {}
}
