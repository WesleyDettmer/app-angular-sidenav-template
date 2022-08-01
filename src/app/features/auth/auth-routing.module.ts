import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PedidoResetarSenhaComponent } from './pedido-resetar-senha/pedido-resetar-senha.component';
import { ResetarSenhaComponent } from './resetar-senha/resetar-senha.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pedido-resetar-senha', component: PedidoResetarSenhaComponent },
  { path: 'resetar-senha', component: ResetarSenhaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
