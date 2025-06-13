import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="pt-20 bg-gradient-to-br from-primary-50 to-white">
      <div class="container mx-auto px-4 py-20">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <!-- Content -->
          <div class="flex-1 text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your <span class="text-primary-600">Trusted</span><br>
              Financial Partner
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-lg">
              Experience secure, innovative banking solutions designed to help you achieve your financial goals with confidence.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="btn-primary text-lg px-8 py-4">Open Account</button>
              <button class="btn-secondary text-lg px-8 py-4">Learn More</button>
            </div>
          </div>

          <!-- Image -->
          <div class="flex-1 flex justify-center">
            <div class="relative">
              <div class="w-80 h-80 bg-primary-100 rounded-full flex items-center justify-center">
                <svg class="w-40 h-40 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2h-1z"></path>
                </svg>
              </div>
              <!-- Floating elements -->
              <div class="absolute top-4 right-4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center animate-bounce">
                <svg class="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="absolute bottom-8 left-4 w-20 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <span class="text-sm font-bold text-primary-600">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}