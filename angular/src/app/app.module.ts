import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginDetailComponent } from './login-detail/login-detail.component';
import { NoAccountComponent } from './no-account/no-account.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainSignupComponent } from './main-signup/main-signup.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginDetailComponent,
    NoAccountComponent,
    SignUpComponent,
    MainSignupComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
