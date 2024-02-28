import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { Job } from './experience.mode';

import { SkeletonComponent } from '@app/skeleton/skeleton.component';

import { StorageService } from '@service/storage-service';

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
export class ExperienceComponent implements OnInit {
  @Input() isLoading: boolean = true;
  @Input() jobs?: Job[];

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
}
