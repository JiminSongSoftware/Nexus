import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropdown= false
  constructor() { }

  ngOnInit(): void {
  }
  isOpen(){
    this.dropdown=!this.dropdown
  }

}
