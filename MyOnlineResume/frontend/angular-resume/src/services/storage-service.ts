import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private theme = new BehaviorSubject<'dark' | 'light'>('dark');

  constructor(@Inject(PLATFORM_ID) private platformId: string | object) {
    if (isPlatformBrowser(this.platformId)) {
      this.theme.next(this.getTheme());
    }
  }

  theme$ = this.theme.asObservable();

  getTheme(): 'dark' | 'light' {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    }

    return 'dark';
  }

  setTheme(value: 'dark' | 'light'): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', value);
      this.theme.next(value);
    }
  }
}
