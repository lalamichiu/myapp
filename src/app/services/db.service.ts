import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private router: Router, private sqlite: SQLite) { 
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS USUARIO(MAIL VARCHAR(75), CONTRASENA VARCHAR(30))', []).then(() => {
      console.log('LB: TABLA CREADA OK');
      }).catch(e => {
        console.log('LB: TABLA NO CREADA');
    })
    }).catch(e => {
        console.log('LB: BASE DE DATOS NO CREADA');
    })
  }

  almacenarUsuario(correo:string,contrasena:number){
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO USUARIO VALUES(?,?)', [correo,contrasena]).then(() => {
      console.log('LB: USUARIO CREADO');
      }).catch(e => {
        console.log('LB: NO SE PUDO CREAR USUARIO');
    })
    }).catch(e => {
        console.log('LB: BASE DE DATOS NO CREADA');
    })
  }

  validarUsuario(correo:string, contrasena:number){
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT COUNT(MAIL) AS CANTIDAD FROM USUARIO WHERE MAIL = ?', [correo,contrasena]).then(() => {
      console.log('LB: INICIO SESION OK');
      }).catch(e => {
        console.log('LB: NO SE PUDO INICIAR SESION');
    })
    }).catch(e => {
        console.log('LB: NO SE PUDO INICIAR SESION');
    })
  }

  validarCorreo(correo:string){
    return this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      return db.executeSql('SELECT COUNT(MAIL) AS CANTIDAD FROM USUARIO WHERE MAIL = ?', [correo]).then((data) => {

        if(data.rows.item(0).CANTIDAD == 0){
          return false; //No existe el correo
        }
        return true;
      }).catch(e => {
        return true;
    })
    }).catch(e => {
      return true;
    })
  }

  

  canActivate(){
this.router.navigate(['login']);
    return false;
  }
}

