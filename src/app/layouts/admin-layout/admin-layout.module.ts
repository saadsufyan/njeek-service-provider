import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { CategoryComponent } from '../../pages/category/category.component';
import { AddMainCategoryComponent } from '../../pages/add-main-category/add-main-category.component';
import { AddCategoriesComponent } from '../../pages/add-categories/add-categories.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from 'app/pages/categories/categories.component';
import { SubCategoryComponent } from 'app/pages/sub-category/sub-category.component';
import { AddSubCategoryComponent } from 'app/pages/add-sub-category/add-sub-category.component';
import { ServiceProvidersComponent } from 'app/pages/service-providers/service-providers.component';
import { CustomerListComponent } from 'app/pages/customer-list/customer-list.component';
import { CustomerDetailsComponent } from 'app/pages/customer-details/customer-details.component';
import { ServiceProvidersDetailsComponent } from 'app/pages/service-providers-details/service-providers-details.component';
import { MainServicesComponent } from 'app/pages/main-services/main-services.component';
import { AppointmentsComponent } from 'app/pages/appointments/appointments.component';
import { PatientsComponent } from 'app/pages/patients/patients.component';
import { ProfileComponent } from 'app/pages/profile/profile.component';
import { PatientsRequestComponent } from 'app/pages/patients-request/patients-request.component';
import { PatientsServedComponent } from 'app/pages/patients-served/patients-served.component';
import { ServiceDetailComponent } from 'app/pages/service-detail/service-detail.component';
import { MyServicesComponent } from 'app/pages/my-services/my-services.component';
import { ConsultantsComponent } from 'app/pages/consultants/consultants.component';
import { ConsultantDetailsComponent } from 'app/pages/consultant-details/consultant-details.component';
import { MyServiceUpdateComponent } from 'app/pages/my-service-update/my-service-update.component';
import { AppointmentDetailsComponent } from 'app/pages/appointment-details/appointment-details.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    NgxDatatableModule,
    DataTablesModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    CategoryComponent,
    CategoriesComponent,
    SubCategoryComponent,
    AddMainCategoryComponent,
    AddCategoriesComponent,
    AddSubCategoryComponent,
    ServiceProvidersComponent,
    ServiceProvidersDetailsComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    MainServicesComponent,
    ServiceDetailComponent,
    MyServicesComponent,
    AppointmentsComponent,
    AppointmentDetailsComponent,
    PatientsComponent,
    PatientsRequestComponent,
    PatientsServedComponent,
    ProfileComponent,
    ConsultantsComponent,
    ConsultantDetailsComponent,
    MyServiceUpdateComponent
  ]
})

export class AdminLayoutModule {}
