import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
    name: 'myfilter'
})
export class MyFilterPipe implements PipeTransform {
    transform(unitOfProductions: any[], filter: Object): any {
        if (!unitOfProductions || !filter) {
            return unitOfProductions;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return unitOfProductions.filter(unitOfProduction => unitOfProduction.category.indexOf(category) !== -1);
    }
}