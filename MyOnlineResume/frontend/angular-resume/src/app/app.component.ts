import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProfileContacts } from './profile/profile.mode';
import { TechnologyExperience } from './skills/skills.model';
import { Job } from './experience/experience.mode';

import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { IdentityComponent } from './identity/identity.component';
import { ExperienceComponent } from './experience/experience.component';

import { StorageService } from '@service/storage-service';

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

export class AppComponent implements OnInit {
  theme: 'dark' | 'light' = 'dark';

  constructor(
    private storageService: StorageService,
    private cdRef: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    this.storageService.theme$.subscribe(theme => {
      this.theme = theme as 'dark' | 'light';
      this.cdRef.detectChanges();
    });
  }

  name: string = "Rodrigo Sarri";
  title: string = "Desenvolvedor Full Stack Sênior";

  photoUrl: string = "/assets/images/rodrigo_sarri.jpeg";

  aboutMe: string = "Eu sou um desenvolvedor Full Stack Sênior de forma balanciada entre Frontend e Backend com foco nos frameworks e linguagens de programação: React, Angular e Vue no FE e Laravel (PHP), Node e Python no BE";

  contacts: ProfileContacts[] = contactsJson as ProfileContacts[];

  skillsLoading: boolean = false;
  skills: TechnologyExperience[] = skillsJson;

  isLoadingJobs: boolean = false;
  jobs: Job[] = experiencesJson;

}
