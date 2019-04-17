import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FoodCard } from 'src/app/core/interfaces/food-card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private afs: AngularFirestore) { }

  public uploadFood(food: FoodCard): Promise<void> {
    let foodIs: boolean;

    this.getFood(food)
      .subscribe( res => foodIs = !!res);

    if (foodIs) {
      console.error('Food already exist');
      return;
    }

    return this.afs.collection<FoodCard>('food')
      .doc(food.title)
      .set(food)
      .then( _ => console.log('Added food', food))
      .catch( err => console.log('Error while adding', err));
  }

  public getFood(food: FoodCard): Observable<FoodCard> {
    return this.afs.collection<FoodCard>('food', ref => ref.where('title', '==', food.title))
      .valueChanges()
      .pipe(
        map((_food: FoodCard[]) => {
          console.log(_food);
          return _food.shift();
        })
      );
  }

  public getAllDishes(): Observable<FoodCard[]> {
    return this.afs.collection<FoodCard>('food')
    .valueChanges();
  }
}
