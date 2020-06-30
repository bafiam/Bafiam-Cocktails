import React, { Component } from "react";
import { connect } from "react-redux";
import CocktailCard from "./CocktailCard";
import Loading from "./Loading";
import Categories from "./Categories";
import { CHANGE_CATEGORY_FILTER } from "../actions/index";
import { filterCategory } from "../utils/utils";
export class Cocktails extends Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    const { updateFilter } = this.props;
    updateFilter(e.target.value);
    // console.log(this.props.filter)
  }

  render() {
    const cocktails = filterCategory(this.props);
    let mapData;
    if (cocktails && cocktails.length === 11) {
      mapData = cocktails.map((cocktail) => {
        if (cocktail[1] !== undefined) {
          return cocktail[1].map((res) => {
            return <CocktailCard response={res}></CocktailCard>;
          });
        }
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
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (category) => {
    dispatch(CHANGE_CATEGORY_FILTER(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);
