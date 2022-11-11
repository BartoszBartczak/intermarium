import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { QuizComponent } from './quiz/quiz.component';
import { MainComponent } from './main/main.component';
import { ShowComponent } from './show/show.component';
import { RouterModule } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { MoviesComponent } from './movies/movies.component';
import {MatChipInput, MatChipsModule} from '@angular/material/chips';
import {MatChipInputEvent} from '@angular/material/chips';
import { SchearchFormComponent } from './schearch-form/schearch-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ArticlesComponent, QuizComponent, MainComponent, ShowComponent, ForumComponent, MoviesComponent, SchearchFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ViewsModule { }
