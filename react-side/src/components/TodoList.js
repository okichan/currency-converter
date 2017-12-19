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

const List = ({
   items,
   deleteItem,
   toggleCompletion,
   toggleAll,
   editItem,
   editTextValue,
   onSubmit,
   showEditForm
}) => (
   <div className="wrapper">
      <div className="span-4 mb-10">
         <button
            className="btn btn-info pull-left"
            onClick={() => {
               toggleAll(items);
            }}
         >
            <i className="glyphicon icon-checkmark-4" />
         </button>
      </div>
      <ul>
         {items.map((m, index) => (
            <div key={index}>
               <li key={index}>
                  <span
                     className="clickable"
                     onClick={() => toggleCompletion(items, index)}
                  >
                     {m.completed ? (
                        <i className="glyphicon icon-checkbox-checked" />
                     ) : (
                        <i className="glyphicon icon-checkbox-unchecked" />
                     )}
                  </span>
                  <span id="todo-item" onClick={() => showEditForm(index)}>
                     {" "}
                     {m.text}
                  </span>
                  <i
                     className="glyphicon icon-trashcan pull-right"
                     id="trashcan"
                     onClick={() => {
                        deleteItem(m.id);
                     }}
                  />
               </li>
               <form
                  id={`form-${index}`}
                  className="hidden"
                  onSubmit={e => {
                     e.preventDefault();
                     const form = e.target;
                     const elements = form.elements;
                     const newText = elements.todoText.value;
                     const itemId = elements.itemId.value;
                     onSubmit({ newText, itemId });
                  }}
               >
                  <input
                     type="text"
                     id="name"
                     name="todoText"
                     defaultValue={m.text}
                  />
                  <input
                     type="hidden"
                     id="item-id"
                     name="itemId"
                     value={index}
                  />
                  <span>
                     <i className="icon-disk" />
                  </span>
               </form>
            </div>
         ))}
      </ul>
   </div>
);

export { AddNewList, List };
