import React, { Component } from 'react';
import Car from './Car/Car.jsx';
import './App.css';

class App extends Component {
	state = {
		cars: [
			{ name: 'Ford', year: 2018 },
			{ name: 'Audi', year: 2016 },
			{ name: 'Mazda', year: 2010 },
		],
		pageTitle: 'React components',
		showCars: false,
	};

	changeTitleHandler = (newTitle) => {
		this.setState({
			pageTitle: newTitle,
		});
	};

	toggleCarsHandler = () => {
		this.setState({
			showCars: !this.state.showCars,
		});
	};

	render() {
		const divStyle = {
			textAlign: 'center',
		};

		let cars = null;

		if (this.state.showCars) {
			cars = this.state.cars.map((car, index) => {
				return (
					<Car
						key={index}
						name={car.name}
						year={car.year}
						onChangeTitle={() => this.changeTitleHandler(car.name)}
					/>
				);
			});
		}

		return (
			<div style={divStyle}>
				<h1>{this.state.pageTitle}</h1>
				<button onClick={this.toggleCarsHandler}>Toggle</button>

				{cars}
				{/* 1 example */}
				{/* {this.state.showCars
					? this.state.cars.map((car, index) => {
							return (
								<Car
									key={index}
									name={car.name}
									year={car.year}
									onChangeTitle={() => this.changeTitleHandler(car.name)}
								/>
							);
					  })
					: null} */}
			</div>
		);
	}
}

export default App;
