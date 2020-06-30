import React from 'react'
import { connect } from 'react-redux'

const Cocktails=  ({cocktails}) =>{

    return (
      <div>
        {cocktails.map(cocktail => {
        return (
          <p >{cocktail[1][1].strDrink}</p>
        );
      })}
      </div>
    )
  
}

const mapStateToProps = (state) => ({

  cocktails: state.cocktails
  
  
})


export default connect(mapStateToProps, null)(Cocktails)
