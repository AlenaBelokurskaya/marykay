import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Уход за лицом';
  
  unitOfProductions = [{
    "id": 1,
    "name": "Очищающий гель Botanical Effects",
    "description": "10/18",
    "price": 27.00,
    "inStock": 5
  },
  {
    "id": 2,
    "name": "Тонизирующий скраб Botanical Effects",
    "description": "08/19",
    "price": 33.00,
    "inStock": 2
  },
  {
    "id": 3,
    "name": "Освежающий тоник Botanical Effects",
    "description": "10/19",
    "price": 27.00,
    "inStock": 1
  },
  {
    "id": 4,
    "name": "Увлажняющий гель Botanical Effects",
    "description": "05/18",
    "price": 33.00,
    "inStock": 0
  }];

  totalUnitOfProductions() {
    let sum = 0;

    for (let unitOfProduction of this.unitOfProductions) {
      sum += unitOfProduction.inStock;
    }

    return sum;
  }
}
