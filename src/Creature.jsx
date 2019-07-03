import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom';

const Creature = ({ data }) => {
	const displayCreatures = data.map(creature => {
		const { id, image, type } = creature;
		return (
			<Link to={`/${type}/${id}`} key={id}>
				<img src={image} className="app-img" />
			</Link>
		);
	});
	return <div>{displayCreatures}</div>;
};

export default Creature;
