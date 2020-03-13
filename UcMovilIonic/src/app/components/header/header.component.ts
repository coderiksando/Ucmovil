import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Este componente será un header el cual puede poseer un boton de retroceso y un titulo

  @Input() titulo: string;
  @Input() botonRegresoCancelar: boolean;

  constructor() { }

  ngOnInit() {}

}
