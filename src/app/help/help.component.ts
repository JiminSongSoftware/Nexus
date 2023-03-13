import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  isOpenSort=false;
  isOpenFilter=false;  
  isOpenPage=false;
 
  openSort(){
    this.isOpenSort=!this.isOpenSort;
  }
  openFilter(){
    this.isOpenFilter=!this.isOpenFilter;
  }
  OpenPage(){
    this.isOpenPage=!this.isOpenPage;
  }

}
