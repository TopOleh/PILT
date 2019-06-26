import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { FirestoreSettingsToken} from '@angular/fire/firestore';

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireStorageModule, // storage
    AngularFireAuthModule // auth
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }]
})
export class FirebaseModule { }
