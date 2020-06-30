import React from "react";
import { connect } from "react-redux";

const Categories = ({ categories }) => {
  const mapCategories = categories.map((category) => {
    return (
      <option value={category.strCategory} key={category.strCategory}>
        {category.strCategory}
      </option>
    );
  });
  return (
    <div className="container">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" for="inputGroupSelect01">
          Filter by Category
          </label>
        </div>
        <select className="custom-select category" id="inputGroupSelect01">
          <option selected>Select....</option>
          {mapCategories}
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(Categories);
