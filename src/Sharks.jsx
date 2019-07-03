import React from 'react';
import Data from './data/shark-data';
import './image-display.css';

const Sharks = () => {
	const displaySharks = Data.map(shark => {
		const { id, image } = shark;
		return <img src={image} className="app-img" key={id} />;
	});
	return <div>{displaySharks}</div>;
};

export default Sharks;
