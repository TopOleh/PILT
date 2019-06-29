import { FoodCard } from 'src/app/core/interfaces/food-card';
import { FoodService } from 'src/app/modules/food/services/food-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pilt-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {
  public foodForm: FormGroup;
  public isSubmitted: boolean = false;
  public image: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.foodForm = this.formBuilder.group({
      calories: ['', Validators.required],
      description: ['', Validators.required],
      grams: ['', Validators.required],
      image: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  public get fc() {
    return this.foodForm.controls;
  }
}
