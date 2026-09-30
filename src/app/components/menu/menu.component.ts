import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuToggle
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  addOutline,
  textOutline,
  gridOutline,
  playCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenuToggle
  ]
})
export class MenuComponent {

  menuItems = [
    {
      title: 'Inicio',
      subtitle: 'Página principal',
      icon: 'home-outline',
      route: '/home'
    },
    {
      title: 'Sumadora',
      subtitle: 'Suma dos números',
      icon: 'add-outline',
      route: '/sumadora'
    },
    {
      title: 'Número a letras',
      subtitle: 'Del 1 al 1000',
      icon: 'text-outline',
      route: '/numero-letras'
    },
    {
      title: 'Tabla',
      subtitle: 'Tabla de multiplicar',
      icon: 'grid-outline',
      route: '/tabla'
    },
    {
      title: 'Mi experiencia',
      subtitle: 'Experiencia personal',
      icon: 'play-circle-outline',
      route: '/experiencia'
    }
  ];

  constructor() {
    addIcons({
      homeOutline,
      addOutline,
      textOutline,
      gridOutline,
      playCircleOutline
    });
  }
}