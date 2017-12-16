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

const List = ({ items, deleteItem }) => (
   <ul>
      {items.map(m => (
         <li>
            {m.text}{" "}
            <i
               className="glyphicon icon-trashcan pull-right"
               onClick={ () => {
                  deleteItem(m.id)
               } }
            />
         </li>
      ))}
   </ul>
);

export { AddNewList, List };