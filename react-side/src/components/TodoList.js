import React from "react";

const AddNewList = ({ addTodo }) => {
   let input;

   return (
      <div className="mb-20">
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

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index} >{item}</li>)
    }
  </ul>
);

export  {AddNewList, List};
