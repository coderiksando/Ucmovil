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

  usuario: any;
  saveEmail = false;
  savePhone = false;
  tabla: any[][][] = [];
  dias = {Lunes: 0, Martes: 1, Miercoles: 2, Jueves: 3, Viernes: 4};

  constructor(private loginService: LoginService,
              private perfilService: PerfilService,
              private horariosService: HorariosService,
              public alertController: AlertController,
              public modalController: ModalController) { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
     this.tabla[i] = [];
     for (let j = 0; j < 12; j++) {
      this.tabla[i][j] = [];
     }
    }
    this.usuario = this.loginService.datosDetalle[0];
    this.horariosService.getHorarios().subscribe((horarios: any[]) => {
      horarios.forEach(horario => {
        this.tabla[this.dias[horario.dia]][horario.modulo - 1].push(horario);
      });
      console.log(this.tabla);
    });
  }

  toggleEmail() {
    this.saveEmail = true;
  }

  togglePhone() {
    this.savePhone = true;
  }

  guardarEmail() {
    this.saveEmail = false;
    this.perfilService.setEmail(this.usuario.email).subscribe();
  }

  guardarPhone() {
    this.savePhone = false;
    this.perfilService.setPhone(this.usuario.telefono).subscribe();
  }


  async onClick(arrayHorarios: any[]) {
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
