import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { allAppRoutes } from './routes';
import { DepartmentsComponent } from './departments/departments.component';
import { FormsModule } from '@angular/forms';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepartmentDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
