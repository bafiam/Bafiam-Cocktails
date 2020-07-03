import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Loading from './Loading';
import ItemCocktailCard from './ItemCocktailCard';

class ItemCocktails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      itemCocktail: [],
      id: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;
    axios({
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/lookup.php',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
        'x-rapidapi-key': '4823c0e453msh880ff1391e635c2p163ad2jsn0031468c3493',
        useQueryString: true,
      },
      params: {
        i: id,
      },
    })
      .then(response => {
        this.setState({
          isLoading: false,
          itemCocktail: response.data.drinks,
          id,
        });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  render() {
    const { isLoading, itemCocktail, id } = this.state;
    let loadData;
    if (isLoading === true) {
      loadData = (
        <div>
          <div className="alert alert-info" role="alert">
            Loading data in a moment!
          </div>
          <Loading />
        </div>
      );
    } else if (
      isLoading === false && itemCocktail !== null
      && itemCocktail.length > 0
    ) {
      const data = itemCocktail.map(item => item);
      loadData = <ItemCocktailCard itemData={data[0]} key={id} />;
    } else {
      loadData = (
        <div>
          <div className="alert alert-danger" role="alert">
            Something went wrong! Navigate back to home page
          </div>
          <Loading />
        </div>
      );
    }
    return <div className="container">{loadData}</div>;
  }
}

ItemCocktails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),

};

ItemCocktails.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: '',
    }),
  }),

};
export default ItemCocktails;
