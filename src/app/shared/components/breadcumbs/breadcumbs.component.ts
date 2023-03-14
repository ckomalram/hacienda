import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcumbs',
  templateUrl: './breadcumbs.component.html',
  styleUrls: ['./breadcumbs.component.css']
})
export class BreadcumbsComponent implements OnInit {


  titulo: string = '';
  tipo: string = '';
  tituloSub$: Subscription;

  constructor(private router: Router) {
    this.tituloSub$ = this.getDataRuta()
      .subscribe((data: any) => {
        console.log(data);
        this.titulo = data.titulo;
        this.tipo = data.tipo;
        document.title = `Hacienda - ${this.titulo}`;
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }
  getDataRuta() {
    return this.router.events
      .pipe(
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );

  }
}
