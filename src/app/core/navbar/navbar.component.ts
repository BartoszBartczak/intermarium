import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  Kontakt:boolean = true

  constructor() { }

  clickEvent(){
    this.Kontakt=!this.Kontakt;
    
  }
  

  ngOnInit(): void {
  }

}
