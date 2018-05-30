import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { HeaderWithoutLoginComponent } from './header-without-login/header-without-login.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbNavComponent } from './breadcrumb-nav/breadcrumb-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderLoginComponent,
    HeaderWithoutLoginComponent,
    HeaderNavComponent,
    BreadcrumbComponent,
    BreadcrumbNavComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    //fakeBackendProvider,
    //MockBackend,
    //BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
