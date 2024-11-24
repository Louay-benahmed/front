import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component'; // Importing the NewPageComponent
import { FreelancerPageComponent } from './components/freelancer-page/freelancer-page.component'; // Importing the FirstPageComponent
import { SiteownerPageComponent } from './components/siteowner-page/siteowner-page.component'; // Importing the FirstPageComponent
import { ClientPageComponent } from './components/client-page/client-page.component'; // Importing the FirstPageComponent
import { LoginPageComponent } from './components/login-page/login-page.component'; // Importing the FirstPageComponent
import { FreelancerlistePageComponent } from './components/freelancerliste-page/freelancerliste-page.component'; // Importing the FirstPageComponent
import { ChatPageComponent } from './components/chat-page/chat-page.component'; // Importing the FirstPageComponent


export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent }, // Default route

  { path: 'login-page', component: LoginPageComponent }, // Route for NewPageComponent at '/new-page' path
  /*
    Access the New Page:
    Start the Angular development server (ng serve) and navigate to
    http://localhost:4200/new-page to view your new page.
  */
  { path: 'freelancer-page', component: FreelancerPageComponent },
  { path: 'client-page', component: ClientPageComponent },
  { path: 'siteowner-page', component: SiteownerPageComponent },
  { path: 'freelancerliste-page', component: FreelancerlistePageComponent },
  { path: 'chat-page', component: ChatPageComponent },

];
