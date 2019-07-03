import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Unicorns from './Unicorns';
import Puppies from './Puppies';
import Sharks from './Sharks';

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
				</header>
				<Route exact path="/" component={Home} />
				<Route path="/unicorns" component={Unicorns} />
				<Route path="/puppies" component={Puppies} />
				<Route path="/sharks" component={Sharks} />
			</main>
		);
	}
}
