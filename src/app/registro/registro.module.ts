import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
MatButtonModule,
    
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    MatToolbarModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
