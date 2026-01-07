import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 mobileMenuOpen: boolean = false;
 scrolled: boolean = false;

 toggleMobileMenu() {
   this.mobileMenuOpen = !this.mobileMenuOpen;
   console.log('Menu ouvert :', this.mobileMenuOpen); // Pour vérifier dans la console
 }
 @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }
}
