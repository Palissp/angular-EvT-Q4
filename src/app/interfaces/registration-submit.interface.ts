export interface RegistrationSubmitBody {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  provincia: string;
  ciudad: string;
  productos: string[];
  informacion: boolean;
}
