import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileService } from 'app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  profileData;
  dtTrigger = new Subject();
  constructor(private http: HttpClient, private router: Router, public profileApi: ProfileService) { }


  ngOnInit() {
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.profileApi.getProfile().subscribe(res => {
      console.log(res);
      this.profileData = res;
    }, err => {
      console.log(err);
    })
  }
}
