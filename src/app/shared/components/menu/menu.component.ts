import { Component } from '@angular/core';
import { MenuItem } from 'src/app/countries/interfaces/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public reactiveMenu: MenuItem[] = [
    {
      title: 'Capital',
      route: '/countries/by-capital',
    },
    {
      title: 'País',
      route: '/countries/by-country',
    },
    {
      title: 'Historial',
      route: '/countries/search-history',
    },
  ];
}
