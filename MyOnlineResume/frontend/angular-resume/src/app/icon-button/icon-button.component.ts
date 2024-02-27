import { Component, Input } from '@angular/core';
import { IconComponent } from '@app/icon/icon.component';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() activated: boolean = false;
}
