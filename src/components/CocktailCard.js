import React from "react";

export default function CocktailCard(props) {
  const {response} = props
  return (
    <div className="card-group w-25 h-25 mb-2">
      <div className="card">
        <img
          className="card-img-top w-100 h-100;"
          src={response.strDrinkThumb}
          alt="Card"
        />
        <div className="card-body">
          <h5 className="card-title">{response.strDrink}</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">Read more...</small>
        </div>
      </div>
    </div>
  );
}
