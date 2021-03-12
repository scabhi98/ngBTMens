export interface MealData {
  id: string;
  date: Date;
  phase: "Morning" | "Afternoon" | "Night";
  desc: string;
  veg: boolean;
  cost: number;
  qty: number;
}
