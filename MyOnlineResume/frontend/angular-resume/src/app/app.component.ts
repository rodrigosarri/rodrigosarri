import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProfileContacts } from './profile/profile.mode';
import { TechnologyExperience } from './skills/skills.model';
import { Job } from './experience/experience.mode';

import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { IdentityComponent } from './identity/identity.component';
import { ExperienceComponent } from './experience/experience.component';

import contactsJson from '@data/contacts.json';
import skillsJson from '@data/skills.json';
import experiencesJson from '@data/experiences.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainComponent,
    ProfileComponent,
    IdentityComponent,
    ExperienceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  theme: 'dark' | 'light' = 'dark';

  constructor() {
    afterNextRender(() => {
      this.initializeTheme();
    });
  }

  initializeTheme(): void {
    const storedTheme = localStorage.getItem('theme');
    this.theme = storedTheme as 'dark' | 'light' || 'dark';
  }

  name: string = "Rodrigo Sarri";
  title: string = "Desenvolvedor Full Stack Sênior";

  photoUrl: string = "https://www.rodrigosarri.com.br/static/media/rodrigo_sarri.075797499da9da1af7d1.jpeg";

  aboutMe: string = "Eu sou um desenvolvedor Full Stack Sênior de forma balanciada entre Frontend e Backend com foco nos frameworks e linguagens de programação: React, Angular e Vue no FE e Laravel (PHP), Node e Python no BE";

  contacts: ProfileContacts[] = contactsJson as ProfileContacts[];

  skillsLoading: boolean = false;
  skills: TechnologyExperience[] = skillsJson;

  isLoadingJobs: boolean = false;
  jobs: Job[] = experiencesJson;

}
