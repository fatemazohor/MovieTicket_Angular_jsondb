import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MoviesComponent } from './components/movies/movies.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MaterialFeatures } from './components/material.module';
import { HomeComponent } from './components/home/home.component';
import { MovieTicketComponent } from './components/movie-ticket/movie-ticket.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyTicketComponent } from './components/my-ticket/my-ticket.component';
import { AdLoginComponent } from './components/ad-login/ad-login.component';
import { AdReportComponent } from './components/ad-report/ad-report.component';




@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    LoginComponent,
    MovieDetailsComponent,
    HomeComponent,
    MovieTicketComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MyTicketComponent,
    AdLoginComponent,
    AdReportComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MaterialFeatures,
    

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
