import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
    name: 'myfilter'
})
export class MyFilterPipe implements PipeTransform {
    transform(unitOfProductions: any[], category: string): any {
        if (!unitOfProductions || !category) {
            return unitOfProductions;
        }
        
        return unitOfProductions.filter(unitOfProduction => unitOfProduction.category.indexOf(category) !== -1);
    }
}