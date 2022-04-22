import { Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { DepartmentDetailsComponent } from './department-details/department-details.component'
import { DepartmentsComponent } from './departments/departments.component'


export const allAppRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component : DashboardComponent},
    {path: 'detail/:name', component: DepartmentDetailsComponent},
    {path: 'departments', component: DepartmentsComponent}
]