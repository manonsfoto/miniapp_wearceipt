export type TCity = {
  name: string;
  country: string;
  latitude: string;
  longitude: string;
};

export const cities: TCity[] = [
  {
    name: "Düsseldorf",
    country: "Germany",
    latitude: "51.233334",
    longitude: "6.783333",
  },
  {
    name: "Busan",
    country: "South Korea",
    latitude: "35.100000",
    longitude: "129.033333",
  },
  {
    name: "Fukuoka",
    country: "Japan",
    latitude: "33.600000",
    longitude: "130.400000",
  },
  {
    name: "Sydney",
    country: "Australia",
    latitude: "-33.866667",
    longitude: "151.200000",
  },
  {
    name: "Vancouver",
    country: "Canada",
    latitude: "49.316666",
    longitude: "-123.066666",
  },
  {
    name: "Berlin",
    country: "Germany",
    latitude: "52.516667",
    longitude: "13.383333",
  },
];

export const clothingData = {
  clothing_recommendations: [
    {
      temp_c: 28,
      temp_f: 82,
      base_layer: [
        "Sleeveless tops",
        "T-shirts",
        "Shorts",
        "Skirts",
        "Linen shirts",
      ],
      insulating_layer: [],
      outer_layer: [],
      accessories: ["Sunglasses", "Hat"],
    },
    {
      temp_c: 23,
      temp_f: 73,
      base_layer: [
        "Short-sleeve shirts",
        "Thin blouses",
        "T-shirts",
        "Shorts",
        "Chinos",
      ],
      insulating_layer: ["Light cardigan (optional)"],
      outer_layer: [],
      accessories: ["Sunglasses"],
    },
    {
      temp_c: 20,
      temp_f: 68,
      base_layer: [
        "T-shirts",
        "Long-sleeve shirts",
        "Blouses",
        "Casual pants",
        "Chinos",
      ],
      insulating_layer: ["Light sweatshirt", "Thin sweater"],
      outer_layer: [],
      accessories: [],
    },
    {
      temp_c: 17,
      temp_f: 62,
      base_layer: ["T-shirts", "Long-sleeve shirts", "Light pants"],
      insulating_layer: ["Hoodie", "Sweater", "Light cardigan"],
      outer_layer: ["Light jacket (optional)"],
      accessories: [],
    },
    {
      temp_c: 12,
      temp_f: 54,
      base_layer: ["Long-sleeve shirts", "T-shirts", "Jeans", "Tights"],
      insulating_layer: ["Hoodie", "Sweater", "Cardigan"],
      outer_layer: ["Denim jacket", "Light jacket"],
      accessories: [],
    },
    {
      temp_c: 9,
      temp_f: 48,
      base_layer: [
        "Long-sleeve shirts",
        "Base layer (HeatTech optional)",
        "Jeans",
      ],
      insulating_layer: ["Fleece", "Sweatshirt"],
      outer_layer: ["Trench coat", "Field jacket"],
      accessories: ["Light scarf", "Thin gloves"],
    },
    {
      temp_c: 5,
      temp_f: 41,
      base_layer: ["HeatTech base layer", "Long-sleeve shirts", "Jeans"],
      insulating_layer: ["Fleece", "Thick sweater"],
      outer_layer: ["Wool coat", "Leather jacket"],
      accessories: ["Warm scarf", "Gloves"],
    },
    {
      temp_c: 0,
      temp_f: 32,
      base_layer: ["Thermal base layer", "Long-sleeve shirts", "Pants"],
      insulating_layer: ["Fleece-lined clothing"],
      outer_layer: ["Padded coat", "Thick wool coat"],
      accessories: ["Hat", "Gloves", "Scarf"],
    },
    {
      temp_c: -5,
      temp_f: 15,
      base_layer: [
        "Thermal base layer",
        "Long-sleeve shirts",
        "Fleece-lined pants",
      ],
      insulating_layer: ["Heavy fleece", "Insulated sweater"],
      outer_layer: ["Down jacket", "Padded coat"],
      accessories: ["Hat", "Thermal gloves", "Scarf"],
    },
    {
      temp_c: -10,
      temp_f: 6,
      base_layer: ["Thermal underwear", "Base layers", "Fleece-lined pants"],
      insulating_layer: ["Heavy fleece", "Wool sweater"],
      outer_layer: ["Thick down coat", "Windproof jacket"],
      accessories: ["Hat", "Insulated gloves", "Scarf"],
    },
    {
      temp_c: -15,
      temp_f: 5,
      base_layer: ["Full thermal layers", "Fleece-lined pants"],
      insulating_layer: ["Double fleece", "Heavy wool layers"],
      outer_layer: ["Extreme cold coat (expedition style)"],
      accessories: ["Hat", "Scarf", "2 pairs of gloves", "Neck gaiter"],
    },
  ],
  special_conditions: {
    rain: {
      outer_layer: ["Waterproof jacket"],
      accessories: ["Umbrella", "Waterproof shoes"],
    },
    wind: {
      outer_layer: ["Windbreaker"],
      accessories: ["Scarf for face protection"],
    },
    snow: {
      outer_layer: ["Waterproof boots"],
      accessories: ["Crampons (if icy)", "Thermal socks"],
    },
  },
};
