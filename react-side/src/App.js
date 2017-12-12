import React, { Component } from 'react';
// import { getCurrency } from './api-endpoint/CurrencyGetter'
import axios from 'axios'

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
   
   componentDidMount() {
      const {userInput} = this.state
      const api = axios.create({
         baseURL: 'https://api.fixer.io'
       })
       const test =  api.get(`/latest?base=${userInput}`)
         .then((res) => {
             res.data
             console.log(res.data);
             this.setState({ stats: res.data })
             console.log(`data loaded ${this.state.stats.date}`);
            }
         )
   }
   
   onClickHandler() {
      const {userInput} = this.state
      const api = axios.create({
         baseURL: 'https://api.fixer.io'
       })
       
      api.get(`/latest?base=${userInput}`)
         .then((res) => {
             res.data
             console.log(res.data);
            }
         )
   }
   
	
  render() {
	 return (
		<div className="App">
			<div className="container"> 
				<div className="row-fluid"> 
					<h1 className="text-warning text-center">Forex Calculator</h1>
					<form className="form-search text-center" onChange={ this.onChangeHandler }>
						<input type="text" className="input-medium search-query" placeholder={this.state.userInput} />
						<button type="submit" className="btn" onClick={ this.onClickHandler }>Search</button>
					</form>
					<hr/>
				</div>
				<div className="row-fulid"> 
					<h1 className="text-warning text-center">Latest Stats</h1>
				</div>

            {!!this.state.stats && (
         
				<div className="row-fulid"> 
					<table className="table table-cell-hover span4 offset2" style={{width: "70%", border: "1px solid red"}} >
						<tbody>
						<tr>
                     <td>Currency:</td> 
                     <td>{ this.state.stats.base }</td>
                  </tr>
						<tr>
                     <td>Currency:</td> 
                     <td>yay</td>
                  </tr>
						<tr>
                     <td>Currency:</td> 
                     <td>yay</td>
                  </tr>
						<tr>
                     <td>Currency:</td> 
                     <td>yay</td>
                  </tr>
						</tbody>
					</table>
				</div>
            )}
			</div>
		</div>
	 );
  }
}

export default App;
