import { Product } from './products.interface';

export interface Registry {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  provincia: string;
  ciudad: string;
  productos: Product[];
  informacion: boolean;
}
