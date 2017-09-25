import { Component } from '@angular/core';

@Component({
    selector: 'catalog',
    templateUrl: './catalog.html'
})

export class Item {
    id: number;
    category: string;
    image: string;
    name: string;
    description: string;
    price: number;
    inStock: number;

    items: Item[
        botanical1 = {
            id: 1,
            category: "уход за кожей лица",
            image: "assets/images/test-1.jpg",
            name: "Очищающий гель Botanical Effects",
            description: "10/18",
            price: 27.00,
            inStock: 5
        };

        botanical2 = {
            id: 2,
            category: "уход за кожей лица",
            image: "assets/images/test-2.jpg",
            name: "Тонизирующий скраб Botanical Effects",
            description: "08/19",
            price: 33.00,
            inStock: 2
        };

        botanical3 = {
            id: 3,
            category: "уход за кожей лица",
            image: "assets/images/test-1.jpg",
            name: "Освежающий тоник Botanical Effects",
            description: "10/19",
            price: 27.00,
            inStock: 1
        };

        botanical4 = {
            id: 4,
            category: "уход за кожей лица",
            image: "assets/images/test-2.jpg",
            name: "Увлажняющий гель Botanical Effects",
            description: "05/18",
            price: 33.00,
            inStock: 0
        };

        botanical5 = {
            id: 5,
            category: "декоративная косметика",
            image: "assets/images/test-2.jpg",
            name: "Тушь для ресниц",
            description: "10/20",
            price: 27.00,
            inStock: 1
        };
    ];
}

    // unitOfProductions
