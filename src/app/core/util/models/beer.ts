export class Beer {
  attenuationLevel: number;
  boilVolume: { unit: string; value: number };
  contributedBy: string;
  ebc: number;
  firstBrewed: string;
  foodPairing: string[];
  ibu: number;
  id: number;
  // to replace if needed
  ingredients: string[];
  method: string[];
  srm: number;
  tagline: string;
  targetFg: number;
  targetOg: number;
  volume: { unit: string; value: number };
  //
  name: string;
  abv: number;
  brewers_tips: string;
  description: string;
  image_url: string;
  ph: number;
  favorite = false;
}
