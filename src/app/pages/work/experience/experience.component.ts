import { Component } from '@angular/core';

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  events = [
    { year: '2019', title: 'Namibia Holidays', description: 'We survived our first holiday season at the restaurant and took a one week holiday which was simply mind blowing.', icon: 'fas fa-globe-africa' },
    { year: '2020', title: 'Business Expansion', description: 'We opened a second location in another city and increased our team.', icon: 'fas fa-store' },
    { year: '2021', title: 'Tech Upgrade', description: 'Implemented a new POS system for better customer service.', icon: 'fas fa-laptop' }
  ];
}
