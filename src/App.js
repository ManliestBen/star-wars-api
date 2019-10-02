import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Starship from './pages/Starship/Starship';

class App extends Component {
  
  state = {
    starships: [
      { model: 'TacoBuster',
        name: 'Death Taco',
        url: 'https://deathtaco.com'},
      { model: 'Flamethrower',
        name: 'HottyHott',
        url: 'https://hothothot.com'},

    ]
  }
  
  getStarship = (idx) => {
    return this.state.starships[idx];
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
        <Route exact path='/starships/:idx' render={(props) =>
          <Starship 
          {...props}
          getStarship={this.getStarship}
          />
        }/>
      </div>
    );
  }
}
export default App;
