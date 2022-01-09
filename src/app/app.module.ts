import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MyFilterPipe} from "./filter-data.directive";
import {HighlightPipe} from "./highlight.directive";

@NgModule({
  declarations: [
    AppComponent, MyFilterPipe, HighlightPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
