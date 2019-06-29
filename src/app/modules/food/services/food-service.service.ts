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

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {}

  public addFood(food: FoodCard) {
    this.allFood.push(food);
  }

  public getMyFood(): Observable<FoodCard[]> {
    this.allFood = this.allFood;
    return of(this.allFood);
  }

  public uploadFood(food: FoodCard): Promise<void> {
    let foodIs: Observable<boolean>;
    foodIs = this.getFood(food)
    .pipe(
      map(res => !!res)
      );
    if (!foodIs) {
      console.error('Food already exist');
      return;
    }

    return this.db.collection<FoodCard>('food')
      .doc(food.title)
      .set(food)
      .then( _ => console.log('Added food', food))
      .catch( err => console.log('Error while adding', err));
  }

  public getFood(food: FoodCard): Observable<FoodCard> {
    return this.db.collection<FoodCard>('food', ref => ref.where('title', '==', food.title))
      .valueChanges()
      .pipe(
        map((_food: FoodCard[]) => {
          return _food.shift();
        })
      );
  }

  public getAllDishes(): Observable<FoodCard[]> {
    return this.db.collection<FoodCard>('food')
    .valueChanges()
    .pipe(
      map(
        (foodAmount: FoodCard[]) => foodAmount
          .map((food: FoodCard) => {
            food.calPerGram = food.calories / 100;
            return food;
          }))
    );
  }

  public calcCalories(food: FoodCard): number {
    return +(food.grams * food.calPerGram).toFixed(2);
  }

  public calcGrams(food: FoodCard): number {
    return +(food.calories / food.calPerGram).toFixed(2);
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
