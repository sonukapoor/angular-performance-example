import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'with-fixed-size-responsiveness',
  standalone: true,
  imports: [NgOptimizedImage],
  styles: ` 
.container {
  display: flex;
  flex-direction: column;
  gap: 10px; 
}

.column {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
}

.mt-10 {
  margin-top: 10px;
}

/* Large screens */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
  `,
  template: `
    <h2>Using Media queries</h2>
    <div class="container">
      <div class="column">
        <img
          [ngSrc]="'angular.jpg'"
          width="200"
          height="200"
          priority="true"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div class="column">
        <img
          [ngSrc]="'angular.jpg'"
          width="200"
          height="200"
          priority="true"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
    <pre class="code mt-10">
  &lt;img 
    [ngSrc]="'angular.jpg'" 
    width="200" 
    height="200" 
    priority="true"
    sizes="(max-width: 768px) 100vw, 50vw"
    />
      </pre
    >
  `,
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dnj0y4eck')],
})
export class TwoColsComponent {}
