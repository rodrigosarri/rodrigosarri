import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TechnologyExperience } from './skills.model';

import { SkeletonComponent } from '@app/skeleton/skeleton.component';

import { StorageService } from '@service/storage-service';

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

export class SkillsComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() skills: TechnologyExperience[] | null = null;

  maxDots: number = 5;

  theme: 'dark' | 'light' = 'dark';

  constructor(private storageService: StorageService) {

  }

  ngOnInit(): void {
    this.storageService.theme$.subscribe(theme => {
      this.theme = theme;
    });
  }
}
