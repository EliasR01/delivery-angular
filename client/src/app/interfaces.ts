export interface UserDataResponse {
  getUser?: {
    _id: string;
    name: string;
    username: string;
    password: string;
    email: string;
    type: string;
    address: string;
    country: string;
    fileUrl: string;
  };
  createUser?: {
    _id: string;
    name: string;
    username: string;
    password: string;
    email: string;
    type: string;
    address: string;
    country: string;
    fileUrl: string;
  };
  updateUser?: {
    _id: string;
    name: string;
    username: string;
    password: string;
    email: string;
    type: string;
    address: string;
    country: string;
    fileUrl: string;
  };
  getUserById?: {
    _id: string;
    username: string;
    name: string;
    email: string;
    address: string;
    type: string;
    country: string;
    fileUrl: string;
  };
}

export interface RegisterUserData {
  name: string;
  username: string;
  password: string;
  email: string;
  type: string;
  country: string;
}

export interface LoginResponse {
  login: {
    user: {
      _id: string;
    };
    accessToken: string;
  };
}

export interface ServiceDataResponse {
  getServiceByUser?: {
    _id: string;
    name: string;
    description: string;
  };
  getServiceByType?: {
    _id: string;
    name: string;
    description: string;
    user: string;
    type: string;
    products: [string];
  };
  createService?: {
    _id: string;
    name?: string;
    description?: string;
    user?: string;
    type?: string;
    products?: [string];
  };
  updateService?: {
    _id: string;
    name?: string;
    description?: string;
    user?: string;
    type?: string;
    products?: [string];
  };
}

export interface ProductDataResponse {
  createProduct?: [
    {
      _id: string;
      name?: string;
      stock?: number;
      price?: number;
      description?: string;
      service?: string;
    }
  ];
  updateProduct?: [
    {
      _id: string;
      name?: string;
      stock?: number;
      price?: number;
      description?: string;
      service?: string;
    }
  ];
  getProductsById?: [
    {
      _id: string;
      name: string;
      description: string;
      stock: number;
      price: number;
    }
  ];
}
export interface OrderDataResponse {
  getOrdersByUser?: [
    {
      _id: string;
      address: string;
      emited: Date;
      service: string;
      price: number;
      status: string;
      products: [string];
      user: string;
      bussiness: string;
    }
  ];
}

export interface TypeServiceResponse {
  getTypeOfService: [
    {
      name: string;
    }
  ];
}

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
}

export interface UserType {
  value: string;
  viewValue: string;
}

export interface Route {
  name: string;
  route: string;
}

export interface TemplateParams {
  from_name: String;
  to_name: String;
  subject: String;
  message_html: String;
}

export interface DateArray {
  [Month: string]: number;
}

export interface PeriodicElement {
  description: string;
  amount?: number;
  unitPrice?: number;
  total: number;
}
