import React from 'react';
import Data from './data/dolphin-data';
import './image-display.css';

const Dolphins = () => {
	const displayDolphin = Data.map(dolphin => {
		const { id, image } = dolphin;
		return <img src={image} className="app-img" key={id} />;
	});
	return <div>{displayDolphin}</div>;
};

export default Dolphins;
