// importing packages, database
const express = require('express');
const router = express.Router();

const app = require("../firebase/firebase_setup.js");
const { getDatabase, ref, child, get } = require("firebase/database");
const db = ref(getDatabase(app));

// retrieves id from url, then checks against database. Redirects user to original url if found
router.get('/:id', async (req, res) => {

  // gets url from database using id 
  get(child(db, "all/" + req.params.id)).then((idVal) => {
    if (idVal.exists()) {
      //redirects user to original url
      return res.redirect(idVal.val().originalUrl);
    } else {
      // returns 404 status if url not found
      return res.status(404).json({ message: "missing URL" });
    }
  });

});

module.exports = router;