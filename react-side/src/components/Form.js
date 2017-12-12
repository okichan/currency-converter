import React from 'react'

const Form = ({ 
	currency,
	onChange,
	loadCurrency
}) => {
	return (
		<form className="form-search  offset4">
			<input 
				type="text" 
				className="input-medium search-query" 
				placeholder="eg. USD"
				aria-label='Symbol'
				value={ currency }
				onChange={ onChange }
			/>
			<button type="submit" className="btn" onClick={ loadCurrency }>Search</button>
		</form>
	)
}

export default Form
