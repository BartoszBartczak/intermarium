import { Component, OnInit } from '@angular/core';
import { articlesMock } from "src/app/artics";
import { Article } from "src/app/artics.model";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  articles: Article[] = articlesMock;

  ngOnInit(): void {
  }

}
