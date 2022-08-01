import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel-principal/painel.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PainelComponent],
  imports: [
    CommonModule,
    PainelRoutingModule,
    SharedModule
  ],
  entryComponents: []
})
export class PainelModule { }
