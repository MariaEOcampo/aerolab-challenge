export interface Redeem {
  productId: string;
  name: string;
  cost: number;
  category: string;
  _id: string;
  createDate: Date;
  img: Img;
}

export interface Img {
  url: string;
  hdUrl: string;
}
