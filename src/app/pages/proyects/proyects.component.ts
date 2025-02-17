import { Component } from '@angular/core';
import { ProyectosHomeComponent } from '../home/components/proyectos-home/proyectos-home.component';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [ProyectosHomeComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {

}
