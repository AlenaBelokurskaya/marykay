import { Component } from '@angular/core';
import { Catalog, Item } from './catalog/catalog';

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
    {category:'дополнительные средства для ухода за кожей лица'},
    {category:'декоративная косметика'},
    {category:'парфюмерия'}
  ];

  items = [{
      id: 1,
      category: "уход за кожей лица",
      image: "assets/images/test-1.jpg",
      name: "Очищающий гель Botanical Effects",
      mass: "127 g",
      price: 27.00,
      inStock: 5
    },
    {
      id: 2,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Тонизирующий скраб Botanical Effects",
      mass: "127 g",
      price: 33.00,
      inStock: 2
    },
    {
      id: 3,
      category: "уход за кожей лица",
      image: "assets/images/test-1.jpg",
      name: "Освежающий тоник Botanical Effects",
      mass: "127 g",
      price: 27.00,
      inStock: 1
    },
    {
      id: 4,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Увлажняющий гель Botanical Effects",
      mass: "127 g",
      price: 33.00,
      inStock: 0
    },
    {
      id: 6,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Очищающее средство TimeWise '3 в 1'",
      mass: "88 g",
      price: 38.00,
      inStock: 1
    },
    {
      id: 6,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Увлажняющий крем, препятствующий старению кожи TimeWise",
      mass: "127 g",
      price: 70.00,
      inStock: 1
    },
    {
      id: 6,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Очищающая пенка Volu-Firm против заметных признаков старения",
      mass: "127 g",
      price: 33.5,
      inStock: 1
    },
    {
      id: 6,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Лифтинг-сыворотка Volu-Firm против заметных признаков старения",
      mass: "29 g",
      price: 117.00,
      inStock: 1
    },
    {
      id: 6,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Дневной крем с SPF 30 Volu-Firm против заметных признаков старения",
      mass: "48 g",
      price: 75.00,
      inStock: 1
    },
    {
      id: 6,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Ночной крем с  ретинолом Volu-Firm против заметных признаков старения",
      mass: "48 g",
      price: 75.00,
      inStock: 1
    },
    {
      id: 6,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Обновляющий крем для кожи вокруг глаз Volu-Firm против заметных признаков старения",
      mass: "14 g",
      price: 70.00,
      inStock: 1
    },
    {
      id: 6,
      category: "уход за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Крем-филлер для глубоких морщин Volu-Firm против заметных признаков старения",
      mass: "14 g",
      price: 78.00,
      inStock: 1
    },
    {
      id: 5,
      category: "дополнительные средства для ухода за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Пилинг для лица Revealing Radiance против заметных признаков старения",
      mass: "48 g",
      price: 123.00,
      inStock: 0
    },
    {
      id: 6,
      category: "дополнительные средства для ухода за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Система для пилинга лица TimeWise",
      mass: "-",
      price: 82.00,
      inStock: 1
    },
    {
      id: 7,
      category: "дополнительные средства для ухода за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Обновляющий пилинг TimeWise",
      mass: "70 g",
      price: 40.00,
      inStock: 1
    },
    {
      id: 8,
      category: "дополнительные средства для ухода за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Сыворотка для сужения пор TimeWise",
      mass: "29 g",
      price: 46.00,
      inStock: 1
    },
    {
      id: 9,
      category: "дополнительные средства для ухода за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Сыворотка для коррекции тона кожи TimeWise",
      mass: "29 g",
      price: 68.00,
      inStock: 1
    },
    {
      id: 10,
      category: "дополнительные средства для ухода за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Маска для коррекции тона кожи TimeWise",
      mass: "85 g",
      price: 36.00,
      inStock: 1
    },
    {
      id: 11,
      category: "дополнительные средства для ухода за кожей лица",
      image: "assets/images/test-2.jpg",
      name: "Щетка для глубокого очищения лица Skinvigorate",
      mass: "-",
      price: 97.00,
      inStock: 1
    },
    {
      id: 12,
      category: "декоративная косметика",
      image: "assets/images/test-2.jpg",
      name: "Тушь для ресниц",
      mass: "127 g",
      price: 27.00,
      inStock: 1
  }];

  totalUnitOfProductions() {
    let sum = 0;

    for (let item of this.items) {
      sum += item.inStock;
    }

    return sum;
  }
}

let catalogInstance : Catalog = new Catalog(items);