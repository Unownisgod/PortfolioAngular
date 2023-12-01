import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;
  darkMode = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
