import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import {AlertController} from "@ionic/angular";
import { ToastController } from '@ionic/angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  modeloUsuario: string = "";
  modeloContrasena: string = "";

  constructor(private dbService: DbService, private alertController: AlertController, private toastController: ToastController, private formBuilder: FormBuilder, private router: Router) { 
    console.log("Constructor de login");
  }

  ngOnInit() {
  }

  validarCredenciales(){
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
    this.router.navigate(['/home']);
  }
    
async mostrarFormulario(){
  const alert = await this.alertController.create({
    header: 'Nuevo usuario',
    inputs: [
      {
        name: 'correo',
        type: 'text',
        placeholder: 'Correo Electrónico'
      },
      {
        name: 'contrasena',
        type: 'password',
        placeholder: 'Contraseña'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Crear usuario',
        handler: (data) => {
          this.almacenarUsuario(data.correo, data.contrasena);
        }
      }
    ]
  });


  await alert.present();
}

almacenarUsuario(correo:string, contrasena:number){
  this.dbService.validarCorreo(correo).then((data) => {
    if(!data){
      console.log("LB: SE VALIDA CORREO");
      this.dbService.almacenarUsuario(correo,contrasena);
    }else{
      this.presentToast();
    }
  });
}

validarUsuario(correo:string, contrasena:number){
  this.dbService.validarCorreo(correo).then((data) => {
    if(!data){
      console.log("LB: SE VALIDA USUARIO");
      this.router.navigate(['/home']);
    }else{
      this.presentToast();
    }
  });
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Usuario ya existe',
    duration: 2000
  });
  toast.present();
}
}
