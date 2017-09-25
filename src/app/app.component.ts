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

  unitOfProductions = [{
    id: 1,
    category: "уход за кожей лица",
    image: "assets/images/test-1.jpg",
    name: "Очищающий гель Botanical Effects",
    description: "10/18",
    price: 27.00,
    inStock: 5
  },
    {
      id: 2,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Тонизирующий скраб Botanical Effects",
      description: "08/19",
      price: 33.00,
      inStock: 2
    },
    {
      id: 3,
      category: "уход за кожей лица",
      image: "assets/images/test-1.jpg",
      name: "Освежающий тоник Botanical Effects",
      description: "10/19",
      price: 27.00,
      inStock: 1
    },
    {
      id: 4,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Увлажняющий гель Botanical Effects",
      description: "05/18",
      price: 33.00,
      inStock: 0
    },
    {
      id: 5,
      category: "декоративная косметика",
      image: "assets/images/test-2.jpg",
      name: "Тушь для ресниц",
      description: "10/20",
      price: 27.00,
      inStock: 1
    }];

  totalUnitOfProductions() {
    let sum = 0;

    for (let unitOfProduction of this.unitOfProductions) {
      sum += unitOfProduction.inStock;
    }

    return sum;
  }
}