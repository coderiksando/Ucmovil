import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  // Utilizado como dato persistente entre lobby e ingresoNoticia mantiene un objeto necesario
  // Este servicio es necesario para páginas que hacen búsqueda de datos y lo requieran en otra página
  noticiaObjetoEditar: any;
  chatsALeer: any;

  constructor() { }
}
