import React from "react";

const AddNewList = ({ addTodo }) => {
   let input;

   return (
      <div>
         <input
            ref={node => {
               input = node;
            }}
            className="input-medium search-query"
         />
         <button
            className="btn btn-success btn-medium"
            onClick={() => {
               addTodo(input.value);
               input.value = "";
            }}
         >
            Create new
         </button>
      </div>
   );
};

const List = ({ items, deleteItem, toggleCompletion, toggleAll }) => (
   <div className="wrapper">
      <div className="span-4 mb-10">
         <button
            className="pull-left"

            onClick={() => { toggleAll(items) }}
         >
            Tick/Untick all
         </button>
      </div>
      <ul>
         {items.map((m, index) => (
            <li key={index} id="test">
               <span
                  className="clickable"
                  onClick={() => toggleCompletion(items, index)}
                  >
                  {m.completed ? "️️☑️" : "🔲"}
               </span>
               <span> {m.text}</span>
               <i
                  className="glyphicon icon-trashcan pull-right"
                  onClick={() => {
                     deleteItem(m.id);
                  }}
               />
            </li>
         ))}
      </ul>
   </div>
);

export { AddNewList, List };
