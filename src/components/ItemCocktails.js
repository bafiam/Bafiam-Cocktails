import React, { Component } from 'react'

export default class ItemCocktails extends Component {
  componentDidMount (){
    let id = this.props.match.params.id
    console.log(id)
  }
  render() {
    return (
      <div>
        hhaa
      </div>
    )
  }
}
