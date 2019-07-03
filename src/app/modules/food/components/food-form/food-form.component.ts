import { of } from 'rxjs';
import { FoodCard } from 'src/app/core/interfaces/food-card';
import { FoodService } from 'src/app/modules/food/services/food-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'pilt-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {
  private allFood: FoodCard[] = [];

  public foodForm: FormGroup;
  public isSubmitted: boolean = false;
  public image: string;

  constructor(private formBuilder: FormBuilder, private foodService: FoodService) { }

  ngOnInit() {
    this.foodForm = this.formBuilder.group({
      food: ''
    });
  }

  public get fc() {
    return this.foodForm.controls;
  }

  public uploadFile(event) {
    const uploadedFile = event.target.files[0];
    const self = this;

    if (uploadedFile) {
      const readFile = new FileReader();

      readFile.onload = function(e) {
        const contents = e.target['result'];
        const json = JSON.parse(contents);
        const foodList = json.foodList;
        foodList.map((food, i) => {
          food.id = ++i;
          food.calories = +(food.calories.split(',').join('.'));
          food.carbs = +(food.carbs.split(',').join('.'));
          food.fat = +(food.fat.split(',').join('.'));
          food.protein = +(food.protein.split(',').join('.'));
          food.perGram = {
            cal: food.calories / 100,
            carbs: food.carbs / 100,
            protein: food.protein / 100,
            fat: food.fat / 100,
          };
          food.grams = 100;
        });
        console.log('foodList', foodList);
        self.allFood = foodList;
      };
      readFile.readAsText(uploadedFile);
  } else {
      console.log("Failed to load file");
  }
  }

  public onPushMockData() {
    console.log(this.allFood);
    this.foodService.onPushMockData(this.allFood);
  }
}
