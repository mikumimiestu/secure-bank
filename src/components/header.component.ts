import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-white shadow-lg fixed w-full top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2h-1z"></path>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-800">SecureBank</span>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</a>
            <a href="#services" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">Services</a>
            <a href="#about" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">About</a>
            <a href="#contact" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contact</a>
          </nav>

          <!-- Desktop CTA -->
          <div class="hidden md:flex space-x-4">
            <button class="text-primary-600 hover:text-primary-700 font-medium transition-colors">Login</button>
            <button class="btn-primary">Open Account</button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden p-2"
            (click)="toggleMobileMenu()"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path [attr.d]="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div 
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          [class.max-h-0]="!isMenuOpen"
          [class.max-h-96]="isMenuOpen"
        >
          <nav class="py-4 space-y-4 border-t border-gray-200">
            <a href="#home" class="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors" (click)="closeMenu()">Home</a>
            <a href="#services" class="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors" (click)="closeMenu()">Services</a>
            <a href="#about" class="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors" (click)="closeMenu()">About</a>
            <a href="#contact" class="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors" (click)="closeMenu()">Contact</a>
            <div class="pt-4 space-y-2">
              <button class="block w-full text-left text-primary-600 hover:text-primary-700 font-medium py-2 transition-colors">Login</button>
              <button class="btn-primary w-full">Open Account</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}