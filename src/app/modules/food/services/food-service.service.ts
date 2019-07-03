import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FoodCard } from 'src/app/core/interfaces/food-card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  public allFood: FoodCard[] = [];

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
  }

  onPushMockData(foodList: FoodCard[]) {

    for (const food of foodList) {
      this.db.collection('all-food').doc(food.name).set(food);
    }

  }

  public addFood(food: FoodCard) {
    this.allFood.push(food);
  }

  public getMyFood(): Observable<FoodCard[]> {
    this.allFood = this.allFood;
    return of(this.allFood);
  }

  public getAllDishes(): Observable<FoodCard[]> {
    return this.db.collection<FoodCard>('all-food')
    .valueChanges();
  }

  public recalculateFood(food: FoodCard): FoodCard {
    food.calories = Math.floor(food.perGram.cal * food.grams * 100) / 100 ;
    food.carbs = Math.floor(food.perGram.carbs * food.grams * 100) / 100 ;
    food.fat = Math.floor(food.perGram.fat * food.grams * 100) / 100 ;
    food.protein = Math.floor(food.perGram.protein * food.grams * 100) / 100 ;
    return food;
  }

  // async uploadImage(image) {
  //   let task: AngularFireUploadTask;
  //   // The storage path
  //   const path = `Food/Images/${image.name}`;
  //   // Reference to storage bucket
  //   const ref = this.storage.ref(path);
  //   // The main task
  //   task = this.storage.upload(path, image);

  //   await task;
  //   return ref.getDownloadURL().toPromise();
  // }
}
