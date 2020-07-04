import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Categories = ({ categories, filterCategories }) => {
  const mapCategories = categories.map(category => (
    <option value={category.strCategory} key={category.strCategory}>
      {category.strCategory}
    </option>
  ));
  return (
    <div className="container">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="input-group-text">
            Filter by Category
          </label>
        </div>
        <select
          className="custom-select category"
          id="inputGroupSelect01"
          onChange={e => filterCategories(e)}
        >
          <option disabled>Select....</option>
          <option value="ALL">ALL</option>
          {mapCategories}
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.categories,
});

Categories.propTypes = {
  filterCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      strCategory: PropTypes.string,
    }),
  ),
};
Categories.defaultProps = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      strCategory: 'ALL',
    }),
  ),
};

export default withRouter(connect(mapStateToProps, null)(Categories));
