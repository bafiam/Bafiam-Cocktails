import React from 'react';
import { connect } from 'react-redux';

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
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Filter by Category
          </label>
        </div>
        <select
          className="custom-select category"
          id="inputGroupSelect01"
          onChange={e => filterCategories(e)}
        >
          <option selected disabled>Select....</option>
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

// Categories.propTypes = {
//   filterCategories: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, null)(Categories);
