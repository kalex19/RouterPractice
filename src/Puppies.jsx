import React from 'react';
import Data from './data/puppy-data';
import './image-display.css';

const Puppies = () => {
	const displayPuppies = Data.map(puppy => {
		const { id, image } = puppy;
		return <img src={image} className="app-img" key={id} />;
	});
	return <div>{displayPuppies}</div>;
};

export default Puppies;
