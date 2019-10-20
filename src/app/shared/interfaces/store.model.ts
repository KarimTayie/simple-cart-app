export interface Store {
  id: number;
  name: string;
  addresses: StoreAddress[];
  logo_image: URL;
  description: string;
  opening_times: StoreOpeningTimes;
  items?: StoreItem;
}

export interface StoreItem {
  id: number;
  shop: number;
  name: string;
  price_cents: number;
  is_available: boolean;
  images: [
    {
      img_url: URL,
      img_url_200: URL,
      img_url_100: URL,
      source_url: URL
    }
  ];
  count?: number;
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

export interface StoreOpeningTimes {
  Sunday: [number[]];
  Monday: [number[]];
  Tuesday: [number[]];
  Wednesday: [number[]];
  Thursday: [number[]];
  Friday: [number[]];
  Saturday: [number[]];
}
