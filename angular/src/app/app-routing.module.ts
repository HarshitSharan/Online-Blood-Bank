import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonarListComponent } from './donar-list/donar-list.component';
import { ErrorComponent } from './error/error.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainSignupComponent } from './main-signup/main-signup.component';
import { SamplesComponent } from './samples/samples.component';

const routes: Routes = [
  {path: 'login',component: LoginPageComponent},
  {path:'signup', component: MainSignupComponent},  
  {path:'sample',component:SamplesComponent},
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'donor',component:DonarListComponent},
  {path:'**' ,component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
