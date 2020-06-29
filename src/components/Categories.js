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
    <div>
      <div>
        <label>select category</label>
        <select name="category" id="category">
          <option disabled selected>
            Select...
          </option>
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
