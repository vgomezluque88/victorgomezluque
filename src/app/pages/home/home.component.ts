import { Component } from '@angular/core';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { skip } from 'rxjs';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from './components/experience/experience.component';
import { SeparatorComponent } from './components/separator/separator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSliderComponent, SkillsComponent, ExperienceComponent, SeparatorComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
