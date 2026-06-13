import { Routes } from '@angular/router';

import { Register } from './authent/register/register'
import { Login } from './authent/login/login';

export const routes: Routes = [
  
    {
        path: '',
        component: Login
    },

    {
        path: 'creercpte',
        component: Register
    },
  
  { 
    path: 'lay',
    loadComponent: () =>
      import('./layout/layoutdash/layoutdash').then(m => m.Layoutdash),

    children: [
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full'
      // },

      {
        path: 'dashbo',
        loadComponent: () =>
          import('./pages/dashboard/dashboard').then(m => m.Dashboard)
      },

      {
        path: 'entree',
        loadComponent: () =>
          import('./pages/entree/entree').then(m => m.Entree)
      },

      {
        path: 'sortie',
        loadComponent: () =>
          import('./pages/sortie/sortie').then(m => m.Sortie)
      },

      {
        path: 'site',
        loadComponent: () =>
          import('./pages/site/site').then(m => m.Site)
      },

      {
        path: 'eqpt',
        loadComponent: () =>
          import('./pages/equipt/equipt').then(m => m.Equipt)
      },

      {
        path: 'missi',
        loadComponent: () =>
          import('./pages/mission/mission').then(m => m.Mission)
      },

      {
        path: 'tech',
        loadComponent: () =>
         import('./pages/technicien-it/technicien-it').then(m => m.TechnicienIT)
      },

    ]
    
    
  },

]
  
  

