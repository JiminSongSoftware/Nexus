import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentDate: string;
  dropdown= false
  constructor() { 
    const options = { 
      year: 'numeric' as const, 
      month: 'short' as const, 
      day: 'numeric' as const, 
      hour: 'numeric' as const, 
      minute: 'numeric' as const, 
      hour12: true 
    };
    this.currentDate = new Date().toLocaleDateString('en-US', options);
  }

  ngOnInit(): void {
  }
  isOpen(){
    this.dropdown=!this.dropdown
  }

}
