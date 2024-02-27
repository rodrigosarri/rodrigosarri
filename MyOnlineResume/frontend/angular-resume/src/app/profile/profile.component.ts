import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProfileContacts } from './profile.mode';

import { PhotoComponent } from '@app/photo/photo.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  @Input() photoUrl!: string;
  @Input() aboutMe!: string;
  @Input() contacts?: ProfileContacts[];
}
