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

const List = ({ items, deleteItem, toggleCompletion, toggleAll, editItem, editTextValue, onSubmit }) => (
   <div className="wrapper">
      <div className="span-4 mb-10">
         <button
            className="pull-left"
            onClick={() => {
               toggleAll(items);
            }}
         >
            Tick/Untick all
         </button>
      </div>
      <ul>
         {items.map((m, index) => (
            <div key={index}>
               <li key={index} id="test">
                  <span
                     className="clickable"
                     onClick={() => toggleCompletion(items, index)}
                  >
                     {m.completed ? "️️☑️" : "🔲"}
                  </span>
                  <span
                     id="todo-item"
                     onClick={() => {
                        alert("should go edit mode");
                     }}
                  >
                     {" "}
                     {m.text}
                  </span>
                  <i
                     className="glyphicon icon-trashcan pull-right"
                     onClick={() => {
                        deleteItem(m.id);
                     }}
                  />
               </li>
               <form onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target
                  const elements = form.elements
                  const newText = elements.todoText.value
                  const itemId = elements.itemId.value
                  onSubmit({ newText, itemId })
               }}>
                  <input type="text" id="name" name="todoText" defaultValue={m.text}/>
                  <input type="hidden" id="item-id" name="itemId" value={index}/>
                  <button >save changes</button>
               </form>
            </div>
         ))}
      </ul>
   </div>
);

export { AddNewList, List };
