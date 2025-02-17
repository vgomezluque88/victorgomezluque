import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isAnimating = false;

  toggleMenu() {
    if (this.isMenuOpen) {
      this.isAnimating = true;
      setTimeout(() => {
        this.isMenuOpen = false;
        this.isAnimating = false;
      }, 1000); // Coincide con la duración de la animación
    } else {
      this.isMenuOpen = true;
    }
  }

  closeMenu() {
    this.toggleMenu();
  }
  
  ngAfterViewInit() {
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMenu();
      });
    });
  }
}
