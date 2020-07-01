import React from 'react';
import history from '../actions/History';

export default function CocktailCard(props) {
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
          <button type="button" className="btn btn-info footers" onClick={() => history.push(`/cocktail/${response.idDrink}`)} value={response.idDrink}>
            Instructions
          </button>
        </div>
      </div>
    </div>
  );
}
