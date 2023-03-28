
import { Component, OnInit } from '@angular/core';

declare const gapi: any;
declare const google: any;

@Component({
  selector: 'app-driveapi',
  templateUrl: './driveapi.component.html',
  styleUrls: ['./driveapi.component.scss']
})
export class DriveapiComponent implements OnInit {

  showSigninButton: boolean = true;
  showSignoutButton: boolean = false;


  private CLIENT_ID = '531522936907-0u9gmleiuk3i9cr4akhq2qoca2kb1tef.apps.googleusercontent.com';
  private API_KEY = 'AIzaSyBoyYg4O4vK1OZWehzlUrajva7Z-f_lzpk';
  private DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
  private SCOPES = 'https://www.googleapis.com/auth/drive';

  private tokenClient: any;
  private gapiInited = false;
  private gisInited = false;

  constructor() { }

  ngOnInit(): void {
    window.onload = () => {
      this.gapiLoaded();
      this.gisLoaded();
    };
  }

  gapiLoaded() {
    gapi.load('client', this.initializeGapiClient.bind(this));
  }

  async initializeGapiClient() {
    await gapi.client.init({
      apiKey: this.API_KEY,
      discoveryDocs: this.DISCOVERY_DOCS,
    });
    this.gapiInited = true;
    this.maybeEnableButtons();
  }

  gisLoaded() {
    this.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: this.CLIENT_ID,
      scope: this.SCOPES,
      callback: ''
    });
    this.gisInited = true;
    this.maybeEnableButtons();
  }

  maybeEnableButtons() {
    if (this.gapiInited && this.gisInited) {
      const signinButton = <HTMLElement>document.getElementsByClassName('signin')[0];
      signinButton.style.display = 'block';
    }
  }

  handleAuthClick() {
    this.tokenClient.callback = async (resp: any) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
      const signinButton = document.getElementsByClassName('signin')[0] as HTMLElement;
      const signoutButton = document.getElementsByClassName('signout')[0] as HTMLElement;
      signinButton.style.display = 'none';
      signoutButton.style.display = 'block';
      this.checkFolder();
    };
  
    if (gapi.client.getToken() === null) {
      this.tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      this.tokenClient.requestAccessToken({ prompt: '' });
    }
  }


  handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken('');
      const signinButton = document.getElementsByClassName('signin')[0] as HTMLElement;
      const signoutButton = document.getElementsByClassName('signout')[0] as HTMLElement;
      signinButton.style.display = 'block';
      signoutButton.style.display = 'none';
    }
  }

  checkFolder() {
    gapi.client.drive.files.list({
      'q': 'name = "Backup Folder"',
    }).then(function (response: any) {
      var files = response.result.files;
      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if (file.mimeType === 'application/vnd.google-apps.folder') {
            console.log('Backup folder already exists');
            return;
          }
        }
      }
      console.log('Backup folder does not exist');
      gapi.client.drive.files.create({
        name: 'Backup Folder',
        mimeType: 'application/vnd.google-apps.folder',
      }).then(function (response: any) {
        console.log('Backup folder created');
      });
    });
  }

}

