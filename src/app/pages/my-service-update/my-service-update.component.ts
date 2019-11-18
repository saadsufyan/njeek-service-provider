import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceProviderService } from 'app/services/service-provider/service-provider.service';
import { ActivatedRoute } from '@angular/router';
import { GeneralApiService } from 'app/services/general-api.service';

@Component({
  selector: 'app-my-service-update',
  templateUrl: './my-service-update.component.html',
  styleUrls: ['./my-service-update.component.scss'],
  providers: [ServiceProviderService, GeneralApiService]
})
export class MyServiceUpdateComponent implements OnInit, OnDestroy {
  public date: Date = new Date(Date.now());

  service_id;
  service_name;
  service_name_arabic;
  service_description;
  service_description_arabic;
  charges;
  time_to;
  time_from;
  id;
  MyServiceData;
  constructor(
    public serviceApi: ServiceProviderService,
    private activatedroute: ActivatedRoute,
    public sharedService: GeneralApiService) { }

  ngOnInit() {
    if (this.activatedroute.snapshot.params['id']) {
      this.activatedroute.params.subscribe(params => {
        this.id = params['id'];
      });
    }
    this.MyServiceData = this.sharedService.fetchData();
    this.id = this.MyServiceData.service_id;
    this.service_name = this.MyServiceData.service_name;
    this.service_name_arabic = this.MyServiceData.service_name_arabic;
    this.service_description = this.MyServiceData.service_description;
    this.service_description_arabic = this.MyServiceData.service_description_arabic;
    this.charges = this.MyServiceData.charges;
    this.time_to = this.MyServiceData.time_to;
    this.time_from = this.MyServiceData.time_from;
  }
  onSubmit() {

    const data = {
      service_id: parseInt(this.id),
      service_name: this.service_name,
      service_name_arabic: this.service_name_arabic,
      service_description: this.service_description,
      service_description_arabic: this.service_description_arabic,
      charges: this.charges,
      time_to: this.time_to.toString(),
      time_from: this.time_from.toString(),

    }

    console.log(data);
    this.serviceApi.updateService(data).subscribe(res => {
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
