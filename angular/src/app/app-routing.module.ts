import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainSignupComponent } from './main-signup/main-signup.component';

const routes: Routes = [
  {path: 'login',component: LoginPageComponent},
  {path:'signup', component: MainSignupComponent},  
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'**' ,component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
