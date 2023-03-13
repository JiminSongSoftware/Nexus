import { Component } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent {
  isOpenSort=false;
  isOpenFilter=false;  
  isOpenPage=false;
 
  ShareData=[
    {
      provider: 'assets/onedrive.svg',
      file_name:'onedrive.svg',
      shared_by:'assets/avatar.svg',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'50gb',
      color: "badge rounded-pill btn bg-danger"
    },
    {
      provider: 'assets/google-drive.svg',
      file_name:'google-drive.svg',
      shared_by:'assets/avatar2.svg',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'100mb',
      color: "badge rounded-pill btn bg-warning"
    }
    ,
    {
      provider: 'assets/nas.svg',
      file_name:'nas.svg',
      shared_by:'assets/avatar.svg',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'1gb',
      color: "badge rounded-pill bg-success btn"
    }
    ,
    {
      provider: 'assets/dropbox.svg',
      file_name:'dropbox.svg',
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
