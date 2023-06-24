import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {NgFor, DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { IonicModule } from '@ionic/angular';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import { ResultadoexamenesPageRoutingModule } from './resultadoexamenes-routing.module';

import { ResultadoexamenesPage } from './resultadoexamenes.page';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    NgFor,
    DatePipe,
    FormsModule,
    IonicModule,
    ResultadoexamenesPageRoutingModule
  ],
  declarations: [ResultadoexamenesPage]
})
export class ResultadoexamenesPageModule {}
export interface Section {
  name: string;
  updated: Date;
}
