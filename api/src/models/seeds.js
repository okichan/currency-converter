const Artist = require("./artist");

Artist.find()
   .then(artists => {
      console.log("Artists", artists);
   })
   .catch(error => {
      console.error(error);
   });

Artist.create({ name: "Psy" }
, {name: "Eve"}
, {name: "LL Cool J"}
)
   .then(artist => {
      console.log("Artist created:", artist);
   })