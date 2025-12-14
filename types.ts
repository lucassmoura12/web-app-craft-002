export enum ItemType {
  FOOD = 'Comida',
  POTION = 'Poção'
}

export enum City {
  MARTLOCK = 'Martlock',
  BRIDGEWATCH = 'Bridgewatch',
  LYMHURST = 'Lymhurst',
  FORT_STERLING = 'Fort Sterling',
  THETFORD = 'Thetford',
  CAERLEON = 'Caerleon',
  ALL = 'Qualquer Cidade Real'
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: number; // Quantity required per SINGLE craft action
  bestCity: City; // Where to place buy order (highest supply)
  icon?: string; // Placeholder for logic mapping
}

export interface Recipe {
  id: string;
  name: string;
  tier: string;
  type: ItemType;
  yields: number; // How many items are created per craft (usually 10 for food, 5 for potions)
  ingredients: Ingredient[];
  imageUrl?: string;
}

export interface SelectedRecipe extends Recipe {
  craftCount: number; // Number of craft actions (not total items)
}

export interface ShoppingListItem {
  id: string;
  name: string;
  totalQuantity: number;
  bestCity: City;
}