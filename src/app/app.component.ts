import { Component } from '@angular/core';
import {
  IonApp,
  IonMenu,
  IonRouterOutlet
} from '@ionic/angular';

import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonMenu,
    IonRouterOutlet,
    MenuComponent
  ],
})
export class AppComponent {
  constructor() {}
}