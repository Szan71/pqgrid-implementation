import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridTableRoutingModule } from './grid-table-routing.module';
import { GridTableComponent } from './grid-table/grid-table.component';


@NgModule({
  declarations: [
    GridTableComponent
  ],
  imports: [
    CommonModule,
    GridTableRoutingModule, 
    SharedModule
  ]
})
export class GridTableModule { }
