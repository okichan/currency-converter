import React, { Component } from "react";
import "./App.css";
import { getCurrency } from "./api-endpoint/CurrencyGetter";
import {AddNewList, List} from "./components/TodoList";

class App extends Component {
   state = {
      userInput: "",
      stats: null,
      error: null,
      number: 1,
      todoList: [
         {id: 1, text: "eat"},
         {id: 2, text: "sing"},
         {id: 3, text: "wash"},
         {id: 4, text: "sleep"}
   ]
   };

   load() {
      const test = this.state.userInput;
      getCurrency(test)
         .then(yay => {
            // Success
            this.setState({
               stats: yay,
               error: null // Clear error
            });
            console.log(yay);
         })
         .catch(error => {
            console.log(error.response);
         });
   }

   componentDidMount() {
      this.load();
   }

   onClickHandler = event => {
      event.preventDefault();
      this.load();
   };

   onChangeHandler = event => {
      this.setState({ userInput: event.target.value.toUpperCase() });
   };

   addTodo = (newTodo) => {
      console.log("before", this.state.todoList)
      const newTodoObject = { 
         id: this.state.todoList.length + 1, 
         text: newTodo         
      }
      this.setState({ todoList: [...this.state.todoList, newTodoObject] })
   };

   deleteItemHandler = (a) => {
      let arr = this.state.todoList.filter(el => {
         return el.id !== a;
      });
      this.setState({ todoList: arr })
    }

   render() {
      const { stats, number, userInput, todoList } = this.state;

      return (
         <div className="App">
            <div className="hero-unit">
               <h1>Forex Generator</h1>
               <form className="form-search mt-30">
                  <input
                     onChange={this.onChangeHandler}
                     value={userInput}
                     type="text"
                     className="input-medium search-query"
                     placeholder="eg 'AUD'"
                     style={{ height: "44px", fontSize: "1.5rem" }}
                  />&nbsp;
                  <button
                     type="submit"
                     className="btn btn-large"
                     onClick={this.onClickHandler}
                  >
                     Search
                  </button>
               </form>
            </div>
            <div className="container">
               <div className="row-fluid">
                  <div className="mb-40" />
               </div>

               {!!this.state.stats ? (
                  <div className="row-fulid">
                     <h1 className="muted mb-20">Calculator</h1>
                     <span>{stats.base} </span>
                     <input
                        type="text"
                        value={number}
                        className="input-medium search-query"
                        onChange={e => {
                           this.setState({ number: e.target.value });
                        }}
                     />
                     <i
                        className="glyphicon icon-transfer"
                        style={{ margin: "1rem", cursor: "pointer" }}
                        onClick={() =>
                           alert(
                              "You wanted to swap right? Sorry that's not working 🙏"
                           )
                        }
                     />

                     <input
                        type="text"
                        value={this.state.stats.rates["JPY"] * number}
                        className="input-medium search-query"
                        onChange={e => {
                           this.setState({ number: e.target.value });
                        }}
                     />
                     <span> JPY </span>
                     <hr className="mt-40" />
                     <h1 className="muted ">Latest Stats</h1>
                     <table
                        className="table table-bordered table-hover span4 offset2"
                        style={{ width: "70%" }}
                     >
                        <tbody className="clearfix">
                           <tr>
                              <td>Currency:</td>
                              <td>{stats.base}</td>
                           </tr>
                           <tr>
                              <td>Date:</td>
                              <td>{stats.date}</td>
                           </tr>
                           <tr>
                              <td>
                                 <h3>Rates:</h3>
                              </td>
                              <td
                                 style={{ borderLeft: "1px solid transparent" }}
                              />
                           </tr>
                           {Object.entries(stats.rates).map(m => (
                              <tr key={m[1]}>
                                 <td>
                                    <p>{m[0]}</p>
                                 </td>
                                 <td>
                                    <p>{m[1]}</p>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               ) : (
                  <div className="row-fluid">
                     <h4 className="">
                        <br />Stats not loaded🙅
                     </h4>
                  </div>
               )}
               <div className="row-fluid">
                  <div className="span12">
                     <h3 className="mb-10 mt-40">
                        I'm just a random to-do list.
                     </h3>
                     <AddNewList addTodo={ this.addTodo } />
                     
                     { todoList.length !== 0 ? 
                     <List items={ todoList } deleteItem={ this.deleteItemHandler }/> :
                     <p className="mt-40">none</p>
                  }
                     
                     
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
