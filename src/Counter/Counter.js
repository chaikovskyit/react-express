import React, { Component } from 'react';

export default class Counter extends Component {
	state = {
		counter: 0,
	};

	addCounter = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	};

	removeCounter = () => {
		this.setState({
			counter: this.state.counter - 1,
		});
	};
	render() {
		return (
			<div>
				<h2>Counter {this.state.counter}</h2>
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
