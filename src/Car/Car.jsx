import React from 'react';
import './Car.css';

class Car extends React.Component {
	render() {
		console.log('Car render');

		if (Math.random() > 0.7) {
			throw new Error('Car random failed');
		}

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
