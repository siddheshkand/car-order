export interface Engine {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface Wheel {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface Interior {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface Model {
  base_price: number;
  engines: Array<Engine>;
  wheels: Array<Wheel>;
  interiors: Array<Interior>;
}
