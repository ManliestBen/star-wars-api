import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Starship from './pages/Starship/Starship';
import { getShipList } from './services/starship-api';

class App extends Component {
  
  state = {
    starships: [
      { model: 'TacoBuster',
        name: 'Death Taco',
        url: 'https://deathtaco.com'},
      { model: 'Flamethrower',
        name: 'HottyHott',
        url: 'https://hothothot.com'}

    ]
  }
  
  getStarship = (idx) => {
    return this.state.starships[idx];
  }

  async componentDidMount() {
    const allships = await getShipList();
    this.setState({starships: allships.results})
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
              key={ship.name}
            >
              {ship.name}
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
