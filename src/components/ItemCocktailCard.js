import React from 'react';
import PropTypes from 'prop-types';

const ItemCocktailCard = props => {
  const { itemData } = props;
  const {
    strDrinkThumb,
    strDrink,
    strInstructions,
    strGlass,
    strCategory,
  } = itemData;

  const ingredients = data => {
    const results = [];
    Object.entries(data).map(entry => {
      if (entry[0].includes('strIngredient') && entry[1] !== null) {
        results.push(entry[1]);
      }
      return [];
    });
    return results;
  };
  const measures = data => {
    const results = [];
    Object.entries(data).map(entry => {
      if (entry[0].includes('strMeasure') && entry[1] !== null) {
        results.push(entry[1]);
      }
      return [];
    });
    return results;
  };
  const mapIngredients = ingredients(itemData).map((entry, index) => (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      data-testid={`badge-${index}`}
      key={entry}
    >
      {entry}
      <span className="badge badge-primary badge-pill " data-testid={`badge-pill-${index}`}>
        {measures(itemData)[index]}
      </span>
    </li>
  ));

  return (
    <div className="card-deck w-100 ">
      <div className="card w-100 h-50">
        <div className="card-header text-center text-uppercase" data-testid="card-header">{strCategory}</div>
        <div className=" d-flex flex-row w-100">
          <img className="card-img-top w-50" src={strDrinkThumb} data-testid="card-img-top" alt="Card " />
          <div className="card-body">
            <h5 className="card-title text-center" data-testid="card-title">{strDrink}</h5>
            <p className="card-text" data-testid="card-text">{strInstructions}</p>
            <div>
              <ul className="list-group">
                <li className="list-group-item list-group-item-primary text-center">
                  Ingredients
                </li>
                {mapIngredients}
              </ul>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">{strGlass}</small>
        </div>
      </div>
    </div>
  );
};

ItemCocktailCard.propTypes = {
  itemData: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strInstructions: PropTypes.string,
    strGlass: PropTypes.string,
    strCategory: PropTypes.string,
  }),
};
ItemCocktailCard.defaultProps = {
  itemData: PropTypes.shape({
    strDrinkThumb: '',
    strDrink: '',
    strInstructions: '',
    strGlass: '',
    strCategory: '',
  }),
};
export default ItemCocktailCard;
