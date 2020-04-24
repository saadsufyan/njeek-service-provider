import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultantsService } from 'app/services/consultants/consultants.service';
import { FormGroup, FormControl } from '@angular/forms';
import { GeneralApiService } from 'app/services/general-api.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-consultant-details',
  templateUrl: './consultant-details.component.html',
  styleUrls: ['./consultant-details.component.scss'],
  providers: [ConsultantsService, GeneralApiService]
})
export class ConsultantDetailsComponent implements OnInit, OnDestroy {

  id;
  consultant_name;
  consultant_email;
  consultant_number;
  designation;
  type;
  skills;
  consultantData;
  pic;

  consultant = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl(''),
    designation: new FormControl(''),
    type: new FormControl(''),
    image: new FormControl(null),
    skills: new FormControl('')
  });
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedroute: ActivatedRoute,
    public consultantApi: ConsultantsService,
    public sharedService: GeneralApiService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit() {

    this.consultantData = this.sharedService.fetchData();
    console.log(this.consultantData);
    if (this.consultantData) {
      this.id = this.consultantData.id
      this.consultant_name = this.consultantData.name;
      this.designation = this.consultantData.designation,
      this.type = this.consultantData.type

      this.consultant.patchValue({
        id: this.consultantData.id,
        name: this.consultantData.name,
        email: this.consultantData.email,
        number: this.consultantData.number,
        designation: this.consultantData.designation,
        type: this.consultantData.type,
        image: this.consultantData.image,
        skills: this.consultantData.skills
      })

    }
  }
  onSubmit() {
    if (this.id) {
      this.updateConsultant();
    } else {
      this.addConsultant();
    }
  }
  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.consultant.get('image').setValue(file);
        // need to run CD since file load runs outside of zone
        // this.cd.markForCheck();
    }
  }
  addConsultant() {

    this.spinner.show();

    const formData = new FormData();
    formData.append('image', this.consultant.get('image').value)
    formData.append('name', this.consultant.get('name').value)
    formData.append('email', this.consultant.get('email').value)
    formData.append('number', this.consultant.get('number').value)
    formData.append('designation', this.consultant.get('designation').value)
    formData.append('type', this.consultant.get('type').value)
    formData.append('skills', this.consultant.get('skills').value);

    const object = {};
    formData.forEach(function(value, key) {
        object[key] = value;
    });
    const data = JSON.stringify(object);
    console.log(data);
    this.consultantApi.addConsultants(data).subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.toastr.success('Staff has been added successfully', 'Staff Added');

    }, err => {
      console.log(err);
      this.spinner.hide();
      if (err.status === 200) {
        this.toastr.success('Staff has been added successfully', 'Staff Updated');
      } else {
        this.toastr.error('Something went wrong', 'Failure', {
          timeOut: 3000
        });
      }
    })
  }

  updateConsultant() {

    this.spinner.show();

    const formData = new FormData();
    formData.append('id', this.consultant.get('id').value);
    formData.append('image', this.consultant.get('image').value)
    formData.append('name', this.consultant.get('name').value)
    formData.append('email', this.consultant.get('email').value)
    formData.append('number', this.consultant.get('number').value)
    formData.append('designation', this.consultant.get('designation').value)
    formData.append('type', this.consultant.get('type').value)
    formData.append('skills', this.consultant.get('skills').value);

    const object = {};
    formData.forEach(function(value, key) {
        object[key] = value;
    });
    const data = JSON.stringify(object);

    console.log(data);
    this.consultantApi.updateConsultants(data).subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.toastr.success('Staff has been added successfully', 'Staff Added');
    }, err => {
      this.spinner.hide();
      console.log(err);
      if (err.status === 200) {
        this.toastr.success('Staff has been updated successfully', 'Staff Updated');
      } else {
        this.toastr.error('Something went wrong', 'Failure', {
          timeOut: 3000
        });
      }
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.sharedService.sendData(null);
  }
}
