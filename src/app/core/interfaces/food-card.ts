export interface FoodCard {
  id: number;
  calories: number;
  perGram?: {
    cal: number,
    carbs: number,
    fat: number,
    protein: number
  };
  carbs: number;
  fat: number;
  grams: number;
  protein: number;
  name: string;
  type: string;
}
