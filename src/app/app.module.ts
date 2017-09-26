import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryFilterPipe } from './filter/filter-category';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
