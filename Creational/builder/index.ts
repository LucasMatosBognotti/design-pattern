import { MainDishBuilder } from "./classes/main-dish-builder.ts";
import { VeganDishBuilder } from "./classes/vegan-dish-builder.ts";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal().makeDessert();

console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
