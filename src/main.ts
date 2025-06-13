import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { ServicesComponent } from './components/services.component';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-services></app-services>
        <app-about></app-about>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class App {}

bootstrapApplication(App);