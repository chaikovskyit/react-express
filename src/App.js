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

	onChangeName(name, index) {
		console.log(name, index);
		const car = this.state.cars[index];
		car.name = name;
		const cars = [...this.state.cars];
		cars[index] = car;
		this.setState({
			cars: cars,
		});
	}

	toggleCarsHandler = () => {
		this.setState({
			showCars: !this.state.showCars,
		});
	};

	deleteHeandler(index) {
		const cars = this.state.cars.concat();
		cars.splice(index, 1);
		this.setState({
			cars: cars,
		});
	}

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
						onChangeName={(event) => this.onChangeName(event.target.value, index)}
						onDelete={this.deleteHeandler.bind(this, index)}
					/>
				);
			});
		}

		return (
			<div style={divStyle}>
				{/* <h1>{this.state.pageTitle}</h1> */}
				<h1>{this.props.title}</h1>
				<button onClick={this.toggleCarsHandler}>Toggle</button>
				<div
					style={{
						width: 400,
						margin: 'auto',
						paddingTop: '20px',
					}}
				>
					{cars}
				</div>
			</div>
		);
	}
}

export default App;
