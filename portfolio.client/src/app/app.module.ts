import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProjectComponent } from './project/app.component';

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [ProjectComponent]
})
export class AppModule { }
