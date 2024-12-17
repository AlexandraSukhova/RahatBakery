import { MenuItem, ReviewItem } from "./interface";
import applePie from "../images/apple-pie.jpg";
import lambSamsa from "../images/lamb-samsa.jpg";
import puffPastryWithJam from "../images/puff-pastry-with-jam.jpg";
import sourCreamPie from "../images/sour-cream-pie.jpg";
import tandoorBread from "../images/tandoor-bread.jpg";
import tatarManti from "../images/tatar-manti.jpg";
import sandwichBread from "../images/sandwich-bread.jpg";
import vegetarianSamsa from "../images/vegetarian-samsa.jpg";

export const menu: MenuItem[] = [
  {
    name: 'Tandoor bread',
    price: '15 / 20',
    description: 'Wheat flour, salt, yeast, sesame',
    imgUrl: tandoorBread,
    category: 'bread',
  },
  {
    name: 'Rye bread',
    price: '25',
    description: 'Rye flour, wheat flour, yeast, sugar, salt',
    category: 'bread',
  },
  {
    name: 'Sandwich bread',
    price: '15',
    description: 'Wheat flour, yeast, egg, margarine, salt',
    imgUrl: sandwichBread,
    category: 'bread',
  },
  {
    name: 'raisin bread',
    price: '15',
    description: 'Wheat flour, yeast, raisins, egg, margarine, sugar, salt',
    category: 'bread',
  },
  {
    name: 'lamb samsa',
    price: '45',
    description: 'Puff pastry, lamb, onion, sesame, cumin, egg, salt',
    imgUrl: lambSamsa,
    category: 'dishes'
  },
  {
    name: 'vegetarian samsa',
    price: '30',
    description: 'Puff pastry, mozzarella cheese, straw mushrooms, onions, sesame, butter, egg, salt',
    imgUrl: vegetarianSamsa,
    category: 'dishes'
  },
  {
    name: 'Pilaf',
    price: '100',
    description: 'Rice, lamb, carrots, chickpeas, onions, cumin, garlic, black pepper, salt, vegetable oil',
    category: 'dishes'
  },
  {
    name: 'Tatar manti',
    price: '85',
    description: 'Beef, potatoes, onions, dough, butter, pepper, salt',
    imgUrl: tatarManti,
    category: 'dishes',
  },
  {
    name: 'vegetarian curry',
    price: '25',
    description: 'Sweet potato, taro, carrots, green beans, mushrooms, onions, coconut milk,  lemongrass, curry',
    category: 'dishes',
  },
  {
    name: 'beef stew',
    price: '35',
    description: 'Beef, carrots, onions, braised beef sauce, lemongrass',
    category: 'dishes'
  },
  {
    name: 'sour cream pie',
    price: '25',
    description: 'Homemade sour cream, flour, butter, sugar, vanillin, egg',
    imgUrl: sourCreamPie,
    category: 'desserts',
  },
  {
    name: 'sponge cake',
    price: '10',
    description: 'Wheat flour, pastry flour, egg, milk, sugar, corn starch, salt',
    category: 'desserts'
  },
  {
    name: 'Apple pie',
    price: '25',
    description: 'Apples, flour, butter, sugar, egg, cinnamon, cocoa',
    imgUrl: applePie,
    category: 'desserts',
  },
  {
    name: 'chocolate halva',
    price: '6',
    description: 'Sunflower seeds, cocoa, honey',
    category: 'desserts',
  },
  {
    name: 'oat cookies',
    price: '5',
    description: 'Oat flakes, butter, egg, sugar, baking powder',
    category: 'desserts'
  },
  {
    name: 'puff pastry with jam',
    price: '15',
    description: 'Puff pastry, sugar, egg',
    filling: ['pineapple', 'passion fruit', 'mulberry', 'apple-cinnamon', 'honey-peach'],
    imgUrl: puffPastryWithJam,
    category: 'desserts'
  },
];

export const review: ReviewItem[] = [
  {
    userName: 'Maikl Rid',
    reviewText: 'It’s just unbelievable that something like this exists in Da Nang. A real gem. The bakery itself is located right at the market, so eating there isn’t really an option, but taking it to go and enjoying it at a cozy cafe or at home is just perfect',
  },
  {
    userName: 'Elizaveta P.',
    reviewText: 'Amazing pilaf, delicious meat, not dry, perfectly juicy and fatty as it should be, great packaging - everything is perfect!',
  },
  {
    userName: 'Mark Mazalo',
    reviewText: 'Rustic artisan bakery within the local market in Da Nang that puts out great quality products. I tried the new pizza yesterday and it was awesome. Great crust - not floppy like other in town - good toppings and a lot of cheese for the great price they sell for. I highly recommend the Pizza, Banh Mi, the lamb in pastry, the cakes and other products. You can’t beat the price or quality',
  }
]