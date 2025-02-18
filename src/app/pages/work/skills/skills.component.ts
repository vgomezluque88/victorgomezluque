import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.skillBars.forEach(skillBar => {
      const percSkill = skillBar.nativeElement.getAttribute('data-percskill');
      skillBar.nativeElement.style.setProperty('--final-width', percSkill);
      skillBar.nativeElement.classList.add('animate-skill');
    });
  }
}
