import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { PerfilService } from 'src/app/services/perfil.service';
import { HorariosService } from '../../services/horarios.service';
import { AlertController, ModalController, IonSearchbar } from '@ionic/angular';
import { ModalHorarioPage } from '../../modals/modal-horario/modal-horario.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any;       // Objeto con los datos del usuario activo.
  saveEmail = false;  // Booleano que activa el boton de guardado de email.
  savePhone = false;  // Booleano que activa el boton de guardado de telefono.
  tabla: any[][][] = [];  // Cubo que guarda los horarios ocupados.
  dias = {Lunes: 0, Martes: 1, Miercoles: 2, Jueves: 3, Viernes: 4};  // Aisgnacion de valor numerico a los dias de la semana.
  horas = ['8:30', '9:35', '10:50', '11:55', '13:10', '14:30', '15:35', '16:50', '17:55', '19:10', '20:15', '21:20'];
  constructor(private loginService: LoginService,
              private perfilService: PerfilService,
              private horariosService: HorariosService,
              public alertController: AlertController,
              public modalController: ModalController) { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {     // Inicializacion de la matriz de 3 dimensiones.
     this.tabla[i] = [];
     for (let j = 0; j < 12; j++) {
      this.tabla[i][j] = [];
     }
    }
    this.usuario = this.loginService.datosDetalle[0]; // Se cargan los datos del usario activo.
    this.horariosService.getHorarios().subscribe((horarios: any[]) => {     // Se cargan los horarios ocupados del usario activo.
      horarios.forEach(horario => {
        this.tabla[this.dias[horario.dia]][horario.modulo - 1].push(horario); // Se guardan los horarios en la matriz.
      });
    });
  }

  toggleEmail() {   // Funcion para cambiar el boton que se muestra junto al email.
    this.saveEmail = true;
  }

  togglePhone() {   // Funcion para cambiar el boton que se muestra junto al telefono.
    this.savePhone = true;
  }

  guardarEmail() {    // Funcion para guardar el email.
    this.saveEmail = false;
    this.perfilService.setEmail(this.usuario.email).subscribe();
  }

  guardarPhone() {  // Funcion para guardar el telefono.
    this.savePhone = false;
    this.perfilService.setPhone(this.usuario.telefono).subscribe();
  }


  async onClick(arrayHorarios: any[]) {       // Modal que presenta la informacion de un ramo al hacer click.
    const modal = await this.modalController.create({
      component: ModalHorarioPage,
      componentProps: {
        horarios: arrayHorarios,
      },
      cssClass: 'horarioModal'
    });
    return await modal.present();
  }
}
