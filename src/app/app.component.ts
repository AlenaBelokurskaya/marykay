import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Склад';

  category = null;

  tags = [
    {category:'уход за кожей лица'},
    {category:'декоративная косметика'},
    {category:'парфюмерия'}
  ];

  // totalUnitOfProductions() {
  //   let sum = 0;
  //
  //   for (let unitOfProduction of this.unitOfProductions) {
  //     sum += unitOfProduction.inStock;
  //   }
  //
  //   return sum;
  // }
}

export const Items : Item[] = [
  new Item(botanical1),
  new Item(botanical2),
  new Item(botanical3),
  new Item(botanical4),
  new Item(botanical5)
];