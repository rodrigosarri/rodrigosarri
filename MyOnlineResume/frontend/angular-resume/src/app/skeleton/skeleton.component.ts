import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {
  @Input() width: string = '100%';
  @Input() height: string = '24px';
  @Input() borderRadius: string = '4px';
  @Input() duration: string = '2s';
  @Input() theme: 'dark' | 'light' = 'dark';
}
