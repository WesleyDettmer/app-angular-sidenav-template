import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetaRoutingModule } from './planeta-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarPlanetasComponent } from './listar-planetas/listar-planetas.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    PlanetaRoutingModule,
    SharedModule
  ],
  declarations: [
    ListarPlanetasComponent
  ],
  entryComponents: [
  ]
})
export class PlanetaModule { }
