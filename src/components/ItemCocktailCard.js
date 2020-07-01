import React from "react";
import PropTypes from "prop-types";

const ItemCocktailCard = (props) => {
  const { strDrinkThumb, strDrink, strInstructions, strGlass } = props.props;
  const ingredients = (data) => {
    let results = [];
    Object.entries(data).map((entry) => {
      if (entry[0].includes("strIngredient") && entry[1] !== null) {
        results.push(entry[1]);
      }
    });
    return results;
  };
  const measures = (data) => {
    let results = [];
    Object.entries(data).map((entry) => {
      if (entry[0].includes("strMeasure") && entry[1] !== null) {
        results.push(entry[1]);
      }
    });
    return results;
  };
  const mapIngredients = ingredients(props.props).map((entry, index) => {
    return (
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {entry}
    <span class="badge badge-primary badge-pill">{measures(props.props)[index]}</span>
      </li>
    );
  });


  return (
    <div className="card-deck w-100 ">
      <div className="card w-100 h-50">
        <div className=" d-flex flex-row w-100">
          <img className="card-img-top w-50" src={strDrinkThumb} alt="Card " />
          <div className="card-body">
            <h5 className="card-title">{strDrink}</h5>
            <p className="card-text">{strInstructions}</p>
            <div>
              <ul class="list-group">
                <li class="list-group-item list-group-item-primary">
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

ItemCocktailCard.propTypes = {};

export default ItemCocktailCard;
