import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styles: [],
})
export class ResidentsComponent implements OnInit {
  loading = true;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.loading = false;
    }, 1500);
  }
}
