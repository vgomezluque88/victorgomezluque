import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
    selector: 'app-work',
    imports: [SkillsComponent, ExperienceComponent],
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss'
})
export class WorkComponent {

}
