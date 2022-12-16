import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@models/product.model';


@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(value: Array<Product>, id: string): string {
    let product = value.find(product => product.id === id);
    return product ? product.name : id;
  }

}
