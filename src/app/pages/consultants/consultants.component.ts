import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultantsService } from 'app/services/consultants/consultants.service';
import { GeneralApiService } from 'app/services/general-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.scss'],
  providers: [ConsultantsService, GeneralApiService]
})
export class ConsultantsComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  items;
  dtTrigger = new Subject();
  id: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedroute: ActivatedRoute,
    public consultantApi: ConsultantsService,
    public sharedService: GeneralApiService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };
    this.getConsultant();
  }
  getConsultant() {
    this.spinner.show();
    this.consultantApi.getAllConsultants().subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.items = res;
      this.dtTrigger.next();
    }, err => {
      console.log(err);
    })
  }
  onUpdateConsultant(id) {
    const index = this.items.findIndex(x => x.id === id);

    if (id) {
      this.sharedService.sendData(this.items[index]);
    }
    this.router.navigate(['consultant-details']);
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
