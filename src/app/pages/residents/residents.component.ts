import { Component, OnInit } from '@angular/core';
import { LoadResidents } from 'src/app/interfaces/load-residents';
import { ResidentsService } from 'src/app/services/residents.service';
import { Resident } from '../../interfaces/load-residents';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styles: [],
})
export class ResidentsComponent implements OnInit {
  loading = true;

  residentsData!: LoadResidents;

  constructor(private residentService: ResidentsService ) {}

  ngOnInit(): void {

    // Simular carga de API.
    setInterval(() => {
      this.loading = false;
    }, 800);

    this.residentsData = this.residentService.loadResidents();
  }

  addResident(){
    const newData: Resident = {
      _id: '63667e8d62758833c693d3de',
      nombre: 'Franky',
      identificacion: '8-888-888',
      correo: 'franky@test.com',
      telefono: '789-456',
      listanegra: false,
      casa: 'A207',
      estado: true,
    };
    const rta = this.residentService.createResident(newData);

    console.log(rta);
  }

  editResident(id: string){
    const editData: Resident = {
      _id: 'prueba',
      nombre: 'prueba',
      identificacion: '8-888-888',
      correo: 'prueba@test.com',
      telefono: '789-456',
      listanegra: false,
      casa: 'A000',
      estado: true,
    };
    const rta = this.residentService.updateResident(id,editData);

    console.log(rta);
  }

  removeResident(id: string){
    const rta = this.residentService.deleteResident(id);

    console.log(rta);
  }
}
