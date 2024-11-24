import { Component } from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancer-page',
  standalone: true,
    imports: [
        NgIf,
      CommonModule
    ],
  templateUrl: './freelancer-page.component.html',
  styleUrl: './freelancer-page.component.css'
})
export class FreelancerPageComponent {
  showOtherDiv: boolean = false; // Controls visibility of the other div
  showdescriptionDiv: boolean = false; // Controls visibility of the other div


  showOptions = false;  // Controls visibility of options
  searchQuery = '';  // Bound to input field for search query

  constructor(private router: Router) {}

  toggleOtherDiv(): void {
    this.showOtherDiv = !this.showOtherDiv; // Toggles the visibility
  }

  // Hide options when clicking outside of the search bar
  hideOptions() {
    setTimeout(() => {
      this.showOptions = false;
    }, 200);  // Delay to allow click on options to be detected
  }

  goTochatPage() {
    this.router.navigate(['/chat-page']); // Programmatic navigation
  }


  // Handle selection of an option
  selectOption(option: string) {
    this.searchQuery = option;  // Set the selected option to the input field
    this.showOptions = false;  // Hide options after selection
    this.router.navigate(['/freelancerliste-page']); // Programmatic navigation
  }

  toggleOtherDivdescription(): void {
    this.showdescriptionDiv = !this.showdescriptionDiv; // Toggles the visibility
  }
}
