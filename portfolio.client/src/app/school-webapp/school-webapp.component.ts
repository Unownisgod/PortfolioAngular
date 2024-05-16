import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Project } from '../Project';

@Component({
  selector: 'app-shcool-webapp',
  templateUrl: './school-webapp.component.html',
  styleUrls: ['./school-webapp.component.css']
})
export class SchoolWebappComponent {
  project!: Project;
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private http: HttpClient) { }
  darkMode = false;

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.http.get<any>('/api/project/GetAllDataById?id=1').subscribe(
      (result) => {
        this.project = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
