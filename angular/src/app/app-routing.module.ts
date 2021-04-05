import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDonorComponent } from './admin-donor/admin-donor.component';
import { AdminsampleComponent } from './adminsample/adminsample.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { DonarDetailComponent } from './donar-detail/donar-detail.component';
import { DonarListComponent } from './donar-list/donar-list.component';
import { DonorFormComponent } from './donor-form/donor-form.component';
import { ErrorComponent } from './error/error.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainSignupComponent } from './main-signup/main-signup.component';
import { SampleDetailComponent } from './sample-detail/sample-detail.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { SamplesComponent } from './samples/samples.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
const routes: Routes = [
  {path: 'login',component: LoginPageComponent},
  {path:'admin/donor',component:AdminDonorComponent},
  {path:'admin/addSample',component:SampleFormComponent},
  {path:'signup', component: MainSignupComponent},  
  {path:'admin/dashboard',component:UserDashboardComponent,canActivate:[AuthGuardGuard]},

  {path:'user/dashboard',component:UserDashboardComponent,canActivate:[AuthGuardGuard]},
  {path:'sample/:id',component:SampleDetailComponent},
  {path:'admin/addDonor',component:DonorFormComponent},
  {path:'donor/:group',component:DonarDetailComponent,canActivate:[AuthGuardGuard]},
  {path:'admin/addDonor',component:DonorFormComponent},
  {path:'sample',component:SamplesComponent},
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'admin/sample', component:AdminsampleComponent},
  {path:'donor',component:DonarListComponent,canActivate:[AuthGuardGuard]},  
  {path:'sample/:id',component:SampleDetailComponent,canActivate:[AuthGuardGuard]},
  {path:'**' ,redirectTo:'/login',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
