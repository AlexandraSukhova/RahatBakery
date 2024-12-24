export interface MenuItem {
  name: string;
  price: string;
  description: string;
  imgUrl?: string;
  category: TMenuCategory;
  filling?: string[];
}

export interface ReviewItem {
  userName: string;
  reviewText: string;
}

type TMenuCategory = "bread" | "dishes" | "desserts" | "dairy";
