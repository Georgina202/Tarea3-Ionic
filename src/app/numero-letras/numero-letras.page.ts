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
  selector: 'app-numero-letras',
  templateUrl: './numero-letras.page.html',
  styleUrls: ['./numero-letras.page.scss'],
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
export class NumeroLetrasPage {

  numero: number | null = null;
  resultado = '';
  mostrarError = false;
  mensajeError = '';

  convertir(): void {
    if (this.numero === null || this.numero === undefined) {
      this.mostrarError = true;
      this.mensajeError = 'Introduce un número para realizar la conversión.';
      this.resultado = '';
      return;
    }

    const valor = Number(this.numero);

    if (!Number.isInteger(valor)) {
      this.mostrarError = true;
      this.mensajeError = 'Introduce un número entero, sin decimales.';
      this.resultado = '';
      return;
    }

    if (valor < 1 || valor > 1000) {
      this.mostrarError = true;
      this.mensajeError = 'El número debe estar entre 1 y 1000.';
      this.resultado = '';
      return;
    }

    this.resultado = this.numeroALetras(valor);
    this.mostrarError = false;
    this.mensajeError = '';
  }

  limpiar(): void {
    this.numero = null;
    this.resultado = '';
    this.mostrarError = false;
    this.mensajeError = '';
  }

  private numeroALetras(numero: number): string {
    if (numero === 1000) {
      return 'mil';
    }

    if (numero === 100) {
      return 'cien';
    }

    if (numero < 100) {
      return this.convertirMenorDeCien(numero);
    }

    const centenas = Math.floor(numero / 100);
    const resto = numero % 100;

    const nombresCentenas: Record<number, string> = {
      1: 'ciento',
      2: 'doscientos',
      3: 'trescientos',
      4: 'cuatrocientos',
      5: 'quinientos',
      6: 'seiscientos',
      7: 'setecientos',
      8: 'ochocientos',
      9: 'novecientos'
    };

    const textoCentena = nombresCentenas[centenas];

    if (resto === 0) {
      return textoCentena;
    }

    return `${textoCentena} ${this.convertirMenorDeCien(resto)}`;
  }

  private convertirMenorDeCien(numero: number): string {
    const especiales: Record<number, string> = {
      0: '',
      1: 'uno',
      2: 'dos',
      3: 'tres',
      4: 'cuatro',
      5: 'cinco',
      6: 'seis',
      7: 'siete',
      8: 'ocho',
      9: 'nueve',
      10: 'diez',
      11: 'once',
      12: 'doce',
      13: 'trece',
      14: 'catorce',
      15: 'quince',
      16: 'dieciséis',
      17: 'diecisiete',
      18: 'dieciocho',
      19: 'diecinueve',
      20: 'veinte',
      21: 'veintiuno',
      22: 'veintidós',
      23: 'veintitrés',
      24: 'veinticuatro',
      25: 'veinticinco',
      26: 'veintiséis',
      27: 'veintisiete',
      28: 'veintiocho',
      29: 'veintinueve'
    };

    if (numero <= 29) {
      return especiales[numero];
    }

    const decenas: Record<number, string> = {
      3: 'treinta',
      4: 'cuarenta',
      5: 'cincuenta',
      6: 'sesenta',
      7: 'setenta',
      8: 'ochenta',
      9: 'noventa'
    };

    const decena = Math.floor(numero / 10);
    const unidad = numero % 10;

    if (unidad === 0) {
      return decenas[decena];
    }

    return `${decenas[decena]} y ${especiales[unidad]}`;
  }
}