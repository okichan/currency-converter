import React from "react";

const AddNewList = ({ addTodo }) => {
   let input;

   return (
      <div className="input-append">
         <input
            ref={node => {
               input = node;
            }}
            type="text"
            className="input-medium search-query"
         />
         <button
            className="btn "
            onClick={() => {
               addTodo(input.value);
               input.value = "";
            }}
         >
            <i className=" icon-plus" />
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
      <ul>
         <div ><p>&nbsp;
            <i
               className="glyphicon icon-checkmark-4 pull-left clickable"
               id="toggle-all"
               onClick={() => {
                  toggleAll(items);
                  
               }}
               />
               </p>
         </div>
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
                     style={{ width: "80%" }}
                  />
                  <input
                     type="hidden"
                     id="item-id"
                     name="itemId"
                     value={index}
                  />
                  {/* <span>
                     <i className="icon-disk" />
                  </span> */}
               </form>
            </div>
         ))}
      </ul>
   </div>
);

export { AddNewList, List };
