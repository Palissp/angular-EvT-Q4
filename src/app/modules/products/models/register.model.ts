export class Register {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  provincia: string;
  ciudad: string;
  productos: string[];
  informacion: boolean;

  constructor() {
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.phone = '';
    this.provincia = '';
    this.ciudad = '';
    (this.productos = []), (this.informacion = true);
  }
}
