import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import unicornData from './data/unicorn-data';
import puppyData from './data/puppy-data';
import sharkData from './data/shark-data';
import dolphinData from './data/dolphin-data';
import Creature from './Creature';

export default class App extends Component {
	render() {
		return (
			<main className="App">
				<header>
					<NavLink to="/unicorns" className="nav">
						Unicorns
					</NavLink>
					<NavLink to="/puppies" className="nav">
						Puppies
					</NavLink>
					<NavLink to="/sharks" className="nav">
						Sharks
					</NavLink>
					<NavLink to="/dolphins" className="nav">
						Dolphins
					</NavLink>
				</header>
				<Route exact path="/" component={Home} />
				<Route path="/unicorns" render={() => <Creature data={unicornData} />} />
				<Route path="/puppies" render={() => <Creature data={puppyData} />} />
				<Route path="/sharks" render={() => <Creature data={sharkData} />} />
				<Route path="/dolphins" render={() => <Creature data={dolphinData} />} /> />
			</main>
		);
	}
}
