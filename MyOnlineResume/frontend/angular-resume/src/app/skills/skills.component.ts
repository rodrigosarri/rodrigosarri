import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TechnologyExperience } from './skills.model';

import { SkeletonComponent } from '@app/skeleton/skeleton.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    SkeletonComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {
  @Input() isLoading: boolean = false;
  @Input() skills: TechnologyExperience[] | null = null;

  maxDots: number = 5;
}
