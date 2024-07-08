import { Component } from '@angular/core';

import { CarOrderComponent } from './car-order/car-order.component';

// import { CarStateService } from './car-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // ,providers: [CarStateService]
  standalone: true,
  imports: [CarOrderComponent]
})
export class AppComponent {
  cars: number[] = [];

  addOne() {
    this.cars.push(this.cars.length + 1);
  }
}
