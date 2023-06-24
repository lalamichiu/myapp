import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modeloUsuario: string = "";
  modeloContrasena: string = "";

  constructor(private dbService: DbService, private alertController: AlertController) { 
    console.log("Constructor de login");
  }

  ngOnInit() {
  }

  validarCredenciales(){
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
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
  this.dbService.almacenarUsuario(correo,contrasena);
}
}