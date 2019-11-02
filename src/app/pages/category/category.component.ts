import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  persons = [];
  dtTrigger = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 2
      };
      this.http.get('https://najeek.herokuapp.com/admin/main_category')
        .subscribe((persons: any) => {
          console.log('person ', persons);
          this.persons = persons;
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

