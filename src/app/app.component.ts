import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { UserProfileResponse } from './userprofileresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  userProfile = new UserProfileResponse();
  constructor(public userprofileservice: DataService) {
    this.userprofileservice.getUserprofile().subscribe(
      (userProfile: UserProfileResponse) => {
        this.userProfile = userProfile;

      });
  }
}
