import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-siteowner-page',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './siteowner-page.component.html',
  styleUrl: './siteowner-page.component.css'
})
export class SiteownerPageComponent {
  showSigninDiv: boolean = false; // Controls visibility of the other div

  showOtherDiv: boolean = false; // Controls visibility of the other div

// Method to scroll to the "div_list" section
  scrollToReports(): void {
    const element = document.getElementById('div_list');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  toggleOtherDiv(): void {
    this.showOtherDiv = !this.showOtherDiv; // Toggles the visibility
  }

  toggleSigninDiv(): void {
    this.showSigninDiv = !this.showSigninDiv; // Toggles the visibility
  }
}
