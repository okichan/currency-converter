const express = require("express");
const Artist = require("../models/artist");
const router = express.Router();

// show all
router.get("/artists", (req, res) => {
   Artist.find()
      .then(artists => {
         res.json(artists);
      })
      .catch(error => {
         console.error(error);
      });
});

// show one
router.get("/artists/:id", (req, res) => {
   const id = req.params.id;
   Artist.findById(id)
      .then(artist => {
         if (artist) {
            res.json(artist);
         } else {
            res.status(404).json({ error: `Artist not found with id: ${id}` });
         }
      })
      .catch(error => {
         res.status(400).json({ errorhaha: error.message });
      });
});

// create
router.post("/artists", function(req, res) {
   const attributes = req.body;
   Artist.create(attributes)
      .then(artist => {
         res.status(201).json(artist);
      })
      .catch(error => {
         res.status(400).json({ error: error });
      });
});

// update
router.put("/artists/:id", function(req, res) {
   const attributes = req.body;
   const id = req.params.id;
   Artist.findByIdAndUpdate(id, attributes, { new: true })
      .then(artist => {
         if (artist) {
            res.status(201).json(artist);
         } else {
            res.status(400).json({ error: error });
         }
      })
      .catch(error => {
         res.status(400).json({errorhaha: error})
      });
});

// delete
router.delete("/artists/:id", function(req, res) {
   const id = req.params.id;
   Artist.findByIdAndRemove(id, (err, artist) => {
      if (artist) {
         res.json(`Artist: ${artist.name} has been deleted.`);
      } else {
         res.status(400).json({ error: "data not found" });
      }
   });
});

module.exports = router;
