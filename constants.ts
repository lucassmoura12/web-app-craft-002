import { Recipe, ItemType, City } from './types';

// Helper to create ingredients easily
const ing = (id: string, name: string, qty: number, city: City) => ({
  id,
  name,
  quantity: qty,
  bestCity: city,
});

export const RECIPES: Recipe[] = [
  // --- FOODS ---
  {
    id: 'f_eel_stew_t8',
    name: 'Guisado de Enguia de Água-podre (T8)',
    tier: 'VIII',
    type: ItemType.FOOD,
    yields: 10,
    ingredients: [
      ing('r_eel_t8', 'Enguia de Água-podre (T8)', 1, City.LYMHURST), // Forest biome fishing
      ing('r_pumpkin', 'Abóbora (T8)', 6, City.FORT_STERLING), // Yield bonus in Fort Sterling usually? Or Thetford. Mapping based on common farming.
      ing('r_corn', 'Fardo de Milho (T7)', 6, City.BRIDGEWATCH), // Bridgewatch farming bonus
      ing('r_milk', 'Leite de Cabra', 6, City.BRIDGEWATCH), // Animals
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T8_MEAL_STEW_FISH.png'
  },
  {
    id: 'f_eel_stew_t6',
    name: 'Guisado de Enguia Avermelhada (T6)',
    tier: 'VI',
    type: ItemType.FOOD,
    yields: 10,
    ingredients: [
      ing('r_eel_t6', 'Enguia Avermelhada (T6)', 1, City.LYMHURST),
      ing('r_potato', 'Batatas', 2, City.MARTLOCK),
      ing('r_pepper', 'Pimentão', 2, City.BRIDGEWATCH), // Hot crops often Bridgewatch
      ing('r_milk', 'Leite de Cabra', 2, City.BRIDGEWATCH),
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T6_MEAL_STEW_FISH.png'
  },
  {
    id: 'f_omelette_t7',
    name: 'Omelete de Caranguejo de Poço (T7)',
    tier: 'VII',
    type: ItemType.FOOD,
    yields: 10,
    ingredients: [
      ing('r_crab_t7', 'Caranguejo de Poço (T7)', 1, City.THETFORD), // Swamp fishing
      ing('r_corn', 'Milho', 6, City.BRIDGEWATCH),
      ing('r_mullein', 'Verbasco', 6, City.THETFORD), // Herbs often swamp/forest
      ing('r_meat', 'Carne Crua', 6, City.CAERLEON), // Meat is general, but animals in BW/Lym
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T7_MEAL_OMELETTE_FISH.png'
  },
  {
    id: 'f_omelette_t5',
    name: 'Omelete de Caranguejo de Riacho (T5)',
    tier: 'V',
    type: ItemType.FOOD,
    yields: 10,
    ingredients: [
      ing('r_crab_t5', 'Caranguejo de Riacho (T5)', 1, City.THETFORD),
      ing('r_cabbage', 'Repolho', 2, City.LYMHURST),
      ing('r_dragonteasel', 'Cardo-dragão', 2, City.THETFORD),
      ing('r_eggs', 'Ovos de Ganso', 2, City.FORT_STERLING),
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T5_MEAL_OMELETTE_FISH.png'
  },
  {
    id: 'f_snapper_t7',
    name: 'Pargo Neblina-pura Assado (T7)',
    tier: 'VII',
    type: ItemType.FOOD,
    yields: 10,
    ingredients: [
      ing('r_snapper_t7', 'Pargo Neblina-pura (T7)', 1, City.MARTLOCK), // Highlands fishing
      ing('r_corn', 'Milho', 6, City.BRIDGEWATCH),
      ing('r_mullein', 'Verbasco', 6, City.THETFORD),
      ing('r_milk', 'Leite', 6, City.BRIDGEWATCH),
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T7_MEAL_ROAST_FISH.png'
  },
  {
    id: 'f_kraken_salad_t6',
    name: 'Salada de Kraken (T6)',
    tier: 'VI',
    type: ItemType.FOOD,
    yields: 10,
    ingredients: [
      ing('r_kraken_t6', 'Kraken das Águas Profundas (T6)', 1, City.ALL), // Ocean fishing
      ing('r_potato', 'Batatas', 6, City.MARTLOCK),
      ing('r_pepper', 'Pimentão', 6, City.BRIDGEWATCH),
      ing('r_meat', 'Carne Crua', 6, City.CAERLEON),
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T6_MEAL_SALAD_FISH.png'
  },
  {
    id: 'f_sandwich_t8',
    name: 'Sanduíche de Larápio do Trovão (T8)',
    tier: 'VIII',
    type: ItemType.FOOD,
    yields: 10,
    ingredients: [
      ing('r_lizard_t8', 'Larápio do Trovão (T8)', 1, City.THETFORD),
      ing('r_pumpkin', 'Abóbora', 6, City.FORT_STERLING),
      ing('r_bundles', 'Feixe de Trigo', 6, City.MARTLOCK),
      ing('r_butter', 'Manteiga de Vaca', 6, City.MARTLOCK),
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T8_MEAL_SANDWICH_FISH.png'
  },
  {
    id: 'f_pie_t7',
    name: 'Torta de Olhomorto dos Picos (T7)',
    tier: 'VII',
    type: ItemType.FOOD,
    yields: 10,
    ingredients: [
      ing('r_fish_dead', 'Olhomorto dos Picos (T7)', 1, City.MARTLOCK),
      ing('r_corn', 'Milho', 6, City.BRIDGEWATCH),
      ing('r_mullein', 'Verbasco', 6, City.THETFORD),
      ing('r_meat', 'Carne Crua', 6, City.CAERLEON),
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T7_MEAL_PIE_FISH.png'
  },

  // --- POTIONS ---
  {
    id: 'p_acid_t7',
    name: 'Poção Ácida Maior (T7)',
    tier: 'VII',
    type: ItemType.POTION,
    yields: 5,
    ingredients: [
      ing('r_drop_acid_t7', 'Glândulas de Ácido (T7)', 1, City.CAERLEON), // Mob drops
      ing('r_mullein', 'Verbasco', 144, City.THETFORD),
      ing('r_foxglove', 'Dedaleira', 72, City.MARTLOCK), // Hills
      ing('r_alcohol', 'Álcool de Batata', 72, City.MARTLOCK),
      ing('r_milk', 'Leite', 36, City.BRIDGEWATCH),
      ing('r_moonshine', 'Cachaça de Milho', 36, City.BRIDGEWATCH),
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T7_POTION_COOLDOWN.png'
  },
  {
    id: 'p_gather_t8',
    name: 'Poção de Coleta Maior (T8)',
    tier: 'VIII',
    type: ItemType.POTION,
    yields: 5,
    ingredients: [
      ing('r_drop_gather_t8', 'Pata de Urso (T8)', 1, City.CAERLEON),
      ing('r_butter', 'Manteiga', 144, City.MARTLOCK),
      ing('r_yarrow', 'Milefólio', 72, City.FORT_STERLING),
      ing('r_mullein', 'Verbasco', 72, City.THETFORD),
      ing('r_pepper', 'Pimentão', 36, City.BRIDGEWATCH),
      ing('r_moonshine', 'Cachaça', 36, City.BRIDGEWATCH),
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T8_POTION_GATHER.png'
  },
  {
    id: 'p_gather_t6',
    name: 'Poção de Coleta (T6)',
    tier: 'VI',
    type: ItemType.POTION,
    yields: 5,
    ingredients: [
      ing('r_drop_gather_t6', 'Pata de Urso (T6)', 1, City.CAERLEON),
      ing('r_butter', 'Manteiga', 48, City.MARTLOCK),
      ing('r_pepper', 'Pimentão', 24, City.BRIDGEWATCH),
      ing('r_poppy', 'Papoula', 12, City.CAERLEON), // Check biome
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T6_POTION_GATHER.png'
  },
  {
    id: 'p_hellfire_t8',
    name: 'Poção Infernal Maior (T8)',
    tier: 'VIII',
    type: ItemType.POTION,
    yields: 5,
    ingredients: [
      ing('r_drop_hell_t8', 'Cinzas Infernais (T8)', 1, City.CAERLEON),
      ing('r_milk', 'Leite', 144, City.BRIDGEWATCH),
      ing('r_yarrow', 'Milefólio', 72, City.FORT_STERLING),
      ing('r_mullein', 'Verbasco', 72, City.THETFORD),
      ing('r_eggs', 'Ovos', 36, City.FORT_STERLING),
      ing('r_moonshine', 'Cachaça', 36, City.BRIDGEWATCH),
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T8_POTION_FIRE.png'
  },
   {
    id: 'p_cleanse_t5',
    name: 'Poção Purificadora (T5)',
    tier: 'V',
    type: ItemType.POTION,
    yields: 5,
    ingredients: [
      ing('r_drop_cleanse_t5', 'Restos de Ent (T5)', 1, City.LYMHURST),
      ing('r_poppy', 'Papoula', 48, City.CAERLEON),
      ing('r_sage', 'Sálvia', 24, City.FORT_STERLING),
      ing('r_butter', 'Manteiga', 12, City.MARTLOCK),
    ],
    imageUrl: 'https://render.albiononline.com/v1/item/T5_POTION_CLEANSE.png'
  },
];
