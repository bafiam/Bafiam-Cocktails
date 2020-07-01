import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";
import ItemCocktailCard from "./ItemCocktailCard";

export default class ItemCocktails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      itemCocktail: [],
      id:null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    let id = this.props.match.params.id;
    axios({
      method: "GET",
      url: "https://the-cocktail-db.p.rapidapi.com/lookup.php",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "4823c0e453msh880ff1391e635c2p163ad2jsn0031468c3493",
        useQueryString: true,
      },
      params: {
        i: id,
      },
    })
      .then((response) => {
        this.setState({
          isLoading: false,
          itemCocktail: response.data.drinks,
          id:id
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let loadData;
    if (this.state.isLoading === true) {
      loadData = (
        <div>
          <div className="alert alert-info" role="alert">
            Loading data in a moment!
          </div>
          <Loading></Loading>
        </div>
      );
    } else if (
      this.state.isLoading === false &&
      this.state.itemCocktail.length > 0
    ) {
        let data = this.state.itemCocktail.map((item) => {
            return item
        })
      loadData = <ItemCocktailCard props ={data[0]} key={this.state.id}></ItemCocktailCard>
      
      
    } else {
      loadData = (
        <div>
          <div className="alert alert-danger" role="alert">
            Something went wrong!
          </div>
          <Loading></Loading>
        </div>
      );
    }
    return <div className="container">{loadData}</div>;
  }
}
