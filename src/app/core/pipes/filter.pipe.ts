import { Pipe, PipeTransform } from '@angular/core';
import { FoodCard } from '../interfaces/food-card';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(foodArr: FoodCard[], value: string): FoodCard[] {
    if (foodArr) {
      if (!value) {
        return foodArr;
      } else  {
        return foodArr.filter((food: FoodCard) =>
          food.calories.toString().toLowerCase().match(value.toLocaleLowerCase()) ||
          food.title.toLowerCase().match(value.toLocaleLowerCase()) ||
          food.grams.toString().toLowerCase().match(value.toLocaleLowerCase()) ||
          food.description.toLowerCase().match(value.toLocaleLowerCase())
        );
      }
    }
  }

}
