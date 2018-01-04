import React from "react";

const ArtistsList = ({ artists }) => {
   return (
      <ul>
         { artists.map(m => <p>{ m.name }</p>) }
      </ul>
   )
};
export { ArtistsList };
