import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="container"> 
            <div className="row-fluid"> 
               <h1 className="text-warning offset4">Hello</h1>
               <form className="form-search  offset4">
                  <input type="text" className="input-medium search-query" placeholder="..."/>
                  <button type="submit" className="btn">Search</button>
               </form>
            </div>
         </div>


         

         
      </div>
    );
  }
}

export default App;
