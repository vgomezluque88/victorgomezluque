import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CubespinnerComponent } from './widget/cubespinner/cubespinner.component';
import { ImgborderComponent } from './widget/imgborder/imgborder.component';
import { LinealhistoryComponent } from './widget/linealhistory/linealhistory.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'victorgomezluque';
}
