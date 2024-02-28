import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ProfileContacts } from './profile.mode';
import { TechnologyExperience } from '@app/skills/skills.model';

import { PhotoComponent } from '@app/photo/photo.component';
import { SkillsComponent } from '@app/skills/skills.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent,
    SkillsComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  @Input() photoUrl!: string;
  @Input() aboutMe!: string;
  @Input() contacts?: ProfileContacts[];
  @Input() skillsLoading: boolean = false;
  @Input() skills!: TechnologyExperience[];
}
