import { Component, Input, afterNextRender } from '@angular/core';

import { IconButtonComponent } from '@app/icon-button/icon-button.component';

@Component({
  selector: 'app-identity',
  standalone: true,
  imports: [IconButtonComponent],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent {
  @Input() name: string = '';
  @Input() title: string = '';

  theme: 'dark' | 'light' = 'dark';

  constructor() {
    afterNextRender(() => {
      this.initializeTheme();
    });
  }

  initializeTheme(): void {
    const storedTheme = localStorage.getItem('theme');
    this.theme = storedTheme as 'dark' | 'light' || 'dark';
  }

  handleToggleTheme(theme: 'dark' | 'light'): void {
    this.theme = theme;
    localStorage.setItem('theme', theme);
  }
}
