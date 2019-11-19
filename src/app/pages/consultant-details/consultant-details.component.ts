import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultantsService } from 'app/services/consultants/consultants.service';
import { FormGroup, FormControl } from '@angular/forms';
import { GeneralApiService } from 'app/services/general-api.service';

@Component({
  selector: 'app-consultant-details',
  templateUrl: './consultant-details.component.html',
  styleUrls: ['./consultant-details.component.scss'],
  providers: [ConsultantsService, GeneralApiService]
})
export class ConsultantDetailsComponent implements OnInit, OnDestroy {

  id;
  consultant_name;
  designation;
  type;
  consultantData: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedroute: ActivatedRoute,
    public consultantApi: ConsultantsService,
    public sharedService: GeneralApiService
    ) { }

  ngOnInit() {

    this.consultantData = this.sharedService.fetchData();
    console.log(this.consultantData);
    if (this.consultantData) {
      this.id = this.consultantData.id
      this.consultant_name = this.consultantData.name;
      this.designation = this.consultantData.designation,
      this.type = this.consultantData.type
    }
  }
  onSubmit() {
    if (this.id) {
      this.updateConsultant();
    } else {
      this.addConsultant();
    }
  }
  addConsultant() {
    const data = {
      name: this.consultant_name,
      designation: this.designation,
      type: this.type
    }
    console.log(data);
    this.consultantApi.addConsultants(data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  updateConsultant() {
    const data = {
      'id': this.id,
      'name': this.consultant_name,
      'designation': this.designation,
      'type': this.type
    }
    console.log(data);
    this.consultantApi.updateConsultants(data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.sharedService.sendData(null);
  }
}
