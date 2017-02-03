import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompExamples } from './app.examples';
import { PipeComponent } from './app.pipeExamples'
import { UpperCaseText } from './app.myDirective';

@NgModule({
  declarations: [
    AppComponent,
    CompExamples,
    PipeComponent,
    UpperCaseText,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
