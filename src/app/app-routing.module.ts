import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home-dashboard',
    pathMatch:'full'
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home-dashboard',
    component:HomeDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
