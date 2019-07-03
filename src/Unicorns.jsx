import React from 'react';
import Data from './data/unicorn-data';
import './image-display.css';

const Unicorns = () => {
	const displayUnicorns = Data.map(unicorn => {
		const { id, image } = unicorn;
		return <img src={image} className="app-img" key={id} />;
	});
	return <div>{displayUnicorns}</div>;
};

export default Unicorns;
