import React from "react";

const ArtistList = ({ artists }) => {
   return <ul>{artists.map(m => <li key={ m._id }>{m.name}</li>)}</ul>;
};

const ArtistForm = ({ onSubmit }) => {
   let input = '';
   return (
      <form
         onSubmit={event => {
            // Prevent old-school form submission
            event.preventDefault();

            const form = event.target;
            const elements = form.elements; // Allows looking up fields using their 'name' attributes
            // Get entered values from fields
            const name = elements.name.value;
            if (input.value.length === 0) {
               alert('Please enter something.')
            } else {
               // Pass this information along to the parent component
               onSubmit({ name });
               input.value = ''
            }
         }}
      >
         <input
            type="text"
            name="name"
            ref={node => {
              input = node;
            }}
         />
         <button> Create artist </button>
      </form>
   );
};

export { ArtistList, ArtistForm };
