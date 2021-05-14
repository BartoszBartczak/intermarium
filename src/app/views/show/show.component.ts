import { Component, OnInit } from '@angular/core';
import { articlesMock } from "src/app/artics";
import { Article } from "src/app/artics.model";


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  article: Article = articlesMock[0];

}
