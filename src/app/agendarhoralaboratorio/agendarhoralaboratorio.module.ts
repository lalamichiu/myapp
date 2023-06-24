import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AgendarhoralaboratorioPageRoutingModule } from './agendarhoralaboratorio-routing.module';

import { AgendarhoralaboratorioPage } from './agendarhoralaboratorio.page';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    IonicModule,
    AgendarhoralaboratorioPageRoutingModule
  ],
  declarations: [AgendarhoralaboratorioPage]
})
export class AgendarhoralaboratorioPageModule {}
