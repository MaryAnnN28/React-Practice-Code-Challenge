import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [], 
    eaten: [], 
    page: 0, 
    funds: 100
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushiArray => {
        this.setState({sushis: sushiArray})
      })
  }

  // renders 4 sushi at a time after clicking more sushi button
  segmentSushi = () => {
    const page = this.state.page
    const start = page * 4
    return this.state.sushis.slice(start, start + 4)
  }

  // handles the more sushi button to go to next 4 sushis
  handleNextPage = () => {
    this.setState(prevState => {
      let page = prevState.page !== 24 ? (prevState.page + 1) : 0
      return { page: page}
    })
  }

  
  handleSushiClick = (sushi) => {
    if (this.state.funds >= sushi.price) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        funds: this.state.funds - sushi.price
      })
    }
  } 
  
  remainingFunds = () => {
    return this.state.eaten.reduce((total, currentSushi) =>
      total - currentSushi.price, 100) 
  }

  render() {
    return (
      <div className="app">
        
        <SushiContainer
          sushis={this.segmentSushi()}
          handleNextPage={this.handleNextPage}
          handleSushiClick={this.handleSushiClick}
          eaten={this.state.eaten}
       />

        <Table
          eaten={this.state.eaten} 
          funds={this.remainingFunds()}
          />

      </div>
    );
  }
}

export default App;