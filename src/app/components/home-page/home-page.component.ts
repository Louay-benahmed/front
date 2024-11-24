import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  //* * * * * * * * * * * * * navigation button * * * * * * * * * * * * * * * * * * *

  constructor(private router: Router) {}

  goToNewPage() {
    this.router.navigate(['/login-page']); // Programmatic navigation
  }

}
