export interface ObjetoNota {
  idAsignatura: string;
  nombre: string;
  year: number;
  semestre: number;
  datosNota: InfoNota[];
}

export interface InfoNota {
  nota: number;
  ponderacion: number;
  nNota: number;
}
