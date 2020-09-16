import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product Center';
  displayedColumns: string[] = ['name', 'price'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  id: number;
  name: string;
  price: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Product', price: '$7.99' },
];
