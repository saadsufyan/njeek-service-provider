import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceProviderService } from 'app/services/service-provider/service-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  providers: [ServiceProviderService]
})
export class ServiceDetailComponent implements OnInit {

  public date: Date = new Date(Date.now());

  service = new FormGroup({
    service_id: new FormControl(''),
    service_name: new FormControl(''),
    service_name_arabic: new FormControl(''),
    service_description: new FormControl(''),
    service_description_arabic: new FormControl(''),
    charges: new FormControl(''),
    time_to: new FormControl(''),
    time_from: new FormControl('')
  });
  id: any;
  constructor(public serviceApi: ServiceProviderService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedroute.snapshot.params['id']) {
      this.activatedroute.params.subscribe(params => {
        this.id = params['id'];
      });

    }
  }

  onSubmit() {

    const data = {
      service_id: parseInt(this.id),
      service_name: this.service.get('service_name').value,
      service_name_arabic: this.service.get('service_name_arabic').value,
      service_description: this.service.get('service_description').value,
      service_description_arabic: this.service.get('service_description_arabic').value,
      charges: this.service.get('charges').value.toString(),
      time_to: this.service.get('time_to').value.toString(),
      time_from: this.service.get('time_from').value.toString(),

    }

    console.log(data);
    this.serviceApi.addService(data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}
