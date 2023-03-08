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
      provider: 'assets/aws.svg',
      file_name:'aws.svg',
      shared_by:'assets/sharedBy.png',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'5gb',
      color: "badge rounded-pill btn bg-danger"
    },
    {
      provider: 'assets/gdrive.svg',
      file_name:'gdrive.svg',
      shared_by:'assets/sharedBy.png',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'10gb',
      color: "badge rounded-pill btn bg-primary"
    }
    ,
    {
      provider: 'assets/aws.svg',
      file_name:'aws.svg',
      shared_by:'assets/sharedBy.png',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'5gb',
      color: "badge rounded-pill bg-success btn"
    }
    ,
    {
      provider: 'assets/aws.svg',
      file_name:'aws.svg',
      shared_by:'assets/sharedBy.png',
      date:'May 26, 2019',
      time: '6:30 PM',
      size:'5gb',
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
