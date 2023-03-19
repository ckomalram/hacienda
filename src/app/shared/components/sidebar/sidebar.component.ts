import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent  {
  /**
   * TODO: CREAR METODO DE LOGOUT E IMPLEMENTAR EN BOTON DE HTML
   * TODO: IMPLEMENTAR SERVICIO PARA HACER LOGOUT
   * TODO: CREAR PRUEBA DE INTEGRACION CON EL SERVICIO DE LOGOUT
   * TODO: CREAR PRUEBA unitaria de array de menus
   * TODO: CREAR PRUEBA DE INTEGRACION de click de botones en el html
   **/

  // public user: User;

  menuItems: any[];

  constructor(private sidebarservice: SidebarService) {
    this.menuItems = sidebarservice.menu;
  }

  // ngOnInit(): void {}

  logout() {
    console.log('Saliendo de la aplicación');
    return true;
    // this.userService.logout();
  }
}
