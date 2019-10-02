import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  
  state = {
    starships: [
      { model: 'TacoBuster',
        name: 'Death Taco',
        url: 'https://deathtaco.com'}
    ]
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Star Wars API Search
        </header>
        <Route exact path='/' render = {() =>
        <section>
          {this.state.starships.map((ship, idx) =>
            <Link
              to={`/starships/${idx}`}
            >
              </Link>
          )}
        </section>
          }/>
      </div>
    );
  }
}
export default App;
