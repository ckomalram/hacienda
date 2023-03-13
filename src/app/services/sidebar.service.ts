import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Residentes',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Resumen' , url: '/'},
        {titulo: 'Lista de Residentes' , url: 'residents-list'},
      ]
    },
    {
      titulo: 'Visitantes',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Resumen' , url: '/'},
        {titulo: 'Lista de Visitantes' , url: 'visitors-list'},
      ]
    },    {
      titulo: 'Seguridad',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Resumen' , url: '/'},
        {titulo: 'Lista de Personal' , url: 'security-list'},
      ]
    },    {
      titulo: 'Configuración',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Resumen' , url: '/'},
        {titulo: 'Parametros' , url: 'configuration'},
      ]
    },
    // {
    //   titulo: 'Reportería',
    //   icono: 'mdi mdi-folder-lock-open',
    //   submenu: [
    //     {titulo: 'Vehiculos' , url: 'reporte-vehiculo'},
    //     {titulo: 'Prodiedades' , url: 'reporte-propiedad'},
    //   ]
    // }
  ];


  constructor() { }
}
