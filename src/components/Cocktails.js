import React, { Component } from "react";
import { connect } from "react-redux";
import CocktailCard from "./CocktailCard";
import Loading from "./Loading";
import Categories from "./Categories";
export class Cocktails extends Component {
  constructor(props) {
    super(props)
  
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    console.log(e.target.value);
  }
  
  render() {
    const { cocktails } = this.props;
    let mapData;
    if (cocktails.length === 11) {
      mapData = cocktails.map((cocktail) => {
        return cocktail[1].map((res) => {
          return <CocktailCard response={res}></CocktailCard>;
        });
      });
    } else if (cocktails.length === 1) {
      mapData = cocktails.map((cocktail) => {
        return cocktail[1].map((res) => {
          return <CocktailCard response={res}></CocktailCard>;
        });
      });
    } else {
      mapData = <Loading></Loading>;
    }
    return (
      <div>
        <Categories filterCategories={this.handleFilterChange}></Categories>

        <div className="container d-flex align-content-around flex-wrap">
          {mapData}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.cocktails,
});

export default connect(mapStateToProps, null)(Cocktails);
