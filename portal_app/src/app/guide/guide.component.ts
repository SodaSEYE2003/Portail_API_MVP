import { Component,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';


@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent {
  constructor(private router: Router) {}
  activeSection = 'introduction';
  goToSection(id: string) {
    // force l’URL complète /guide#id
    this.router.navigateByUrl('/guide#' + id);
     this.activeSection = id;
    // // scroll dans le conteneur
    // setTimeout(() => {
    //   const el = document.getElementById(id);
    //   el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }, 0);
  }
    
}

