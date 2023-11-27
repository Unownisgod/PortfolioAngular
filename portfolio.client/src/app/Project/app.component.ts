import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  demolink: string;
  ghlink: string;
  imglink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProjectComponent implements OnInit {
  private baseUrl = "https://localhost:5016/api/project";

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

  title = 'portfolio.client';
}
