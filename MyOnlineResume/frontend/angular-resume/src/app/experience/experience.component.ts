import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Job } from './experience.mode';

import { SkeletonComponent } from '@app/skeleton/skeleton.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    SkeletonComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() isLoading: boolean = true;
  @Input() jobs?: Job[];
}
