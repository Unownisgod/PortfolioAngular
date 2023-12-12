import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;
  darkMode = false;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.cookie = "darkMode=" + this.darkMode;
    this.updateBodyClass();
  }
  readfromcookie() {
    this.darkMode = document.cookie.includes("darkMode=true");
    this.updateBodyClass();
  }
  ngOnInit() {
    this.readfromcookie();
  }
  updateBodyClass() {
    if (this.darkMode) {
      this.renderer.setAttribute(this.document.body, 'data-bs-theme', 'dark');
    } else {
      this.renderer.setAttribute(this.document.body, 'data-bs-theme', 'light');
    }
  }

}
