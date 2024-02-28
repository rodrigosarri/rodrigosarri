import { Component, Input, OnInit } from '@angular/core';

import { IconButtonComponent } from '@app/icon-button/icon-button.component';

import { StorageService } from '@service/storage-service';

@Component({
  selector: 'app-identity',
  standalone: true,
  imports: [IconButtonComponent],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent implements OnInit {
  @Input() name: string = '';
  @Input() title: string = '';

  theme: 'dark' | 'light' = 'dark';

  constructor(private storageService: StorageService) {

  }

  ngOnInit(): void {
    this.storageService.theme$.subscribe(theme => {
      this.theme = theme;
    });
  }

  handleToggleTheme(theme: 'dark' | 'light'): void {
    this.theme = theme;
    this.storageService.setTheme(theme);
  }
}
