import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="container"> 
            <div className="row"> 
               <h3><u>Different types of Headings</u></h3>
               <h1>BootMetro!</h1>
               <h2>BootMetro!</h2>
               <h3>BootMetro!</h3>
               <h4>BootMetro!</h4>
               <h5>BootMetro!</h5>
               <h6>BootMetro!</h6><br/>
               <h3><u>Defining small text</u></h3>
               <p><small>Welcome to BootMetro</small> </p><br/>
               <h3><u>Different emphasis classes</u></h3>
               <p className="text-warning">Welcome to BootMetro</p>
               <p className="text-error">Welcome to BootMetro</p>
               <p className="text-info">Welcome to BootMetro</p>
               <p className="text-success">Welcome to BootMetro</p><br/>
               <h3><u>Abbreviations</u></h3>
               <abbr title="Transport Control Protocol">TCP</abbr>
            </div>

            <div>
               <form className="form-search">
                  <input type="text" className="input-medium search-query"/>
                  <button type="submit" className="btn">Search</button>
               </form>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
