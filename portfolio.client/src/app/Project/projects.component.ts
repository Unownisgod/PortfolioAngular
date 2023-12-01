import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';

@Component({
  selector: 'projects-root',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.http.get<any>('/api/project').subscribe(
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
