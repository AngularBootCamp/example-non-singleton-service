import { Component } from '@angular/core';

// import { CarStateService } from './car-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // ,providers: [CarStateService]
})
export class AppComponent {
  cars: number[] = [];

  addOne() {
    this.cars.push(this.cars.length + 1);
  }
}
