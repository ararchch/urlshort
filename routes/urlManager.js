//importing packages
const express = require('express');
const app = require('../firebase/firebase_setup');
const { getDatabase, ref, set } = require("firebase/database");

//calling database
const db = getDatabase(app);
const router = express.Router();

//base url for shortened domains
let primary = `http://localhost:3000`;

//post request updates long url in database
router.post('/', async (req, res) => {
    
    // get original url from message body
    let { originalUrl } = req.body;
    
    // Creates shortened id using a random number generator 
    // This has apotential limitation of running out of numbers/generating 
    // the same number but the probability is low
    let newUrlId = Math.floor(Math.random() * 1000000).toString();

    const newUrl = primary +'/' + newUrlId;
    
    // adds to database
    const add = async () => {

        await set(ref(db, "all/" + newUrlId), { originalUrl, newUrl, newUrlId});
        
        // returns 200 status with new url if successful
        res.status(200).json({ url: newUrl });

    };
    add();
});

module.exports = router;