import React, { Component } from "react";
import { connect } from "react-redux";

export class Cocktails extends Component {
  render() {
    const { cocktails } = this.props;
    let mapData;
    if (cocktails.length === 11) {
      mapData = cocktails.map((cocktail) => {
        return cocktail[1].map((res) => {
          return (
            <div className="card-group w-25 h-25">
              <div className="card">
                <img
                  className="card-img-top w-100 h-100;"
                  src={res.strDrinkThumb}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{res.strDrink}</h5>
                </div>
              </div>
            </div>
          );
        });
      });
    } else {
      mapData = <div class="alert alert-secondary" role="alert">
      Loading...
    </div>
    }
    return <div className='container d-flex align-content-around flex-wrap'>{mapData}</div>;
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.cocktails,
});

export default connect(mapStateToProps, null)(Cocktails);
