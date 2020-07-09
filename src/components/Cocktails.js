import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import CocktailCard from './CocktailCard';
import Loading from './Loading';
import Categories from './Categories';
import { CHANGE_CATEGORY_FILTER } from '../actions/index';
import { filterCategory } from '../utils/utils';

class Cocktails extends Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    const { updateFilter } = this.props;
    updateFilter(e.target.value);
  }

  render() {
    const cocktails = filterCategory(this.props);
    let mapData;
    if (cocktails && cocktails.length === 11) {
      mapData = cocktails.map(cocktail => {
        if (cocktail[1] !== undefined) {
          return cocktail[1].map(res => <CocktailCard response={res} key={res.idDrink} />);
        }
        return [];
      });
    } else {
      mapData = <Loading />;
    }
    return (
      <div>
        <Categories filterCategories={this.handleFilterChange} />

        <div className="container-fluid card-columns">
          {mapData}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cocktails: state.cocktails,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: category => {
    dispatch(CHANGE_CATEGORY_FILTER(category));
  },
});

Cocktails.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cocktails));
