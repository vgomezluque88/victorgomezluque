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
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.updateMenuState();
  }

  closeMenu() {
    this.isOpen = false;
    this.updateMenuState();
  }

  private updateMenuState() {
    const svg = document.querySelector('.header_hamburguer');
    const list = document.querySelector('.menu');

    if (svg) {
      svg.classList.toggle('menu-open', this.isOpen);
    }

    if (list) {
      list.classList.toggle('menu-open', this.isOpen);
    }
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
