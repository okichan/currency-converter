import React, { Component } from 'react';
import { getCurrency } from './api-endpoint/CurrencyGetter'

class App extends Component {
	state = {
		userInput: "USD",
		stats: null,
		error: null
	}

	onChangeHandler = (event) => {
		this.setState({ userInput: event.target.value })
		console.log(this.state.userInput);
	}

	
  render() {
	 return (
		<div className="App">
			<div className="container"> 
				<div className="row-fluid"> 
					<h1 className="text-warning text-center">Forex Calculator</h1>
					<form className="form-search text-center" onChange={ this.onChangeHandler }>
						<input type="text" className="input-medium search-query" placeholder={this.state.userInput} />
						<button type="submit" className="btn">Search</button>
					</form>
					<hr/>
				</div>
				<div className="row-fulid"> 
					<h1 className="text-warning text-center">Latest Stats</h1>
				</div>

				<div className="row-fulid"> 
					<table className="table table-cell-hover" >
						<tbody>
						<tr><td>Currency: </td></tr>
						<tr><td>Date:</td></tr>
						<tr><td>Currency:</td></tr>
						<tr><td>Currency:</td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	 );
  }
}

export default App;
