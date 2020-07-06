import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CocktailCard from '../CocktailCard';

describe('Test the Cocktail cards', () => {
  const data = {
    response: {
      idDrink: '15691',
      strDrink: 'Zoksel',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/ft8ed01485620930.jpg',
    },
  };
  test('should check that card-title data is Zoksel ', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <CocktailCard response={data.response} />
      </BrowserRouter>,
    );
    expect(getByTestId('card-title')).toHaveTextContent('Zoksel');
  });
  test('should check that card-button text is Instructions ', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <CocktailCard response={data.response} />
      </BrowserRouter>,
    );
    expect(getByTestId('card-btn')).toHaveTextContent('Instructions');
  });
  test('should check that card-image src is an image url ', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <CocktailCard response={data.response} />
      </BrowserRouter>,
    );
    expect(getByTestId('card-img-top')).toHaveAttribute(
      'src',
      'https://www.thecocktaildb.com/images/media/drink/ft8ed01485620930.jpg',
    );
  });
  test('should check that card-button href attribute  has 15691 ', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <CocktailCard response={data.response} />
      </BrowserRouter>,
    );
    expect(getByTestId('card-btn')).toHaveAttribute('href', '/cocktail/15691');
  });
});
