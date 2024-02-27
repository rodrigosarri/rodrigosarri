import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '@app/icon/icon.component';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() activated: boolean = false;
  @Input() icon!: string;
}
