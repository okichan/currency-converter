import React, { Component } from 'react';
import { getCurrency } from './api-endpoint/CurrencyGetter'
// import axios from 'axios'

class App extends Component {
	state = {
		userInput: "AUD",
		stats: null,
		error: null
   }
   
   load() {
      const test = this.state.userInput
      getCurrency(test)
      .then((yay) => { // Success
         this.setState({
           stats: yay,
           error: null // Clear error
         })
         console.log(yay)
       })
      .catch(error => {
         console.log(error.response)
      });
   }

   componentDidMount() {
      this.load()
   }
   
   onClickHandler = (event) => {
      event.preventDefault()
      this.load()
   }
   
   onChangeHandler = (event) => {
      this.setState({ userInput: event.target.value.toUpperCase() })
   }
   
   render() {
      const stats = this.state.stats
      
      return (
         <div className="App">
			<div className="container"> 
				<div className="row-fluid"> 
					<h1 className="muted text-center">Forex Generator</h1>
					<form className="form-search text-center" onChange={ this.onChangeHandler }>
						<input type="text" className="input-medium search-query" placeholder={this.state.userInput} />
						<button type="submit" className="btn" onClick={ this.onClickHandler }>Search</button>
					</form>
            <p>userInput = { this.state.userInput }</p>
					<hr/>
				</div>
				<div className="row-fulid"> 
					<h1 className="muted text-center">Latest Stats</h1>
				</div>
            {!!this.state.stats ?  (
         
				<div className="row-fulid"> 
					<table className="table table-bordered table-hover span4 offset2" style={{width: "70%"}} >
						<tbody>
						<tr>
                     <td>Currency:</td> 
                     <td>{ stats.base }</td>
                  </tr>
						<tr>
                     <td>Date:</td> 
                     <td>{ stats.date }</td>
                  </tr>
						<tr>
                     <td><h3>Rates:</h3></td> 
                     <td  style={{borderLeft: "1px solid transparent"}}></td> 
                  </tr>
                  { Object.entries(stats.rates).map(m => 
                     <tr key={m[1]}>
                        <td>  
                           <p>{m[0]}</p>
                        </td>
                        <td>  
                           <p>{m[1]}</p>
                        </td>
                     </tr>
                  )} 
						</tbody>
					</table>
				</div>
            ) : (<h4 className="text-center"><br/>Stats not loaded🙅</h4>)
            }
			</div>
		</div>
	 );
  }
}

export default App;
