import React from 'react';
import PropTypes from 'prop-types';

const ItemCocktailCard = props => {
  const {
    strDrinkThumb,
    strDrink,
    strInstructions,
    strGlass,
    strCategory,
    // eslint-disable-next-line react/destructuring-assignment
  } = props.props;

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
  // eslint-disable-next-line react/destructuring-assignment
  const mapIngredients = ingredients(props.props).map((entry, index) => (
    <li className="list-group-item d-flex justify-content-between align-items-center" key={entry}>
      {entry}
      <span className="badge badge-primary badge-pill">
        {measures(props.props)[index]}
      </span>
    </li>
  ));

  return (
    <div className="card-deck w-100 ">
      <div className="card w-100 h-50">
        <div className="card-header text-center text-uppercase">{strCategory}</div>
        <div className=" d-flex flex-row w-100">
          <img className="card-img-top w-50" src={strDrinkThumb} alt="Card " />
          <div className="card-body">
            <h5 className="card-title text-center">{strDrink}</h5>
            <p className="card-text">{strInstructions}</p>
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
  props: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strInstructions: PropTypes.string,
    strGlass: PropTypes.string,
    strCategory: PropTypes.string,
  }),
};
ItemCocktailCard.defaultProps = {
  props: PropTypes.shape({
    strDrinkThumb: '',
    strDrink: '',
    strInstructions: '',
    strGlass: '',
    strCategory: '',
  }),
};
export default ItemCocktailCard;
