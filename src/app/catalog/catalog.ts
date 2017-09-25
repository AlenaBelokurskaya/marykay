export class Item {
    id: number;
    category: string;
    image: string;
    name: string;
    description: string;
    price: number;
    inStock: number;
}

export class Catalog {
    items: Item[];

    public addItem (item: Item) : void{
        this.items.push(item);
    }
}