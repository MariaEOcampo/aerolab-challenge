export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: Img;
}

export interface Img {
  url: string;
  hdUrl: string;
}
