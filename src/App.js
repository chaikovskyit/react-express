import React from 'react';
import Car from './Car/Car.jsx';
import './App.css';

function App() {
	const divStyle = {
		textAlign: 'center',
	};

	return (
		<div style={divStyle}>
			<h1>Hello world</h1>
			<Car />
		</div>
	);
}

export default App;
