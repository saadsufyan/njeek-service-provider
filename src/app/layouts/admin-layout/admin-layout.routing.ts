import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { CategoryComponent } from '../../pages/category/category.component';
import { CategoriesComponent } from 'app/pages/categories/categories.component';
import { SubCategoryComponent } from 'app/pages/sub-category/sub-category.component';
import { AddMainCategoryComponent } from 'app/pages/add-main-category/add-main-category.component';
import { AddCategoriesComponent } from 'app/pages/add-categories/add-categories.component';
import { AddSubCategoryComponent } from 'app/pages/add-sub-category/add-sub-category.component';
import { ServiceProvidersComponent } from 'app/pages/service-providers/service-providers.component';
import { CustomerListComponent } from 'app/pages/customer-list/customer-list.component';
import { CustomerDetailsComponent } from 'app/pages/customer-details/customer-details.component';
import { ServiceProvidersDetailsComponent } from 'app/pages/service-providers-details/service-providers-details.component';
import { MainServicesComponent } from 'app/pages/main-services/main-services.component';
import { AppointmentsComponent } from 'app/pages/appointments/appointments.component';
import { PatientsComponent } from 'app/pages/patients/patients.component';
import { ProfileComponent } from 'app/pages/profile/profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    // { path: 'services',      component: MainServicesComponent },
    { path: 'appointments',      component: AppointmentsComponent },
    { path: 'patients',      component: PatientsComponent },
    { path: 'add-main-category',      component: AddMainCategoryComponent },
    { path: 'add-categories',      component: AddCategoriesComponent },
    { path: 'add-sub-category',      component: AddSubCategoryComponent },
    // { path: 'category',      component: CategoryComponent },
    { path: 'services',      component: CategoryComponent },
    { path: 'categories',      component: CategoriesComponent },
    { path: 'sub-category',      component: SubCategoryComponent },
    { path: 'service-provider',      component: ServiceProvidersComponent },
    { path: 'service-provider-detail/:id',      component: ServiceProvidersDetailsComponent },
    { path: 'customers-list',      component: CustomerListComponent },
    { path: 'customer-details/:id',      component: CustomerDetailsComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'profile',        component: ProfileComponent },
];
