import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';
import { MovieTicketComponent } from './components/movie-ticket/movie-ticket.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuardService } from './servies/login.guard.service';
import { MyTicketComponent } from './components/my-ticket/my-ticket.component';
import { AdLoginComponent } from './components/ad-login/ad-login.component';
import { AdReportComponent } from './components/ad-report/ad-report.component';
import { AdLoginGuardService } from './servies/ad-login.guard.service';

const routes: Routes = [
  { path: "home", component: HomeComponent },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "movielist", component: MoviesComponent },

  { path: "myticket", component: MyTicketComponent },
  {
    path: "details/:id", component: MovieDetailsComponent
    , canActivate: [LoginGuardService]
  },
  {
    path: "ticket/:id", component: MovieTicketComponent
    , canActivate: [LoginGuardService]
  },

  { path: "admin", component: AdLoginComponent },
  { path: "report", component: AdReportComponent
  , canActivate: [AdLoginGuardService] },

  { path: "**", redirectTo: "/home", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuardService, AdLoginGuardService]
})
export class AppRoutingModule { }
