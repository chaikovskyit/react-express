import React from 'react';
import './Car.css';

class Car extends React.Component {
	componentWillReceiveProps(nextProps) {
		console.log('Car componentWillReceiveProps', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('Car shouldComponentUpdate', nextProps, nextState);
		return nextProps.name.trim() !== this.props.name.trim();
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('Car componentWillUpdate', nextProps, nextState);
	}

	componentDidUpdate() {
		console.log('Car componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('Car componentWillUnmount');
	}

	render() {
		console.log('Car render');

		const inputClasses = ['input'];

		this.props.name !== '' ? inputClasses.push('green') : inputClasses.push('red');

		if (this.props.name.length > 4) {
			inputClasses.push('bold');
		}

		return (
			<div className='Car'>
				<h3>Car name: {this.props.name}</h3>
				<p>
					Year: <strong>{this.props.year}</strong>
				</p>
				<input
					type='text'
					onChange={this.props.onChangeName}
					value={this.props.name}
					className={inputClasses.join(' ')}
				/>
				<button onClick={this.props.onChangeTitle}>Click</button>
				<button onClick={this.props.onDelete}>Delete</button>
			</div>
		);
	}
}

// const Car = (props) => {
// 	const inputClasses = ['input'];

// 	// if (props.name !== '') {
// 	// 	inputClasses.push('green');
// 	// } else {
// 	// 	inputClasses.push('red');
// 	// }
// 	props.name !== '' ? inputClasses.push('green') : inputClasses.push('red');

// 	if (props.name.length > 4) {
// 		inputClasses.push('bold');
// 	}

// 	return (
// 		<div className='Car'>
// 			<h3>Car name: {props.name}</h3>
// 			<p>
// 				Year: <strong>{props.year}</strong>
// 			</p>
// 			<input
// 				type='text'
// 				onChange={props.onChangeName}
// 				value={props.name}
// 				className={inputClasses.join(' ')}
// 			/>
// 			<button onClick={props.onChangeTitle}>Click</button>
// 			<button onClick={props.onDelete}>Delete</button>
// 		</div>
// 	);
// };

export default Car;
