
// Generated by https://quicktype.io

export interface LoadResidents {
  residents:      Resident[];
  totalResidents: number;
  uid:            string;
  ok:             boolean;
}

export interface Resident {
  _id:            string;
  nombre:         string;
  identificacion: string;
  correo:         string;
  telefono:       string;
  listanegra:     boolean;
  casa:           string;
  estado:         boolean;
}