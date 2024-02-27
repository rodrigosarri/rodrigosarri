import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainComponent,
    ProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  aboutMe = "Eu sou um desenvolvedor Full Stack Sênior de forma balanciada entre Frontend e Backend com foco nos frameworks e linguagens de programação: React, Angular e Vue no FE e Laravel (PHP), Node e Python no BE";

  photoUrl = "https://www.rodrigosarri.com.br/static/media/rodrigo_sarri.075797499da9da1af7d1.jpeg";

}
