import { Component } from '@angular/core';

@Component({
  selector: 'app-googledrivepage',
  templateUrl: './googledrivepage.component.html',
  styleUrls: ['./googledrivepage.component.scss']
})
export class GoogledrivepageComponent {
  isOpenSort=false;
  isOpenFilter=false;  
  isOpenPage=false;
 
  ShareData=[
    {
      provider: 'assets/google-drive.svg',
      file_name:'file-1.svg',
      shared_by:'assets/avatar.svg',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'50gb',
      color: "badge rounded-pill btn bg-danger"
    },
    {
      provider: 'assets/google-drive.svg',
      file_name:'file-2.svg',
      shared_by:'assets/avatar2.svg',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'100mb',
      color: "badge rounded-pill btn bg-warning"
    }
    ,
    {
      provider: 'assets/google-drive.svg',
      file_name:'file-3.svg',
      shared_by:'assets/avatar.svg',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'1gb',
      color: "badge rounded-pill bg-success btn"
    }
    ,
    {
      provider: 'assets/google-drive.svg',
      file_name:'file-4.svg',
      shared_by:'assets/avatar2.svg',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'50gb',
      color: "badge rounded-pill bg-danger btn"
    }
    ,
    {
      provider: 'assets/google-drive.svg',
      file_name:'file-5.svg',
      shared_by:'assets/avatar2.svg',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'50gb',
      color: "badge rounded-pill bg-danger btn"
    }
  ]





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
