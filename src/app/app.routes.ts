import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sumadora',
    loadComponent: () => import('./sumadora/sumadora.page').then( m => m.SumadoraPage)
  },
  {
    path: 'numero-letras',
    loadComponent: () => import('./numero-letras/numero-letras.page').then( m => m.NumeroLetrasPage)
  },
  
  {
    path: 'tabla',
    loadComponent: () => import('./tabla/tabla.page').then( m => m.TablaPage)
  },
  {
    path: 'experiencia',
    loadComponent: () => import('./experiencia/experiencia.page').then( m => m.ExperienciaPage)
  },
];
