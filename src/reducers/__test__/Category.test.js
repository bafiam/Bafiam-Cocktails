import { fetchCategory } from '../../actions/index';
import { FETCH_CATEGORIES } from '../../actions/types';

describe('Test categoryReducer', () => {
  const drinks = [
    { strCategory: 'Ordinary Drink' },
    { strCategory: 'Cocktail' },
    { strCategory: 'Milk / Float / Shake' },
    { strCategory: 'Other/Unknown' },
    { strCategory: 'Cocoa' },
    { strCategory: 'Shot' },
    { strCategory: 'Coffee / Tea' },
    { strCategory: 'Homemade Liqueur' },
    { strCategory: 'Punch / Party Drink' },
    { strCategory: 'Beer' },
    { strCategory: 'Soft Drink / Soda' },
  ];
  test('should return data with a defined FETCH_CATEGORIES type ', () => {
    const test = fetchCategory(drinks);
    expect(test.type).toBe(FETCH_CATEGORIES);
  });

  test('should return Ordinary Drinke', () => {
    const test = fetchCategory(drinks);

    expect(test.categories[0].strCategory).toBe('Ordinary Drink');
  });
});
