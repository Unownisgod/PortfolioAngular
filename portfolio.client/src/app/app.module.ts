import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProjectComponent } from './Project/projects.component';
import { HomeComponent } from './Home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SchoolWebappComponent } from './school-webapp/school-webapp.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'projects/SchoolWebapp', component: SchoolWebappComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HomeComponent,
    SchoolWebappComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
