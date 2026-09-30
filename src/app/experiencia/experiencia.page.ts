import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton
} from '@ionic/angular';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton
  ]
})
export class ExperienciaPage {

  /*
   * Cuando grabemos y subamos el video a YouTube,
   * colocaremos aquí el enlace/embed definitivo.
   */
  videoDisponible = false;

}