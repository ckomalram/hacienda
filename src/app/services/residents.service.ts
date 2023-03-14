import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, take } from 'rxjs';

import { LoadResidents, Resident } from '../interfaces/load-residents';

//dummy
import { createResident, getResidents, updateResident,deleteResident } from '../dummy/residents';




@Injectable({
  providedIn: 'root',
})
export class ResidentsService {
  constructor(private http: HttpClient) {}

  loadResidents() {
    // Utilizamos la función de Angular `of` para devolver los datos del archivo dummy
    // en lugar de hacer una llamada real a una API
    return  getResidents();
  }

  createResident(resident: Resident) {
    return createResident(resident);
  }

  updateResident(id: string, resident: Resident) {
    return updateResident(id, resident);
  }

  deleteResident(id: string) {
    return deleteResident(id);
  }




}
