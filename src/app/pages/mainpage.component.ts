import { Component, OnInit } from '@angular/core';

declare function customInitFunction(): any;

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    customInitFunction();
  }

}
