import { Component, OnInit } from '@angular/core';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-righttop',
  templateUrl: './righttop.component.html',
  styleUrls: ['./righttop.component.sass'], // updated stylesheet path
})
export class RighttopComponent implements OnInit {
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  constructor() {}

  ngOnInit(): void {}
}
