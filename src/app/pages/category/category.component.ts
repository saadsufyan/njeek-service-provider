import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  items = [];
  dtTrigger = new Subject();

  constructor(private http: HttpClient, private router: Router, private spinner: NgxSpinnerService) { }

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 25
      };
      this.spinner.show();
      this.http.get('https://najeek.herokuapp.com/service/main_category')
        .subscribe((items: any) => {
          console.log('category ', items);
          this.spinner.hide();
          this.items = items;
          // Calling the DT trigger to manually render the table
          this.dtTrigger.next();
        });
    }

    navigateAddCategory() {
      this.router.navigateByUrl('/add-main-category');
    }

    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
  }

