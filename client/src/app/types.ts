export class User {
  _id: string;
  name: string;
  username: string;
  password?: string;
  address: string;
  email: string;
  type: string;
  country: string;
  fileUrl: string;
}

export class Service {
  _id: string;
  name: string;
  description: string;
  user: string;
  type: string;
  products: [string];
}

export class TypeService {
  name: string;
}

export class Product {
  _id?: string;
  name: string;
  stock: Number;
  description: string;
  price: Number;
  service?: Service;
}

export class Order {
  _id: string;
  address: string;
  emited: Date;
  price: number;
  service: string;
  status: string;
  products: [string];
  user: string;
  bussiness: string;
  fileUrl: string;
}
