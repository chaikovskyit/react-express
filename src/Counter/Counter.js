import React, { Component } from 'react';

export default class Counter extends Component {
	render() {
		return (
			<div>
				<h2>Counter {this.state.counter}</h2>
				<button onClick={this.addCounter}>
					<strong>+</strong>
				</button>
				<button>
					<strong>-</strong>
				</button>
			</div>
		);
	}
}
