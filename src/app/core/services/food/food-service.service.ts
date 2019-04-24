import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { map, tap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FoodCard } from 'src/app/core/interfaces/food-card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

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

  public uploadImage(image) {
    // The storage path
    const path = `Food/Images/${image.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);
    this.snapshot = this.storage.upload(path, image)
      .snapshotChanges().pipe(
        tap(console.log),
        // The file's download URL
        finalize( async() =>  {
          this.downloadURL = await ref.getDownloadURL().toPromise();

          // this.db.collection('files').add( { downloadURL: this.downloadURL, path });
          console.log('downloadURL :', this.downloadURL);
        })
      );

      this.snapshot.subscribe(_ => console.log('this.downloadURL :', this.downloadURL));
  }
}
