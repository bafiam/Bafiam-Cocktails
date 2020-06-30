import React, { Component } from "react";
import { connect } from "react-redux";
import CocktailCard from './CocktailCard'
import Loading from './Loading'
export class Cocktails extends Component {
  render() {
    const { cocktails } = this.props;
    let mapData;
    if (cocktails.length === 11) {
      mapData = cocktails.map((cocktail) => {
        return cocktail[1].map((res) => {
          return (
            <CocktailCard response={res}></CocktailCard>
          );
        });
      });
    } else if (cocktails.length === 1){
      mapData = cocktails.map((cocktail) => {
        return cocktail[1].map((res) => {
          return (
            <CocktailCard response={res}></CocktailCard>
          );
        });
      });
      
    }
    else {
      mapData = (
        <Loading></Loading>
      );
    }
    return (
      <div className="container d-flex align-content-around flex-wrap">
        {mapData}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.cocktails,
});

export default connect(mapStateToProps, null)(Cocktails);
