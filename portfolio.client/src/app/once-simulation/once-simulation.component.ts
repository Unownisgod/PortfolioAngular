import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Project } from '../Project';
import { MarkdownComponent } from 'ngx-markdown';


@Component({
  selector: 'app-once-simulation',
  templateUrl: './once-simulation.component.html',
  styleUrls: ['./once-simulation.component.css']
})
export class OnceSimulationComponent {
  project!: Project;
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private http: HttpClient) { }
  darkMode = false;

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.http.get<any>('/api/project/GetAllDataById?id=2').subscribe(
      (result) => {
        this.project = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
