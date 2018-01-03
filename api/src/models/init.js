const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/music-api", error => {
   if (error) {
      console.error("Error found:", error);
   }
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
