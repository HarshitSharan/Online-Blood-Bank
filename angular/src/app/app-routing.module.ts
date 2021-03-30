import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonarDetailComponent } from './donar-detail/donar-detail.component';
import { DonarListComponent } from './donar-list/donar-list.component';
import { ErrorComponent } from './error/error.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainSignupComponent } from './main-signup/main-signup.component';
import { SampleDetailComponent } from './sample-detail/sample-detail.component';
import { SamplesComponent } from './samples/samples.component';
const routes: Routes = [
  {path: 'login',component: LoginPageComponent},
  {path:'signup', component: MainSignupComponent},  
  {path:'sample/:id',component:SampleDetailComponent},
  {path:'donor/:group',component:DonarDetailComponent},
  {path:'sample',component:SamplesComponent},
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'donor',component:DonarListComponent},  
  {path:'donor' ,component:SampleDetailComponent},
  {path:'**' ,component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
