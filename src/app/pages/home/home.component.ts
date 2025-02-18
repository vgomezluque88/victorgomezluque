import { Component } from '@angular/core';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ProyectosHomeComponent } from './components/proyectos-home/proyectos-home.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    imports: [HomeSliderComponent, SkillsComponent, ExperienceComponent, SeparatorComponent, ProyectosHomeComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

    constructor(private titleService: Title, private metaService: Meta) {
        this.setSEO();
    }

    setSEO() {
        this.titleService.setTitle('Victor Gomez Luque - Desarrollador Web & WordPress Expert');

        this.metaService.updateTag({ name: 'description', content: 'Soy Victor Gomez Luque, desarrollador web con 5 años de experiencia en Angular, WordPress y Python. Descubre mis proyectos, habilidades y experiencia en programación.' });

        this.metaService.updateTag({ name: 'keywords', content: 'Victor Gomez Luque, desarrollador web, Angular, WordPress, Python, programación, proyectos, experiencia, desarrollo web' });

        // Open Graph para LinkedIn y Facebook
        this.metaService.updateTag({ property: 'og:title', content: 'Victor Gomez Luque - Desarrollador Web & WordPress Expert' });

        this.metaService.updateTag({ property: 'og:description', content: 'Explora mis proyectos, habilidades y experiencia en desarrollo web con Angular, WordPress, Python y más. 5 años creando soluciones digitales.' });

        this.metaService.updateTag({ property: 'og:image', content: 'http://victorgomezluque.vercel.app/assets/img/icon.webp' });

        this.metaService.updateTag({ property: 'og:url', content: 'https://tudominio.com' });

        this.metaService.updateTag({ property: 'og:type', content: 'profile' });

        // LinkedIn-specific meta tags
        this.metaService.updateTag({ property: 'og:profile:first_name', content: 'Victor' });
        this.metaService.updateTag({ property: 'og:profile:last_name', content: 'Gomez Luque' });
        this.metaService.updateTag({ property: 'og:profile:username', content: 'victorgomezluque' });
        this.metaService.updateTag({ property: 'og:profile:gender', content: 'male' });
    }

}
