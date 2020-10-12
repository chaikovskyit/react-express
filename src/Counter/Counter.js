import React, { Component } from 'react';
import './Counter.css';
import Counter2 from '../Counter2/Counter2';

export default class Counter extends Component {
	state = {
		counter: 0,
	};

	addCounter = () => {
		// this.setState({
		// 	counter: this.state.counter + 1,
		// });
		// New method change state
		this.setState((prevState) => {
			return {
				counter: prevState.counter + 1,
			};
		});
	};
	removeCounter = () => {
		this.setState({
			counter: this.state.counter - 1,
		});
	};
	render() {
		return (
			<div className='counter'>
				<h2>Counter {this.state.counter}</h2>
				<Counter2 />
				<button onClick={this.addCounter}>
					<strong>+</strong>
				</button>
				<button onClick={this.removeCounter}>
					<strong>-</strong>
				</button>
			</div>
		);
	}
}
