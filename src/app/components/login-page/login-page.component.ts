import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'

})
export class LoginPageComponent {
  constructor(private router: Router) {}

  showOtherDiv: boolean = false; // Controls visibility of the other div
  showdescriptionDiv: boolean = false; // Controls visibility of the other div



  goToclientPage() {
    this.router.navigate(['/client-page']); // Programmatic navigation
  }
  goTofreelancerPage() {
    this.router.navigate(['/freelancer-page']); // Programmatic navigation
  }
  goTositeownerPage() {
    this.router.navigate(['/siteowner-page']); // Programmatic navigation
  }


  toggleOtherDiv(): void {
    this.showOtherDiv = !this.showOtherDiv; // Toggles the visibility
  }

}
