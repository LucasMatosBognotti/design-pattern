import { MealBuilderProtocol } from "../interface/meal-builder-protocol.ts";
import { MealBox } from "./meal-box.ts";
import { Beans, Beverage, Dessert, Rice } from './meals.ts';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox;

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 10);
    const beans = new Beans('Feijão', 20);
    this._meal.add(rice, beans);
    return this;
  }

  makeBeverage(): this {
    const beverage: Beverage = new Beverage('Bebidas', 10);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert: Dessert = new Dessert('Sobremesa', 10);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}