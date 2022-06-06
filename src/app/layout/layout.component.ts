import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    console.log(event.target.innerWidth);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
