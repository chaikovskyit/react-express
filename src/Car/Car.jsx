import React from 'react';
import classes from './Car.module.css';
import withClass from '../hoc/withClass';
import PropTypes from 'prop-types';

class Car extends React.Component {
	componentDidMount() {
		if (this.props.index === 1) {
			this.inputRef.focus();
		}
	}

	render() {
		const inputClasses = ['input'];

		this.props.name !== '' ? inputClasses.push('green') : inputClasses.push('red');

		if (this.props.name.length > 4) {
			inputClasses.push('bold');
		}

		return (
			<React.Fragment>
				<h3>Car name: {this.props.name}</h3>
				<p>
					Year: <strong>{this.props.year}</strong>
				</p>
				<input
					ref={(inputRef) => (this.inputRef = inputRef)}
					type='text'
					onChange={this.props.onChangeName}
					value={this.props.name}
					className={inputClasses.join(' ')}
				/>
				<button onClick={this.props.onChangeTitle}>Click</button>
				<button onClick={this.props.onDelete}>Delete</button>
			</React.Fragment>
		);
	}
}

Car.propTypes = {
	name: PropTypes.string,
	year: PropTypes.number,
	index: PropTypes.number,
	onChangeName: PropTypes.func,
	onDelete: PropTypes.func,
};

export default withClass(Car, classes.Car);
