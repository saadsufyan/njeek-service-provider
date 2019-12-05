import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceProviderService } from 'app/services/service-provider/service-provider.service';
import { GeneralApiService } from 'app/services/general-api.service';

@Component({
  selector: 'app-main-services',
  templateUrl: './main-services.component.html',
  styleUrls: ['./main-services.component.scss'],
  providers: [ServiceProviderService, GeneralApiService]
})
export class MainServicesComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  items;
  dtTrigger = new Subject();
  id: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedroute: ActivatedRoute,
    public servicesApi: ServiceProviderService,
    public sharedService: GeneralApiService
    ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    if (this.activatedroute.snapshot.params['id']) {
      this.activatedroute.params.subscribe(params => {
        this.id = params['id'];
      });
    }
    this.getServices();
  }
  getServices() {
    this.servicesApi.getServicesWithID(this.id).subscribe(res => {
      console.log(res);
      this.items = res;
      this.dtTrigger.next();
    }, err => {
      console.log(err);
    })
  }
  gotoAddService(id) {
    const index = this.items.findIndex(x => x.id === id);
    this.sharedService.sendData(this.items[index]);
    this.router.navigate(['/service-detail', id]);
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
