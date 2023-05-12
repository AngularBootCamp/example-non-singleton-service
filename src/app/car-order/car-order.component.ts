import { Component } from '@angular/core';

import { CarStateService } from '../car-state.service';

@Component({
  selector: 'app-car-order',
  templateUrl: './car-order.component.html',
  styleUrls: ['./car-order.component.scss'],
  providers: [CarStateService]
})
export class CarOrderComponent {}
