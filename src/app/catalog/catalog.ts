export class Item {
    id: number;
    category: string;
    image: string;
    name: string;
    mass: string;
    price: number;
    inStock: number;
    quantity: number;
}

export class Catalog {
    items: Item[];

    constructor(items: Item[]) {
        this.items = items;
    }

    public addItem (item: Item) : void{
        this.items.push(item);
    }
}