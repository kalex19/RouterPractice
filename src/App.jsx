import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import unicornData from './data/unicorn-data';
import puppyData from './data/puppy-data';
import sharkData from './data/shark-data';
import dolphinData from './data/dolphin-data';
import Creature from './Creature';
import CreatureDetails from './CreatureDetails';

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
				<Route path="/dolphins" render={() => <Creature data={dolphinData} />} />
				<Route
					exact
					path="/unicorns/:id"
					render={({ match }) => {
						const { id } = match.params;
						const foundCreature = unicornData.find(unicorn => unicorn.id === parseInt(id));
						if (foundCreature) {
							return <CreatureDetails {...foundCreature} />;
						}
					}}
				/>
				<Route
					exact
					path="/puppies/:id"
					render={({ match }) => {
						const { id } = match.params;
						const foundCreature = puppyData.find(puppy => puppy.id === parseInt(id));
						if (foundCreature) {
							console.log(foundCreature);
							return <CreatureDetails {...foundCreature} />;
						}
					}}
				/>
				<Route
					exact
					path="/sharks/:id"
					render={({ match }) => {
						const { id } = match.params;
						const foundCreature = sharkData.find(sharks => sharks.id === parseInt(id));
						if (foundCreature) {
							return <CreatureDetails {...foundCreature} />;
						}
					}}
				/>
				<Route
					exact
					path="/dolphins/:id"
					render={({ match }) => {
						const { id } = match.params;
						const foundCreature = dolphinData.find(dolphin => dolphin.id === parseInt(id));
						if (foundCreature) {
							return <CreatureDetails {...foundCreature} />;
						}
					}}
				/>
			</main>
		);
	}
}
