import { PLAYERSMOCK } from '@core/mocks/player.mock';
import { PRODUCTSMOCK } from '@core/mocks/product.mock';
import { ProductNamePipe } from './product-name.pipe';

describe('ProductNamePipe', () => {
  let pipe: ProductNamePipe;


  beforeEach(() =>
    pipe = new ProductNamePipe()
  )

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('find name by code i with firstName "Cristiano"', () => {

    const id = 'tarjeta-de-credito';
    const name = 'Tarjeta de crédito';

    const resultPipe = pipe.transform(PRODUCTSMOCK,id );

    expect(resultPipe).toBe(name);

  })

});
