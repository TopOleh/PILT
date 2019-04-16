import { FoodCard } from 'src/app/core/interfaces/food-card';
import { FoodService } from 'src/app/core/services/food/food-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pilt-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {
  public foodForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private foodService: FoodService) { }

  ngOnInit() {
    this.foodForm = this.formBuilder.group({
      calories: ['', Validators.required],
      description: ['', Validators.required],
      grams: ['', Validators.required],
      image: [''],
      status: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  public get fc() {
    return this.foodForm.controls;
  }

  public uploadFood(food: FoodCard) {
    console.log(food);
    this.foodService.uploadFood(food);
  }
}
