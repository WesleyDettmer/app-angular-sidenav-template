import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'painel',
    loadChildren: () => import('./features/painel/painel.module').then(m => m.PainelModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'planeta',
    loadChildren: () => import('./features/planeta/planeta.module').then(m => m.PlanetaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./features/usuarios/users.module').then(m => m.UsuarioModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'conta',
    loadChildren: () => import('./features/conta/conta.module').then(m => m.ContaModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'painel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
