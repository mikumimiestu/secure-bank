import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted by thousands since 1985
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              SecureBank has been serving our community for over 35 years, providing reliable financial services
              and building lasting relationships with our customers. Our commitment to innovation and security
              has made us a leader in modern banking solutions.
            </p>
            
            <div class="grid sm:grid-cols-2 gap-8 mb-8">
              <div class="text-center sm:text-left">
                <div class="text-3xl font-bold text-primary-600 mb-2">500K+</div>
                <div class="text-gray-600">Happy Customers</div>
              </div>
              <div class="text-center sm:text-left">
                <div class="text-3xl font-bold text-primary-600 mb-2">$2.5B+</div>
                <div class="text-gray-600">Assets Under Management</div>
              </div>
              <div class="text-center sm:text-left">
                <div class="text-3xl font-bold text-primary-600 mb-2">150+</div>
                <div class="text-gray-600">Branch Locations</div>
              </div>
              <div class="text-center sm:text-left">
                <div class="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                <div class="text-gray-600">Uptime Guarantee</div>
              </div>
            </div>
            
            <button class="btn-primary">Learn About Our History</button>
          </div>

          <!-- Image/Visual -->
          <div class="relative">
            <div class="bg-white rounded-xl shadow-2xl p-8">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">FDIC Insured</div>
                    <div class="text-sm text-gray-600">Your deposits are protected</div>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">Bank-Level Security</div>
                    <div class="text-sm text-gray-600">256-bit SSL encryption</div>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">24/7 Support</div>
                    <div class="text-sm text-gray-600">Always here to help</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}