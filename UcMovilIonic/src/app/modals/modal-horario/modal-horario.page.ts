import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-horario',
  templateUrl: './modal-horario.page.html',
  styleUrls: ['./modal-horario.page.scss'],
})
export class ModalHorarioPage implements OnInit {

  constructor() { }

  @Input() horarios: any[];

  ngOnInit() {
  }

}
