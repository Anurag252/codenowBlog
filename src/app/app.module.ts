import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FetchCsharpService} from '../app/fetch-csharp.service'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizPlaceHolderComponent } from './quiz-place-holder/quiz-place-holder.component';
import { NavComponentComponent } from './nav-component/nav-component.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizPlaceHolderComponent,
    NavComponentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule
  ],
  providers: [FetchCsharpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
