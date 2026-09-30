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

interface FilaTabla {
  multiplicador: number;
  resultado: number;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
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
export class TablaPage {

  numero: number | null = null;
  tabla: FilaTabla[] = [];

  mostrarError = false;
  mensajeError = '';

  generarTabla(): void {
    if (
      this.numero === null ||
      this.numero === undefined ||
      this.numero === ('' as unknown as number)
    ) {
      this.mostrarError = true;
      this.mensajeError = 'Introduce un número para generar la tabla.';
      this.tabla = [];
      return;
    }

    const valor = Number(this.numero);

    if (!Number.isFinite(valor)) {
      this.mostrarError = true;
      this.mensajeError = 'Introduce un número válido.';
      this.tabla = [];
      return;
    }

    this.tabla = Array.from(
      { length: 13 },
      (_, indice) => ({
        multiplicador: indice + 1,
        resultado: valor * (indice + 1)
      })
    );

    this.mostrarError = false;
    this.mensajeError = '';
  }

  limpiar(): void {
    this.numero = null;
    this.tabla = [];
    this.mostrarError = false;
    this.mensajeError = '';
  }
}