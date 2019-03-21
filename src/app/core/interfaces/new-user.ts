import { User } from 'src/app/core/interfaces/user';

export interface NewUser extends User {
  age: number;
  gender: string;
  name: string;
}
