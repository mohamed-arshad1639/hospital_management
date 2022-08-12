import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"appointment",component:AppointmentComponent
  },
  {
    path:"services",component:ServicesComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"department",component:DepartmentComponent
  },
  {
    path:"doctors",component:DoctorsComponent
  },
  {
    path:"contact",component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
