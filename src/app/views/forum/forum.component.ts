import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  list:any[]=[];

  addComment(item:string) {
      this.list.push({id:this.list.length, name:item})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
