import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  @Input() src!: string;
  @Input() alt: string = 'Imagem de perfil';
}
