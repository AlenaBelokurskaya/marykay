import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  template: `<h2>{{title}}</h2>
  <table class="table table-bordered">
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let unitOfProduction of unitOfProductions">
            <td>{{unitOfProduction.id}}</td>
            <td>{{unitOfProduction.name}}</td>
            <td>{{unitOfProduction.description}}</td>
            <td>{{unitOfProduction.price}}</td>
        </tr>
    </tbody>
  </table>`
})
class AppComponent{
  title = 'Уход за лицом';
  unitOfProductions = [{
    "id": 1,
    "name": "Очищающий гель Botanical Effects",
    "description": "10/18",
    "price": 27.00
  },
  {
    "id": 2,
    "name": "Тонизирующий скраб Botanical Effects",
    "description": "08/19",
    "price": 33.00
  },
  {
    "id": 3,
      "name": "Освежающий тоник Botanical Effects",
      "description": "10/19",
      "price": 27.00
  },
  {
    "id": 4,
      "name": "Увлажняющий гель Botanical Effects",
      "description": "05/18",
      "price": 33.00
  }]
}

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})
class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);

