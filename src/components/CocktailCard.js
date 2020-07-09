import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CocktailCard = props => {
  const { response } = props;

  return (
    <div className="card ">
      <img
        className="card-img-top"
        data-testid="card-img-top"
        src={response.strDrinkThumb}
        alt="Card"
      />
      <div className="card-body text-center">
        <h5 className="card-title " data-testid="card-title">
          {response.strDrink}
        </h5>
      </div>
      <div className="card-footer">
        <Link
          to={`/cocktail/${response.idDrink}`}
          className="btn btn-info m-auto"
          data-testid="card-btn"
        >
          {' '}
          Instructions
        </Link>
      </div>
    </div>
  );
};

CocktailCard.propTypes = {
  response: PropTypes.shape({
    strDrink: PropTypes.string,
    idDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }),
};
CocktailCard.defaultProps = {
  response: PropTypes.shape({
    strDrink: '',
    idDrink: '',
    strDrinkThumb: '',
  }),
};
export default CocktailCard;
