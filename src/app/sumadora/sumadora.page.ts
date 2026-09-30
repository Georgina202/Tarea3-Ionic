import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton
} from '@ionic/angular';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton
  ]
})
export class SumadoraPage {

  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number | null = null;
  mostrarError = false;

  sumar(): void {
    if (
      this.numero1 === null ||
      this.numero2 === null ||
      this.numero1 === undefined ||
      this.numero2 === undefined
    ) {
      this.resultado = null;
      this.mostrarError = true;
      return;
    }

    this.resultado = Number(this.numero1) + Number(this.numero2);
    this.mostrarError = false;
  }

  limpiar(): void {
    this.numero1 = null;
    this.numero2 = null;
    this.resultado = null;
    this.mostrarError = false;
  }
}