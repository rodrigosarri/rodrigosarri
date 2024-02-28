import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TechnologyExperience } from './skills/skills.model';
import { Job } from './experience/experience.mode';

import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { IdentityComponent } from './identity/identity.component';
import { ExperienceComponent } from './experience/experience.component';

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
  name = "Rodrigo Sarri";
  title = "Desenvolvedor Full Stack Sênior";

  photoUrl = "https://www.rodrigosarri.com.br/static/media/rodrigo_sarri.075797499da9da1af7d1.jpeg";

  aboutMe = "Eu sou um desenvolvedor Full Stack Sênior de forma balanciada entre Frontend e Backend com foco nos frameworks e linguagens de programação: React, Angular e Vue no FE e Laravel (PHP), Node e Python no BE";

  contacts = [
    {
      title: "Email",
      value: "rodrigoasarri@gmail.com"
    },
    {
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/rodrigosarri/"
    }
  ];

  skillsLoading = false;
  skills: TechnologyExperience[] = [
    {
      technology: "PHP",
      experience: 5
    }
  ];

  isLoadingJobs = false;
  jobs: Job[] = [
    {
      position: "Desenvolvedor Full Stack Sênior",
      company: "Locus Custom Software",
      startDate: "OUTUBRO 2022",
      endDate: "FEVEREIRO 2024",
      description: "Descrição de teste",
      technologies: ["Laravel", "Node.js", "HTML5", "CSS3", "JavaScript"]
    }
  ]

}
