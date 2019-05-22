import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FoodCard } from 'src/app/core/interfaces/food-card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  public uploadFood(food: FoodCard): Promise<void> {
    let foodIs: boolean;

    this.getFood(food)
      .subscribe( res => foodIs = !!res);

    if (foodIs) {
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
    .valueChanges();
  }

  async uploadImage(image) {
    let task: AngularFireUploadTask;
    // The storage path
    const path = `Food/Images/${image.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    task = this.storage.upload(path, image);

    await task;
    return ref.getDownloadURL().toPromise();
  }
}
