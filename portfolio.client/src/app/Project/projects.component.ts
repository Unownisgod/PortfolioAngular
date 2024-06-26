import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Project } from '../Project';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'projects-root',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = [];
  navbarOpen = false;
  darkMode = false;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private http: HttpClient) { }

  //constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.http.get<any>('/api/project/GetBasicData').subscribe(
      (result) => {
        this.projects = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'Projects';
}
