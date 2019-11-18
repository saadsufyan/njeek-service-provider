import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceProviderService } from 'app/services/service-provider/service-provider.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { GeneralApiService } from 'app/services/general-api.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss'],
  providers: [ServiceProviderService, GeneralApiService]
})
export class MyServicesComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  items;
  dtTrigger = new Subject();
  id: any;
  constructor(public servicesApi: ServiceProviderService, private router: Router, public sharedService: GeneralApiService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getMyServices();
  }
  getMyServices() {
    this.servicesApi.getMyService().subscribe(res => {
      console.log(res);
      this.items = res;
      this.dtTrigger.next();
    }, err => {
      console.log(err);
    })
  }
  onUpdateMyService(id) {
    console.log(id);
    const index = this.items.findIndex(x => x.id === id);
    this.sharedService.sendData(this.items[index]);
    this.router.navigate(['my-service-detail', id]);
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
