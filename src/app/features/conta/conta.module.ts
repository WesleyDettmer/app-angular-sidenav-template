import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { PaginaContaComponent } from './pagina-conta/pagina-conta.component';
import { TrocarSenhaComponent } from './trocar-senha/trocar-senha.component';
import { PerfilDetalhesComponent } from './perfil-detalhes/perfil-detalhes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContaRoutingModule
    
  ],
  declarations: [PaginaContaComponent, TrocarSenhaComponent, PerfilDetalhesComponent],
  exports: [PaginaContaComponent]
})
export class ContaModule { }
