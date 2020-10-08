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
			<Car name={'Ford'} year={2018} />
			<Car name={'Audi'} year={2016}>
				<p style={{ color: 'red' }}>Color</p>
			</Car>
			<Car name={'Mazda'} year={2010} />
		</div>
	);
}

export default App;
