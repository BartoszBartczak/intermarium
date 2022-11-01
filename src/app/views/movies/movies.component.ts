import { Component, OnInit } from '@angular/core';
//import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor() { }
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  separatorKeysCodes = [ENTER, COMMA];

  tags = [
    { name: 'Polityka' },
    { name: 'Ekonomia' },
    { name: 'Historia' },
  ];

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    
    if (input) {
      input.value = '';
    }
  }

  remove(tag: any): void {
    let index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

}

  


