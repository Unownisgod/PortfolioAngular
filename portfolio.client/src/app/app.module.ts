import { HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { ProjectComponent } from './Project/projects.component';
import { HomeComponent } from './Home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SchoolWebappComponent } from './school-webapp/school-webapp.component';
import { OnceSimulationComponent } from './once-simulation/once-simulation.component';
import { StockSimulatorComponent } from './stock-simulator/stock-simulator.component';
import { SpanishWordleSolverComponent } from './spanish-wordle-solver/spanish-wordle-solver.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'projects/SchoolWebapp', component: SchoolWebappComponent },
  { path: 'projects/OnceSimulation', component: OnceSimulationComponent },
  { path: 'projects/StocksSimulator', component: StockSimulatorComponent },
  { path: 'projects/SpanishWordleSolver', component: SpanishWordleSolverComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HomeComponent,
    SchoolWebappComponent,
    OnceSimulationComponent,
    StockSimulatorComponent,
    SpanishWordleSolverComponent
  ],
  imports: [
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
    MarkdownModule.forChild(),
    RouterModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
