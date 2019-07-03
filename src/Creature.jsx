import React from 'react';
import './image-display.css';

const Creature = ({ data }) => {
	const displayCreatures = data.map(creature => {
		const { id, image } = creature;
		return <img src={image} className="app-img" key={id} />;
	});
	return <div>{displayCreatures}</div>;
};

export default Creature;
