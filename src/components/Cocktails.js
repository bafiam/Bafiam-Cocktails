
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Cocktails extends Component {
  render() {
    const {cocktails} = this.props
    let mapData
    if (cocktails.length === 11){
      mapData = cocktails.map((cocktail) =>{
        return(
          cocktail[1].map((res) => {
            return (
              <div>
              <p>{res.strDrink}</p>
              <img src={res.strDrinkThumb} alt="..." class="img-thumbnail "></img>
            
              </div>
              )
          })
          )
      })
    }else{
      mapData = <p>Loading...</p>
    }
    return (
      <div>
        {mapData}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.cocktails
  
})



export default connect(mapStateToProps, null)(Cocktails)
