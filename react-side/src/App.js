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
   
   componentDidMount() {
      this.onClickHandler() 
      console.log("component mounted");
   }
   
   onClickHandler() {
      const {userInput} = this.state
      getCurrency(userInput)
         .then((stats) => {
            this.setState({ stats: stats, error: null })
            console.log("I'm from App.js");
            console.log(this.state.stats);
         }
      )
      .catch((error) => {
         // If 404 not found
         if (error.response.status === 404) {
           error = new Error(`The stock symbol '${userInput}' does not exist`)
         }
         this.setState({ error: error })
       })   
   }
   
	
  render() {
	 return (
		<div className="App">
			<div className="container"> 
				<div className="row-fluid"> 
					<h1 className="text-warning text-center">Forex Calculator</h1>
					<form className="form-search text-center" onChange={ this.onChangeHandler }>
						<input type="text" className="input-medium search-query" placeholder={this.state.userInput} />
						<button type="submit" className="btn" onClick={ () => 1+1 }>Search</button>
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
