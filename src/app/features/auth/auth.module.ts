import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PedidoResetarSenhaComponent } from './pedido-resetar-senha/pedido-resetar-senha.component';
import { ResetarSenhaComponent } from './resetar-senha/resetar-senha.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, PedidoResetarSenhaComponent, ResetarSenhaComponent]
})
export class AuthModule { }
