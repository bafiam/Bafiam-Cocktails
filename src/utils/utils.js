import axios from "axios";
import { FETCH_CATEGORIES, FETCH_COCKTAILS } from "../actions/types";

export const fetchCategory = (categories) => {
  return {
    type: FETCH_CATEGORIES,
    categories,
  };
};

export const fetchAllCategories = () => {
  return (dispatch) => {
    return axios({
      method: "GET",
      url: "https://the-cocktail-db.p.rapidapi.com/list.php",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "4823c0e453msh880ff1391e635c2p163ad2jsn0031468c3493",
        useQueryString: true,
      },
      params: {
        c: "list",
      },
    })
      .then((response) => {
        return dispatch(fetchCategory(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const fetchCocktailByCategory = (cocktails) => {
  return {
    type: FETCH_COCKTAILS,
    cocktails,
  };
};

export const fetchAllCocktailByCategory = () => {
  return (dispatch) => {
    const allCategories = [
      "Ordinary Drink",
      "Cocktail",
      "Milk / Float / Shake",
      "Other/Unknown",
      "Cocoa",
      "Shot",
      "Coffee / Tea",
      "Homemade Liqueur",
      "Punch / Party Drink",
      "Beer",
      "Soft Drink / Soda",
    ];
    return allCategories.map((category) => {
      return axios({
        method: "GET",
        url: "https://the-cocktail-db.p.rapidapi.com/filter.php",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key":
            "4823c0e453msh880ff1391e635c2p163ad2jsn0031468c3493",
          useQueryString: true,
        },
        params: {
          c: category,
        },
      }).then((response) => {
  
          return dispatch(
            fetchCocktailByCategory([category,
              response.data.drinks,
            ])
          );
        })
        .catch((error) => {
        throw error;
      });
    })
      
  };
};

