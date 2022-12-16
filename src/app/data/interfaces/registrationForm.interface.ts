import {ProductosInterface} from "./productos.interface";

export interface RegistrationFormInterface {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    provincia: string;
    ciudad: string;
    productos: ProductosInterface[];
    informacion: boolean;
    agree?: boolean;
}
