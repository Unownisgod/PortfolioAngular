import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectComponent } from './app.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve weather forecasts from the server', () => {
    const mockproject = [
      { "title": "title", "description": "description", "tags": ["tag1", "tag2"], "demoLink": "demoLink", "ghLink": "ghLink", "imgLink": "imgLink" }, { "title": "title", "description": "description", "tags": ["tag1", "tag2"], "fullPageLink": "fullPageLink", "demoLink": "demoLink", "ghLink": "ghLink", "imgLink": "imgLink" }, { "title": "title", "description": "description", "tags": ["tag1", "tag2"], "demoLink": "demoLink", "ghLink": "ghLink", "imgLink": "imgLink" }, { "title": "title", "description": "description", "tags": ["tag1", "tag2"], "demoLink": "demoLink", "ghLink": "ghLink", "imgLink": "imgLink" }, { "title": "title", "description": "description", "tags": ["tag1", "tag2"], "demoLink": "demoLink", "ghLink": "ghLink", "imgLink": "imgLink" }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('/api/project');
    expect(req.request.method).toEqual('GET');
    req.flush(mockproject);

    expect(component.projects).toEqual(mockproject);
  });
});
