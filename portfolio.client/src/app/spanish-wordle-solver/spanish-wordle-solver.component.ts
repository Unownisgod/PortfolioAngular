import { Component, Inject, Renderer2 } from '@angular/core';
import { Project } from '../Project';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spanish-wordle-solver',
  templateUrl: './spanish-wordle-solver.component.html',
  styleUrls: ['./spanish-wordle-solver.component.css']
})
export class SpanishWordleSolverComponent {
  project!: Project;
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private http: HttpClient) { }
  darkMode = false;

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.http.get<any>('/api/project/GetAllDataById?id=4').subscribe(
      (result) => {
        this.project = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
