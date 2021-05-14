import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { QuizComponent } from './quiz/quiz.component';
import { MainComponent } from './main/main.component';
import { ShowComponent } from './show/show.component';
import { RouterModule } from '@angular/router';
import { ForumComponent } from './forum/forum.component';



@NgModule({
  declarations: [ArticlesComponent, QuizComponent, MainComponent, ShowComponent, ForumComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ViewsModule { }
