import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems = [
    { path: '/directivas', label: 'Directivas' },
    { path: '/contacto', label: 'Contacto' }
  ];
}
