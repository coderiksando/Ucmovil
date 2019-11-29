import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  // Utilizado como dato persistente entre lobby e ingresoNoticia mantiene un objeto necesario
  noticiaObjetoEditar: any;

  constructor() { }
}
