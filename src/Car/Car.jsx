import React from 'react';

export default (props) => (
	<div
		style={{
			border: '1px solid #ccc',

			width: '200px',
			margin: '0 auto',
			marginBottom: '10px',
			marginTop: '10px',
			paddingBottom: '10px',
		}}
	>
		<h3>Car name: {props.name}</h3>
		<p>
			<strong>Year: {props.year}</strong>
		</p>
		<input type='text' onChange={props.onChangeName} value={props.name} />
		{/* <button onClick={props.onChangeTitle}>Click</button> */}
	</div>
);
