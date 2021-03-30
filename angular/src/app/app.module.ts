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
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SamplesComponent } from './samples/samples.component'
import { StatusReportService } from './status-report.service';
import { DonarListComponent } from './donar-list/donar-list.component';
import { SampleDetailComponent } from './sample-detail/sample-detail.component';
import { DonarDetailComponent } from './donar-detail/donar-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginDetailComponent,
    NoAccountComponent,
    SignUpComponent,
    MainSignupComponent,
    ErrorComponent,
    SamplesComponent,
    DonarListComponent,
    SampleDetailComponent,
    DonarDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule ,
    FormsModule,
    HttpClientModule
  ],
  providers: [StatusReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
