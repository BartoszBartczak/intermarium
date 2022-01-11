import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articlesMock } from "src/app/artics";
import { Article } from "src/app/artics.model";


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  article: Article = articlesMock[0];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.article = articlesMock[parseInt(params.id)];
    });
  }
}
