import { Component } from '@angular/core';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ProyectosHomeComponent } from './components/proyectos-home/proyectos-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSliderComponent, SkillsComponent, ExperienceComponent, SeparatorComponent, ProyectosHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
