import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Banking Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to meet your personal and business needs
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let service of services" 
            class="group p-8 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
              <div [innerHTML]="service.icon" class="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            <button class="text-primary-600 hover:text-primary-700 font-medium transition-colors group-hover:translate-x-1 transform duration-300">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services = [
    {
      title: 'Personal Banking',
      description: 'Checking and savings accounts, loans, credit cards, and investment services tailored for individuals.',
      icon: '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>'
    },
    {
      title: 'Business Banking',
      description: 'Complete business solutions including merchant services, payroll, and commercial lending.',
      icon: '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clip-rule="evenodd"></path></svg>'
    },
    {
      title: 'Investment Services',
      description: 'Professional investment management, retirement planning, and wealth building strategies.',
      icon: '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path></svg>'
    },
    {
      title: 'Mobile Banking',
      description: 'Advanced mobile app with secure transactions, mobile deposits, and real-time notifications.',
      icon: '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V4zm2.5 9a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" clip-rule="evenodd"></path></svg>'
    },
    {
      title: 'Loans & Mortgages',
      description: 'Competitive rates on home loans, auto loans, personal loans, and refinancing options.',
      icon: '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z"></path></svg>'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical support to assist you whenever you need help.',
      icon: '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-1.106-1.106A6.002 6.002 0 004 10c0 .561.077 1.105.221 1.625l.937-.508zm8.95-2.811a4.002 4.002 0 00-3.478-3.478l1.06-1.06A5.98 5.98 0 0116 10c0 .295-.022.588-.063.874l-1.829-1.068z" clip-rule="evenodd"></path></svg>'
    }
  ];
}