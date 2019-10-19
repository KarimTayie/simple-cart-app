export interface Store {
  name: string;
  addresses: StoreAddress[];
  logo_image: URL;
  description: string;
}

export interface StoreAddress {
  country: string;
  apartment: string;
  number: number;
  street: string;
  suburb: string;
  city: string;
  state: string;
  unparsed: string;
}
