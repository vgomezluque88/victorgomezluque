import { Component } from '@angular/core';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { skip } from 'rxjs';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSliderComponent, SkillsComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
