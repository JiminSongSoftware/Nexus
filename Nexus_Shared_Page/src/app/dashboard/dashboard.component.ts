import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})



export class DashboardComponent {
  Items = [
    {
      photo:'assets/folder.svg',
      title: 'Folder 1',
      items: '17',
      gb:'12gb',
      color:'card'
    },
    {
      photo:'assets/folder.svg',
      title: 'Folder 1',
      items: '17',
      gb:'12gb',
      color:'bg1 card'
    },
    {
      photo:'assets/folder.svg',
      title: 'Folder 1',
      items: '17',
      gb:'12gb',
      color:'bg2 card'
    },
    {
      photo:'assets/folder.svg',
      title: 'Folder 1',
      items: '17',
      gb:'12gb',
      color:'bg3 card'
    },
    {
      photo:'assets/folder.svg',
      title: 'Folder 1',
      items: '17',
      gb:'12gb',
      color:'bg4 card'
    },
    {
      photo:'assets/folder.svg',
      title: 'Folder 1',
      items: '17',
      gb:'12gb',
      color:'bg5 card'
    },
    {
      photo:'assets/folder.svg',
      title: 'Folder 1',
      items: '17',
      gb:'12gb',
      color:'bg1 card'
    }
  ]

  Recently=[
    {
      file_name: 'File.jpg',
      storage:'2.4 GB',
      server:'',
      color:'upload-item bg_item1'
    },
    {
      file_name: 'File.jpg',
      storage:'2.1 GB',
      server:'Google Drive',
      color:'upload-item bg_item2'
    },

    {
      file_name: 'File.jpg',
      storage:'2.9 GB',
      server:'Amazon AWS',
      color:'upload-item bg_item3'
    },

    {
      file_name: 'File.jpg',
      storage:'4.4 GB',
      server:'Microsoft Azure',
      color:'upload-item bg_item4'
    },
    {
      file_name: 'File.jpg',
      storage:'2.4 GB',
      server:'Dropbox',
      color:'upload-item bg_item5'
    },
  ]
  private _isLoggedIn = true
  constructor(private authService: AuthService) {
    this._isLoggedIn = this.authService.isLoggedIn();
  }
  
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }


  customOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
