import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CocktailCard = props => {
  const { response } = props;

  return (
    <div className="card-group w-25 h-25 mb-2">
      <div className="card">
        <img
          className="card-img-top img"
          src={response.strDrinkThumb}
          alt="Card"
        />
        <div className="card-body text-center">
          <h5 className="card-title ">{response.strDrink}</h5>
        </div>
        <div className="card-footer mr-auto ml-auto">

          <Link to={`/cocktail/${response.idDrink}`} className="btn btn-info"> Instructions</Link>

        </div>
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
