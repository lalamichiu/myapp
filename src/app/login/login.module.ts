import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginPageRoutingModule } from './login-routing.module';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';


import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    NgIf,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

