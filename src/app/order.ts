import {Engine, Interior, Wheel} from './car';

export interface Order {
  engine: Engine;
  wheel: Wheel;
  exterior_color: string; // wil be in hex format
  interior: Interior;
  autopilot: Boolean;

  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  card_name: string;
  card_date: string;

}
